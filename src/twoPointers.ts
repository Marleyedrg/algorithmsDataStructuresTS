interface currSpace {
  leftId: number,
  rightId: number,
  sum: number
}

export default function twoPointers(array: number[], target: number): object {

  const size = array.length;

  let curr: currSpace = {
    leftId: 0,
    rightId: size - 1,
    sum: array[0] + array[size - 1]
  }

  while (curr.sum !== target) {


    if (curr.sum > target) {
      curr.rightId -= 1;
    }

    if (curr.sum < target) {
      curr.leftId += 1;
    }

    // limits
    if (curr.leftId === curr.rightId) {
      break;
    }
    //

    curr.sum = array[curr.leftId] + array[curr.rightId];
  };

  if (curr.sum !== target) {
    throw new Error("false")
  };

  return {
    right: {
      index: curr.rightId,
      data: array[curr.rightId]
    },
    left: {
      index: curr.leftId,
      data: array[curr.leftId]
    },
    sum: array[curr.leftId] + array[curr.rightId]
  };

};
