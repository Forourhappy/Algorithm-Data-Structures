function solution(keyinput, board) {
	let result = [0, 0];
	const boardUDLR = [
		(board[1] - 1) / 2,
		-(board[1] - 1) / 2,
		-(board[0] - 1) / 2,
		(board[0] - 1) / 2,
	];
	keyinput.forEach(i => {
		if ((i === 'up') & (result[1] < boardUDLR[0])) result[1] += 1;
		else if ((i === 'down') & (result[1] > boardUDLR[1])) result[1] -= 1;
		else if ((i === 'left') & (result[0] > boardUDLR[2])) result[0] -= 1;
		else if ((i === 'right') & (result[0] < boardUDLR[3])) result[0] += 1;
		console.log(result);
	});
	return result;
}
