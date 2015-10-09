var http = require("http");
var url = require("url");

function parsetime (time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	};
}

function unixtime (time) {
	return { unixtime : time.getTime() };
}

var server = http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true);
	var time = new Date(parsedUrl.query.iso);
	var result;
	
	if (/^\/api\/parsetime/.test(req.url))
		result = parsetime(time);
	else if (/^\/api\/unixtime/.test(req.url))
		result = unixtime(time);
	
	if (result) {
		res.writeHead(200, { "content-type": "application/json" });
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(Number(process.argv[2]));

/*
http.createServer(function (req, res) {
	if (req.method !== "GET") return res.end("Method must be GET\n");
	var query = url.parse(req.url, true);
	var date = new Date(query.query.iso);
	
	switch (query.pathname) {
		case "/api/parsetime":
			res.writeHead("200", { "content-type": "application/json" });
			return res.end(JSON.stringify({hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()}));
		case "/api/unixtime":
			res.writeHead("200", { "content-type": "application/json" });
			return res.end(JSON.stringify({unixtime: date.getTime()}));
		default:
			res.writeHead("404"});
			res.end();
	}
}).listen(process.argv[2]);
*/