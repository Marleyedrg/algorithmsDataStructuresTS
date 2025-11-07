import FixedArr from "./FixedArray";
import TypeItem from "./TypeItem";
import fixIndex from "./fixIndex";

export default class ArrayList<T> {
  private currArray: FixedArr<T>;

  public length: number;

  public readonly arrType: string;

  private items: T[];

  constructor(array: FixedArr<T>) {
    this.currArray = array;

    this.arrType = array.arrType;

    this.length = this.currArray.length;

    this.items = this.currArray.get();
  }

  add(value: T) {
    if (TypeItem.getType(value) != this.arrType) {
      throw new Error(`the array type is ${this.arrType}, receive ${TypeItem.getType(value)}`)
    };

    const newArray = this.currArray.get();

    this.currArray = new FixedArr([...newArray, value]);

    this.items = this.currArray.get();
  }


  public get(): T[];//type Overload
  public get(index: number): T;
  public get(index?: number): T | T[] {

    if (index !== undefined) {

      if (index > this.length - 1) {
        throw new Error("Array max size exceeded!");
      }

      index = fixIndex(index, this.length);

      return this.items[index];
    }
    if (this.length == 0) {
      console.log(`empty ${this.arrType}`)
    }
    return [...this.items];
  }

}
