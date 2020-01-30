const assert = require('assert');
const {Given, When, Then} = require('cucumber');
const compute = require('../utils/compute');


Given(/^I have first number (\d+)$/, function (arg1) {
    this.firstNumber = arg1;
});

Given(/^I have second number (\d+)$/, function (arg1) {
    this.secondNumber = arg1;
});


When(/^I make the sum of those two numbers$/, function () {
    this.result = compute.sum(this.firstNumber, this.secondNumber);
});


Then(/^result should be (\d+)$/, function (arg1) {
    assert.equal(arg1, this.result);
});
