const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();
// setHeader rather than res.set, because Express expands res.set's Content-Type with "; charset=utf-8" and the contract requires exactly "text/plain".
app.get('/', (req, res) => res.status(200).setHeader('Content-Type', 'text/plain').end('Hello, World!\n'));
app.get('/good-evening', (req, res) => res.status(200).setHeader('Content-Type', 'text/plain').end('Good evening\n'));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
