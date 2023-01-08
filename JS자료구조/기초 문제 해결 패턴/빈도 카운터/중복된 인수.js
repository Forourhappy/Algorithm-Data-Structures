// mplement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

function areThereDuplicates(...args) {
	const duple = {};
	args.map(i => (duple[i] = (duple[i] || 0) + 1));
	for (let i of Object.values(duple)) {
		if (i > 1) return true;
	}
	return false;
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates('a', 'b', 'c', 'a'); // true

console.log(
	areThereDuplicates(1, 2, 3), // false
	areThereDuplicates(1, 2, 2), // true
	areThereDuplicates('a', 'b', 'c', 'a') // true
);

// 다중 포인터 버전
function areThereDuplicates(...args) {
	// Two pointers
	args.sort((a, b) => a > b);
	let start = 0;
	let next = 1;
	while (next < args.length) {
		if (args[start] === args[next]) {
			return true;
		}
		start++;
		next++;
	}
	return false;
}

// Set 이용
function areThereDuplicates() {
	return new Set(arguments).size !== arguments.length;
}
