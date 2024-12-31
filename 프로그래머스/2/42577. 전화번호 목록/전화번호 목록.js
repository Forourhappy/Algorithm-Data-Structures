function solution(phone_book) {
    const map = {};
    for (const word of phone_book) {
        map[word] = true;
    }
    for (const word of phone_book) {
        for (let i = 1; i < word.length; i++) {
            const prefix = word.slice(0, i);
            if (map[prefix]) return false;
        }
    }
    return true;
}