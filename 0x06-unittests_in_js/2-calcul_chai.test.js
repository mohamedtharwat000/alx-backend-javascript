const expect = require('chai').expect;
const {describe, it} = require("mocha");
const calculate = require('./2-calcul_chai');

describe('calculate function', () => {
    it('return sum of two rounded numbers', () => {
        expect(calculate('SUM', 1.4, 2.6)).to.equal(4);
    });

    it('return subtraction of two rounded numbers', () => {
        expect(calculate('SUBTRACT', 5.4, 2.6)).to.equal(2);
    });

    describe('DIVIDE operation', () => {
        it('return division of two rounded numbers', () => {
            expect(calculate('DIVIDE', 8.4, 2)).to.equal(4);
        });

        it('return "Error" if second number is 0', () => {
            expect(calculate('DIVIDE', 8.4, 0)).to.equal("Error");
        });
    });
});
