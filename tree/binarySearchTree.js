// 二叉查找树要求，在树中的任意一个节点，其左子树中的每个节点的值，都要小于这个节点的值，而右子树节点的值都大于这个节点的值
class TreeNode {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
      this.root = null;
  }

  insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
          this.root = newNode;
      } else {
          this.insertNode(this.root, newNode);
      }
  }

  insertNode(node, newNode) {
      if (newNode.value < node.value) {
          if (node.left === null) {
              node.left = newNode;
          } else {
              this.insertNode(node.left, newNode);
          }
      } else {
          if (node.right === null) {
              node.right = newNode;
          } else {
              this.insertNode(node.right, newNode);
          }
      }
  }

  search(value) {
      return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
      if (node === null) {
          return false;
      }
      if (value < node.value) {
          return this.searchNode(node.left, value);
      } else if (value > node.value) {
          return this.searchNode(node.right, value);
      } else {
          return true;
      }
  }

  remove(value) {
      this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
      if (node === null) {
          return null;
      }
      if (value < node.value) {
          node.left = this.removeNode(node.left, value);
          return node;
      } else if (value > node.value) {
          node.right = this.removeNode(node.right, value);
          return node;
      } else {
          if (node.left === null && node.right === null) {
              node = null;
              return node;
          }
          if (node.left === null) {
              node = node.right;
              return node;
          } else if (node.right === null) {
              node = node.left;
              return node;
          }
          const minValue = this.findMinNode(node.right).value;
          node.value = minValue;
          node.right = this.removeNode(node.right, minValue);
          return node;
      }
  }

  findMinNode(node) {
      if (node.left === null) {
          return node;
      } else {
          return this.findMinNode(node.left);
      }
  }
}

// 使用示例
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log(bst.search(40)); 
bst.remove(40);
console.log(bst.search(40));     