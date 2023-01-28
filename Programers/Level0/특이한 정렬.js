function solution(numlist, n) {
	numlist.sort((a, b) => {
		if (Math.abs(n - a) === Math.abs(n - b)) return b - a;
		else return Math.abs(n - a) - Math.abs(n - b);
	});
}
