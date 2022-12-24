function solution(my_string) {
	const strList = my_string.split(' ');
	let sum = +strList[0];
	strList.map((i, idx, arr) => {
		if (i === '+') sum += +arr[idx + 1];
		else if (i === '-') sum -= +arr[idx + 1];
	});
	return sum;
}
