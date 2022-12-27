function solution(n) {
	for (let i = 1; i <= n; i++) {
		// 3의 배수가 포함되었으면 1 추가
		if (i % 3 === 0) {
			n++;
			continue;
		}
		// 자리수로 잘랐을 때, 3이 포함되는지
		if ([...i.toString()].includes('3')) n++;
	}
	return n;
}
