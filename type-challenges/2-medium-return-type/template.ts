type MyReturnType<T> = T extends (...args) => infer R ? R : never
