import Uarray from "./UnderlyingArray";

let array: Uarray<number> = new Uarray("number", 2);

console.log(array.set(0, 1))
array.set(1, 2)

console.log(array.get(1))
