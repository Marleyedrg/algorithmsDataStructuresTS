import ArrayList from "./ArrayList";
import FixedArr from "./FixedArray";


const fixed: FixedArr<number> = new FixedArr([1,2]);

let arrlist: ArrayList<number> = new ArrayList(fixed);

arrlist.add(3);
arrlist.add(4);

console.log(arrlist.get(
