const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('call calculateNumber with correct arguments and log the result', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    assert(calculateNumberSpy.calledWith('SUM', 100, 20));
    assert(consoleSpy.calledWith('The total is: 120'));
    assert(calculateNumberSpy.calledOnce)

    calculateNumberSpy.restore();
    consoleSpy.restore();
  });
});

