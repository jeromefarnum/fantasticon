export declare type Arguments<T> = T extends (...args: infer T) => any ? T : never;
