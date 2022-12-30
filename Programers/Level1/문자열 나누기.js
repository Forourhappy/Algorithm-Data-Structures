function solution(s) {
	// x는 목표 문자, y는 그 외 문자
	let stringCount = { x: 1 };
	let result = 0;
	// 문자의 수가 같은지 먼저 판단
	// 문자가 x인지 아닌지 판단 필요
	let firstChar = s[0];
	for (let i = 1; i < s.length; i++) {
		if (stringCount.x === stringCount.y) {
			stringCount = { x: 1 };
			firstChar = s[i];
			result++;
		} else if (s[i] === firstChar) {
			stringCount.x++;
		} else {
			stringCount.y = (stringCount.y || 0) + 1;
		}
	}
	return ++result;
}
