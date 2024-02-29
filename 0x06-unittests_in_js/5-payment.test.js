const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi3', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log correct message and only be called once with total 120', () => {
    sendPaymentRequestToApi(100, 20);

    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWith('The total is: 120'));
  });

  it('should log correct message and only be called once with total 20', () => {
    sendPaymentRequestToApi(10, 10);

    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWith('The total is: 20'));
  });
});
