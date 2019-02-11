const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    console.log(request.method, request.url);
    if (request.url === "/style.css") {
        const text = fs.readFileSync('style.css', 'utf8');
        response.end(text);    
    }
    else {
        const text = fs.readFileSync('index.html', 'utf8');
        response.end(text);
    }
});

console.log('port = ', process.env.PORT);
server.listen(process.env.PORT || 3000);
console.log('Server Started!');