function solution(my_str, n) {
	const result = [];
	let i = 0;
	while (i * n < my_str.length) {
		result.push(my_str.slice(i * n, i * n + n));
		i++;
	}
	return result;
}
