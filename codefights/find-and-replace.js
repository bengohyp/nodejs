/*
Find all occurrences of the substring in the given string and replace them with another given string...
just for fun :)
*/
function findAndReplace(originalString, stringToFind, stringToReplace) {
	var regex = new RegExp(stringToFind, "g");
	return originalString.replace(regex, stringToReplace);
}

console.log(findAndReplace("I love codefights", "I", "We"));