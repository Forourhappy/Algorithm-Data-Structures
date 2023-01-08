// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)
// 각 자리의 숫자가 똑같이 등장하는지
function sameFrequency(num1, num2) {
	const string1 = num1.toString().split('');
	const string2 = num2.toString().split('');
	if (string1.length !== string2.length) return false;
	const count1 = {};

	for (let num of string1) {
		count1[num] = (count1[num] || 0) + 1;
	}

	for (let num of string2) {
		if (!count1[num]) return false;
		else count1[num] -= 1;
	}
	return true;
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false

console.log(
	sameFrequency(182, 281), // true
	sameFrequency(34, 14), // false
	sameFrequency(3589578, 5879385), // true
	sameFrequency(22, 222) // false
);
