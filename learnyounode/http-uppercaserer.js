var http = require ("http");
var map = require("through2-map");

var server = http.createServer(function (req, res) {
	if (req.method !== "POST") return res.end("Method must be POST\n");
	
	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res);
});

server.listen(process.argv[2]);