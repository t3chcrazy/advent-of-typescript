type Reverse<T extends string, Result extends string = ""> = T extends ""? Result: (T extends `${infer V}${infer R}`? Reverse<R, `${V}${Result}`>: never);
