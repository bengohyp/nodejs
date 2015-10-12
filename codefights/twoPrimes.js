/*
Write a function which returns true if and only if both input numbers are prime, otherwise return false.
*/

function isPrime(n) {
	if (n == 2) {
		return true;
	} else if ((n < 2) || (n % 2 === 0)) {
		return false;
	} else {
		for (var i = 3; i <= Math.sqrt(n); i += 2) {
			if (n % i === 0)
				return false;
		}
		return true;
	}
}

function TwoPrimes(a, b) {
	if (isPrime(a) && isPrime(b)) return true;
	return false;
}