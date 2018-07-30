declare class Resulting<T> {
    private value;
    private checked;
    constructor(value: Error | T);
    isError(): boolean;
    isOk(): boolean;
    unwrap(): T;
}
declare function Result<T>(val: Error | T): Resulting<T>;
export { Result };
