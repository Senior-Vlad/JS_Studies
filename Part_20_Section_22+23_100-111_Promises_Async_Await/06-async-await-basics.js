// Теорія:
// async функція завжди повертає Promise.
// await чекає на Promise і повертає його значення або кидає помилку (якщо reject).

async function addAsync(a, b) {
  return a + b;
}

async function demo() {
  try {
    const v = await addAsync(2, 3);
    console.log("sum:", v);
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const json = await res.json();
    console.log("post id:", json.id);
  } catch (e) {
    console.error("demo error:", e.message);
  } finally {
    console.log("demo finally");
  }
}

demo();

// Еквівалент через then:
addAsync(2, 3)
  .then((v) => console.log("then sum:", v))
  .catch((e) => console.error("then error:", e));

// TODO: Напишіть getPost(id) з перевіркою res.ok і використайте його у demo2 з try/catch.