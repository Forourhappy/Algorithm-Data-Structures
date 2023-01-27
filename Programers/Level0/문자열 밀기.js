function solution(A, B) {
	if (A === B) return 0;
	const length = A.length;
	for (let i = 1; i < length; i++) {
		let cutStr = A.slice(-i);
		let pushStr = cutStr + A.slice(0, -i);
		if (pushStr === B) return i;
	}
	return -1;
}

// 다른 사람의 풀이
function solution(A, B) {
	return (B + B).indexOf(A);
}
