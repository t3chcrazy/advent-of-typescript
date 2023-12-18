type Count<
	Sack extends any[],
	Item extends string,
	Temp extends any[] = []
> = Sack extends [infer L, ...infer R]? (
	L extends Item? Count<R, Item, [Item, ...Temp]>: Count<R, Item, Temp>
): Temp["length"]