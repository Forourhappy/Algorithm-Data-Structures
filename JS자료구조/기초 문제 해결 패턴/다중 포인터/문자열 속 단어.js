// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

// Examples:

function isSubsequence(subStr, string) {
	let i = 0;
	if (!subStr) return true;
	for (let j = 0; j < string.length; j++) {
		if (subStr[i] === string[j]) i++;
		if (i === subStr.length) return true;
	}
	return false;
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

console.log(
	isSubsequence('', 'hekgsdnfk'),
	isSubsequence('hello', 'hello world'), // true
	isSubsequence('sing', 'sting'), // true
	isSubsequence('abc', 'abracadabra'), // true
	isSubsequence('abc', 'acb') // false (order matters)
);

// 재귀 사용
function isSubsequence(str1, str2) {
	if (str1.length === 0) return true;
	if (str2.length === 0) return false;
	if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
	return isSubsequence(str1, str2.slice(1));
}
