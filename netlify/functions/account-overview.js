// netlify/functions/account-overview.js
const axios = require('axios');

exports.handler = async (event, context) => {
  // Mock data for account overview
  const accountData = {
    accountNumber: '123456789',
    balance: 5000.00
  };

  return {
    statusCode: 200,
    body: JSON.stringify(accountData)
  };
};
