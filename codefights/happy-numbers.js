/*
Find All Happy Numbers in the Given Range

A happy number is a number defined by the following process:
Given a positive integer, replace it by the sum of the squares of its digits, and repeat the process until the number 
either equals 1 (it will not change any further), or it loops endlessly in a cycle which does not include 1. Those 
numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or 
sad numbers).

Find all happy numbers in the given range [1..Range], inclusive.

Example:
70 -> 72 + 0 = 49
49 -> 42 + 92 = 16 + 81 = 97
97 -> 92 + 72 = 81 + 49 = 130
130 -> 12 + 32 + 0 = 1 + 9 = 10
10 -> 12 + 0 = 1
Hence 70 is a happy number.

Solution:
- First step is to split the number into individual digits. To accomplish this I converted the number into a str and used
the String.split("") method to obtain an array of individual digits.
- Next I found the sum of the squares of each digit using a for loop to loop through all indices of the array and adding
the product of array[i] to a sum variable
- If the sum variable is not 1, repeat from the first step. So I created a do-while loop to check the value of the sum 
variable and repeat if needed.
- When repeating, the sum variable must be mapped to the new str variable and made to equal 0.
- After running some tests, I notice that if the sum is 4, the loop will not be able to end. Therefore I added a condition 
for the function to return false if the sum variable equals to 4. This solves the problem of having to loop through 
indefinitely to determine unhappy numbers.$
- After completing the isHappy function, I ran a test from 1 to 2000 to determine if there were any other numbers which 
resulted in an endless loop and found none.
- The solution will loop through each number and call the isHappy function to detemine if it is a happy number. It will 
then add to the result array if it is.
*/

function isHappy(n){
	var sum, str = "" + n;
	do {
		sum = 0;
		var array = str.split("");
		for (var i = 0; i < array.length; i++) {
			sum += array[i] * array[i];
		}
		if (sum === 4) return false;
		str = "" + sum;
	} while (sum > 1);
	return true;
}

function HappyNumbers(Range) {
	var result = [];
	for (var j = 1; j <= Range; j++) {
		if (isHappy(j)) result.push(j);
	}
	return result;
}

console.log(HappyNumbers(2000));