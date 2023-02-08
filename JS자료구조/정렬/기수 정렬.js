// radix sort
// 원하는 자리의 값을 알아내는 함수
const getDigit = (num, i) => {
	return Math.floor(Math.abs(num) / 10 ** i) % 10;
};

// 주어진 값의 자리 수를 알아내는 함수
const digitCount = num => {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// 주어진 숫자 배열에서 가장 큰 자리수를 알아내는 함수
const mostDigits = nums => {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
};

// 기수 정렬
const radixSort = (nums) => {
	let maxDigitCount = mostDigits(nums);
	// 가장 큰 자리수만큼 bucket에 값들을 담는 과정을 반복
	for(let k = 0; k < maxDigitCount; k++) {
		// 현재 계산하는 진법의 수만큼 빈 배열을 생성
		// 10진수니까 0 ~ 9까지의 배열 생성
		let digitBuckets = Array.from({length: 10}, () => []);
		// nums의 값들을 bucket에 넣기
		for(let i = 0; i < nums.length; i++) {
			// nums의 각 값의 k번째 자리의 값 알아내기
			// 즉, 현재 보고 있는 자리수의 값을 가져온다
			let digit = getDigit(nums[i], k);
			// 자리수의 값에 맞는 인덱스에 nums의 요소 넣기
			digitBuckets[digit].push(nums[i]);
		}
		// 정렬된 값을 차례로 꺼내서 새로 배열을 생성
		nums = [].concat(...digitBuckets);
	}
	return nums;
}

// 시간 복잡도
// n: 정렬할 항목 수
// k: 정렬할 항목의 길이(자리수)
// 최선: O(nk)
// 평균: O(nk)
// 최악: O(nk)

// 공간 복잡도
// O(n + k)