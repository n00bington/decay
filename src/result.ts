'use strict';

import { UncheckedResultError } from './errors';

class Resulting<T> {

    private value: Error | T;

    private checked = false;

    constructor (value: Error | T) {
        this.value = value;
    }

    isError (): boolean {
        this.checked = true;

        return this.value instanceof Error;
    }

    isOk (): boolean {
        return !this.isError();
    }

    unwrap (): T {
        if (!this.checked) {
            throw new UncheckedResultError();
        }

        return this.value as T;
    }

};

function Result<T>(val: Error | T) {
    return new Resulting(val);
}

export {
    Result,
    Resulting
};