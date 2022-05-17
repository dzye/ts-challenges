type MyOmit<T, K extends keyof T> = {
  [I in keyof T as I extends K ? never : I]: I extends K ? never : T[I]
}
