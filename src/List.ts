interface Node<T> {
  data: T,
  next: Node<T> | null
}

export default class List<T> {
  head: Node<T>;
  tail: Node<T>;

  /**
  *pass a value to be setted to the head.
  */
  constructor(value: T) {
    this.head = { data: value, next: null };
    this.tail = this.head;
  }

  add(value: T) {
    const newNode: Node<T> = { data: value, next: null };

    let currNode: Node<T> = this.head;

    while (currNode.next !== null) {
      currNode = currNode.next;
    }

    currNode.next = newNode;

    this.tail = newNode;
  }

  get(value: T): Node<T> {
    let currNode: Node<T> = this.head;

    while (currNode.next && currNode.next?.data !== value) {
      currNode = currNode.next;
    }

    if (!currNode.next) {
      throw Error("we dont have this value here");
    }

    return currNode.next;

  }

}
