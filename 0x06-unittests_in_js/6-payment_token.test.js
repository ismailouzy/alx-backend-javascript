const chai = require('chai');
const expect = chai.expect;

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should do nothing when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((result) => {
        expect(result).to.be.undefined;
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
