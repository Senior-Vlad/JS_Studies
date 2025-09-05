//Destructuring assignment
const array = [1, 2, 3];
const [a, b, c] = array;
console.log(a, b, c); // 1 2 3

const userProfile = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

const { name, age } = userProfile;
const { email, city, name2 } = userProfile;
console.log(name, age, email, city, name2);
//John Doe 30 john.doe@example.com undefined undefined. Undefined because city and name2 are not defined in userProfile

//Array destructization

const fruits = ["Apple", "Banana", "Cherry", "Melon", "Date"];
const [fruitOne, fruitTwo, fruitThree] = fruits;
console.log(fruitOne, fruitTwo, fruitThree); // Apple Banana Cherry
//So, there are no such names in the array, but we don't need to have. The thing to remember is that the order matters.
// fruitOne takes the first fruits[0] value, fruitTwo takes fruits[1], and fruitThree takes fruits[2] and so on.

//Function destructization
const userInfo = ({ id, name, age, email }) => {
  //or const userInfo = (profile) =>{
  //   const { id, name, age, email } = profile;
  //    if (id && name && age && email) {
  //      return `User Info:
  //          Name: ${name}
  //          Age: ${age}
  //          Email: ${email}`;
  //    } else {
  //      console.log("Incomplete user information.");
  //    }
  //}
  if (/*id &&*/ name && age && email) {
    return `User Info:
        Name: ${name}
        Age: ${age}
        Email: ${email}`;
  } else {
    console.log("Incomplete user information.");
  }
};
const result = userInfo(userProfile);
console.log(result);
