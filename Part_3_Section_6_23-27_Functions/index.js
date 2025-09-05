let a = 5;
let b = 3;
c = a + b;
console.log(c);
a = 8;
b = 12;
c = a + b;
console.log(a + b);
/* That's a bad practise, so functions help us to optimize such processes*/

a = 6;
b = 21;

function sum(a, b) {
  console.log(a + b);
}

sum(a, b);

/* But, there are different ways to use functions.
    Functions can be: named, as a variable, anonymous, as an argument in other function, object's property value (method)
*/

/**** Value transfering via the reference ****/

const personOne = {
  name: "Bob",
  age: 21,
};

function increasePersonAge(person) {
  person.age += 1;
  return person; /* is optional */
}
console.log(personOne.age);
increasePersonAge(personOne);
console.log(personOne.age);

/* But such way is not recomended. Let's show below how it should be done */

function increasePersonAge2(person) {
  const updatedPerson = JSON.parse(JSON.stringify(person));
  updatedPerson.age += 1;
  return updatedPerson;
}

const updatedPersonOne = increasePersonAge2(personOne);
console.log("\n\n\n" + personOne.age + " " + updatedPersonOne.age);

/* Module 26 Callback functions */
console.log("\n\n");
function anotherFunction() {}

function fnWithCallback(callbackFunction) {
  callbackFunction();
}

fnWithCallback(anotherFunction);

/*Exaple*/

function printMyName(name) {
  return name;
}

function callBackFunctionForName(fn, name) {
  fn(name);
}
let myName = "Vlad";
setTimeout(() => console.log(printMyName(myName)), 1000);

/*
    Some rules for working with functions 
    1. Name functions based on what task thay do.
    2. One function only for one specific task.
    3. It's not recomended to modify outer parameters, relatively function
*/
