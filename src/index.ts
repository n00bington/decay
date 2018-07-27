'use strict';

const NODE_ENV = process.env['NODE_ENV'];

/** New error type for not checking if optional has something. */
class UncheckedOptionError extends Error {
    constructor() {
        super('Optional value has not been checked before use.');

        // Fix cause extending Error is weird.
        (this as any).__proto__ = UncheckedOptionError.prototype;
    }
}

/** Option class type */
class Optional<T> {

    private value      : T | void;
    private force_none : boolean;
    private checked    : boolean = false;

    constructor (value: T | void, force_none: boolean) {
        this.value      = value;
        this.force_none = force_none;
    }

    /** Check if this object has a value. */
    hasSome (): boolean {
        if (this.force_none) {
            return false;
        }

        const type = typeof this.value;

        this.checked = true;

        return (type !== 'undefined') && (type !== 'object' || this.value !== null);
    }

    /** Check if this object has no value. */
    hasNone (): boolean {
        return !this.hasSome();
    }

    /** Get the value held by the Option, throws if not checked first. */
    unwrap (): T {
        if (!this.checked) {
            throw new UncheckedOptionError();
        }

        return this.value as T;
    }

}

/** Wrapper to make option type more natural. */
function Option<T> (value?: T | void, force_none: boolean = false) {
    return new Optional<T>(value, force_none);
}

export { 
    Option,
    UncheckedOptionError
};