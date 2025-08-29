const birthDayCandle = (arr) => {
  const max = Math.max(...arr);
  const arr1 = arr.filter((ar) => ar === max);
  return arr1.length;
};

console.log(birthDayCandle([1, 2, 3, 4, 5, 5]));
