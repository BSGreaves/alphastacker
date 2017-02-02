var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(alphabet);
var output = "";

function stackLetters (array) {
     for (var i = 0; i < array.length; i++) {
     	output += array[i];
     	console.log(output);
	}
}

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