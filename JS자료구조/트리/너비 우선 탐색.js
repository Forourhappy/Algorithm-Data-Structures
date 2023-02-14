// Breadth-first Search(BFS)

// 노드에 도달하면 왼쪽과 오른쪽을 확인한 후, 큐에 집어 넣기
// 큐의 값을 확인하고 dequeue
// dequeue한 값은 visit로 분류
// dequeue한 값의 왼쪽과 오른쪽 확인 후, 큐에 집어 넣기 (반복)

// 편의상 큐는 배열로 구현
import BinarySearchTree from "./이진 검색 트리.js";

class BeadthFirstSearch extends BinarySearchTree {
    BFS() {
        // 출력할 데이터
        const data = [],
            // 탐색할 요소
            queue = [];
        // root를 처음 queue에 넣기
        let node = this.root;
        queue.push(node);
        // queue에 아무 요소가 없을 때까지 반복
        while(queue.length) {
            // queue에서 dequeue한 요소를 data에 넣기
            node = queue.shift();
            data.push(node.val);
            // data에 들어온 노드의 왼쪽과 오른쪽 값을 queue에 넣기
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
}
