// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:

// Time Complexity - O(n)

// Space Complexity - O(1)

// num보다 크가나 같은 합을 가진 최소 길이의 배열
function minSubArrayLen(arr, num) {
	let start = 0;
	let end = 0;
	let sum = 0;
	let minLen = Infinity;

	while (start < arr.length) {
		// sum이 num 보다 작을 때
		if (sum < num && end < arr.length) {
			// 현재값을 더하고
			sum += arr[end];
			// 창을 늘린다
			end++;
			// sum이 num 보다 클 때
		} else if (sum >= num) {
			// sum의 영역은 현재 창의 영역보다 1 작다
			minLen = Math.min(minLen, end - start);
			// 창의 시작 위치 값을 빼고
			sum -= arr[start];
			// 창을 앞으로 전진
			start++;
		} else {
			// end는 arr의 끝보다 커진 상태.
			// break가 없으면 무한 반복에 빠짐.
			break;
		}
	}
	return minLen === Infinity ? 0 : minLen;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0

console.log(
	minSubArrayLen([2, 3, 1, 2, 4, 3], 7), // 2 -> because [4,3] is the smallest subarray
	minSubArrayLen([2, 1, 6, 5, 4], 9), // 2 -> because [5,4] is the smallest subarray
	minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52), // 1 -> because [62] is greater than 52
	minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39), // 3
	minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), // 5
	minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11), // 2
	minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
);
