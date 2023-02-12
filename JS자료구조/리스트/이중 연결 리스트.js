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
		if (this.length === 0) throw new Error('유효하지 않은 인덱스입니다');
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
		if (this.length === 0) throw new Error('유효하지 않은 인덱스입니다');
		const shiftedNode = this.head;
		if (this.length === 1) {
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
		if (this.length === 0) {
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

	get(index) {
		if (index < 0 || index >= this.length)
			throw new Error('유효하지 않은 인덱스입니다');
		if (index <= this.length / 2) {
			let count = 0;
			let current = this.head;
			while (count != index) {
				current = current.next;
				count++;
			}
			return current;
		} else {
			let count = this.length - 1;
			let current = this.tail;
			while (count != index) {
				current = this.tail.prev;
				count--;
			}
			return current;
		}
	}

	set(index, val) {
		let foundNode = this.get(index);
		foundNode.val = val;
		return true;
	}

	insert(index, val) {
		if (index === 0) return !!this.unshift(val);
		if (index === this.length) return !!this.push(val);

		const newNode = new Node(val);
		const prevNode = this.get(index - 1);
		const nextNode = prevNode.next;
		prevNode.next = newNode;
		newNode.prev = prevNode;
		newNode.next = nextNode;
		nextNode.prev = newNode;
		this.length++;
		return true;
	}

	remove(index) {
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		const removedNode = this.get(index);
		const prevNode = removedNode.prev;
		const nextNode = removedNode.next;
		prevNode.next = nextNode;
		nextNode.prev = prevNode;
		removedNode.prev = null;
		removedNode.next = null;
		this.length--;
		return removedNode;
	}
}

// 시간 복잡도
// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)