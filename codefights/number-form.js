/*
S is a list of numbers, sorted in ascending order.
Any number in S can be represented in the form 2i * 3j for some i, j ≥ 0.

The first numbers in S are [1, 2, 3, 4, 6, 8, 9, 12, 16].

1 = 20 * 30.
6 = 21 * 31.
12 = 22 * 31.
Write the body of a function that returns the nth element of S.

__Examples: __

NumberForm(0) = 1 as S[0] = 1.
NumberForm(4) = 6 as S[4] = 6.

[input] integer N

0 ≤ N ≤ 200.

Solution:
First, I realised that the array S is ordered in increasing value of all the possible combinations of 2^i * 3^j
Therefore, I decided to find all the possible values of 2^i * 3^j and sort them.
I started with ranges from 0 to 200 for i and j and adding all the results to an array.
I then sorted the array by integer value and returned the value of the Nth position.
After a few rounds of testing the last possible position (200), I was able to reduce the loop to a range of 0 to 23 which
improved performance.
*/

function NumberForm(N) {
	var result = [], i, j;
	for (i = 0; i <= 23; i++) {
		for (j = 0; j <= 23; j++) {
			var sum = Math.pow(2,i) * Math.pow(3,j);
			result.push(sum);
		}
	}
	result.sort(function sortNumber(a,b) {
    	return a - b;
	});
	return result[N];
}

console.log(NumberForm(process.argv[2]));