"use strict";
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumFor = sumFor;
exports.sumWhile = sumWhile;
exports.sumRecursion = sumRecursion;
exports.sumTheFunctionalWay = sumTheFunctionalWay;
function sumFor(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}
function sumWhile(numbers) {
    let sum = 0;
    let i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    return sum;
}
function sumRecursion(numbers, index = 0) {
    if (index >= numbers.length) {
        return 0;
    }
    return numbers[index] + sumRecursion(numbers, index + 1);
}
function sumTheFunctionalWay(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
const testNumbers = [1, 2, 3, 4];
console.log(sumFor(testNumbers));
console.log(sumWhile(testNumbers));
console.log(sumRecursion(testNumbers));
console.log(sumTheFunctionalWay(testNumbers));
