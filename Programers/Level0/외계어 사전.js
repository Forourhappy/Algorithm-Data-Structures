const spell = ['p', 'o', 's'];
const dic = ['sod', 'eocd', 'qixm', 'adio', 'soo'];
function solution(spell, dic) {
	// 스펠을 체크하기 위해서는 배열 속의 문자열을 확인해야 함.
	// 배열 속의 문자열이 아닌 문자열만 돈다면 O(n^2)을 피할 수 있음.
	const dicStr = dic.join(' ');
	let spellSet = new Set(spell);
	for (i of dicStr) {
		if (spellSet.has(i)) spellSet.delete(i);
		if (i === ' ') spellSet = new Set(spell);
		if (spellSet.size === 0) return 1;
	}
	return 2;
}
