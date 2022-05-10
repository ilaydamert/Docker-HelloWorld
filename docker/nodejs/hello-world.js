var http = require('http');
var options = {method: 'GET' }


var server = http.createServer(function (req, res) {
    if(req.url==='/node'){
        res.write('Hello world from Node.JS!')
        res.end();
    }
    if(req.url==='/nodejs'){
        res.write('Hello world from Node.JS!')
        res.end();
    }
}).listen(5555)
