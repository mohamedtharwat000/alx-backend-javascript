const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe("sendPaymentRequestToApi2", function() {
    it("should call Utils.calculateNumber with correct arguments and log the result", function() {
        const spyLog = sinon.spy(console, "log");
        const stubCalc = sinon.stub(Utils, "calculateNumber").returns(10);

        sendPaymentRequestToApi(100, 20);

        assert(spyLog.calledWith("The total is: 10"));
        assert(stubCalc.calledWith("SUM", 100, 20));

        spyLog.restore();
        stubCalc.restore();
    });
});

