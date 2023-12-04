const http = require('http');

const server = http.createServer((req,res) => {
    // console.log("supriya barik");
    const url = req.url;
    if(url === '/home'){
        res.setHeader('Content-Type','text/html');
        res.end("<h1>Welcome home</h1>");
        return;
    }else if(url === '/about'){
        res.setHeader('Content-Type','text/html');
        res.end('<h1>Welcome to About Us page</h1>');
        return;
    }else if(url === '/node'){
        res.setHeader('Content-Type','text/html');
        res.end('<h1>Welcome to my Node Js project</h1>');
        return;
    }else{
        res.setHeader('Content-Type','text/html');
        res.end("<h1>404 not found</h1>");
        return;
    }
    console.log(req.url, req.headers, req.method);
       res.setHeader('Content-Type','text/html');
       res.write('<html>')
       res.write('<head><title>My first page</title></head>')
       res.write('<body><h1>Welcome to my Node js Server</h1></body>')
       res.write('</html>')
    
});

server.listen(4000);