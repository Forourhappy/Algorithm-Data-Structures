const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#']
].reverse();

function solution(numbers, hand) {
    let posL = [0, 0]
    let posR = [2, 0]
    const result = numbers.map(number => {
		const target = setCoordinate(number);
        switch (number) {
			case 1:
			case 4:
			case 7:
				posL = target
				return 'L'
			case 3:
			case 6:
			case 9:
				posR = target
				return 'R'
			default:
				const result = calcDistance({ target, posL, posR, hand  })
				if (result === 'R') {
					posR = target;
				} else {
					posL = target;
				}
				return result;
    	}
    })
    return result.join('');
}

function calcDistance({ target, posL, posR, hand}) {
	const [x, y] = target;
    const [xL, yL] = posL
	const [xR, yR] = posR;

	const distanceL = Math.abs(x - xL) + Math.abs(y - yL);
	const distanceR = Math.abs(x - xR) + Math.abs(y - yR);

	if (distanceL < distanceR) {
		return 'L'
	}

	if (distanceL > distanceR) {
		return 'R'
	}
	
	return hand[0].toUpperCase();
}

function setCoordinate(num) {
    let x, y;
    keypad.forEach((row, idx) => {
        const result = row.findIndex(v => v === num);
        if (result !== -1) {
            x = result;
            y = idx;
        }
    })
    return [x, y]
}
