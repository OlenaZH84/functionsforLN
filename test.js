import { TheLargestNumber } from './index.js';

const result = TheLargestNumber('5.6', '4.5', 4);
// const areEqual = result === "The 1st number is largest and equal: 5.6";
// console.log(areEqual);
console.log(result);

const result1 = TheLargestNumber(4, '5.6', '4.5');
// const areEqual1 = result1 === "The 2nd number is largest and equal: 5.6";
// console.log(areEqual1);
console.log(result1);
const result2 = TheLargestNumber(4, '4.5', '5.6');
// const areEqual2 = result2 === "The 3rd number is largest and equal: 5.6";
// console.log(areEqual2);
console.log(result2);
const result3 = TheLargestNumber(7.7, '7.7', 7.7);
// const areEqual3 = result3 === "All three numbers are equal. And equal: 7.7";
// console.log(areEqual3);
console.log(result3);
const result4 = TheLargestNumber(7.7, '7.7', 2);
// const areEqual4 = result4 === "A and B are equal. And equal: 7.7";
// console.log(areEqual4);
console.log(result4);
const result5 = TheLargestNumber(7.7, 3, '7.7');
// const areEqual5 = result5 === "A and C are equal. And equal: 7.7";
// console.log(areEqual5);
console.log(result5);
const result6 = TheLargestNumber(5, 7.7, '7.7');
// const areEqual6 = result6 === "B and C are equal. And equal: 7.7";
// console.log(areEqual6);
console.log(result6);