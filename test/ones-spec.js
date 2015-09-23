"use strict";
var ones = require("../ones.js");
var expect = require("chai").expect;

describe("ones", function(){

    it("should create an array of 1s of any size", function(){
        expect(ones()).to.deep.equal([]);
        expect(ones(0)).to.deep.equal([]);
        expect(ones(1)).to.deep.equal([1]);
        expect(ones(5)).to.deep.equal([1, 1,1, 1, 1]);
    });

});
