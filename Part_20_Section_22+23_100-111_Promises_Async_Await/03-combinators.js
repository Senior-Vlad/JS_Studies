const ok = (v, ms = 200) => new Promise((r) => setTimeout(() => r(v), ms));
const fail = (e, ms = 200) =>
  new Promise((_, rej) => setTimeout(() => rej(new Error(e)), ms));

(async () => {
  try {
    const [a, b] = await Promise.all([ok("A", 100), ok("B", 150)]);
    console.log("all:", a, b);
  } catch (e) {
    console.error("all error:", e.message);
  }

  const settled = await Promise.allSettled([ok(1, 50), fail("boom", 80)]);
  console.log("allSettled:", settled);

  try {
    const v = await Promise.race([ok("fast", 60), fail("slow fail", 200)]);
    console.log("race:", v);
  } catch (e) {
    console.error("race error:", e.message);
  }

  try {
    const v = await Promise.any([fail("x", 40), ok("y", 70), fail("z", 20)]);
    console.log("any:", v);
  } catch (e) {
    console.error("any AggregateError size:", e.errors?.length);
  }
})();

// TODO: Додайте таймер‑запит і продемонструйте who-wins для race(any) зі штучною затримкою.
