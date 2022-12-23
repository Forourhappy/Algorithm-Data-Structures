function solution(order) {
	return order
		.toString()
		.split('')
		.filter(i => ['3', '6', '9'].includes(i)).length;
}
