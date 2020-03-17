
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    let towelSortedArr = [];
    for (let i = 0; i < matrix.length; i++) {
     let arr = matrix[i];
     if (i % 2 == 1) arr = arr.reverse();
      for (let j = 0; j < arr.length; j++) {
        towelSortedArr.push(arr[j]);
      }
    }
  return towelSortedArr;
}
