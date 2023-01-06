// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// 배열 안의 고유 값들 전부 찾기
function countUniqueValues(arr) {
	// 배열의 길이가 0일 때는 0 반환
	if (arr.length === 0) return 0;
	// i는 0, j는 1부터 시작하면서 서로 값을 비교
	// 값이 같다면 j를 증가시켜서 다음 값을 비교
	// 값이 다르다면 i를 증가시키고 i의 자리에 j의 값을 대입
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
