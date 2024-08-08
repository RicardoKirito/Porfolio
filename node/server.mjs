// server.mjs
import { createServer } from 'node:http';
import express from 'express';
import path from 'node:path';

const app = express();
app.use(express.json());
app.use(express.static("express"));

app.get("/",function(req, res){
  res.sendFile(path.join(__dirname))
})

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});


// run with `node server.mjs`
