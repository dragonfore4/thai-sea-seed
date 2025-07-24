import * as fs from 'fs';
import * as path from 'path';
import IBM from 'ibm-cos-sdk';


const cos = new IBM.S3({
  endpoint: 'https://s3.us-east.cloud-object-storage.appdomain.cloud',
  accessKeyId: process.env.IBM_COS_ACCESS_KEY_ID,
  secretAccessKey: process.env.IBM_COS_SECRET_ACCESS_KEY,
});

const ROOT_FOLDER = path.join(__dirname, 'fish_images');
const BUCKET_NAME = process.env.IBM_BUCKET_NAME || 'intern-bucket';

async function uploadFile(filePath: string, folderName: string) {
  const fileContent = fs.readFileSync(filePath);
  const fileName = path.basename(filePath);
  const ext = path.extname(fileName).slice(1) || 'bin';
  const baseName = path.basename(fileName, path.extname(fileName));
  const newFilename = `${folderName}-${baseName}.${ext}`;

  const BUCKET_NAME = process.env.IBM_BUCKET_NAME || 'fish-image-bucket';

  try {
    await cos
      .putObject({
        Bucket: BUCKET_NAME,
        Key: newFilename,
        Body: fileContent,
        ACL: 'public-read',
      })
      .promise();

    const imageUrl = `https://${BUCKET_NAME}.s3.us-east.cloud-object-storage.appdomain.cloud/${newFilename}`;
    console.log(`✅ Uploaded: ${folderName}/${fileName} → ${imageUrl}`);
  } catch (err) {
    console.error(`❌ Failed to upload ${fileName}:`, err);
  }
}

async function uploadAllFishImages() {
  const folders = fs.readdirSync(ROOT_FOLDER).filter(f =>
    fs.statSync(path.join(ROOT_FOLDER, f)).isDirectory()
  );

  let totalFiles = 0;
  const images_url:[] = [];
  for (const folder of folders) {
    const folderPath = path.join(ROOT_FOLDER, folder);
    const images = fs.readdirSync(folderPath).filter(file =>
      /\.(jpe?g|png|webp|gif)$/i.test(file)
    );
    
    for (const image of images) {
      if (image.includes("001.")) {
        const fullPath = path.join(folderPath, image);
        images_url.push(`https://${BUCKET_NAME}.s3.us-east.cloud-object-storage.appdomain.cloud/fish-image/${folder}/${image}`);
        // console.log(fullPath)
        totalFiles++;
        // await uploadFile(fullPath, folder);
      }
    }
  }
  console.log(totalFiles)
  console.log(images_url.length)
}

uploadAllFishImages();
