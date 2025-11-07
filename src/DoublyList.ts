
interface Node<T> {
  prev: Node<T> | null,
  data: T,
  next: Node<T> | null
}
export default class DoublyList<T> {
  head: Node<T>;
  tail: Node<T>;

  private makeCircular() {
    this.head.prev = this.tail;
    this.tail.next = this.head;
  }

  /**
  *pass a value to be setted to the head.
  */
  constructor(value: T) {
    this.head = { prev: null, data: value, next: null };
    this.tail = this.head;

    this.makeCircular();
  }

  private addAsNextTo(value: T, selNode: Node<T>) {

    //we have  selNode <-> nextNode
    // we want add newNode "before nextNode"
    // we also want newNode "after selNode"

    if (selNode.next === null) {
      throw new Error();
    }

    const nextNode: Node<T> = selNode.next;

    const newNode: Node<T> =
    {
      prev: selNode,
      data: value,
      next: nextNode
    }// ok, but this node isn't conect to the main list

    nextNode.prev = newNode;//newNode before nextNode
    selNode.next = newNode;//newNode after selNode

    if (selNode === this.tail) {
      this.tail = newNode;
      this.makeCircular();
    }

  }

  public addAtEnd(value: T) {
    this.addAsNextTo(value, this.tail);
  }

  public addAfterHead(value: T) {
    this.addAsNextTo(value, this.head);
  }

  public addAtStart(value: T) {

    const newNode: Node<T> =
    {
      prev: this.tail,
      data: value,
      next: this.head
    }

    this.head.prev = newNode;
    this.tail.next = newNode;

    this.head = newNode;

  }

}
