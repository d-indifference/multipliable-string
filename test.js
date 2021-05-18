'use strict';

require('mocha');
const assert = require('assert');

const MultipliebleString = require('.');

describe('Work with numbers: ', () => {
    it('Test work with numbers:', () => {
        assert.strictEqual(new MultipliebleString('Test').multiply(1), 'Test');
        assert.strictEqual(new MultipliebleString('Test').multiply(2), 'TestTest');
        assert.strictEqual(new MultipliebleString('Test').multiply(3), 'TestTestTest');
    });

    it('Test work with not common numbers:', () => {
        assert.strictEqual(new MultipliebleString('Test').multiply(0), '');
        assert.strictEqual(new MultipliebleString('Test').multiply(-1), '');
    });

    it('Test work with not numbers:', () => {
        assert.throws(() => new MultipliebleString('Test').multiply(), 'expected a number');
        assert.throws(() => new MultipliebleString('Test').multiply('foo'), 'expected a number');
        assert.throws(() => new MultipliebleString('Test').multiply('3'), 'expected a number');
        assert.throws(() => new MultipliebleString('Test').multiply([]), 'expected a number');
        assert.throws(() => new MultipliebleString('Test').multiply({}), 'expected a number');
        assert.throws(() => new MultipliebleString('Test').multiply(NaN), 'expected a number');
        assert.throws(() => new MultipliebleString('Test').multiply(null), 'expected a number');
        assert.throws(() => new MultipliebleString('Test')
            .multiply(undefined), 'expected a number');
        assert.throws(() => new MultipliebleString('Test').multiply(1.5), 'expected a number');
        assert.throws(() => new MultipliebleString('Test').multiply(-1.5), 'expected a number');  
        assert.throws(() => new MultipliebleString('Test')
            .multiply(Infinity), 'expected a number'); 
        assert.throws(() => new MultipliebleString('Test')
            .multiply(-Infinity), 'expected a number');     
    });
});

