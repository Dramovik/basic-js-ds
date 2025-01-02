const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor () {
    this.stackArr = [];
  }
  push(element) {
    this.stackArr.push(element);
  }

  pop() {
    if (this.stackArr.length > 0) {
      return this.stackArr.pop();
    } else {
      return null;
    }
  }

  peek() {
    if (this.stackArr.length > 0) {
      return this.stackArr[this.stackArr.length - 1];
    } else {
      return null;
    }
  }
}

module.exports = {
  Stack
};
