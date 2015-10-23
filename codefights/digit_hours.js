/*
Tony loved to watch his digital clock. He spent his days counting the number of times each digit occurred on the clock. 
Eventually it bored him. Now he wants to know how many times each digits occurs in the given period of a day. 
He doesn't know programming. Can You help him?

Example:

digit_hours("00:00:00", "00:00:00") = [6,0,0,0,0,0,0,0,0,0]
digit_hours("23:59:58", "23:59:59") = [0,0,2,2,0,4,0,0,1,3]
*/

function digit_hours(period_from, period_to) {
	var period_from_split = period_from.split(":");
	var period_to_split = period_to.split(":");
	var date_from = new Date(0,0,0,period_from_split[0],period_from_split[1],period_from_split[2]);
	var date_to = new Date(0,0,0,period_to_split[0],period_to_split[1],period_to_split[2]);
	
	if (date_from > date_to) return "Error";
	
	var repeat = (date_to - date_from) / 1000;
	var result = new Array(10);
	for (var i = 0; i < 10; i++) {
		result[i] = 0;
	}
	
	for (var j = 0; j <= repeat; j++) {
		var hh = date_from.getHours();
		if (hh < 10) result[0]++;
		hh = hh.toString().split("");
		for (var h = 0; h < hh.length; h++) {
			result[hh[h]]++;
		}
		
		var mm = date_from.getMinutes();
		if (mm < 10) result[0]++;
		mm = mm.toString().split("");
		for (var m = 0; m < mm.length; m++) {
			result[mm[m]]++;
		}
		
		var ss = date_from.getSeconds();
		if (ss < 10) result[0]++;
		ss = ss.toString().split("");
		for (var s = 0; s < ss.length; s++) {
			result[ss[s]]++;
		}
		
		date_from.setSeconds(date_from.getSeconds() + 1);
	}
	
	return result;
}

console.log(digit_hours("00:00:00", "01:00:00"));