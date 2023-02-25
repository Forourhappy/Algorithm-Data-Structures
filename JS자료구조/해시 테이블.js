// Hash Table
// <조건>
// 1. 빨라야 한다 (항상 상수 시간)
// 2. 일관된 분배. 다른 요소들과 겹치지 않게 하기
// 3. 같은 입력 시 같은 값을 출력

// 간소하게 string만 다룬다

// 무작위성을 더 높일 때(버킷에 들어가는 데이터를 더 흩뿌릴 때)
// 짝수의 값을 가졋을 때보다 소수의 값을 가졌을 때,
// 와 비교해서 충돌값이 매우 적어진다.

// 충돌을 피하는 법 2 가지
// 1. Separate Chaining(개별 체이닝)
// 같은 장소에 여러 데이터를 저장할 때, 배열이나 연결리스트같은 이중 데이터 구조로 저장한다.
// 2. Linear Probing(직선 탐색법)
// 충돌이 발생하면 다믕 빈칸이 어디인지 확인.


// Set / Get
// 1. key와 value를 set한다
// 2. key를 hash 처리한다
// 3. Separate Chaning을 통해 key-value 쌍을 해시 테이블 배열에 저장한다

// 1. key를 get한다
// 2. key를 hash 처리한다
// 3. 해시 테이블 배열에서 그 value를 확인한다
// 4. key가 존재하지 않는다면 undefinded 리턴

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        // 최대 100번째까지만 루프
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        // index에 아무것도 없다면 빈 배열 삽입
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
        return index;
    }

    get(key) {
        // key를 hash 처리
        let index = this._hash(key);
        // 그 값이 keyMap에 존재한다면,
        if (this.keyMap[index]) {
            // Separate Chaining으로 저장했으므로 안에 있는 요소를 탐색
            for (let i = 0; i < this.keyMap[index].length; i++) {
                // key를 확인해서 같다면
                if (this.keyMap[index][i][0] === key) {
                    // value를 반환
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

    // 여기서는 겹치는 key에 대해서 처리를 해주지 않아 key가 두 번 나온다
    // 대부분의 프로그래밍 언어에서는 겹치는 key는 덮어 쓰여진다
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
}

// 시간 복잡도 (평균적으로)
// Insertion - O(1)
// Deletion - O(1)
// Access - O(1)

// hash table에 한 인덱스에 들어가는 경우(매우 좋지 못하게 만들어졌을 때)
// O(n)의 시간 복잡도를 가진다 (리스트와 같음)

const hashTable = new HashTable();
console.log(
    hashTable.set("hello world", "goodbye!!"),
    hashTable.set("dogs", "cats"),
    hashTable.set("wooooooow", "loooooool"),
    hashTable.set("i love", "chicken"),
    hashTable.get("dogs")
)

