module.exports = function (dirName, extName, callback) {
	var fs = require("fs"), path = require("path"), filteredList = [];
	fs.readdir(dirName, function (err, list) {
		if (err) return callback(err);
		
		list = list.filter(function (file) {
			return path.extname(file) === '.' + extName;
		});
		
		return callback (null, list);
	});
};