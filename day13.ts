type DayCounter<Start, End, Temp extends any[] = [1]> = End extends Temp["length"]? keyof {
	[K in Temp[number]]: K
} | End: DayCounter<Start, End, [...Temp, Temp["length"]]>;