class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			// 이전 노드를 설정
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length === 0) return undefined;
		const poppedNode = this.tail;
    // 노드가 1개일 때는 head와 tail 모두 null이 되도록 설정.
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
      // pop할 노드를 저장
      // tail을 이전 노드로 옮기기
			this.tail = poppedNode.prev;
      // pop할 노드와의 연결 끊기
			poppedNode.prev = null;
			this.tail.next = null;
		}
		this.length--;
		return poppedNode;
	}

	shift() {
		if(this.length === 0) return undefined;
		const shiftedNode = this.head;
		if(this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = shiftedNode.next;
			this.head.prev = null;
			shiftedNode.next = null;
		}
		this.length--;
		return shiftedNode;
	}

	unshift(val) {
		const newNode = new Node(val);
		if(this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
}