'use strict';

import { UncheckedOptionError } from './errors';

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
    Optional
};