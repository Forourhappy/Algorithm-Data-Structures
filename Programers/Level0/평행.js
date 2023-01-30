function solution(dots) {
	const [x1, x2, x3, x4] = dots.map(i => i[0]);
	const [y1, y2, y3, y4] = dots.map(i => i[1]);

	// x1 - x2, x3 - x4
	let gradient1 = (y1 - y2) / (x1 - x2);
	let gradient2 = (y3 - y4) / (x3 - x4);

	if (gradient1 === gradient2) return 1;

	gradient1 = (y1 - y3) / (x1 - x3);
	gradient2 = (y2 - y4) / (x2 - x4);

	if (gradient1 === gradient2) return 1;

	gradient1 = (y1 - y4) / (x1 - x4);
	gradient2 = (y2 - y3) / (x2 - x3);

	if (gradient1 === gradient2) return 1;
	else return 0;
}
