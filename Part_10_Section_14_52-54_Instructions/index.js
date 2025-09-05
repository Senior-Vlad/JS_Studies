// expression, instruction, expression-instruction, X instruction-expression X
let a; // declaration - instruction
const b = 5; // declaration - initialization (expression - instruction)
if (a > b) {
  console.log("a is greater than b"); // instruction  (block)
}
for (let i = 0; i < 10; i++) {
  console.log(i); // instruction  (instruction block)
}
// expression - instruction
("abc");
a = a + 3; //despite this is still an expression, it is also an instruction. Instructions are being executed separately
c = a + b;
d = "Good" + "Evening"; // an instruction but d = "Good" + "Evening" - an expression
console.log("123321");
// expressions can be used as arguments in functions

function myFn(a) {
  console.log(a); //expression-instruction
}

const bb = true; //instuction
let c = 10; // instruction

myFn(2 + 3); //5 (2 + 3 - an expression), firstly it will count 2 + 3, then JS will pass the result to myFn
myFn(bb); // true. The same principle applies here, JS will pass the value of bb to myFn
myFn((c = c + 1)); // 11. firstly expression c = c + 1 will be evaluated, then the result will be passed to myFn
// myFn(c = c + 1;); //won't work, because it's not a valid expression statement. We pass instruction. function can't accept instruction statements
// myFn(let d); the same
