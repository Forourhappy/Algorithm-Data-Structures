function solution(food) {
	let foodTable = [];
	for (let i = 1; i < food.length; i++) {
		foodTable = [...foodTable, Math.floor(food[i] / 2)];
	}
	const halfTable = foodTable.reduce((acc, cur, idx) => {
		let plate = '';
		for (let i = 1; i <= cur; i++) {
			plate += idx + 1;
		}
		return acc + plate;
	}, []);
	return halfTable + 0 + halfTable.split('').reverse().join('');
}
