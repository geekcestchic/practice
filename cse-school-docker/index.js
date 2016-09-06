var generateName = require('sillyname');

require('http').createServer(function (req, res) {
    res.end('my name is: ' + generateName())
}).listen(8080)

console.log('Listening at http://localhost:8080')