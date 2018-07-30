/** Option class type */
declare class Optional<T> {
    private value;
    private force_none;
    private checked;
    constructor(value: T | void, force_none: boolean);
    /** Check if this object has a value. */
    hasSome(): boolean;
    /** Check if this object has no value. */
    hasNone(): boolean;
    /** Get the value held by the Option, throws if not checked first. */
    unwrap(): T;
}
/** Wrapper to make option type more natural. */
declare function Option<T>(value?: T | void, force_none?: boolean): Optional<T>;
export { Option, Optional };
