// nestedEvenSum
// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

var obj1 = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: 'yup',
		},
	},
};

var obj2 = {
	a: 2,
	b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
	c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
	d: 1,
	e: { e: { e: 2 }, ee: 'car' },
};

// 객체 안의 모든 짝수의 합 반환
function nestedEvenSum(obj) {
	// Object.values로 값을 꺼내고, 짝수인지 확인.
	// 값이 중첩된 객체가 아닌지 확인.
	let sum = 0;
	for (key in obj) {
		if (typeof obj[key] === 'object') {
			sum += nestedEvenSum(obj[key]);
		} else if (obj[key] % 2 === 0) sum += obj[key];
	}
	return sum;
}

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

console.log(
	nestedEvenSum(obj1), // 6
	nestedEvenSum(obj2) // 10
);
