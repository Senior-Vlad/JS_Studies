// Теорія:
// Promise — контейнер майбутнього результату асинхронної операції.
// Стани: pending -> fulfilled | rejected. then обробляє успіх, catch — помилку, finally — завжди.
// then завжди виконується асинхронно (мікротаска).

// Приклад: створення та споживання Promise
const randomOp = () =>
  new Promise((resolve, reject) => {
    const ok = Math.random() > 0.3;
    // setTimeout(function () {
    //   ok ? resolve("OK") : reject(new Error("Fail"));
    // }, 2000);
    setTimeout(
      () => (ok ? resolve({ status: "OK", ok }) : reject(new Error("Fail"))),
      2000
    );
  });

console.log("A) start");

randomOp()
  .then((v) => {
    console.log("B) then:", v);
    return "NEXT";
  })
  .then((v) => {
    console.log("C) then2:", v);
    return toUpperAsync((v = "Wow"));
  })
  .then((v) => {
    console.log("D) then3:", v);
  })
  .then((v) => {
    console.log("E) then4:", v);
    randomOp()
      .then((v) => {
        console.log("F) then5:", v);
      })
      .catch((e) => {
        console.log("F) catch:", e.message);
      });
  })
  .catch((e) => {
    console.log("X) catch:", e.message);
  })
  .finally(() => {
    console.log("Z) finally");
  });

console.log("A+) after scheduling");
// Порядок: A) -> A+) -> ... потім then/catch/finally (мікротаски після таймеру).

// Демонстрація мікротасок
Promise.resolve().then(() => console.log("microtask 1"));
setTimeout(() => console.log("macrotask (timeout)"), 0);
Promise.resolve().then(() => console.log("microtask 2"));

// TODO 1: Реалізуйте delay(ms), що повертає Promise і резолвиться через ms.
// Приклад: await delay(300); або delay(300).then(...)

function delay(ms) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        if (typeof ms !== "number") {
          return new Error(`Bad Input`);
        }
        console.log("Waiting", ms, "ms");
        resolve();
      }, ms);
    } catch (e) {
      console.log(`Input error: ${e.message}, ${ms} is not a number !`);
      reject(`Input error: ${e.message}`);
    }
  });
}

delay("3000ms");
delay("3000");
delay(3000);

// TODO 2: Напишіть toUpperAsync(s), що повертає Promise<string>.
// Якщо s не рядок — reject з помилкою "Not a string".

class AsyncUtilError extends Error {
  constructor(message) {
    super(message);
    this.name = "AsyncUtilError";
  }
}

function toUpperAsync(s) {
  if (typeof s !== "string") {
    return Promise.reject(new AsyncUtilError("Not a string"));
  } else {
    return new Promise((done) => setTimeout(() => done(s.toUpperCase()), 1000));
  }
}

// TODO 3: Поясніть у коментарі, чому then виконується після "A+ after scheduling".
// 3 - Тому що then виконується асинхронно: спочатку виконується весь синхронний код, потім мікротаски (наприклад, .then), а вже після них макротаски (наприклад, setTimeout).
//що у файлі, адже їм не потрібно чекати, вони моментально, практично, йдуть у виконання, потім, вже виконуються
// асинхронні таски, мікротаски (мікротаски це - функції, які виконуються після завершення поточного стеку викликів, але перед макротасками)
