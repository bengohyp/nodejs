/*
You're given a digit N.

Your task is to return "1234...N...4321".
*/

function Palindromic_Number(N) {
	var result = "";
	for (var i = 1; i < N; i++) {
		result += i;
	}
	result += N;
	for (var j = N - 1; j > 0; j--) {
		result += j;
	}
	return result;
}

console.log(Palindromic_Number(10));
