// import type { Equal } from '@type-challenges/utils'
// type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R] ? Equal<F, U> extends true ? true : Includes<R, U> : false
type Equals<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false;

type Includes<T extends readonly any[], U> = T extends [infer P, ...infer S] ? (Equals<P,U> extends true ? true : Includes<S,U>) : false

