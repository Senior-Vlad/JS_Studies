// Де ставити try/catch:
// - На "кордоні" сценарію (верхній рівень use-case), а не навколо кожного await.
// - Групуйте незалежні await-и у Promise.all та ловіть один раз.

async function getPost(id) {
  const r = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!r.ok) throw new Error("HTTP " + r.status);
  return r.json();
}

async function scenario() {
  try {
    // Стартуємо паралельно
    const p1 = getPost(1);
    const p2 = getPost(2);
    const [a, b] = await Promise.all([p1, p2]);
    console.log("ids:", a.id, b.id);
  } catch (e) {
    console.error("scenario error:", e.message);
  } finally {
    console.log("done");
  }
}

scenario();

// Антипатерн: await у map колбеку без Promise.all
// Правильно:
async function getMany(ids) {
  const promises = ids.map((id) => getPost(id));
  return Promise.all(promises);
}

// TODO: Додайте finally у getMany‑виклику та поясніть, коли він виконується.