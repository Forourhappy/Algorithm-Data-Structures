function solution(n) {
    let s = 1, e = 1, sum = 1, result = 0
    while (s <= n) {
        if (s > Math.floor(n / 2)) {
            return result + 1
        }
        if (sum < n) {
            e++
            sum += e
        } else if (sum > n) {
            sum -= s
            s++
        } else if (sum === n) {
            result++
            e++
            sum = sum - s + e
            s++
        }
    }
    return result
}