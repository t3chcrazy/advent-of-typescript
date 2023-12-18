type FindSanta<T, Temp extends any[] = []> = T extends [infer R, ...infer V]? (
	R extends '🎅🏼'? Temp["length"]: FindSanta<V, [R, ...Temp]>
): never