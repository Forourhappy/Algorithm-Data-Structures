function solution(t, p) {
	const pLength = p.length;
	let count = 0;
	for (let i = 0; i <= t.length - pLength; i++) {
		let subStr = t.slice(i, i + pLength);
		if (subStr <= p) count++;
	}
	return count;
}
