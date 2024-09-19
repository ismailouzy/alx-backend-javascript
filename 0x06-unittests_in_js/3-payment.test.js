const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('should use Utils.calculateNumber with correct arguments', function() {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    
    sendPaymentRequestToApi(100, 20);
    
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(calculateNumberSpy.returnValues[0]).to.equal(Utils.calculateNumber('SUM', 100, 20));
    
    calculateNumberSpy.restore();
  });
});
