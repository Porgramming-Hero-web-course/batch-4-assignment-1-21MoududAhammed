// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

function removeDuplicates(arrayOfNum: number[]): number[] {
  const myNum: number[] = [];

  arrayOfNum.forEach((item) => {
    if (!myNum.includes(item)) {
      myNum.push(item);
    }
  });
  return myNum;
}

const result : number[] = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(result);
