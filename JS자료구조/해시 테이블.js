// Hash Table
// <조건>
// 1. 빨라야 한다 (항상 상수 시간)
// 2. 일관된 분배. 다른 요소들과 겹치지 않게 하기
// 3. 같은 입력 시 같은 값을 출력

// 간소하게 string만 다룬다
function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
}