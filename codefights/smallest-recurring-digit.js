/*
You are given two integers L and R. 
What single digit occurs the most often in all the numbers between them (inclusive)? 
If there is more than one solution, return the smallest one.

Solution:
for all digits between L and R, split the number into an array and add the numbers to a total counting array.
set the recurring number to 0, largest count to count of 0, update the recurring number if the count is larger than the current count
*/

function digit(L, R) {
	var countArray = new Array(10);
	for (var i = 0; i < 10; i++) {
		countArray[i] = 0;
	}
	for (var j = L; j <= R; j++) {
		var strArray = (""+j).split("");
		for (var k = 0; k < strArray.length; k++) {
			countArray[parseInt(strArray[k],10)] += 1;
		}
	}
	var recurring = 0, count = countArray[0];
	for (var m = 1; m < 10; m++) {
		if (countArray[m] > count) {
			recurring = m;
			count = countArray[m];
		}
	}
	return recurring;
}

console.log(digit(1,1000000));