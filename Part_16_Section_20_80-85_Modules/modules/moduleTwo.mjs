// import printMyName from "./moduleOne.mjs";

// printMyName();
import {
  one,
  two,
  sum as sumOfTwoNumbers,
  mult,
  num1,
  num2,
} from "../modules/moduleOne.mjs";

console.log(one);
console.log(two);
console.log(sumOfTwoNumbers(one, two));
console.log(sumOfTwoNumbers(5, 12 * 2));
console.log(mult(num1, num2));
console.log(mult(12, 666));
n;
