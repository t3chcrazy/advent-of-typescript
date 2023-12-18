type Key = string | number | symbol

type ArrayOrObject = { [k: Key]: any } | any[]

type FunctionType = (...args: any[]) => any

type SantaListProtector<T> = T extends { [key: Key]: any }? {
	readonly [key in keyof T]: T[key] extends FunctionType? T[key]: T[key] extends ArrayOrObject? SantaListProtector<T[key]>: T[key]
}: (
  T extends [infer U, ...infer V]? U extends ArrayOrObject? readonly [SantaListProtector<U>, ...SantaListProtector<V>]: readonly [U, ...SantaListProtector<V>]: never
)
