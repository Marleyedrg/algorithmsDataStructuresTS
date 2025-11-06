import FixedArr from "./FixedArray";
import TypeItem from "./TypeItem";
/**
*
*Receive a fixed array ->  object from "FixedArray" class 
*
*/
export default class ArrayList<T> {
  public readonly typeEls: string;
  private initArray: FixedArr<T>;
  public literalArr: T[];
  public length: number;

  constructor(array: FixedArr<T>) {

    this.initArray = array;
    this.literalArr = array.get();

    this.length = array.length;

    this.typeEls = array.arrType;
  }

  add(el: T): T[] {
    if (TypeItem.getType(el) !== this.typeEls) {
      throw new Error(`receive ${TypeItem.getType(el)} but the array list has type ${this.typeEls}`);
    }

    this.literalArr[this.length] = el;

    return this.literalArr;
  }

  // addAtStart(el: T): T[] {

  //   if (TypeItem.getType(el) !== this.typeEls) {
  //     throw new Error(`receive ${TypeItem.getType(el)} but the array list has type ${this.typeEls}`);
  //   }

  //   this.literalArr[0]

  //   return this.literalArr;
  // }
}
