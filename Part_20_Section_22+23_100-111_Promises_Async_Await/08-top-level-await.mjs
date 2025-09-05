// Top-level await (ESM). Запуск: node 08-top-level-await.mjs

const getPost = async (id) => {
  const r = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!r.ok) throw new Error("HTTP " + r.status);
  return r.json();
};

// Паралелізація: стартуємо перед await
const p1 = getPost(1);
const p2 = getPost(2);

try {
  const [a, b] = await Promise.all([p1, p2]);
  console.log("TLA ids:", a.id, b.id);
} catch (e) {
  console.error("TLA error:", e.message);
}

// TODO: Додайте гонку з таймаутом для одного з запитів (AbortController).