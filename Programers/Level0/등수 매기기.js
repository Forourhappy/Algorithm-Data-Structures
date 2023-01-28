function solution(score) {
	// 영어, 수학의 합 배열을 만든다. 상대적인 크기 비교니까 평균은 생략.
	const scoreSum = score.map(([eng, math]) => eng + math);
	// 랭크 산정
	// 배열을 복사하고 큰 값 순으로 정렬
	// 합과 랭크를 객체로 저장
	// 이전 값과 비교해서 값이 같으면 랭크를 같도록 수정
	const rank = [...scoreSum]
		.sort((a, b) => b - a)
		.map((sum, idx) => ({ sum, rank: idx + 1 }))
		.map((i, idx, arr) =>
			idx > 0 && i.sum === arr[idx - 1].sum
				? { ...i, rank: arr[idx - 1].rank }
				: i
		);

	// 원래 순서대로 등수 매기기
	// sum이 같으면 등수도 같음을 이용
	return scoreSum.map(_sum => rank.find(({ sum }) => sum === _sum).rank);
}
