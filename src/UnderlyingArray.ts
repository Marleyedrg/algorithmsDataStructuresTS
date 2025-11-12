import { Z_VERSION_ERROR } from "node:zlib";



export default class UnderlingArrayNumber {
  private buffer: ArrayBuffer;
  private view: Int32Array;

  private bytesPerItem = 4;
  // because we will use int32
  // 32 bits / 8 bits per byte = 4 bytes

  public capacity: number;

  constructor(size: number) {
    this.capacity = size;

    //storage space in bytes in memory?
    this.buffer = new ArrayBuffer(size * this.bytesPerItem);

    //we need to understand it, lets take it reading 4 bytes in 4 bytes
    this.view = new Int32Array(this.buffer)
  }

  set(index: number, value: number) {

    if (index >= this.capacity || index < 0) {
      throw new Error(`start index 0, final index ${this.capacity - 1}`);
    }

    this.view[index] = value;
  }

  get(index: number): number {

    if (index >= this.capacity || index < 0) {
      throw new Error(`start index 0, final index ${this.capacity - 1}`);
    }

    return this.view[index];
  }

  getIndex(value: number): number {

    for (let i = 0; i < this.capacity; i++) {
      if (this.view[i] === value) {
        return i;
      }
    }

    throw new Error(`Not found value : ${value}`)
  }

}
