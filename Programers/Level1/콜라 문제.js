function solution(a, b, n) {
	// 빈 병 a개 당 받는 콜라의 개수는 b
	// 현재 가지고 있는 빈 병의 개수 n
	let rest = n;
	let result = 0;
	while (rest >= a) {
		let newCola = Math.floor(rest / a) * b;
		result += newCola;
		rest = (rest % a) + newCola;
	}
	return result;
}

b = 1;
c = 1;
a = 1;
