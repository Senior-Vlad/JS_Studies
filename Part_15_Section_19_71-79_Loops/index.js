/*
let i=0;
console.log(i);
i++;
console.log(i);
i++;
console.log(i);
i++;
console.log(i);
i++;
...
 */
/* const myArray = [true, "abc", 10];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

const myObject ={
    x:10,
    y:true,
    z:"abc"
}
    console.log(myObject.x);
    console.log(myObject.y);
    console.log(myObject.z);

*/
//Instead of that for loops exist
//for, for...in... while, do... while, for ... of ...
/*
for(starting instruction; condition; increment/decrement){
    // code to be executed
}
*/
console.log("for loop example:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// just a reminder - for arrays we should use .forEach, map, reduce or other array methods, but we still can use for loops if needed
console.log("for loop with array example:");
const myArray = ["first", "second", "third"];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
console.log("forEach example:");
myArray.forEach((element, index) => console.log("index:", index, ":", element));

//While
/*
while(condition){
    // code to be executed, until the condition is true
}
*/
console.log("while loop example:");
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//do ... while
/*
do{
//code to be executed (always executed at least once)
}while(condition);
*/
console.log("do...while loop example:");
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

//for ... in

/*
for(key in Object){
    //actions with every property of Object
    //value of property - Object[key]
}
*/
console.log("for...in loop example:");
const myObject = {
  x: 10,
  y: true,
  z: "abc",
};

for (const key in myObject) {
  console.log("key:", key, "value:", myObject[key]);
}
console.log("keys methods and values for object example:");
Object.keys(myObject).forEach((key) => console.log(key, myObject[key]));
console.log("values methods for object example:");
Object.values(myObject).forEach((value) => console.log(value));

//for ... in for arrays
console.log("for...in loop with array example:");
const myArray2 = [true, 10, "abc", null];

for (const index in myArray2) {
  console.log("index:", index, "value:", myArray2[index]);
}

//for ... of example

/*
for(Element of Iterable){
    //Action with/on certain Element
}
*/
console.log("for...of loop with string example:");
const myString = "Hey";
for (const letter of myString) {
  console.log("letter:", letter);
}
console.log("for...of loop with array example:");
const myArray3 = [true, 10, "abc", null];
for (const element of myArray3) {
  console.log("element:", element);
}
//but, it's better to use forEach for arrays

//for ... of doesn't work on objects!
