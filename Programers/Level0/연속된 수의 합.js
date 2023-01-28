function solution(num, total) {
	let start = 1;
	let end = num;
	let sum = 0;
	for (let i = start; i <= end; i++) {
		sum += i;
	}
	while (true) {
		if (sum < total) {
			start++;
			end++;
			sum += end - (start - 1);
		} else if (sum > total) {
			start--;
			end--;
			sum += start - (end + 1);
		} else return Array.from({ length: num }, (_, idx) => idx + start);
	}
}

// 다른 풀이
function solution(num, total) {
	const middle = Math.ceil(total / num);
	const min = middle - Math.floor(num / 2);

	return Array.from({ length: num }, (_, idx) => idx + min);
}
