import BinarySearchTree from "./이진 검색 트리.js";

// Depth-First Search(DFS)

class DepthFirstSearch extends BinarySearchTree {
    // 전위 탐색
    // 왼쪽 요소를 전부 탐색한 후에 오른쪽 요소를 탐색
    DFSPreOder() {
        const data = [];
        let current = this.root;

        function traverse(node) {
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(current);
        return data;
    }

    // 후위 탐색
    // 왼쪽 자식 노드와 오른쪽 자식 노드를 모두 탐색한 후에 자신을 탐색
    DFSPostOrder() {
        const data = [];
        let current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.val);
        }

        traverse(current);
        return data;
    }

    // 정위 탐색
    // 왼쪽 자식 노드를 탐색하고, 자신을 탐색한 후에 오른쪽 자식 노드를 탐색
    DFSInOrder() {
        const data = [];
        let current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node);
            if (node.right) traverse(node.right);
        }

        traverse(current);
        return data;
    }
}



