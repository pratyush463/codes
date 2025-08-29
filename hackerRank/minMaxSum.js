const minMaxSum = (arr1) => {
  let minSum = 0;
  let maxSum = 0;
  let sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    sum = sum + arr[i];
  }
  minSum = sum - Math.max(...arr1);
  maxSum = sum - Math.min(...arr1);

  return [minSum, maxSum];
};

let arr = [1, 2, 3, 4, 5];

const [min, max] = minMaxSum(arr);
console.log(min);
console.log(max);
