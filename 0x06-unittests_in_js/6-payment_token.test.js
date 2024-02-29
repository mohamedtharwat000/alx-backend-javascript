const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token.js')

describe('getPaymentTokenFromAPI', () => {
    it('should resolve with successful response when success is true', (done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            assert.deepStrictEqual(response, { data: 'Successful response from the API' });
            done();
        }).catch(error => {
            done(error);
        });
    });
});
