/** New error type for not checking if optional has something. */
declare class UncheckedOptionError extends Error {
    constructor();
}
/** Option class type */
declare class Optional<T> {
    private value;
    private checked;
    constructor(value: T | void);
    /** Check if this object has a value. */
    hasSome(): boolean;
    /** Check if this object has no value. */
    hasNone(): boolean;
    /** Get the value held by the Option, throws if not checked first. */
    unwrap(): T;
}
/** Wrapper to make option type more natural. */
declare function Option<T>(value?: T | void): Optional<T>;
export { Option, UncheckedOptionError };
