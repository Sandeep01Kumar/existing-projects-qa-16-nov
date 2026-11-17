const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();
// Node-level setHeader, not res.set: Express would send "text/plain; charset=utf-8", but bare is required.
app.get('/', (req, res) => res.status(200).setHeader('Content-Type', 'text/plain').end('Hello, World!\n'));
app.get('/good-evening', (req, res) => res.status(200).setHeader('Content-Type', 'text/plain').end('Good evening\n'));

app.listen(port, hostname, (err) => {
  // Express also calls this on the server's 'error' event: err means a failed bind; re-throw, no readiness.
  if (err) throw err;
  console.log(`Server running at http://${hostname}:${port}/`);
});
