function solution(id_pw, db) {
	const correctId = db.map(i => {
		if (i[0] === id_pw[0]) return i[0];
	});
	const isLogin = db.map((i, idx) => {
		if (correctId[idx]) {
			return i[1] === id_pw[1] ? 'login' : 'wrong pw';
		} else return 'fail';
	});
	if (isLogin.includes('login')) return 'login';
	else if (isLogin.includes('wrong pw')) return 'wrong pw';
	else return 'fail';
}
