function solution(s) {
    const sortStr = s.split(' ').sort((a, b) => a - b);
    return `${sortStr[0]} ${sortStr[sortStr.length-1]}`
}
