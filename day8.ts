type RemoveNaughtyChildren<T extends { [key: string]: any }> = {
	[K in keyof T as K extends `naughty_${infer R}`? never: K]: T[K];
};