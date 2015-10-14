function FaultyOdometer(n) {
	var int = parseInt(n, 10) + 5;
	var base9 = parseInt(int.toString(), 9);
	var result = base9 - 5;
	return result;
}

console.log(FaultyOdometer(process.argv[2]));