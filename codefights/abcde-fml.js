/*
There is a number ABCDE which fits the criteria ABCDE x 4 = EDCBA. Find the number.
*/

function abcde_fml() {
	for (var i = 0; i <= 100000; i++) {
		var array = new Array(5);
		array = i.toString().split("");
		var abcde = "" + array[0] + array[1] + array[2] + array[3] + array[4];
		abcde = parseInt(abcde * 4);
		var edcba = "" + array[4] + array[3] + array[2] + array[1] + array[0];
		if (abcde == edcba) {
			console.log(abcde + " : " + edcba);
		}
	}
}

abcde_fml();