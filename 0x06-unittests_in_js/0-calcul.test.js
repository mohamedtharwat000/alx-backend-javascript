const { it, describe } = require("mocha");
const assert = require('assert');
const calcul = require('./0-calcul.js');


describe('calculateNumber', () => {
    it('Are Equal', () => {
        const result = calcul(1.4, 2.6);
        assert.strictEqual(result, 4);
    });

    it('Are Equal', () => {
        const result = calcul(1, 1);
        assert.strictEqual(result, 2);
    });

    it('Are Equal', () => {
        const result = calcul(-1.5, -1.5);
        assert.strictEqual(result, -2);
    });

    it('Are Equal', () => {
        const result = calcul(0, 0);
        assert.strictEqual(result, 0);
    });

    it('Are Equal', () => {
        const result = calcul(1, 3);
        assert.strictEqual(result, 4);
    });

    it('Are Equal', () => {
        const result = calcul(1, 3.7);
        assert.strictEqual(result, 5);
    });

    it('Are Equal', () => {
        const result = calcul(1.2, 3.7);
        assert.strictEqual(result, 5);
    });

    it('Are Equal', () => {
        const result = calcul(1.5, 3.7);
        assert.strictEqual(result, 6);
    });

    it('Are Equal', () => {
        const result = calcul(-1.7, -2);
        assert.strictEqual(result, -4);
    });

    it('Are Equal', () => {
        const result = calcul(-1, -2.7);
        assert.strictEqual(result, -4);
    });
});
