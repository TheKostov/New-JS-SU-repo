const { assert } = require("chai");
const { lookUpChar } = require("../Unit Testing/testing");

describe('lookUpChar', () => {
    it('Should return undefined if first argument is not a string', () =>{
        assert.equal(lookUpChar(1,1), undefined);
    })
    it('Should return undefined if second argument is not an integer    ', () =>{
        assert.equal(lookUpChar('s',1.2), undefined);
    })
    it('Should return undefined if first argument is not correct', () =>{
        assert.equal(lookUpChar('s','s'), undefined);
    })
    it('Should return "Incorrect index" if index is smaller than 0', () =>{
        assert.equal(lookUpChar('test', -1), "Incorrect index");
    })
    it('Should return "Incorrect index" if index is outside of the boundary of the array', () =>{
        assert.equal(lookUpChar('test', 11), "Incorrect index");
    })
    it('Should return the correct character at index 0', () =>{
        assert.equal(lookUpChar('test', 0), "t");
    })
    it('Should return the correct character if the index is the last', () =>{
        assert.equal(lookUpChar('test', 3), "t");
    })
    it('Should return the correct character', () =>{
        assert.equal(lookUpChar('string',0), "s");
    })
    it('Should return the correct character', () =>{
        assert.equal(lookUpChar('pesho', 4), "o");
    })
})