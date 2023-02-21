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
        this.values = [];
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

    // 최대 값 추출
    extractMax() {
        // 최대 값은 루트 노드
        const max = this.values[0];
        // 맨 끝 값은 나중에 max와 바꿔줄 것
        const end = this.values.pop();
        // values가 1개일 때, max === end edgeCase 체크
        if (this.values.length > 0) {
            // end를 맨 앞으로 옮기기
            this.values[0] = end;
            this.bubbleDown();
        }
        return max
    }

    // 작은 수를 아래로 옮기는 작업
    bubbleDown() {
        // 현재 노드 위치
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            // 왼쪽 자식 노드와 오른쪽 자식 노드 인덱스
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let leftChild, rightChild;
            // index가 바뀌었는지 체크
            let swap = null;

            // 왼쪽 자식 노드가 배열의 인덱스 범위 내인지 체크
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                // 현재 노드보다 왼쪽 자식 노드의 값이 더 크다면
                // 현재 노드와 왼쪽 자식 노드를 바꾸기
                // (실제로 바뀌는 것은 오른쪽 체크도 끝난 뒤)
                if (leftChild > element) swap = leftChildIdx;
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    // 현재 노드가 왼쪽 자식 노드와 바뀌지 않고,
                    // 오른쪽 자식 노드보다 값이 더 작거나,
                    (swap === null && rightChild > element) ||
                    // 현재 노드가 왼쪽 자식 노드와 바뀌고,
                    // 바뀐 값보다 오른쪽 자식 노드의 값이 더 크면
                    (swap !== null && rightChild > leftChild)
                ) {
                    // 왼쪽이 아니라 오른쪽 자식 노드와 바꾸기
                    swap = rightChildIdx;
                }
            }
            // 아무것도 바뀌지 않았으면 반복 종료
            if (swap === null) break;
            // 실질적으로 현재 노드와 swap(왼쪽 또는 오른쪽)의 값 바꾸기
            [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
            // 현재 인덱스를 자식 노드의 인덱스로 업데이트
            index = swap;
        }
    }
}