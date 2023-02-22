
// 우선순위 큐
// Min Binary Heap 사용
// 각 요소가 그에 해당하는 우선순위를 가짐

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    // 우선 순위가 높은 수(priority가 낮은 수)를 위로 옮기는 작업
    bubbleUp() {
        // 삽입한 값의 인덱스
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            // 삽입한 값의 부모 인덱스
            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.values[parentIdx];
            // 삽입한 값이 부모보다 크다면 종료
            if (parent.priority <= element.priority) break;
            // 아니라면 서로 자리 바꾸기
            [this.values[index], this.values[parentIdx]] = [this.values[parentIdx], this.values[index]];
            // 삽입한 값의 인덱스 위치를 업데이트
            index = parentIdx;
        }
    }

    // 우선 순위가 높은 수(priority가 낮은 수) dequeue
    dequeue() {
        // 우선 순위가 높은 값은 루트 노드
        const min = this.values[0];
        // 맨 끝 값은 나중에 min과 바꿔줄 것
        const end = this.values.pop();
        // values가 1개일 때, min === end edgeCase 체크
        if (this.values.length > 0) {
            // end를 맨 앞으로 옮기기
            this.values[0] = end;
            this.bubbleDown();
        }
        return min;
    }

    // 우선 순위가 낮은 수(priority가 높은 수)를 아래로 옮기는 작업
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
                // 현재 노드의 우선 순위보다 왼쪽 자식 노드의 우선 순위가 더 높다면
                // 현재 노드와 왼쪽 자식 노드를 바꾸기
                // (실제로 바뀌는 것은 오른쪽 체크도 끝난 뒤)
                if (leftChild.priority < element.priority) swap = leftChildIdx;
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    // 현재 노드가 왼쪽 자식 노드와 바뀌지 않고,
                    // 오른쪽 자식 노드의 우선 순위가 더 높거나,
                    (swap === null && rightChild.priority < element.priority) ||
                    // 현재 노드가 왼쪽 자식 노드와 바뀌고,
                    // 바뀐 값의 우선 순위보다 오른쪽 자식 노드의 우선 순위가 더 높다면
                    (swap !== null && rightChild.priority < leftChild.priority)
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
