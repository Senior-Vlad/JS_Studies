console.log("Hello, World!");
console.log(5 + 2);
c = 10;

console.log(1 + "2");
a = 5;
b = 3;
d = 12;
console.log(a <= b || c !== d);

let q = "Hello, World!";

let object = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log(object);
object.country = "USA";
console.log(object);
console.log(object.name);
object.popular = true;
console.log(object);

function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice"));
greet = 15;
console.log(greet);

// console.log(greet("Bob")); will throw an error because greet is now a number

delete object.popular;
console.log(object);

const object2 = {
  city: "Los Angeles",
};

console.log();
console.log(object2);
object2["population"] = 4000000;
console.log(object2);

const countryPropertyName = "country";
// { city: 'Los Angeles', population: 4000000, country: 'USA' }
object2[countryPropertyName] = "USA";
console.log(object2);

delete object2["country"];
console.log(object2);

object2.country = "USA";
console.log(object2);

const object3 = {
  name: "Vlad",
  surname: "Merzeef",
  info: {
    age: 20,
    city: "Kyiv",
    country: "Ukraine",
  },
};
console.log();
console.log(object3);
delete object3.info.age;
console.log(object3);

console.log("\n\n\n");

/* **************************** */

const name = "Vlad";
const surname = "Merzeef";
const age = 20;

const userProfile = {
  name,
  surname,
  age,
  // Alternatively, we can use:
  //   name: name,
  //   surname: surname,
  //   age: age,
};

console.log(userProfile);
// console.log(window.innerHeight);
console.log(globalThis.innerHeight);
globalThis.console.log("Hello, World!");

const bigCity = {
  city: "Kyiv",
  cityGreeting: function () {
    console.log("Slava Ukraini!");
  },
};

bigCity.cityGreeting();

bigCity.cityGreeting = function () {
  console.log("Heroiam Slava123!");
};
bigCity.cityGreeting();
/**
 Slava Ukraini!
 Heroiam Slava123!
 */

const bigCity2 = {
  city: "Kyiv",
  cityGreeting() {
    console.log("Slava Ukraini!");
  },
  cityName(city_name) {
    console.log(`Welcome to ${city_name}!`);
  },
};
bigCity2.cityGreeting();
bigCity2.cityName("Lviv");
bigCity2.cityName(bigCity2.city);

/*
JSON - JavaScript Object Notation
Data interchange format. JSON transfers in text format (string).
JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
JSON is often used to transmit data between a server and a web application as an alternative to XML.
*/

/* 
JSON into object:
JSON.parse(jsonString) - converts a JSON string into a JavaScript object.
Object into JSON:
JSON.stringify(object) - converts a JavaScript object into a JSON string.
*/
const post = {
  id: 1,
  title: "Hello, World!",
  content: "This is my first post.",
  likesQty: 100,
  comments: [
    { id: 1, text: "Great post!" },
    { id: 2, text: "Thanks for sharing!" },
  ],
};
console.log("\n\n\n\n");
console.log(post);
console.log(typeof post);

const postJson = JSON.stringify(post, null, 2);
/*
{
  "id": 1,
  "title": "Hello, World!",
  "content": "This is my first post.",
  "likesQty": 100,
  "comments": [
    {
      "id": 1,
      "text": "Great post!"
    },
    {
      "id": 2,
      "text": "Thanks for sharing!"
    }
  ]
}
*/
/*{"id":1,"title":"Hello, World!","content":"This is my first post.","likesQty":100,"comments":[{"id":1,"text":"Great post!"},{"id":2,"text":"Thanks for sharing!"}]} */
// in JSON.stringify(post,null,2); post is the object to convert,
// null is a replacer function (not used here), and
// 2 is the number of spaces to use for indentation in the output JSON string.
console.log(postJson);
console.log(typeof postJson);
const postJsonParsed = JSON.parse(postJson); // converts the JSON string back into a JavaScript object
console.log(postJsonParsed);
/**
 {
  id: 1,
  title: 'Hello, World!',
  content: 'This is my first post.',
  likesQty: 100,
  comments: [
    { id: 1, text: 'Great post!' },
    { id: 2, text: 'Thanks for sharing!' }
  ]
}
 */
