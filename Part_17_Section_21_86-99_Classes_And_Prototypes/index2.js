class NumbersArray extends Array {
  sum() {
    return this.reduce((el, acc) => (acc += el), 0); // 0 - starting value of acc. goes through every element in the array
  }
}
const myArray = new NumbersArray(2, 5, 7);
console.log(myArray, myArray.sum());
console.log(myArray);
//myArray -> NumbersArray -> Array -> Object
console.log(myArray.__proto__, NumbersArray.prototype);

const myName = "Vladyslav";
const myNumber = 120.12312;

console.log(myName.toUpperCase(), myNumber.toFixed(1));

const mySurname = new String("Vovk");
console.log(mySurname.prototype === myName.prototype);

export { NumbersArray, myArray };
