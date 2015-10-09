var fs = require("fs"), result;

fs.readFile(process.argv[2], "utf8", function callback(err, data) {
	if (!err) {
		result = data.toString().split("\n").length - 1;
		console.log(result);
	}
});