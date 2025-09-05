// Теорія:
// - then може повертати значення (йде далі як resolved) або інший Promise (ланцюг чекає).
// - Будь-який throw у then => reject, який підіймається до найближчого catch.
// - finally не змінює результат, але виконується завжди (окрім випадку падіння у finally).

const doubleAsync = (n) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(n, n * 2);
      return resolve(n * 2);
    }, 1000)
  );

const chain = doubleAsync(2)
  .then((x) => x + 1) // 5
  .then((y) => doubleAsync(y)) // 10
  .then((z) => {
    if (z > 9) throw new Error("Too big");
    return z;
  })
  .catch((e) => {
    console.log("catch:", e.message);
    return 0; // відновлення після помилки
  })
  .finally(() => console.log("finally executed"));

chain.then((v) => console.log("result:", v));

// Антипатерн: забутий return у then, коли очікується ланцюг
Promise.resolve(1)
  .then((v) => {
    doubleAsync(v); // забули return — ланцюг не чекатиме на цей проміс. Тобто, мало бути: return doubleAsync(v);
    // а якщо написати return doubleAsync(v) + 1; то це буде фактично (без подвоєння) та сама ідея що була з return v+1? - так
    return v + 1;
  })
  .then((v) => console.log("anti-pattern result (not awaited):", v));

// Правильно: повернути проміс
Promise.resolve(1)
  .then((v) => doubleAsync(v))
  .then((v) => console.log("proper chain result:", v));

// TODO 1: Напишіть safeJSON(str):
//  - якщо JSON.parse(str) успішний — resolve(value),
//  - якщо помилка — reject(Error("Bad JSON")).
//  Використайте без new Promise, через Promise.resolve().then(() => JSON.parse(str))

// function safeJSON(str) {
//   return new Promise((resolve, reject) => {
//     try {
//       const value = JSON.parse(str);
//       setTimeout(() => resolve(value), 1000);
//     } catch (e) {
//       setTimeout(() => reject(new Error(`Bad JSON: ${e.message}`)), 100);
//     }
//   });
// }

function safeJSON(str) {
  return Promise.resolve()
    .then(() => {
      return JSON.parse(str);
    })
    .catch((e) => {
      throw new Error(`Bad JSON: ${e.message}`);
    });
  // try {
  //   JSON.parse(str);
  // } catch (e) {
  //   return Promise.reject(new Error(`Bad JSON: ${e.message}`));
  // } ?
}

safeJSON('{"a": 1}')
  .then((v) => {
    setTimeout(() => {
      console.log("Parsed value:", v);
    }, 2000);
  })
  .catch((e) => {
    setTimeout(() => {
      console.error(`An error occured: ${e}`);
    }, 500);
  })
  .finally(() => {
    setTimeout(() => {
      console.log("Parsing finished.");
    }, 2500);
  });

safeJSON("I am a string")
  .then((value) => {
    console.log("Parsed value:", value);
  })
  .catch((e) => {
    console.error(`An error occured: ${e}`);
  })
  .finally(() => {
    console.log("Parsing finished.");
  });

// TODO 2: Побудуйте ланцюг, що обчислює (((1*2)+3)*4) з використанням doubleAsync і then.

const chain2 = doubleAsync(1)
  .then((v) => doubleAsync(v + 3))
  .then((v) => doubleAsync(v * 4))
  .catch((e) => {
    console.log("catch:", e.message);
  });

// TODO 3: Поясніть різницю між catch наприкінці ланцюга та проміжним catch.
/*
На прикінці ланцюга catch збирає всі помилки і обробляє їх для подальшого повідомлення.
Проміжний catch обробляє помилки, які виникають до нього, і дозволяє продовжити ланцюг.
*/
