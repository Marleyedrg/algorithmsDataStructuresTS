
//it need to be abstract in the future
export default class UnderlingArray<T extends string | number> {

  private buffer: ArrayBuffer;

  readonly capacity: number;

  private viewNumber?: Int32Array;
  private viewString?: Uint8Array;

  readonly type: "string" | "number";

  readonly BperItem: number;
  // case type == number 4 bytes per int32
  // case type == string 1 byte per uint8 ASCII :)

  constructor(type: "string" | "number", capacity: number) {
    this.type = type;
    this.capacity = capacity;

    // define number of bytes per item
    this.BperItem = type === "number" ? 4 : 1;

    // alloc the correct space int bytes to array
    this.buffer = new ArrayBuffer(this.BperItem * this.capacity);

    // define the correct view, how the value will be read
    if (type === "number") {
      this.viewNumber = new Int32Array(this.buffer);
    } else {
      this.viewString = new Uint8Array(this.buffer);
    }

  }

  private assertType(value: any): asserts value is T {
    if (this.type === "number" && typeof value !== "number") {
      throw new TypeError(`Expected a number, got ${typeof value}`);
    }
    if (this.type === "string" && typeof value !== "string") {
      throw new TypeError(`Expected a string, got ${typeof value}`);
    }
  }

  set(index: number, value: T) {

    if (index >= this.capacity) {
      throw new Error(`last index is : ${this.capacity - 1}, the passed index is ${index}`);
    }

    this.assertType(value);
    if (this.type === "number") {
      const v = value as number;
      this.viewNumber![index] = v;
    } else {
      const v = value as string;
      this.viewString![index] = v.charCodeAt(0);
    }

  }

  get(index: number): T {
    if (index >= this.capacity) {
      throw new Error(`last index is : ${this.capacity - 1}, the passed index is ${index}`);
    }

    if (this.type === "number") {
      return this.viewNumber![index] as T;
    } else {
      return String.fromCharCode(this.viewString![index]) as T;
    }
  }
}
