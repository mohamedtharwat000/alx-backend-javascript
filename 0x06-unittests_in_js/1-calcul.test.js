const { it, describe } = require("mocha");
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber function', () => {
    it('return sum of rounded numbers', () => {
        const result = calculateNumber('SUM', 1.4, 2.6);
        assert.strictEqual(result, 4);
    });

    it('return subtraction of rounded numbers', () => {
        const result = calculateNumber('SUBTRACT', 4.2, 1.8);
        assert.strictEqual(result, 2);
    });

    describe('DIVIDE operation', () => {
        it('should return division of rounded numbers', () => {
            const result = calculateNumber('DIVIDE', 5, 2);
            assert.strictEqual(result, 2.5);
        });

        it('should return "Error" if division by zero occurs', () => {
            const result = calculateNumber('DIVIDE', 3, 0);
            assert.strictEqual(result, "Error");
        });
    });
});
