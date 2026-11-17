const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();
// setHeader/end, not res.set/res.send: both add '; charset=utf-8', and the contract needs bare text/plain.
app.get('/', (req, res) => res.status(200).setHeader('Content-Type', 'text/plain').end('Hello, World!\n'));
app.get('/good-evening', (req, res) => res.status(200).setHeader('Content-Type', 'text/plain').end('Good evening\n'));

app.listen(port, hostname, (err) => {
  // Express registers this as the server's 'error' listener: err means a failed bind; re-throw, no readiness.
  if (err) throw err;
  console.log(`Server running at http://${hostname}:${port}/`);
});
