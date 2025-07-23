
import { readFileSync } from 'fs'
import path from 'path'

const list = [
  'avg-age.txt',
  'avg-depth-level.txt',
  'avg-length.txt',
  'avg-weight.txt',
  'description.txt',
  'fishname.txt',
  'fishNameThai.txt',
  'habitat.txt',
  'order-name.txt',
  'physical-description.txt',
  'scientific-name.txt',
]

const selectNumber = 11;

const filename = list[selectNumber - 1]
if (!filename) {
  throw new Error('Filename is not defined');
}


const filePath = path.join(__dirname, 'txt', filename);

const data = readFileSync(filePath, 'utf-8');

const dataArray = data.split('\n').map(line => {
  const trimmed = line.trim();
  return trimmed === '' ? 'Undetected' : trimmed;
});

console.log(dataArray);
console.log(dataArray.length);
