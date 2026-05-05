const axios = require('axios');

const api = axios.create({
  baseURL: '/api',
});

console.log('Result for /test:', api.getUri({ url: '/test' }));
console.log('Result for test:', api.getUri({ url: 'test' }));
