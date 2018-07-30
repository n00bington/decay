'use strict';

/** New error type for not checking if optional has something. */
class UncheckedOptionError extends Error {
    constructor() {
        super('Optional value has not been checked before use.');

        // Fix cause extending Error is weird.
        (this as any).__proto__ = UncheckedOptionError.prototype;
    }
}

/** New error type for not checking if resulting has something. */
class UncheckedResultError extends Error {
    constructor() {
        super('Resulting value has not been checked before use.');

        // Fix cause extending Error is weird.
        (this as any).__proto__ = UncheckedResultError.prototype;
    }
}

export { 
    UncheckedOptionError,
    UncheckedResultError 
};