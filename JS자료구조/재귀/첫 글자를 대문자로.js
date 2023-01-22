// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
	if (arr.length === 0) return [];
	let newStr = '';
	newStr = arr[0][0].toUpperCase() + arr[0].slice(1);
	return [newStr, ...capitalizeFirst(arr.slice(1))];
}

capitalizeFirst(['car', 'taco', 'banana']); // ['Car','Taco','Banana']

console.log(
	capitalizeFirst(['car', 'taco', 'banana']) // ['Car','Taco','Banana']
);

// 다른 풀이
function capitalizeWords(array) {
	if (array.length === 1) {
		return [array[0].toUpperCase()];
	}
	let res = capitalizeWords(array.slice(0, -1));
	res.push(array.slice(array.length - 1)[0].toUpperCase());
	return res;
}
