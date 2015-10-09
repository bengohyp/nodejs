var fs = require("fs"), str, result;

str = fs.readFileSync(process.argv[2], "utf8"); //utf8 parses result as a string
result = str.match(/\n/g).length;

console.log(result);