const delay = (ms) => new Promise((r) => setTimeout(r, ms));

async function getJSON(url, { signal } = {}) {
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
  return res.json();
}

// Таймаут через AbortController
export async function fetchWithTimeout(url, ms = 2000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    return await getJSON(url, { signal: ctrl.signal });
  } finally {
    clearTimeout(t);
  }
}

// Ретраї з експоненційним backoff
export async function fetchWithRetry(url, attempts = 3, baseDelay = 200) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try {
      return await getJSON(url);
    } catch (e) {
      lastErr = e;
      await delay(baseDelay * 2 ** i);
    }
  }
  throw lastErr;
}

// Демонстрація
(async () => {
  try {
    const d1 = await fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 1000);
    console.log("timeout OK:", d1.id);
  } catch (e) {
    console.error("timeout error:", e.message);
  }

  try {
    const d2 = await fetchWithRetry("https://jsonplaceholder.typicode.com/posts/2", 3, 150);
    console.log("retry OK:", d2.id);
  } catch (e) {
    console.error("retry error:", e.message);
  }
})();

// TODO: Додайте параметр maxDelay для обмеження backoff; зберіть метрики (кількість спроб).