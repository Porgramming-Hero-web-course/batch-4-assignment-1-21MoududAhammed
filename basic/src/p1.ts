// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

function sumArray(arrayOfNum: number[]): number {
  let sum: number = 0;
  arrayOfNum.forEach((item)=> (sum += item));

  return sum;
}

const myNumbers = [10, 20, 30];
const result = sumArray(myNumbers);
console.log(result);
