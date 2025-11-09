import CircularList from "./CircularList"; 

const list: CircularList<number> = new CircularList(1);

list.add(2)
list.addNextTo(3,list.tail)

list.addAsHead(-1);

list.addNextTo(0,list.head)

console.log(list.toArray())
