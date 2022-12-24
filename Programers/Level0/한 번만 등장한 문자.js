function solution(s) {
	const duplicateList = [];
	let answer = [];
	s.split('').map(i => {
		if (!duplicateList.includes(i)) {
			duplicateList.push(i);
			answer.push(i);
		} else {
			answer = answer.filter(char => char !== i);
		}
	});
	return answer.sort().join('');
}

// 다른 사람의 코드
function solution(s) {
	const answer = [];
	s.split('').map(i => {
		if (s.indexOf(i) === s.lastIndexOf(i)) answer.push(i);
	});
	return answer.sort().join('');
}
