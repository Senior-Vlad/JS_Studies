console.log("Hello, World!");
const a = 10;
let b = 20;
b = a;
console.log(b); //10
console.log(a); //10

//Object mutability example
const person = {
  name: "Bob",
  age: 21,
};

console.log(person);

person.age = 22;
person.isAdult = true;
console.log(person.age); //22
console.log(person.isAdult); //true

console.log(person);

delete person.isAdult;
/****************************/
/* COPY BY REFERENCE EXAMPLE */
const person2 = person;
console.log("\n\n\n\n");
console.log(person);
console.log(person2);
person2.age = 30;
person2.isAdult = true;
console.log(person); //{ name: 'Bob', age: 30, isAdult: true }
console.log(person2); //{ name: 'Bob', age: 30, isAdult
console.log(person.age); //30
console.log(person2.age); //30
console.log(person.isAdult); //true

/* How to avoid this? */

delete person.isAdult;
delete person2.isAdult;
console.log("\n\n\n\n");
person.age = 21;
console.log(person);

const person3 = Object.assign({}, person); /* ! */
person3.age = 22;
console.log(person3); //{ name: 'Bob', age: 21 }

/* BUT! If the object has other inner objects, then this won't work. Any changes that would be applied to inner
object in person3 will also be applied to person, because the inner object is still copied by reference.
To avoid this, we can use a deep copy method, such as JSON.parse(JSON.stringify(person3)); */

console.log("\n\n\n");

const mainPerson = {
  name: "Alice",
  surname: "Smith",
  age: 30,
  adress: {
    city: "New York",
    country: "USA",
  },
};
console.log("\n\n\n\n\n\n");
console.log(mainPerson);
const mainPerson2 = Object.assign({}, mainPerson);
mainPerson2.adress.city = "Los Angeles";
console.log(mainPerson);
console.log(mainPerson2); // { name: 'Alice', surname: 'Smith', age: 30, adress: { city: 'Los Angeles', country: 'USA' } }

const mainPerson3 = { ...mainPerson };

mainPerson3.adress.city = "Miami";
console.log("\n\n\n");
console.log(mainPerson3); // { name: 'Bob', age: 21, adress: { city: 'Miami' } }
console.log("\n\n\n");
console.log(mainPerson); // { name: 'Alice', surname: 'Smith', age:
/* And now, let's fix this issue */

const mainPerson4 = JSON.parse(JSON.stringify(mainPerson));
console.log("\n\n\n");
mainPerson4.adress.city = "Chicago";
console.log(mainPerson4); // { name: 'Alice', surname: 'Smith', age: 30, adress: { city: 'Chicago', country: 'USA' } }
console.log(mainPerson); // { name: 'Alice', surname: 'Smith', age:
