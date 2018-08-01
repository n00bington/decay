declare class Resulting<T> {
    private value;
    private is_fail;
    private checked;
    constructor(value: Error | T | string, is_fail?: boolean);
    isError(): boolean;
    isOk(): boolean;
    getError(): Error;
    unwrap(): T;
}
declare function Result<T>(val: Error | T | string, is_fail?: boolean): Resulting<T>;
export { Result, Resulting };
