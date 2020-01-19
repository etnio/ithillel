function shuffleArray(array, i, swapWith) {
    const arr = array.slice();
    [arr[i], arr[swapWith]] = [arr[swapWith] /* 5: 6 */, arr[i] /* 0: 1 */];
    return arr;
  }
  ​
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(shuffleArray(arr, 0, 5));