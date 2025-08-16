"use strict";
let a;
let b;

function myFn() {
  let b;
  a = true;
  b = 10;
  console.log("a = " + a + " b = " + b);
}
myFn();

console.log("a = " + a + " b = " + b);
/***************************/

const a2 = 5;

function myFn2() {
  function innerFn() {
    return a2; //5
  }
  return innerFn();
}

console.log(myFn2()); //5
//innerFn(); //an error will occure

let q = false;

function myFn3() {
  q = true;
  console.log(q);
}
myFn3();
console.log(q);
/* NOT RECOMENDED. q is created automatically globaly ! 'use strict' at the beggining of the file - prevents such practices */
