import DoublyList from "./DoublyList";

let list: DoublyList<number> = new DoublyList(1);

list.addAtStart(0)
list.addAtEnd(2)

console.log(list.head.next?.next?.next?.data)

