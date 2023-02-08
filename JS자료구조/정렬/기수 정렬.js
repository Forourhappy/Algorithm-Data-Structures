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
