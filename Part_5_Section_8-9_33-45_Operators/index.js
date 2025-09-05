/*
+ - * / - arythmetic
=== !== <= >= - relational
! && || - logical
= - assignment


+= - addition assignment
-= - subtraction assignment
*= - multiplication assignment
/= - division assignment

** - exponentiation
**= - exponentiation assignment

typeof - returns the type of a variable
instanceof - checks the type of an object
new - creates a new object
delete - removes a property from an object

a++ - post-increment operator
+a - helps to convert a variable (for example string) to a number
delete obj.a - removes the property a from the object obj
typeof a - returns the type of a variable
new Object() - creates a new object
*/

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean("Hello"));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(NaN));

console.log("\n\n\n\n");
console.log(typeof 0);
console.log(typeof 0 === "number");
console.log(typeof 1);
console.log(typeof "Hello");
console.log(typeof "");
console.log(typeof " ");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);
console.log(typeof NaN);

!0; //true
!1; //false
!"Hello"; //false
!""; //true
!" "; //false
!null; //true
!undefined; //true
!{}; //false
![]; //false
!NaN; //true

!!0; //false
!!1; //true
!!"Hello"; //true
!!""; //false
!!" "; //true
!!null; //false
!!undefined; //false
!!{}; //true
!![]; //true
!!NaN; //false

let isUndefined;
typeof isUndefined === "undefined"
  ? console.log("isUndefined is undefined")
  : console.log("isUndefined is defined");

"Vlad" || "Default value"; // "Vlad"
"" || "Default value"; // "Default value"

let b = 10;

b && console.log("Done !"); //Done !

let c;

c && console.log("Done !"); // undefined | console.log("Done !") will not be even taken into account
