Блок A (Promises)
A1. Реалізуйте delay(ms) та використайте його у then‑ланцюзі.
A2. safeJSON(str): resolve(parsed) або reject(Error("Bad JSON")) — без new Promise.
A3. Поясніть порядок логів для: console.log(1); Promise.resolve().then(()=>console.log(2)); console.log(3).

Блок B (Комбінатори)
B1. Зробіть 3 запити у Promise.all, один має падати. Перевірте поведінку.
B2. Те саме через allSettled, розберіть статуси.
B3. Зробіть гонку race між fetch і таймаутом — хто виграє?

Блок C (Паралельно/послідовно)
C1. Завантажте 5 постів паралельно і виведіть id у правильному порядку.
C2. Те саме послідовно; порівняйте час.

Блок D (Async/Await)
D1. Напишіть getPost(id) з перевіркою res.ok; використайте у сценарії з try/catch.
D2. Стартуйте 3 виклики до await (не по черзі) і дочекайтесь Promise.all.

Блок E (Надійність)
E1. Реалізуйте fetchWithRetry(url, attempts, baseDelay) з backoff і метриками.
E2. Реалізуйте fetchWithTimeout(url, ms) через AbortController.