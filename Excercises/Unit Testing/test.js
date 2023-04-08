const {expect} = require('chai');
const isOddOrEven = require('../Unit Testing/testing.js');

describe('isOddOrEven', () => {
    it('isString', () => {
        expect(isOddOrEven(3)).to.undefined;
    });
    it('isOdd', () => {
        expect(isOddOrEven('s')).to.equal('odd')
    });
    it('isEven', () => {
        expect(isOddOrEven('aa')).to.equal('even')
    });
    it('isNotOdd', () => {
        expect(isOddOrEven('aa')).to.not.equal('odd')
    });
});


 