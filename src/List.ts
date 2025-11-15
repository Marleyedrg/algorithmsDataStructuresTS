interface Node<T>{
  prev: Node<T> | null,
  data: T,
  next: Node<T> | null
}

export default class LinkedList<T>{
  head:Node<T>;
  tail:Node<T>;

  constructor(value:T){
    this.head = {
      prev: null,
      data: value,
      next: null
    }

    this.tail = this.head;
  }

  addNext(value:T, sNode:Node<T>){
    const newNode:Node<T> = {
      prev: sNode,
      data: value,
      next: sNode.next,
    }//it's not connect

    if(sNode === this.tail){

      sNode.next = newNode;
      this.tail = newNode;

     return 
    }
   sNode.next!.prev = newNode;
   sNode.next = newNode;

  }
}
