function processData(input) {
    var inputArray = input.split("\n");
	var sumArray = inputArray[1].split(" ");
	var sum = 0;
	for (var i = 0; i < sumArray.length ; i++) {
		sum += Number(sumArray[i]);
	}
	console.log(sum);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});