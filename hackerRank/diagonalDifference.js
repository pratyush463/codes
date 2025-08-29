// input
// 1 2 3
// 4 5 6
// 9 8 9

// left = 1+5+9 = 15
// right = 9+5+3 = 17

const diagonalDifference = (arr) => {
  let sumLd = 0;
  let sumRd = 0;
  for (let i = 0; i < arr.length; i++) {
    sumLd += arr[i][i];
    sumRd += arr[i][arr.length - 1 - i];
  }

  return Math.abs(sumLd - sumRd);
};

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

console.log(diagonalDifference(arr));
