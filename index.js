/*!
 * multiplieble-string <https://github.com/sailor-alba/multiplieble-string>
 *
 * Copyright (c) 2021, Sailor Alba.
 * Released under the MIT License.
 */

'use strict';

/**
 * String, which can be multiplied as same, as in Python
 */
module.exports = class MultipliebleString extends String {
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
            if (count == Infinity || count == -Infinity) {
                throw new RangeError('Invalid count value');
            }

            let result = '';

            if (count > 0) {
                for (let i = 0; i < count; i++) {
                    result += this.toString(); 
                }

                return result;
            }

            return result;
        } else {
            throw new TypeError('Argument must be an integer number');
        } 
    }
};
