function validAnagram(str1, str2) {
	if (str1.length !== str2.length) return false;
	const frequencyCounter = {};
	for (let char of str1) {
		frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
	}
	for (let char of str2) {
		if (!frequencyCounter[char]) return false;
		else frequencyCounter[char] -= 1;
	}
	return true;
}

console.log(
	validAnagram('', ''), // true
	validAnagram('aaz', 'zza'), // false
	validAnagram('anagram', 'nagaram'), // true
	validAnagram('rat', 'car'), // false
	validAnagram('awesome', 'awesom'), // false
	validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'), // false
	validAnagram('qwerty', 'qeywrt'), // true
	validAnagram('texttwisttime', 'timetwisttext') // true
);
