import * as assert from 'assert';

import { Option, UncheckedOptionError } from '../src/index';

describe('Basic functionality', () => {
    it ('should properly check if there is some', () => {
        const optional = Option({ value: 45 });

        assert(optional.hasSome());
        assert(optional.unwrap().value === 45);
    });

    it ('should properly check if there is none', () => {
        const optional_1 = Option();
        const optional_2 = Option(null);

        assert(optional_1.hasNone());
        assert(optional_2.hasNone());
    });

    it ('should throw an error if it is unchecked', () => {
        const option = Option({});

        try {
            option.unwrap();

            assert(false);
        } catch (error) {
            assert(error instanceof Error, 'is an instance of Error');
            assert(error instanceof UncheckedOptionError, 'is an instance of UncheckedOptionError');
        }
    });

    it ('should have none if it is forced to', () => {
        const optional_1 = Option('egg', true);
        const optional_2 = Option('egg');

        assert(optional_1.hasNone());
        assert(optional_2.hasSome());
    });
});
