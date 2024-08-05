const handler = require('serve-handler');
const http = require('http');
const path = require('path');

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: path.join(__dirname, 'build'),
  });
});

server.listen(process.env.PORT || 80, () => {
  console.log('Running at http://localhost:3000');
});