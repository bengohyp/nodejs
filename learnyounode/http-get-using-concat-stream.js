var http = require("http");
var concatStream = require("concat-stream");

http.get(process.argv[2], function (response) {
	response.pipe(concatStream(function (data) {
		console.log(data.toString().length);
		console.log(data.toString());
	}));
});