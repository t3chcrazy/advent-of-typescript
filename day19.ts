type BuildGifts<Gift, Count extends number, Result extends any[] = []> = Result["length"] extends Count? Result: BuildGifts<Gift, Count, [Gift, ...Result]>

type Rebuild<
	List extends number[],
	Count extends number[] = [],
	Result extends any[] = []
> = List extends [infer L extends number, ...infer R extends number[]]? (
	Count["length"] extends 0? Rebuild<R, [L, ...Count], [...Result, ...BuildGifts<'🛹', L>]>:
	Count["length"] extends 1? Rebuild<R, [L, ...Count], [...Result, ...BuildGifts<'🚲', L>]>:
	Count["length"] extends 2? Rebuild<R, [L, ...Count], [...Result, ...BuildGifts<'🛴', L>]>:
	Count["length"] extends 3? Rebuild<R, [], [...Result, ...BuildGifts<'🏄', L>]>: never
): Result;