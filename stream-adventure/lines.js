/*
var split = require("split");
var through = require("through2");
var count = 1;

var tr = through(function (buf, _, next) {
	if (count % 2 === 0) {
		this.push(buf.toString().toUpperCase());
	} else {
		this.push(buf.toString().toLowerCase());
	}
	this.push("\n");
	count++;
	next();
}); 

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
*/
var through = require("through2");
var split = require("split");
var lineCount = 0;

var tr = through(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineCount % 2 === 0 ? line.toLowerCase() + "\n" : line.toUpperCase() + "\n");
    lineCount++;
    next();
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);