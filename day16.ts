type FindArray<Arr, L extends any[] = []> = Arr extends [infer C, ...infer R]? (
    C extends '🎅🏼'? L["length"]: FindArray<R, [-1, ...L]>
): -1

type FindSantaDay16<Forest, Row extends any[] = []> = 
	Forest extends [infer R, ...infer RestForest]? (
        FindArray<R> extends -1? FindSantaDay16<RestForest, [-1, ...Row]>: [Row["length"], FindArray<R>]
    ): never
