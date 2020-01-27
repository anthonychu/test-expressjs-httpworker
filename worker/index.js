var http = require('http');

var server = http.createServer(function(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        res.setHeader("Content-type", "text/html");
        res.writeHead(200);
        res.end(`<h1>${req.url}</h1><pre>Headers:\n${JSON.stringify(req.headers, null, 2)}\n\nBody:\n${body}</pre>`);
    });
});
server.listen(8080);