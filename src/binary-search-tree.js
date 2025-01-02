const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let flag = true;
      let lastNode = this.head;
      while (flag) {
        if (data < lastNode.data) {
          if (!lastNode.left) {
            lastNode.left = new Node(data);
            flag = false;
          } else {
            lastNode = lastNode.left;
          }
        } else {
          if (!lastNode.right) {
            lastNode.right = new Node(data);
            flag = false;
          } else {
            lastNode = lastNode.right;
          }
        }
      }
    }
  }

  has(data) {
    let searchNode = this.head;
    while (true) {
      if (searchNode.data === data) {
        return true;
      } else if (data < searchNode.data) {
        if (searchNode.left) {
          searchNode = searchNode.left
        } else {
          return false;
        }
      } else {
        if (searchNode.right) {
          searchNode = searchNode.right
        } else {
          return false;
        }
      }
    }
  }

  find(data) {
    let searchNode = this.head;

    while (searchNode) {
      if (data === searchNode.data) {
        return searchNode;
      } else if (data < searchNode.data) {
        searchNode = searchNode.left;
      } else {
        searchNode = searchNode.right;
      }
    }

    return null;
  }


  // findParent(data) {
  //   if (data = this.head.data) {
  //     return null;
  //   }
  //   let searchParentNode = this.head;
  //   let flag = true;
  //   while (flag) {
  //     if (data > searchParentNode.data) {
  //       if (searchParentNode.right !== null) {
  //         if (searchParentNode.right.data === data) {
  //           return searchParentNode;
  //         } else {
  //           searchParentNode = searchParentNode.right;
  //         }
  //       } else {
  //         return null;
  //       }
  //     } else {
  //       if (searchParentNode.left !== null) {
  //         if (searchParentNode.left.data === data) {
  //           return searchParentNode;
  //         } else {
  //           searchParentNode = searchParentNode.left;
  //         }
  //       } else {
  //         return null;
  //       }
  //     }
  //   }

    // if (data === this.head.data) {
    //   return null;
    // }
    // let searchParentNode = this.head;
    // while (true) {
    //   if (searchParentNode.data > data) {
    //     if (searchParentNode.left.data) {
    //       if (searchParentNode.left.data === data) {
    //         return searchParentNode;
    //       } else {
    //         searchParentNode = searchParentNode.left;
    //       }
    //     } else {
    //       return null;
    //     }
    //   } else {
    //     console.log(data, searchParentNode.right.data);
    //     if (searchParentNode.right.data) {
    //       if (searchParentNode.right.data === data) {
    //         return searchParentNode;
    //       } else {
    //         searchParentNode = searchParentNode.right;
    //       }
    //     }
    //   }
    // }
  // }

  remove(data) {
    function deleteNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = deleteNode(node.right, data);
        return node;
      } else {

        // not Node
        if (!node.left && !node.right) {
          return null;
        }
        // 1 Node
        if (node.left && !node.right) {
          return node.left;
        }
        if (!node.left && node.right) {
          return node.right;
        }
        // 2 Node
        if (node.left && node.right) {
          let minRightNode = node.right;
          while (minRightNode.left) {
            minRightNode = minRightNode.left;
          }
          node.data = minRightNode.data;
          node.right = deleteNode(node.right, minRightNode.data);
          return node;
        }
      }
    }
    this.head = deleteNode(this.head, data);
    // let deleteNode = this.find(data);
    // let parentNode = this.findParent(data);
    // let direction;
    // if (parentNode) {
    //   if (parentNode.left === deleteNode) {
    //     direction = 'left';
    //   } else {
    //     direction = 'right';
    //   }
    // }

    // // not Node
    // if (this.head) {
    //   if (!deleteNode.left && !deleteNode.right) {
    //     if (!parentNode) {
    //       this.head = null;
    //     } else {
    //       parentNode[direction] = null;
    //     }
    //   } else

    //   // 1 Node
    //   if (deleteNode.left && !deleteNode.right) {
    //     if (!parentNode) {
    //       this.head = this.head[direction];
    //     } else {
    //       parentNode[direction] = deleteNode.left;
    //     }
    //   } else
    //   if (!deleteNode.left && deleteNode.right) {
    //     if (!parentNode) {
    //       this.head = this.head[direction];
    //     } else {
    //       parentNode[direction] = deleteNode.right;
    //     }
    //   } else

    //   // 2 Node
    //   if (deleteNode.left && deleteNode.right) {
    //     let newDeleteNode = this.find(this.max(deleteNode.left));
    //     let newParentNode = this.findParent(newDeleteNode.data);
    //     let newDirection = null;
    //     if (newParentNode.left === newDeleteNode) {
    //       newDirection = 'left';
    //     } else {
    //       newDirection = 'right';
    //     }
    //     if (!newDeleteNode.left && !newDeleteNode.right) {
    //       newParentNode.right = null;
    //       deleteNode.data = newDeleteNode.data;
    //     } else {
    //       newParentNode.left = newDeleteNode.right;
    //       deleteNode.data = newDeleteNode.data;
    //     }
    //   }
    // }
  }

  min(node = null) {
    let minNode;
    if (!node) {
      minNode = this.head;
    } else {
      minNode = node;
    }
    if (!minNode) {
      return null;
    }
    while (true) {
      if (minNode.left) {
        minNode = minNode.left;
      } else {
        return minNode.data;
      }
    }
  }

  max(node = null) {
    let maxNode = null;
    if (!node) {
      maxNode = this.head;
    } else {
      maxNode = node;
    }
    if (!maxNode) {
      return null;
    }
    while (true) {
      if (maxNode.right) {
        maxNode = maxNode.right;
      } else {
        return maxNode.data;
      }
    }
  }
}

// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
// // tree.remove(14);
// tree.remove(8);
// tree.remove(9);
// console.log(tree.has(14));
// console.log(tree.has(8));
// console.log(tree.has(9));
// console.log(tree.has(2));
// console.log(tree.has(6));
// console.log(tree.has(128));
// console.log(tree.has(31));
// console.log(tree.has(54));
// console.log(tree.has(1));

module.exports = {
  BinarySearchTree
};