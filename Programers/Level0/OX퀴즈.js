function solution(quiz) {
	return quiz.map(i => {
		const question = i.split(' ');
		if (question[1] === '+') {
			if (+question[0] + +question[2] === +question[4]) return 'O';
			else return 'X';
		} else {
			if (question[0] - question[2] === +question[4]) return 'O';
			else return 'X';
		}
	});
}
