function solution(s) {
    const visitList = {};
    const result = [];

    const visit = (char, index) => {
        visitList[char] = index;
    }

    for (let i = 0; i < s.length; i++) {
        if (visitList[s[i]] !== undefined) result.push(i - visitList[s[i]]);
        else result.push(-1);
        visit(s[i], i);
    }
    return result;
}