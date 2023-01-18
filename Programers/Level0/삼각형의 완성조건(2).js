function solution(sides) {
	// sides 중 가장 긴 변이 있는 경우
	// 나머지 한 변이 가장 긴 변인 경우
	return Math.min(...sides) * 2 - 1;
}
