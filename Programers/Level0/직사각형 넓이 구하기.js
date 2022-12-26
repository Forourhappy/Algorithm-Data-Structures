function solution(dots) {
	const line1X = dots[0][0] - dots[1][0];
	const line1Y = dots[0][1] - dots[1][1];
	const line2X = dots[1][0] - dots[2][0];
	const line2Y = dots[1][1] - dots[2][1];
	if ((line1X !== 0) & (line2Y !== 0)) {
		return Math.abs(line1X * line2Y);
	} else {
		return Math.abs(line1Y * line2X);
	}
}
