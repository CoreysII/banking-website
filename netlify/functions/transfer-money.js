// netlify/functions/transfer-money.js
const axios = require('axios');

exports.handler = async (event, context) => {
  const { recipientAccount, amount } = JSON.parse(event.body);

  // Simulating a successful transfer
  const response = {
    status: 'success',
    message: `Transferred $${amount} to account ${recipientAccount}`
  };

  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
};
