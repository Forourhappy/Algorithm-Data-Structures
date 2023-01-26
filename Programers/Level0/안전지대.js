function solution(board) {
	// 지뢰가 있다면 봐야하는 인덱스는 (-1 ~ +1)
	// 예외사항. 지뢰가 시작과 끝 인덱스에 있다면 예외처리.
	const length = board.length;
	const safeZone = Array(length * length).fill(1);

	for (let y = 0; y < length; y++) {
		// 인덱스가 0일 때
		if (y === 0) {
			for (let x = 0; x < length; x++) {
				if (board[y][x] === 1) {
					if (x === 0) {
						safeZone[y * length + x + 1] = -1;
						safeZone[(y + 1) * length + x + 1] = -1;
					} else if (x !== length - 1) {
						safeZone[y * length + x + 1] = -1;
						safeZone[(y + 1) * length + x + 1] = -1;
						safeZone[y * length + x - 1] = -1;
						safeZone[(y + 1) * length + x - 1] = -1;
					} else {
						safeZone[y * length + x - 1] = -1;
						safeZone[(y + 1) * length + x - 1] = -1;
					}
					safeZone[(y + 1) * length + x] = -1;
					safeZone[y * length + x] = -1;
				}
			}
			// 인덱스가 0, length-1이 아닐 때
		} else if (y !== length - 1) {
			for (let x = 0; x < length; x++) {
				if (board[y][x] === 1) {
					if (x === 0) {
						safeZone[(y - 1) * length + x + 1] = -1;
						safeZone[y * length + x + 1] = -1;
						safeZone[(y + 1) * length + x + 1] = -1;
					} else if (x !== length - 1) {
						safeZone[(y - 1) * length + x + 1] = -1;
						safeZone[y * length + x + 1] = -1;
						safeZone[(y + 1) * length + x + 1] = -1;
						safeZone[(y - 1) * length + x - 1] = -1;
						safeZone[y * length + x - 1] = -1;
						safeZone[(y + 1) * length + x - 1] = -1;
					} else {
						safeZone[(y - 1) * length + x - 1] = -1;
						safeZone[y * length + x - 1] = -1;
						safeZone[(y + 1) * length + x - 1] = -1;
					}
					safeZone[(y - 1) * length + x] = -1;
					safeZone[y * length + x] = -1;
					safeZone[(y + 1) * length + x] = -1;
				}
			}
			// 인덱스가 length-1일 때
		} else {
			for (let x = 0; x < length; x++) {
				if (board[y][x] === 1) {
					if (x === 0) {
						safeZone[y * length + x + 1] = -1;
						safeZone[(y - 1) * length + x + 1] = -1;
					} else if (x !== length - 1) {
						safeZone[y * length + x + 1] = -1;
						safeZone[(y - 1) * length + x + 1] = -1;
						safeZone[y * length + x - 1] = -1;
						safeZone[(y - 1) * length + x - 1] = -1;
					} else {
						safeZone[y * length + x - 1] = -1;
						safeZone[(y - 1) * length + x - 1] = -1;
					}
					safeZone[(y - 1) * length + x] = -1;
					safeZone[y * length + x] = -1;
				}
			}
		}
	}
	return safeZone.filter(y => y > 0).length;
}

// 다른 사람의 풀이
function solution(board) {
	// 지뢰가 어디있는지가 아닌, 주변에 지뢰가 있는지에 초점.
	const isBombNearby = (y, x) => {
		// 지뢰의 주변 지역
		const nearby = [
			[-1, -1],
			[-1, 0],
			[-1, 1],
			[0, -1],
			[0, 1],
			[1, -1],
			[1, 0],
			[1, 1],
		];

		// 보드 안 쪽만 선택하도록 처리
		// 만약 범위 밖이라면 false
		const isInBoard = (y, x) =>
			y >= 0 && y < board.length && x >= 0 && x < board.length;

		// 지뢰가 주변에 하나라도 있다면 true
		return nearby.some(
			([dy, dx]) => isInBoard(y + dy, x + dx) && board[y + dy][x + dx] === 1
		);
	};

	let count = 0;

	for (let y = 0; y < board.length; y++) {
		for (let x = 0; x < board.length; x++) {
			if (board[y][x] !== 1 && !isBombNearby(y, x)) count += 1;
		}
	}
	return count;
}
