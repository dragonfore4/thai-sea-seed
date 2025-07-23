
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model FishFamily
 * *
 *  * Fish Family
 *  * For categorize fish by family
 */
export type FishFamily = $Result.DefaultSelection<Prisma.$FishFamilyPayload>
/**
 * Model FishRarity
 * *
 *  * Fish Rarity
 *  * For categorize fish by rarity
 *  * 1. พบบ่อย
 *  * 2. หายาก
 *  * 3. ใกล้สูญพันธุ์
 */
export type FishRarity = $Result.DefaultSelection<Prisma.$FishRarityPayload>
/**
 * Model Fish
 * 
 */
export type Fish = $Result.DefaultSelection<Prisma.$FishPayload>
/**
 * Model DetectionHistory
 * *
 *  * Detection History
 *  * For record detection history
 */
export type DetectionHistory = $Result.DefaultSelection<Prisma.$DetectionHistoryPayload>
/**
 * Model DetectionResult
 * 
 */
export type DetectionResult = $Result.DefaultSelection<Prisma.$DetectionResultPayload>
/**
 * Model UserPointHistory
 * *
 *  * User Point History
 *  * For record user point history
 */
export type UserPointHistory = $Result.DefaultSelection<Prisma.$UserPointHistoryPayload>
/**
 * Model Mission
 * *
 *  * Mission
 *  * For record mission
 */
export type Mission = $Result.DefaultSelection<Prisma.$MissionPayload>
/**
 * Model MissionDetailTarget
 * *
 *  * Mission Detail Target
 *  * For record mission detail target
 */
export type MissionDetailTarget = $Result.DefaultSelection<Prisma.$MissionDetailTargetPayload>
/**
 * Model UserMissionProgress
 * *
 *  * User Mission Progress
 *  * For record user mission progress
 */
export type UserMissionProgress = $Result.DefaultSelection<Prisma.$UserMissionProgressPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fishFamily`: Exposes CRUD operations for the **FishFamily** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FishFamilies
    * const fishFamilies = await prisma.fishFamily.findMany()
    * ```
    */
  get fishFamily(): Prisma.FishFamilyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fishRarity`: Exposes CRUD operations for the **FishRarity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FishRarities
    * const fishRarities = await prisma.fishRarity.findMany()
    * ```
    */
  get fishRarity(): Prisma.FishRarityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fish`: Exposes CRUD operations for the **Fish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fish
    * const fish = await prisma.fish.findMany()
    * ```
    */
  get fish(): Prisma.FishDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detectionHistory`: Exposes CRUD operations for the **DetectionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetectionHistories
    * const detectionHistories = await prisma.detectionHistory.findMany()
    * ```
    */
  get detectionHistory(): Prisma.DetectionHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detectionResult`: Exposes CRUD operations for the **DetectionResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetectionResults
    * const detectionResults = await prisma.detectionResult.findMany()
    * ```
    */
  get detectionResult(): Prisma.DetectionResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPointHistory`: Exposes CRUD operations for the **UserPointHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPointHistories
    * const userPointHistories = await prisma.userPointHistory.findMany()
    * ```
    */
  get userPointHistory(): Prisma.UserPointHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mission`: Exposes CRUD operations for the **Mission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missions
    * const missions = await prisma.mission.findMany()
    * ```
    */
  get mission(): Prisma.MissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missionDetailTarget`: Exposes CRUD operations for the **MissionDetailTarget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MissionDetailTargets
    * const missionDetailTargets = await prisma.missionDetailTarget.findMany()
    * ```
    */
  get missionDetailTarget(): Prisma.MissionDetailTargetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userMissionProgress`: Exposes CRUD operations for the **UserMissionProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMissionProgresses
    * const userMissionProgresses = await prisma.userMissionProgress.findMany()
    * ```
    */
  get userMissionProgress(): Prisma.UserMissionProgressDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    FishFamily: 'FishFamily',
    FishRarity: 'FishRarity',
    Fish: 'Fish',
    DetectionHistory: 'DetectionHistory',
    DetectionResult: 'DetectionResult',
    UserPointHistory: 'UserPointHistory',
    Mission: 'Mission',
    MissionDetailTarget: 'MissionDetailTarget',
    UserMissionProgress: 'UserMissionProgress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "account" | "verification" | "fishFamily" | "fishRarity" | "fish" | "detectionHistory" | "detectionResult" | "userPointHistory" | "mission" | "missionDetailTarget" | "userMissionProgress"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SessionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SessionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccountFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccountAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VerificationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VerificationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      FishFamily: {
        payload: Prisma.$FishFamilyPayload<ExtArgs>
        fields: Prisma.FishFamilyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FishFamilyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishFamilyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FishFamilyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishFamilyPayload>
          }
          findFirst: {
            args: Prisma.FishFamilyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishFamilyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FishFamilyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishFamilyPayload>
          }
          findMany: {
            args: Prisma.FishFamilyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishFamilyPayload>[]
          }
          create: {
            args: Prisma.FishFamilyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishFamilyPayload>
          }
          createMany: {
            args: Prisma.FishFamilyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FishFamilyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishFamilyPayload>
          }
          update: {
            args: Prisma.FishFamilyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishFamilyPayload>
          }
          deleteMany: {
            args: Prisma.FishFamilyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FishFamilyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FishFamilyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishFamilyPayload>
          }
          aggregate: {
            args: Prisma.FishFamilyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFishFamily>
          }
          groupBy: {
            args: Prisma.FishFamilyGroupByArgs<ExtArgs>
            result: $Utils.Optional<FishFamilyGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FishFamilyFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FishFamilyAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FishFamilyCountArgs<ExtArgs>
            result: $Utils.Optional<FishFamilyCountAggregateOutputType> | number
          }
        }
      }
      FishRarity: {
        payload: Prisma.$FishRarityPayload<ExtArgs>
        fields: Prisma.FishRarityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FishRarityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishRarityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FishRarityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishRarityPayload>
          }
          findFirst: {
            args: Prisma.FishRarityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishRarityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FishRarityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishRarityPayload>
          }
          findMany: {
            args: Prisma.FishRarityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishRarityPayload>[]
          }
          create: {
            args: Prisma.FishRarityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishRarityPayload>
          }
          createMany: {
            args: Prisma.FishRarityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FishRarityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishRarityPayload>
          }
          update: {
            args: Prisma.FishRarityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishRarityPayload>
          }
          deleteMany: {
            args: Prisma.FishRarityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FishRarityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FishRarityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishRarityPayload>
          }
          aggregate: {
            args: Prisma.FishRarityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFishRarity>
          }
          groupBy: {
            args: Prisma.FishRarityGroupByArgs<ExtArgs>
            result: $Utils.Optional<FishRarityGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FishRarityFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FishRarityAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FishRarityCountArgs<ExtArgs>
            result: $Utils.Optional<FishRarityCountAggregateOutputType> | number
          }
        }
      }
      Fish: {
        payload: Prisma.$FishPayload<ExtArgs>
        fields: Prisma.FishFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FishFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FishFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishPayload>
          }
          findFirst: {
            args: Prisma.FishFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FishFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishPayload>
          }
          findMany: {
            args: Prisma.FishFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishPayload>[]
          }
          create: {
            args: Prisma.FishCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishPayload>
          }
          createMany: {
            args: Prisma.FishCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FishDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishPayload>
          }
          update: {
            args: Prisma.FishUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishPayload>
          }
          deleteMany: {
            args: Prisma.FishDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FishUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FishUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FishPayload>
          }
          aggregate: {
            args: Prisma.FishAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFish>
          }
          groupBy: {
            args: Prisma.FishGroupByArgs<ExtArgs>
            result: $Utils.Optional<FishGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FishFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FishAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FishCountArgs<ExtArgs>
            result: $Utils.Optional<FishCountAggregateOutputType> | number
          }
        }
      }
      DetectionHistory: {
        payload: Prisma.$DetectionHistoryPayload<ExtArgs>
        fields: Prisma.DetectionHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetectionHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetectionHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionHistoryPayload>
          }
          findFirst: {
            args: Prisma.DetectionHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetectionHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionHistoryPayload>
          }
          findMany: {
            args: Prisma.DetectionHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionHistoryPayload>[]
          }
          create: {
            args: Prisma.DetectionHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionHistoryPayload>
          }
          createMany: {
            args: Prisma.DetectionHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DetectionHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionHistoryPayload>
          }
          update: {
            args: Prisma.DetectionHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionHistoryPayload>
          }
          deleteMany: {
            args: Prisma.DetectionHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetectionHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DetectionHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionHistoryPayload>
          }
          aggregate: {
            args: Prisma.DetectionHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetectionHistory>
          }
          groupBy: {
            args: Prisma.DetectionHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetectionHistoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DetectionHistoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DetectionHistoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DetectionHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<DetectionHistoryCountAggregateOutputType> | number
          }
        }
      }
      DetectionResult: {
        payload: Prisma.$DetectionResultPayload<ExtArgs>
        fields: Prisma.DetectionResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetectionResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetectionResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionResultPayload>
          }
          findFirst: {
            args: Prisma.DetectionResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetectionResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionResultPayload>
          }
          findMany: {
            args: Prisma.DetectionResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionResultPayload>[]
          }
          create: {
            args: Prisma.DetectionResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionResultPayload>
          }
          createMany: {
            args: Prisma.DetectionResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DetectionResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionResultPayload>
          }
          update: {
            args: Prisma.DetectionResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionResultPayload>
          }
          deleteMany: {
            args: Prisma.DetectionResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetectionResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DetectionResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionResultPayload>
          }
          aggregate: {
            args: Prisma.DetectionResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetectionResult>
          }
          groupBy: {
            args: Prisma.DetectionResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetectionResultGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DetectionResultFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DetectionResultAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DetectionResultCountArgs<ExtArgs>
            result: $Utils.Optional<DetectionResultCountAggregateOutputType> | number
          }
        }
      }
      UserPointHistory: {
        payload: Prisma.$UserPointHistoryPayload<ExtArgs>
        fields: Prisma.UserPointHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPointHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPointHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointHistoryPayload>
          }
          findFirst: {
            args: Prisma.UserPointHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPointHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointHistoryPayload>
          }
          findMany: {
            args: Prisma.UserPointHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointHistoryPayload>[]
          }
          create: {
            args: Prisma.UserPointHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointHistoryPayload>
          }
          createMany: {
            args: Prisma.UserPointHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserPointHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointHistoryPayload>
          }
          update: {
            args: Prisma.UserPointHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointHistoryPayload>
          }
          deleteMany: {
            args: Prisma.UserPointHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPointHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPointHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointHistoryPayload>
          }
          aggregate: {
            args: Prisma.UserPointHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPointHistory>
          }
          groupBy: {
            args: Prisma.UserPointHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPointHistoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserPointHistoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserPointHistoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserPointHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<UserPointHistoryCountAggregateOutputType> | number
          }
        }
      }
      Mission: {
        payload: Prisma.$MissionPayload<ExtArgs>
        fields: Prisma.MissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findFirst: {
            args: Prisma.MissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findMany: {
            args: Prisma.MissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          create: {
            args: Prisma.MissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          createMany: {
            args: Prisma.MissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          update: {
            args: Prisma.MissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          deleteMany: {
            args: Prisma.MissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          aggregate: {
            args: Prisma.MissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMission>
          }
          groupBy: {
            args: Prisma.MissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MissionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MissionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MissionCountArgs<ExtArgs>
            result: $Utils.Optional<MissionCountAggregateOutputType> | number
          }
        }
      }
      MissionDetailTarget: {
        payload: Prisma.$MissionDetailTargetPayload<ExtArgs>
        fields: Prisma.MissionDetailTargetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionDetailTargetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionDetailTargetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionDetailTargetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionDetailTargetPayload>
          }
          findFirst: {
            args: Prisma.MissionDetailTargetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionDetailTargetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionDetailTargetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionDetailTargetPayload>
          }
          findMany: {
            args: Prisma.MissionDetailTargetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionDetailTargetPayload>[]
          }
          create: {
            args: Prisma.MissionDetailTargetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionDetailTargetPayload>
          }
          createMany: {
            args: Prisma.MissionDetailTargetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MissionDetailTargetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionDetailTargetPayload>
          }
          update: {
            args: Prisma.MissionDetailTargetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionDetailTargetPayload>
          }
          deleteMany: {
            args: Prisma.MissionDetailTargetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionDetailTargetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MissionDetailTargetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionDetailTargetPayload>
          }
          aggregate: {
            args: Prisma.MissionDetailTargetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissionDetailTarget>
          }
          groupBy: {
            args: Prisma.MissionDetailTargetGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionDetailTargetGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MissionDetailTargetFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MissionDetailTargetAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MissionDetailTargetCountArgs<ExtArgs>
            result: $Utils.Optional<MissionDetailTargetCountAggregateOutputType> | number
          }
        }
      }
      UserMissionProgress: {
        payload: Prisma.$UserMissionProgressPayload<ExtArgs>
        fields: Prisma.UserMissionProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMissionProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMissionProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionProgressPayload>
          }
          findFirst: {
            args: Prisma.UserMissionProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMissionProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionProgressPayload>
          }
          findMany: {
            args: Prisma.UserMissionProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionProgressPayload>[]
          }
          create: {
            args: Prisma.UserMissionProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionProgressPayload>
          }
          createMany: {
            args: Prisma.UserMissionProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserMissionProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionProgressPayload>
          }
          update: {
            args: Prisma.UserMissionProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserMissionProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserMissionProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserMissionProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionProgressPayload>
          }
          aggregate: {
            args: Prisma.UserMissionProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMissionProgress>
          }
          groupBy: {
            args: Prisma.UserMissionProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMissionProgressGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserMissionProgressFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserMissionProgressAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserMissionProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserMissionProgressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    fishFamily?: FishFamilyOmit
    fishRarity?: FishRarityOmit
    fish?: FishOmit
    detectionHistory?: DetectionHistoryOmit
    detectionResult?: DetectionResultOmit
    userPointHistory?: UserPointHistoryOmit
    mission?: MissionOmit
    missionDetailTarget?: MissionDetailTargetOmit
    userMissionProgress?: UserMissionProgressOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    detectionHistory: number
    userPointHistory: number
    userMissionProgress: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    detectionHistory?: boolean | UserCountOutputTypeCountDetectionHistoryArgs
    userPointHistory?: boolean | UserCountOutputTypeCountUserPointHistoryArgs
    userMissionProgress?: boolean | UserCountOutputTypeCountUserMissionProgressArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDetectionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetectionHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPointHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPointHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserMissionProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMissionProgressWhereInput
  }


  /**
   * Count Type FishFamilyCountOutputType
   */

  export type FishFamilyCountOutputType = {
    fishes: number
  }

  export type FishFamilyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fishes?: boolean | FishFamilyCountOutputTypeCountFishesArgs
  }

  // Custom InputTypes
  /**
   * FishFamilyCountOutputType without action
   */
  export type FishFamilyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishFamilyCountOutputType
     */
    select?: FishFamilyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FishFamilyCountOutputType without action
   */
  export type FishFamilyCountOutputTypeCountFishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FishWhereInput
  }


  /**
   * Count Type FishRarityCountOutputType
   */

  export type FishRarityCountOutputType = {
    fishes: number
  }

  export type FishRarityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fishes?: boolean | FishRarityCountOutputTypeCountFishesArgs
  }

  // Custom InputTypes
  /**
   * FishRarityCountOutputType without action
   */
  export type FishRarityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishRarityCountOutputType
     */
    select?: FishRarityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FishRarityCountOutputType without action
   */
  export type FishRarityCountOutputTypeCountFishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FishWhereInput
  }


  /**
   * Count Type FishCountOutputType
   */

  export type FishCountOutputType = {
    detectionResults: number
    userMissionProgress: number
    userPointHistories: number
    missionDetailTargets: number
  }

  export type FishCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detectionResults?: boolean | FishCountOutputTypeCountDetectionResultsArgs
    userMissionProgress?: boolean | FishCountOutputTypeCountUserMissionProgressArgs
    userPointHistories?: boolean | FishCountOutputTypeCountUserPointHistoriesArgs
    missionDetailTargets?: boolean | FishCountOutputTypeCountMissionDetailTargetsArgs
  }

  // Custom InputTypes
  /**
   * FishCountOutputType without action
   */
  export type FishCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishCountOutputType
     */
    select?: FishCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FishCountOutputType without action
   */
  export type FishCountOutputTypeCountDetectionResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetectionResultWhereInput
  }

  /**
   * FishCountOutputType without action
   */
  export type FishCountOutputTypeCountUserMissionProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMissionProgressWhereInput
  }

  /**
   * FishCountOutputType without action
   */
  export type FishCountOutputTypeCountUserPointHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPointHistoryWhereInput
  }

  /**
   * FishCountOutputType without action
   */
  export type FishCountOutputTypeCountMissionDetailTargetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionDetailTargetWhereInput
  }


  /**
   * Count Type DetectionHistoryCountOutputType
   */

  export type DetectionHistoryCountOutputType = {
    detectionResults: number
  }

  export type DetectionHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detectionResults?: boolean | DetectionHistoryCountOutputTypeCountDetectionResultsArgs
  }

  // Custom InputTypes
  /**
   * DetectionHistoryCountOutputType without action
   */
  export type DetectionHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionHistoryCountOutputType
     */
    select?: DetectionHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DetectionHistoryCountOutputType without action
   */
  export type DetectionHistoryCountOutputTypeCountDetectionResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetectionResultWhereInput
  }


  /**
   * Count Type MissionCountOutputType
   */

  export type MissionCountOutputType = {
    detailTargets: number
    userProgresses: number
    pointHistories: number
  }

  export type MissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detailTargets?: boolean | MissionCountOutputTypeCountDetailTargetsArgs
    userProgresses?: boolean | MissionCountOutputTypeCountUserProgressesArgs
    pointHistories?: boolean | MissionCountOutputTypeCountPointHistoriesArgs
  }

  // Custom InputTypes
  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCountOutputType
     */
    select?: MissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeCountDetailTargetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionDetailTargetWhereInput
  }

  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeCountUserProgressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMissionProgressWhereInput
  }

  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeCountPointHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPointHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    detectionHistory?: boolean | User$detectionHistoryArgs<ExtArgs>
    userPointHistory?: boolean | User$userPointHistoryArgs<ExtArgs>
    userMissionProgress?: boolean | User$userMissionProgressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    detectionHistory?: boolean | User$detectionHistoryArgs<ExtArgs>
    userPointHistory?: boolean | User$userPointHistoryArgs<ExtArgs>
    userMissionProgress?: boolean | User$userMissionProgressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      detectionHistory: Prisma.$DetectionHistoryPayload<ExtArgs>[]
      userPointHistory: Prisma.$UserPointHistoryPayload<ExtArgs>[]
      userMissionProgress: Prisma.$UserMissionProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detectionHistory<T extends User$detectionHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$detectionHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetectionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userPointHistory<T extends User$userPointHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$userPointHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPointHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userMissionProgress<T extends User$userMissionProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$userMissionProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMissionProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.detectionHistory
   */
  export type User$detectionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionHistory
     */
    select?: DetectionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionHistory
     */
    omit?: DetectionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionHistoryInclude<ExtArgs> | null
    where?: DetectionHistoryWhereInput
    orderBy?: DetectionHistoryOrderByWithRelationInput | DetectionHistoryOrderByWithRelationInput[]
    cursor?: DetectionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetectionHistoryScalarFieldEnum | DetectionHistoryScalarFieldEnum[]
  }

  /**
   * User.userPointHistory
   */
  export type User$userPointHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPointHistory
     */
    select?: UserPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPointHistory
     */
    omit?: UserPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointHistoryInclude<ExtArgs> | null
    where?: UserPointHistoryWhereInput
    orderBy?: UserPointHistoryOrderByWithRelationInput | UserPointHistoryOrderByWithRelationInput[]
    cursor?: UserPointHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPointHistoryScalarFieldEnum | UserPointHistoryScalarFieldEnum[]
  }

  /**
   * User.userMissionProgress
   */
  export type User$userMissionProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMissionProgress
     */
    select?: UserMissionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMissionProgress
     */
    omit?: UserMissionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionProgressInclude<ExtArgs> | null
    where?: UserMissionProgressWhereInput
    orderBy?: UserMissionProgressOrderByWithRelationInput | UserMissionProgressOrderByWithRelationInput[]
    cursor?: UserMissionProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMissionProgressScalarFieldEnum | UserMissionProgressScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * @param {SessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const session = await prisma.session.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SessionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Session.
     * @param {SessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const session = await prisma.session.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SessionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session findRaw
   */
  export type SessionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session aggregateRaw
   */
  export type SessionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * @param {AccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const account = await prisma.account.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AccountFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Account.
     * @param {AccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const account = await prisma.account.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AccountAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account findRaw
   */
  export type AccountFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account aggregateRaw
   */
  export type AccountAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>



  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * @param {VerificationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const verification = await prisma.verification.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VerificationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Verification.
     * @param {VerificationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const verification = await prisma.verification.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VerificationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification findRaw
   */
  export type VerificationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Verification aggregateRaw
   */
  export type VerificationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model FishFamily
   */

  export type AggregateFishFamily = {
    _count: FishFamilyCountAggregateOutputType | null
    _min: FishFamilyMinAggregateOutputType | null
    _max: FishFamilyMaxAggregateOutputType | null
  }

  export type FishFamilyMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FishFamilyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FishFamilyCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FishFamilyMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FishFamilyMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FishFamilyCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FishFamilyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FishFamily to aggregate.
     */
    where?: FishFamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FishFamilies to fetch.
     */
    orderBy?: FishFamilyOrderByWithRelationInput | FishFamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FishFamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FishFamilies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FishFamilies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FishFamilies
    **/
    _count?: true | FishFamilyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FishFamilyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FishFamilyMaxAggregateInputType
  }

  export type GetFishFamilyAggregateType<T extends FishFamilyAggregateArgs> = {
        [P in keyof T & keyof AggregateFishFamily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFishFamily[P]>
      : GetScalarType<T[P], AggregateFishFamily[P]>
  }




  export type FishFamilyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FishFamilyWhereInput
    orderBy?: FishFamilyOrderByWithAggregationInput | FishFamilyOrderByWithAggregationInput[]
    by: FishFamilyScalarFieldEnum[] | FishFamilyScalarFieldEnum
    having?: FishFamilyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FishFamilyCountAggregateInputType | true
    _min?: FishFamilyMinAggregateInputType
    _max?: FishFamilyMaxAggregateInputType
  }

  export type FishFamilyGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: FishFamilyCountAggregateOutputType | null
    _min: FishFamilyMinAggregateOutputType | null
    _max: FishFamilyMaxAggregateOutputType | null
  }

  type GetFishFamilyGroupByPayload<T extends FishFamilyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FishFamilyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FishFamilyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FishFamilyGroupByOutputType[P]>
            : GetScalarType<T[P], FishFamilyGroupByOutputType[P]>
        }
      >
    >


  export type FishFamilySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fishes?: boolean | FishFamily$fishesArgs<ExtArgs>
    _count?: boolean | FishFamilyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fishFamily"]>



  export type FishFamilySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FishFamilyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["fishFamily"]>
  export type FishFamilyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fishes?: boolean | FishFamily$fishesArgs<ExtArgs>
    _count?: boolean | FishFamilyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FishFamilyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FishFamily"
    objects: {
      fishes: Prisma.$FishPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fishFamily"]>
    composites: {}
  }

  type FishFamilyGetPayload<S extends boolean | null | undefined | FishFamilyDefaultArgs> = $Result.GetResult<Prisma.$FishFamilyPayload, S>

  type FishFamilyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FishFamilyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FishFamilyCountAggregateInputType | true
    }

  export interface FishFamilyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FishFamily'], meta: { name: 'FishFamily' } }
    /**
     * Find zero or one FishFamily that matches the filter.
     * @param {FishFamilyFindUniqueArgs} args - Arguments to find a FishFamily
     * @example
     * // Get one FishFamily
     * const fishFamily = await prisma.fishFamily.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FishFamilyFindUniqueArgs>(args: SelectSubset<T, FishFamilyFindUniqueArgs<ExtArgs>>): Prisma__FishFamilyClient<$Result.GetResult<Prisma.$FishFamilyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FishFamily that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FishFamilyFindUniqueOrThrowArgs} args - Arguments to find a FishFamily
     * @example
     * // Get one FishFamily
     * const fishFamily = await prisma.fishFamily.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FishFamilyFindUniqueOrThrowArgs>(args: SelectSubset<T, FishFamilyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FishFamilyClient<$Result.GetResult<Prisma.$FishFamilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FishFamily that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishFamilyFindFirstArgs} args - Arguments to find a FishFamily
     * @example
     * // Get one FishFamily
     * const fishFamily = await prisma.fishFamily.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FishFamilyFindFirstArgs>(args?: SelectSubset<T, FishFamilyFindFirstArgs<ExtArgs>>): Prisma__FishFamilyClient<$Result.GetResult<Prisma.$FishFamilyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FishFamily that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishFamilyFindFirstOrThrowArgs} args - Arguments to find a FishFamily
     * @example
     * // Get one FishFamily
     * const fishFamily = await prisma.fishFamily.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FishFamilyFindFirstOrThrowArgs>(args?: SelectSubset<T, FishFamilyFindFirstOrThrowArgs<ExtArgs>>): Prisma__FishFamilyClient<$Result.GetResult<Prisma.$FishFamilyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FishFamilies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishFamilyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FishFamilies
     * const fishFamilies = await prisma.fishFamily.findMany()
     * 
     * // Get first 10 FishFamilies
     * const fishFamilies = await prisma.fishFamily.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fishFamilyWithIdOnly = await prisma.fishFamily.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FishFamilyFindManyArgs>(args?: SelectSubset<T, FishFamilyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FishFamilyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FishFamily.
     * @param {FishFamilyCreateArgs} args - Arguments to create a FishFamily.
     * @example
     * // Create one FishFamily
     * const FishFamily = await prisma.fishFamily.create({
     *   data: {
     *     // ... data to create a FishFamily
     *   }
     * })
     * 
     */
    create<T extends FishFamilyCreateArgs>(args: SelectSubset<T, FishFamilyCreateArgs<ExtArgs>>): Prisma__FishFamilyClient<$Result.GetResult<Prisma.$FishFamilyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FishFamilies.
     * @param {FishFamilyCreateManyArgs} args - Arguments to create many FishFamilies.
     * @example
     * // Create many FishFamilies
     * const fishFamily = await prisma.fishFamily.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FishFamilyCreateManyArgs>(args?: SelectSubset<T, FishFamilyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FishFamily.
     * @param {FishFamilyDeleteArgs} args - Arguments to delete one FishFamily.
     * @example
     * // Delete one FishFamily
     * const FishFamily = await prisma.fishFamily.delete({
     *   where: {
     *     // ... filter to delete one FishFamily
     *   }
     * })
     * 
     */
    delete<T extends FishFamilyDeleteArgs>(args: SelectSubset<T, FishFamilyDeleteArgs<ExtArgs>>): Prisma__FishFamilyClient<$Result.GetResult<Prisma.$FishFamilyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FishFamily.
     * @param {FishFamilyUpdateArgs} args - Arguments to update one FishFamily.
     * @example
     * // Update one FishFamily
     * const fishFamily = await prisma.fishFamily.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FishFamilyUpdateArgs>(args: SelectSubset<T, FishFamilyUpdateArgs<ExtArgs>>): Prisma__FishFamilyClient<$Result.GetResult<Prisma.$FishFamilyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FishFamilies.
     * @param {FishFamilyDeleteManyArgs} args - Arguments to filter FishFamilies to delete.
     * @example
     * // Delete a few FishFamilies
     * const { count } = await prisma.fishFamily.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FishFamilyDeleteManyArgs>(args?: SelectSubset<T, FishFamilyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FishFamilies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishFamilyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FishFamilies
     * const fishFamily = await prisma.fishFamily.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FishFamilyUpdateManyArgs>(args: SelectSubset<T, FishFamilyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FishFamily.
     * @param {FishFamilyUpsertArgs} args - Arguments to update or create a FishFamily.
     * @example
     * // Update or create a FishFamily
     * const fishFamily = await prisma.fishFamily.upsert({
     *   create: {
     *     // ... data to create a FishFamily
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FishFamily we want to update
     *   }
     * })
     */
    upsert<T extends FishFamilyUpsertArgs>(args: SelectSubset<T, FishFamilyUpsertArgs<ExtArgs>>): Prisma__FishFamilyClient<$Result.GetResult<Prisma.$FishFamilyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FishFamilies that matches the filter.
     * @param {FishFamilyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const fishFamily = await prisma.fishFamily.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FishFamilyFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FishFamily.
     * @param {FishFamilyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const fishFamily = await prisma.fishFamily.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FishFamilyAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of FishFamilies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishFamilyCountArgs} args - Arguments to filter FishFamilies to count.
     * @example
     * // Count the number of FishFamilies
     * const count = await prisma.fishFamily.count({
     *   where: {
     *     // ... the filter for the FishFamilies we want to count
     *   }
     * })
    **/
    count<T extends FishFamilyCountArgs>(
      args?: Subset<T, FishFamilyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FishFamilyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FishFamily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishFamilyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FishFamilyAggregateArgs>(args: Subset<T, FishFamilyAggregateArgs>): Prisma.PrismaPromise<GetFishFamilyAggregateType<T>>

    /**
     * Group by FishFamily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishFamilyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FishFamilyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FishFamilyGroupByArgs['orderBy'] }
        : { orderBy?: FishFamilyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FishFamilyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFishFamilyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FishFamily model
   */
  readonly fields: FishFamilyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FishFamily.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FishFamilyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fishes<T extends FishFamily$fishesArgs<ExtArgs> = {}>(args?: Subset<T, FishFamily$fishesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FishFamily model
   */
  interface FishFamilyFieldRefs {
    readonly id: FieldRef<"FishFamily", 'String'>
    readonly name: FieldRef<"FishFamily", 'String'>
    readonly description: FieldRef<"FishFamily", 'String'>
    readonly createdAt: FieldRef<"FishFamily", 'DateTime'>
    readonly updatedAt: FieldRef<"FishFamily", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FishFamily findUnique
   */
  export type FishFamilyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishFamily
     */
    select?: FishFamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishFamily
     */
    omit?: FishFamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishFamilyInclude<ExtArgs> | null
    /**
     * Filter, which FishFamily to fetch.
     */
    where: FishFamilyWhereUniqueInput
  }

  /**
   * FishFamily findUniqueOrThrow
   */
  export type FishFamilyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishFamily
     */
    select?: FishFamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishFamily
     */
    omit?: FishFamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishFamilyInclude<ExtArgs> | null
    /**
     * Filter, which FishFamily to fetch.
     */
    where: FishFamilyWhereUniqueInput
  }

  /**
   * FishFamily findFirst
   */
  export type FishFamilyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishFamily
     */
    select?: FishFamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishFamily
     */
    omit?: FishFamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishFamilyInclude<ExtArgs> | null
    /**
     * Filter, which FishFamily to fetch.
     */
    where?: FishFamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FishFamilies to fetch.
     */
    orderBy?: FishFamilyOrderByWithRelationInput | FishFamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FishFamilies.
     */
    cursor?: FishFamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FishFamilies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FishFamilies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FishFamilies.
     */
    distinct?: FishFamilyScalarFieldEnum | FishFamilyScalarFieldEnum[]
  }

  /**
   * FishFamily findFirstOrThrow
   */
  export type FishFamilyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishFamily
     */
    select?: FishFamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishFamily
     */
    omit?: FishFamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishFamilyInclude<ExtArgs> | null
    /**
     * Filter, which FishFamily to fetch.
     */
    where?: FishFamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FishFamilies to fetch.
     */
    orderBy?: FishFamilyOrderByWithRelationInput | FishFamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FishFamilies.
     */
    cursor?: FishFamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FishFamilies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FishFamilies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FishFamilies.
     */
    distinct?: FishFamilyScalarFieldEnum | FishFamilyScalarFieldEnum[]
  }

  /**
   * FishFamily findMany
   */
  export type FishFamilyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishFamily
     */
    select?: FishFamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishFamily
     */
    omit?: FishFamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishFamilyInclude<ExtArgs> | null
    /**
     * Filter, which FishFamilies to fetch.
     */
    where?: FishFamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FishFamilies to fetch.
     */
    orderBy?: FishFamilyOrderByWithRelationInput | FishFamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FishFamilies.
     */
    cursor?: FishFamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FishFamilies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FishFamilies.
     */
    skip?: number
    distinct?: FishFamilyScalarFieldEnum | FishFamilyScalarFieldEnum[]
  }

  /**
   * FishFamily create
   */
  export type FishFamilyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishFamily
     */
    select?: FishFamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishFamily
     */
    omit?: FishFamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishFamilyInclude<ExtArgs> | null
    /**
     * The data needed to create a FishFamily.
     */
    data: XOR<FishFamilyCreateInput, FishFamilyUncheckedCreateInput>
  }

  /**
   * FishFamily createMany
   */
  export type FishFamilyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FishFamilies.
     */
    data: FishFamilyCreateManyInput | FishFamilyCreateManyInput[]
  }

  /**
   * FishFamily update
   */
  export type FishFamilyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishFamily
     */
    select?: FishFamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishFamily
     */
    omit?: FishFamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishFamilyInclude<ExtArgs> | null
    /**
     * The data needed to update a FishFamily.
     */
    data: XOR<FishFamilyUpdateInput, FishFamilyUncheckedUpdateInput>
    /**
     * Choose, which FishFamily to update.
     */
    where: FishFamilyWhereUniqueInput
  }

  /**
   * FishFamily updateMany
   */
  export type FishFamilyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FishFamilies.
     */
    data: XOR<FishFamilyUpdateManyMutationInput, FishFamilyUncheckedUpdateManyInput>
    /**
     * Filter which FishFamilies to update
     */
    where?: FishFamilyWhereInput
    /**
     * Limit how many FishFamilies to update.
     */
    limit?: number
  }

  /**
   * FishFamily upsert
   */
  export type FishFamilyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishFamily
     */
    select?: FishFamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishFamily
     */
    omit?: FishFamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishFamilyInclude<ExtArgs> | null
    /**
     * The filter to search for the FishFamily to update in case it exists.
     */
    where: FishFamilyWhereUniqueInput
    /**
     * In case the FishFamily found by the `where` argument doesn't exist, create a new FishFamily with this data.
     */
    create: XOR<FishFamilyCreateInput, FishFamilyUncheckedCreateInput>
    /**
     * In case the FishFamily was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FishFamilyUpdateInput, FishFamilyUncheckedUpdateInput>
  }

  /**
   * FishFamily delete
   */
  export type FishFamilyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishFamily
     */
    select?: FishFamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishFamily
     */
    omit?: FishFamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishFamilyInclude<ExtArgs> | null
    /**
     * Filter which FishFamily to delete.
     */
    where: FishFamilyWhereUniqueInput
  }

  /**
   * FishFamily deleteMany
   */
  export type FishFamilyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FishFamilies to delete
     */
    where?: FishFamilyWhereInput
    /**
     * Limit how many FishFamilies to delete.
     */
    limit?: number
  }

  /**
   * FishFamily findRaw
   */
  export type FishFamilyFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FishFamily aggregateRaw
   */
  export type FishFamilyAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FishFamily.fishes
   */
  export type FishFamily$fishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish
     */
    select?: FishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fish
     */
    omit?: FishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishInclude<ExtArgs> | null
    where?: FishWhereInput
    orderBy?: FishOrderByWithRelationInput | FishOrderByWithRelationInput[]
    cursor?: FishWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FishScalarFieldEnum | FishScalarFieldEnum[]
  }

  /**
   * FishFamily without action
   */
  export type FishFamilyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishFamily
     */
    select?: FishFamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishFamily
     */
    omit?: FishFamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishFamilyInclude<ExtArgs> | null
  }


  /**
   * Model FishRarity
   */

  export type AggregateFishRarity = {
    _count: FishRarityCountAggregateOutputType | null
    _min: FishRarityMinAggregateOutputType | null
    _max: FishRarityMaxAggregateOutputType | null
  }

  export type FishRarityMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FishRarityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FishRarityCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FishRarityMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FishRarityMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FishRarityCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FishRarityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FishRarity to aggregate.
     */
    where?: FishRarityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FishRarities to fetch.
     */
    orderBy?: FishRarityOrderByWithRelationInput | FishRarityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FishRarityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FishRarities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FishRarities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FishRarities
    **/
    _count?: true | FishRarityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FishRarityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FishRarityMaxAggregateInputType
  }

  export type GetFishRarityAggregateType<T extends FishRarityAggregateArgs> = {
        [P in keyof T & keyof AggregateFishRarity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFishRarity[P]>
      : GetScalarType<T[P], AggregateFishRarity[P]>
  }




  export type FishRarityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FishRarityWhereInput
    orderBy?: FishRarityOrderByWithAggregationInput | FishRarityOrderByWithAggregationInput[]
    by: FishRarityScalarFieldEnum[] | FishRarityScalarFieldEnum
    having?: FishRarityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FishRarityCountAggregateInputType | true
    _min?: FishRarityMinAggregateInputType
    _max?: FishRarityMaxAggregateInputType
  }

  export type FishRarityGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: FishRarityCountAggregateOutputType | null
    _min: FishRarityMinAggregateOutputType | null
    _max: FishRarityMaxAggregateOutputType | null
  }

  type GetFishRarityGroupByPayload<T extends FishRarityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FishRarityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FishRarityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FishRarityGroupByOutputType[P]>
            : GetScalarType<T[P], FishRarityGroupByOutputType[P]>
        }
      >
    >


  export type FishRaritySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fishes?: boolean | FishRarity$fishesArgs<ExtArgs>
    _count?: boolean | FishRarityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fishRarity"]>



  export type FishRaritySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FishRarityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["fishRarity"]>
  export type FishRarityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fishes?: boolean | FishRarity$fishesArgs<ExtArgs>
    _count?: boolean | FishRarityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FishRarityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FishRarity"
    objects: {
      fishes: Prisma.$FishPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fishRarity"]>
    composites: {}
  }

  type FishRarityGetPayload<S extends boolean | null | undefined | FishRarityDefaultArgs> = $Result.GetResult<Prisma.$FishRarityPayload, S>

  type FishRarityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FishRarityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FishRarityCountAggregateInputType | true
    }

  export interface FishRarityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FishRarity'], meta: { name: 'FishRarity' } }
    /**
     * Find zero or one FishRarity that matches the filter.
     * @param {FishRarityFindUniqueArgs} args - Arguments to find a FishRarity
     * @example
     * // Get one FishRarity
     * const fishRarity = await prisma.fishRarity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FishRarityFindUniqueArgs>(args: SelectSubset<T, FishRarityFindUniqueArgs<ExtArgs>>): Prisma__FishRarityClient<$Result.GetResult<Prisma.$FishRarityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FishRarity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FishRarityFindUniqueOrThrowArgs} args - Arguments to find a FishRarity
     * @example
     * // Get one FishRarity
     * const fishRarity = await prisma.fishRarity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FishRarityFindUniqueOrThrowArgs>(args: SelectSubset<T, FishRarityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FishRarityClient<$Result.GetResult<Prisma.$FishRarityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FishRarity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishRarityFindFirstArgs} args - Arguments to find a FishRarity
     * @example
     * // Get one FishRarity
     * const fishRarity = await prisma.fishRarity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FishRarityFindFirstArgs>(args?: SelectSubset<T, FishRarityFindFirstArgs<ExtArgs>>): Prisma__FishRarityClient<$Result.GetResult<Prisma.$FishRarityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FishRarity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishRarityFindFirstOrThrowArgs} args - Arguments to find a FishRarity
     * @example
     * // Get one FishRarity
     * const fishRarity = await prisma.fishRarity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FishRarityFindFirstOrThrowArgs>(args?: SelectSubset<T, FishRarityFindFirstOrThrowArgs<ExtArgs>>): Prisma__FishRarityClient<$Result.GetResult<Prisma.$FishRarityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FishRarities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishRarityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FishRarities
     * const fishRarities = await prisma.fishRarity.findMany()
     * 
     * // Get first 10 FishRarities
     * const fishRarities = await prisma.fishRarity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fishRarityWithIdOnly = await prisma.fishRarity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FishRarityFindManyArgs>(args?: SelectSubset<T, FishRarityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FishRarityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FishRarity.
     * @param {FishRarityCreateArgs} args - Arguments to create a FishRarity.
     * @example
     * // Create one FishRarity
     * const FishRarity = await prisma.fishRarity.create({
     *   data: {
     *     // ... data to create a FishRarity
     *   }
     * })
     * 
     */
    create<T extends FishRarityCreateArgs>(args: SelectSubset<T, FishRarityCreateArgs<ExtArgs>>): Prisma__FishRarityClient<$Result.GetResult<Prisma.$FishRarityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FishRarities.
     * @param {FishRarityCreateManyArgs} args - Arguments to create many FishRarities.
     * @example
     * // Create many FishRarities
     * const fishRarity = await prisma.fishRarity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FishRarityCreateManyArgs>(args?: SelectSubset<T, FishRarityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FishRarity.
     * @param {FishRarityDeleteArgs} args - Arguments to delete one FishRarity.
     * @example
     * // Delete one FishRarity
     * const FishRarity = await prisma.fishRarity.delete({
     *   where: {
     *     // ... filter to delete one FishRarity
     *   }
     * })
     * 
     */
    delete<T extends FishRarityDeleteArgs>(args: SelectSubset<T, FishRarityDeleteArgs<ExtArgs>>): Prisma__FishRarityClient<$Result.GetResult<Prisma.$FishRarityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FishRarity.
     * @param {FishRarityUpdateArgs} args - Arguments to update one FishRarity.
     * @example
     * // Update one FishRarity
     * const fishRarity = await prisma.fishRarity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FishRarityUpdateArgs>(args: SelectSubset<T, FishRarityUpdateArgs<ExtArgs>>): Prisma__FishRarityClient<$Result.GetResult<Prisma.$FishRarityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FishRarities.
     * @param {FishRarityDeleteManyArgs} args - Arguments to filter FishRarities to delete.
     * @example
     * // Delete a few FishRarities
     * const { count } = await prisma.fishRarity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FishRarityDeleteManyArgs>(args?: SelectSubset<T, FishRarityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FishRarities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishRarityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FishRarities
     * const fishRarity = await prisma.fishRarity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FishRarityUpdateManyArgs>(args: SelectSubset<T, FishRarityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FishRarity.
     * @param {FishRarityUpsertArgs} args - Arguments to update or create a FishRarity.
     * @example
     * // Update or create a FishRarity
     * const fishRarity = await prisma.fishRarity.upsert({
     *   create: {
     *     // ... data to create a FishRarity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FishRarity we want to update
     *   }
     * })
     */
    upsert<T extends FishRarityUpsertArgs>(args: SelectSubset<T, FishRarityUpsertArgs<ExtArgs>>): Prisma__FishRarityClient<$Result.GetResult<Prisma.$FishRarityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FishRarities that matches the filter.
     * @param {FishRarityFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const fishRarity = await prisma.fishRarity.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FishRarityFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FishRarity.
     * @param {FishRarityAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const fishRarity = await prisma.fishRarity.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FishRarityAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of FishRarities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishRarityCountArgs} args - Arguments to filter FishRarities to count.
     * @example
     * // Count the number of FishRarities
     * const count = await prisma.fishRarity.count({
     *   where: {
     *     // ... the filter for the FishRarities we want to count
     *   }
     * })
    **/
    count<T extends FishRarityCountArgs>(
      args?: Subset<T, FishRarityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FishRarityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FishRarity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishRarityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FishRarityAggregateArgs>(args: Subset<T, FishRarityAggregateArgs>): Prisma.PrismaPromise<GetFishRarityAggregateType<T>>

    /**
     * Group by FishRarity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishRarityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FishRarityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FishRarityGroupByArgs['orderBy'] }
        : { orderBy?: FishRarityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FishRarityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFishRarityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FishRarity model
   */
  readonly fields: FishRarityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FishRarity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FishRarityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fishes<T extends FishRarity$fishesArgs<ExtArgs> = {}>(args?: Subset<T, FishRarity$fishesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FishRarity model
   */
  interface FishRarityFieldRefs {
    readonly id: FieldRef<"FishRarity", 'String'>
    readonly name: FieldRef<"FishRarity", 'String'>
    readonly createdAt: FieldRef<"FishRarity", 'DateTime'>
    readonly updatedAt: FieldRef<"FishRarity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FishRarity findUnique
   */
  export type FishRarityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishRarity
     */
    select?: FishRaritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishRarity
     */
    omit?: FishRarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishRarityInclude<ExtArgs> | null
    /**
     * Filter, which FishRarity to fetch.
     */
    where: FishRarityWhereUniqueInput
  }

  /**
   * FishRarity findUniqueOrThrow
   */
  export type FishRarityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishRarity
     */
    select?: FishRaritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishRarity
     */
    omit?: FishRarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishRarityInclude<ExtArgs> | null
    /**
     * Filter, which FishRarity to fetch.
     */
    where: FishRarityWhereUniqueInput
  }

  /**
   * FishRarity findFirst
   */
  export type FishRarityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishRarity
     */
    select?: FishRaritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishRarity
     */
    omit?: FishRarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishRarityInclude<ExtArgs> | null
    /**
     * Filter, which FishRarity to fetch.
     */
    where?: FishRarityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FishRarities to fetch.
     */
    orderBy?: FishRarityOrderByWithRelationInput | FishRarityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FishRarities.
     */
    cursor?: FishRarityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FishRarities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FishRarities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FishRarities.
     */
    distinct?: FishRarityScalarFieldEnum | FishRarityScalarFieldEnum[]
  }

  /**
   * FishRarity findFirstOrThrow
   */
  export type FishRarityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishRarity
     */
    select?: FishRaritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishRarity
     */
    omit?: FishRarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishRarityInclude<ExtArgs> | null
    /**
     * Filter, which FishRarity to fetch.
     */
    where?: FishRarityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FishRarities to fetch.
     */
    orderBy?: FishRarityOrderByWithRelationInput | FishRarityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FishRarities.
     */
    cursor?: FishRarityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FishRarities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FishRarities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FishRarities.
     */
    distinct?: FishRarityScalarFieldEnum | FishRarityScalarFieldEnum[]
  }

  /**
   * FishRarity findMany
   */
  export type FishRarityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishRarity
     */
    select?: FishRaritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishRarity
     */
    omit?: FishRarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishRarityInclude<ExtArgs> | null
    /**
     * Filter, which FishRarities to fetch.
     */
    where?: FishRarityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FishRarities to fetch.
     */
    orderBy?: FishRarityOrderByWithRelationInput | FishRarityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FishRarities.
     */
    cursor?: FishRarityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FishRarities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FishRarities.
     */
    skip?: number
    distinct?: FishRarityScalarFieldEnum | FishRarityScalarFieldEnum[]
  }

  /**
   * FishRarity create
   */
  export type FishRarityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishRarity
     */
    select?: FishRaritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishRarity
     */
    omit?: FishRarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishRarityInclude<ExtArgs> | null
    /**
     * The data needed to create a FishRarity.
     */
    data: XOR<FishRarityCreateInput, FishRarityUncheckedCreateInput>
  }

  /**
   * FishRarity createMany
   */
  export type FishRarityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FishRarities.
     */
    data: FishRarityCreateManyInput | FishRarityCreateManyInput[]
  }

  /**
   * FishRarity update
   */
  export type FishRarityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishRarity
     */
    select?: FishRaritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishRarity
     */
    omit?: FishRarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishRarityInclude<ExtArgs> | null
    /**
     * The data needed to update a FishRarity.
     */
    data: XOR<FishRarityUpdateInput, FishRarityUncheckedUpdateInput>
    /**
     * Choose, which FishRarity to update.
     */
    where: FishRarityWhereUniqueInput
  }

  /**
   * FishRarity updateMany
   */
  export type FishRarityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FishRarities.
     */
    data: XOR<FishRarityUpdateManyMutationInput, FishRarityUncheckedUpdateManyInput>
    /**
     * Filter which FishRarities to update
     */
    where?: FishRarityWhereInput
    /**
     * Limit how many FishRarities to update.
     */
    limit?: number
  }

  /**
   * FishRarity upsert
   */
  export type FishRarityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishRarity
     */
    select?: FishRaritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishRarity
     */
    omit?: FishRarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishRarityInclude<ExtArgs> | null
    /**
     * The filter to search for the FishRarity to update in case it exists.
     */
    where: FishRarityWhereUniqueInput
    /**
     * In case the FishRarity found by the `where` argument doesn't exist, create a new FishRarity with this data.
     */
    create: XOR<FishRarityCreateInput, FishRarityUncheckedCreateInput>
    /**
     * In case the FishRarity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FishRarityUpdateInput, FishRarityUncheckedUpdateInput>
  }

  /**
   * FishRarity delete
   */
  export type FishRarityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishRarity
     */
    select?: FishRaritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishRarity
     */
    omit?: FishRarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishRarityInclude<ExtArgs> | null
    /**
     * Filter which FishRarity to delete.
     */
    where: FishRarityWhereUniqueInput
  }

  /**
   * FishRarity deleteMany
   */
  export type FishRarityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FishRarities to delete
     */
    where?: FishRarityWhereInput
    /**
     * Limit how many FishRarities to delete.
     */
    limit?: number
  }

  /**
   * FishRarity findRaw
   */
  export type FishRarityFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FishRarity aggregateRaw
   */
  export type FishRarityAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FishRarity.fishes
   */
  export type FishRarity$fishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish
     */
    select?: FishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fish
     */
    omit?: FishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishInclude<ExtArgs> | null
    where?: FishWhereInput
    orderBy?: FishOrderByWithRelationInput | FishOrderByWithRelationInput[]
    cursor?: FishWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FishScalarFieldEnum | FishScalarFieldEnum[]
  }

  /**
   * FishRarity without action
   */
  export type FishRarityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishRarity
     */
    select?: FishRaritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishRarity
     */
    omit?: FishRarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishRarityInclude<ExtArgs> | null
  }


  /**
   * Model Fish
   */

  export type AggregateFish = {
    _count: FishCountAggregateOutputType | null
    _min: FishMinAggregateOutputType | null
    _max: FishMaxAggregateOutputType | null
  }

  export type FishMinAggregateOutputType = {
    id: string | null
    name: string | null
    scientificName: string | null
    description: string | null
    imageUrl: string | null
    habitat: string | null
    length: string | null
    age: string | null
    depthLevel: string | null
    weight: string | null
    createdAt: Date | null
    updatedAt: Date | null
    familyId: string | null
    rarityId: string | null
  }

  export type FishMaxAggregateOutputType = {
    id: string | null
    name: string | null
    scientificName: string | null
    description: string | null
    imageUrl: string | null
    habitat: string | null
    length: string | null
    age: string | null
    depthLevel: string | null
    weight: string | null
    createdAt: Date | null
    updatedAt: Date | null
    familyId: string | null
    rarityId: string | null
  }

  export type FishCountAggregateOutputType = {
    id: number
    name: number
    scientificName: number
    description: number
    imageUrl: number
    habitat: number
    length: number
    age: number
    depthLevel: number
    weight: number
    createdAt: number
    updatedAt: number
    familyId: number
    rarityId: number
    _all: number
  }


  export type FishMinAggregateInputType = {
    id?: true
    name?: true
    scientificName?: true
    description?: true
    imageUrl?: true
    habitat?: true
    length?: true
    age?: true
    depthLevel?: true
    weight?: true
    createdAt?: true
    updatedAt?: true
    familyId?: true
    rarityId?: true
  }

  export type FishMaxAggregateInputType = {
    id?: true
    name?: true
    scientificName?: true
    description?: true
    imageUrl?: true
    habitat?: true
    length?: true
    age?: true
    depthLevel?: true
    weight?: true
    createdAt?: true
    updatedAt?: true
    familyId?: true
    rarityId?: true
  }

  export type FishCountAggregateInputType = {
    id?: true
    name?: true
    scientificName?: true
    description?: true
    imageUrl?: true
    habitat?: true
    length?: true
    age?: true
    depthLevel?: true
    weight?: true
    createdAt?: true
    updatedAt?: true
    familyId?: true
    rarityId?: true
    _all?: true
  }

  export type FishAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fish to aggregate.
     */
    where?: FishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fish to fetch.
     */
    orderBy?: FishOrderByWithRelationInput | FishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fish from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fish.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fish
    **/
    _count?: true | FishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FishMaxAggregateInputType
  }

  export type GetFishAggregateType<T extends FishAggregateArgs> = {
        [P in keyof T & keyof AggregateFish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFish[P]>
      : GetScalarType<T[P], AggregateFish[P]>
  }




  export type FishGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FishWhereInput
    orderBy?: FishOrderByWithAggregationInput | FishOrderByWithAggregationInput[]
    by: FishScalarFieldEnum[] | FishScalarFieldEnum
    having?: FishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FishCountAggregateInputType | true
    _min?: FishMinAggregateInputType
    _max?: FishMaxAggregateInputType
  }

  export type FishGroupByOutputType = {
    id: string
    name: string
    scientificName: string | null
    description: string | null
    imageUrl: string | null
    habitat: string | null
    length: string | null
    age: string | null
    depthLevel: string | null
    weight: string | null
    createdAt: Date
    updatedAt: Date
    familyId: string | null
    rarityId: string | null
    _count: FishCountAggregateOutputType | null
    _min: FishMinAggregateOutputType | null
    _max: FishMaxAggregateOutputType | null
  }

  type GetFishGroupByPayload<T extends FishGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FishGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FishGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FishGroupByOutputType[P]>
            : GetScalarType<T[P], FishGroupByOutputType[P]>
        }
      >
    >


  export type FishSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    scientificName?: boolean
    description?: boolean
    imageUrl?: boolean
    habitat?: boolean
    length?: boolean
    age?: boolean
    depthLevel?: boolean
    weight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    familyId?: boolean
    rarityId?: boolean
    family?: boolean | Fish$familyArgs<ExtArgs>
    rarity?: boolean | Fish$rarityArgs<ExtArgs>
    detectionResults?: boolean | Fish$detectionResultsArgs<ExtArgs>
    userMissionProgress?: boolean | Fish$userMissionProgressArgs<ExtArgs>
    userPointHistories?: boolean | Fish$userPointHistoriesArgs<ExtArgs>
    missionDetailTargets?: boolean | Fish$missionDetailTargetsArgs<ExtArgs>
    _count?: boolean | FishCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fish"]>



  export type FishSelectScalar = {
    id?: boolean
    name?: boolean
    scientificName?: boolean
    description?: boolean
    imageUrl?: boolean
    habitat?: boolean
    length?: boolean
    age?: boolean
    depthLevel?: boolean
    weight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    familyId?: boolean
    rarityId?: boolean
  }

  export type FishOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "scientificName" | "description" | "imageUrl" | "habitat" | "length" | "age" | "depthLevel" | "weight" | "createdAt" | "updatedAt" | "familyId" | "rarityId", ExtArgs["result"]["fish"]>
  export type FishInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | Fish$familyArgs<ExtArgs>
    rarity?: boolean | Fish$rarityArgs<ExtArgs>
    detectionResults?: boolean | Fish$detectionResultsArgs<ExtArgs>
    userMissionProgress?: boolean | Fish$userMissionProgressArgs<ExtArgs>
    userPointHistories?: boolean | Fish$userPointHistoriesArgs<ExtArgs>
    missionDetailTargets?: boolean | Fish$missionDetailTargetsArgs<ExtArgs>
    _count?: boolean | FishCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FishPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fish"
    objects: {
      family: Prisma.$FishFamilyPayload<ExtArgs> | null
      rarity: Prisma.$FishRarityPayload<ExtArgs> | null
      detectionResults: Prisma.$DetectionResultPayload<ExtArgs>[]
      userMissionProgress: Prisma.$UserMissionProgressPayload<ExtArgs>[]
      userPointHistories: Prisma.$UserPointHistoryPayload<ExtArgs>[]
      missionDetailTargets: Prisma.$MissionDetailTargetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      scientificName: string | null
      description: string | null
      imageUrl: string | null
      habitat: string | null
      length: string | null
      age: string | null
      depthLevel: string | null
      weight: string | null
      createdAt: Date
      updatedAt: Date
      familyId: string | null
      rarityId: string | null
    }, ExtArgs["result"]["fish"]>
    composites: {}
  }

  type FishGetPayload<S extends boolean | null | undefined | FishDefaultArgs> = $Result.GetResult<Prisma.$FishPayload, S>

  type FishCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FishFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FishCountAggregateInputType | true
    }

  export interface FishDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fish'], meta: { name: 'Fish' } }
    /**
     * Find zero or one Fish that matches the filter.
     * @param {FishFindUniqueArgs} args - Arguments to find a Fish
     * @example
     * // Get one Fish
     * const fish = await prisma.fish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FishFindUniqueArgs>(args: SelectSubset<T, FishFindUniqueArgs<ExtArgs>>): Prisma__FishClient<$Result.GetResult<Prisma.$FishPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fish that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FishFindUniqueOrThrowArgs} args - Arguments to find a Fish
     * @example
     * // Get one Fish
     * const fish = await prisma.fish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FishFindUniqueOrThrowArgs>(args: SelectSubset<T, FishFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FishClient<$Result.GetResult<Prisma.$FishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishFindFirstArgs} args - Arguments to find a Fish
     * @example
     * // Get one Fish
     * const fish = await prisma.fish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FishFindFirstArgs>(args?: SelectSubset<T, FishFindFirstArgs<ExtArgs>>): Prisma__FishClient<$Result.GetResult<Prisma.$FishPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fish that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishFindFirstOrThrowArgs} args - Arguments to find a Fish
     * @example
     * // Get one Fish
     * const fish = await prisma.fish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FishFindFirstOrThrowArgs>(args?: SelectSubset<T, FishFindFirstOrThrowArgs<ExtArgs>>): Prisma__FishClient<$Result.GetResult<Prisma.$FishPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fish
     * const fish = await prisma.fish.findMany()
     * 
     * // Get first 10 Fish
     * const fish = await prisma.fish.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fishWithIdOnly = await prisma.fish.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FishFindManyArgs>(args?: SelectSubset<T, FishFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fish.
     * @param {FishCreateArgs} args - Arguments to create a Fish.
     * @example
     * // Create one Fish
     * const Fish = await prisma.fish.create({
     *   data: {
     *     // ... data to create a Fish
     *   }
     * })
     * 
     */
    create<T extends FishCreateArgs>(args: SelectSubset<T, FishCreateArgs<ExtArgs>>): Prisma__FishClient<$Result.GetResult<Prisma.$FishPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fish.
     * @param {FishCreateManyArgs} args - Arguments to create many Fish.
     * @example
     * // Create many Fish
     * const fish = await prisma.fish.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FishCreateManyArgs>(args?: SelectSubset<T, FishCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fish.
     * @param {FishDeleteArgs} args - Arguments to delete one Fish.
     * @example
     * // Delete one Fish
     * const Fish = await prisma.fish.delete({
     *   where: {
     *     // ... filter to delete one Fish
     *   }
     * })
     * 
     */
    delete<T extends FishDeleteArgs>(args: SelectSubset<T, FishDeleteArgs<ExtArgs>>): Prisma__FishClient<$Result.GetResult<Prisma.$FishPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fish.
     * @param {FishUpdateArgs} args - Arguments to update one Fish.
     * @example
     * // Update one Fish
     * const fish = await prisma.fish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FishUpdateArgs>(args: SelectSubset<T, FishUpdateArgs<ExtArgs>>): Prisma__FishClient<$Result.GetResult<Prisma.$FishPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fish.
     * @param {FishDeleteManyArgs} args - Arguments to filter Fish to delete.
     * @example
     * // Delete a few Fish
     * const { count } = await prisma.fish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FishDeleteManyArgs>(args?: SelectSubset<T, FishDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fish
     * const fish = await prisma.fish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FishUpdateManyArgs>(args: SelectSubset<T, FishUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fish.
     * @param {FishUpsertArgs} args - Arguments to update or create a Fish.
     * @example
     * // Update or create a Fish
     * const fish = await prisma.fish.upsert({
     *   create: {
     *     // ... data to create a Fish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fish we want to update
     *   }
     * })
     */
    upsert<T extends FishUpsertArgs>(args: SelectSubset<T, FishUpsertArgs<ExtArgs>>): Prisma__FishClient<$Result.GetResult<Prisma.$FishPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fish that matches the filter.
     * @param {FishFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const fish = await prisma.fish.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FishFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Fish.
     * @param {FishAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const fish = await prisma.fish.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FishAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Fish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishCountArgs} args - Arguments to filter Fish to count.
     * @example
     * // Count the number of Fish
     * const count = await prisma.fish.count({
     *   where: {
     *     // ... the filter for the Fish we want to count
     *   }
     * })
    **/
    count<T extends FishCountArgs>(
      args?: Subset<T, FishCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FishAggregateArgs>(args: Subset<T, FishAggregateArgs>): Prisma.PrismaPromise<GetFishAggregateType<T>>

    /**
     * Group by Fish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FishGroupByArgs['orderBy'] }
        : { orderBy?: FishGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFishGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fish model
   */
  readonly fields: FishFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FishClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    family<T extends Fish$familyArgs<ExtArgs> = {}>(args?: Subset<T, Fish$familyArgs<ExtArgs>>): Prisma__FishFamilyClient<$Result.GetResult<Prisma.$FishFamilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rarity<T extends Fish$rarityArgs<ExtArgs> = {}>(args?: Subset<T, Fish$rarityArgs<ExtArgs>>): Prisma__FishRarityClient<$Result.GetResult<Prisma.$FishRarityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    detectionResults<T extends Fish$detectionResultsArgs<ExtArgs> = {}>(args?: Subset<T, Fish$detectionResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetectionResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userMissionProgress<T extends Fish$userMissionProgressArgs<ExtArgs> = {}>(args?: Subset<T, Fish$userMissionProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMissionProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userPointHistories<T extends Fish$userPointHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Fish$userPointHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPointHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    missionDetailTargets<T extends Fish$missionDetailTargetsArgs<ExtArgs> = {}>(args?: Subset<T, Fish$missionDetailTargetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionDetailTargetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fish model
   */
  interface FishFieldRefs {
    readonly id: FieldRef<"Fish", 'String'>
    readonly name: FieldRef<"Fish", 'String'>
    readonly scientificName: FieldRef<"Fish", 'String'>
    readonly description: FieldRef<"Fish", 'String'>
    readonly imageUrl: FieldRef<"Fish", 'String'>
    readonly habitat: FieldRef<"Fish", 'String'>
    readonly length: FieldRef<"Fish", 'String'>
    readonly age: FieldRef<"Fish", 'String'>
    readonly depthLevel: FieldRef<"Fish", 'String'>
    readonly weight: FieldRef<"Fish", 'String'>
    readonly createdAt: FieldRef<"Fish", 'DateTime'>
    readonly updatedAt: FieldRef<"Fish", 'DateTime'>
    readonly familyId: FieldRef<"Fish", 'String'>
    readonly rarityId: FieldRef<"Fish", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fish findUnique
   */
  export type FishFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish
     */
    select?: FishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fish
     */
    omit?: FishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishInclude<ExtArgs> | null
    /**
     * Filter, which Fish to fetch.
     */
    where: FishWhereUniqueInput
  }

  /**
   * Fish findUniqueOrThrow
   */
  export type FishFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish
     */
    select?: FishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fish
     */
    omit?: FishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishInclude<ExtArgs> | null
    /**
     * Filter, which Fish to fetch.
     */
    where: FishWhereUniqueInput
  }

  /**
   * Fish findFirst
   */
  export type FishFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish
     */
    select?: FishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fish
     */
    omit?: FishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishInclude<ExtArgs> | null
    /**
     * Filter, which Fish to fetch.
     */
    where?: FishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fish to fetch.
     */
    orderBy?: FishOrderByWithRelationInput | FishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fish.
     */
    cursor?: FishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fish from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fish.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fish.
     */
    distinct?: FishScalarFieldEnum | FishScalarFieldEnum[]
  }

  /**
   * Fish findFirstOrThrow
   */
  export type FishFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish
     */
    select?: FishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fish
     */
    omit?: FishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishInclude<ExtArgs> | null
    /**
     * Filter, which Fish to fetch.
     */
    where?: FishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fish to fetch.
     */
    orderBy?: FishOrderByWithRelationInput | FishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fish.
     */
    cursor?: FishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fish from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fish.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fish.
     */
    distinct?: FishScalarFieldEnum | FishScalarFieldEnum[]
  }

  /**
   * Fish findMany
   */
  export type FishFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish
     */
    select?: FishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fish
     */
    omit?: FishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishInclude<ExtArgs> | null
    /**
     * Filter, which Fish to fetch.
     */
    where?: FishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fish to fetch.
     */
    orderBy?: FishOrderByWithRelationInput | FishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fish.
     */
    cursor?: FishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fish from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fish.
     */
    skip?: number
    distinct?: FishScalarFieldEnum | FishScalarFieldEnum[]
  }

  /**
   * Fish create
   */
  export type FishCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish
     */
    select?: FishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fish
     */
    omit?: FishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishInclude<ExtArgs> | null
    /**
     * The data needed to create a Fish.
     */
    data: XOR<FishCreateInput, FishUncheckedCreateInput>
  }

  /**
   * Fish createMany
   */
  export type FishCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fish.
     */
    data: FishCreateManyInput | FishCreateManyInput[]
  }

  /**
   * Fish update
   */
  export type FishUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish
     */
    select?: FishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fish
     */
    omit?: FishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishInclude<ExtArgs> | null
    /**
     * The data needed to update a Fish.
     */
    data: XOR<FishUpdateInput, FishUncheckedUpdateInput>
    /**
     * Choose, which Fish to update.
     */
    where: FishWhereUniqueInput
  }

  /**
   * Fish updateMany
   */
  export type FishUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fish.
     */
    data: XOR<FishUpdateManyMutationInput, FishUncheckedUpdateManyInput>
    /**
     * Filter which Fish to update
     */
    where?: FishWhereInput
    /**
     * Limit how many Fish to update.
     */
    limit?: number
  }

  /**
   * Fish upsert
   */
  export type FishUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish
     */
    select?: FishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fish
     */
    omit?: FishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishInclude<ExtArgs> | null
    /**
     * The filter to search for the Fish to update in case it exists.
     */
    where: FishWhereUniqueInput
    /**
     * In case the Fish found by the `where` argument doesn't exist, create a new Fish with this data.
     */
    create: XOR<FishCreateInput, FishUncheckedCreateInput>
    /**
     * In case the Fish was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FishUpdateInput, FishUncheckedUpdateInput>
  }

  /**
   * Fish delete
   */
  export type FishDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish
     */
    select?: FishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fish
     */
    omit?: FishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishInclude<ExtArgs> | null
    /**
     * Filter which Fish to delete.
     */
    where: FishWhereUniqueInput
  }

  /**
   * Fish deleteMany
   */
  export type FishDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fish to delete
     */
    where?: FishWhereInput
    /**
     * Limit how many Fish to delete.
     */
    limit?: number
  }

  /**
   * Fish findRaw
   */
  export type FishFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Fish aggregateRaw
   */
  export type FishAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Fish.family
   */
  export type Fish$familyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishFamily
     */
    select?: FishFamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishFamily
     */
    omit?: FishFamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishFamilyInclude<ExtArgs> | null
    where?: FishFamilyWhereInput
  }

  /**
   * Fish.rarity
   */
  export type Fish$rarityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FishRarity
     */
    select?: FishRaritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FishRarity
     */
    omit?: FishRarityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishRarityInclude<ExtArgs> | null
    where?: FishRarityWhereInput
  }

  /**
   * Fish.detectionResults
   */
  export type Fish$detectionResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionResult
     */
    select?: DetectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionResult
     */
    omit?: DetectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionResultInclude<ExtArgs> | null
    where?: DetectionResultWhereInput
    orderBy?: DetectionResultOrderByWithRelationInput | DetectionResultOrderByWithRelationInput[]
    cursor?: DetectionResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetectionResultScalarFieldEnum | DetectionResultScalarFieldEnum[]
  }

  /**
   * Fish.userMissionProgress
   */
  export type Fish$userMissionProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMissionProgress
     */
    select?: UserMissionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMissionProgress
     */
    omit?: UserMissionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionProgressInclude<ExtArgs> | null
    where?: UserMissionProgressWhereInput
    orderBy?: UserMissionProgressOrderByWithRelationInput | UserMissionProgressOrderByWithRelationInput[]
    cursor?: UserMissionProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMissionProgressScalarFieldEnum | UserMissionProgressScalarFieldEnum[]
  }

  /**
   * Fish.userPointHistories
   */
  export type Fish$userPointHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPointHistory
     */
    select?: UserPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPointHistory
     */
    omit?: UserPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointHistoryInclude<ExtArgs> | null
    where?: UserPointHistoryWhereInput
    orderBy?: UserPointHistoryOrderByWithRelationInput | UserPointHistoryOrderByWithRelationInput[]
    cursor?: UserPointHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPointHistoryScalarFieldEnum | UserPointHistoryScalarFieldEnum[]
  }

  /**
   * Fish.missionDetailTargets
   */
  export type Fish$missionDetailTargetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionDetailTarget
     */
    select?: MissionDetailTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionDetailTarget
     */
    omit?: MissionDetailTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionDetailTargetInclude<ExtArgs> | null
    where?: MissionDetailTargetWhereInput
    orderBy?: MissionDetailTargetOrderByWithRelationInput | MissionDetailTargetOrderByWithRelationInput[]
    cursor?: MissionDetailTargetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionDetailTargetScalarFieldEnum | MissionDetailTargetScalarFieldEnum[]
  }

  /**
   * Fish without action
   */
  export type FishDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish
     */
    select?: FishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fish
     */
    omit?: FishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishInclude<ExtArgs> | null
  }


  /**
   * Model DetectionHistory
   */

  export type AggregateDetectionHistory = {
    _count: DetectionHistoryCountAggregateOutputType | null
    _min: DetectionHistoryMinAggregateOutputType | null
    _max: DetectionHistoryMaxAggregateOutputType | null
  }

  export type DetectionHistoryMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    claimToken: string | null
    isClaimed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type DetectionHistoryMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    claimToken: string | null
    isClaimed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type DetectionHistoryCountAggregateOutputType = {
    id: number
    imageUrl: number
    claimToken: number
    isClaimed: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type DetectionHistoryMinAggregateInputType = {
    id?: true
    imageUrl?: true
    claimToken?: true
    isClaimed?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type DetectionHistoryMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    claimToken?: true
    isClaimed?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type DetectionHistoryCountAggregateInputType = {
    id?: true
    imageUrl?: true
    claimToken?: true
    isClaimed?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type DetectionHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetectionHistory to aggregate.
     */
    where?: DetectionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetectionHistories to fetch.
     */
    orderBy?: DetectionHistoryOrderByWithRelationInput | DetectionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetectionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetectionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetectionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetectionHistories
    **/
    _count?: true | DetectionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetectionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetectionHistoryMaxAggregateInputType
  }

  export type GetDetectionHistoryAggregateType<T extends DetectionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDetectionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetectionHistory[P]>
      : GetScalarType<T[P], AggregateDetectionHistory[P]>
  }




  export type DetectionHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetectionHistoryWhereInput
    orderBy?: DetectionHistoryOrderByWithAggregationInput | DetectionHistoryOrderByWithAggregationInput[]
    by: DetectionHistoryScalarFieldEnum[] | DetectionHistoryScalarFieldEnum
    having?: DetectionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetectionHistoryCountAggregateInputType | true
    _min?: DetectionHistoryMinAggregateInputType
    _max?: DetectionHistoryMaxAggregateInputType
  }

  export type DetectionHistoryGroupByOutputType = {
    id: string
    imageUrl: string
    claimToken: string | null
    isClaimed: boolean
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: DetectionHistoryCountAggregateOutputType | null
    _min: DetectionHistoryMinAggregateOutputType | null
    _max: DetectionHistoryMaxAggregateOutputType | null
  }

  type GetDetectionHistoryGroupByPayload<T extends DetectionHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetectionHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetectionHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetectionHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], DetectionHistoryGroupByOutputType[P]>
        }
      >
    >


  export type DetectionHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    claimToken?: boolean
    isClaimed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    userPointHistory?: boolean | DetectionHistory$userPointHistoryArgs<ExtArgs>
    detectionResults?: boolean | DetectionHistory$detectionResultsArgs<ExtArgs>
    _count?: boolean | DetectionHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detectionHistory"]>



  export type DetectionHistorySelectScalar = {
    id?: boolean
    imageUrl?: boolean
    claimToken?: boolean
    isClaimed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type DetectionHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "claimToken" | "isClaimed" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["detectionHistory"]>
  export type DetectionHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    userPointHistory?: boolean | DetectionHistory$userPointHistoryArgs<ExtArgs>
    detectionResults?: boolean | DetectionHistory$detectionResultsArgs<ExtArgs>
    _count?: boolean | DetectionHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DetectionHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetectionHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      userPointHistory: Prisma.$UserPointHistoryPayload<ExtArgs> | null
      detectionResults: Prisma.$DetectionResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      claimToken: string | null
      isClaimed: boolean
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["detectionHistory"]>
    composites: {}
  }

  type DetectionHistoryGetPayload<S extends boolean | null | undefined | DetectionHistoryDefaultArgs> = $Result.GetResult<Prisma.$DetectionHistoryPayload, S>

  type DetectionHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetectionHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetectionHistoryCountAggregateInputType | true
    }

  export interface DetectionHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetectionHistory'], meta: { name: 'DetectionHistory' } }
    /**
     * Find zero or one DetectionHistory that matches the filter.
     * @param {DetectionHistoryFindUniqueArgs} args - Arguments to find a DetectionHistory
     * @example
     * // Get one DetectionHistory
     * const detectionHistory = await prisma.detectionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetectionHistoryFindUniqueArgs>(args: SelectSubset<T, DetectionHistoryFindUniqueArgs<ExtArgs>>): Prisma__DetectionHistoryClient<$Result.GetResult<Prisma.$DetectionHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetectionHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetectionHistoryFindUniqueOrThrowArgs} args - Arguments to find a DetectionHistory
     * @example
     * // Get one DetectionHistory
     * const detectionHistory = await prisma.detectionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetectionHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DetectionHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetectionHistoryClient<$Result.GetResult<Prisma.$DetectionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetectionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionHistoryFindFirstArgs} args - Arguments to find a DetectionHistory
     * @example
     * // Get one DetectionHistory
     * const detectionHistory = await prisma.detectionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetectionHistoryFindFirstArgs>(args?: SelectSubset<T, DetectionHistoryFindFirstArgs<ExtArgs>>): Prisma__DetectionHistoryClient<$Result.GetResult<Prisma.$DetectionHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetectionHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionHistoryFindFirstOrThrowArgs} args - Arguments to find a DetectionHistory
     * @example
     * // Get one DetectionHistory
     * const detectionHistory = await prisma.detectionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetectionHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DetectionHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetectionHistoryClient<$Result.GetResult<Prisma.$DetectionHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetectionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetectionHistories
     * const detectionHistories = await prisma.detectionHistory.findMany()
     * 
     * // Get first 10 DetectionHistories
     * const detectionHistories = await prisma.detectionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detectionHistoryWithIdOnly = await prisma.detectionHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetectionHistoryFindManyArgs>(args?: SelectSubset<T, DetectionHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetectionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetectionHistory.
     * @param {DetectionHistoryCreateArgs} args - Arguments to create a DetectionHistory.
     * @example
     * // Create one DetectionHistory
     * const DetectionHistory = await prisma.detectionHistory.create({
     *   data: {
     *     // ... data to create a DetectionHistory
     *   }
     * })
     * 
     */
    create<T extends DetectionHistoryCreateArgs>(args: SelectSubset<T, DetectionHistoryCreateArgs<ExtArgs>>): Prisma__DetectionHistoryClient<$Result.GetResult<Prisma.$DetectionHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetectionHistories.
     * @param {DetectionHistoryCreateManyArgs} args - Arguments to create many DetectionHistories.
     * @example
     * // Create many DetectionHistories
     * const detectionHistory = await prisma.detectionHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetectionHistoryCreateManyArgs>(args?: SelectSubset<T, DetectionHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetectionHistory.
     * @param {DetectionHistoryDeleteArgs} args - Arguments to delete one DetectionHistory.
     * @example
     * // Delete one DetectionHistory
     * const DetectionHistory = await prisma.detectionHistory.delete({
     *   where: {
     *     // ... filter to delete one DetectionHistory
     *   }
     * })
     * 
     */
    delete<T extends DetectionHistoryDeleteArgs>(args: SelectSubset<T, DetectionHistoryDeleteArgs<ExtArgs>>): Prisma__DetectionHistoryClient<$Result.GetResult<Prisma.$DetectionHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetectionHistory.
     * @param {DetectionHistoryUpdateArgs} args - Arguments to update one DetectionHistory.
     * @example
     * // Update one DetectionHistory
     * const detectionHistory = await prisma.detectionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetectionHistoryUpdateArgs>(args: SelectSubset<T, DetectionHistoryUpdateArgs<ExtArgs>>): Prisma__DetectionHistoryClient<$Result.GetResult<Prisma.$DetectionHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetectionHistories.
     * @param {DetectionHistoryDeleteManyArgs} args - Arguments to filter DetectionHistories to delete.
     * @example
     * // Delete a few DetectionHistories
     * const { count } = await prisma.detectionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetectionHistoryDeleteManyArgs>(args?: SelectSubset<T, DetectionHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetectionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetectionHistories
     * const detectionHistory = await prisma.detectionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetectionHistoryUpdateManyArgs>(args: SelectSubset<T, DetectionHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetectionHistory.
     * @param {DetectionHistoryUpsertArgs} args - Arguments to update or create a DetectionHistory.
     * @example
     * // Update or create a DetectionHistory
     * const detectionHistory = await prisma.detectionHistory.upsert({
     *   create: {
     *     // ... data to create a DetectionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetectionHistory we want to update
     *   }
     * })
     */
    upsert<T extends DetectionHistoryUpsertArgs>(args: SelectSubset<T, DetectionHistoryUpsertArgs<ExtArgs>>): Prisma__DetectionHistoryClient<$Result.GetResult<Prisma.$DetectionHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetectionHistories that matches the filter.
     * @param {DetectionHistoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const detectionHistory = await prisma.detectionHistory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DetectionHistoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DetectionHistory.
     * @param {DetectionHistoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const detectionHistory = await prisma.detectionHistory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DetectionHistoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DetectionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionHistoryCountArgs} args - Arguments to filter DetectionHistories to count.
     * @example
     * // Count the number of DetectionHistories
     * const count = await prisma.detectionHistory.count({
     *   where: {
     *     // ... the filter for the DetectionHistories we want to count
     *   }
     * })
    **/
    count<T extends DetectionHistoryCountArgs>(
      args?: Subset<T, DetectionHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetectionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetectionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetectionHistoryAggregateArgs>(args: Subset<T, DetectionHistoryAggregateArgs>): Prisma.PrismaPromise<GetDetectionHistoryAggregateType<T>>

    /**
     * Group by DetectionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetectionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetectionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: DetectionHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetectionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetectionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetectionHistory model
   */
  readonly fields: DetectionHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetectionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetectionHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userPointHistory<T extends DetectionHistory$userPointHistoryArgs<ExtArgs> = {}>(args?: Subset<T, DetectionHistory$userPointHistoryArgs<ExtArgs>>): Prisma__UserPointHistoryClient<$Result.GetResult<Prisma.$UserPointHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    detectionResults<T extends DetectionHistory$detectionResultsArgs<ExtArgs> = {}>(args?: Subset<T, DetectionHistory$detectionResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetectionResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DetectionHistory model
   */
  interface DetectionHistoryFieldRefs {
    readonly id: FieldRef<"DetectionHistory", 'String'>
    readonly imageUrl: FieldRef<"DetectionHistory", 'String'>
    readonly claimToken: FieldRef<"DetectionHistory", 'String'>
    readonly isClaimed: FieldRef<"DetectionHistory", 'Boolean'>
    readonly createdAt: FieldRef<"DetectionHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"DetectionHistory", 'DateTime'>
    readonly userId: FieldRef<"DetectionHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DetectionHistory findUnique
   */
  export type DetectionHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionHistory
     */
    select?: DetectionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionHistory
     */
    omit?: DetectionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DetectionHistory to fetch.
     */
    where: DetectionHistoryWhereUniqueInput
  }

  /**
   * DetectionHistory findUniqueOrThrow
   */
  export type DetectionHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionHistory
     */
    select?: DetectionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionHistory
     */
    omit?: DetectionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DetectionHistory to fetch.
     */
    where: DetectionHistoryWhereUniqueInput
  }

  /**
   * DetectionHistory findFirst
   */
  export type DetectionHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionHistory
     */
    select?: DetectionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionHistory
     */
    omit?: DetectionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DetectionHistory to fetch.
     */
    where?: DetectionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetectionHistories to fetch.
     */
    orderBy?: DetectionHistoryOrderByWithRelationInput | DetectionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetectionHistories.
     */
    cursor?: DetectionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetectionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetectionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetectionHistories.
     */
    distinct?: DetectionHistoryScalarFieldEnum | DetectionHistoryScalarFieldEnum[]
  }

  /**
   * DetectionHistory findFirstOrThrow
   */
  export type DetectionHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionHistory
     */
    select?: DetectionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionHistory
     */
    omit?: DetectionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DetectionHistory to fetch.
     */
    where?: DetectionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetectionHistories to fetch.
     */
    orderBy?: DetectionHistoryOrderByWithRelationInput | DetectionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetectionHistories.
     */
    cursor?: DetectionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetectionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetectionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetectionHistories.
     */
    distinct?: DetectionHistoryScalarFieldEnum | DetectionHistoryScalarFieldEnum[]
  }

  /**
   * DetectionHistory findMany
   */
  export type DetectionHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionHistory
     */
    select?: DetectionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionHistory
     */
    omit?: DetectionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DetectionHistories to fetch.
     */
    where?: DetectionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetectionHistories to fetch.
     */
    orderBy?: DetectionHistoryOrderByWithRelationInput | DetectionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetectionHistories.
     */
    cursor?: DetectionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetectionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetectionHistories.
     */
    skip?: number
    distinct?: DetectionHistoryScalarFieldEnum | DetectionHistoryScalarFieldEnum[]
  }

  /**
   * DetectionHistory create
   */
  export type DetectionHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionHistory
     */
    select?: DetectionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionHistory
     */
    omit?: DetectionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a DetectionHistory.
     */
    data: XOR<DetectionHistoryCreateInput, DetectionHistoryUncheckedCreateInput>
  }

  /**
   * DetectionHistory createMany
   */
  export type DetectionHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetectionHistories.
     */
    data: DetectionHistoryCreateManyInput | DetectionHistoryCreateManyInput[]
  }

  /**
   * DetectionHistory update
   */
  export type DetectionHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionHistory
     */
    select?: DetectionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionHistory
     */
    omit?: DetectionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a DetectionHistory.
     */
    data: XOR<DetectionHistoryUpdateInput, DetectionHistoryUncheckedUpdateInput>
    /**
     * Choose, which DetectionHistory to update.
     */
    where: DetectionHistoryWhereUniqueInput
  }

  /**
   * DetectionHistory updateMany
   */
  export type DetectionHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetectionHistories.
     */
    data: XOR<DetectionHistoryUpdateManyMutationInput, DetectionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which DetectionHistories to update
     */
    where?: DetectionHistoryWhereInput
    /**
     * Limit how many DetectionHistories to update.
     */
    limit?: number
  }

  /**
   * DetectionHistory upsert
   */
  export type DetectionHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionHistory
     */
    select?: DetectionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionHistory
     */
    omit?: DetectionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the DetectionHistory to update in case it exists.
     */
    where: DetectionHistoryWhereUniqueInput
    /**
     * In case the DetectionHistory found by the `where` argument doesn't exist, create a new DetectionHistory with this data.
     */
    create: XOR<DetectionHistoryCreateInput, DetectionHistoryUncheckedCreateInput>
    /**
     * In case the DetectionHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetectionHistoryUpdateInput, DetectionHistoryUncheckedUpdateInput>
  }

  /**
   * DetectionHistory delete
   */
  export type DetectionHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionHistory
     */
    select?: DetectionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionHistory
     */
    omit?: DetectionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionHistoryInclude<ExtArgs> | null
    /**
     * Filter which DetectionHistory to delete.
     */
    where: DetectionHistoryWhereUniqueInput
  }

  /**
   * DetectionHistory deleteMany
   */
  export type DetectionHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetectionHistories to delete
     */
    where?: DetectionHistoryWhereInput
    /**
     * Limit how many DetectionHistories to delete.
     */
    limit?: number
  }

  /**
   * DetectionHistory findRaw
   */
  export type DetectionHistoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DetectionHistory aggregateRaw
   */
  export type DetectionHistoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DetectionHistory.userPointHistory
   */
  export type DetectionHistory$userPointHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPointHistory
     */
    select?: UserPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPointHistory
     */
    omit?: UserPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointHistoryInclude<ExtArgs> | null
    where?: UserPointHistoryWhereInput
  }

  /**
   * DetectionHistory.detectionResults
   */
  export type DetectionHistory$detectionResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionResult
     */
    select?: DetectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionResult
     */
    omit?: DetectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionResultInclude<ExtArgs> | null
    where?: DetectionResultWhereInput
    orderBy?: DetectionResultOrderByWithRelationInput | DetectionResultOrderByWithRelationInput[]
    cursor?: DetectionResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetectionResultScalarFieldEnum | DetectionResultScalarFieldEnum[]
  }

  /**
   * DetectionHistory without action
   */
  export type DetectionHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionHistory
     */
    select?: DetectionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionHistory
     */
    omit?: DetectionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionHistoryInclude<ExtArgs> | null
  }


  /**
   * Model DetectionResult
   */

  export type AggregateDetectionResult = {
    _count: DetectionResultCountAggregateOutputType | null
    _avg: DetectionResultAvgAggregateOutputType | null
    _sum: DetectionResultSumAggregateOutputType | null
    _min: DetectionResultMinAggregateOutputType | null
    _max: DetectionResultMaxAggregateOutputType | null
  }

  export type DetectionResultAvgAggregateOutputType = {
    confidence: number | null
  }

  export type DetectionResultSumAggregateOutputType = {
    confidence: number | null
  }

  export type DetectionResultMinAggregateOutputType = {
    id: string | null
    confidence: number | null
    createdAt: Date | null
    updatedAt: Date | null
    detectionHistoryId: string | null
    fishId: string | null
  }

  export type DetectionResultMaxAggregateOutputType = {
    id: string | null
    confidence: number | null
    createdAt: Date | null
    updatedAt: Date | null
    detectionHistoryId: string | null
    fishId: string | null
  }

  export type DetectionResultCountAggregateOutputType = {
    id: number
    confidence: number
    createdAt: number
    updatedAt: number
    detectionHistoryId: number
    fishId: number
    _all: number
  }


  export type DetectionResultAvgAggregateInputType = {
    confidence?: true
  }

  export type DetectionResultSumAggregateInputType = {
    confidence?: true
  }

  export type DetectionResultMinAggregateInputType = {
    id?: true
    confidence?: true
    createdAt?: true
    updatedAt?: true
    detectionHistoryId?: true
    fishId?: true
  }

  export type DetectionResultMaxAggregateInputType = {
    id?: true
    confidence?: true
    createdAt?: true
    updatedAt?: true
    detectionHistoryId?: true
    fishId?: true
  }

  export type DetectionResultCountAggregateInputType = {
    id?: true
    confidence?: true
    createdAt?: true
    updatedAt?: true
    detectionHistoryId?: true
    fishId?: true
    _all?: true
  }

  export type DetectionResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetectionResult to aggregate.
     */
    where?: DetectionResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetectionResults to fetch.
     */
    orderBy?: DetectionResultOrderByWithRelationInput | DetectionResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetectionResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetectionResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetectionResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetectionResults
    **/
    _count?: true | DetectionResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetectionResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetectionResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetectionResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetectionResultMaxAggregateInputType
  }

  export type GetDetectionResultAggregateType<T extends DetectionResultAggregateArgs> = {
        [P in keyof T & keyof AggregateDetectionResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetectionResult[P]>
      : GetScalarType<T[P], AggregateDetectionResult[P]>
  }




  export type DetectionResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetectionResultWhereInput
    orderBy?: DetectionResultOrderByWithAggregationInput | DetectionResultOrderByWithAggregationInput[]
    by: DetectionResultScalarFieldEnum[] | DetectionResultScalarFieldEnum
    having?: DetectionResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetectionResultCountAggregateInputType | true
    _avg?: DetectionResultAvgAggregateInputType
    _sum?: DetectionResultSumAggregateInputType
    _min?: DetectionResultMinAggregateInputType
    _max?: DetectionResultMaxAggregateInputType
  }

  export type DetectionResultGroupByOutputType = {
    id: string
    confidence: number
    createdAt: Date
    updatedAt: Date
    detectionHistoryId: string
    fishId: string | null
    _count: DetectionResultCountAggregateOutputType | null
    _avg: DetectionResultAvgAggregateOutputType | null
    _sum: DetectionResultSumAggregateOutputType | null
    _min: DetectionResultMinAggregateOutputType | null
    _max: DetectionResultMaxAggregateOutputType | null
  }

  type GetDetectionResultGroupByPayload<T extends DetectionResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetectionResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetectionResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetectionResultGroupByOutputType[P]>
            : GetScalarType<T[P], DetectionResultGroupByOutputType[P]>
        }
      >
    >


  export type DetectionResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    confidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    detectionHistoryId?: boolean
    fishId?: boolean
    detectionHistory?: boolean | DetectionHistoryDefaultArgs<ExtArgs>
    fish?: boolean | DetectionResult$fishArgs<ExtArgs>
  }, ExtArgs["result"]["detectionResult"]>



  export type DetectionResultSelectScalar = {
    id?: boolean
    confidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    detectionHistoryId?: boolean
    fishId?: boolean
  }

  export type DetectionResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "confidence" | "createdAt" | "updatedAt" | "detectionHistoryId" | "fishId", ExtArgs["result"]["detectionResult"]>
  export type DetectionResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detectionHistory?: boolean | DetectionHistoryDefaultArgs<ExtArgs>
    fish?: boolean | DetectionResult$fishArgs<ExtArgs>
  }

  export type $DetectionResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetectionResult"
    objects: {
      detectionHistory: Prisma.$DetectionHistoryPayload<ExtArgs>
      fish: Prisma.$FishPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      confidence: number
      createdAt: Date
      updatedAt: Date
      detectionHistoryId: string
      fishId: string | null
    }, ExtArgs["result"]["detectionResult"]>
    composites: {}
  }

  type DetectionResultGetPayload<S extends boolean | null | undefined | DetectionResultDefaultArgs> = $Result.GetResult<Prisma.$DetectionResultPayload, S>

  type DetectionResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetectionResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetectionResultCountAggregateInputType | true
    }

  export interface DetectionResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetectionResult'], meta: { name: 'DetectionResult' } }
    /**
     * Find zero or one DetectionResult that matches the filter.
     * @param {DetectionResultFindUniqueArgs} args - Arguments to find a DetectionResult
     * @example
     * // Get one DetectionResult
     * const detectionResult = await prisma.detectionResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetectionResultFindUniqueArgs>(args: SelectSubset<T, DetectionResultFindUniqueArgs<ExtArgs>>): Prisma__DetectionResultClient<$Result.GetResult<Prisma.$DetectionResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetectionResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetectionResultFindUniqueOrThrowArgs} args - Arguments to find a DetectionResult
     * @example
     * // Get one DetectionResult
     * const detectionResult = await prisma.detectionResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetectionResultFindUniqueOrThrowArgs>(args: SelectSubset<T, DetectionResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetectionResultClient<$Result.GetResult<Prisma.$DetectionResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetectionResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionResultFindFirstArgs} args - Arguments to find a DetectionResult
     * @example
     * // Get one DetectionResult
     * const detectionResult = await prisma.detectionResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetectionResultFindFirstArgs>(args?: SelectSubset<T, DetectionResultFindFirstArgs<ExtArgs>>): Prisma__DetectionResultClient<$Result.GetResult<Prisma.$DetectionResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetectionResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionResultFindFirstOrThrowArgs} args - Arguments to find a DetectionResult
     * @example
     * // Get one DetectionResult
     * const detectionResult = await prisma.detectionResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetectionResultFindFirstOrThrowArgs>(args?: SelectSubset<T, DetectionResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetectionResultClient<$Result.GetResult<Prisma.$DetectionResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetectionResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetectionResults
     * const detectionResults = await prisma.detectionResult.findMany()
     * 
     * // Get first 10 DetectionResults
     * const detectionResults = await prisma.detectionResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detectionResultWithIdOnly = await prisma.detectionResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetectionResultFindManyArgs>(args?: SelectSubset<T, DetectionResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetectionResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetectionResult.
     * @param {DetectionResultCreateArgs} args - Arguments to create a DetectionResult.
     * @example
     * // Create one DetectionResult
     * const DetectionResult = await prisma.detectionResult.create({
     *   data: {
     *     // ... data to create a DetectionResult
     *   }
     * })
     * 
     */
    create<T extends DetectionResultCreateArgs>(args: SelectSubset<T, DetectionResultCreateArgs<ExtArgs>>): Prisma__DetectionResultClient<$Result.GetResult<Prisma.$DetectionResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetectionResults.
     * @param {DetectionResultCreateManyArgs} args - Arguments to create many DetectionResults.
     * @example
     * // Create many DetectionResults
     * const detectionResult = await prisma.detectionResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetectionResultCreateManyArgs>(args?: SelectSubset<T, DetectionResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetectionResult.
     * @param {DetectionResultDeleteArgs} args - Arguments to delete one DetectionResult.
     * @example
     * // Delete one DetectionResult
     * const DetectionResult = await prisma.detectionResult.delete({
     *   where: {
     *     // ... filter to delete one DetectionResult
     *   }
     * })
     * 
     */
    delete<T extends DetectionResultDeleteArgs>(args: SelectSubset<T, DetectionResultDeleteArgs<ExtArgs>>): Prisma__DetectionResultClient<$Result.GetResult<Prisma.$DetectionResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetectionResult.
     * @param {DetectionResultUpdateArgs} args - Arguments to update one DetectionResult.
     * @example
     * // Update one DetectionResult
     * const detectionResult = await prisma.detectionResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetectionResultUpdateArgs>(args: SelectSubset<T, DetectionResultUpdateArgs<ExtArgs>>): Prisma__DetectionResultClient<$Result.GetResult<Prisma.$DetectionResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetectionResults.
     * @param {DetectionResultDeleteManyArgs} args - Arguments to filter DetectionResults to delete.
     * @example
     * // Delete a few DetectionResults
     * const { count } = await prisma.detectionResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetectionResultDeleteManyArgs>(args?: SelectSubset<T, DetectionResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetectionResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetectionResults
     * const detectionResult = await prisma.detectionResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetectionResultUpdateManyArgs>(args: SelectSubset<T, DetectionResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetectionResult.
     * @param {DetectionResultUpsertArgs} args - Arguments to update or create a DetectionResult.
     * @example
     * // Update or create a DetectionResult
     * const detectionResult = await prisma.detectionResult.upsert({
     *   create: {
     *     // ... data to create a DetectionResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetectionResult we want to update
     *   }
     * })
     */
    upsert<T extends DetectionResultUpsertArgs>(args: SelectSubset<T, DetectionResultUpsertArgs<ExtArgs>>): Prisma__DetectionResultClient<$Result.GetResult<Prisma.$DetectionResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetectionResults that matches the filter.
     * @param {DetectionResultFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const detectionResult = await prisma.detectionResult.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DetectionResultFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DetectionResult.
     * @param {DetectionResultAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const detectionResult = await prisma.detectionResult.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DetectionResultAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DetectionResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionResultCountArgs} args - Arguments to filter DetectionResults to count.
     * @example
     * // Count the number of DetectionResults
     * const count = await prisma.detectionResult.count({
     *   where: {
     *     // ... the filter for the DetectionResults we want to count
     *   }
     * })
    **/
    count<T extends DetectionResultCountArgs>(
      args?: Subset<T, DetectionResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetectionResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetectionResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetectionResultAggregateArgs>(args: Subset<T, DetectionResultAggregateArgs>): Prisma.PrismaPromise<GetDetectionResultAggregateType<T>>

    /**
     * Group by DetectionResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetectionResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetectionResultGroupByArgs['orderBy'] }
        : { orderBy?: DetectionResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetectionResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetectionResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetectionResult model
   */
  readonly fields: DetectionResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetectionResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetectionResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detectionHistory<T extends DetectionHistoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DetectionHistoryDefaultArgs<ExtArgs>>): Prisma__DetectionHistoryClient<$Result.GetResult<Prisma.$DetectionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fish<T extends DetectionResult$fishArgs<ExtArgs> = {}>(args?: Subset<T, DetectionResult$fishArgs<ExtArgs>>): Prisma__FishClient<$Result.GetResult<Prisma.$FishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DetectionResult model
   */
  interface DetectionResultFieldRefs {
    readonly id: FieldRef<"DetectionResult", 'String'>
    readonly confidence: FieldRef<"DetectionResult", 'Float'>
    readonly createdAt: FieldRef<"DetectionResult", 'DateTime'>
    readonly updatedAt: FieldRef<"DetectionResult", 'DateTime'>
    readonly detectionHistoryId: FieldRef<"DetectionResult", 'String'>
    readonly fishId: FieldRef<"DetectionResult", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DetectionResult findUnique
   */
  export type DetectionResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionResult
     */
    select?: DetectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionResult
     */
    omit?: DetectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionResultInclude<ExtArgs> | null
    /**
     * Filter, which DetectionResult to fetch.
     */
    where: DetectionResultWhereUniqueInput
  }

  /**
   * DetectionResult findUniqueOrThrow
   */
  export type DetectionResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionResult
     */
    select?: DetectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionResult
     */
    omit?: DetectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionResultInclude<ExtArgs> | null
    /**
     * Filter, which DetectionResult to fetch.
     */
    where: DetectionResultWhereUniqueInput
  }

  /**
   * DetectionResult findFirst
   */
  export type DetectionResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionResult
     */
    select?: DetectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionResult
     */
    omit?: DetectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionResultInclude<ExtArgs> | null
    /**
     * Filter, which DetectionResult to fetch.
     */
    where?: DetectionResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetectionResults to fetch.
     */
    orderBy?: DetectionResultOrderByWithRelationInput | DetectionResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetectionResults.
     */
    cursor?: DetectionResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetectionResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetectionResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetectionResults.
     */
    distinct?: DetectionResultScalarFieldEnum | DetectionResultScalarFieldEnum[]
  }

  /**
   * DetectionResult findFirstOrThrow
   */
  export type DetectionResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionResult
     */
    select?: DetectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionResult
     */
    omit?: DetectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionResultInclude<ExtArgs> | null
    /**
     * Filter, which DetectionResult to fetch.
     */
    where?: DetectionResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetectionResults to fetch.
     */
    orderBy?: DetectionResultOrderByWithRelationInput | DetectionResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetectionResults.
     */
    cursor?: DetectionResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetectionResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetectionResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetectionResults.
     */
    distinct?: DetectionResultScalarFieldEnum | DetectionResultScalarFieldEnum[]
  }

  /**
   * DetectionResult findMany
   */
  export type DetectionResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionResult
     */
    select?: DetectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionResult
     */
    omit?: DetectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionResultInclude<ExtArgs> | null
    /**
     * Filter, which DetectionResults to fetch.
     */
    where?: DetectionResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetectionResults to fetch.
     */
    orderBy?: DetectionResultOrderByWithRelationInput | DetectionResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetectionResults.
     */
    cursor?: DetectionResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetectionResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetectionResults.
     */
    skip?: number
    distinct?: DetectionResultScalarFieldEnum | DetectionResultScalarFieldEnum[]
  }

  /**
   * DetectionResult create
   */
  export type DetectionResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionResult
     */
    select?: DetectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionResult
     */
    omit?: DetectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionResultInclude<ExtArgs> | null
    /**
     * The data needed to create a DetectionResult.
     */
    data: XOR<DetectionResultCreateInput, DetectionResultUncheckedCreateInput>
  }

  /**
   * DetectionResult createMany
   */
  export type DetectionResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetectionResults.
     */
    data: DetectionResultCreateManyInput | DetectionResultCreateManyInput[]
  }

  /**
   * DetectionResult update
   */
  export type DetectionResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionResult
     */
    select?: DetectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionResult
     */
    omit?: DetectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionResultInclude<ExtArgs> | null
    /**
     * The data needed to update a DetectionResult.
     */
    data: XOR<DetectionResultUpdateInput, DetectionResultUncheckedUpdateInput>
    /**
     * Choose, which DetectionResult to update.
     */
    where: DetectionResultWhereUniqueInput
  }

  /**
   * DetectionResult updateMany
   */
  export type DetectionResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetectionResults.
     */
    data: XOR<DetectionResultUpdateManyMutationInput, DetectionResultUncheckedUpdateManyInput>
    /**
     * Filter which DetectionResults to update
     */
    where?: DetectionResultWhereInput
    /**
     * Limit how many DetectionResults to update.
     */
    limit?: number
  }

  /**
   * DetectionResult upsert
   */
  export type DetectionResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionResult
     */
    select?: DetectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionResult
     */
    omit?: DetectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionResultInclude<ExtArgs> | null
    /**
     * The filter to search for the DetectionResult to update in case it exists.
     */
    where: DetectionResultWhereUniqueInput
    /**
     * In case the DetectionResult found by the `where` argument doesn't exist, create a new DetectionResult with this data.
     */
    create: XOR<DetectionResultCreateInput, DetectionResultUncheckedCreateInput>
    /**
     * In case the DetectionResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetectionResultUpdateInput, DetectionResultUncheckedUpdateInput>
  }

  /**
   * DetectionResult delete
   */
  export type DetectionResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionResult
     */
    select?: DetectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionResult
     */
    omit?: DetectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionResultInclude<ExtArgs> | null
    /**
     * Filter which DetectionResult to delete.
     */
    where: DetectionResultWhereUniqueInput
  }

  /**
   * DetectionResult deleteMany
   */
  export type DetectionResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetectionResults to delete
     */
    where?: DetectionResultWhereInput
    /**
     * Limit how many DetectionResults to delete.
     */
    limit?: number
  }

  /**
   * DetectionResult findRaw
   */
  export type DetectionResultFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DetectionResult aggregateRaw
   */
  export type DetectionResultAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DetectionResult.fish
   */
  export type DetectionResult$fishArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish
     */
    select?: FishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fish
     */
    omit?: FishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishInclude<ExtArgs> | null
    where?: FishWhereInput
  }

  /**
   * DetectionResult without action
   */
  export type DetectionResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionResult
     */
    select?: DetectionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionResult
     */
    omit?: DetectionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionResultInclude<ExtArgs> | null
  }


  /**
   * Model UserPointHistory
   */

  export type AggregateUserPointHistory = {
    _count: UserPointHistoryCountAggregateOutputType | null
    _avg: UserPointHistoryAvgAggregateOutputType | null
    _sum: UserPointHistorySumAggregateOutputType | null
    _min: UserPointHistoryMinAggregateOutputType | null
    _max: UserPointHistoryMaxAggregateOutputType | null
  }

  export type UserPointHistoryAvgAggregateOutputType = {
    point: number | null
  }

  export type UserPointHistorySumAggregateOutputType = {
    point: number | null
  }

  export type UserPointHistoryMinAggregateOutputType = {
    id: string | null
    point: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    detectionHistoryId: string | null
    missionId: string | null
    fishId: string | null
  }

  export type UserPointHistoryMaxAggregateOutputType = {
    id: string | null
    point: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    detectionHistoryId: string | null
    missionId: string | null
    fishId: string | null
  }

  export type UserPointHistoryCountAggregateOutputType = {
    id: number
    point: number
    createdAt: number
    updatedAt: number
    userId: number
    detectionHistoryId: number
    missionId: number
    fishId: number
    _all: number
  }


  export type UserPointHistoryAvgAggregateInputType = {
    point?: true
  }

  export type UserPointHistorySumAggregateInputType = {
    point?: true
  }

  export type UserPointHistoryMinAggregateInputType = {
    id?: true
    point?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    detectionHistoryId?: true
    missionId?: true
    fishId?: true
  }

  export type UserPointHistoryMaxAggregateInputType = {
    id?: true
    point?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    detectionHistoryId?: true
    missionId?: true
    fishId?: true
  }

  export type UserPointHistoryCountAggregateInputType = {
    id?: true
    point?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    detectionHistoryId?: true
    missionId?: true
    fishId?: true
    _all?: true
  }

  export type UserPointHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPointHistory to aggregate.
     */
    where?: UserPointHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPointHistories to fetch.
     */
    orderBy?: UserPointHistoryOrderByWithRelationInput | UserPointHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPointHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPointHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPointHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPointHistories
    **/
    _count?: true | UserPointHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPointHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPointHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPointHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPointHistoryMaxAggregateInputType
  }

  export type GetUserPointHistoryAggregateType<T extends UserPointHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPointHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPointHistory[P]>
      : GetScalarType<T[P], AggregateUserPointHistory[P]>
  }




  export type UserPointHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPointHistoryWhereInput
    orderBy?: UserPointHistoryOrderByWithAggregationInput | UserPointHistoryOrderByWithAggregationInput[]
    by: UserPointHistoryScalarFieldEnum[] | UserPointHistoryScalarFieldEnum
    having?: UserPointHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPointHistoryCountAggregateInputType | true
    _avg?: UserPointHistoryAvgAggregateInputType
    _sum?: UserPointHistorySumAggregateInputType
    _min?: UserPointHistoryMinAggregateInputType
    _max?: UserPointHistoryMaxAggregateInputType
  }

  export type UserPointHistoryGroupByOutputType = {
    id: string
    point: number
    createdAt: Date
    updatedAt: Date
    userId: string
    detectionHistoryId: string | null
    missionId: string | null
    fishId: string | null
    _count: UserPointHistoryCountAggregateOutputType | null
    _avg: UserPointHistoryAvgAggregateOutputType | null
    _sum: UserPointHistorySumAggregateOutputType | null
    _min: UserPointHistoryMinAggregateOutputType | null
    _max: UserPointHistoryMaxAggregateOutputType | null
  }

  type GetUserPointHistoryGroupByPayload<T extends UserPointHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPointHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPointHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPointHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserPointHistoryGroupByOutputType[P]>
        }
      >
    >


  export type UserPointHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    detectionHistoryId?: boolean
    missionId?: boolean
    fishId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    detectionHistory?: boolean | UserPointHistory$detectionHistoryArgs<ExtArgs>
    mission?: boolean | UserPointHistory$missionArgs<ExtArgs>
    fish?: boolean | UserPointHistory$fishArgs<ExtArgs>
  }, ExtArgs["result"]["userPointHistory"]>



  export type UserPointHistorySelectScalar = {
    id?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    detectionHistoryId?: boolean
    missionId?: boolean
    fishId?: boolean
  }

  export type UserPointHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "point" | "createdAt" | "updatedAt" | "userId" | "detectionHistoryId" | "missionId" | "fishId", ExtArgs["result"]["userPointHistory"]>
  export type UserPointHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    detectionHistory?: boolean | UserPointHistory$detectionHistoryArgs<ExtArgs>
    mission?: boolean | UserPointHistory$missionArgs<ExtArgs>
    fish?: boolean | UserPointHistory$fishArgs<ExtArgs>
  }

  export type $UserPointHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPointHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      detectionHistory: Prisma.$DetectionHistoryPayload<ExtArgs> | null
      mission: Prisma.$MissionPayload<ExtArgs> | null
      fish: Prisma.$FishPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      point: number
      createdAt: Date
      updatedAt: Date
      userId: string
      detectionHistoryId: string | null
      missionId: string | null
      fishId: string | null
    }, ExtArgs["result"]["userPointHistory"]>
    composites: {}
  }

  type UserPointHistoryGetPayload<S extends boolean | null | undefined | UserPointHistoryDefaultArgs> = $Result.GetResult<Prisma.$UserPointHistoryPayload, S>

  type UserPointHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPointHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPointHistoryCountAggregateInputType | true
    }

  export interface UserPointHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPointHistory'], meta: { name: 'UserPointHistory' } }
    /**
     * Find zero or one UserPointHistory that matches the filter.
     * @param {UserPointHistoryFindUniqueArgs} args - Arguments to find a UserPointHistory
     * @example
     * // Get one UserPointHistory
     * const userPointHistory = await prisma.userPointHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPointHistoryFindUniqueArgs>(args: SelectSubset<T, UserPointHistoryFindUniqueArgs<ExtArgs>>): Prisma__UserPointHistoryClient<$Result.GetResult<Prisma.$UserPointHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPointHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPointHistoryFindUniqueOrThrowArgs} args - Arguments to find a UserPointHistory
     * @example
     * // Get one UserPointHistory
     * const userPointHistory = await prisma.userPointHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPointHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPointHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPointHistoryClient<$Result.GetResult<Prisma.$UserPointHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPointHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointHistoryFindFirstArgs} args - Arguments to find a UserPointHistory
     * @example
     * // Get one UserPointHistory
     * const userPointHistory = await prisma.userPointHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPointHistoryFindFirstArgs>(args?: SelectSubset<T, UserPointHistoryFindFirstArgs<ExtArgs>>): Prisma__UserPointHistoryClient<$Result.GetResult<Prisma.$UserPointHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPointHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointHistoryFindFirstOrThrowArgs} args - Arguments to find a UserPointHistory
     * @example
     * // Get one UserPointHistory
     * const userPointHistory = await prisma.userPointHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPointHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPointHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPointHistoryClient<$Result.GetResult<Prisma.$UserPointHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPointHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPointHistories
     * const userPointHistories = await prisma.userPointHistory.findMany()
     * 
     * // Get first 10 UserPointHistories
     * const userPointHistories = await prisma.userPointHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPointHistoryWithIdOnly = await prisma.userPointHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPointHistoryFindManyArgs>(args?: SelectSubset<T, UserPointHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPointHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPointHistory.
     * @param {UserPointHistoryCreateArgs} args - Arguments to create a UserPointHistory.
     * @example
     * // Create one UserPointHistory
     * const UserPointHistory = await prisma.userPointHistory.create({
     *   data: {
     *     // ... data to create a UserPointHistory
     *   }
     * })
     * 
     */
    create<T extends UserPointHistoryCreateArgs>(args: SelectSubset<T, UserPointHistoryCreateArgs<ExtArgs>>): Prisma__UserPointHistoryClient<$Result.GetResult<Prisma.$UserPointHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPointHistories.
     * @param {UserPointHistoryCreateManyArgs} args - Arguments to create many UserPointHistories.
     * @example
     * // Create many UserPointHistories
     * const userPointHistory = await prisma.userPointHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPointHistoryCreateManyArgs>(args?: SelectSubset<T, UserPointHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserPointHistory.
     * @param {UserPointHistoryDeleteArgs} args - Arguments to delete one UserPointHistory.
     * @example
     * // Delete one UserPointHistory
     * const UserPointHistory = await prisma.userPointHistory.delete({
     *   where: {
     *     // ... filter to delete one UserPointHistory
     *   }
     * })
     * 
     */
    delete<T extends UserPointHistoryDeleteArgs>(args: SelectSubset<T, UserPointHistoryDeleteArgs<ExtArgs>>): Prisma__UserPointHistoryClient<$Result.GetResult<Prisma.$UserPointHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPointHistory.
     * @param {UserPointHistoryUpdateArgs} args - Arguments to update one UserPointHistory.
     * @example
     * // Update one UserPointHistory
     * const userPointHistory = await prisma.userPointHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPointHistoryUpdateArgs>(args: SelectSubset<T, UserPointHistoryUpdateArgs<ExtArgs>>): Prisma__UserPointHistoryClient<$Result.GetResult<Prisma.$UserPointHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPointHistories.
     * @param {UserPointHistoryDeleteManyArgs} args - Arguments to filter UserPointHistories to delete.
     * @example
     * // Delete a few UserPointHistories
     * const { count } = await prisma.userPointHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPointHistoryDeleteManyArgs>(args?: SelectSubset<T, UserPointHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPointHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPointHistories
     * const userPointHistory = await prisma.userPointHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPointHistoryUpdateManyArgs>(args: SelectSubset<T, UserPointHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPointHistory.
     * @param {UserPointHistoryUpsertArgs} args - Arguments to update or create a UserPointHistory.
     * @example
     * // Update or create a UserPointHistory
     * const userPointHistory = await prisma.userPointHistory.upsert({
     *   create: {
     *     // ... data to create a UserPointHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPointHistory we want to update
     *   }
     * })
     */
    upsert<T extends UserPointHistoryUpsertArgs>(args: SelectSubset<T, UserPointHistoryUpsertArgs<ExtArgs>>): Prisma__UserPointHistoryClient<$Result.GetResult<Prisma.$UserPointHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPointHistories that matches the filter.
     * @param {UserPointHistoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userPointHistory = await prisma.userPointHistory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserPointHistoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserPointHistory.
     * @param {UserPointHistoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userPointHistory = await prisma.userPointHistory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserPointHistoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserPointHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointHistoryCountArgs} args - Arguments to filter UserPointHistories to count.
     * @example
     * // Count the number of UserPointHistories
     * const count = await prisma.userPointHistory.count({
     *   where: {
     *     // ... the filter for the UserPointHistories we want to count
     *   }
     * })
    **/
    count<T extends UserPointHistoryCountArgs>(
      args?: Subset<T, UserPointHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPointHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPointHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPointHistoryAggregateArgs>(args: Subset<T, UserPointHistoryAggregateArgs>): Prisma.PrismaPromise<GetUserPointHistoryAggregateType<T>>

    /**
     * Group by UserPointHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPointHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPointHistoryGroupByArgs['orderBy'] }
        : { orderBy?: UserPointHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPointHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPointHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPointHistory model
   */
  readonly fields: UserPointHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPointHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPointHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detectionHistory<T extends UserPointHistory$detectionHistoryArgs<ExtArgs> = {}>(args?: Subset<T, UserPointHistory$detectionHistoryArgs<ExtArgs>>): Prisma__DetectionHistoryClient<$Result.GetResult<Prisma.$DetectionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mission<T extends UserPointHistory$missionArgs<ExtArgs> = {}>(args?: Subset<T, UserPointHistory$missionArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    fish<T extends UserPointHistory$fishArgs<ExtArgs> = {}>(args?: Subset<T, UserPointHistory$fishArgs<ExtArgs>>): Prisma__FishClient<$Result.GetResult<Prisma.$FishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPointHistory model
   */
  interface UserPointHistoryFieldRefs {
    readonly id: FieldRef<"UserPointHistory", 'String'>
    readonly point: FieldRef<"UserPointHistory", 'Int'>
    readonly createdAt: FieldRef<"UserPointHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPointHistory", 'DateTime'>
    readonly userId: FieldRef<"UserPointHistory", 'String'>
    readonly detectionHistoryId: FieldRef<"UserPointHistory", 'String'>
    readonly missionId: FieldRef<"UserPointHistory", 'String'>
    readonly fishId: FieldRef<"UserPointHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserPointHistory findUnique
   */
  export type UserPointHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPointHistory
     */
    select?: UserPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPointHistory
     */
    omit?: UserPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserPointHistory to fetch.
     */
    where: UserPointHistoryWhereUniqueInput
  }

  /**
   * UserPointHistory findUniqueOrThrow
   */
  export type UserPointHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPointHistory
     */
    select?: UserPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPointHistory
     */
    omit?: UserPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserPointHistory to fetch.
     */
    where: UserPointHistoryWhereUniqueInput
  }

  /**
   * UserPointHistory findFirst
   */
  export type UserPointHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPointHistory
     */
    select?: UserPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPointHistory
     */
    omit?: UserPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserPointHistory to fetch.
     */
    where?: UserPointHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPointHistories to fetch.
     */
    orderBy?: UserPointHistoryOrderByWithRelationInput | UserPointHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPointHistories.
     */
    cursor?: UserPointHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPointHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPointHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPointHistories.
     */
    distinct?: UserPointHistoryScalarFieldEnum | UserPointHistoryScalarFieldEnum[]
  }

  /**
   * UserPointHistory findFirstOrThrow
   */
  export type UserPointHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPointHistory
     */
    select?: UserPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPointHistory
     */
    omit?: UserPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserPointHistory to fetch.
     */
    where?: UserPointHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPointHistories to fetch.
     */
    orderBy?: UserPointHistoryOrderByWithRelationInput | UserPointHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPointHistories.
     */
    cursor?: UserPointHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPointHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPointHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPointHistories.
     */
    distinct?: UserPointHistoryScalarFieldEnum | UserPointHistoryScalarFieldEnum[]
  }

  /**
   * UserPointHistory findMany
   */
  export type UserPointHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPointHistory
     */
    select?: UserPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPointHistory
     */
    omit?: UserPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserPointHistories to fetch.
     */
    where?: UserPointHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPointHistories to fetch.
     */
    orderBy?: UserPointHistoryOrderByWithRelationInput | UserPointHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPointHistories.
     */
    cursor?: UserPointHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPointHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPointHistories.
     */
    skip?: number
    distinct?: UserPointHistoryScalarFieldEnum | UserPointHistoryScalarFieldEnum[]
  }

  /**
   * UserPointHistory create
   */
  export type UserPointHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPointHistory
     */
    select?: UserPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPointHistory
     */
    omit?: UserPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPointHistory.
     */
    data: XOR<UserPointHistoryCreateInput, UserPointHistoryUncheckedCreateInput>
  }

  /**
   * UserPointHistory createMany
   */
  export type UserPointHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPointHistories.
     */
    data: UserPointHistoryCreateManyInput | UserPointHistoryCreateManyInput[]
  }

  /**
   * UserPointHistory update
   */
  export type UserPointHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPointHistory
     */
    select?: UserPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPointHistory
     */
    omit?: UserPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPointHistory.
     */
    data: XOR<UserPointHistoryUpdateInput, UserPointHistoryUncheckedUpdateInput>
    /**
     * Choose, which UserPointHistory to update.
     */
    where: UserPointHistoryWhereUniqueInput
  }

  /**
   * UserPointHistory updateMany
   */
  export type UserPointHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPointHistories.
     */
    data: XOR<UserPointHistoryUpdateManyMutationInput, UserPointHistoryUncheckedUpdateManyInput>
    /**
     * Filter which UserPointHistories to update
     */
    where?: UserPointHistoryWhereInput
    /**
     * Limit how many UserPointHistories to update.
     */
    limit?: number
  }

  /**
   * UserPointHistory upsert
   */
  export type UserPointHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPointHistory
     */
    select?: UserPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPointHistory
     */
    omit?: UserPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPointHistory to update in case it exists.
     */
    where: UserPointHistoryWhereUniqueInput
    /**
     * In case the UserPointHistory found by the `where` argument doesn't exist, create a new UserPointHistory with this data.
     */
    create: XOR<UserPointHistoryCreateInput, UserPointHistoryUncheckedCreateInput>
    /**
     * In case the UserPointHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPointHistoryUpdateInput, UserPointHistoryUncheckedUpdateInput>
  }

  /**
   * UserPointHistory delete
   */
  export type UserPointHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPointHistory
     */
    select?: UserPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPointHistory
     */
    omit?: UserPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointHistoryInclude<ExtArgs> | null
    /**
     * Filter which UserPointHistory to delete.
     */
    where: UserPointHistoryWhereUniqueInput
  }

  /**
   * UserPointHistory deleteMany
   */
  export type UserPointHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPointHistories to delete
     */
    where?: UserPointHistoryWhereInput
    /**
     * Limit how many UserPointHistories to delete.
     */
    limit?: number
  }

  /**
   * UserPointHistory findRaw
   */
  export type UserPointHistoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserPointHistory aggregateRaw
   */
  export type UserPointHistoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserPointHistory.detectionHistory
   */
  export type UserPointHistory$detectionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionHistory
     */
    select?: DetectionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionHistory
     */
    omit?: DetectionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionHistoryInclude<ExtArgs> | null
    where?: DetectionHistoryWhereInput
  }

  /**
   * UserPointHistory.mission
   */
  export type UserPointHistory$missionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    where?: MissionWhereInput
  }

  /**
   * UserPointHistory.fish
   */
  export type UserPointHistory$fishArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish
     */
    select?: FishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fish
     */
    omit?: FishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FishInclude<ExtArgs> | null
    where?: FishWhereInput
  }

  /**
   * UserPointHistory without action
   */
  export type UserPointHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPointHistory
     */
    select?: UserPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPointHistory
     */
    omit?: UserPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Mission
   */

  export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  export type MissionAvgAggregateOutputType = {
    point: number | null
  }

  export type MissionSumAggregateOutputType = {
    point: number | null
  }

  export type MissionMinAggregateOutputType = {
    id: string | null
    title: string | null
    point: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    point: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissionCountAggregateOutputType = {
    id: number
    title: number
    point: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MissionAvgAggregateInputType = {
    point?: true
  }

  export type MissionSumAggregateInputType = {
    point?: true
  }

  export type MissionMinAggregateInputType = {
    id?: true
    title?: true
    point?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissionMaxAggregateInputType = {
    id?: true
    title?: true
    point?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissionCountAggregateInputType = {
    id?: true
    title?: true
    point?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mission to aggregate.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Missions
    **/
    _count?: true | MissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionMaxAggregateInputType
  }

  export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
        [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMission[P]>
      : GetScalarType<T[P], AggregateMission[P]>
  }




  export type MissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithAggregationInput | MissionOrderByWithAggregationInput[]
    by: MissionScalarFieldEnum[] | MissionScalarFieldEnum
    having?: MissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionCountAggregateInputType | true
    _avg?: MissionAvgAggregateInputType
    _sum?: MissionSumAggregateInputType
    _min?: MissionMinAggregateInputType
    _max?: MissionMaxAggregateInputType
  }

  export type MissionGroupByOutputType = {
    id: string
    title: string
    point: number
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  type GetMissionGroupByPayload<T extends MissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionGroupByOutputType[P]>
            : GetScalarType<T[P], MissionGroupByOutputType[P]>
        }
      >
    >


  export type MissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    point?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    detailTargets?: boolean | Mission$detailTargetsArgs<ExtArgs>
    userProgresses?: boolean | Mission$userProgressesArgs<ExtArgs>
    pointHistories?: boolean | Mission$pointHistoriesArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>



  export type MissionSelectScalar = {
    id?: boolean
    title?: boolean
    point?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "point" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["mission"]>
  export type MissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detailTargets?: boolean | Mission$detailTargetsArgs<ExtArgs>
    userProgresses?: boolean | Mission$userProgressesArgs<ExtArgs>
    pointHistories?: boolean | Mission$pointHistoriesArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mission"
    objects: {
      detailTargets: Prisma.$MissionDetailTargetPayload<ExtArgs>[]
      userProgresses: Prisma.$UserMissionProgressPayload<ExtArgs>[]
      pointHistories: Prisma.$UserPointHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      point: number
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mission"]>
    composites: {}
  }

  type MissionGetPayload<S extends boolean | null | undefined | MissionDefaultArgs> = $Result.GetResult<Prisma.$MissionPayload, S>

  type MissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionCountAggregateInputType | true
    }

  export interface MissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mission'], meta: { name: 'Mission' } }
    /**
     * Find zero or one Mission that matches the filter.
     * @param {MissionFindUniqueArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionFindUniqueArgs>(args: SelectSubset<T, MissionFindUniqueArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionFindUniqueOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionFindFirstArgs>(args?: SelectSubset<T, MissionFindFirstArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.mission.findMany()
     * 
     * // Get first 10 Missions
     * const missions = await prisma.mission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionWithIdOnly = await prisma.mission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionFindManyArgs>(args?: SelectSubset<T, MissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mission.
     * @param {MissionCreateArgs} args - Arguments to create a Mission.
     * @example
     * // Create one Mission
     * const Mission = await prisma.mission.create({
     *   data: {
     *     // ... data to create a Mission
     *   }
     * })
     * 
     */
    create<T extends MissionCreateArgs>(args: SelectSubset<T, MissionCreateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missions.
     * @param {MissionCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionCreateManyArgs>(args?: SelectSubset<T, MissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mission.
     * @param {MissionDeleteArgs} args - Arguments to delete one Mission.
     * @example
     * // Delete one Mission
     * const Mission = await prisma.mission.delete({
     *   where: {
     *     // ... filter to delete one Mission
     *   }
     * })
     * 
     */
    delete<T extends MissionDeleteArgs>(args: SelectSubset<T, MissionDeleteArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mission.
     * @param {MissionUpdateArgs} args - Arguments to update one Mission.
     * @example
     * // Update one Mission
     * const mission = await prisma.mission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionUpdateArgs>(args: SelectSubset<T, MissionUpdateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missions.
     * @param {MissionDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.mission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionDeleteManyArgs>(args?: SelectSubset<T, MissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionUpdateManyArgs>(args: SelectSubset<T, MissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mission.
     * @param {MissionUpsertArgs} args - Arguments to update or create a Mission.
     * @example
     * // Update or create a Mission
     * const mission = await prisma.mission.upsert({
     *   create: {
     *     // ... data to create a Mission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mission we want to update
     *   }
     * })
     */
    upsert<T extends MissionUpsertArgs>(args: SelectSubset<T, MissionUpsertArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * @param {MissionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const mission = await prisma.mission.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MissionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Mission.
     * @param {MissionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const mission = await prisma.mission.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MissionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.mission.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
    **/
    count<T extends MissionCountArgs>(
      args?: Subset<T, MissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionAggregateArgs>(args: Subset<T, MissionAggregateArgs>): Prisma.PrismaPromise<GetMissionAggregateType<T>>

    /**
     * Group by Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionGroupByArgs['orderBy'] }
        : { orderBy?: MissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mission model
   */
  readonly fields: MissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detailTargets<T extends Mission$detailTargetsArgs<ExtArgs> = {}>(args?: Subset<T, Mission$detailTargetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionDetailTargetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userProgresses<T extends Mission$userProgressesArgs<ExtArgs> = {}>(args?: Subset<T, Mission$userProgressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMissionProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pointHistories<T extends Mission$pointHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Mission$pointHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPointHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mission model
   */
  interface MissionFieldRefs {
    readonly id: FieldRef<"Mission", 'String'>
    readonly title: FieldRef<"Mission", 'String'>
    readonly point: FieldRef<"Mission", 'Int'>
    readonly description: FieldRef<"Mission", 'String'>
    readonly createdAt: FieldRef<"Mission", 'DateTime'>
    readonly updatedAt: FieldRef<"Mission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mission findUnique
   */
  export type MissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findUniqueOrThrow
   */
  export type MissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findFirst
   */
  export type MissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findFirstOrThrow
   */
  export type MissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findMany
   */
  export type MissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission create
   */
  export type MissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Mission.
     */
    data: XOR<MissionCreateInput, MissionUncheckedCreateInput>
  }

  /**
   * Mission createMany
   */
  export type MissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
  }

  /**
   * Mission update
   */
  export type MissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Mission.
     */
    data: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
    /**
     * Choose, which Mission to update.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission updateMany
   */
  export type MissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Mission upsert
   */
  export type MissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Mission to update in case it exists.
     */
    where: MissionWhereUniqueInput
    /**
     * In case the Mission found by the `where` argument doesn't exist, create a new Mission with this data.
     */
    create: XOR<MissionCreateInput, MissionUncheckedCreateInput>
    /**
     * In case the Mission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
  }

  /**
   * Mission delete
   */
  export type MissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter which Mission to delete.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission deleteMany
   */
  export type MissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missions to delete
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to delete.
     */
    limit?: number
  }

  /**
   * Mission findRaw
   */
  export type MissionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Mission aggregateRaw
   */
  export type MissionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Mission.detailTargets
   */
  export type Mission$detailTargetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionDetailTarget
     */
    select?: MissionDetailTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionDetailTarget
     */
    omit?: MissionDetailTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionDetailTargetInclude<ExtArgs> | null
    where?: MissionDetailTargetWhereInput
    orderBy?: MissionDetailTargetOrderByWithRelationInput | MissionDetailTargetOrderByWithRelationInput[]
    cursor?: MissionDetailTargetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionDetailTargetScalarFieldEnum | MissionDetailTargetScalarFieldEnum[]
  }

  /**
   * Mission.userProgresses
   */
  export type Mission$userProgressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMissionProgress
     */
    select?: UserMissionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMissionProgress
     */
    omit?: UserMissionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionProgressInclude<ExtArgs> | null
    where?: UserMissionProgressWhereInput
    orderBy?: UserMissionProgressOrderByWithRelationInput | UserMissionProgressOrderByWithRelationInput[]
    cursor?: UserMissionProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMissionProgressScalarFieldEnum | UserMissionProgressScalarFieldEnum[]
  }

  /**
   * Mission.pointHistories
   */
  export type Mission$pointHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPointHistory
     */
    select?: UserPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPointHistory
     */
    omit?: UserPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointHistoryInclude<ExtArgs> | null
    where?: UserPointHistoryWhereInput
    orderBy?: UserPointHistoryOrderByWithRelationInput | UserPointHistoryOrderByWithRelationInput[]
    cursor?: UserPointHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPointHistoryScalarFieldEnum | UserPointHistoryScalarFieldEnum[]
  }

  /**
   * Mission without action
   */
  export type MissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
  }


  /**
   * Model MissionDetailTarget
   */

  export type AggregateMissionDetailTarget = {
    _count: MissionDetailTargetCountAggregateOutputType | null
    _avg: MissionDetailTargetAvgAggregateOutputType | null
    _sum: MissionDetailTargetSumAggregateOutputType | null
    _min: MissionDetailTargetMinAggregateOutputType | null
    _max: MissionDetailTargetMaxAggregateOutputType | null
  }

  export type MissionDetailTargetAvgAggregateOutputType = {
    amount: number | null
  }

  export type MissionDetailTargetSumAggregateOutputType = {
    amount: number | null
  }

  export type MissionDetailTargetMinAggregateOutputType = {
    id: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    missionId: string | null
    fishId: string | null
  }

  export type MissionDetailTargetMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    missionId: string | null
    fishId: string | null
  }

  export type MissionDetailTargetCountAggregateOutputType = {
    id: number
    amount: number
    createdAt: number
    updatedAt: number
    missionId: number
    fishId: number
    _all: number
  }


  export type MissionDetailTargetAvgAggregateInputType = {
    amount?: true
  }

  export type MissionDetailTargetSumAggregateInputType = {
    amount?: true
  }

  export type MissionDetailTargetMinAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    missionId?: true
    fishId?: true
  }

  export type MissionDetailTargetMaxAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    missionId?: true
    fishId?: true
  }

  export type MissionDetailTargetCountAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    missionId?: true
    fishId?: true
    _all?: true
  }

  export type MissionDetailTargetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionDetailTarget to aggregate.
     */
    where?: MissionDetailTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionDetailTargets to fetch.
     */
    orderBy?: MissionDetailTargetOrderByWithRelationInput | MissionDetailTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionDetailTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionDetailTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionDetailTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MissionDetailTargets
    **/
    _count?: true | MissionDetailTargetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionDetailTargetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionDetailTargetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionDetailTargetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionDetailTargetMaxAggregateInputType
  }

  export type GetMissionDetailTargetAggregateType<T extends MissionDetailTargetAggregateArgs> = {
        [P in keyof T & keyof AggregateMissionDetailTarget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissionDetailTarget[P]>
      : GetScalarType<T[P], AggregateMissionDetailTarget[P]>
  }




  export type MissionDetailTargetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionDetailTargetWhereInput
    orderBy?: MissionDetailTargetOrderByWithAggregationInput | MissionDetailTargetOrderByWithAggregationInput[]
    by: MissionDetailTargetScalarFieldEnum[] | MissionDetailTargetScalarFieldEnum
    having?: MissionDetailTargetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionDetailTargetCountAggregateInputType | true
    _avg?: MissionDetailTargetAvgAggregateInputType
    _sum?: MissionDetailTargetSumAggregateInputType
    _min?: MissionDetailTargetMinAggregateInputType
    _max?: MissionDetailTargetMaxAggregateInputType
  }

  export type MissionDetailTargetGroupByOutputType = {
    id: string
    amount: number
    createdAt: Date
    updatedAt: Date
    missionId: string
    fishId: string
    _count: MissionDetailTargetCountAggregateOutputType | null
    _avg: MissionDetailTargetAvgAggregateOutputType | null
    _sum: MissionDetailTargetSumAggregateOutputType | null
    _min: MissionDetailTargetMinAggregateOutputType | null
    _max: MissionDetailTargetMaxAggregateOutputType | null
  }

  type GetMissionDetailTargetGroupByPayload<T extends MissionDetailTargetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionDetailTargetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionDetailTargetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionDetailTargetGroupByOutputType[P]>
            : GetScalarType<T[P], MissionDetailTargetGroupByOutputType[P]>
        }
      >
    >


  export type MissionDetailTargetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    missionId?: boolean
    fishId?: boolean
    mission?: boolean | MissionDefaultArgs<ExtArgs>
    fish?: boolean | FishDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionDetailTarget"]>



  export type MissionDetailTargetSelectScalar = {
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    missionId?: boolean
    fishId?: boolean
  }

  export type MissionDetailTargetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "createdAt" | "updatedAt" | "missionId" | "fishId", ExtArgs["result"]["missionDetailTarget"]>
  export type MissionDetailTargetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mission?: boolean | MissionDefaultArgs<ExtArgs>
    fish?: boolean | FishDefaultArgs<ExtArgs>
  }

  export type $MissionDetailTargetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MissionDetailTarget"
    objects: {
      mission: Prisma.$MissionPayload<ExtArgs>
      fish: Prisma.$FishPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      createdAt: Date
      updatedAt: Date
      missionId: string
      fishId: string
    }, ExtArgs["result"]["missionDetailTarget"]>
    composites: {}
  }

  type MissionDetailTargetGetPayload<S extends boolean | null | undefined | MissionDetailTargetDefaultArgs> = $Result.GetResult<Prisma.$MissionDetailTargetPayload, S>

  type MissionDetailTargetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionDetailTargetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionDetailTargetCountAggregateInputType | true
    }

  export interface MissionDetailTargetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MissionDetailTarget'], meta: { name: 'MissionDetailTarget' } }
    /**
     * Find zero or one MissionDetailTarget that matches the filter.
     * @param {MissionDetailTargetFindUniqueArgs} args - Arguments to find a MissionDetailTarget
     * @example
     * // Get one MissionDetailTarget
     * const missionDetailTarget = await prisma.missionDetailTarget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionDetailTargetFindUniqueArgs>(args: SelectSubset<T, MissionDetailTargetFindUniqueArgs<ExtArgs>>): Prisma__MissionDetailTargetClient<$Result.GetResult<Prisma.$MissionDetailTargetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MissionDetailTarget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionDetailTargetFindUniqueOrThrowArgs} args - Arguments to find a MissionDetailTarget
     * @example
     * // Get one MissionDetailTarget
     * const missionDetailTarget = await prisma.missionDetailTarget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionDetailTargetFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionDetailTargetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionDetailTargetClient<$Result.GetResult<Prisma.$MissionDetailTargetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionDetailTarget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionDetailTargetFindFirstArgs} args - Arguments to find a MissionDetailTarget
     * @example
     * // Get one MissionDetailTarget
     * const missionDetailTarget = await prisma.missionDetailTarget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionDetailTargetFindFirstArgs>(args?: SelectSubset<T, MissionDetailTargetFindFirstArgs<ExtArgs>>): Prisma__MissionDetailTargetClient<$Result.GetResult<Prisma.$MissionDetailTargetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionDetailTarget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionDetailTargetFindFirstOrThrowArgs} args - Arguments to find a MissionDetailTarget
     * @example
     * // Get one MissionDetailTarget
     * const missionDetailTarget = await prisma.missionDetailTarget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionDetailTargetFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionDetailTargetFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionDetailTargetClient<$Result.GetResult<Prisma.$MissionDetailTargetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MissionDetailTargets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionDetailTargetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MissionDetailTargets
     * const missionDetailTargets = await prisma.missionDetailTarget.findMany()
     * 
     * // Get first 10 MissionDetailTargets
     * const missionDetailTargets = await prisma.missionDetailTarget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionDetailTargetWithIdOnly = await prisma.missionDetailTarget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionDetailTargetFindManyArgs>(args?: SelectSubset<T, MissionDetailTargetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionDetailTargetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MissionDetailTarget.
     * @param {MissionDetailTargetCreateArgs} args - Arguments to create a MissionDetailTarget.
     * @example
     * // Create one MissionDetailTarget
     * const MissionDetailTarget = await prisma.missionDetailTarget.create({
     *   data: {
     *     // ... data to create a MissionDetailTarget
     *   }
     * })
     * 
     */
    create<T extends MissionDetailTargetCreateArgs>(args: SelectSubset<T, MissionDetailTargetCreateArgs<ExtArgs>>): Prisma__MissionDetailTargetClient<$Result.GetResult<Prisma.$MissionDetailTargetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MissionDetailTargets.
     * @param {MissionDetailTargetCreateManyArgs} args - Arguments to create many MissionDetailTargets.
     * @example
     * // Create many MissionDetailTargets
     * const missionDetailTarget = await prisma.missionDetailTarget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionDetailTargetCreateManyArgs>(args?: SelectSubset<T, MissionDetailTargetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MissionDetailTarget.
     * @param {MissionDetailTargetDeleteArgs} args - Arguments to delete one MissionDetailTarget.
     * @example
     * // Delete one MissionDetailTarget
     * const MissionDetailTarget = await prisma.missionDetailTarget.delete({
     *   where: {
     *     // ... filter to delete one MissionDetailTarget
     *   }
     * })
     * 
     */
    delete<T extends MissionDetailTargetDeleteArgs>(args: SelectSubset<T, MissionDetailTargetDeleteArgs<ExtArgs>>): Prisma__MissionDetailTargetClient<$Result.GetResult<Prisma.$MissionDetailTargetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MissionDetailTarget.
     * @param {MissionDetailTargetUpdateArgs} args - Arguments to update one MissionDetailTarget.
     * @example
     * // Update one MissionDetailTarget
     * const missionDetailTarget = await prisma.missionDetailTarget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionDetailTargetUpdateArgs>(args: SelectSubset<T, MissionDetailTargetUpdateArgs<ExtArgs>>): Prisma__MissionDetailTargetClient<$Result.GetResult<Prisma.$MissionDetailTargetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MissionDetailTargets.
     * @param {MissionDetailTargetDeleteManyArgs} args - Arguments to filter MissionDetailTargets to delete.
     * @example
     * // Delete a few MissionDetailTargets
     * const { count } = await prisma.missionDetailTarget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionDetailTargetDeleteManyArgs>(args?: SelectSubset<T, MissionDetailTargetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionDetailTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionDetailTargetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MissionDetailTargets
     * const missionDetailTarget = await prisma.missionDetailTarget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionDetailTargetUpdateManyArgs>(args: SelectSubset<T, MissionDetailTargetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MissionDetailTarget.
     * @param {MissionDetailTargetUpsertArgs} args - Arguments to update or create a MissionDetailTarget.
     * @example
     * // Update or create a MissionDetailTarget
     * const missionDetailTarget = await prisma.missionDetailTarget.upsert({
     *   create: {
     *     // ... data to create a MissionDetailTarget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MissionDetailTarget we want to update
     *   }
     * })
     */
    upsert<T extends MissionDetailTargetUpsertArgs>(args: SelectSubset<T, MissionDetailTargetUpsertArgs<ExtArgs>>): Prisma__MissionDetailTargetClient<$Result.GetResult<Prisma.$MissionDetailTargetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MissionDetailTargets that matches the filter.
     * @param {MissionDetailTargetFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const missionDetailTarget = await prisma.missionDetailTarget.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MissionDetailTargetFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MissionDetailTarget.
     * @param {MissionDetailTargetAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const missionDetailTarget = await prisma.missionDetailTarget.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MissionDetailTargetAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MissionDetailTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionDetailTargetCountArgs} args - Arguments to filter MissionDetailTargets to count.
     * @example
     * // Count the number of MissionDetailTargets
     * const count = await prisma.missionDetailTarget.count({
     *   where: {
     *     // ... the filter for the MissionDetailTargets we want to count
     *   }
     * })
    **/
    count<T extends MissionDetailTargetCountArgs>(
      args?: Subset<T, MissionDetailTargetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionDetailTargetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MissionDetailTarget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionDetailTargetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionDetailTargetAggregateArgs>(args: Subset<T, MissionDetailTargetAggregateArgs>): Prisma.PrismaPromise<GetMissionDetailTargetAggregateType<T>>

    /**
     * Group by MissionDetailTarget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionDetailTargetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionDetailTargetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionDetailTargetGroupByArgs['orderBy'] }
        : { orderBy?: MissionDetailTargetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionDetailTargetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionDetailTargetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MissionDetailTarget model
   */
  readonly fields: MissionDetailTargetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MissionDetailTarget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionDetailTargetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mission<T extends MissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionDefaultArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fish<T extends FishDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FishDefaultArgs<ExtArgs>>): Prisma__FishClient<$Result.GetResult<Prisma.$FishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MissionDetailTarget model
   */
  interface MissionDetailTargetFieldRefs {
    readonly id: FieldRef<"MissionDetailTarget", 'String'>
    readonly amount: FieldRef<"MissionDetailTarget", 'Int'>
    readonly createdAt: FieldRef<"MissionDetailTarget", 'DateTime'>
    readonly updatedAt: FieldRef<"MissionDetailTarget", 'DateTime'>
    readonly missionId: FieldRef<"MissionDetailTarget", 'String'>
    readonly fishId: FieldRef<"MissionDetailTarget", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MissionDetailTarget findUnique
   */
  export type MissionDetailTargetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionDetailTarget
     */
    select?: MissionDetailTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionDetailTarget
     */
    omit?: MissionDetailTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionDetailTargetInclude<ExtArgs> | null
    /**
     * Filter, which MissionDetailTarget to fetch.
     */
    where: MissionDetailTargetWhereUniqueInput
  }

  /**
   * MissionDetailTarget findUniqueOrThrow
   */
  export type MissionDetailTargetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionDetailTarget
     */
    select?: MissionDetailTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionDetailTarget
     */
    omit?: MissionDetailTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionDetailTargetInclude<ExtArgs> | null
    /**
     * Filter, which MissionDetailTarget to fetch.
     */
    where: MissionDetailTargetWhereUniqueInput
  }

  /**
   * MissionDetailTarget findFirst
   */
  export type MissionDetailTargetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionDetailTarget
     */
    select?: MissionDetailTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionDetailTarget
     */
    omit?: MissionDetailTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionDetailTargetInclude<ExtArgs> | null
    /**
     * Filter, which MissionDetailTarget to fetch.
     */
    where?: MissionDetailTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionDetailTargets to fetch.
     */
    orderBy?: MissionDetailTargetOrderByWithRelationInput | MissionDetailTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionDetailTargets.
     */
    cursor?: MissionDetailTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionDetailTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionDetailTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionDetailTargets.
     */
    distinct?: MissionDetailTargetScalarFieldEnum | MissionDetailTargetScalarFieldEnum[]
  }

  /**
   * MissionDetailTarget findFirstOrThrow
   */
  export type MissionDetailTargetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionDetailTarget
     */
    select?: MissionDetailTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionDetailTarget
     */
    omit?: MissionDetailTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionDetailTargetInclude<ExtArgs> | null
    /**
     * Filter, which MissionDetailTarget to fetch.
     */
    where?: MissionDetailTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionDetailTargets to fetch.
     */
    orderBy?: MissionDetailTargetOrderByWithRelationInput | MissionDetailTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionDetailTargets.
     */
    cursor?: MissionDetailTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionDetailTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionDetailTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionDetailTargets.
     */
    distinct?: MissionDetailTargetScalarFieldEnum | MissionDetailTargetScalarFieldEnum[]
  }

  /**
   * MissionDetailTarget findMany
   */
  export type MissionDetailTargetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionDetailTarget
     */
    select?: MissionDetailTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionDetailTarget
     */
    omit?: MissionDetailTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionDetailTargetInclude<ExtArgs> | null
    /**
     * Filter, which MissionDetailTargets to fetch.
     */
    where?: MissionDetailTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionDetailTargets to fetch.
     */
    orderBy?: MissionDetailTargetOrderByWithRelationInput | MissionDetailTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MissionDetailTargets.
     */
    cursor?: MissionDetailTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionDetailTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionDetailTargets.
     */
    skip?: number
    distinct?: MissionDetailTargetScalarFieldEnum | MissionDetailTargetScalarFieldEnum[]
  }

  /**
   * MissionDetailTarget create
   */
  export type MissionDetailTargetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionDetailTarget
     */
    select?: MissionDetailTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionDetailTarget
     */
    omit?: MissionDetailTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionDetailTargetInclude<ExtArgs> | null
    /**
     * The data needed to create a MissionDetailTarget.
     */
    data: XOR<MissionDetailTargetCreateInput, MissionDetailTargetUncheckedCreateInput>
  }

  /**
   * MissionDetailTarget createMany
   */
  export type MissionDetailTargetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MissionDetailTargets.
     */
    data: MissionDetailTargetCreateManyInput | MissionDetailTargetCreateManyInput[]
  }

  /**
   * MissionDetailTarget update
   */
  export type MissionDetailTargetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionDetailTarget
     */
    select?: MissionDetailTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionDetailTarget
     */
    omit?: MissionDetailTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionDetailTargetInclude<ExtArgs> | null
    /**
     * The data needed to update a MissionDetailTarget.
     */
    data: XOR<MissionDetailTargetUpdateInput, MissionDetailTargetUncheckedUpdateInput>
    /**
     * Choose, which MissionDetailTarget to update.
     */
    where: MissionDetailTargetWhereUniqueInput
  }

  /**
   * MissionDetailTarget updateMany
   */
  export type MissionDetailTargetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MissionDetailTargets.
     */
    data: XOR<MissionDetailTargetUpdateManyMutationInput, MissionDetailTargetUncheckedUpdateManyInput>
    /**
     * Filter which MissionDetailTargets to update
     */
    where?: MissionDetailTargetWhereInput
    /**
     * Limit how many MissionDetailTargets to update.
     */
    limit?: number
  }

  /**
   * MissionDetailTarget upsert
   */
  export type MissionDetailTargetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionDetailTarget
     */
    select?: MissionDetailTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionDetailTarget
     */
    omit?: MissionDetailTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionDetailTargetInclude<ExtArgs> | null
    /**
     * The filter to search for the MissionDetailTarget to update in case it exists.
     */
    where: MissionDetailTargetWhereUniqueInput
    /**
     * In case the MissionDetailTarget found by the `where` argument doesn't exist, create a new MissionDetailTarget with this data.
     */
    create: XOR<MissionDetailTargetCreateInput, MissionDetailTargetUncheckedCreateInput>
    /**
     * In case the MissionDetailTarget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionDetailTargetUpdateInput, MissionDetailTargetUncheckedUpdateInput>
  }

  /**
   * MissionDetailTarget delete
   */
  export type MissionDetailTargetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionDetailTarget
     */
    select?: MissionDetailTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionDetailTarget
     */
    omit?: MissionDetailTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionDetailTargetInclude<ExtArgs> | null
    /**
     * Filter which MissionDetailTarget to delete.
     */
    where: MissionDetailTargetWhereUniqueInput
  }

  /**
   * MissionDetailTarget deleteMany
   */
  export type MissionDetailTargetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionDetailTargets to delete
     */
    where?: MissionDetailTargetWhereInput
    /**
     * Limit how many MissionDetailTargets to delete.
     */
    limit?: number
  }

  /**
   * MissionDetailTarget findRaw
   */
  export type MissionDetailTargetFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MissionDetailTarget aggregateRaw
   */
  export type MissionDetailTargetAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MissionDetailTarget without action
   */
  export type MissionDetailTargetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionDetailTarget
     */
    select?: MissionDetailTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionDetailTarget
     */
    omit?: MissionDetailTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionDetailTargetInclude<ExtArgs> | null
  }


  /**
   * Model UserMissionProgress
   */

  export type AggregateUserMissionProgress = {
    _count: UserMissionProgressCountAggregateOutputType | null
    _min: UserMissionProgressMinAggregateOutputType | null
    _max: UserMissionProgressMaxAggregateOutputType | null
  }

  export type UserMissionProgressMinAggregateOutputType = {
    id: string | null
    isSuccess: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    missionId: string | null
    fishId: string | null
  }

  export type UserMissionProgressMaxAggregateOutputType = {
    id: string | null
    isSuccess: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    missionId: string | null
    fishId: string | null
  }

  export type UserMissionProgressCountAggregateOutputType = {
    id: number
    isSuccess: number
    createdAt: number
    updatedAt: number
    userId: number
    missionId: number
    fishId: number
    _all: number
  }


  export type UserMissionProgressMinAggregateInputType = {
    id?: true
    isSuccess?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    missionId?: true
    fishId?: true
  }

  export type UserMissionProgressMaxAggregateInputType = {
    id?: true
    isSuccess?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    missionId?: true
    fishId?: true
  }

  export type UserMissionProgressCountAggregateInputType = {
    id?: true
    isSuccess?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    missionId?: true
    fishId?: true
    _all?: true
  }

  export type UserMissionProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMissionProgress to aggregate.
     */
    where?: UserMissionProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMissionProgresses to fetch.
     */
    orderBy?: UserMissionProgressOrderByWithRelationInput | UserMissionProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMissionProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMissionProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMissionProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMissionProgresses
    **/
    _count?: true | UserMissionProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMissionProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMissionProgressMaxAggregateInputType
  }

  export type GetUserMissionProgressAggregateType<T extends UserMissionProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMissionProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMissionProgress[P]>
      : GetScalarType<T[P], AggregateUserMissionProgress[P]>
  }




  export type UserMissionProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMissionProgressWhereInput
    orderBy?: UserMissionProgressOrderByWithAggregationInput | UserMissionProgressOrderByWithAggregationInput[]
    by: UserMissionProgressScalarFieldEnum[] | UserMissionProgressScalarFieldEnum
    having?: UserMissionProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMissionProgressCountAggregateInputType | true
    _min?: UserMissionProgressMinAggregateInputType
    _max?: UserMissionProgressMaxAggregateInputType
  }

  export type UserMissionProgressGroupByOutputType = {
    id: string
    isSuccess: boolean
    createdAt: Date
    updatedAt: Date
    userId: string
    missionId: string
    fishId: string
    _count: UserMissionProgressCountAggregateOutputType | null
    _min: UserMissionProgressMinAggregateOutputType | null
    _max: UserMissionProgressMaxAggregateOutputType | null
  }

  type GetUserMissionProgressGroupByPayload<T extends UserMissionProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMissionProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMissionProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMissionProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserMissionProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserMissionProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isSuccess?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    missionId?: boolean
    fishId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    mission?: boolean | MissionDefaultArgs<ExtArgs>
    fish?: boolean | FishDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMissionProgress"]>



  export type UserMissionProgressSelectScalar = {
    id?: boolean
    isSuccess?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    missionId?: boolean
    fishId?: boolean
  }

  export type UserMissionProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isSuccess" | "createdAt" | "updatedAt" | "userId" | "missionId" | "fishId", ExtArgs["result"]["userMissionProgress"]>
  export type UserMissionProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    mission?: boolean | MissionDefaultArgs<ExtArgs>
    fish?: boolean | FishDefaultArgs<ExtArgs>
  }

  export type $UserMissionProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMissionProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      mission: Prisma.$MissionPayload<ExtArgs>
      fish: Prisma.$FishPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isSuccess: boolean
      createdAt: Date
      updatedAt: Date
      userId: string
      missionId: string
      fishId: string
    }, ExtArgs["result"]["userMissionProgress"]>
    composites: {}
  }

  type UserMissionProgressGetPayload<S extends boolean | null | undefined | UserMissionProgressDefaultArgs> = $Result.GetResult<Prisma.$UserMissionProgressPayload, S>

  type UserMissionProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserMissionProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserMissionProgressCountAggregateInputType | true
    }

  export interface UserMissionProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMissionProgress'], meta: { name: 'UserMissionProgress' } }
    /**
     * Find zero or one UserMissionProgress that matches the filter.
     * @param {UserMissionProgressFindUniqueArgs} args - Arguments to find a UserMissionProgress
     * @example
     * // Get one UserMissionProgress
     * const userMissionProgress = await prisma.userMissionProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserMissionProgressFindUniqueArgs>(args: SelectSubset<T, UserMissionProgressFindUniqueArgs<ExtArgs>>): Prisma__UserMissionProgressClient<$Result.GetResult<Prisma.$UserMissionProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserMissionProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserMissionProgressFindUniqueOrThrowArgs} args - Arguments to find a UserMissionProgress
     * @example
     * // Get one UserMissionProgress
     * const userMissionProgress = await prisma.userMissionProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserMissionProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserMissionProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserMissionProgressClient<$Result.GetResult<Prisma.$UserMissionProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMissionProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionProgressFindFirstArgs} args - Arguments to find a UserMissionProgress
     * @example
     * // Get one UserMissionProgress
     * const userMissionProgress = await prisma.userMissionProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserMissionProgressFindFirstArgs>(args?: SelectSubset<T, UserMissionProgressFindFirstArgs<ExtArgs>>): Prisma__UserMissionProgressClient<$Result.GetResult<Prisma.$UserMissionProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMissionProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionProgressFindFirstOrThrowArgs} args - Arguments to find a UserMissionProgress
     * @example
     * // Get one UserMissionProgress
     * const userMissionProgress = await prisma.userMissionProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserMissionProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserMissionProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserMissionProgressClient<$Result.GetResult<Prisma.$UserMissionProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserMissionProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMissionProgresses
     * const userMissionProgresses = await prisma.userMissionProgress.findMany()
     * 
     * // Get first 10 UserMissionProgresses
     * const userMissionProgresses = await prisma.userMissionProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMissionProgressWithIdOnly = await prisma.userMissionProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserMissionProgressFindManyArgs>(args?: SelectSubset<T, UserMissionProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMissionProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserMissionProgress.
     * @param {UserMissionProgressCreateArgs} args - Arguments to create a UserMissionProgress.
     * @example
     * // Create one UserMissionProgress
     * const UserMissionProgress = await prisma.userMissionProgress.create({
     *   data: {
     *     // ... data to create a UserMissionProgress
     *   }
     * })
     * 
     */
    create<T extends UserMissionProgressCreateArgs>(args: SelectSubset<T, UserMissionProgressCreateArgs<ExtArgs>>): Prisma__UserMissionProgressClient<$Result.GetResult<Prisma.$UserMissionProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserMissionProgresses.
     * @param {UserMissionProgressCreateManyArgs} args - Arguments to create many UserMissionProgresses.
     * @example
     * // Create many UserMissionProgresses
     * const userMissionProgress = await prisma.userMissionProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserMissionProgressCreateManyArgs>(args?: SelectSubset<T, UserMissionProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserMissionProgress.
     * @param {UserMissionProgressDeleteArgs} args - Arguments to delete one UserMissionProgress.
     * @example
     * // Delete one UserMissionProgress
     * const UserMissionProgress = await prisma.userMissionProgress.delete({
     *   where: {
     *     // ... filter to delete one UserMissionProgress
     *   }
     * })
     * 
     */
    delete<T extends UserMissionProgressDeleteArgs>(args: SelectSubset<T, UserMissionProgressDeleteArgs<ExtArgs>>): Prisma__UserMissionProgressClient<$Result.GetResult<Prisma.$UserMissionProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserMissionProgress.
     * @param {UserMissionProgressUpdateArgs} args - Arguments to update one UserMissionProgress.
     * @example
     * // Update one UserMissionProgress
     * const userMissionProgress = await prisma.userMissionProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserMissionProgressUpdateArgs>(args: SelectSubset<T, UserMissionProgressUpdateArgs<ExtArgs>>): Prisma__UserMissionProgressClient<$Result.GetResult<Prisma.$UserMissionProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserMissionProgresses.
     * @param {UserMissionProgressDeleteManyArgs} args - Arguments to filter UserMissionProgresses to delete.
     * @example
     * // Delete a few UserMissionProgresses
     * const { count } = await prisma.userMissionProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserMissionProgressDeleteManyArgs>(args?: SelectSubset<T, UserMissionProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMissionProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMissionProgresses
     * const userMissionProgress = await prisma.userMissionProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserMissionProgressUpdateManyArgs>(args: SelectSubset<T, UserMissionProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserMissionProgress.
     * @param {UserMissionProgressUpsertArgs} args - Arguments to update or create a UserMissionProgress.
     * @example
     * // Update or create a UserMissionProgress
     * const userMissionProgress = await prisma.userMissionProgress.upsert({
     *   create: {
     *     // ... data to create a UserMissionProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMissionProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserMissionProgressUpsertArgs>(args: SelectSubset<T, UserMissionProgressUpsertArgs<ExtArgs>>): Prisma__UserMissionProgressClient<$Result.GetResult<Prisma.$UserMissionProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserMissionProgresses that matches the filter.
     * @param {UserMissionProgressFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userMissionProgress = await prisma.userMissionProgress.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserMissionProgressFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserMissionProgress.
     * @param {UserMissionProgressAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userMissionProgress = await prisma.userMissionProgress.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserMissionProgressAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserMissionProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionProgressCountArgs} args - Arguments to filter UserMissionProgresses to count.
     * @example
     * // Count the number of UserMissionProgresses
     * const count = await prisma.userMissionProgress.count({
     *   where: {
     *     // ... the filter for the UserMissionProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserMissionProgressCountArgs>(
      args?: Subset<T, UserMissionProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMissionProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMissionProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserMissionProgressAggregateArgs>(args: Subset<T, UserMissionProgressAggregateArgs>): Prisma.PrismaPromise<GetUserMissionProgressAggregateType<T>>

    /**
     * Group by UserMissionProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserMissionProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMissionProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserMissionProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserMissionProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMissionProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMissionProgress model
   */
  readonly fields: UserMissionProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMissionProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMissionProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mission<T extends MissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionDefaultArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fish<T extends FishDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FishDefaultArgs<ExtArgs>>): Prisma__FishClient<$Result.GetResult<Prisma.$FishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserMissionProgress model
   */
  interface UserMissionProgressFieldRefs {
    readonly id: FieldRef<"UserMissionProgress", 'String'>
    readonly isSuccess: FieldRef<"UserMissionProgress", 'Boolean'>
    readonly createdAt: FieldRef<"UserMissionProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"UserMissionProgress", 'DateTime'>
    readonly userId: FieldRef<"UserMissionProgress", 'String'>
    readonly missionId: FieldRef<"UserMissionProgress", 'String'>
    readonly fishId: FieldRef<"UserMissionProgress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserMissionProgress findUnique
   */
  export type UserMissionProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMissionProgress
     */
    select?: UserMissionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMissionProgress
     */
    omit?: UserMissionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserMissionProgress to fetch.
     */
    where: UserMissionProgressWhereUniqueInput
  }

  /**
   * UserMissionProgress findUniqueOrThrow
   */
  export type UserMissionProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMissionProgress
     */
    select?: UserMissionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMissionProgress
     */
    omit?: UserMissionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserMissionProgress to fetch.
     */
    where: UserMissionProgressWhereUniqueInput
  }

  /**
   * UserMissionProgress findFirst
   */
  export type UserMissionProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMissionProgress
     */
    select?: UserMissionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMissionProgress
     */
    omit?: UserMissionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserMissionProgress to fetch.
     */
    where?: UserMissionProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMissionProgresses to fetch.
     */
    orderBy?: UserMissionProgressOrderByWithRelationInput | UserMissionProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMissionProgresses.
     */
    cursor?: UserMissionProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMissionProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMissionProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMissionProgresses.
     */
    distinct?: UserMissionProgressScalarFieldEnum | UserMissionProgressScalarFieldEnum[]
  }

  /**
   * UserMissionProgress findFirstOrThrow
   */
  export type UserMissionProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMissionProgress
     */
    select?: UserMissionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMissionProgress
     */
    omit?: UserMissionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserMissionProgress to fetch.
     */
    where?: UserMissionProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMissionProgresses to fetch.
     */
    orderBy?: UserMissionProgressOrderByWithRelationInput | UserMissionProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMissionProgresses.
     */
    cursor?: UserMissionProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMissionProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMissionProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMissionProgresses.
     */
    distinct?: UserMissionProgressScalarFieldEnum | UserMissionProgressScalarFieldEnum[]
  }

  /**
   * UserMissionProgress findMany
   */
  export type UserMissionProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMissionProgress
     */
    select?: UserMissionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMissionProgress
     */
    omit?: UserMissionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserMissionProgresses to fetch.
     */
    where?: UserMissionProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMissionProgresses to fetch.
     */
    orderBy?: UserMissionProgressOrderByWithRelationInput | UserMissionProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMissionProgresses.
     */
    cursor?: UserMissionProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMissionProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMissionProgresses.
     */
    skip?: number
    distinct?: UserMissionProgressScalarFieldEnum | UserMissionProgressScalarFieldEnum[]
  }

  /**
   * UserMissionProgress create
   */
  export type UserMissionProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMissionProgress
     */
    select?: UserMissionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMissionProgress
     */
    omit?: UserMissionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserMissionProgress.
     */
    data: XOR<UserMissionProgressCreateInput, UserMissionProgressUncheckedCreateInput>
  }

  /**
   * UserMissionProgress createMany
   */
  export type UserMissionProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMissionProgresses.
     */
    data: UserMissionProgressCreateManyInput | UserMissionProgressCreateManyInput[]
  }

  /**
   * UserMissionProgress update
   */
  export type UserMissionProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMissionProgress
     */
    select?: UserMissionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMissionProgress
     */
    omit?: UserMissionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserMissionProgress.
     */
    data: XOR<UserMissionProgressUpdateInput, UserMissionProgressUncheckedUpdateInput>
    /**
     * Choose, which UserMissionProgress to update.
     */
    where: UserMissionProgressWhereUniqueInput
  }

  /**
   * UserMissionProgress updateMany
   */
  export type UserMissionProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMissionProgresses.
     */
    data: XOR<UserMissionProgressUpdateManyMutationInput, UserMissionProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserMissionProgresses to update
     */
    where?: UserMissionProgressWhereInput
    /**
     * Limit how many UserMissionProgresses to update.
     */
    limit?: number
  }

  /**
   * UserMissionProgress upsert
   */
  export type UserMissionProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMissionProgress
     */
    select?: UserMissionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMissionProgress
     */
    omit?: UserMissionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserMissionProgress to update in case it exists.
     */
    where: UserMissionProgressWhereUniqueInput
    /**
     * In case the UserMissionProgress found by the `where` argument doesn't exist, create a new UserMissionProgress with this data.
     */
    create: XOR<UserMissionProgressCreateInput, UserMissionProgressUncheckedCreateInput>
    /**
     * In case the UserMissionProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMissionProgressUpdateInput, UserMissionProgressUncheckedUpdateInput>
  }

  /**
   * UserMissionProgress delete
   */
  export type UserMissionProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMissionProgress
     */
    select?: UserMissionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMissionProgress
     */
    omit?: UserMissionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionProgressInclude<ExtArgs> | null
    /**
     * Filter which UserMissionProgress to delete.
     */
    where: UserMissionProgressWhereUniqueInput
  }

  /**
   * UserMissionProgress deleteMany
   */
  export type UserMissionProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMissionProgresses to delete
     */
    where?: UserMissionProgressWhereInput
    /**
     * Limit how many UserMissionProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserMissionProgress findRaw
   */
  export type UserMissionProgressFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserMissionProgress aggregateRaw
   */
  export type UserMissionProgressAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserMissionProgress without action
   */
  export type UserMissionProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMissionProgress
     */
    select?: UserMissionProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMissionProgress
     */
    omit?: UserMissionProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMissionProgressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const FishFamilyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FishFamilyScalarFieldEnum = (typeof FishFamilyScalarFieldEnum)[keyof typeof FishFamilyScalarFieldEnum]


  export const FishRarityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FishRarityScalarFieldEnum = (typeof FishRarityScalarFieldEnum)[keyof typeof FishRarityScalarFieldEnum]


  export const FishScalarFieldEnum: {
    id: 'id',
    name: 'name',
    scientificName: 'scientificName',
    description: 'description',
    imageUrl: 'imageUrl',
    habitat: 'habitat',
    length: 'length',
    age: 'age',
    depthLevel: 'depthLevel',
    weight: 'weight',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    familyId: 'familyId',
    rarityId: 'rarityId'
  };

  export type FishScalarFieldEnum = (typeof FishScalarFieldEnum)[keyof typeof FishScalarFieldEnum]


  export const DetectionHistoryScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    claimToken: 'claimToken',
    isClaimed: 'isClaimed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type DetectionHistoryScalarFieldEnum = (typeof DetectionHistoryScalarFieldEnum)[keyof typeof DetectionHistoryScalarFieldEnum]


  export const DetectionResultScalarFieldEnum: {
    id: 'id',
    confidence: 'confidence',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    detectionHistoryId: 'detectionHistoryId',
    fishId: 'fishId'
  };

  export type DetectionResultScalarFieldEnum = (typeof DetectionResultScalarFieldEnum)[keyof typeof DetectionResultScalarFieldEnum]


  export const UserPointHistoryScalarFieldEnum: {
    id: 'id',
    point: 'point',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    detectionHistoryId: 'detectionHistoryId',
    missionId: 'missionId',
    fishId: 'fishId'
  };

  export type UserPointHistoryScalarFieldEnum = (typeof UserPointHistoryScalarFieldEnum)[keyof typeof UserPointHistoryScalarFieldEnum]


  export const MissionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    point: 'point',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MissionScalarFieldEnum = (typeof MissionScalarFieldEnum)[keyof typeof MissionScalarFieldEnum]


  export const MissionDetailTargetScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    missionId: 'missionId',
    fishId: 'fishId'
  };

  export type MissionDetailTargetScalarFieldEnum = (typeof MissionDetailTargetScalarFieldEnum)[keyof typeof MissionDetailTargetScalarFieldEnum]


  export const UserMissionProgressScalarFieldEnum: {
    id: 'id',
    isSuccess: 'isSuccess',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    missionId: 'missionId',
    fishId: 'fishId'
  };

  export type UserMissionProgressScalarFieldEnum = (typeof UserMissionProgressScalarFieldEnum)[keyof typeof UserMissionProgressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    detectionHistory?: DetectionHistoryListRelationFilter
    userPointHistory?: UserPointHistoryListRelationFilter
    userMissionProgress?: UserMissionProgressListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    detectionHistory?: DetectionHistoryOrderByRelationAggregateInput
    userPointHistory?: UserPointHistoryOrderByRelationAggregateInput
    userMissionProgress?: UserMissionProgressOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    detectionHistory?: DetectionHistoryListRelationFilter
    userPointHistory?: UserPointHistoryListRelationFilter
    userMissionProgress?: UserMissionProgressListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type FishFamilyWhereInput = {
    AND?: FishFamilyWhereInput | FishFamilyWhereInput[]
    OR?: FishFamilyWhereInput[]
    NOT?: FishFamilyWhereInput | FishFamilyWhereInput[]
    id?: StringFilter<"FishFamily"> | string
    name?: StringFilter<"FishFamily"> | string
    description?: StringNullableFilter<"FishFamily"> | string | null
    createdAt?: DateTimeFilter<"FishFamily"> | Date | string
    updatedAt?: DateTimeFilter<"FishFamily"> | Date | string
    fishes?: FishListRelationFilter
  }

  export type FishFamilyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fishes?: FishOrderByRelationAggregateInput
  }

  export type FishFamilyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FishFamilyWhereInput | FishFamilyWhereInput[]
    OR?: FishFamilyWhereInput[]
    NOT?: FishFamilyWhereInput | FishFamilyWhereInput[]
    name?: StringFilter<"FishFamily"> | string
    description?: StringNullableFilter<"FishFamily"> | string | null
    createdAt?: DateTimeFilter<"FishFamily"> | Date | string
    updatedAt?: DateTimeFilter<"FishFamily"> | Date | string
    fishes?: FishListRelationFilter
  }, "id">

  export type FishFamilyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FishFamilyCountOrderByAggregateInput
    _max?: FishFamilyMaxOrderByAggregateInput
    _min?: FishFamilyMinOrderByAggregateInput
  }

  export type FishFamilyScalarWhereWithAggregatesInput = {
    AND?: FishFamilyScalarWhereWithAggregatesInput | FishFamilyScalarWhereWithAggregatesInput[]
    OR?: FishFamilyScalarWhereWithAggregatesInput[]
    NOT?: FishFamilyScalarWhereWithAggregatesInput | FishFamilyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FishFamily"> | string
    name?: StringWithAggregatesFilter<"FishFamily"> | string
    description?: StringNullableWithAggregatesFilter<"FishFamily"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FishFamily"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FishFamily"> | Date | string
  }

  export type FishRarityWhereInput = {
    AND?: FishRarityWhereInput | FishRarityWhereInput[]
    OR?: FishRarityWhereInput[]
    NOT?: FishRarityWhereInput | FishRarityWhereInput[]
    id?: StringFilter<"FishRarity"> | string
    name?: StringFilter<"FishRarity"> | string
    createdAt?: DateTimeFilter<"FishRarity"> | Date | string
    updatedAt?: DateTimeFilter<"FishRarity"> | Date | string
    fishes?: FishListRelationFilter
  }

  export type FishRarityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fishes?: FishOrderByRelationAggregateInput
  }

  export type FishRarityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FishRarityWhereInput | FishRarityWhereInput[]
    OR?: FishRarityWhereInput[]
    NOT?: FishRarityWhereInput | FishRarityWhereInput[]
    name?: StringFilter<"FishRarity"> | string
    createdAt?: DateTimeFilter<"FishRarity"> | Date | string
    updatedAt?: DateTimeFilter<"FishRarity"> | Date | string
    fishes?: FishListRelationFilter
  }, "id">

  export type FishRarityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FishRarityCountOrderByAggregateInput
    _max?: FishRarityMaxOrderByAggregateInput
    _min?: FishRarityMinOrderByAggregateInput
  }

  export type FishRarityScalarWhereWithAggregatesInput = {
    AND?: FishRarityScalarWhereWithAggregatesInput | FishRarityScalarWhereWithAggregatesInput[]
    OR?: FishRarityScalarWhereWithAggregatesInput[]
    NOT?: FishRarityScalarWhereWithAggregatesInput | FishRarityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FishRarity"> | string
    name?: StringWithAggregatesFilter<"FishRarity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FishRarity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FishRarity"> | Date | string
  }

  export type FishWhereInput = {
    AND?: FishWhereInput | FishWhereInput[]
    OR?: FishWhereInput[]
    NOT?: FishWhereInput | FishWhereInput[]
    id?: StringFilter<"Fish"> | string
    name?: StringFilter<"Fish"> | string
    scientificName?: StringNullableFilter<"Fish"> | string | null
    description?: StringNullableFilter<"Fish"> | string | null
    imageUrl?: StringNullableFilter<"Fish"> | string | null
    habitat?: StringNullableFilter<"Fish"> | string | null
    length?: StringNullableFilter<"Fish"> | string | null
    age?: StringNullableFilter<"Fish"> | string | null
    depthLevel?: StringNullableFilter<"Fish"> | string | null
    weight?: StringNullableFilter<"Fish"> | string | null
    createdAt?: DateTimeFilter<"Fish"> | Date | string
    updatedAt?: DateTimeFilter<"Fish"> | Date | string
    familyId?: StringNullableFilter<"Fish"> | string | null
    rarityId?: StringNullableFilter<"Fish"> | string | null
    family?: XOR<FishFamilyNullableScalarRelationFilter, FishFamilyWhereInput> | null
    rarity?: XOR<FishRarityNullableScalarRelationFilter, FishRarityWhereInput> | null
    detectionResults?: DetectionResultListRelationFilter
    userMissionProgress?: UserMissionProgressListRelationFilter
    userPointHistories?: UserPointHistoryListRelationFilter
    missionDetailTargets?: MissionDetailTargetListRelationFilter
  }

  export type FishOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    scientificName?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    habitat?: SortOrder
    length?: SortOrder
    age?: SortOrder
    depthLevel?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    familyId?: SortOrder
    rarityId?: SortOrder
    family?: FishFamilyOrderByWithRelationInput
    rarity?: FishRarityOrderByWithRelationInput
    detectionResults?: DetectionResultOrderByRelationAggregateInput
    userMissionProgress?: UserMissionProgressOrderByRelationAggregateInput
    userPointHistories?: UserPointHistoryOrderByRelationAggregateInput
    missionDetailTargets?: MissionDetailTargetOrderByRelationAggregateInput
  }

  export type FishWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FishWhereInput | FishWhereInput[]
    OR?: FishWhereInput[]
    NOT?: FishWhereInput | FishWhereInput[]
    name?: StringFilter<"Fish"> | string
    scientificName?: StringNullableFilter<"Fish"> | string | null
    description?: StringNullableFilter<"Fish"> | string | null
    imageUrl?: StringNullableFilter<"Fish"> | string | null
    habitat?: StringNullableFilter<"Fish"> | string | null
    length?: StringNullableFilter<"Fish"> | string | null
    age?: StringNullableFilter<"Fish"> | string | null
    depthLevel?: StringNullableFilter<"Fish"> | string | null
    weight?: StringNullableFilter<"Fish"> | string | null
    createdAt?: DateTimeFilter<"Fish"> | Date | string
    updatedAt?: DateTimeFilter<"Fish"> | Date | string
    familyId?: StringNullableFilter<"Fish"> | string | null
    rarityId?: StringNullableFilter<"Fish"> | string | null
    family?: XOR<FishFamilyNullableScalarRelationFilter, FishFamilyWhereInput> | null
    rarity?: XOR<FishRarityNullableScalarRelationFilter, FishRarityWhereInput> | null
    detectionResults?: DetectionResultListRelationFilter
    userMissionProgress?: UserMissionProgressListRelationFilter
    userPointHistories?: UserPointHistoryListRelationFilter
    missionDetailTargets?: MissionDetailTargetListRelationFilter
  }, "id">

  export type FishOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    scientificName?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    habitat?: SortOrder
    length?: SortOrder
    age?: SortOrder
    depthLevel?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    familyId?: SortOrder
    rarityId?: SortOrder
    _count?: FishCountOrderByAggregateInput
    _max?: FishMaxOrderByAggregateInput
    _min?: FishMinOrderByAggregateInput
  }

  export type FishScalarWhereWithAggregatesInput = {
    AND?: FishScalarWhereWithAggregatesInput | FishScalarWhereWithAggregatesInput[]
    OR?: FishScalarWhereWithAggregatesInput[]
    NOT?: FishScalarWhereWithAggregatesInput | FishScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fish"> | string
    name?: StringWithAggregatesFilter<"Fish"> | string
    scientificName?: StringNullableWithAggregatesFilter<"Fish"> | string | null
    description?: StringNullableWithAggregatesFilter<"Fish"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Fish"> | string | null
    habitat?: StringNullableWithAggregatesFilter<"Fish"> | string | null
    length?: StringNullableWithAggregatesFilter<"Fish"> | string | null
    age?: StringNullableWithAggregatesFilter<"Fish"> | string | null
    depthLevel?: StringNullableWithAggregatesFilter<"Fish"> | string | null
    weight?: StringNullableWithAggregatesFilter<"Fish"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Fish"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fish"> | Date | string
    familyId?: StringNullableWithAggregatesFilter<"Fish"> | string | null
    rarityId?: StringNullableWithAggregatesFilter<"Fish"> | string | null
  }

  export type DetectionHistoryWhereInput = {
    AND?: DetectionHistoryWhereInput | DetectionHistoryWhereInput[]
    OR?: DetectionHistoryWhereInput[]
    NOT?: DetectionHistoryWhereInput | DetectionHistoryWhereInput[]
    id?: StringFilter<"DetectionHistory"> | string
    imageUrl?: StringFilter<"DetectionHistory"> | string
    claimToken?: StringNullableFilter<"DetectionHistory"> | string | null
    isClaimed?: BoolFilter<"DetectionHistory"> | boolean
    createdAt?: DateTimeFilter<"DetectionHistory"> | Date | string
    updatedAt?: DateTimeFilter<"DetectionHistory"> | Date | string
    userId?: StringFilter<"DetectionHistory"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userPointHistory?: XOR<UserPointHistoryNullableScalarRelationFilter, UserPointHistoryWhereInput> | null
    detectionResults?: DetectionResultListRelationFilter
  }

  export type DetectionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    claimToken?: SortOrder
    isClaimed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    userPointHistory?: UserPointHistoryOrderByWithRelationInput
    detectionResults?: DetectionResultOrderByRelationAggregateInput
  }

  export type DetectionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    claimToken?: string
    AND?: DetectionHistoryWhereInput | DetectionHistoryWhereInput[]
    OR?: DetectionHistoryWhereInput[]
    NOT?: DetectionHistoryWhereInput | DetectionHistoryWhereInput[]
    imageUrl?: StringFilter<"DetectionHistory"> | string
    isClaimed?: BoolFilter<"DetectionHistory"> | boolean
    createdAt?: DateTimeFilter<"DetectionHistory"> | Date | string
    updatedAt?: DateTimeFilter<"DetectionHistory"> | Date | string
    userId?: StringFilter<"DetectionHistory"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userPointHistory?: XOR<UserPointHistoryNullableScalarRelationFilter, UserPointHistoryWhereInput> | null
    detectionResults?: DetectionResultListRelationFilter
  }, "id" | "claimToken">

  export type DetectionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    claimToken?: SortOrder
    isClaimed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: DetectionHistoryCountOrderByAggregateInput
    _max?: DetectionHistoryMaxOrderByAggregateInput
    _min?: DetectionHistoryMinOrderByAggregateInput
  }

  export type DetectionHistoryScalarWhereWithAggregatesInput = {
    AND?: DetectionHistoryScalarWhereWithAggregatesInput | DetectionHistoryScalarWhereWithAggregatesInput[]
    OR?: DetectionHistoryScalarWhereWithAggregatesInput[]
    NOT?: DetectionHistoryScalarWhereWithAggregatesInput | DetectionHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DetectionHistory"> | string
    imageUrl?: StringWithAggregatesFilter<"DetectionHistory"> | string
    claimToken?: StringNullableWithAggregatesFilter<"DetectionHistory"> | string | null
    isClaimed?: BoolWithAggregatesFilter<"DetectionHistory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DetectionHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DetectionHistory"> | Date | string
    userId?: StringWithAggregatesFilter<"DetectionHistory"> | string
  }

  export type DetectionResultWhereInput = {
    AND?: DetectionResultWhereInput | DetectionResultWhereInput[]
    OR?: DetectionResultWhereInput[]
    NOT?: DetectionResultWhereInput | DetectionResultWhereInput[]
    id?: StringFilter<"DetectionResult"> | string
    confidence?: FloatFilter<"DetectionResult"> | number
    createdAt?: DateTimeFilter<"DetectionResult"> | Date | string
    updatedAt?: DateTimeFilter<"DetectionResult"> | Date | string
    detectionHistoryId?: StringFilter<"DetectionResult"> | string
    fishId?: StringNullableFilter<"DetectionResult"> | string | null
    detectionHistory?: XOR<DetectionHistoryScalarRelationFilter, DetectionHistoryWhereInput>
    fish?: XOR<FishNullableScalarRelationFilter, FishWhereInput> | null
  }

  export type DetectionResultOrderByWithRelationInput = {
    id?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    detectionHistoryId?: SortOrder
    fishId?: SortOrder
    detectionHistory?: DetectionHistoryOrderByWithRelationInput
    fish?: FishOrderByWithRelationInput
  }

  export type DetectionResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DetectionResultWhereInput | DetectionResultWhereInput[]
    OR?: DetectionResultWhereInput[]
    NOT?: DetectionResultWhereInput | DetectionResultWhereInput[]
    confidence?: FloatFilter<"DetectionResult"> | number
    createdAt?: DateTimeFilter<"DetectionResult"> | Date | string
    updatedAt?: DateTimeFilter<"DetectionResult"> | Date | string
    detectionHistoryId?: StringFilter<"DetectionResult"> | string
    fishId?: StringNullableFilter<"DetectionResult"> | string | null
    detectionHistory?: XOR<DetectionHistoryScalarRelationFilter, DetectionHistoryWhereInput>
    fish?: XOR<FishNullableScalarRelationFilter, FishWhereInput> | null
  }, "id">

  export type DetectionResultOrderByWithAggregationInput = {
    id?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    detectionHistoryId?: SortOrder
    fishId?: SortOrder
    _count?: DetectionResultCountOrderByAggregateInput
    _avg?: DetectionResultAvgOrderByAggregateInput
    _max?: DetectionResultMaxOrderByAggregateInput
    _min?: DetectionResultMinOrderByAggregateInput
    _sum?: DetectionResultSumOrderByAggregateInput
  }

  export type DetectionResultScalarWhereWithAggregatesInput = {
    AND?: DetectionResultScalarWhereWithAggregatesInput | DetectionResultScalarWhereWithAggregatesInput[]
    OR?: DetectionResultScalarWhereWithAggregatesInput[]
    NOT?: DetectionResultScalarWhereWithAggregatesInput | DetectionResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DetectionResult"> | string
    confidence?: FloatWithAggregatesFilter<"DetectionResult"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DetectionResult"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DetectionResult"> | Date | string
    detectionHistoryId?: StringWithAggregatesFilter<"DetectionResult"> | string
    fishId?: StringNullableWithAggregatesFilter<"DetectionResult"> | string | null
  }

  export type UserPointHistoryWhereInput = {
    AND?: UserPointHistoryWhereInput | UserPointHistoryWhereInput[]
    OR?: UserPointHistoryWhereInput[]
    NOT?: UserPointHistoryWhereInput | UserPointHistoryWhereInput[]
    id?: StringFilter<"UserPointHistory"> | string
    point?: IntFilter<"UserPointHistory"> | number
    createdAt?: DateTimeFilter<"UserPointHistory"> | Date | string
    updatedAt?: DateTimeFilter<"UserPointHistory"> | Date | string
    userId?: StringFilter<"UserPointHistory"> | string
    detectionHistoryId?: StringNullableFilter<"UserPointHistory"> | string | null
    missionId?: StringNullableFilter<"UserPointHistory"> | string | null
    fishId?: StringNullableFilter<"UserPointHistory"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    detectionHistory?: XOR<DetectionHistoryNullableScalarRelationFilter, DetectionHistoryWhereInput> | null
    mission?: XOR<MissionNullableScalarRelationFilter, MissionWhereInput> | null
    fish?: XOR<FishNullableScalarRelationFilter, FishWhereInput> | null
  }

  export type UserPointHistoryOrderByWithRelationInput = {
    id?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    detectionHistoryId?: SortOrder
    missionId?: SortOrder
    fishId?: SortOrder
    user?: UserOrderByWithRelationInput
    detectionHistory?: DetectionHistoryOrderByWithRelationInput
    mission?: MissionOrderByWithRelationInput
    fish?: FishOrderByWithRelationInput
  }

  export type UserPointHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    detectionHistoryId?: string
    missionId_userId_fishId?: UserPointHistoryMissionIdUserIdFishIdCompoundUniqueInput
    AND?: UserPointHistoryWhereInput | UserPointHistoryWhereInput[]
    OR?: UserPointHistoryWhereInput[]
    NOT?: UserPointHistoryWhereInput | UserPointHistoryWhereInput[]
    point?: IntFilter<"UserPointHistory"> | number
    createdAt?: DateTimeFilter<"UserPointHistory"> | Date | string
    updatedAt?: DateTimeFilter<"UserPointHistory"> | Date | string
    userId?: StringFilter<"UserPointHistory"> | string
    missionId?: StringNullableFilter<"UserPointHistory"> | string | null
    fishId?: StringNullableFilter<"UserPointHistory"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    detectionHistory?: XOR<DetectionHistoryNullableScalarRelationFilter, DetectionHistoryWhereInput> | null
    mission?: XOR<MissionNullableScalarRelationFilter, MissionWhereInput> | null
    fish?: XOR<FishNullableScalarRelationFilter, FishWhereInput> | null
  }, "id" | "detectionHistoryId" | "missionId_userId_fishId">

  export type UserPointHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    detectionHistoryId?: SortOrder
    missionId?: SortOrder
    fishId?: SortOrder
    _count?: UserPointHistoryCountOrderByAggregateInput
    _avg?: UserPointHistoryAvgOrderByAggregateInput
    _max?: UserPointHistoryMaxOrderByAggregateInput
    _min?: UserPointHistoryMinOrderByAggregateInput
    _sum?: UserPointHistorySumOrderByAggregateInput
  }

  export type UserPointHistoryScalarWhereWithAggregatesInput = {
    AND?: UserPointHistoryScalarWhereWithAggregatesInput | UserPointHistoryScalarWhereWithAggregatesInput[]
    OR?: UserPointHistoryScalarWhereWithAggregatesInput[]
    NOT?: UserPointHistoryScalarWhereWithAggregatesInput | UserPointHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPointHistory"> | string
    point?: IntWithAggregatesFilter<"UserPointHistory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserPointHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPointHistory"> | Date | string
    userId?: StringWithAggregatesFilter<"UserPointHistory"> | string
    detectionHistoryId?: StringNullableWithAggregatesFilter<"UserPointHistory"> | string | null
    missionId?: StringNullableWithAggregatesFilter<"UserPointHistory"> | string | null
    fishId?: StringNullableWithAggregatesFilter<"UserPointHistory"> | string | null
  }

  export type MissionWhereInput = {
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    id?: StringFilter<"Mission"> | string
    title?: StringFilter<"Mission"> | string
    point?: IntFilter<"Mission"> | number
    description?: StringNullableFilter<"Mission"> | string | null
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
    detailTargets?: MissionDetailTargetListRelationFilter
    userProgresses?: UserMissionProgressListRelationFilter
    pointHistories?: UserPointHistoryListRelationFilter
  }

  export type MissionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    point?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    detailTargets?: MissionDetailTargetOrderByRelationAggregateInput
    userProgresses?: UserMissionProgressOrderByRelationAggregateInput
    pointHistories?: UserPointHistoryOrderByRelationAggregateInput
  }

  export type MissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    title?: StringFilter<"Mission"> | string
    point?: IntFilter<"Mission"> | number
    description?: StringNullableFilter<"Mission"> | string | null
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
    detailTargets?: MissionDetailTargetListRelationFilter
    userProgresses?: UserMissionProgressListRelationFilter
    pointHistories?: UserPointHistoryListRelationFilter
  }, "id">

  export type MissionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    point?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MissionCountOrderByAggregateInput
    _avg?: MissionAvgOrderByAggregateInput
    _max?: MissionMaxOrderByAggregateInput
    _min?: MissionMinOrderByAggregateInput
    _sum?: MissionSumOrderByAggregateInput
  }

  export type MissionScalarWhereWithAggregatesInput = {
    AND?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    OR?: MissionScalarWhereWithAggregatesInput[]
    NOT?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mission"> | string
    title?: StringWithAggregatesFilter<"Mission"> | string
    point?: IntWithAggregatesFilter<"Mission"> | number
    description?: StringNullableWithAggregatesFilter<"Mission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
  }

  export type MissionDetailTargetWhereInput = {
    AND?: MissionDetailTargetWhereInput | MissionDetailTargetWhereInput[]
    OR?: MissionDetailTargetWhereInput[]
    NOT?: MissionDetailTargetWhereInput | MissionDetailTargetWhereInput[]
    id?: StringFilter<"MissionDetailTarget"> | string
    amount?: IntFilter<"MissionDetailTarget"> | number
    createdAt?: DateTimeFilter<"MissionDetailTarget"> | Date | string
    updatedAt?: DateTimeFilter<"MissionDetailTarget"> | Date | string
    missionId?: StringFilter<"MissionDetailTarget"> | string
    fishId?: StringFilter<"MissionDetailTarget"> | string
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
    fish?: XOR<FishScalarRelationFilter, FishWhereInput>
  }

  export type MissionDetailTargetOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    missionId?: SortOrder
    fishId?: SortOrder
    mission?: MissionOrderByWithRelationInput
    fish?: FishOrderByWithRelationInput
  }

  export type MissionDetailTargetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MissionDetailTargetWhereInput | MissionDetailTargetWhereInput[]
    OR?: MissionDetailTargetWhereInput[]
    NOT?: MissionDetailTargetWhereInput | MissionDetailTargetWhereInput[]
    amount?: IntFilter<"MissionDetailTarget"> | number
    createdAt?: DateTimeFilter<"MissionDetailTarget"> | Date | string
    updatedAt?: DateTimeFilter<"MissionDetailTarget"> | Date | string
    missionId?: StringFilter<"MissionDetailTarget"> | string
    fishId?: StringFilter<"MissionDetailTarget"> | string
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
    fish?: XOR<FishScalarRelationFilter, FishWhereInput>
  }, "id">

  export type MissionDetailTargetOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    missionId?: SortOrder
    fishId?: SortOrder
    _count?: MissionDetailTargetCountOrderByAggregateInput
    _avg?: MissionDetailTargetAvgOrderByAggregateInput
    _max?: MissionDetailTargetMaxOrderByAggregateInput
    _min?: MissionDetailTargetMinOrderByAggregateInput
    _sum?: MissionDetailTargetSumOrderByAggregateInput
  }

  export type MissionDetailTargetScalarWhereWithAggregatesInput = {
    AND?: MissionDetailTargetScalarWhereWithAggregatesInput | MissionDetailTargetScalarWhereWithAggregatesInput[]
    OR?: MissionDetailTargetScalarWhereWithAggregatesInput[]
    NOT?: MissionDetailTargetScalarWhereWithAggregatesInput | MissionDetailTargetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MissionDetailTarget"> | string
    amount?: IntWithAggregatesFilter<"MissionDetailTarget"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MissionDetailTarget"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MissionDetailTarget"> | Date | string
    missionId?: StringWithAggregatesFilter<"MissionDetailTarget"> | string
    fishId?: StringWithAggregatesFilter<"MissionDetailTarget"> | string
  }

  export type UserMissionProgressWhereInput = {
    AND?: UserMissionProgressWhereInput | UserMissionProgressWhereInput[]
    OR?: UserMissionProgressWhereInput[]
    NOT?: UserMissionProgressWhereInput | UserMissionProgressWhereInput[]
    id?: StringFilter<"UserMissionProgress"> | string
    isSuccess?: BoolFilter<"UserMissionProgress"> | boolean
    createdAt?: DateTimeFilter<"UserMissionProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserMissionProgress"> | Date | string
    userId?: StringFilter<"UserMissionProgress"> | string
    missionId?: StringFilter<"UserMissionProgress"> | string
    fishId?: StringFilter<"UserMissionProgress"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
    fish?: XOR<FishScalarRelationFilter, FishWhereInput>
  }

  export type UserMissionProgressOrderByWithRelationInput = {
    id?: SortOrder
    isSuccess?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    fishId?: SortOrder
    user?: UserOrderByWithRelationInput
    mission?: MissionOrderByWithRelationInput
    fish?: FishOrderByWithRelationInput
  }

  export type UserMissionProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_missionId_fishId?: UserMissionProgressUserIdMissionIdFishIdCompoundUniqueInput
    AND?: UserMissionProgressWhereInput | UserMissionProgressWhereInput[]
    OR?: UserMissionProgressWhereInput[]
    NOT?: UserMissionProgressWhereInput | UserMissionProgressWhereInput[]
    isSuccess?: BoolFilter<"UserMissionProgress"> | boolean
    createdAt?: DateTimeFilter<"UserMissionProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserMissionProgress"> | Date | string
    userId?: StringFilter<"UserMissionProgress"> | string
    missionId?: StringFilter<"UserMissionProgress"> | string
    fishId?: StringFilter<"UserMissionProgress"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
    fish?: XOR<FishScalarRelationFilter, FishWhereInput>
  }, "id" | "userId_missionId_fishId">

  export type UserMissionProgressOrderByWithAggregationInput = {
    id?: SortOrder
    isSuccess?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    fishId?: SortOrder
    _count?: UserMissionProgressCountOrderByAggregateInput
    _max?: UserMissionProgressMaxOrderByAggregateInput
    _min?: UserMissionProgressMinOrderByAggregateInput
  }

  export type UserMissionProgressScalarWhereWithAggregatesInput = {
    AND?: UserMissionProgressScalarWhereWithAggregatesInput | UserMissionProgressScalarWhereWithAggregatesInput[]
    OR?: UserMissionProgressScalarWhereWithAggregatesInput[]
    NOT?: UserMissionProgressScalarWhereWithAggregatesInput | UserMissionProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserMissionProgress"> | string
    isSuccess?: BoolWithAggregatesFilter<"UserMissionProgress"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserMissionProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserMissionProgress"> | Date | string
    userId?: StringWithAggregatesFilter<"UserMissionProgress"> | string
    missionId?: StringWithAggregatesFilter<"UserMissionProgress"> | string
    fishId?: StringWithAggregatesFilter<"UserMissionProgress"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    detectionHistory?: DetectionHistoryCreateNestedManyWithoutUserInput
    userPointHistory?: UserPointHistoryCreateNestedManyWithoutUserInput
    userMissionProgress?: UserMissionProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    detectionHistory?: DetectionHistoryUncheckedCreateNestedManyWithoutUserInput
    userPointHistory?: UserPointHistoryUncheckedCreateNestedManyWithoutUserInput
    userMissionProgress?: UserMissionProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    detectionHistory?: DetectionHistoryUpdateManyWithoutUserNestedInput
    userPointHistory?: UserPointHistoryUpdateManyWithoutUserNestedInput
    userMissionProgress?: UserMissionProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    detectionHistory?: DetectionHistoryUncheckedUpdateManyWithoutUserNestedInput
    userPointHistory?: UserPointHistoryUncheckedUpdateManyWithoutUserNestedInput
    userMissionProgress?: UserMissionProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FishFamilyCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fishes?: FishCreateNestedManyWithoutFamilyInput
  }

  export type FishFamilyUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fishes?: FishUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type FishFamilyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fishes?: FishUpdateManyWithoutFamilyNestedInput
  }

  export type FishFamilyUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fishes?: FishUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type FishFamilyCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FishFamilyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FishFamilyUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FishRarityCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fishes?: FishCreateNestedManyWithoutRarityInput
  }

  export type FishRarityUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fishes?: FishUncheckedCreateNestedManyWithoutRarityInput
  }

  export type FishRarityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fishes?: FishUpdateManyWithoutRarityNestedInput
  }

  export type FishRarityUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fishes?: FishUncheckedUpdateManyWithoutRarityNestedInput
  }

  export type FishRarityCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FishRarityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FishRarityUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FishCreateInput = {
    id?: string
    name: string
    scientificName?: string | null
    description?: string | null
    imageUrl?: string | null
    habitat?: string | null
    length?: string | null
    age?: string | null
    depthLevel?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    family?: FishFamilyCreateNestedOneWithoutFishesInput
    rarity?: FishRarityCreateNestedOneWithoutFishesInput
    detectionResults?: DetectionResultCreateNestedManyWithoutFishInput
    userMissionProgress?: UserMissionProgressCreateNestedManyWithoutFishInput
    userPointHistories?: UserPointHistoryCreateNestedManyWithoutFishInput
    missionDetailTargets?: MissionDetailTargetCreateNestedManyWithoutFishInput
  }

  export type FishUncheckedCreateInput = {
    id?: string
    name: string
    scientificName?: string | null
    description?: string | null
    imageUrl?: string | null
    habitat?: string | null
    length?: string | null
    age?: string | null
    depthLevel?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    familyId?: string | null
    rarityId?: string | null
    detectionResults?: DetectionResultUncheckedCreateNestedManyWithoutFishInput
    userMissionProgress?: UserMissionProgressUncheckedCreateNestedManyWithoutFishInput
    userPointHistories?: UserPointHistoryUncheckedCreateNestedManyWithoutFishInput
    missionDetailTargets?: MissionDetailTargetUncheckedCreateNestedManyWithoutFishInput
  }

  export type FishUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FishFamilyUpdateOneWithoutFishesNestedInput
    rarity?: FishRarityUpdateOneWithoutFishesNestedInput
    detectionResults?: DetectionResultUpdateManyWithoutFishNestedInput
    userMissionProgress?: UserMissionProgressUpdateManyWithoutFishNestedInput
    userPointHistories?: UserPointHistoryUpdateManyWithoutFishNestedInput
    missionDetailTargets?: MissionDetailTargetUpdateManyWithoutFishNestedInput
  }

  export type FishUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    rarityId?: NullableStringFieldUpdateOperationsInput | string | null
    detectionResults?: DetectionResultUncheckedUpdateManyWithoutFishNestedInput
    userMissionProgress?: UserMissionProgressUncheckedUpdateManyWithoutFishNestedInput
    userPointHistories?: UserPointHistoryUncheckedUpdateManyWithoutFishNestedInput
    missionDetailTargets?: MissionDetailTargetUncheckedUpdateManyWithoutFishNestedInput
  }

  export type FishCreateManyInput = {
    id?: string
    name: string
    scientificName?: string | null
    description?: string | null
    imageUrl?: string | null
    habitat?: string | null
    length?: string | null
    age?: string | null
    depthLevel?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    familyId?: string | null
    rarityId?: string | null
  }

  export type FishUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FishUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    rarityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DetectionHistoryCreateInput = {
    id?: string
    imageUrl: string
    claimToken?: string | null
    isClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDetectionHistoryInput
    userPointHistory?: UserPointHistoryCreateNestedOneWithoutDetectionHistoryInput
    detectionResults?: DetectionResultCreateNestedManyWithoutDetectionHistoryInput
  }

  export type DetectionHistoryUncheckedCreateInput = {
    id?: string
    imageUrl: string
    claimToken?: string | null
    isClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    userPointHistory?: UserPointHistoryUncheckedCreateNestedOneWithoutDetectionHistoryInput
    detectionResults?: DetectionResultUncheckedCreateNestedManyWithoutDetectionHistoryInput
  }

  export type DetectionHistoryUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    claimToken?: NullableStringFieldUpdateOperationsInput | string | null
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDetectionHistoryNestedInput
    userPointHistory?: UserPointHistoryUpdateOneWithoutDetectionHistoryNestedInput
    detectionResults?: DetectionResultUpdateManyWithoutDetectionHistoryNestedInput
  }

  export type DetectionHistoryUncheckedUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    claimToken?: NullableStringFieldUpdateOperationsInput | string | null
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    userPointHistory?: UserPointHistoryUncheckedUpdateOneWithoutDetectionHistoryNestedInput
    detectionResults?: DetectionResultUncheckedUpdateManyWithoutDetectionHistoryNestedInput
  }

  export type DetectionHistoryCreateManyInput = {
    id?: string
    imageUrl: string
    claimToken?: string | null
    isClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type DetectionHistoryUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    claimToken?: NullableStringFieldUpdateOperationsInput | string | null
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionHistoryUncheckedUpdateManyInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    claimToken?: NullableStringFieldUpdateOperationsInput | string | null
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DetectionResultCreateInput = {
    id?: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detectionHistory: DetectionHistoryCreateNestedOneWithoutDetectionResultsInput
    fish?: FishCreateNestedOneWithoutDetectionResultsInput
  }

  export type DetectionResultUncheckedCreateInput = {
    id?: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detectionHistoryId: string
    fishId?: string | null
  }

  export type DetectionResultUpdateInput = {
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectionHistory?: DetectionHistoryUpdateOneRequiredWithoutDetectionResultsNestedInput
    fish?: FishUpdateOneWithoutDetectionResultsNestedInput
  }

  export type DetectionResultUncheckedUpdateInput = {
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectionHistoryId?: StringFieldUpdateOperationsInput | string
    fishId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DetectionResultCreateManyInput = {
    id?: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detectionHistoryId: string
    fishId?: string | null
  }

  export type DetectionResultUpdateManyMutationInput = {
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionResultUncheckedUpdateManyInput = {
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectionHistoryId?: StringFieldUpdateOperationsInput | string
    fishId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPointHistoryCreateInput = {
    id?: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserPointHistoryInput
    detectionHistory?: DetectionHistoryCreateNestedOneWithoutUserPointHistoryInput
    mission?: MissionCreateNestedOneWithoutPointHistoriesInput
    fish?: FishCreateNestedOneWithoutUserPointHistoriesInput
  }

  export type UserPointHistoryUncheckedCreateInput = {
    id?: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    detectionHistoryId?: string | null
    missionId?: string | null
    fishId?: string | null
  }

  export type UserPointHistoryUpdateInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPointHistoryNestedInput
    detectionHistory?: DetectionHistoryUpdateOneWithoutUserPointHistoryNestedInput
    mission?: MissionUpdateOneWithoutPointHistoriesNestedInput
    fish?: FishUpdateOneWithoutUserPointHistoriesNestedInput
  }

  export type UserPointHistoryUncheckedUpdateInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    detectionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    missionId?: NullableStringFieldUpdateOperationsInput | string | null
    fishId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPointHistoryCreateManyInput = {
    id?: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    detectionHistoryId?: string | null
    missionId?: string | null
    fishId?: string | null
  }

  export type UserPointHistoryUpdateManyMutationInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPointHistoryUncheckedUpdateManyInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    detectionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    missionId?: NullableStringFieldUpdateOperationsInput | string | null
    fishId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MissionCreateInput = {
    id?: string
    title: string
    point?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    detailTargets?: MissionDetailTargetCreateNestedManyWithoutMissionInput
    userProgresses?: UserMissionProgressCreateNestedManyWithoutMissionInput
    pointHistories?: UserPointHistoryCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateInput = {
    id?: string
    title: string
    point?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    detailTargets?: MissionDetailTargetUncheckedCreateNestedManyWithoutMissionInput
    userProgresses?: UserMissionProgressUncheckedCreateNestedManyWithoutMissionInput
    pointHistories?: UserPointHistoryUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detailTargets?: MissionDetailTargetUpdateManyWithoutMissionNestedInput
    userProgresses?: UserMissionProgressUpdateManyWithoutMissionNestedInput
    pointHistories?: UserPointHistoryUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detailTargets?: MissionDetailTargetUncheckedUpdateManyWithoutMissionNestedInput
    userProgresses?: UserMissionProgressUncheckedUpdateManyWithoutMissionNestedInput
    pointHistories?: UserPointHistoryUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionCreateManyInput = {
    id?: string
    title: string
    point?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionDetailTargetCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    mission: MissionCreateNestedOneWithoutDetailTargetsInput
    fish: FishCreateNestedOneWithoutMissionDetailTargetsInput
  }

  export type MissionDetailTargetUncheckedCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    missionId: string
    fishId: string
  }

  export type MissionDetailTargetUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mission?: MissionUpdateOneRequiredWithoutDetailTargetsNestedInput
    fish?: FishUpdateOneRequiredWithoutMissionDetailTargetsNestedInput
  }

  export type MissionDetailTargetUncheckedUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missionId?: StringFieldUpdateOperationsInput | string
    fishId?: StringFieldUpdateOperationsInput | string
  }

  export type MissionDetailTargetCreateManyInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    missionId: string
    fishId: string
  }

  export type MissionDetailTargetUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionDetailTargetUncheckedUpdateManyInput = {
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missionId?: StringFieldUpdateOperationsInput | string
    fishId?: StringFieldUpdateOperationsInput | string
  }

  export type UserMissionProgressCreateInput = {
    id?: string
    isSuccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserMissionProgressInput
    mission: MissionCreateNestedOneWithoutUserProgressesInput
    fish: FishCreateNestedOneWithoutUserMissionProgressInput
  }

  export type UserMissionProgressUncheckedCreateInput = {
    id?: string
    isSuccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    missionId: string
    fishId: string
  }

  export type UserMissionProgressUpdateInput = {
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserMissionProgressNestedInput
    mission?: MissionUpdateOneRequiredWithoutUserProgressesNestedInput
    fish?: FishUpdateOneRequiredWithoutUserMissionProgressNestedInput
  }

  export type UserMissionProgressUncheckedUpdateInput = {
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    fishId?: StringFieldUpdateOperationsInput | string
  }

  export type UserMissionProgressCreateManyInput = {
    id?: string
    isSuccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    missionId: string
    fishId: string
  }

  export type UserMissionProgressUpdateManyMutationInput = {
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMissionProgressUncheckedUpdateManyInput = {
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
    fishId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type DetectionHistoryListRelationFilter = {
    every?: DetectionHistoryWhereInput
    some?: DetectionHistoryWhereInput
    none?: DetectionHistoryWhereInput
  }

  export type UserPointHistoryListRelationFilter = {
    every?: UserPointHistoryWhereInput
    some?: UserPointHistoryWhereInput
    none?: UserPointHistoryWhereInput
  }

  export type UserMissionProgressListRelationFilter = {
    every?: UserMissionProgressWhereInput
    some?: UserMissionProgressWhereInput
    none?: UserMissionProgressWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DetectionHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPointHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserMissionProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FishListRelationFilter = {
    every?: FishWhereInput
    some?: FishWhereInput
    none?: FishWhereInput
  }

  export type FishOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FishFamilyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FishFamilyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FishFamilyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FishRarityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FishRarityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FishRarityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FishFamilyNullableScalarRelationFilter = {
    is?: FishFamilyWhereInput | null
    isNot?: FishFamilyWhereInput | null
  }

  export type FishRarityNullableScalarRelationFilter = {
    is?: FishRarityWhereInput | null
    isNot?: FishRarityWhereInput | null
  }

  export type DetectionResultListRelationFilter = {
    every?: DetectionResultWhereInput
    some?: DetectionResultWhereInput
    none?: DetectionResultWhereInput
  }

  export type MissionDetailTargetListRelationFilter = {
    every?: MissionDetailTargetWhereInput
    some?: MissionDetailTargetWhereInput
    none?: MissionDetailTargetWhereInput
  }

  export type DetectionResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MissionDetailTargetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FishCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    scientificName?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    habitat?: SortOrder
    length?: SortOrder
    age?: SortOrder
    depthLevel?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    familyId?: SortOrder
    rarityId?: SortOrder
  }

  export type FishMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    scientificName?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    habitat?: SortOrder
    length?: SortOrder
    age?: SortOrder
    depthLevel?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    familyId?: SortOrder
    rarityId?: SortOrder
  }

  export type FishMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    scientificName?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    habitat?: SortOrder
    length?: SortOrder
    age?: SortOrder
    depthLevel?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    familyId?: SortOrder
    rarityId?: SortOrder
  }

  export type UserPointHistoryNullableScalarRelationFilter = {
    is?: UserPointHistoryWhereInput | null
    isNot?: UserPointHistoryWhereInput | null
  }

  export type DetectionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    claimToken?: SortOrder
    isClaimed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DetectionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    claimToken?: SortOrder
    isClaimed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DetectionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    claimToken?: SortOrder
    isClaimed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DetectionHistoryScalarRelationFilter = {
    is?: DetectionHistoryWhereInput
    isNot?: DetectionHistoryWhereInput
  }

  export type FishNullableScalarRelationFilter = {
    is?: FishWhereInput | null
    isNot?: FishWhereInput | null
  }

  export type DetectionResultCountOrderByAggregateInput = {
    id?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    detectionHistoryId?: SortOrder
    fishId?: SortOrder
  }

  export type DetectionResultAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type DetectionResultMaxOrderByAggregateInput = {
    id?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    detectionHistoryId?: SortOrder
    fishId?: SortOrder
  }

  export type DetectionResultMinOrderByAggregateInput = {
    id?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    detectionHistoryId?: SortOrder
    fishId?: SortOrder
  }

  export type DetectionResultSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DetectionHistoryNullableScalarRelationFilter = {
    is?: DetectionHistoryWhereInput | null
    isNot?: DetectionHistoryWhereInput | null
  }

  export type MissionNullableScalarRelationFilter = {
    is?: MissionWhereInput | null
    isNot?: MissionWhereInput | null
  }

  export type UserPointHistoryMissionIdUserIdFishIdCompoundUniqueInput = {
    missionId: string
    userId: string
    fishId: string
  }

  export type UserPointHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    detectionHistoryId?: SortOrder
    missionId?: SortOrder
    fishId?: SortOrder
  }

  export type UserPointHistoryAvgOrderByAggregateInput = {
    point?: SortOrder
  }

  export type UserPointHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    detectionHistoryId?: SortOrder
    missionId?: SortOrder
    fishId?: SortOrder
  }

  export type UserPointHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    detectionHistoryId?: SortOrder
    missionId?: SortOrder
    fishId?: SortOrder
  }

  export type UserPointHistorySumOrderByAggregateInput = {
    point?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type MissionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    point?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionAvgOrderByAggregateInput = {
    point?: SortOrder
  }

  export type MissionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    point?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    point?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionSumOrderByAggregateInput = {
    point?: SortOrder
  }

  export type MissionScalarRelationFilter = {
    is?: MissionWhereInput
    isNot?: MissionWhereInput
  }

  export type FishScalarRelationFilter = {
    is?: FishWhereInput
    isNot?: FishWhereInput
  }

  export type MissionDetailTargetCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    missionId?: SortOrder
    fishId?: SortOrder
  }

  export type MissionDetailTargetAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type MissionDetailTargetMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    missionId?: SortOrder
    fishId?: SortOrder
  }

  export type MissionDetailTargetMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    missionId?: SortOrder
    fishId?: SortOrder
  }

  export type MissionDetailTargetSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UserMissionProgressUserIdMissionIdFishIdCompoundUniqueInput = {
    userId: string
    missionId: string
    fishId: string
  }

  export type UserMissionProgressCountOrderByAggregateInput = {
    id?: SortOrder
    isSuccess?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    fishId?: SortOrder
  }

  export type UserMissionProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    isSuccess?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    fishId?: SortOrder
  }

  export type UserMissionProgressMinOrderByAggregateInput = {
    id?: SortOrder
    isSuccess?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    fishId?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type DetectionHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<DetectionHistoryCreateWithoutUserInput, DetectionHistoryUncheckedCreateWithoutUserInput> | DetectionHistoryCreateWithoutUserInput[] | DetectionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DetectionHistoryCreateOrConnectWithoutUserInput | DetectionHistoryCreateOrConnectWithoutUserInput[]
    createMany?: DetectionHistoryCreateManyUserInputEnvelope
    connect?: DetectionHistoryWhereUniqueInput | DetectionHistoryWhereUniqueInput[]
  }

  export type UserPointHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPointHistoryCreateWithoutUserInput, UserPointHistoryUncheckedCreateWithoutUserInput> | UserPointHistoryCreateWithoutUserInput[] | UserPointHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPointHistoryCreateOrConnectWithoutUserInput | UserPointHistoryCreateOrConnectWithoutUserInput[]
    createMany?: UserPointHistoryCreateManyUserInputEnvelope
    connect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
  }

  export type UserMissionProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMissionProgressCreateWithoutUserInput, UserMissionProgressUncheckedCreateWithoutUserInput> | UserMissionProgressCreateWithoutUserInput[] | UserMissionProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMissionProgressCreateOrConnectWithoutUserInput | UserMissionProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserMissionProgressCreateManyUserInputEnvelope
    connect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type DetectionHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DetectionHistoryCreateWithoutUserInput, DetectionHistoryUncheckedCreateWithoutUserInput> | DetectionHistoryCreateWithoutUserInput[] | DetectionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DetectionHistoryCreateOrConnectWithoutUserInput | DetectionHistoryCreateOrConnectWithoutUserInput[]
    createMany?: DetectionHistoryCreateManyUserInputEnvelope
    connect?: DetectionHistoryWhereUniqueInput | DetectionHistoryWhereUniqueInput[]
  }

  export type UserPointHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPointHistoryCreateWithoutUserInput, UserPointHistoryUncheckedCreateWithoutUserInput> | UserPointHistoryCreateWithoutUserInput[] | UserPointHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPointHistoryCreateOrConnectWithoutUserInput | UserPointHistoryCreateOrConnectWithoutUserInput[]
    createMany?: UserPointHistoryCreateManyUserInputEnvelope
    connect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
  }

  export type UserMissionProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMissionProgressCreateWithoutUserInput, UserMissionProgressUncheckedCreateWithoutUserInput> | UserMissionProgressCreateWithoutUserInput[] | UserMissionProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMissionProgressCreateOrConnectWithoutUserInput | UserMissionProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserMissionProgressCreateManyUserInputEnvelope
    connect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type DetectionHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<DetectionHistoryCreateWithoutUserInput, DetectionHistoryUncheckedCreateWithoutUserInput> | DetectionHistoryCreateWithoutUserInput[] | DetectionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DetectionHistoryCreateOrConnectWithoutUserInput | DetectionHistoryCreateOrConnectWithoutUserInput[]
    upsert?: DetectionHistoryUpsertWithWhereUniqueWithoutUserInput | DetectionHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DetectionHistoryCreateManyUserInputEnvelope
    set?: DetectionHistoryWhereUniqueInput | DetectionHistoryWhereUniqueInput[]
    disconnect?: DetectionHistoryWhereUniqueInput | DetectionHistoryWhereUniqueInput[]
    delete?: DetectionHistoryWhereUniqueInput | DetectionHistoryWhereUniqueInput[]
    connect?: DetectionHistoryWhereUniqueInput | DetectionHistoryWhereUniqueInput[]
    update?: DetectionHistoryUpdateWithWhereUniqueWithoutUserInput | DetectionHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DetectionHistoryUpdateManyWithWhereWithoutUserInput | DetectionHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DetectionHistoryScalarWhereInput | DetectionHistoryScalarWhereInput[]
  }

  export type UserPointHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPointHistoryCreateWithoutUserInput, UserPointHistoryUncheckedCreateWithoutUserInput> | UserPointHistoryCreateWithoutUserInput[] | UserPointHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPointHistoryCreateOrConnectWithoutUserInput | UserPointHistoryCreateOrConnectWithoutUserInput[]
    upsert?: UserPointHistoryUpsertWithWhereUniqueWithoutUserInput | UserPointHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPointHistoryCreateManyUserInputEnvelope
    set?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    disconnect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    delete?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    connect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    update?: UserPointHistoryUpdateWithWhereUniqueWithoutUserInput | UserPointHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPointHistoryUpdateManyWithWhereWithoutUserInput | UserPointHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPointHistoryScalarWhereInput | UserPointHistoryScalarWhereInput[]
  }

  export type UserMissionProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMissionProgressCreateWithoutUserInput, UserMissionProgressUncheckedCreateWithoutUserInput> | UserMissionProgressCreateWithoutUserInput[] | UserMissionProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMissionProgressCreateOrConnectWithoutUserInput | UserMissionProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserMissionProgressUpsertWithWhereUniqueWithoutUserInput | UserMissionProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMissionProgressCreateManyUserInputEnvelope
    set?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    disconnect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    delete?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    connect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    update?: UserMissionProgressUpdateWithWhereUniqueWithoutUserInput | UserMissionProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMissionProgressUpdateManyWithWhereWithoutUserInput | UserMissionProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMissionProgressScalarWhereInput | UserMissionProgressScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type DetectionHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DetectionHistoryCreateWithoutUserInput, DetectionHistoryUncheckedCreateWithoutUserInput> | DetectionHistoryCreateWithoutUserInput[] | DetectionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DetectionHistoryCreateOrConnectWithoutUserInput | DetectionHistoryCreateOrConnectWithoutUserInput[]
    upsert?: DetectionHistoryUpsertWithWhereUniqueWithoutUserInput | DetectionHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DetectionHistoryCreateManyUserInputEnvelope
    set?: DetectionHistoryWhereUniqueInput | DetectionHistoryWhereUniqueInput[]
    disconnect?: DetectionHistoryWhereUniqueInput | DetectionHistoryWhereUniqueInput[]
    delete?: DetectionHistoryWhereUniqueInput | DetectionHistoryWhereUniqueInput[]
    connect?: DetectionHistoryWhereUniqueInput | DetectionHistoryWhereUniqueInput[]
    update?: DetectionHistoryUpdateWithWhereUniqueWithoutUserInput | DetectionHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DetectionHistoryUpdateManyWithWhereWithoutUserInput | DetectionHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DetectionHistoryScalarWhereInput | DetectionHistoryScalarWhereInput[]
  }

  export type UserPointHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPointHistoryCreateWithoutUserInput, UserPointHistoryUncheckedCreateWithoutUserInput> | UserPointHistoryCreateWithoutUserInput[] | UserPointHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPointHistoryCreateOrConnectWithoutUserInput | UserPointHistoryCreateOrConnectWithoutUserInput[]
    upsert?: UserPointHistoryUpsertWithWhereUniqueWithoutUserInput | UserPointHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPointHistoryCreateManyUserInputEnvelope
    set?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    disconnect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    delete?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    connect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    update?: UserPointHistoryUpdateWithWhereUniqueWithoutUserInput | UserPointHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPointHistoryUpdateManyWithWhereWithoutUserInput | UserPointHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPointHistoryScalarWhereInput | UserPointHistoryScalarWhereInput[]
  }

  export type UserMissionProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMissionProgressCreateWithoutUserInput, UserMissionProgressUncheckedCreateWithoutUserInput> | UserMissionProgressCreateWithoutUserInput[] | UserMissionProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMissionProgressCreateOrConnectWithoutUserInput | UserMissionProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserMissionProgressUpsertWithWhereUniqueWithoutUserInput | UserMissionProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMissionProgressCreateManyUserInputEnvelope
    set?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    disconnect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    delete?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    connect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    update?: UserMissionProgressUpdateWithWhereUniqueWithoutUserInput | UserMissionProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMissionProgressUpdateManyWithWhereWithoutUserInput | UserMissionProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMissionProgressScalarWhereInput | UserMissionProgressScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type FishCreateNestedManyWithoutFamilyInput = {
    create?: XOR<FishCreateWithoutFamilyInput, FishUncheckedCreateWithoutFamilyInput> | FishCreateWithoutFamilyInput[] | FishUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: FishCreateOrConnectWithoutFamilyInput | FishCreateOrConnectWithoutFamilyInput[]
    createMany?: FishCreateManyFamilyInputEnvelope
    connect?: FishWhereUniqueInput | FishWhereUniqueInput[]
  }

  export type FishUncheckedCreateNestedManyWithoutFamilyInput = {
    create?: XOR<FishCreateWithoutFamilyInput, FishUncheckedCreateWithoutFamilyInput> | FishCreateWithoutFamilyInput[] | FishUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: FishCreateOrConnectWithoutFamilyInput | FishCreateOrConnectWithoutFamilyInput[]
    createMany?: FishCreateManyFamilyInputEnvelope
    connect?: FishWhereUniqueInput | FishWhereUniqueInput[]
  }

  export type FishUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<FishCreateWithoutFamilyInput, FishUncheckedCreateWithoutFamilyInput> | FishCreateWithoutFamilyInput[] | FishUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: FishCreateOrConnectWithoutFamilyInput | FishCreateOrConnectWithoutFamilyInput[]
    upsert?: FishUpsertWithWhereUniqueWithoutFamilyInput | FishUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: FishCreateManyFamilyInputEnvelope
    set?: FishWhereUniqueInput | FishWhereUniqueInput[]
    disconnect?: FishWhereUniqueInput | FishWhereUniqueInput[]
    delete?: FishWhereUniqueInput | FishWhereUniqueInput[]
    connect?: FishWhereUniqueInput | FishWhereUniqueInput[]
    update?: FishUpdateWithWhereUniqueWithoutFamilyInput | FishUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: FishUpdateManyWithWhereWithoutFamilyInput | FishUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: FishScalarWhereInput | FishScalarWhereInput[]
  }

  export type FishUncheckedUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<FishCreateWithoutFamilyInput, FishUncheckedCreateWithoutFamilyInput> | FishCreateWithoutFamilyInput[] | FishUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: FishCreateOrConnectWithoutFamilyInput | FishCreateOrConnectWithoutFamilyInput[]
    upsert?: FishUpsertWithWhereUniqueWithoutFamilyInput | FishUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: FishCreateManyFamilyInputEnvelope
    set?: FishWhereUniqueInput | FishWhereUniqueInput[]
    disconnect?: FishWhereUniqueInput | FishWhereUniqueInput[]
    delete?: FishWhereUniqueInput | FishWhereUniqueInput[]
    connect?: FishWhereUniqueInput | FishWhereUniqueInput[]
    update?: FishUpdateWithWhereUniqueWithoutFamilyInput | FishUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: FishUpdateManyWithWhereWithoutFamilyInput | FishUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: FishScalarWhereInput | FishScalarWhereInput[]
  }

  export type FishCreateNestedManyWithoutRarityInput = {
    create?: XOR<FishCreateWithoutRarityInput, FishUncheckedCreateWithoutRarityInput> | FishCreateWithoutRarityInput[] | FishUncheckedCreateWithoutRarityInput[]
    connectOrCreate?: FishCreateOrConnectWithoutRarityInput | FishCreateOrConnectWithoutRarityInput[]
    createMany?: FishCreateManyRarityInputEnvelope
    connect?: FishWhereUniqueInput | FishWhereUniqueInput[]
  }

  export type FishUncheckedCreateNestedManyWithoutRarityInput = {
    create?: XOR<FishCreateWithoutRarityInput, FishUncheckedCreateWithoutRarityInput> | FishCreateWithoutRarityInput[] | FishUncheckedCreateWithoutRarityInput[]
    connectOrCreate?: FishCreateOrConnectWithoutRarityInput | FishCreateOrConnectWithoutRarityInput[]
    createMany?: FishCreateManyRarityInputEnvelope
    connect?: FishWhereUniqueInput | FishWhereUniqueInput[]
  }

  export type FishUpdateManyWithoutRarityNestedInput = {
    create?: XOR<FishCreateWithoutRarityInput, FishUncheckedCreateWithoutRarityInput> | FishCreateWithoutRarityInput[] | FishUncheckedCreateWithoutRarityInput[]
    connectOrCreate?: FishCreateOrConnectWithoutRarityInput | FishCreateOrConnectWithoutRarityInput[]
    upsert?: FishUpsertWithWhereUniqueWithoutRarityInput | FishUpsertWithWhereUniqueWithoutRarityInput[]
    createMany?: FishCreateManyRarityInputEnvelope
    set?: FishWhereUniqueInput | FishWhereUniqueInput[]
    disconnect?: FishWhereUniqueInput | FishWhereUniqueInput[]
    delete?: FishWhereUniqueInput | FishWhereUniqueInput[]
    connect?: FishWhereUniqueInput | FishWhereUniqueInput[]
    update?: FishUpdateWithWhereUniqueWithoutRarityInput | FishUpdateWithWhereUniqueWithoutRarityInput[]
    updateMany?: FishUpdateManyWithWhereWithoutRarityInput | FishUpdateManyWithWhereWithoutRarityInput[]
    deleteMany?: FishScalarWhereInput | FishScalarWhereInput[]
  }

  export type FishUncheckedUpdateManyWithoutRarityNestedInput = {
    create?: XOR<FishCreateWithoutRarityInput, FishUncheckedCreateWithoutRarityInput> | FishCreateWithoutRarityInput[] | FishUncheckedCreateWithoutRarityInput[]
    connectOrCreate?: FishCreateOrConnectWithoutRarityInput | FishCreateOrConnectWithoutRarityInput[]
    upsert?: FishUpsertWithWhereUniqueWithoutRarityInput | FishUpsertWithWhereUniqueWithoutRarityInput[]
    createMany?: FishCreateManyRarityInputEnvelope
    set?: FishWhereUniqueInput | FishWhereUniqueInput[]
    disconnect?: FishWhereUniqueInput | FishWhereUniqueInput[]
    delete?: FishWhereUniqueInput | FishWhereUniqueInput[]
    connect?: FishWhereUniqueInput | FishWhereUniqueInput[]
    update?: FishUpdateWithWhereUniqueWithoutRarityInput | FishUpdateWithWhereUniqueWithoutRarityInput[]
    updateMany?: FishUpdateManyWithWhereWithoutRarityInput | FishUpdateManyWithWhereWithoutRarityInput[]
    deleteMany?: FishScalarWhereInput | FishScalarWhereInput[]
  }

  export type FishFamilyCreateNestedOneWithoutFishesInput = {
    create?: XOR<FishFamilyCreateWithoutFishesInput, FishFamilyUncheckedCreateWithoutFishesInput>
    connectOrCreate?: FishFamilyCreateOrConnectWithoutFishesInput
    connect?: FishFamilyWhereUniqueInput
  }

  export type FishRarityCreateNestedOneWithoutFishesInput = {
    create?: XOR<FishRarityCreateWithoutFishesInput, FishRarityUncheckedCreateWithoutFishesInput>
    connectOrCreate?: FishRarityCreateOrConnectWithoutFishesInput
    connect?: FishRarityWhereUniqueInput
  }

  export type DetectionResultCreateNestedManyWithoutFishInput = {
    create?: XOR<DetectionResultCreateWithoutFishInput, DetectionResultUncheckedCreateWithoutFishInput> | DetectionResultCreateWithoutFishInput[] | DetectionResultUncheckedCreateWithoutFishInput[]
    connectOrCreate?: DetectionResultCreateOrConnectWithoutFishInput | DetectionResultCreateOrConnectWithoutFishInput[]
    createMany?: DetectionResultCreateManyFishInputEnvelope
    connect?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
  }

  export type UserMissionProgressCreateNestedManyWithoutFishInput = {
    create?: XOR<UserMissionProgressCreateWithoutFishInput, UserMissionProgressUncheckedCreateWithoutFishInput> | UserMissionProgressCreateWithoutFishInput[] | UserMissionProgressUncheckedCreateWithoutFishInput[]
    connectOrCreate?: UserMissionProgressCreateOrConnectWithoutFishInput | UserMissionProgressCreateOrConnectWithoutFishInput[]
    createMany?: UserMissionProgressCreateManyFishInputEnvelope
    connect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
  }

  export type UserPointHistoryCreateNestedManyWithoutFishInput = {
    create?: XOR<UserPointHistoryCreateWithoutFishInput, UserPointHistoryUncheckedCreateWithoutFishInput> | UserPointHistoryCreateWithoutFishInput[] | UserPointHistoryUncheckedCreateWithoutFishInput[]
    connectOrCreate?: UserPointHistoryCreateOrConnectWithoutFishInput | UserPointHistoryCreateOrConnectWithoutFishInput[]
    createMany?: UserPointHistoryCreateManyFishInputEnvelope
    connect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
  }

  export type MissionDetailTargetCreateNestedManyWithoutFishInput = {
    create?: XOR<MissionDetailTargetCreateWithoutFishInput, MissionDetailTargetUncheckedCreateWithoutFishInput> | MissionDetailTargetCreateWithoutFishInput[] | MissionDetailTargetUncheckedCreateWithoutFishInput[]
    connectOrCreate?: MissionDetailTargetCreateOrConnectWithoutFishInput | MissionDetailTargetCreateOrConnectWithoutFishInput[]
    createMany?: MissionDetailTargetCreateManyFishInputEnvelope
    connect?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
  }

  export type DetectionResultUncheckedCreateNestedManyWithoutFishInput = {
    create?: XOR<DetectionResultCreateWithoutFishInput, DetectionResultUncheckedCreateWithoutFishInput> | DetectionResultCreateWithoutFishInput[] | DetectionResultUncheckedCreateWithoutFishInput[]
    connectOrCreate?: DetectionResultCreateOrConnectWithoutFishInput | DetectionResultCreateOrConnectWithoutFishInput[]
    createMany?: DetectionResultCreateManyFishInputEnvelope
    connect?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
  }

  export type UserMissionProgressUncheckedCreateNestedManyWithoutFishInput = {
    create?: XOR<UserMissionProgressCreateWithoutFishInput, UserMissionProgressUncheckedCreateWithoutFishInput> | UserMissionProgressCreateWithoutFishInput[] | UserMissionProgressUncheckedCreateWithoutFishInput[]
    connectOrCreate?: UserMissionProgressCreateOrConnectWithoutFishInput | UserMissionProgressCreateOrConnectWithoutFishInput[]
    createMany?: UserMissionProgressCreateManyFishInputEnvelope
    connect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
  }

  export type UserPointHistoryUncheckedCreateNestedManyWithoutFishInput = {
    create?: XOR<UserPointHistoryCreateWithoutFishInput, UserPointHistoryUncheckedCreateWithoutFishInput> | UserPointHistoryCreateWithoutFishInput[] | UserPointHistoryUncheckedCreateWithoutFishInput[]
    connectOrCreate?: UserPointHistoryCreateOrConnectWithoutFishInput | UserPointHistoryCreateOrConnectWithoutFishInput[]
    createMany?: UserPointHistoryCreateManyFishInputEnvelope
    connect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
  }

  export type MissionDetailTargetUncheckedCreateNestedManyWithoutFishInput = {
    create?: XOR<MissionDetailTargetCreateWithoutFishInput, MissionDetailTargetUncheckedCreateWithoutFishInput> | MissionDetailTargetCreateWithoutFishInput[] | MissionDetailTargetUncheckedCreateWithoutFishInput[]
    connectOrCreate?: MissionDetailTargetCreateOrConnectWithoutFishInput | MissionDetailTargetCreateOrConnectWithoutFishInput[]
    createMany?: MissionDetailTargetCreateManyFishInputEnvelope
    connect?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
  }

  export type FishFamilyUpdateOneWithoutFishesNestedInput = {
    create?: XOR<FishFamilyCreateWithoutFishesInput, FishFamilyUncheckedCreateWithoutFishesInput>
    connectOrCreate?: FishFamilyCreateOrConnectWithoutFishesInput
    upsert?: FishFamilyUpsertWithoutFishesInput
    disconnect?: boolean
    delete?: FishFamilyWhereInput | boolean
    connect?: FishFamilyWhereUniqueInput
    update?: XOR<XOR<FishFamilyUpdateToOneWithWhereWithoutFishesInput, FishFamilyUpdateWithoutFishesInput>, FishFamilyUncheckedUpdateWithoutFishesInput>
  }

  export type FishRarityUpdateOneWithoutFishesNestedInput = {
    create?: XOR<FishRarityCreateWithoutFishesInput, FishRarityUncheckedCreateWithoutFishesInput>
    connectOrCreate?: FishRarityCreateOrConnectWithoutFishesInput
    upsert?: FishRarityUpsertWithoutFishesInput
    disconnect?: boolean
    delete?: FishRarityWhereInput | boolean
    connect?: FishRarityWhereUniqueInput
    update?: XOR<XOR<FishRarityUpdateToOneWithWhereWithoutFishesInput, FishRarityUpdateWithoutFishesInput>, FishRarityUncheckedUpdateWithoutFishesInput>
  }

  export type DetectionResultUpdateManyWithoutFishNestedInput = {
    create?: XOR<DetectionResultCreateWithoutFishInput, DetectionResultUncheckedCreateWithoutFishInput> | DetectionResultCreateWithoutFishInput[] | DetectionResultUncheckedCreateWithoutFishInput[]
    connectOrCreate?: DetectionResultCreateOrConnectWithoutFishInput | DetectionResultCreateOrConnectWithoutFishInput[]
    upsert?: DetectionResultUpsertWithWhereUniqueWithoutFishInput | DetectionResultUpsertWithWhereUniqueWithoutFishInput[]
    createMany?: DetectionResultCreateManyFishInputEnvelope
    set?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
    disconnect?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
    delete?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
    connect?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
    update?: DetectionResultUpdateWithWhereUniqueWithoutFishInput | DetectionResultUpdateWithWhereUniqueWithoutFishInput[]
    updateMany?: DetectionResultUpdateManyWithWhereWithoutFishInput | DetectionResultUpdateManyWithWhereWithoutFishInput[]
    deleteMany?: DetectionResultScalarWhereInput | DetectionResultScalarWhereInput[]
  }

  export type UserMissionProgressUpdateManyWithoutFishNestedInput = {
    create?: XOR<UserMissionProgressCreateWithoutFishInput, UserMissionProgressUncheckedCreateWithoutFishInput> | UserMissionProgressCreateWithoutFishInput[] | UserMissionProgressUncheckedCreateWithoutFishInput[]
    connectOrCreate?: UserMissionProgressCreateOrConnectWithoutFishInput | UserMissionProgressCreateOrConnectWithoutFishInput[]
    upsert?: UserMissionProgressUpsertWithWhereUniqueWithoutFishInput | UserMissionProgressUpsertWithWhereUniqueWithoutFishInput[]
    createMany?: UserMissionProgressCreateManyFishInputEnvelope
    set?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    disconnect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    delete?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    connect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    update?: UserMissionProgressUpdateWithWhereUniqueWithoutFishInput | UserMissionProgressUpdateWithWhereUniqueWithoutFishInput[]
    updateMany?: UserMissionProgressUpdateManyWithWhereWithoutFishInput | UserMissionProgressUpdateManyWithWhereWithoutFishInput[]
    deleteMany?: UserMissionProgressScalarWhereInput | UserMissionProgressScalarWhereInput[]
  }

  export type UserPointHistoryUpdateManyWithoutFishNestedInput = {
    create?: XOR<UserPointHistoryCreateWithoutFishInput, UserPointHistoryUncheckedCreateWithoutFishInput> | UserPointHistoryCreateWithoutFishInput[] | UserPointHistoryUncheckedCreateWithoutFishInput[]
    connectOrCreate?: UserPointHistoryCreateOrConnectWithoutFishInput | UserPointHistoryCreateOrConnectWithoutFishInput[]
    upsert?: UserPointHistoryUpsertWithWhereUniqueWithoutFishInput | UserPointHistoryUpsertWithWhereUniqueWithoutFishInput[]
    createMany?: UserPointHistoryCreateManyFishInputEnvelope
    set?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    disconnect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    delete?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    connect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    update?: UserPointHistoryUpdateWithWhereUniqueWithoutFishInput | UserPointHistoryUpdateWithWhereUniqueWithoutFishInput[]
    updateMany?: UserPointHistoryUpdateManyWithWhereWithoutFishInput | UserPointHistoryUpdateManyWithWhereWithoutFishInput[]
    deleteMany?: UserPointHistoryScalarWhereInput | UserPointHistoryScalarWhereInput[]
  }

  export type MissionDetailTargetUpdateManyWithoutFishNestedInput = {
    create?: XOR<MissionDetailTargetCreateWithoutFishInput, MissionDetailTargetUncheckedCreateWithoutFishInput> | MissionDetailTargetCreateWithoutFishInput[] | MissionDetailTargetUncheckedCreateWithoutFishInput[]
    connectOrCreate?: MissionDetailTargetCreateOrConnectWithoutFishInput | MissionDetailTargetCreateOrConnectWithoutFishInput[]
    upsert?: MissionDetailTargetUpsertWithWhereUniqueWithoutFishInput | MissionDetailTargetUpsertWithWhereUniqueWithoutFishInput[]
    createMany?: MissionDetailTargetCreateManyFishInputEnvelope
    set?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
    disconnect?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
    delete?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
    connect?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
    update?: MissionDetailTargetUpdateWithWhereUniqueWithoutFishInput | MissionDetailTargetUpdateWithWhereUniqueWithoutFishInput[]
    updateMany?: MissionDetailTargetUpdateManyWithWhereWithoutFishInput | MissionDetailTargetUpdateManyWithWhereWithoutFishInput[]
    deleteMany?: MissionDetailTargetScalarWhereInput | MissionDetailTargetScalarWhereInput[]
  }

  export type DetectionResultUncheckedUpdateManyWithoutFishNestedInput = {
    create?: XOR<DetectionResultCreateWithoutFishInput, DetectionResultUncheckedCreateWithoutFishInput> | DetectionResultCreateWithoutFishInput[] | DetectionResultUncheckedCreateWithoutFishInput[]
    connectOrCreate?: DetectionResultCreateOrConnectWithoutFishInput | DetectionResultCreateOrConnectWithoutFishInput[]
    upsert?: DetectionResultUpsertWithWhereUniqueWithoutFishInput | DetectionResultUpsertWithWhereUniqueWithoutFishInput[]
    createMany?: DetectionResultCreateManyFishInputEnvelope
    set?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
    disconnect?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
    delete?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
    connect?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
    update?: DetectionResultUpdateWithWhereUniqueWithoutFishInput | DetectionResultUpdateWithWhereUniqueWithoutFishInput[]
    updateMany?: DetectionResultUpdateManyWithWhereWithoutFishInput | DetectionResultUpdateManyWithWhereWithoutFishInput[]
    deleteMany?: DetectionResultScalarWhereInput | DetectionResultScalarWhereInput[]
  }

  export type UserMissionProgressUncheckedUpdateManyWithoutFishNestedInput = {
    create?: XOR<UserMissionProgressCreateWithoutFishInput, UserMissionProgressUncheckedCreateWithoutFishInput> | UserMissionProgressCreateWithoutFishInput[] | UserMissionProgressUncheckedCreateWithoutFishInput[]
    connectOrCreate?: UserMissionProgressCreateOrConnectWithoutFishInput | UserMissionProgressCreateOrConnectWithoutFishInput[]
    upsert?: UserMissionProgressUpsertWithWhereUniqueWithoutFishInput | UserMissionProgressUpsertWithWhereUniqueWithoutFishInput[]
    createMany?: UserMissionProgressCreateManyFishInputEnvelope
    set?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    disconnect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    delete?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    connect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    update?: UserMissionProgressUpdateWithWhereUniqueWithoutFishInput | UserMissionProgressUpdateWithWhereUniqueWithoutFishInput[]
    updateMany?: UserMissionProgressUpdateManyWithWhereWithoutFishInput | UserMissionProgressUpdateManyWithWhereWithoutFishInput[]
    deleteMany?: UserMissionProgressScalarWhereInput | UserMissionProgressScalarWhereInput[]
  }

  export type UserPointHistoryUncheckedUpdateManyWithoutFishNestedInput = {
    create?: XOR<UserPointHistoryCreateWithoutFishInput, UserPointHistoryUncheckedCreateWithoutFishInput> | UserPointHistoryCreateWithoutFishInput[] | UserPointHistoryUncheckedCreateWithoutFishInput[]
    connectOrCreate?: UserPointHistoryCreateOrConnectWithoutFishInput | UserPointHistoryCreateOrConnectWithoutFishInput[]
    upsert?: UserPointHistoryUpsertWithWhereUniqueWithoutFishInput | UserPointHistoryUpsertWithWhereUniqueWithoutFishInput[]
    createMany?: UserPointHistoryCreateManyFishInputEnvelope
    set?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    disconnect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    delete?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    connect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    update?: UserPointHistoryUpdateWithWhereUniqueWithoutFishInput | UserPointHistoryUpdateWithWhereUniqueWithoutFishInput[]
    updateMany?: UserPointHistoryUpdateManyWithWhereWithoutFishInput | UserPointHistoryUpdateManyWithWhereWithoutFishInput[]
    deleteMany?: UserPointHistoryScalarWhereInput | UserPointHistoryScalarWhereInput[]
  }

  export type MissionDetailTargetUncheckedUpdateManyWithoutFishNestedInput = {
    create?: XOR<MissionDetailTargetCreateWithoutFishInput, MissionDetailTargetUncheckedCreateWithoutFishInput> | MissionDetailTargetCreateWithoutFishInput[] | MissionDetailTargetUncheckedCreateWithoutFishInput[]
    connectOrCreate?: MissionDetailTargetCreateOrConnectWithoutFishInput | MissionDetailTargetCreateOrConnectWithoutFishInput[]
    upsert?: MissionDetailTargetUpsertWithWhereUniqueWithoutFishInput | MissionDetailTargetUpsertWithWhereUniqueWithoutFishInput[]
    createMany?: MissionDetailTargetCreateManyFishInputEnvelope
    set?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
    disconnect?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
    delete?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
    connect?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
    update?: MissionDetailTargetUpdateWithWhereUniqueWithoutFishInput | MissionDetailTargetUpdateWithWhereUniqueWithoutFishInput[]
    updateMany?: MissionDetailTargetUpdateManyWithWhereWithoutFishInput | MissionDetailTargetUpdateManyWithWhereWithoutFishInput[]
    deleteMany?: MissionDetailTargetScalarWhereInput | MissionDetailTargetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDetectionHistoryInput = {
    create?: XOR<UserCreateWithoutDetectionHistoryInput, UserUncheckedCreateWithoutDetectionHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutDetectionHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type UserPointHistoryCreateNestedOneWithoutDetectionHistoryInput = {
    create?: XOR<UserPointHistoryCreateWithoutDetectionHistoryInput, UserPointHistoryUncheckedCreateWithoutDetectionHistoryInput>
    connectOrCreate?: UserPointHistoryCreateOrConnectWithoutDetectionHistoryInput
    connect?: UserPointHistoryWhereUniqueInput
  }

  export type DetectionResultCreateNestedManyWithoutDetectionHistoryInput = {
    create?: XOR<DetectionResultCreateWithoutDetectionHistoryInput, DetectionResultUncheckedCreateWithoutDetectionHistoryInput> | DetectionResultCreateWithoutDetectionHistoryInput[] | DetectionResultUncheckedCreateWithoutDetectionHistoryInput[]
    connectOrCreate?: DetectionResultCreateOrConnectWithoutDetectionHistoryInput | DetectionResultCreateOrConnectWithoutDetectionHistoryInput[]
    createMany?: DetectionResultCreateManyDetectionHistoryInputEnvelope
    connect?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
  }

  export type UserPointHistoryUncheckedCreateNestedOneWithoutDetectionHistoryInput = {
    create?: XOR<UserPointHistoryCreateWithoutDetectionHistoryInput, UserPointHistoryUncheckedCreateWithoutDetectionHistoryInput>
    connectOrCreate?: UserPointHistoryCreateOrConnectWithoutDetectionHistoryInput
    connect?: UserPointHistoryWhereUniqueInput
  }

  export type DetectionResultUncheckedCreateNestedManyWithoutDetectionHistoryInput = {
    create?: XOR<DetectionResultCreateWithoutDetectionHistoryInput, DetectionResultUncheckedCreateWithoutDetectionHistoryInput> | DetectionResultCreateWithoutDetectionHistoryInput[] | DetectionResultUncheckedCreateWithoutDetectionHistoryInput[]
    connectOrCreate?: DetectionResultCreateOrConnectWithoutDetectionHistoryInput | DetectionResultCreateOrConnectWithoutDetectionHistoryInput[]
    createMany?: DetectionResultCreateManyDetectionHistoryInputEnvelope
    connect?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDetectionHistoryNestedInput = {
    create?: XOR<UserCreateWithoutDetectionHistoryInput, UserUncheckedCreateWithoutDetectionHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutDetectionHistoryInput
    upsert?: UserUpsertWithoutDetectionHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDetectionHistoryInput, UserUpdateWithoutDetectionHistoryInput>, UserUncheckedUpdateWithoutDetectionHistoryInput>
  }

  export type UserPointHistoryUpdateOneWithoutDetectionHistoryNestedInput = {
    create?: XOR<UserPointHistoryCreateWithoutDetectionHistoryInput, UserPointHistoryUncheckedCreateWithoutDetectionHistoryInput>
    connectOrCreate?: UserPointHistoryCreateOrConnectWithoutDetectionHistoryInput
    upsert?: UserPointHistoryUpsertWithoutDetectionHistoryInput
    disconnect?: UserPointHistoryWhereInput | boolean
    delete?: UserPointHistoryWhereInput | boolean
    connect?: UserPointHistoryWhereUniqueInput
    update?: XOR<XOR<UserPointHistoryUpdateToOneWithWhereWithoutDetectionHistoryInput, UserPointHistoryUpdateWithoutDetectionHistoryInput>, UserPointHistoryUncheckedUpdateWithoutDetectionHistoryInput>
  }

  export type DetectionResultUpdateManyWithoutDetectionHistoryNestedInput = {
    create?: XOR<DetectionResultCreateWithoutDetectionHistoryInput, DetectionResultUncheckedCreateWithoutDetectionHistoryInput> | DetectionResultCreateWithoutDetectionHistoryInput[] | DetectionResultUncheckedCreateWithoutDetectionHistoryInput[]
    connectOrCreate?: DetectionResultCreateOrConnectWithoutDetectionHistoryInput | DetectionResultCreateOrConnectWithoutDetectionHistoryInput[]
    upsert?: DetectionResultUpsertWithWhereUniqueWithoutDetectionHistoryInput | DetectionResultUpsertWithWhereUniqueWithoutDetectionHistoryInput[]
    createMany?: DetectionResultCreateManyDetectionHistoryInputEnvelope
    set?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
    disconnect?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
    delete?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
    connect?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
    update?: DetectionResultUpdateWithWhereUniqueWithoutDetectionHistoryInput | DetectionResultUpdateWithWhereUniqueWithoutDetectionHistoryInput[]
    updateMany?: DetectionResultUpdateManyWithWhereWithoutDetectionHistoryInput | DetectionResultUpdateManyWithWhereWithoutDetectionHistoryInput[]
    deleteMany?: DetectionResultScalarWhereInput | DetectionResultScalarWhereInput[]
  }

  export type UserPointHistoryUncheckedUpdateOneWithoutDetectionHistoryNestedInput = {
    create?: XOR<UserPointHistoryCreateWithoutDetectionHistoryInput, UserPointHistoryUncheckedCreateWithoutDetectionHistoryInput>
    connectOrCreate?: UserPointHistoryCreateOrConnectWithoutDetectionHistoryInput
    upsert?: UserPointHistoryUpsertWithoutDetectionHistoryInput
    disconnect?: UserPointHistoryWhereInput | boolean
    delete?: UserPointHistoryWhereInput | boolean
    connect?: UserPointHistoryWhereUniqueInput
    update?: XOR<XOR<UserPointHistoryUpdateToOneWithWhereWithoutDetectionHistoryInput, UserPointHistoryUpdateWithoutDetectionHistoryInput>, UserPointHistoryUncheckedUpdateWithoutDetectionHistoryInput>
  }

  export type DetectionResultUncheckedUpdateManyWithoutDetectionHistoryNestedInput = {
    create?: XOR<DetectionResultCreateWithoutDetectionHistoryInput, DetectionResultUncheckedCreateWithoutDetectionHistoryInput> | DetectionResultCreateWithoutDetectionHistoryInput[] | DetectionResultUncheckedCreateWithoutDetectionHistoryInput[]
    connectOrCreate?: DetectionResultCreateOrConnectWithoutDetectionHistoryInput | DetectionResultCreateOrConnectWithoutDetectionHistoryInput[]
    upsert?: DetectionResultUpsertWithWhereUniqueWithoutDetectionHistoryInput | DetectionResultUpsertWithWhereUniqueWithoutDetectionHistoryInput[]
    createMany?: DetectionResultCreateManyDetectionHistoryInputEnvelope
    set?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
    disconnect?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
    delete?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
    connect?: DetectionResultWhereUniqueInput | DetectionResultWhereUniqueInput[]
    update?: DetectionResultUpdateWithWhereUniqueWithoutDetectionHistoryInput | DetectionResultUpdateWithWhereUniqueWithoutDetectionHistoryInput[]
    updateMany?: DetectionResultUpdateManyWithWhereWithoutDetectionHistoryInput | DetectionResultUpdateManyWithWhereWithoutDetectionHistoryInput[]
    deleteMany?: DetectionResultScalarWhereInput | DetectionResultScalarWhereInput[]
  }

  export type DetectionHistoryCreateNestedOneWithoutDetectionResultsInput = {
    create?: XOR<DetectionHistoryCreateWithoutDetectionResultsInput, DetectionHistoryUncheckedCreateWithoutDetectionResultsInput>
    connectOrCreate?: DetectionHistoryCreateOrConnectWithoutDetectionResultsInput
    connect?: DetectionHistoryWhereUniqueInput
  }

  export type FishCreateNestedOneWithoutDetectionResultsInput = {
    create?: XOR<FishCreateWithoutDetectionResultsInput, FishUncheckedCreateWithoutDetectionResultsInput>
    connectOrCreate?: FishCreateOrConnectWithoutDetectionResultsInput
    connect?: FishWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DetectionHistoryUpdateOneRequiredWithoutDetectionResultsNestedInput = {
    create?: XOR<DetectionHistoryCreateWithoutDetectionResultsInput, DetectionHistoryUncheckedCreateWithoutDetectionResultsInput>
    connectOrCreate?: DetectionHistoryCreateOrConnectWithoutDetectionResultsInput
    upsert?: DetectionHistoryUpsertWithoutDetectionResultsInput
    connect?: DetectionHistoryWhereUniqueInput
    update?: XOR<XOR<DetectionHistoryUpdateToOneWithWhereWithoutDetectionResultsInput, DetectionHistoryUpdateWithoutDetectionResultsInput>, DetectionHistoryUncheckedUpdateWithoutDetectionResultsInput>
  }

  export type FishUpdateOneWithoutDetectionResultsNestedInput = {
    create?: XOR<FishCreateWithoutDetectionResultsInput, FishUncheckedCreateWithoutDetectionResultsInput>
    connectOrCreate?: FishCreateOrConnectWithoutDetectionResultsInput
    upsert?: FishUpsertWithoutDetectionResultsInput
    disconnect?: boolean
    delete?: FishWhereInput | boolean
    connect?: FishWhereUniqueInput
    update?: XOR<XOR<FishUpdateToOneWithWhereWithoutDetectionResultsInput, FishUpdateWithoutDetectionResultsInput>, FishUncheckedUpdateWithoutDetectionResultsInput>
  }

  export type UserCreateNestedOneWithoutUserPointHistoryInput = {
    create?: XOR<UserCreateWithoutUserPointHistoryInput, UserUncheckedCreateWithoutUserPointHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPointHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type DetectionHistoryCreateNestedOneWithoutUserPointHistoryInput = {
    create?: XOR<DetectionHistoryCreateWithoutUserPointHistoryInput, DetectionHistoryUncheckedCreateWithoutUserPointHistoryInput>
    connectOrCreate?: DetectionHistoryCreateOrConnectWithoutUserPointHistoryInput
    connect?: DetectionHistoryWhereUniqueInput
  }

  export type MissionCreateNestedOneWithoutPointHistoriesInput = {
    create?: XOR<MissionCreateWithoutPointHistoriesInput, MissionUncheckedCreateWithoutPointHistoriesInput>
    connectOrCreate?: MissionCreateOrConnectWithoutPointHistoriesInput
    connect?: MissionWhereUniqueInput
  }

  export type FishCreateNestedOneWithoutUserPointHistoriesInput = {
    create?: XOR<FishCreateWithoutUserPointHistoriesInput, FishUncheckedCreateWithoutUserPointHistoriesInput>
    connectOrCreate?: FishCreateOrConnectWithoutUserPointHistoriesInput
    connect?: FishWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutUserPointHistoryNestedInput = {
    create?: XOR<UserCreateWithoutUserPointHistoryInput, UserUncheckedCreateWithoutUserPointHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPointHistoryInput
    upsert?: UserUpsertWithoutUserPointHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPointHistoryInput, UserUpdateWithoutUserPointHistoryInput>, UserUncheckedUpdateWithoutUserPointHistoryInput>
  }

  export type DetectionHistoryUpdateOneWithoutUserPointHistoryNestedInput = {
    create?: XOR<DetectionHistoryCreateWithoutUserPointHistoryInput, DetectionHistoryUncheckedCreateWithoutUserPointHistoryInput>
    connectOrCreate?: DetectionHistoryCreateOrConnectWithoutUserPointHistoryInput
    upsert?: DetectionHistoryUpsertWithoutUserPointHistoryInput
    disconnect?: boolean
    delete?: DetectionHistoryWhereInput | boolean
    connect?: DetectionHistoryWhereUniqueInput
    update?: XOR<XOR<DetectionHistoryUpdateToOneWithWhereWithoutUserPointHistoryInput, DetectionHistoryUpdateWithoutUserPointHistoryInput>, DetectionHistoryUncheckedUpdateWithoutUserPointHistoryInput>
  }

  export type MissionUpdateOneWithoutPointHistoriesNestedInput = {
    create?: XOR<MissionCreateWithoutPointHistoriesInput, MissionUncheckedCreateWithoutPointHistoriesInput>
    connectOrCreate?: MissionCreateOrConnectWithoutPointHistoriesInput
    upsert?: MissionUpsertWithoutPointHistoriesInput
    disconnect?: boolean
    delete?: MissionWhereInput | boolean
    connect?: MissionWhereUniqueInput
    update?: XOR<XOR<MissionUpdateToOneWithWhereWithoutPointHistoriesInput, MissionUpdateWithoutPointHistoriesInput>, MissionUncheckedUpdateWithoutPointHistoriesInput>
  }

  export type FishUpdateOneWithoutUserPointHistoriesNestedInput = {
    create?: XOR<FishCreateWithoutUserPointHistoriesInput, FishUncheckedCreateWithoutUserPointHistoriesInput>
    connectOrCreate?: FishCreateOrConnectWithoutUserPointHistoriesInput
    upsert?: FishUpsertWithoutUserPointHistoriesInput
    disconnect?: boolean
    delete?: FishWhereInput | boolean
    connect?: FishWhereUniqueInput
    update?: XOR<XOR<FishUpdateToOneWithWhereWithoutUserPointHistoriesInput, FishUpdateWithoutUserPointHistoriesInput>, FishUncheckedUpdateWithoutUserPointHistoriesInput>
  }

  export type MissionDetailTargetCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionDetailTargetCreateWithoutMissionInput, MissionDetailTargetUncheckedCreateWithoutMissionInput> | MissionDetailTargetCreateWithoutMissionInput[] | MissionDetailTargetUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionDetailTargetCreateOrConnectWithoutMissionInput | MissionDetailTargetCreateOrConnectWithoutMissionInput[]
    createMany?: MissionDetailTargetCreateManyMissionInputEnvelope
    connect?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
  }

  export type UserMissionProgressCreateNestedManyWithoutMissionInput = {
    create?: XOR<UserMissionProgressCreateWithoutMissionInput, UserMissionProgressUncheckedCreateWithoutMissionInput> | UserMissionProgressCreateWithoutMissionInput[] | UserMissionProgressUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: UserMissionProgressCreateOrConnectWithoutMissionInput | UserMissionProgressCreateOrConnectWithoutMissionInput[]
    createMany?: UserMissionProgressCreateManyMissionInputEnvelope
    connect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
  }

  export type UserPointHistoryCreateNestedManyWithoutMissionInput = {
    create?: XOR<UserPointHistoryCreateWithoutMissionInput, UserPointHistoryUncheckedCreateWithoutMissionInput> | UserPointHistoryCreateWithoutMissionInput[] | UserPointHistoryUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: UserPointHistoryCreateOrConnectWithoutMissionInput | UserPointHistoryCreateOrConnectWithoutMissionInput[]
    createMany?: UserPointHistoryCreateManyMissionInputEnvelope
    connect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
  }

  export type MissionDetailTargetUncheckedCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionDetailTargetCreateWithoutMissionInput, MissionDetailTargetUncheckedCreateWithoutMissionInput> | MissionDetailTargetCreateWithoutMissionInput[] | MissionDetailTargetUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionDetailTargetCreateOrConnectWithoutMissionInput | MissionDetailTargetCreateOrConnectWithoutMissionInput[]
    createMany?: MissionDetailTargetCreateManyMissionInputEnvelope
    connect?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
  }

  export type UserMissionProgressUncheckedCreateNestedManyWithoutMissionInput = {
    create?: XOR<UserMissionProgressCreateWithoutMissionInput, UserMissionProgressUncheckedCreateWithoutMissionInput> | UserMissionProgressCreateWithoutMissionInput[] | UserMissionProgressUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: UserMissionProgressCreateOrConnectWithoutMissionInput | UserMissionProgressCreateOrConnectWithoutMissionInput[]
    createMany?: UserMissionProgressCreateManyMissionInputEnvelope
    connect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
  }

  export type UserPointHistoryUncheckedCreateNestedManyWithoutMissionInput = {
    create?: XOR<UserPointHistoryCreateWithoutMissionInput, UserPointHistoryUncheckedCreateWithoutMissionInput> | UserPointHistoryCreateWithoutMissionInput[] | UserPointHistoryUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: UserPointHistoryCreateOrConnectWithoutMissionInput | UserPointHistoryCreateOrConnectWithoutMissionInput[]
    createMany?: UserPointHistoryCreateManyMissionInputEnvelope
    connect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
  }

  export type MissionDetailTargetUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionDetailTargetCreateWithoutMissionInput, MissionDetailTargetUncheckedCreateWithoutMissionInput> | MissionDetailTargetCreateWithoutMissionInput[] | MissionDetailTargetUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionDetailTargetCreateOrConnectWithoutMissionInput | MissionDetailTargetCreateOrConnectWithoutMissionInput[]
    upsert?: MissionDetailTargetUpsertWithWhereUniqueWithoutMissionInput | MissionDetailTargetUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionDetailTargetCreateManyMissionInputEnvelope
    set?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
    disconnect?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
    delete?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
    connect?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
    update?: MissionDetailTargetUpdateWithWhereUniqueWithoutMissionInput | MissionDetailTargetUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionDetailTargetUpdateManyWithWhereWithoutMissionInput | MissionDetailTargetUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionDetailTargetScalarWhereInput | MissionDetailTargetScalarWhereInput[]
  }

  export type UserMissionProgressUpdateManyWithoutMissionNestedInput = {
    create?: XOR<UserMissionProgressCreateWithoutMissionInput, UserMissionProgressUncheckedCreateWithoutMissionInput> | UserMissionProgressCreateWithoutMissionInput[] | UserMissionProgressUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: UserMissionProgressCreateOrConnectWithoutMissionInput | UserMissionProgressCreateOrConnectWithoutMissionInput[]
    upsert?: UserMissionProgressUpsertWithWhereUniqueWithoutMissionInput | UserMissionProgressUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: UserMissionProgressCreateManyMissionInputEnvelope
    set?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    disconnect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    delete?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    connect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    update?: UserMissionProgressUpdateWithWhereUniqueWithoutMissionInput | UserMissionProgressUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: UserMissionProgressUpdateManyWithWhereWithoutMissionInput | UserMissionProgressUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: UserMissionProgressScalarWhereInput | UserMissionProgressScalarWhereInput[]
  }

  export type UserPointHistoryUpdateManyWithoutMissionNestedInput = {
    create?: XOR<UserPointHistoryCreateWithoutMissionInput, UserPointHistoryUncheckedCreateWithoutMissionInput> | UserPointHistoryCreateWithoutMissionInput[] | UserPointHistoryUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: UserPointHistoryCreateOrConnectWithoutMissionInput | UserPointHistoryCreateOrConnectWithoutMissionInput[]
    upsert?: UserPointHistoryUpsertWithWhereUniqueWithoutMissionInput | UserPointHistoryUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: UserPointHistoryCreateManyMissionInputEnvelope
    set?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    disconnect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    delete?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    connect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    update?: UserPointHistoryUpdateWithWhereUniqueWithoutMissionInput | UserPointHistoryUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: UserPointHistoryUpdateManyWithWhereWithoutMissionInput | UserPointHistoryUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: UserPointHistoryScalarWhereInput | UserPointHistoryScalarWhereInput[]
  }

  export type MissionDetailTargetUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionDetailTargetCreateWithoutMissionInput, MissionDetailTargetUncheckedCreateWithoutMissionInput> | MissionDetailTargetCreateWithoutMissionInput[] | MissionDetailTargetUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionDetailTargetCreateOrConnectWithoutMissionInput | MissionDetailTargetCreateOrConnectWithoutMissionInput[]
    upsert?: MissionDetailTargetUpsertWithWhereUniqueWithoutMissionInput | MissionDetailTargetUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionDetailTargetCreateManyMissionInputEnvelope
    set?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
    disconnect?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
    delete?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
    connect?: MissionDetailTargetWhereUniqueInput | MissionDetailTargetWhereUniqueInput[]
    update?: MissionDetailTargetUpdateWithWhereUniqueWithoutMissionInput | MissionDetailTargetUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionDetailTargetUpdateManyWithWhereWithoutMissionInput | MissionDetailTargetUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionDetailTargetScalarWhereInput | MissionDetailTargetScalarWhereInput[]
  }

  export type UserMissionProgressUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: XOR<UserMissionProgressCreateWithoutMissionInput, UserMissionProgressUncheckedCreateWithoutMissionInput> | UserMissionProgressCreateWithoutMissionInput[] | UserMissionProgressUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: UserMissionProgressCreateOrConnectWithoutMissionInput | UserMissionProgressCreateOrConnectWithoutMissionInput[]
    upsert?: UserMissionProgressUpsertWithWhereUniqueWithoutMissionInput | UserMissionProgressUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: UserMissionProgressCreateManyMissionInputEnvelope
    set?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    disconnect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    delete?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    connect?: UserMissionProgressWhereUniqueInput | UserMissionProgressWhereUniqueInput[]
    update?: UserMissionProgressUpdateWithWhereUniqueWithoutMissionInput | UserMissionProgressUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: UserMissionProgressUpdateManyWithWhereWithoutMissionInput | UserMissionProgressUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: UserMissionProgressScalarWhereInput | UserMissionProgressScalarWhereInput[]
  }

  export type UserPointHistoryUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: XOR<UserPointHistoryCreateWithoutMissionInput, UserPointHistoryUncheckedCreateWithoutMissionInput> | UserPointHistoryCreateWithoutMissionInput[] | UserPointHistoryUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: UserPointHistoryCreateOrConnectWithoutMissionInput | UserPointHistoryCreateOrConnectWithoutMissionInput[]
    upsert?: UserPointHistoryUpsertWithWhereUniqueWithoutMissionInput | UserPointHistoryUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: UserPointHistoryCreateManyMissionInputEnvelope
    set?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    disconnect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    delete?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    connect?: UserPointHistoryWhereUniqueInput | UserPointHistoryWhereUniqueInput[]
    update?: UserPointHistoryUpdateWithWhereUniqueWithoutMissionInput | UserPointHistoryUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: UserPointHistoryUpdateManyWithWhereWithoutMissionInput | UserPointHistoryUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: UserPointHistoryScalarWhereInput | UserPointHistoryScalarWhereInput[]
  }

  export type MissionCreateNestedOneWithoutDetailTargetsInput = {
    create?: XOR<MissionCreateWithoutDetailTargetsInput, MissionUncheckedCreateWithoutDetailTargetsInput>
    connectOrCreate?: MissionCreateOrConnectWithoutDetailTargetsInput
    connect?: MissionWhereUniqueInput
  }

  export type FishCreateNestedOneWithoutMissionDetailTargetsInput = {
    create?: XOR<FishCreateWithoutMissionDetailTargetsInput, FishUncheckedCreateWithoutMissionDetailTargetsInput>
    connectOrCreate?: FishCreateOrConnectWithoutMissionDetailTargetsInput
    connect?: FishWhereUniqueInput
  }

  export type MissionUpdateOneRequiredWithoutDetailTargetsNestedInput = {
    create?: XOR<MissionCreateWithoutDetailTargetsInput, MissionUncheckedCreateWithoutDetailTargetsInput>
    connectOrCreate?: MissionCreateOrConnectWithoutDetailTargetsInput
    upsert?: MissionUpsertWithoutDetailTargetsInput
    connect?: MissionWhereUniqueInput
    update?: XOR<XOR<MissionUpdateToOneWithWhereWithoutDetailTargetsInput, MissionUpdateWithoutDetailTargetsInput>, MissionUncheckedUpdateWithoutDetailTargetsInput>
  }

  export type FishUpdateOneRequiredWithoutMissionDetailTargetsNestedInput = {
    create?: XOR<FishCreateWithoutMissionDetailTargetsInput, FishUncheckedCreateWithoutMissionDetailTargetsInput>
    connectOrCreate?: FishCreateOrConnectWithoutMissionDetailTargetsInput
    upsert?: FishUpsertWithoutMissionDetailTargetsInput
    connect?: FishWhereUniqueInput
    update?: XOR<XOR<FishUpdateToOneWithWhereWithoutMissionDetailTargetsInput, FishUpdateWithoutMissionDetailTargetsInput>, FishUncheckedUpdateWithoutMissionDetailTargetsInput>
  }

  export type UserCreateNestedOneWithoutUserMissionProgressInput = {
    create?: XOR<UserCreateWithoutUserMissionProgressInput, UserUncheckedCreateWithoutUserMissionProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserMissionProgressInput
    connect?: UserWhereUniqueInput
  }

  export type MissionCreateNestedOneWithoutUserProgressesInput = {
    create?: XOR<MissionCreateWithoutUserProgressesInput, MissionUncheckedCreateWithoutUserProgressesInput>
    connectOrCreate?: MissionCreateOrConnectWithoutUserProgressesInput
    connect?: MissionWhereUniqueInput
  }

  export type FishCreateNestedOneWithoutUserMissionProgressInput = {
    create?: XOR<FishCreateWithoutUserMissionProgressInput, FishUncheckedCreateWithoutUserMissionProgressInput>
    connectOrCreate?: FishCreateOrConnectWithoutUserMissionProgressInput
    connect?: FishWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserMissionProgressNestedInput = {
    create?: XOR<UserCreateWithoutUserMissionProgressInput, UserUncheckedCreateWithoutUserMissionProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserMissionProgressInput
    upsert?: UserUpsertWithoutUserMissionProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserMissionProgressInput, UserUpdateWithoutUserMissionProgressInput>, UserUncheckedUpdateWithoutUserMissionProgressInput>
  }

  export type MissionUpdateOneRequiredWithoutUserProgressesNestedInput = {
    create?: XOR<MissionCreateWithoutUserProgressesInput, MissionUncheckedCreateWithoutUserProgressesInput>
    connectOrCreate?: MissionCreateOrConnectWithoutUserProgressesInput
    upsert?: MissionUpsertWithoutUserProgressesInput
    connect?: MissionWhereUniqueInput
    update?: XOR<XOR<MissionUpdateToOneWithWhereWithoutUserProgressesInput, MissionUpdateWithoutUserProgressesInput>, MissionUncheckedUpdateWithoutUserProgressesInput>
  }

  export type FishUpdateOneRequiredWithoutUserMissionProgressNestedInput = {
    create?: XOR<FishCreateWithoutUserMissionProgressInput, FishUncheckedCreateWithoutUserMissionProgressInput>
    connectOrCreate?: FishCreateOrConnectWithoutUserMissionProgressInput
    upsert?: FishUpsertWithoutUserMissionProgressInput
    connect?: FishWhereUniqueInput
    update?: XOR<XOR<FishUpdateToOneWithWhereWithoutUserMissionProgressInput, FishUpdateWithoutUserMissionProgressInput>, FishUncheckedUpdateWithoutUserMissionProgressInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type DetectionHistoryCreateWithoutUserInput = {
    id?: string
    imageUrl: string
    claimToken?: string | null
    isClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userPointHistory?: UserPointHistoryCreateNestedOneWithoutDetectionHistoryInput
    detectionResults?: DetectionResultCreateNestedManyWithoutDetectionHistoryInput
  }

  export type DetectionHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    imageUrl: string
    claimToken?: string | null
    isClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userPointHistory?: UserPointHistoryUncheckedCreateNestedOneWithoutDetectionHistoryInput
    detectionResults?: DetectionResultUncheckedCreateNestedManyWithoutDetectionHistoryInput
  }

  export type DetectionHistoryCreateOrConnectWithoutUserInput = {
    where: DetectionHistoryWhereUniqueInput
    create: XOR<DetectionHistoryCreateWithoutUserInput, DetectionHistoryUncheckedCreateWithoutUserInput>
  }

  export type DetectionHistoryCreateManyUserInputEnvelope = {
    data: DetectionHistoryCreateManyUserInput | DetectionHistoryCreateManyUserInput[]
  }

  export type UserPointHistoryCreateWithoutUserInput = {
    id?: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detectionHistory?: DetectionHistoryCreateNestedOneWithoutUserPointHistoryInput
    mission?: MissionCreateNestedOneWithoutPointHistoriesInput
    fish?: FishCreateNestedOneWithoutUserPointHistoriesInput
  }

  export type UserPointHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detectionHistoryId?: string | null
    missionId?: string | null
    fishId?: string | null
  }

  export type UserPointHistoryCreateOrConnectWithoutUserInput = {
    where: UserPointHistoryWhereUniqueInput
    create: XOR<UserPointHistoryCreateWithoutUserInput, UserPointHistoryUncheckedCreateWithoutUserInput>
  }

  export type UserPointHistoryCreateManyUserInputEnvelope = {
    data: UserPointHistoryCreateManyUserInput | UserPointHistoryCreateManyUserInput[]
  }

  export type UserMissionProgressCreateWithoutUserInput = {
    id?: string
    isSuccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mission: MissionCreateNestedOneWithoutUserProgressesInput
    fish: FishCreateNestedOneWithoutUserMissionProgressInput
  }

  export type UserMissionProgressUncheckedCreateWithoutUserInput = {
    id?: string
    isSuccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    missionId: string
    fishId: string
  }

  export type UserMissionProgressCreateOrConnectWithoutUserInput = {
    where: UserMissionProgressWhereUniqueInput
    create: XOR<UserMissionProgressCreateWithoutUserInput, UserMissionProgressUncheckedCreateWithoutUserInput>
  }

  export type UserMissionProgressCreateManyUserInputEnvelope = {
    data: UserMissionProgressCreateManyUserInput | UserMissionProgressCreateManyUserInput[]
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type DetectionHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: DetectionHistoryWhereUniqueInput
    update: XOR<DetectionHistoryUpdateWithoutUserInput, DetectionHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<DetectionHistoryCreateWithoutUserInput, DetectionHistoryUncheckedCreateWithoutUserInput>
  }

  export type DetectionHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: DetectionHistoryWhereUniqueInput
    data: XOR<DetectionHistoryUpdateWithoutUserInput, DetectionHistoryUncheckedUpdateWithoutUserInput>
  }

  export type DetectionHistoryUpdateManyWithWhereWithoutUserInput = {
    where: DetectionHistoryScalarWhereInput
    data: XOR<DetectionHistoryUpdateManyMutationInput, DetectionHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type DetectionHistoryScalarWhereInput = {
    AND?: DetectionHistoryScalarWhereInput | DetectionHistoryScalarWhereInput[]
    OR?: DetectionHistoryScalarWhereInput[]
    NOT?: DetectionHistoryScalarWhereInput | DetectionHistoryScalarWhereInput[]
    id?: StringFilter<"DetectionHistory"> | string
    imageUrl?: StringFilter<"DetectionHistory"> | string
    claimToken?: StringNullableFilter<"DetectionHistory"> | string | null
    isClaimed?: BoolFilter<"DetectionHistory"> | boolean
    createdAt?: DateTimeFilter<"DetectionHistory"> | Date | string
    updatedAt?: DateTimeFilter<"DetectionHistory"> | Date | string
    userId?: StringFilter<"DetectionHistory"> | string
  }

  export type UserPointHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPointHistoryWhereUniqueInput
    update: XOR<UserPointHistoryUpdateWithoutUserInput, UserPointHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<UserPointHistoryCreateWithoutUserInput, UserPointHistoryUncheckedCreateWithoutUserInput>
  }

  export type UserPointHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPointHistoryWhereUniqueInput
    data: XOR<UserPointHistoryUpdateWithoutUserInput, UserPointHistoryUncheckedUpdateWithoutUserInput>
  }

  export type UserPointHistoryUpdateManyWithWhereWithoutUserInput = {
    where: UserPointHistoryScalarWhereInput
    data: XOR<UserPointHistoryUpdateManyMutationInput, UserPointHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPointHistoryScalarWhereInput = {
    AND?: UserPointHistoryScalarWhereInput | UserPointHistoryScalarWhereInput[]
    OR?: UserPointHistoryScalarWhereInput[]
    NOT?: UserPointHistoryScalarWhereInput | UserPointHistoryScalarWhereInput[]
    id?: StringFilter<"UserPointHistory"> | string
    point?: IntFilter<"UserPointHistory"> | number
    createdAt?: DateTimeFilter<"UserPointHistory"> | Date | string
    updatedAt?: DateTimeFilter<"UserPointHistory"> | Date | string
    userId?: StringFilter<"UserPointHistory"> | string
    detectionHistoryId?: StringNullableFilter<"UserPointHistory"> | string | null
    missionId?: StringNullableFilter<"UserPointHistory"> | string | null
    fishId?: StringNullableFilter<"UserPointHistory"> | string | null
  }

  export type UserMissionProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserMissionProgressWhereUniqueInput
    update: XOR<UserMissionProgressUpdateWithoutUserInput, UserMissionProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserMissionProgressCreateWithoutUserInput, UserMissionProgressUncheckedCreateWithoutUserInput>
  }

  export type UserMissionProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserMissionProgressWhereUniqueInput
    data: XOR<UserMissionProgressUpdateWithoutUserInput, UserMissionProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserMissionProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserMissionProgressScalarWhereInput
    data: XOR<UserMissionProgressUpdateManyMutationInput, UserMissionProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserMissionProgressScalarWhereInput = {
    AND?: UserMissionProgressScalarWhereInput | UserMissionProgressScalarWhereInput[]
    OR?: UserMissionProgressScalarWhereInput[]
    NOT?: UserMissionProgressScalarWhereInput | UserMissionProgressScalarWhereInput[]
    id?: StringFilter<"UserMissionProgress"> | string
    isSuccess?: BoolFilter<"UserMissionProgress"> | boolean
    createdAt?: DateTimeFilter<"UserMissionProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserMissionProgress"> | Date | string
    userId?: StringFilter<"UserMissionProgress"> | string
    missionId?: StringFilter<"UserMissionProgress"> | string
    fishId?: StringFilter<"UserMissionProgress"> | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    detectionHistory?: DetectionHistoryCreateNestedManyWithoutUserInput
    userPointHistory?: UserPointHistoryCreateNestedManyWithoutUserInput
    userMissionProgress?: UserMissionProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    detectionHistory?: DetectionHistoryUncheckedCreateNestedManyWithoutUserInput
    userPointHistory?: UserPointHistoryUncheckedCreateNestedManyWithoutUserInput
    userMissionProgress?: UserMissionProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    detectionHistory?: DetectionHistoryUpdateManyWithoutUserNestedInput
    userPointHistory?: UserPointHistoryUpdateManyWithoutUserNestedInput
    userMissionProgress?: UserMissionProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    detectionHistory?: DetectionHistoryUncheckedUpdateManyWithoutUserNestedInput
    userPointHistory?: UserPointHistoryUncheckedUpdateManyWithoutUserNestedInput
    userMissionProgress?: UserMissionProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    detectionHistory?: DetectionHistoryCreateNestedManyWithoutUserInput
    userPointHistory?: UserPointHistoryCreateNestedManyWithoutUserInput
    userMissionProgress?: UserMissionProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    detectionHistory?: DetectionHistoryUncheckedCreateNestedManyWithoutUserInput
    userPointHistory?: UserPointHistoryUncheckedCreateNestedManyWithoutUserInput
    userMissionProgress?: UserMissionProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    detectionHistory?: DetectionHistoryUpdateManyWithoutUserNestedInput
    userPointHistory?: UserPointHistoryUpdateManyWithoutUserNestedInput
    userMissionProgress?: UserMissionProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    detectionHistory?: DetectionHistoryUncheckedUpdateManyWithoutUserNestedInput
    userPointHistory?: UserPointHistoryUncheckedUpdateManyWithoutUserNestedInput
    userMissionProgress?: UserMissionProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FishCreateWithoutFamilyInput = {
    id?: string
    name: string
    scientificName?: string | null
    description?: string | null
    imageUrl?: string | null
    habitat?: string | null
    length?: string | null
    age?: string | null
    depthLevel?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rarity?: FishRarityCreateNestedOneWithoutFishesInput
    detectionResults?: DetectionResultCreateNestedManyWithoutFishInput
    userMissionProgress?: UserMissionProgressCreateNestedManyWithoutFishInput
    userPointHistories?: UserPointHistoryCreateNestedManyWithoutFishInput
    missionDetailTargets?: MissionDetailTargetCreateNestedManyWithoutFishInput
  }

  export type FishUncheckedCreateWithoutFamilyInput = {
    id?: string
    name: string
    scientificName?: string | null
    description?: string | null
    imageUrl?: string | null
    habitat?: string | null
    length?: string | null
    age?: string | null
    depthLevel?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rarityId?: string | null
    detectionResults?: DetectionResultUncheckedCreateNestedManyWithoutFishInput
    userMissionProgress?: UserMissionProgressUncheckedCreateNestedManyWithoutFishInput
    userPointHistories?: UserPointHistoryUncheckedCreateNestedManyWithoutFishInput
    missionDetailTargets?: MissionDetailTargetUncheckedCreateNestedManyWithoutFishInput
  }

  export type FishCreateOrConnectWithoutFamilyInput = {
    where: FishWhereUniqueInput
    create: XOR<FishCreateWithoutFamilyInput, FishUncheckedCreateWithoutFamilyInput>
  }

  export type FishCreateManyFamilyInputEnvelope = {
    data: FishCreateManyFamilyInput | FishCreateManyFamilyInput[]
  }

  export type FishUpsertWithWhereUniqueWithoutFamilyInput = {
    where: FishWhereUniqueInput
    update: XOR<FishUpdateWithoutFamilyInput, FishUncheckedUpdateWithoutFamilyInput>
    create: XOR<FishCreateWithoutFamilyInput, FishUncheckedCreateWithoutFamilyInput>
  }

  export type FishUpdateWithWhereUniqueWithoutFamilyInput = {
    where: FishWhereUniqueInput
    data: XOR<FishUpdateWithoutFamilyInput, FishUncheckedUpdateWithoutFamilyInput>
  }

  export type FishUpdateManyWithWhereWithoutFamilyInput = {
    where: FishScalarWhereInput
    data: XOR<FishUpdateManyMutationInput, FishUncheckedUpdateManyWithoutFamilyInput>
  }

  export type FishScalarWhereInput = {
    AND?: FishScalarWhereInput | FishScalarWhereInput[]
    OR?: FishScalarWhereInput[]
    NOT?: FishScalarWhereInput | FishScalarWhereInput[]
    id?: StringFilter<"Fish"> | string
    name?: StringFilter<"Fish"> | string
    scientificName?: StringNullableFilter<"Fish"> | string | null
    description?: StringNullableFilter<"Fish"> | string | null
    imageUrl?: StringNullableFilter<"Fish"> | string | null
    habitat?: StringNullableFilter<"Fish"> | string | null
    length?: StringNullableFilter<"Fish"> | string | null
    age?: StringNullableFilter<"Fish"> | string | null
    depthLevel?: StringNullableFilter<"Fish"> | string | null
    weight?: StringNullableFilter<"Fish"> | string | null
    createdAt?: DateTimeFilter<"Fish"> | Date | string
    updatedAt?: DateTimeFilter<"Fish"> | Date | string
    familyId?: StringNullableFilter<"Fish"> | string | null
    rarityId?: StringNullableFilter<"Fish"> | string | null
  }

  export type FishCreateWithoutRarityInput = {
    id?: string
    name: string
    scientificName?: string | null
    description?: string | null
    imageUrl?: string | null
    habitat?: string | null
    length?: string | null
    age?: string | null
    depthLevel?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    family?: FishFamilyCreateNestedOneWithoutFishesInput
    detectionResults?: DetectionResultCreateNestedManyWithoutFishInput
    userMissionProgress?: UserMissionProgressCreateNestedManyWithoutFishInput
    userPointHistories?: UserPointHistoryCreateNestedManyWithoutFishInput
    missionDetailTargets?: MissionDetailTargetCreateNestedManyWithoutFishInput
  }

  export type FishUncheckedCreateWithoutRarityInput = {
    id?: string
    name: string
    scientificName?: string | null
    description?: string | null
    imageUrl?: string | null
    habitat?: string | null
    length?: string | null
    age?: string | null
    depthLevel?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    familyId?: string | null
    detectionResults?: DetectionResultUncheckedCreateNestedManyWithoutFishInput
    userMissionProgress?: UserMissionProgressUncheckedCreateNestedManyWithoutFishInput
    userPointHistories?: UserPointHistoryUncheckedCreateNestedManyWithoutFishInput
    missionDetailTargets?: MissionDetailTargetUncheckedCreateNestedManyWithoutFishInput
  }

  export type FishCreateOrConnectWithoutRarityInput = {
    where: FishWhereUniqueInput
    create: XOR<FishCreateWithoutRarityInput, FishUncheckedCreateWithoutRarityInput>
  }

  export type FishCreateManyRarityInputEnvelope = {
    data: FishCreateManyRarityInput | FishCreateManyRarityInput[]
  }

  export type FishUpsertWithWhereUniqueWithoutRarityInput = {
    where: FishWhereUniqueInput
    update: XOR<FishUpdateWithoutRarityInput, FishUncheckedUpdateWithoutRarityInput>
    create: XOR<FishCreateWithoutRarityInput, FishUncheckedCreateWithoutRarityInput>
  }

  export type FishUpdateWithWhereUniqueWithoutRarityInput = {
    where: FishWhereUniqueInput
    data: XOR<FishUpdateWithoutRarityInput, FishUncheckedUpdateWithoutRarityInput>
  }

  export type FishUpdateManyWithWhereWithoutRarityInput = {
    where: FishScalarWhereInput
    data: XOR<FishUpdateManyMutationInput, FishUncheckedUpdateManyWithoutRarityInput>
  }

  export type FishFamilyCreateWithoutFishesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FishFamilyUncheckedCreateWithoutFishesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FishFamilyCreateOrConnectWithoutFishesInput = {
    where: FishFamilyWhereUniqueInput
    create: XOR<FishFamilyCreateWithoutFishesInput, FishFamilyUncheckedCreateWithoutFishesInput>
  }

  export type FishRarityCreateWithoutFishesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FishRarityUncheckedCreateWithoutFishesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FishRarityCreateOrConnectWithoutFishesInput = {
    where: FishRarityWhereUniqueInput
    create: XOR<FishRarityCreateWithoutFishesInput, FishRarityUncheckedCreateWithoutFishesInput>
  }

  export type DetectionResultCreateWithoutFishInput = {
    id?: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detectionHistory: DetectionHistoryCreateNestedOneWithoutDetectionResultsInput
  }

  export type DetectionResultUncheckedCreateWithoutFishInput = {
    id?: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detectionHistoryId: string
  }

  export type DetectionResultCreateOrConnectWithoutFishInput = {
    where: DetectionResultWhereUniqueInput
    create: XOR<DetectionResultCreateWithoutFishInput, DetectionResultUncheckedCreateWithoutFishInput>
  }

  export type DetectionResultCreateManyFishInputEnvelope = {
    data: DetectionResultCreateManyFishInput | DetectionResultCreateManyFishInput[]
  }

  export type UserMissionProgressCreateWithoutFishInput = {
    id?: string
    isSuccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserMissionProgressInput
    mission: MissionCreateNestedOneWithoutUserProgressesInput
  }

  export type UserMissionProgressUncheckedCreateWithoutFishInput = {
    id?: string
    isSuccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    missionId: string
  }

  export type UserMissionProgressCreateOrConnectWithoutFishInput = {
    where: UserMissionProgressWhereUniqueInput
    create: XOR<UserMissionProgressCreateWithoutFishInput, UserMissionProgressUncheckedCreateWithoutFishInput>
  }

  export type UserMissionProgressCreateManyFishInputEnvelope = {
    data: UserMissionProgressCreateManyFishInput | UserMissionProgressCreateManyFishInput[]
  }

  export type UserPointHistoryCreateWithoutFishInput = {
    id?: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserPointHistoryInput
    detectionHistory?: DetectionHistoryCreateNestedOneWithoutUserPointHistoryInput
    mission?: MissionCreateNestedOneWithoutPointHistoriesInput
  }

  export type UserPointHistoryUncheckedCreateWithoutFishInput = {
    id?: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    detectionHistoryId?: string | null
    missionId?: string | null
  }

  export type UserPointHistoryCreateOrConnectWithoutFishInput = {
    where: UserPointHistoryWhereUniqueInput
    create: XOR<UserPointHistoryCreateWithoutFishInput, UserPointHistoryUncheckedCreateWithoutFishInput>
  }

  export type UserPointHistoryCreateManyFishInputEnvelope = {
    data: UserPointHistoryCreateManyFishInput | UserPointHistoryCreateManyFishInput[]
  }

  export type MissionDetailTargetCreateWithoutFishInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    mission: MissionCreateNestedOneWithoutDetailTargetsInput
  }

  export type MissionDetailTargetUncheckedCreateWithoutFishInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    missionId: string
  }

  export type MissionDetailTargetCreateOrConnectWithoutFishInput = {
    where: MissionDetailTargetWhereUniqueInput
    create: XOR<MissionDetailTargetCreateWithoutFishInput, MissionDetailTargetUncheckedCreateWithoutFishInput>
  }

  export type MissionDetailTargetCreateManyFishInputEnvelope = {
    data: MissionDetailTargetCreateManyFishInput | MissionDetailTargetCreateManyFishInput[]
  }

  export type FishFamilyUpsertWithoutFishesInput = {
    update: XOR<FishFamilyUpdateWithoutFishesInput, FishFamilyUncheckedUpdateWithoutFishesInput>
    create: XOR<FishFamilyCreateWithoutFishesInput, FishFamilyUncheckedCreateWithoutFishesInput>
    where?: FishFamilyWhereInput
  }

  export type FishFamilyUpdateToOneWithWhereWithoutFishesInput = {
    where?: FishFamilyWhereInput
    data: XOR<FishFamilyUpdateWithoutFishesInput, FishFamilyUncheckedUpdateWithoutFishesInput>
  }

  export type FishFamilyUpdateWithoutFishesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FishFamilyUncheckedUpdateWithoutFishesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FishRarityUpsertWithoutFishesInput = {
    update: XOR<FishRarityUpdateWithoutFishesInput, FishRarityUncheckedUpdateWithoutFishesInput>
    create: XOR<FishRarityCreateWithoutFishesInput, FishRarityUncheckedCreateWithoutFishesInput>
    where?: FishRarityWhereInput
  }

  export type FishRarityUpdateToOneWithWhereWithoutFishesInput = {
    where?: FishRarityWhereInput
    data: XOR<FishRarityUpdateWithoutFishesInput, FishRarityUncheckedUpdateWithoutFishesInput>
  }

  export type FishRarityUpdateWithoutFishesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FishRarityUncheckedUpdateWithoutFishesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionResultUpsertWithWhereUniqueWithoutFishInput = {
    where: DetectionResultWhereUniqueInput
    update: XOR<DetectionResultUpdateWithoutFishInput, DetectionResultUncheckedUpdateWithoutFishInput>
    create: XOR<DetectionResultCreateWithoutFishInput, DetectionResultUncheckedCreateWithoutFishInput>
  }

  export type DetectionResultUpdateWithWhereUniqueWithoutFishInput = {
    where: DetectionResultWhereUniqueInput
    data: XOR<DetectionResultUpdateWithoutFishInput, DetectionResultUncheckedUpdateWithoutFishInput>
  }

  export type DetectionResultUpdateManyWithWhereWithoutFishInput = {
    where: DetectionResultScalarWhereInput
    data: XOR<DetectionResultUpdateManyMutationInput, DetectionResultUncheckedUpdateManyWithoutFishInput>
  }

  export type DetectionResultScalarWhereInput = {
    AND?: DetectionResultScalarWhereInput | DetectionResultScalarWhereInput[]
    OR?: DetectionResultScalarWhereInput[]
    NOT?: DetectionResultScalarWhereInput | DetectionResultScalarWhereInput[]
    id?: StringFilter<"DetectionResult"> | string
    confidence?: FloatFilter<"DetectionResult"> | number
    createdAt?: DateTimeFilter<"DetectionResult"> | Date | string
    updatedAt?: DateTimeFilter<"DetectionResult"> | Date | string
    detectionHistoryId?: StringFilter<"DetectionResult"> | string
    fishId?: StringNullableFilter<"DetectionResult"> | string | null
  }

  export type UserMissionProgressUpsertWithWhereUniqueWithoutFishInput = {
    where: UserMissionProgressWhereUniqueInput
    update: XOR<UserMissionProgressUpdateWithoutFishInput, UserMissionProgressUncheckedUpdateWithoutFishInput>
    create: XOR<UserMissionProgressCreateWithoutFishInput, UserMissionProgressUncheckedCreateWithoutFishInput>
  }

  export type UserMissionProgressUpdateWithWhereUniqueWithoutFishInput = {
    where: UserMissionProgressWhereUniqueInput
    data: XOR<UserMissionProgressUpdateWithoutFishInput, UserMissionProgressUncheckedUpdateWithoutFishInput>
  }

  export type UserMissionProgressUpdateManyWithWhereWithoutFishInput = {
    where: UserMissionProgressScalarWhereInput
    data: XOR<UserMissionProgressUpdateManyMutationInput, UserMissionProgressUncheckedUpdateManyWithoutFishInput>
  }

  export type UserPointHistoryUpsertWithWhereUniqueWithoutFishInput = {
    where: UserPointHistoryWhereUniqueInput
    update: XOR<UserPointHistoryUpdateWithoutFishInput, UserPointHistoryUncheckedUpdateWithoutFishInput>
    create: XOR<UserPointHistoryCreateWithoutFishInput, UserPointHistoryUncheckedCreateWithoutFishInput>
  }

  export type UserPointHistoryUpdateWithWhereUniqueWithoutFishInput = {
    where: UserPointHistoryWhereUniqueInput
    data: XOR<UserPointHistoryUpdateWithoutFishInput, UserPointHistoryUncheckedUpdateWithoutFishInput>
  }

  export type UserPointHistoryUpdateManyWithWhereWithoutFishInput = {
    where: UserPointHistoryScalarWhereInput
    data: XOR<UserPointHistoryUpdateManyMutationInput, UserPointHistoryUncheckedUpdateManyWithoutFishInput>
  }

  export type MissionDetailTargetUpsertWithWhereUniqueWithoutFishInput = {
    where: MissionDetailTargetWhereUniqueInput
    update: XOR<MissionDetailTargetUpdateWithoutFishInput, MissionDetailTargetUncheckedUpdateWithoutFishInput>
    create: XOR<MissionDetailTargetCreateWithoutFishInput, MissionDetailTargetUncheckedCreateWithoutFishInput>
  }

  export type MissionDetailTargetUpdateWithWhereUniqueWithoutFishInput = {
    where: MissionDetailTargetWhereUniqueInput
    data: XOR<MissionDetailTargetUpdateWithoutFishInput, MissionDetailTargetUncheckedUpdateWithoutFishInput>
  }

  export type MissionDetailTargetUpdateManyWithWhereWithoutFishInput = {
    where: MissionDetailTargetScalarWhereInput
    data: XOR<MissionDetailTargetUpdateManyMutationInput, MissionDetailTargetUncheckedUpdateManyWithoutFishInput>
  }

  export type MissionDetailTargetScalarWhereInput = {
    AND?: MissionDetailTargetScalarWhereInput | MissionDetailTargetScalarWhereInput[]
    OR?: MissionDetailTargetScalarWhereInput[]
    NOT?: MissionDetailTargetScalarWhereInput | MissionDetailTargetScalarWhereInput[]
    id?: StringFilter<"MissionDetailTarget"> | string
    amount?: IntFilter<"MissionDetailTarget"> | number
    createdAt?: DateTimeFilter<"MissionDetailTarget"> | Date | string
    updatedAt?: DateTimeFilter<"MissionDetailTarget"> | Date | string
    missionId?: StringFilter<"MissionDetailTarget"> | string
    fishId?: StringFilter<"MissionDetailTarget"> | string
  }

  export type UserCreateWithoutDetectionHistoryInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    userPointHistory?: UserPointHistoryCreateNestedManyWithoutUserInput
    userMissionProgress?: UserMissionProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDetectionHistoryInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userPointHistory?: UserPointHistoryUncheckedCreateNestedManyWithoutUserInput
    userMissionProgress?: UserMissionProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDetectionHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDetectionHistoryInput, UserUncheckedCreateWithoutDetectionHistoryInput>
  }

  export type UserPointHistoryCreateWithoutDetectionHistoryInput = {
    id?: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserPointHistoryInput
    mission?: MissionCreateNestedOneWithoutPointHistoriesInput
    fish?: FishCreateNestedOneWithoutUserPointHistoriesInput
  }

  export type UserPointHistoryUncheckedCreateWithoutDetectionHistoryInput = {
    id?: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    missionId?: string | null
    fishId?: string | null
  }

  export type UserPointHistoryCreateOrConnectWithoutDetectionHistoryInput = {
    where: UserPointHistoryWhereUniqueInput
    create: XOR<UserPointHistoryCreateWithoutDetectionHistoryInput, UserPointHistoryUncheckedCreateWithoutDetectionHistoryInput>
  }

  export type DetectionResultCreateWithoutDetectionHistoryInput = {
    id?: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fish?: FishCreateNestedOneWithoutDetectionResultsInput
  }

  export type DetectionResultUncheckedCreateWithoutDetectionHistoryInput = {
    id?: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fishId?: string | null
  }

  export type DetectionResultCreateOrConnectWithoutDetectionHistoryInput = {
    where: DetectionResultWhereUniqueInput
    create: XOR<DetectionResultCreateWithoutDetectionHistoryInput, DetectionResultUncheckedCreateWithoutDetectionHistoryInput>
  }

  export type DetectionResultCreateManyDetectionHistoryInputEnvelope = {
    data: DetectionResultCreateManyDetectionHistoryInput | DetectionResultCreateManyDetectionHistoryInput[]
  }

  export type UserUpsertWithoutDetectionHistoryInput = {
    update: XOR<UserUpdateWithoutDetectionHistoryInput, UserUncheckedUpdateWithoutDetectionHistoryInput>
    create: XOR<UserCreateWithoutDetectionHistoryInput, UserUncheckedCreateWithoutDetectionHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDetectionHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDetectionHistoryInput, UserUncheckedUpdateWithoutDetectionHistoryInput>
  }

  export type UserUpdateWithoutDetectionHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userPointHistory?: UserPointHistoryUpdateManyWithoutUserNestedInput
    userMissionProgress?: UserMissionProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDetectionHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userPointHistory?: UserPointHistoryUncheckedUpdateManyWithoutUserNestedInput
    userMissionProgress?: UserMissionProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserPointHistoryUpsertWithoutDetectionHistoryInput = {
    update: XOR<UserPointHistoryUpdateWithoutDetectionHistoryInput, UserPointHistoryUncheckedUpdateWithoutDetectionHistoryInput>
    create: XOR<UserPointHistoryCreateWithoutDetectionHistoryInput, UserPointHistoryUncheckedCreateWithoutDetectionHistoryInput>
    where?: UserPointHistoryWhereInput
  }

  export type UserPointHistoryUpdateToOneWithWhereWithoutDetectionHistoryInput = {
    where?: UserPointHistoryWhereInput
    data: XOR<UserPointHistoryUpdateWithoutDetectionHistoryInput, UserPointHistoryUncheckedUpdateWithoutDetectionHistoryInput>
  }

  export type UserPointHistoryUpdateWithoutDetectionHistoryInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPointHistoryNestedInput
    mission?: MissionUpdateOneWithoutPointHistoriesNestedInput
    fish?: FishUpdateOneWithoutUserPointHistoriesNestedInput
  }

  export type UserPointHistoryUncheckedUpdateWithoutDetectionHistoryInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    missionId?: NullableStringFieldUpdateOperationsInput | string | null
    fishId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DetectionResultUpsertWithWhereUniqueWithoutDetectionHistoryInput = {
    where: DetectionResultWhereUniqueInput
    update: XOR<DetectionResultUpdateWithoutDetectionHistoryInput, DetectionResultUncheckedUpdateWithoutDetectionHistoryInput>
    create: XOR<DetectionResultCreateWithoutDetectionHistoryInput, DetectionResultUncheckedCreateWithoutDetectionHistoryInput>
  }

  export type DetectionResultUpdateWithWhereUniqueWithoutDetectionHistoryInput = {
    where: DetectionResultWhereUniqueInput
    data: XOR<DetectionResultUpdateWithoutDetectionHistoryInput, DetectionResultUncheckedUpdateWithoutDetectionHistoryInput>
  }

  export type DetectionResultUpdateManyWithWhereWithoutDetectionHistoryInput = {
    where: DetectionResultScalarWhereInput
    data: XOR<DetectionResultUpdateManyMutationInput, DetectionResultUncheckedUpdateManyWithoutDetectionHistoryInput>
  }

  export type DetectionHistoryCreateWithoutDetectionResultsInput = {
    id?: string
    imageUrl: string
    claimToken?: string | null
    isClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDetectionHistoryInput
    userPointHistory?: UserPointHistoryCreateNestedOneWithoutDetectionHistoryInput
  }

  export type DetectionHistoryUncheckedCreateWithoutDetectionResultsInput = {
    id?: string
    imageUrl: string
    claimToken?: string | null
    isClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    userPointHistory?: UserPointHistoryUncheckedCreateNestedOneWithoutDetectionHistoryInput
  }

  export type DetectionHistoryCreateOrConnectWithoutDetectionResultsInput = {
    where: DetectionHistoryWhereUniqueInput
    create: XOR<DetectionHistoryCreateWithoutDetectionResultsInput, DetectionHistoryUncheckedCreateWithoutDetectionResultsInput>
  }

  export type FishCreateWithoutDetectionResultsInput = {
    id?: string
    name: string
    scientificName?: string | null
    description?: string | null
    imageUrl?: string | null
    habitat?: string | null
    length?: string | null
    age?: string | null
    depthLevel?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    family?: FishFamilyCreateNestedOneWithoutFishesInput
    rarity?: FishRarityCreateNestedOneWithoutFishesInput
    userMissionProgress?: UserMissionProgressCreateNestedManyWithoutFishInput
    userPointHistories?: UserPointHistoryCreateNestedManyWithoutFishInput
    missionDetailTargets?: MissionDetailTargetCreateNestedManyWithoutFishInput
  }

  export type FishUncheckedCreateWithoutDetectionResultsInput = {
    id?: string
    name: string
    scientificName?: string | null
    description?: string | null
    imageUrl?: string | null
    habitat?: string | null
    length?: string | null
    age?: string | null
    depthLevel?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    familyId?: string | null
    rarityId?: string | null
    userMissionProgress?: UserMissionProgressUncheckedCreateNestedManyWithoutFishInput
    userPointHistories?: UserPointHistoryUncheckedCreateNestedManyWithoutFishInput
    missionDetailTargets?: MissionDetailTargetUncheckedCreateNestedManyWithoutFishInput
  }

  export type FishCreateOrConnectWithoutDetectionResultsInput = {
    where: FishWhereUniqueInput
    create: XOR<FishCreateWithoutDetectionResultsInput, FishUncheckedCreateWithoutDetectionResultsInput>
  }

  export type DetectionHistoryUpsertWithoutDetectionResultsInput = {
    update: XOR<DetectionHistoryUpdateWithoutDetectionResultsInput, DetectionHistoryUncheckedUpdateWithoutDetectionResultsInput>
    create: XOR<DetectionHistoryCreateWithoutDetectionResultsInput, DetectionHistoryUncheckedCreateWithoutDetectionResultsInput>
    where?: DetectionHistoryWhereInput
  }

  export type DetectionHistoryUpdateToOneWithWhereWithoutDetectionResultsInput = {
    where?: DetectionHistoryWhereInput
    data: XOR<DetectionHistoryUpdateWithoutDetectionResultsInput, DetectionHistoryUncheckedUpdateWithoutDetectionResultsInput>
  }

  export type DetectionHistoryUpdateWithoutDetectionResultsInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    claimToken?: NullableStringFieldUpdateOperationsInput | string | null
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDetectionHistoryNestedInput
    userPointHistory?: UserPointHistoryUpdateOneWithoutDetectionHistoryNestedInput
  }

  export type DetectionHistoryUncheckedUpdateWithoutDetectionResultsInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    claimToken?: NullableStringFieldUpdateOperationsInput | string | null
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    userPointHistory?: UserPointHistoryUncheckedUpdateOneWithoutDetectionHistoryNestedInput
  }

  export type FishUpsertWithoutDetectionResultsInput = {
    update: XOR<FishUpdateWithoutDetectionResultsInput, FishUncheckedUpdateWithoutDetectionResultsInput>
    create: XOR<FishCreateWithoutDetectionResultsInput, FishUncheckedCreateWithoutDetectionResultsInput>
    where?: FishWhereInput
  }

  export type FishUpdateToOneWithWhereWithoutDetectionResultsInput = {
    where?: FishWhereInput
    data: XOR<FishUpdateWithoutDetectionResultsInput, FishUncheckedUpdateWithoutDetectionResultsInput>
  }

  export type FishUpdateWithoutDetectionResultsInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FishFamilyUpdateOneWithoutFishesNestedInput
    rarity?: FishRarityUpdateOneWithoutFishesNestedInput
    userMissionProgress?: UserMissionProgressUpdateManyWithoutFishNestedInput
    userPointHistories?: UserPointHistoryUpdateManyWithoutFishNestedInput
    missionDetailTargets?: MissionDetailTargetUpdateManyWithoutFishNestedInput
  }

  export type FishUncheckedUpdateWithoutDetectionResultsInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    rarityId?: NullableStringFieldUpdateOperationsInput | string | null
    userMissionProgress?: UserMissionProgressUncheckedUpdateManyWithoutFishNestedInput
    userPointHistories?: UserPointHistoryUncheckedUpdateManyWithoutFishNestedInput
    missionDetailTargets?: MissionDetailTargetUncheckedUpdateManyWithoutFishNestedInput
  }

  export type UserCreateWithoutUserPointHistoryInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    detectionHistory?: DetectionHistoryCreateNestedManyWithoutUserInput
    userMissionProgress?: UserMissionProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserPointHistoryInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    detectionHistory?: DetectionHistoryUncheckedCreateNestedManyWithoutUserInput
    userMissionProgress?: UserMissionProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserPointHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPointHistoryInput, UserUncheckedCreateWithoutUserPointHistoryInput>
  }

  export type DetectionHistoryCreateWithoutUserPointHistoryInput = {
    id?: string
    imageUrl: string
    claimToken?: string | null
    isClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDetectionHistoryInput
    detectionResults?: DetectionResultCreateNestedManyWithoutDetectionHistoryInput
  }

  export type DetectionHistoryUncheckedCreateWithoutUserPointHistoryInput = {
    id?: string
    imageUrl: string
    claimToken?: string | null
    isClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    detectionResults?: DetectionResultUncheckedCreateNestedManyWithoutDetectionHistoryInput
  }

  export type DetectionHistoryCreateOrConnectWithoutUserPointHistoryInput = {
    where: DetectionHistoryWhereUniqueInput
    create: XOR<DetectionHistoryCreateWithoutUserPointHistoryInput, DetectionHistoryUncheckedCreateWithoutUserPointHistoryInput>
  }

  export type MissionCreateWithoutPointHistoriesInput = {
    id?: string
    title: string
    point?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    detailTargets?: MissionDetailTargetCreateNestedManyWithoutMissionInput
    userProgresses?: UserMissionProgressCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutPointHistoriesInput = {
    id?: string
    title: string
    point?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    detailTargets?: MissionDetailTargetUncheckedCreateNestedManyWithoutMissionInput
    userProgresses?: UserMissionProgressUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutPointHistoriesInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutPointHistoriesInput, MissionUncheckedCreateWithoutPointHistoriesInput>
  }

  export type FishCreateWithoutUserPointHistoriesInput = {
    id?: string
    name: string
    scientificName?: string | null
    description?: string | null
    imageUrl?: string | null
    habitat?: string | null
    length?: string | null
    age?: string | null
    depthLevel?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    family?: FishFamilyCreateNestedOneWithoutFishesInput
    rarity?: FishRarityCreateNestedOneWithoutFishesInput
    detectionResults?: DetectionResultCreateNestedManyWithoutFishInput
    userMissionProgress?: UserMissionProgressCreateNestedManyWithoutFishInput
    missionDetailTargets?: MissionDetailTargetCreateNestedManyWithoutFishInput
  }

  export type FishUncheckedCreateWithoutUserPointHistoriesInput = {
    id?: string
    name: string
    scientificName?: string | null
    description?: string | null
    imageUrl?: string | null
    habitat?: string | null
    length?: string | null
    age?: string | null
    depthLevel?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    familyId?: string | null
    rarityId?: string | null
    detectionResults?: DetectionResultUncheckedCreateNestedManyWithoutFishInput
    userMissionProgress?: UserMissionProgressUncheckedCreateNestedManyWithoutFishInput
    missionDetailTargets?: MissionDetailTargetUncheckedCreateNestedManyWithoutFishInput
  }

  export type FishCreateOrConnectWithoutUserPointHistoriesInput = {
    where: FishWhereUniqueInput
    create: XOR<FishCreateWithoutUserPointHistoriesInput, FishUncheckedCreateWithoutUserPointHistoriesInput>
  }

  export type UserUpsertWithoutUserPointHistoryInput = {
    update: XOR<UserUpdateWithoutUserPointHistoryInput, UserUncheckedUpdateWithoutUserPointHistoryInput>
    create: XOR<UserCreateWithoutUserPointHistoryInput, UserUncheckedCreateWithoutUserPointHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPointHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPointHistoryInput, UserUncheckedUpdateWithoutUserPointHistoryInput>
  }

  export type UserUpdateWithoutUserPointHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    detectionHistory?: DetectionHistoryUpdateManyWithoutUserNestedInput
    userMissionProgress?: UserMissionProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPointHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    detectionHistory?: DetectionHistoryUncheckedUpdateManyWithoutUserNestedInput
    userMissionProgress?: UserMissionProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DetectionHistoryUpsertWithoutUserPointHistoryInput = {
    update: XOR<DetectionHistoryUpdateWithoutUserPointHistoryInput, DetectionHistoryUncheckedUpdateWithoutUserPointHistoryInput>
    create: XOR<DetectionHistoryCreateWithoutUserPointHistoryInput, DetectionHistoryUncheckedCreateWithoutUserPointHistoryInput>
    where?: DetectionHistoryWhereInput
  }

  export type DetectionHistoryUpdateToOneWithWhereWithoutUserPointHistoryInput = {
    where?: DetectionHistoryWhereInput
    data: XOR<DetectionHistoryUpdateWithoutUserPointHistoryInput, DetectionHistoryUncheckedUpdateWithoutUserPointHistoryInput>
  }

  export type DetectionHistoryUpdateWithoutUserPointHistoryInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    claimToken?: NullableStringFieldUpdateOperationsInput | string | null
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDetectionHistoryNestedInput
    detectionResults?: DetectionResultUpdateManyWithoutDetectionHistoryNestedInput
  }

  export type DetectionHistoryUncheckedUpdateWithoutUserPointHistoryInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    claimToken?: NullableStringFieldUpdateOperationsInput | string | null
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    detectionResults?: DetectionResultUncheckedUpdateManyWithoutDetectionHistoryNestedInput
  }

  export type MissionUpsertWithoutPointHistoriesInput = {
    update: XOR<MissionUpdateWithoutPointHistoriesInput, MissionUncheckedUpdateWithoutPointHistoriesInput>
    create: XOR<MissionCreateWithoutPointHistoriesInput, MissionUncheckedCreateWithoutPointHistoriesInput>
    where?: MissionWhereInput
  }

  export type MissionUpdateToOneWithWhereWithoutPointHistoriesInput = {
    where?: MissionWhereInput
    data: XOR<MissionUpdateWithoutPointHistoriesInput, MissionUncheckedUpdateWithoutPointHistoriesInput>
  }

  export type MissionUpdateWithoutPointHistoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detailTargets?: MissionDetailTargetUpdateManyWithoutMissionNestedInput
    userProgresses?: UserMissionProgressUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutPointHistoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detailTargets?: MissionDetailTargetUncheckedUpdateManyWithoutMissionNestedInput
    userProgresses?: UserMissionProgressUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type FishUpsertWithoutUserPointHistoriesInput = {
    update: XOR<FishUpdateWithoutUserPointHistoriesInput, FishUncheckedUpdateWithoutUserPointHistoriesInput>
    create: XOR<FishCreateWithoutUserPointHistoriesInput, FishUncheckedCreateWithoutUserPointHistoriesInput>
    where?: FishWhereInput
  }

  export type FishUpdateToOneWithWhereWithoutUserPointHistoriesInput = {
    where?: FishWhereInput
    data: XOR<FishUpdateWithoutUserPointHistoriesInput, FishUncheckedUpdateWithoutUserPointHistoriesInput>
  }

  export type FishUpdateWithoutUserPointHistoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FishFamilyUpdateOneWithoutFishesNestedInput
    rarity?: FishRarityUpdateOneWithoutFishesNestedInput
    detectionResults?: DetectionResultUpdateManyWithoutFishNestedInput
    userMissionProgress?: UserMissionProgressUpdateManyWithoutFishNestedInput
    missionDetailTargets?: MissionDetailTargetUpdateManyWithoutFishNestedInput
  }

  export type FishUncheckedUpdateWithoutUserPointHistoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    rarityId?: NullableStringFieldUpdateOperationsInput | string | null
    detectionResults?: DetectionResultUncheckedUpdateManyWithoutFishNestedInput
    userMissionProgress?: UserMissionProgressUncheckedUpdateManyWithoutFishNestedInput
    missionDetailTargets?: MissionDetailTargetUncheckedUpdateManyWithoutFishNestedInput
  }

  export type MissionDetailTargetCreateWithoutMissionInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fish: FishCreateNestedOneWithoutMissionDetailTargetsInput
  }

  export type MissionDetailTargetUncheckedCreateWithoutMissionInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fishId: string
  }

  export type MissionDetailTargetCreateOrConnectWithoutMissionInput = {
    where: MissionDetailTargetWhereUniqueInput
    create: XOR<MissionDetailTargetCreateWithoutMissionInput, MissionDetailTargetUncheckedCreateWithoutMissionInput>
  }

  export type MissionDetailTargetCreateManyMissionInputEnvelope = {
    data: MissionDetailTargetCreateManyMissionInput | MissionDetailTargetCreateManyMissionInput[]
  }

  export type UserMissionProgressCreateWithoutMissionInput = {
    id?: string
    isSuccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserMissionProgressInput
    fish: FishCreateNestedOneWithoutUserMissionProgressInput
  }

  export type UserMissionProgressUncheckedCreateWithoutMissionInput = {
    id?: string
    isSuccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    fishId: string
  }

  export type UserMissionProgressCreateOrConnectWithoutMissionInput = {
    where: UserMissionProgressWhereUniqueInput
    create: XOR<UserMissionProgressCreateWithoutMissionInput, UserMissionProgressUncheckedCreateWithoutMissionInput>
  }

  export type UserMissionProgressCreateManyMissionInputEnvelope = {
    data: UserMissionProgressCreateManyMissionInput | UserMissionProgressCreateManyMissionInput[]
  }

  export type UserPointHistoryCreateWithoutMissionInput = {
    id?: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserPointHistoryInput
    detectionHistory?: DetectionHistoryCreateNestedOneWithoutUserPointHistoryInput
    fish?: FishCreateNestedOneWithoutUserPointHistoriesInput
  }

  export type UserPointHistoryUncheckedCreateWithoutMissionInput = {
    id?: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    detectionHistoryId?: string | null
    fishId?: string | null
  }

  export type UserPointHistoryCreateOrConnectWithoutMissionInput = {
    where: UserPointHistoryWhereUniqueInput
    create: XOR<UserPointHistoryCreateWithoutMissionInput, UserPointHistoryUncheckedCreateWithoutMissionInput>
  }

  export type UserPointHistoryCreateManyMissionInputEnvelope = {
    data: UserPointHistoryCreateManyMissionInput | UserPointHistoryCreateManyMissionInput[]
  }

  export type MissionDetailTargetUpsertWithWhereUniqueWithoutMissionInput = {
    where: MissionDetailTargetWhereUniqueInput
    update: XOR<MissionDetailTargetUpdateWithoutMissionInput, MissionDetailTargetUncheckedUpdateWithoutMissionInput>
    create: XOR<MissionDetailTargetCreateWithoutMissionInput, MissionDetailTargetUncheckedCreateWithoutMissionInput>
  }

  export type MissionDetailTargetUpdateWithWhereUniqueWithoutMissionInput = {
    where: MissionDetailTargetWhereUniqueInput
    data: XOR<MissionDetailTargetUpdateWithoutMissionInput, MissionDetailTargetUncheckedUpdateWithoutMissionInput>
  }

  export type MissionDetailTargetUpdateManyWithWhereWithoutMissionInput = {
    where: MissionDetailTargetScalarWhereInput
    data: XOR<MissionDetailTargetUpdateManyMutationInput, MissionDetailTargetUncheckedUpdateManyWithoutMissionInput>
  }

  export type UserMissionProgressUpsertWithWhereUniqueWithoutMissionInput = {
    where: UserMissionProgressWhereUniqueInput
    update: XOR<UserMissionProgressUpdateWithoutMissionInput, UserMissionProgressUncheckedUpdateWithoutMissionInput>
    create: XOR<UserMissionProgressCreateWithoutMissionInput, UserMissionProgressUncheckedCreateWithoutMissionInput>
  }

  export type UserMissionProgressUpdateWithWhereUniqueWithoutMissionInput = {
    where: UserMissionProgressWhereUniqueInput
    data: XOR<UserMissionProgressUpdateWithoutMissionInput, UserMissionProgressUncheckedUpdateWithoutMissionInput>
  }

  export type UserMissionProgressUpdateManyWithWhereWithoutMissionInput = {
    where: UserMissionProgressScalarWhereInput
    data: XOR<UserMissionProgressUpdateManyMutationInput, UserMissionProgressUncheckedUpdateManyWithoutMissionInput>
  }

  export type UserPointHistoryUpsertWithWhereUniqueWithoutMissionInput = {
    where: UserPointHistoryWhereUniqueInput
    update: XOR<UserPointHistoryUpdateWithoutMissionInput, UserPointHistoryUncheckedUpdateWithoutMissionInput>
    create: XOR<UserPointHistoryCreateWithoutMissionInput, UserPointHistoryUncheckedCreateWithoutMissionInput>
  }

  export type UserPointHistoryUpdateWithWhereUniqueWithoutMissionInput = {
    where: UserPointHistoryWhereUniqueInput
    data: XOR<UserPointHistoryUpdateWithoutMissionInput, UserPointHistoryUncheckedUpdateWithoutMissionInput>
  }

  export type UserPointHistoryUpdateManyWithWhereWithoutMissionInput = {
    where: UserPointHistoryScalarWhereInput
    data: XOR<UserPointHistoryUpdateManyMutationInput, UserPointHistoryUncheckedUpdateManyWithoutMissionInput>
  }

  export type MissionCreateWithoutDetailTargetsInput = {
    id?: string
    title: string
    point?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProgresses?: UserMissionProgressCreateNestedManyWithoutMissionInput
    pointHistories?: UserPointHistoryCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutDetailTargetsInput = {
    id?: string
    title: string
    point?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProgresses?: UserMissionProgressUncheckedCreateNestedManyWithoutMissionInput
    pointHistories?: UserPointHistoryUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutDetailTargetsInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutDetailTargetsInput, MissionUncheckedCreateWithoutDetailTargetsInput>
  }

  export type FishCreateWithoutMissionDetailTargetsInput = {
    id?: string
    name: string
    scientificName?: string | null
    description?: string | null
    imageUrl?: string | null
    habitat?: string | null
    length?: string | null
    age?: string | null
    depthLevel?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    family?: FishFamilyCreateNestedOneWithoutFishesInput
    rarity?: FishRarityCreateNestedOneWithoutFishesInput
    detectionResults?: DetectionResultCreateNestedManyWithoutFishInput
    userMissionProgress?: UserMissionProgressCreateNestedManyWithoutFishInput
    userPointHistories?: UserPointHistoryCreateNestedManyWithoutFishInput
  }

  export type FishUncheckedCreateWithoutMissionDetailTargetsInput = {
    id?: string
    name: string
    scientificName?: string | null
    description?: string | null
    imageUrl?: string | null
    habitat?: string | null
    length?: string | null
    age?: string | null
    depthLevel?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    familyId?: string | null
    rarityId?: string | null
    detectionResults?: DetectionResultUncheckedCreateNestedManyWithoutFishInput
    userMissionProgress?: UserMissionProgressUncheckedCreateNestedManyWithoutFishInput
    userPointHistories?: UserPointHistoryUncheckedCreateNestedManyWithoutFishInput
  }

  export type FishCreateOrConnectWithoutMissionDetailTargetsInput = {
    where: FishWhereUniqueInput
    create: XOR<FishCreateWithoutMissionDetailTargetsInput, FishUncheckedCreateWithoutMissionDetailTargetsInput>
  }

  export type MissionUpsertWithoutDetailTargetsInput = {
    update: XOR<MissionUpdateWithoutDetailTargetsInput, MissionUncheckedUpdateWithoutDetailTargetsInput>
    create: XOR<MissionCreateWithoutDetailTargetsInput, MissionUncheckedCreateWithoutDetailTargetsInput>
    where?: MissionWhereInput
  }

  export type MissionUpdateToOneWithWhereWithoutDetailTargetsInput = {
    where?: MissionWhereInput
    data: XOR<MissionUpdateWithoutDetailTargetsInput, MissionUncheckedUpdateWithoutDetailTargetsInput>
  }

  export type MissionUpdateWithoutDetailTargetsInput = {
    title?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgresses?: UserMissionProgressUpdateManyWithoutMissionNestedInput
    pointHistories?: UserPointHistoryUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutDetailTargetsInput = {
    title?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgresses?: UserMissionProgressUncheckedUpdateManyWithoutMissionNestedInput
    pointHistories?: UserPointHistoryUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type FishUpsertWithoutMissionDetailTargetsInput = {
    update: XOR<FishUpdateWithoutMissionDetailTargetsInput, FishUncheckedUpdateWithoutMissionDetailTargetsInput>
    create: XOR<FishCreateWithoutMissionDetailTargetsInput, FishUncheckedCreateWithoutMissionDetailTargetsInput>
    where?: FishWhereInput
  }

  export type FishUpdateToOneWithWhereWithoutMissionDetailTargetsInput = {
    where?: FishWhereInput
    data: XOR<FishUpdateWithoutMissionDetailTargetsInput, FishUncheckedUpdateWithoutMissionDetailTargetsInput>
  }

  export type FishUpdateWithoutMissionDetailTargetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FishFamilyUpdateOneWithoutFishesNestedInput
    rarity?: FishRarityUpdateOneWithoutFishesNestedInput
    detectionResults?: DetectionResultUpdateManyWithoutFishNestedInput
    userMissionProgress?: UserMissionProgressUpdateManyWithoutFishNestedInput
    userPointHistories?: UserPointHistoryUpdateManyWithoutFishNestedInput
  }

  export type FishUncheckedUpdateWithoutMissionDetailTargetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    rarityId?: NullableStringFieldUpdateOperationsInput | string | null
    detectionResults?: DetectionResultUncheckedUpdateManyWithoutFishNestedInput
    userMissionProgress?: UserMissionProgressUncheckedUpdateManyWithoutFishNestedInput
    userPointHistories?: UserPointHistoryUncheckedUpdateManyWithoutFishNestedInput
  }

  export type UserCreateWithoutUserMissionProgressInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    detectionHistory?: DetectionHistoryCreateNestedManyWithoutUserInput
    userPointHistory?: UserPointHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserMissionProgressInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    detectionHistory?: DetectionHistoryUncheckedCreateNestedManyWithoutUserInput
    userPointHistory?: UserPointHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserMissionProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserMissionProgressInput, UserUncheckedCreateWithoutUserMissionProgressInput>
  }

  export type MissionCreateWithoutUserProgressesInput = {
    id?: string
    title: string
    point?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    detailTargets?: MissionDetailTargetCreateNestedManyWithoutMissionInput
    pointHistories?: UserPointHistoryCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutUserProgressesInput = {
    id?: string
    title: string
    point?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    detailTargets?: MissionDetailTargetUncheckedCreateNestedManyWithoutMissionInput
    pointHistories?: UserPointHistoryUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutUserProgressesInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutUserProgressesInput, MissionUncheckedCreateWithoutUserProgressesInput>
  }

  export type FishCreateWithoutUserMissionProgressInput = {
    id?: string
    name: string
    scientificName?: string | null
    description?: string | null
    imageUrl?: string | null
    habitat?: string | null
    length?: string | null
    age?: string | null
    depthLevel?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    family?: FishFamilyCreateNestedOneWithoutFishesInput
    rarity?: FishRarityCreateNestedOneWithoutFishesInput
    detectionResults?: DetectionResultCreateNestedManyWithoutFishInput
    userPointHistories?: UserPointHistoryCreateNestedManyWithoutFishInput
    missionDetailTargets?: MissionDetailTargetCreateNestedManyWithoutFishInput
  }

  export type FishUncheckedCreateWithoutUserMissionProgressInput = {
    id?: string
    name: string
    scientificName?: string | null
    description?: string | null
    imageUrl?: string | null
    habitat?: string | null
    length?: string | null
    age?: string | null
    depthLevel?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    familyId?: string | null
    rarityId?: string | null
    detectionResults?: DetectionResultUncheckedCreateNestedManyWithoutFishInput
    userPointHistories?: UserPointHistoryUncheckedCreateNestedManyWithoutFishInput
    missionDetailTargets?: MissionDetailTargetUncheckedCreateNestedManyWithoutFishInput
  }

  export type FishCreateOrConnectWithoutUserMissionProgressInput = {
    where: FishWhereUniqueInput
    create: XOR<FishCreateWithoutUserMissionProgressInput, FishUncheckedCreateWithoutUserMissionProgressInput>
  }

  export type UserUpsertWithoutUserMissionProgressInput = {
    update: XOR<UserUpdateWithoutUserMissionProgressInput, UserUncheckedUpdateWithoutUserMissionProgressInput>
    create: XOR<UserCreateWithoutUserMissionProgressInput, UserUncheckedCreateWithoutUserMissionProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserMissionProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserMissionProgressInput, UserUncheckedUpdateWithoutUserMissionProgressInput>
  }

  export type UserUpdateWithoutUserMissionProgressInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    detectionHistory?: DetectionHistoryUpdateManyWithoutUserNestedInput
    userPointHistory?: UserPointHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserMissionProgressInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    detectionHistory?: DetectionHistoryUncheckedUpdateManyWithoutUserNestedInput
    userPointHistory?: UserPointHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MissionUpsertWithoutUserProgressesInput = {
    update: XOR<MissionUpdateWithoutUserProgressesInput, MissionUncheckedUpdateWithoutUserProgressesInput>
    create: XOR<MissionCreateWithoutUserProgressesInput, MissionUncheckedCreateWithoutUserProgressesInput>
    where?: MissionWhereInput
  }

  export type MissionUpdateToOneWithWhereWithoutUserProgressesInput = {
    where?: MissionWhereInput
    data: XOR<MissionUpdateWithoutUserProgressesInput, MissionUncheckedUpdateWithoutUserProgressesInput>
  }

  export type MissionUpdateWithoutUserProgressesInput = {
    title?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detailTargets?: MissionDetailTargetUpdateManyWithoutMissionNestedInput
    pointHistories?: UserPointHistoryUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutUserProgressesInput = {
    title?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detailTargets?: MissionDetailTargetUncheckedUpdateManyWithoutMissionNestedInput
    pointHistories?: UserPointHistoryUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type FishUpsertWithoutUserMissionProgressInput = {
    update: XOR<FishUpdateWithoutUserMissionProgressInput, FishUncheckedUpdateWithoutUserMissionProgressInput>
    create: XOR<FishCreateWithoutUserMissionProgressInput, FishUncheckedCreateWithoutUserMissionProgressInput>
    where?: FishWhereInput
  }

  export type FishUpdateToOneWithWhereWithoutUserMissionProgressInput = {
    where?: FishWhereInput
    data: XOR<FishUpdateWithoutUserMissionProgressInput, FishUncheckedUpdateWithoutUserMissionProgressInput>
  }

  export type FishUpdateWithoutUserMissionProgressInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FishFamilyUpdateOneWithoutFishesNestedInput
    rarity?: FishRarityUpdateOneWithoutFishesNestedInput
    detectionResults?: DetectionResultUpdateManyWithoutFishNestedInput
    userPointHistories?: UserPointHistoryUpdateManyWithoutFishNestedInput
    missionDetailTargets?: MissionDetailTargetUpdateManyWithoutFishNestedInput
  }

  export type FishUncheckedUpdateWithoutUserMissionProgressInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    rarityId?: NullableStringFieldUpdateOperationsInput | string | null
    detectionResults?: DetectionResultUncheckedUpdateManyWithoutFishNestedInput
    userPointHistories?: UserPointHistoryUncheckedUpdateManyWithoutFishNestedInput
    missionDetailTargets?: MissionDetailTargetUncheckedUpdateManyWithoutFishNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type DetectionHistoryCreateManyUserInput = {
    id?: string
    imageUrl: string
    claimToken?: string | null
    isClaimed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPointHistoryCreateManyUserInput = {
    id?: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detectionHistoryId?: string | null
    missionId?: string | null
    fishId?: string | null
  }

  export type UserMissionProgressCreateManyUserInput = {
    id?: string
    isSuccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    missionId: string
    fishId: string
  }

  export type SessionUpdateWithoutUserInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionHistoryUpdateWithoutUserInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    claimToken?: NullableStringFieldUpdateOperationsInput | string | null
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPointHistory?: UserPointHistoryUpdateOneWithoutDetectionHistoryNestedInput
    detectionResults?: DetectionResultUpdateManyWithoutDetectionHistoryNestedInput
  }

  export type DetectionHistoryUncheckedUpdateWithoutUserInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    claimToken?: NullableStringFieldUpdateOperationsInput | string | null
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPointHistory?: UserPointHistoryUncheckedUpdateOneWithoutDetectionHistoryNestedInput
    detectionResults?: DetectionResultUncheckedUpdateManyWithoutDetectionHistoryNestedInput
  }

  export type DetectionHistoryUncheckedUpdateManyWithoutUserInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    claimToken?: NullableStringFieldUpdateOperationsInput | string | null
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPointHistoryUpdateWithoutUserInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectionHistory?: DetectionHistoryUpdateOneWithoutUserPointHistoryNestedInput
    mission?: MissionUpdateOneWithoutPointHistoriesNestedInput
    fish?: FishUpdateOneWithoutUserPointHistoriesNestedInput
  }

  export type UserPointHistoryUncheckedUpdateWithoutUserInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    missionId?: NullableStringFieldUpdateOperationsInput | string | null
    fishId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPointHistoryUncheckedUpdateManyWithoutUserInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    missionId?: NullableStringFieldUpdateOperationsInput | string | null
    fishId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserMissionProgressUpdateWithoutUserInput = {
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mission?: MissionUpdateOneRequiredWithoutUserProgressesNestedInput
    fish?: FishUpdateOneRequiredWithoutUserMissionProgressNestedInput
  }

  export type UserMissionProgressUncheckedUpdateWithoutUserInput = {
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missionId?: StringFieldUpdateOperationsInput | string
    fishId?: StringFieldUpdateOperationsInput | string
  }

  export type UserMissionProgressUncheckedUpdateManyWithoutUserInput = {
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missionId?: StringFieldUpdateOperationsInput | string
    fishId?: StringFieldUpdateOperationsInput | string
  }

  export type FishCreateManyFamilyInput = {
    id?: string
    name: string
    scientificName?: string | null
    description?: string | null
    imageUrl?: string | null
    habitat?: string | null
    length?: string | null
    age?: string | null
    depthLevel?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rarityId?: string | null
  }

  export type FishUpdateWithoutFamilyInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rarity?: FishRarityUpdateOneWithoutFishesNestedInput
    detectionResults?: DetectionResultUpdateManyWithoutFishNestedInput
    userMissionProgress?: UserMissionProgressUpdateManyWithoutFishNestedInput
    userPointHistories?: UserPointHistoryUpdateManyWithoutFishNestedInput
    missionDetailTargets?: MissionDetailTargetUpdateManyWithoutFishNestedInput
  }

  export type FishUncheckedUpdateWithoutFamilyInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rarityId?: NullableStringFieldUpdateOperationsInput | string | null
    detectionResults?: DetectionResultUncheckedUpdateManyWithoutFishNestedInput
    userMissionProgress?: UserMissionProgressUncheckedUpdateManyWithoutFishNestedInput
    userPointHistories?: UserPointHistoryUncheckedUpdateManyWithoutFishNestedInput
    missionDetailTargets?: MissionDetailTargetUncheckedUpdateManyWithoutFishNestedInput
  }

  export type FishUncheckedUpdateManyWithoutFamilyInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rarityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FishCreateManyRarityInput = {
    id?: string
    name: string
    scientificName?: string | null
    description?: string | null
    imageUrl?: string | null
    habitat?: string | null
    length?: string | null
    age?: string | null
    depthLevel?: string | null
    weight?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    familyId?: string | null
  }

  export type FishUpdateWithoutRarityInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FishFamilyUpdateOneWithoutFishesNestedInput
    detectionResults?: DetectionResultUpdateManyWithoutFishNestedInput
    userMissionProgress?: UserMissionProgressUpdateManyWithoutFishNestedInput
    userPointHistories?: UserPointHistoryUpdateManyWithoutFishNestedInput
    missionDetailTargets?: MissionDetailTargetUpdateManyWithoutFishNestedInput
  }

  export type FishUncheckedUpdateWithoutRarityInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
    detectionResults?: DetectionResultUncheckedUpdateManyWithoutFishNestedInput
    userMissionProgress?: UserMissionProgressUncheckedUpdateManyWithoutFishNestedInput
    userPointHistories?: UserPointHistoryUncheckedUpdateManyWithoutFishNestedInput
    missionDetailTargets?: MissionDetailTargetUncheckedUpdateManyWithoutFishNestedInput
  }

  export type FishUncheckedUpdateManyWithoutRarityInput = {
    name?: StringFieldUpdateOperationsInput | string
    scientificName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    depthLevel?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    familyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DetectionResultCreateManyFishInput = {
    id?: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detectionHistoryId: string
  }

  export type UserMissionProgressCreateManyFishInput = {
    id?: string
    isSuccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    missionId: string
  }

  export type UserPointHistoryCreateManyFishInput = {
    id?: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    detectionHistoryId?: string | null
    missionId?: string | null
  }

  export type MissionDetailTargetCreateManyFishInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    missionId: string
  }

  export type DetectionResultUpdateWithoutFishInput = {
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectionHistory?: DetectionHistoryUpdateOneRequiredWithoutDetectionResultsNestedInput
  }

  export type DetectionResultUncheckedUpdateWithoutFishInput = {
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectionHistoryId?: StringFieldUpdateOperationsInput | string
  }

  export type DetectionResultUncheckedUpdateManyWithoutFishInput = {
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detectionHistoryId?: StringFieldUpdateOperationsInput | string
  }

  export type UserMissionProgressUpdateWithoutFishInput = {
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserMissionProgressNestedInput
    mission?: MissionUpdateOneRequiredWithoutUserProgressesNestedInput
  }

  export type UserMissionProgressUncheckedUpdateWithoutFishInput = {
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserMissionProgressUncheckedUpdateManyWithoutFishInput = {
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    missionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserPointHistoryUpdateWithoutFishInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPointHistoryNestedInput
    detectionHistory?: DetectionHistoryUpdateOneWithoutUserPointHistoryNestedInput
    mission?: MissionUpdateOneWithoutPointHistoriesNestedInput
  }

  export type UserPointHistoryUncheckedUpdateWithoutFishInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    detectionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    missionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPointHistoryUncheckedUpdateManyWithoutFishInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    detectionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    missionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MissionDetailTargetUpdateWithoutFishInput = {
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mission?: MissionUpdateOneRequiredWithoutDetailTargetsNestedInput
  }

  export type MissionDetailTargetUncheckedUpdateWithoutFishInput = {
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missionId?: StringFieldUpdateOperationsInput | string
  }

  export type MissionDetailTargetUncheckedUpdateManyWithoutFishInput = {
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missionId?: StringFieldUpdateOperationsInput | string
  }

  export type DetectionResultCreateManyDetectionHistoryInput = {
    id?: string
    confidence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fishId?: string | null
  }

  export type DetectionResultUpdateWithoutDetectionHistoryInput = {
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fish?: FishUpdateOneWithoutDetectionResultsNestedInput
  }

  export type DetectionResultUncheckedUpdateWithoutDetectionHistoryInput = {
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fishId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DetectionResultUncheckedUpdateManyWithoutDetectionHistoryInput = {
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fishId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MissionDetailTargetCreateManyMissionInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fishId: string
  }

  export type UserMissionProgressCreateManyMissionInput = {
    id?: string
    isSuccess?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    fishId: string
  }

  export type UserPointHistoryCreateManyMissionInput = {
    id?: string
    point: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    detectionHistoryId?: string | null
    fishId?: string | null
  }

  export type MissionDetailTargetUpdateWithoutMissionInput = {
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fish?: FishUpdateOneRequiredWithoutMissionDetailTargetsNestedInput
  }

  export type MissionDetailTargetUncheckedUpdateWithoutMissionInput = {
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fishId?: StringFieldUpdateOperationsInput | string
  }

  export type MissionDetailTargetUncheckedUpdateManyWithoutMissionInput = {
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fishId?: StringFieldUpdateOperationsInput | string
  }

  export type UserMissionProgressUpdateWithoutMissionInput = {
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserMissionProgressNestedInput
    fish?: FishUpdateOneRequiredWithoutUserMissionProgressNestedInput
  }

  export type UserMissionProgressUncheckedUpdateWithoutMissionInput = {
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    fishId?: StringFieldUpdateOperationsInput | string
  }

  export type UserMissionProgressUncheckedUpdateManyWithoutMissionInput = {
    isSuccess?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    fishId?: StringFieldUpdateOperationsInput | string
  }

  export type UserPointHistoryUpdateWithoutMissionInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPointHistoryNestedInput
    detectionHistory?: DetectionHistoryUpdateOneWithoutUserPointHistoryNestedInput
    fish?: FishUpdateOneWithoutUserPointHistoriesNestedInput
  }

  export type UserPointHistoryUncheckedUpdateWithoutMissionInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    detectionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    fishId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPointHistoryUncheckedUpdateManyWithoutMissionInput = {
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    detectionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    fishId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}