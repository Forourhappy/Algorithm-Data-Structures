const vocabulary = ['aya', 'ye', 'woo', 'ma'];
function solution(babbling) {
	// 문자를 돌면서
	let word = '';

	return babbling.reduce((acc, cur) => {
		for (let i = 0; i < cur.length; i++) {
			if (word.length <= 3) word += cur[i];
			else {
				word = '';
				return acc;
			}

			if (vocabulary.includes(word)) {
				word = '';
			}
		}
		if (word.length > 0) {
			word = '';
			return acc;
		} else return acc + 1;
	}, 0);
}
