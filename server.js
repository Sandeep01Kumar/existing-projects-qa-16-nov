const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/status') {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Length', 15);
    return res.end(JSON.stringify({ status: 'ok' }));
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
