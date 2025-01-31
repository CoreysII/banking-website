// netlify/functions/transactions.js
const axios = require('axios');

exports.handler = async (event, context) => {
  // Mock data for transactions
  const transactions = [
    { date: '2025-01-01', description: 'Grocery Store', amount: -50.00 },
    { date: '2025-01-02', description: 'Salary', amount: 1500.00 },
    { date: '2025-01-03', description: 'Electricity Bill', amount: -100.00 },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(transactions)
  };
};
