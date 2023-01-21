// fib
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// 피보나치 수열의 num번째 숫자 반환
function fib(num) {
	if (num < 1) return 0;
	if (num <= 2) return 1;
	return fib(num - 2) + fib(num - 1);
}

fib(4); // 3
fib(10); // 55
fib(28); // 317811
fib(35); // 9227465

console.log(
	fib(4), // 3
	fib(10), // 55
	fib(28), // 317811
	fib(35) // 9227465
);

// 헬퍼를 이용한 풀이
const fib = num => {
	const helper = (prev, now, cnt) => {
		if (cnt === 1) {
			return prev;
		}
		const next = prev + now;
		return helper(now, next, cnt - 1);
	};
	return helper(1, 1, num);
};
