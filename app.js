const http = require('http');

const server = http.createServer((req,res) => {
    console.log("supriya barik");
});

server.listen(4000);