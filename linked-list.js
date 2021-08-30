/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    // if empty list
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    // if empty list.
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    // nothing in list
    if (this.head === null || this.tail === null) return null;
    else if (this.head === this.tail) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    } else {
      let current = this.head;
      while (current.next.next) current = current.next;
      this.tail = current;
      this.tail.next = null;
    }
    this.length--;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) return null;
    else if (this.head === this.tail) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    } else {
      let val = this.head.val;
      this.head = this.head.next;
      this.length--;
      return val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {}

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;