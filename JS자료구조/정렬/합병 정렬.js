const merge = (arr1, arr2) => {
	// 결과 배열
	let results = [];
	// 첫 번째 배열의 인덱스
	let i = 0;
	// 두 번째 배열의 인덱스
	let j = 0;
	// 인덱스가 한 배열의 길이보다 작을 동안 반복
	while (i < arr1.length && j < arr2.length) {
		// 두 개의 배열을 비교해서 작은 값부터 results에 넣기
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	// 한 배열을 다 넣고 나면 나머지 배열의 요소를 모두 results에 넣는다.
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}
};

const mergeSort = arr => {
	// 배열의 요소가 0이나 1개일 때까지 나눈다.
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));

	return merge(left, right);
};
