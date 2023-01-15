// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// Time Complexity - O(n)

// 중복되지 않는 가장 긴 문자열 찾기
function findLongestSubstring(str) {
	if (str.length === 0) return 0;
	const appearedStr = {};
	let start = 0;
	let end = 0;
	let maxLen = 0;

	while (start < str.length) {
		if (!appearedStr[str[end]] && end < str.length) {
			appearedStr[str[end]] = str[end];
			end++;
			maxLen = Math.max(maxLen, end - start);
		} else {
			delete appearedStr[str[start]];
			start++;
		}
	}
	return maxLen;
}
// i;
// ('rithmschool');
// j;
findLongestSubstring(''); // 0
findLongestSubstring('rithmschool'); // 7
findLongestSubstring('thisisawesome'); // 6
findLongestSubstring('thecatinthehat'); // 7
findLongestSubstring('bbbbbb'); // 1
findLongestSubstring('longestsubstring'); // 8
findLongestSubstring('thisishowwedoit'); // 6

console.log(
	findLongestSubstring(''), // 0
	findLongestSubstring('rithmschool'), // 7
	findLongestSubstring('thisisawesome'), // 6
	findLongestSubstring('thecatinthehat'), // 7
	findLongestSubstring('bbbbbb'), // 1
	findLongestSubstring('longestsubstring'), // 8
	findLongestSubstring('thisishowwedoit') // 6
);

// 다른 풀이
function findLongestSubstring(str) {
	let longest = 0;
	let seen = {};
	let start = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		// 이미 나온 문자열이면
		if (seen[char]) {
			// 문자열이 나왔던 위치와 시작 위치 중 더 큰 곳에서 시작
			start = Math.max(start, seen[char]);
		}
		// 이전에 나온 길이와 시작점에서 현재 위치까지의 길이 중 더 큰 값을 할당
		longest = Math.max(longest, i - start + 1);
		// 현재 문자열을 저장 (i+1인 이유는 0일때는 false라서 그런 것으로 추정)
		seen[char] = i + 1;
	}
	return longest;
}
