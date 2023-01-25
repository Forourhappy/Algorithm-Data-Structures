// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(str) {
	if (str.length === 0) return '';
	return [str[0].toUpperCase(), ...capitalizeWords(str.slice(1))];
}
