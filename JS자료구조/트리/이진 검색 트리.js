class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		const newNode = new Node(val);
		let current = this.root;
		// root가 null이면 노드를 root로 지정
		if (current === null) {
			this.root = newNode;
			return this;
		}
		while (true) {
			// 새로운 값이 현재 값과 같으면 undefined
			if (val === current.val) return undefined;
			// 새로운 값이 현재 값과 작다면 트리의 왼쪽을 탐색
			if (val < current.val) {
				// 현재 값의 왼쪽이 비어있다면 그곳에 노드를 삽입
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				// 아니라면 왼쪽 값을 현재 값으로 설정하고 반복
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}

	contains(val) {
		let current = this.root;
		if (current === null) return false;
		// 무한 반복을 막기 위함 (current가 리프에 도달하면 null로 변함)
		while (current) {
			// 찾는 값이 현재 값보다 작으면 왼쪽으로, 아니면 오른쪽으로 탐색
			if (val < current.val) current = current.left;
			else if (val > current.val) current = current.right;
			else return true;
		}
		// 리프에 도달하면 값은 null이므로 false
		return false;
	}
}

// 시간 복잡도
// Insertion - O(log n)
// Searching - O(log n)

// 단, 연결 리스트의 형태로 이루어질 수도 있기 때문에 보장할 수는 없음

export default BinarySearchTree;


// 너비 우선 탐색과 깊이 우선 탐색 중 무엇을 이용해야 하는가?

// 시간은 둘 다 거의 같음. 똑같이 모든 노드를 탐색

// 너비가 넓은 트리
// 해당 너비의 노드들을 모두 큐에 담아야 함 = 큐에 담아야 하는 데이터 양 증가
// 깊이 우선 탐색이 더 적은 공간을 차지

// 깊이가 깊은 트리
// 위와는 반대의 이유로 너비 우선 탐색이 유리

// 깊이 우선 탐색 - 정위 탐색
// 오름차순으로 정렬된 데이터가 필요할 때

// 깊이 우선 탐색 - 전위 탐색
// 트리의 루트를 가장 먼저 알 수 있음
// 트리를 저장했다가 다시 트리구조로 만드는 데에 유리
