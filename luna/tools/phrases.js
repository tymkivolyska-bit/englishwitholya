// Lists every phrase the page can say, for tools/make_audio.py.
// Usage: node tools/phrases.js > /tmp/phrases.json
global.window = {};
require("../lessons.js");
const L = window.LESSONS;
const out = new Map();           // key -> {text, sound?}
const akey = t => String(t).replace(/\(.*?\)/g, "").toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9' -]/g, " ").replace(/\s+/g, " ").trim();
const add = t => { if (t && akey(t)) out.set(akey(t), { text: String(t).replace(/\(.*?\)/g, "").replace(/[^\w\s.,'!?-]/g, "").replace(/\s+/g, " ").trim() }); };
const snd = s => out.set("/" + s, { sound: s });
const NUMS = ["zero", "one", "two", "three"];
add("Hello Luna! Let's read!");
for (const les of L) {
  (les.words || []).forEach(p => add(p[0]));
  for (const t of les.tasks) {
    add(t.say);
    (t.items || []).forEach(it => {
      if (it.example) add(it.example);
      if (t.type === "spy") add(it.w);
      if (t.type === "cvc") { add(it.w.replace(/-/g, "")); (it.w.includes("-") ? it.w.split("-") : it.w.split("")).forEach(snd); }
      if (t.type === "join") { add(it.w); it.cols.forEach(c => c.forEach(snd)); }
    });
    if (t.type === "colour") t.words.forEach(add);
    if (t.type === "plate") {
      add("On my plate today"); add("and"); add("My plate is empty! Tap the food to put it on the plate.");
      t.foods.forEach(f => { add("there is " + f.one); for (let n = 2; n <= 3; n++) add("there are " + NUMS[n] + " " + f.many); });
    }
  }
}
console.log(JSON.stringify(Object.fromEntries(out), null, 1));
