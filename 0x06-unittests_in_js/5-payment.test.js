const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleLogSpy;

  beforeEach(function() {
    // Create a spy on console.log before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the spy after each test
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" for inputs 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log is called with the correct message
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    
    // Verify that console.log is only called once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" for inputs 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log is called with the correct message
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    
    // Verify that console.log is only called once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});
