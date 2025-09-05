const myArray = [1, 2, 3];
console.log(myArray[0]); // 1
console.log(myArray);
const myArray2 = new Array(1, 2, 3);
console.log(typeof myArray2, myArray2[0]); // object 1
console.log("Length of the array:", myArray2.length, myArray2);

console.log(myArray === myArray2); //different references in memory, so false is being returned
const myArray3 = myArray2;
console.log(myArray2 === myArray3); // true, same reference in memory
myArray3.push(4);
console.log(myArray2);
console.log(myArray3);
//Array vs Object

const myObject = {
  0: 1,
  first: 2,
  2: 3,
  length: 3,
};
console.log(myArray, myObject); //the difference is in the prototype chain Array(0) and Object
console.log(myObject.first); //but not myArray.first or 1

const newArray = new Array(1, 2, 3);
newArray.length = 7;
console.log(newArray, newArray[6]);
newArray[6] = 4;
newArray[12] = 5;
console.log(newArray, newArray[6], newArray[12]); // 4 and undefined
console.log(newArray.lastIndexOf(1)); // 0

/**
 .push(), .pop(), .shift(), .unshift()
 .forEach(), .map(), .filter(), .reduce()
 .splice(), .slice(), .concat(), .join()
 .flat(), .flatMap(), .reduce(),
 .keys(), .values(), .entries(),
 .includes(), .indexOf(), .lastIndexOf(),
 */
console.log(newArray, newArray.length);
newArray.pop(); // removes the last element
console.log(newArray, newArray.length);
const removedElement = newArray.pop();
console.log(removedElement + "\n", newArray, newArray.length);
newArray.unshift("abc");
console.log(newArray, newArray.length);
// Foreach
const newArray2 = [1, 2, 3, "abc", 5, "6"];
console.log(newArray2);
const result = [];
// .forEach() does not return anything, it just iterates over the array
newArray2.forEach((el) => {
  if (typeof el === "number") {
    console.log("Original element is: ", el, "->", el * 2);
    result.push(el * 2);
  } else {
    console.log(
      "Not a number:",
      el,
      " and the index of that element is",
      newArray2.indexOf(el)
    );
  }
});
//foreach returns nothing, but undefined.
console.log("Resulting array is: ", result);
// .map()

const array1 = [5, 3, 1, 10, "123"];
console.log(array1);
//map returns a new array
const mapArray = array1.map((el) => {
  if (typeof el === "number") {
    return el * 2;
  } else {
    console.log("Not a number:", el);
  }
});
console.log("Original array ", array1);
console.log("Map array is: ", mapArray); // [10, 6, 2, 20, undefined]
array1.filter((el) => {
  if (typeof el === "number") {
    return el > 5;
  }
});
newArray2.push((6)[(1, 2, 3)], 2, undefined);
console.log(newArray2); // [1, 2, 3, "abc", 5, "6", 6, 2, undefined]
newArray2.flat(); // [1, 2, 3, "abc", 5, "6", 6, 2, undefined]
console.log(newArray2);
console.log(newArray2.keys(), newArray2.values());
newArray2.values(); // returns an iterator
