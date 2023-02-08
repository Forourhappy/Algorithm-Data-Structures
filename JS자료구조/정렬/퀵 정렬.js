function pivot(arr, start = 0, end = arr.length + 1) {
	// 배열의 값을 서로 바꾸는 함수
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};
	// pivot = 선택 요소
	// 편의상 가장 첫 번째 값을 pivot으로 지정
	let pivot = arr[start];
	// pivot보다 작은 값의 수
	let swapIdx = start;

	// pivot을 기준으로 작은 값과 큰 값 나누기
	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}
	// pivot을 올바른 인덱스에 위치시키기
	// 작은 값들, pivot, 큰 값들
	swap(arr, start, swapIdx);

	return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length) {
	// 재귀는 요소가 하나일 때까지 반복된다
	if (left < right) {
		let pivotIdx = pivot(arr, left, right);
		// pivot 기준 왼쪽 요소들 정렬(정확히는, 왼쪽 요소들 각각의 pivot의 위치 결정)
		quickSort(arr, left, pivotIdx - 1);
		// pivot 기준 오른쪽 요소들 정렬
		quickSort(arr, pivotIdx + 1, right);
	}
	return arr;
}

// 시간 복잡도
// 최선: O(n log n)
// 평균: O(n log n)
// 최악: O(n^2)
// 이미 정렬된 배열을 정렬할 경우, 탐색에 n, 정렬에 n의 시간을 소요.

// 공간 복잡도
// O(log n)