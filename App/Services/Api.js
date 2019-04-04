// a library to wrap and simplify api calls
import apisauce from 'apisauce';

export default apisauce.create({
  // base URL is read from the "constructor"
  baseURL: 'https://api.github.com/',
  // here are some default headers
  headers: {
    'Cache-Control': 'no-cache',
  },
  // 10 second timeout...
  timeout: 10000,
});
