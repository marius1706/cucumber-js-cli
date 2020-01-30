const assert = require('assert');
const {Given, When, Then} = require('cucumber');
const compute = require('../utils/compute');

When(/^I make the difference of those two numbers$/, function () {
    this.result = compute.diff(this.firstNumber, this.secondNumber);
});

