function solution(my_string) {
	const numList = my_string.match(/[0-9]+/g);
	return numList !== null ? numList.reduce((acc, cur) => acc + +cur, 0) : 0;
}

console.log(solution('avb'));
