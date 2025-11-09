

interface currSpace {
  lIndex: number,
  rIndex: number,
  r?: number,
}


export default function twoPointer(array: number[], target: number): object {
  const size = array.length;

  let curr: currSpace =
  {
    lIndex: 0,
    rIndex: size - 1,
  }

  curr.r = array[curr.lIndex] + array[curr.rIndex];

  while (curr.r != target && curr.lIndex < size && curr.rIndex > 0 && curr.lIndex != curr.rIndex) {

    if (curr.r > target) {
      curr.rIndex -= 1;
    }
    if (curr.r < target) {
      curr.lIndex += 1;
    }

    curr.r = array[curr.lIndex] + array[curr.rIndex];

  }

  if (curr.r != target) {
    throw new Error("false")
  }

  let final =
  {
    right: {
      index: curr.lIndex,
      value :array[curr.lIndex],
    },
    left: {
      index: curr.rIndex,
      value: array[curr.rIndex]
    },
    target: curr.r
  };
  return final
} 
