/* eslint-disable no-console */

function sumFor(numbers: number[]): number {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

function sumWhile(numbers: number[]): number {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}

function sumRecursion(numbers: number[], index = 0): number {
  if (index >= numbers.length) {
    return 0;
  }
  return numbers[index] + sumRecursion(numbers, index + 1);
}

function sumTheFunctionalWay(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

const testNumbers = [1, 2, 3, 4];

console.log(sumFor(testNumbers));
console.log(sumWhile(testNumbers));
console.log(sumRecursion(testNumbers));
console.log(sumTheFunctionalWay(testNumbers));

export {
  sumFor,
  sumWhile,
  sumRecursion,
  sumTheFunctionalWay,
};
