const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 6];
const updateArray = function(arr, index, value) {
  return [...arr.slice(0, index + 1), value, ...arr.slice(index + 1)];
};
const isTheSame = function(arr1, arr2) {
  console.log(arr1 === arr2);
};
isTheSame(arr1, updateArray(arr1));