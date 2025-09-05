const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

// Паралельно, збереження порядку через Promise.all
async function fetchAllParallel(u) {
  const promises = u.map((url) => fetch(url).then((r) => r.json()));
  const results = await Promise.all(promises);
  console.log("parallel ordered ids:", results.map((x) => x.id));
}

// Послідовно (коли залежності або обмеження)
async function fetchSequential(u) {
  const out = [];
  for (const url of u) {
    const res = await fetch(url);
    out.push(await res.json());
  }
  console.log("sequential ids:", out.map((x) => x.id));
}

// Проста батч‑паралельність (по N одночасно)
async function fetchInBatches(u, batchSize = 2) {
  const out = [];
  for (let i = 0; i < u.length; i += batchSize) {
    const batch = u.slice(i, i + batchSize).map((url) => fetch(url).then((r) => r.json()));
    out.push(...(await Promise.all(batch)));
  }
  console.log("batches ids:", out.map((x) => x.id));
}

(async () => {
  await fetchAllParallel(urls);
  await fetchSequential(urls);
  await fetchInBatches(urls, 2);
})();

// TODO: Додайте перевірку res.ok та кидання помилки для 404; обгорніть виклики у try/catch.