class Node {
  constructor(val) {
    this.val = val;
    // 다음 노드를 가리키기
    this.next = null;
  }
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
    const newNode = new Node(val);
    // 첫 번째 노드면 head와 tail 모두 첫 번째 노드를 가리키기
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
      // 새로운 노드를 tail 다음에 붙인다
      // head와 tail은 같은 리스트의 처음과 끝을 가리키고 있으므로 head에서 next를 통해 접근 가능
      this.tail.next = newNode;
      // tail은 새롭게 붙인 노드를 가리키도록 한다.
      this.tail = newNode;
    }
    this.length++;
    // return LinkedList
    return this;
	}

  pop() {
    // 비어있으면 return undefined
    if(!this.head) return undefined;
    // 현재 노드
    let current = this.head;
    // 이전 노드
    let prev = current;
    // current의 next가 null이 아닐 때까지 prev, current를 하나씩 다음 노드로 이동
    while(current.next) {
      prev = current;
      current = current.next;
    }
    // 마지막 노드에 도달하면 prev(마지막에서 두번째 노드)를 tail로 지정
    this.tail = prev;
    // current 연결 해제
    this.tail.next = null;
    this.length--;
    // length가 0일 때, head와 tail이 남아있지 않도록 하기 위해 null로 설정
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // 연결 해제한 노드를 반환
    return current;
	}

  shift() {
    // 비어있으면 return undefined
    if(!this.head) return undefined;
    const currentHead = this.head;
    // head를 두 번째 노드로 설정
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if(index < 0 || index >= this.length) return new Error("유효하지 않은 인덱스입니다.");
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++
    }
    return current;
  }

  set(index, val) {
    const foundIndex = this.get(index);
    if(foundIndex) {
      foundIndex.val = val;
      return true;
    }
    return false;
  }
}

const node = new SinglyLinkedList();