// recursiveRange
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

// SAMPLE INPUT/OUTPUT

// 1부터 num까지 합
function recursiveRange(num) {
	if (num === 1) return 1;
	return num + recursiveRange(num - 1);
}

// recursiveRange(10) // 55
// recursiveRange(6) // 21
