/*
var concatStream = require("concat-stream");

process.stdin.pipe(concatStream(function (data) {
	var text = data.toString();
	var array = text.split("");
	var reverseArray = array.reverse();
	var result = reverseArray.join("");
	process.stdout.write(result);
}));
*/

var concat = require("concat-stream");

process.stdin.pipe(concat(function (src) {
	var s = src.toString().split("").reverse().join("");
	console.log(s);
}));