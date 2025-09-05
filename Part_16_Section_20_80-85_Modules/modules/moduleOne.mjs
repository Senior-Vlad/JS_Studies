// const myName = () => {
//   console.log("Hello, my name is Vladyslav");
// };

// export default myName; only when 1 thing needs to be exported, recomended

export const one = 1;
export const two = "two";

export const sum = (a, b) => a + b;
const mult = (a, b) => a * b;
const num1 = 5;
const num2 = 6;
export { mult, num1, num2 };

// export { one, two, sum }; better option
