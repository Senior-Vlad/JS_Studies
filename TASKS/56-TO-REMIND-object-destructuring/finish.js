/** ЗАДАЧА 56 - Деструктуризация объектов
 *
 * 1. Измените функцию "personInfo" так, чтобы получить в консоли такой же вывод
 *
 * 2. Объект, возвращаемый функцией "personInfo", должен содержать только сокращенные имена свойств
 */

/*
const personInfo = (personObject, friendQty = 0) => {
  return {
    name: personObject.name,
    personAge: personObject.age,
    origin: personObject.location.country,
    homeCity: personObject.location.city,
    friendsQty: friendQty,
    createdAtYear: new Date().getFullYear(),
  };
};
or
const personInfo = ({
  name,
  age: personAge,
  location: { country: origin, city: homeCity },
  friendsQty = 0,
  createdAtYear = new Date().getFullYear(),
} = personObject) => {
  return {
    name,
    personAge,
    origin,
    homeCity,
    friendsQty,
    createdAtYear,
  };
};
 */

const personInfo = (personObject) => {
  const {
    name,
    age: personAge,
    location: { country: origin, city: homeCity },
    friendsQty = 0,
    createdAtYear = new Date().getFullYear(),
  } = personObject;
  return {
    name,
    personAge,
    origin,
    homeCity,
    friendsQty,
    createdAtYear,
  };
};

const person = {
  name: "Alice",
  age: 19,
  location: {
    country: "England",
    city: "London",
  },
};

const result = personInfo(person);
// const date = new Date();
// console.log(date.getFullYear());
console.log(result);
/*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  createdAtYear: *current year*
}
*/
