/*!
 * multipliable-string <https://github.com/d-indifference/multipliable-string>
 *
 * Copyright (c) 2021, Demon of indifference.
 * Released under the MIT License.
 */

'use strict';

/**
 * String, which can be multiplied as same, as in Python
 */
module.exports = class MultipliableString extends String {
    constructor(value) {
        super(value);
    }

    /**
     * Repeats string as same, as string multiplication in Python works
     * @param {number} count How many times string will be repeated
     * @returns Repeated string
     */
    multiply(count) {
        if (typeof count === 'number' && (isFinite(count) && Math.floor(count) === count)) {
            if (count === Infinity || count === -Infinity) {
                throw new RangeError('Invalid count value');
            }

            if (count > 0) {
                return this.repeat(count);
            }

            return '';
        } else {
            throw new TypeError('Argument must be an integer number');
        }
    }
};
