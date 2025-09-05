// condition ? (true) expression 1 : (false) expression 2
// condition
// ? expression 1
// : expression 2

let value = 12;

value > 10
  ? console.log("Value is greater than 10 and equals to", value)
  : console.log("Value is smaller than 10, and equals to", value);

const value2 = -8;

console.log(value2 > 0 ? value2 : -value2);

value = -Infinity;
console.log(value); // Infinity
const res = value >= 0 ? value : -value;
console.log(res); // Infinity
