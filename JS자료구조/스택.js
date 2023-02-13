class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

  // 단일 연결 리스트에서 unshift
	push(val) {
		const newNode = new Node(val);
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			newNode.next = this.first;
			this.first = newNode;
		}
		return ++this.size;
	}

  // 단일 연결 리스트에서 shift
	pop() {
		if (this.size === 0) return null;
		const temp = this.first;
		if (this.first === this.last) this.last = null;
		this.first = this.first.next;
		this.size--;
		return temp.val;
	}
}