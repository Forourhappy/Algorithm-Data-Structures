// 입력값을 잘못 생각. cur을 한 자리 수라고 생각해서 고생함.
function solution(polynomial) {
	let [x, integer] = polynomial.split(' + ').reduce(
		([a, b], cur) => {
			if (cur === 'x') a += 1;
			else if (isNaN(cur)) a += +cur.slice(0, -1);
			else b += +cur;
			return [a, b];
		},
		[0, 0]
	);
	// x가 0이면 생략, 1이면 x
	// 상수가 0이면 생략 or 0
	// x === 1 or 0 or x > 1
	// integer === 0 or integer > 0
	if (x === 0 && integer === 0) return 0;
	if (x === 0) return `${integer}`;
	x = x === 1 ? 'x' : `${x}x`;
	return integer === 0 ? x : `${x} + ${integer}`;
}
