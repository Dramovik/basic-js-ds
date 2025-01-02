const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    let _head = null;
    let _end = null;
  }

  getUnderlyingList() {
    return this._head;
  }

  enqueue(value) {
    if (!this._end) {
      this._head = new ListNode(value);
      this._end = this._head;
    } else {
      this._end.next = new ListNode(value);
      this._end = this._end.next;
    }
  }

  dequeue() {
    let tempNode = this._head;
    this._head = this._head.next;
    tempNode.next = null;
    return tempNode.value;
  }
}

module.exports = {
  Queue
};
