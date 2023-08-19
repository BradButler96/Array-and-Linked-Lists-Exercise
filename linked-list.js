/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) return;
    const temp = this.tail
    
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev
      this.tail.next = null
      temp.prev = null
    }
    this.length--
    return temp.val
  }
    

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return;
    const temp = this.head
    
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next
      this.head.prev = null
      temp.next = null
    }
    this.length--
    return temp.val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let count = 0
    let currentIdx = this.head
    
    for (let i = 0; i <= idx; i++) {
      if (i === idx) {
        return currentIdx.val
      } else {
        currentIdx = currentIdx.next
        count++
      }
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let count = 0
    let currentIdx = this.head
    
    for (let i = 0; i <= idx; i++) {
      if (i === idx) {
        currentIdx.val = val
      } else {
        currentIdx = currentIdx.next
        count++
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (idx < this.length - 1) {
      let count = 0
      let currentIdx = this.head
      
      for (let i = 0; i < idx; i++) {
        if (i === idx - 1) {
          newNode.next = currentIdx.next
          currentIdx.next = newNode
          newNode.prev = currentIdx
        } else {
          currentIdx = currentIdx.next
          count++
        }
      }
    } else {
      this.push(val)
    }
    this.length++
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (!this.head) return null;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let count = 0
      let currentIdx = this.head
      let prevIdx;
      currentIdx.prev === null ? prevIdx = null : prevIdx = currentIdx.prev
      let nextIdx = currentIdx.next
      
      for (let i = 0; i <= idx; i++) {
        if (i === idx) {
          prevIdx.next = nextIdx
          nextIdx.prev = prevIdx
          return currentIdx.val
        } else {
          currentIdx = currentIdx.next
          
          count++
        }
      }
      this.length--
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) return 0;

    let sum = 0;
    let currentIdx = this.head

    while (currentIdx != null) {
      sum += currentIdx.val
      currentIdx = currentIdx.next
    }

    return sum / this.length
  }
}

module.exports = LinkedList;
