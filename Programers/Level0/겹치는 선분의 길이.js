// Keyword: 방문하지 않음 = 0
function solution(lines) {
	const length = {};
	lines.forEach(([start, end]) => {
		for (let i = start + 1; i <= end; i++)
			length[i] = length[i] ? length[i] + 1 : 1;
		return length;
	});
	return Object.values(length).filter(i => i > 1).length;
}
