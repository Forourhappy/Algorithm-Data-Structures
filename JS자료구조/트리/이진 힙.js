// 우선순위 큐에 사용

// Max Binary Heap
// 부모 노드는 자식 노드보다 값이 큼
// 값은 왼쪽부터 채워짐
// 왼쪽과 오른쪽 형제 사이에 순서는 없음
// 부모의 인덱스는 Math.floor((index-1)/2)

// Min Binary Heap
// 두 자식의 값은 부모 노드의 값보다 큼
// 자식의 인덱스는 index * 2 + 1, index * 2 + 2

class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
        return this;
    }

    bubbleUp() {
        // 삽입한 값의 인덱스
        let index = this.values.length - 1;
        while (index > 0) {
            // 삽입한 값의 부모 인덱스
            let parentIdx = Math.floor((index - 1) / 2);
            // 삽입한 값이 부모보다 작다면 종료
            if (this.values[parentIdx] >= this.values[index]) break;
            // 아니라면 서로 자리 바꾸기
            [this.values[index], this.values[parentIdx]] = [this.values[parentIdx], this.values[index]];
            // 삽입한 값의 인덱스 위치를 업데이트
            index = parentIdx;
        }
    }

}