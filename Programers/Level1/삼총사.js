function solution(number) {
	// 모두 한 번씩 훑어서 보는 방법. 3중 for문.
	let sum = 0;
	let count = 0;
	for (let i = 0; i < number.length; i++) {
		for (let j = i + 1; j < number.length; j++) {
			for (let k = j + 1; k < number.length; k++) {
				sum = number[i] + number[j] + number[k];
				if (sum === 0) count++;
				sum = 0;
			}
		}
	}
	return count;
}

// 다른 사람의 풀이.
function solution(number) {
	let result = 0;

	const combination = (current, start) => {
		// current의 원소가 3개일 때, 모든 합이 0이라면 result에 1추가
		if (current.length === 3) {
			result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
			return;
		}
		// 모든 경우의 수를 탐색.
		for (let i = start; i < number.length; i++) {
			combination([...current, number[i]], i + 1);
		}
	};
	combination([], 0);
	return result;
}
