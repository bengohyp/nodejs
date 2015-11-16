/*
Consider a string of lowercase Latin letters and space characters (' '). Rearrange the letters in each word alphabetically, 
and then rearrange the words in ascending order of the sum of their characters' ASCII values.
Return the result.

Example:

Revamp("batman is bruce wayne") = "is bceru aenwy aamntb".
After rearranging the letters the string turns into
"aamntb is bceru aenwy".
The ASCII values of each word are: [627, 220, 529, 548].
After sorting the words the following string is obtained:
"is bceru aenwy aamntb" (with ASCII values of [220, 529, 548, 627]).

Revamp("peter parker is spiderman") = "is eeprt aekprr adeimnprs"
ASCII values: [220, 554, 645, 963].

Revamp("codefights is heaven") = "is aeenhv cdefghiost"
ASCII values: [220, 631, 963].
*/

function getAsciiValue(str) {
  var asciiValue = 0;
  for (var i = 0; i < str.length; i += 1) {
    asciiValue += str.charCodeAt(i);
  }
  return asciiValue;
}

function Revamp(N) {
  var array = N.split(" ");
  for (var i = 0; i < array.length; i += 1) {
    var strArray = array[i].split("");
    array[i] = strArray.sort().join("");
  }
  var ascii = new Array(array.length);
  for (var j = 0; j < array.length; j += 1) {
    ascii[j] = new Array(2);
    ascii[j][1] = array[j];
  }
  for (var k = 0; k < ascii.length; k += 1) {
    ascii[k][0] = getAsciiValue(ascii[k][1]);
  }
  ascii = ascii.sort(function (a, b) { return a[0] - b[0]});
  for (var m = 0; m < ascii.length; m += 1) {
    array[m] = ascii[m][1];
  }
  return array.join(" ");
}

console.log(Revamp("batman is bruce wayne"));
console.log(Revamp("peter parker is spiderman"));
console.log(Revamp("codefights is heaven"));