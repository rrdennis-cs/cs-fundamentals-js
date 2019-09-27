const idxOfMin = (arr, start) => {
  let minVal = arr[start];
  let minIdx = start;

  for (let i = minIdx + 1; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minIdx = i;
      minVal = arr[i];
    }
  }

  return minIdx;
};

const selectionSort = arr => {
  let minIdx;
  for (let i = 0; i < arr.length; i++) {
    minIdx = idxOfMin(arr, i);
    [ arr[i], arr[minIdx] ] = [ arr[minIdx], arr[i] ];
  }
  return arr;
};

const asstArrsEq = (act, exp) => {
  let eqLens = act.length === exp.length;
  let eqVals = true;
  for (let i = 0; i < act.length; i++) {
    if (act[i] !== exp[i]) {eqVals = false;}
  }
  if (eqLens && eqVals) {
    console.log('passed');
  } else {
    console.log('failed: expected ' + exp + ', but got ' + act);
  }
};

asstArrsEq(selectionSort([3, 2, 1]), [1, 2, 3]);
