const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let nodeCurrent = l;
  let nodeAfter;
  while (nodeCurrent.next) {
    if (nodeCurrent.value !== k) {
      nodeAfter = nodeCurrent;
      nodeCurrent = nodeCurrent.next;
    } else {
      if (!nodeAfter) {
        l = nodeCurrent.next;
        nodeCurrent = l;
      } else {
        nodeAfter.next = nodeCurrent.next;
        nodeCurrent.next = null;
        nodeCurrent = nodeAfter.next;
      }
    }
  }
  if (nodeCurrent.value === k) {
    nodeAfter.next = null;
  }
  return l;
}

let a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
// a.next.next.next = new ListNode(3);
// a.next.next.next.next = new ListNode(4);
// a.next.next.next.next.next = new ListNode(5);
removeKFromList(a, 3)

module.exports = {
  removeKFromList
};
