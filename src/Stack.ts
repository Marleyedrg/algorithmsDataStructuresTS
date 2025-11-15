import { Node } from "./List"

export default class Stack<T> {

  public top: Node<T> | null;
  public btt: Node<T> | null;

  constructor(value: T) {
    this.top = {
      prev: null,
      data: value,
      next: null
    }
    this.btt = this.top;
  }

  add(value: T) {
    const newNode: Node<T> = {
      prev: this.top,
      data: value,
      next: null
    }

    if (this.top === null) {
      this.top = newNode;
      return;
    }

    this.top = newNode;

  }

  rm() {
    if (this.top?.prev === null) {
      this.top = null;
    }


  }




}
