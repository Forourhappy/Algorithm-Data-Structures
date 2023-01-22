// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
	// 배열을 푸는 건 스프레드 문법으로.
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			newArr = [...newArr, ...flatten(arr[i])];
		} else newArr = [...newArr, arr[i]];
	}
	return newArr;
}

flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]]); // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3

console.log(
	flatten([1, 2, 3, [4, 5]]), // [1, 2, 3, 4, 5]
	flatten([1, [2, [3, 4], [[5]]]]), // [1, 2, 3, 4, 5]
	flatten([[1], [2], [3]]), // [1,2,3]
	flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
);
