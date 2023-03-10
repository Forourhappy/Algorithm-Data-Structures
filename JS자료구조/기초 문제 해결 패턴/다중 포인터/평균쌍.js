// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:
// 한 쌍의 평균이 목표 평균 avg와 같은 값이 존재하는지
function averagePair(arr, avg) {
	let start = 0;
	let end = arr.length-1;
	let tempAvg = 0;
	while (end > start) {
		tempAvg = (arr[start] + arr[end]) / 2;
		if (tempAvg === avg) return true;
		else if (tempAvg < avg) start++;
		else end--;
	}
	return false;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false

console.log(
	averagePair([1, 2, 3], 2.5), // true
	averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), // true
	averagePair([-1, 0, 3, 4, 5, 6], 4.1), // false
	averagePair([], 4) // false
);
