// isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {
	if (str.length <= 1) return true;
	if (str[0] === str[str.length - 1]) {
		isPalindrome(str.slice(1, -1));
		return true;
	} else return false;
}

isPalindrome('awesome'); // false
isPalindrome('foobar'); // false
isPalindrome('tacocat'); // true
isPalindrome('amanaplanacanalpanama'); // true
isPalindrome('amanaplanacanalpandemonium'); // false

console.log(
	isPalindrome('awesome'), // false
	isPalindrome('foobar'), // false
	isPalindrome('tacocat'), // true
	isPalindrome('amanaplanacanalpanama'), // true
	isPalindrome('amanaplanacanalpandemonium') // false
);
