// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

function sumArray(arrayOfNum: number[]): number {
  let sum: number = 0;
  arrayOfNum.forEach((item: number): number => (sum += item));

  return sum;
}

const myNumbers = [10, 20, 30];
const result = sumArray(myNumbers);
console.log(result);
