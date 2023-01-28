function solution(common) {
	// 등차와 등비를 구별
	const distance1 = common[1] - common[0];
	const distance2 = common[2] - common[1];
	if (distance1 === distance2) return common[common.length - 1] + distance1;
	else {
		const ratio = distance2 / distance1;
		return common[0] * ratio ** common.length;
	}
}
