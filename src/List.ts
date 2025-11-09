interface Node<T> {
  prev: Node<T> | null,
  data: T,
  next: Node<T> | null
}

export default class LinkedList<T> {
  public head: Node<T>;
  public tail: Node<T>;

  constructor(value: T) {
    this.head =
    {
      prev: null,
      data : value,
      next: null
    }
    this.tail = this.head;
  }

  public add(value:T){
    const newNode:Node<T> =
    {
      prev: this.tail,
      data: value,
      next: null
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  public get(value:T){
    if (this.head.data === value){
      return this.head;
    }
    if(this.tail.data === value){
      return this.tail;
    }

    let ccNode = this.tail;
    //why tail?
    // why not?
    
    while(ccNode.prev && ccNode.prev.data !== value){
      ccNode = ccNode.prev;
    }

    if(ccNode.prev === null){
      throw new Error(`${value} dont find here`);
    }

    return ccNode.prev;
    
  }

  
}
