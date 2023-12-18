type AppendGood<T extends { [key: string]: any }> = {
	[K in keyof T as K extends string? `good_${K}`: never]: T[K]
}