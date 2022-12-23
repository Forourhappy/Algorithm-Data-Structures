const numbers = 'oneoneoneone';
function solution(numbers) {
	const number = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
	];

	const length = number.length;
	for (let i = 0; i < length; i++) {
		const regex = new RegExp(number[i], 'g');
		numbers = numbers.replace(regex, i);
	}
	return +numbers;
}
