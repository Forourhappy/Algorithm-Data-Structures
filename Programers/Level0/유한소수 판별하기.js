function solution(a, b) {
	const gcd = getGCD(a, b);
	let denominator = b / gcd;
	while (denominator % 2 === 0) {
		denominator /= 2;
	}
	while (denominator % 5 === 0) {
		denominator /= 5;
	}
	return denominator === 1 ? 1 : 2;
}

const getGCD = (a, b) => {
	if (b === 0) return a;
	else return getGCD(b, a % b);
};
