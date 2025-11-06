export default function FixedNumberArray(size: number, values: number[]) {

  const BytPerInt = Int32Array.BYTES_PER_ELEMENT;

  //In this case, on a 32-bit system, we are defining that we want to use 4 bytes to represent each int.

  const sizeOfArray: number = size;

  const buffer: ArrayBuffer = new ArrayBuffer(sizeOfArray * BytPerInt);
  //take continous free space in bytes that we want
  //hexadecimal value by index ex: 0 is 00

  const arr: Int32Array = new Int32Array(buffer);

  buffer.slice(0, 2);
  console.log(new ArrayBuffer())

  for (let i = 0; i < sizeOfArray; i++) {
    arr[i] = values[i];
  }

  return arr;
}
