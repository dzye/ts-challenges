type MyReadonly2<T, K extends keyof T = keyof T> = {
  [I in keyof T as I extends K ? never : I]: T[I]
} & { readonly [I in K]: T[I] }
