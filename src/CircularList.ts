
interface Node<T> {
  prev: Node<T> | null,
  data: T,
  next: Node<T> | null
}

export default class CircularList<T> {

  head: Node<T>;
  tail: Node<T>;
  size: number;

  private makeCircular() {
    this.head.prev = this.tail;
    this.tail.next = this.head;
  }

  constructor(value: T) {

    this.size = 1;

    this.head =
    {
      prev: null,
      data: value,
      next: null,
    }

    this.tail = this.head;

    this.makeCircular();
  }

  addNextTo(value: T, sNode: Node<T>) {
    const newNode: Node<T> =
    {
      prev: sNode,
      data: value,
      next: sNode.next
    }//but it isn't in main list, it just separate node.

    //snode <-> sNodeLastnext
    //snode <-> newNode <-> sNodeLastnext

    if (!sNode.next || value === undefined) {
      throw new Error();
    }

    sNode.next.prev = newNode;// newNode <- sNodeLastnext

    sNode.next = newNode;

    if (sNode === this.tail) {

      this.tail = newNode;

    }

    this.size += 1;

    this.makeCircular();
  }

  add(value: T) {
    this.addNextTo(value, this.tail);
  }

  addAsHead(value: T) {

    const newNode: Node<T> =
    {
      prev: this.tail,
      data: value,
      next: this.head
    }//but it isn't in main list, it just separate node.

    if (!this.head.next) {
      throw new Error();
    }

    this.tail.next = newNode;

    this.head.prev = newNode;

    this.head = newNode;

    this.size += 1;

  }

  getNode(value: T) {


    if (this.head.data === value) {
      return this.head;
    }
    if (this.tail.data === value) {
      return this.tail;
    }


    let ccNode: Node<T> = this.head.next!;

    while (ccNode.next && ccNode.data !== value) {
      if (ccNode.next === this.head) {
        throw new Error("Value not found!")
      }

      ccNode = ccNode.next;

    }

    return ccNode;

  }

  toArray() {
    const result: T[] = [];
    let curr = this.head;
    let count = 0;

    do {
      result.push(curr.data);
      curr = curr.next!;
      count++;
    } while (curr !== this.head && count < this.size);

    return result;
  }

}
