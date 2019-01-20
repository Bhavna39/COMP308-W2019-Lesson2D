const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=> {
    res.statusCode = 200; //ok
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from Bhavna Pulliahgari\nStudent Id: 300931671\nCOMP308-W2019-SECTION-004');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});