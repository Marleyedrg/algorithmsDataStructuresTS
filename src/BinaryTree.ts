interface treeNode<T> {
  data: T,
  right: treeNode<T> | null,
  left: treeNode<T> | null
}

export default class BinaryTree<T> {
  public root: treeNode<T>;

  constructor(v: T) {
    this.root = {
      data: v,
      right: null,
      left: null
    }
  }

  add(v: T) {
    const newNode: treeNode<T> = {
      data: v,
      right: null,
      left: null
    }

    let currNode: treeNode<T> = this.root;

    while (true) {
      if (newNode.data < currNode.data) {
        if (currNode.left === null) {
          currNode.left = newNode;
          break;
        }
        currNode = currNode.left;
      } else if (newNode.data >= currNode.data) {
        if (currNode.right === null) {
          currNode.right = newNode;
          break;
        }
        currNode = currNode.right;
      }
    }
  }
}
