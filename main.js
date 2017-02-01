// Creates an array that contains the letters of the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(alphabet);
var output = "";

//A function that prints a stack of letters to the array
function stackLetters (array) {
     for (var i = 0; i < array.length; i++) {
     	output += array[i];
     	console.log(output);
	}
}

//A function that does the same, but adds a space after each three letter group. Logic:
//If arr.leng === 3, add a space.
//After that, if arr.leng-3 % 4, add a space.

function stackLettersByThrees (array) {
     for (var i = 0; i < array.length; i++) {
		output += array[i];
		if (output.length === 3) {
			output += " ";
			console.log(output);
		} else if ((output.length - 3) % 4 === 0) {
			output += " ";
			console.log(output);
		} else {
			console.log(output);
		}
	}
}

stackLetters(alphabet);
output = "";
stackLettersByThrees(alphabet);