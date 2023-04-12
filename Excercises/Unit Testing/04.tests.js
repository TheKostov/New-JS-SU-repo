const { describe } = require('mocha');
const { assert } = require('chai');
const mathEnforcer = require('../Unit Testing/04.js');

describe('MathEnforcer', () => {
    describe('addFive function', () => {
        it('Should return undefined if param is not a number', () => {
            assert.equal(mathEnforcer.addFive('a'), undefined)
        })
        it('Should return undefined if without param', () => {
            assert.equal(mathEnforcer.addFive(), undefined)
        })
        it('Should return positive number if param is 5', () => {
            assert.equal(mathEnforcer.addFive(5), 10)
        }) 
        it('Should return 8.14 if param is 3.14', () => {
            assert.equal(mathEnforcer.addFive(3.14), 8.14)
        })
        it('Should return 5.99 if param is 0.99', () => {
            assert.equal(mathEnforcer.addFive(0.99), 5.99)
        })
        it('Should return -5.99 if param is -10.55', () => {
            assert.equal(mathEnforcer.addFive(-10.99), -5.99)
        })
        it('Should return 0 if param is -5', () => {
            assert.equal(mathEnforcer.addFive(-5), 0)
        })
    }) 

    describe('substractTen function', () => {
        it('Should return undefined if param is not a number', () => {
            assert.equal(mathEnforcer.subtractTen('s'), undefined)
        })
        it('Should return undefined if no param is passed', () => {
            assert.equal(mathEnforcer.subtractTen(), undefined)
        })
        it('Should return positive number 5 if param is 15', () => {
            assert.equal(mathEnforcer.subtractTen(15), 5)
        })
        it('Should return floating point number -8.9 if param is 1.1', () => {
            assert.equal(mathEnforcer.subtractTen(1.1), -8.9)
        })
        it('Should return -6.86 if param is 3.14', () => {
            assert.closeTo(mathEnforcer.subtractTen(3.14), -6.86, 0.01)
        })
        it('Should return floating number if param is 0.99', () => {
            assert.closeTo(mathEnforcer.subtractTen(0.99), -9.01, 0.01)
        })
        it('Should return 0 if param 10', () => {
            assert.equal(mathEnforcer.subtractTen(10), 0)
        })
        it('Should return -10 if param 0', () => {
            assert.equal(mathEnforcer.subtractTen(0), -10)
        })
        it('Should return -floating number if param is -0.99', () => {
            assert.closeTo(mathEnforcer.subtractTen(-0.99), -10.99, 0.01)
        })    
    })
    describe('sum function', () => {
        it('Should return undefined if first param is not a number', () => {
            assert.equal(mathEnforcer.sum('a', 5), undefined)
        })
        it('Should return undefined if second param is not a number', () => {
            assert.equal(mathEnforcer.sum(5, 'a'), undefined)
        })
        it('Should return undefined if no params are passed', () => {
            assert.equal(mathEnforcer.sum(), undefined)
        })
        it('Should return 10 if two params are positive numbers', () => {
            assert.equal(mathEnforcer.sum(5, 5), 10)
        })
        it('Should return negative number', () => {
            assert.equal(mathEnforcer.sum(-5, -5), -10)
        })
        it('Should return floating point number with -5 + 3.1', () => {
            assert.closeTo(mathEnforcer.sum(-5, 3.1), -1.9, 0.1 )
        })
        it('Should return floating point number with -5 + 3.22', () => {
            assert.closeTo(mathEnforcer.sum(-5, 3.22), -1.78, 0.1 )
        })
        it('Should return a positive floating point number with 2.7 + 3.4', () => {
            assert.closeTo(mathEnforcer.sum(2.7, 3.4), 6.1, 0.1 )
        })
    })
})
