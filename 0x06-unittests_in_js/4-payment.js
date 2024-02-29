const utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    console.log(`The total is: ${utils.calculateNumber('SUM', totalAmount, totalShipping)}`);
}

module.exports = sendPaymentRequestToApi;
