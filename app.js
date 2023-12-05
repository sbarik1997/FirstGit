const http = require('http');
const fs = require('fs');

// const server = http.createServer((req,res) => {
    // console.log("supriya barik");
//     const url = req.url;
//     if(url === '/home'){
//         res.setHeader('Content-Type','text/html');
//         res.end("<h1>Welcome home</h1>");
//         return;
//     }else if(url === '/about'){
//         res.setHeader('Content-Type','text/html');
//         res.end('<h1>Welcome to About Us page</h1>');
//         return;
//     }else if(url === '/node'){
//         res.setHeader('Content-Type','text/html');
//         res.end('<h1>Welcome to my Node Js project</h1>');
//         return;
//     }else{
//         res.setHeader('Content-Type','text/html');
//         res.end("<h1>404 not found</h1>");
//         return;
//     }
//     console.log(req.url, req.headers, req.method);
//        res.setHeader('Content-Type','text/html');
//        res.write('<html>')
//        res.write('<head><title>My first page</title></head>')
//        res.write('<body><h1>Welcome to my Node js Server</h1></body>')
//        res.write('</html>')
    
// });

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){

        const data = fs.readFileSync('messege.txt','utf-8');

        res.write('<html>');
        res.write('<head><title>Enter messege</title></head>');
        res.write(`<body>${data}</body>`);
        res.write(`<body><form action="/messege" method="POST"><input type="text" name="messege"><button>Send</button></form></body>`);
        res.write('</html>');
        return res.end();
    }

    if(url === '/messege' && method === 'POST'){
    const body = [];
    req.on('data',(chunk) => {
       console.log(chunk); 
       body.push(chunk);
    });
    
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const messege = parsedBody.split('=')[1];
        fs.writeFileSync('messege.txt', messege);
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    });

    }

})

server.listen(4000);