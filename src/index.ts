import FixedArr from "./FixedArray";
import ArrayList from "./ArrayList";

let arr: FixedArr<number> = new FixedArr([1, 2, 3]);

console.log(arr.get());

let list: ArrayList<number> = new ArrayList(arr);

console.log(list.literalArr);

list.add(2);

console.log(list.literalArr);
