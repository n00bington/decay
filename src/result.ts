'use strict';

import { UncheckedResultError } from './errors';

class Resulting<T> {

    private value: Error | T | string;
    private is_fail = false;

    private checked = false;

    constructor (value: Error | T | string, is_fail: boolean = false) {
        this.value = value;
        this.is_fail = is_fail;
    }

    isError (): boolean {
        this.checked = true;
        
        if (this.is_fail) {
            return true;
        }

        return this.value instanceof Error;
    }

    isOk (): boolean {
        return !this.isError();
    }

    getError() {
        if (this.value instanceof Error) {
            return this.value;
        }

        if (typeof this.value === 'string') {
            return new Error(this.value);
        }

        return this.value as any as Error;
    }

    unwrap (): T {
        if (!this.checked) {
            throw new UncheckedResultError();
        }

        return this.value as T;
    }

};

function Result<T>(val: Error | T | string, is_fail: boolean = false) {
    return new Resulting(val, is_fail);
}

export {
    Result,
    Resulting
};