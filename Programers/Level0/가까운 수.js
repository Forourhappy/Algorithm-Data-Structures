function solution(array, n) {
	let num = array[0];
	let distance = Math.abs(n - num);

	array.map(i => {
		const nextDistance = Math.abs(n - i);
		if (nextDistance < distance) {
			distance = nextDistance;
			num = i;
		} else if (nextDistance === distance) {
			num = Math.min(num, i);
		}
	});
	return num;
}
