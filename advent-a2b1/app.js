{
  const A = window.ADVENT;
  const S = A.settings;
  const KEY = "advent-a2b1-v1";
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => String(s).toLowerCase().replace(/[’‘`]/g, "'").replace(/[.,!?;:“”"]/g, "").replace(/\s+/g, " ").trim();

  // ---------- saved progress (this device only) ----------
  let state = { name: "", days: {}, opened: [], teacher: false, drafts: {}, levels: {} };
  try { const raw = localStorage.getItem(KEY); if (raw) state = Object.assign(state, JSON.parse(raw)); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };

  const stickerCount = () => Object.values(state.days).filter((d) => d.done).length;
  const starCount = () => Object.values(state.days).reduce((n, d) => n + (d.stars || 0), 0);

  // ---------- dates ----------
  const today = new Date();
  const openDate = (n) => new Date(S.year, 11, n);
  const isOpen = (n) => state.teacher || !S.unlockByDate || today >= openDate(n);
  const isToday = (n) => today.getFullYear() === S.year && today.getMonth() === 11 && today.getDate() === n;

  // stable shuffle per day+item so options don't jump around
  const shuffled = (arr, seed) => {
    let s = seed % 2147483647 || 1;
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { s = (s * 16807) % 2147483647; const j = s % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };

  const icons = {
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
    tick: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    gift: (c1, c2) => `<svg viewBox="0 0 80 80"><rect x="12" y="34" width="56" height="38" rx="4" fill="${c1}"/><rect x="8" y="24" width="64" height="14" rx="3" fill="${c1}" stroke="rgba(0,0,0,.08)"/><rect x="36" y="24" width="8" height="48" fill="${c2}"/><rect x="12" y="38" width="56" height="3" fill="rgba(0,0,0,.08)"/><path d="M40 24c-6-12-20-14-20-6 0 6 12 6 20 6zM40 24c6-12 20-14 20-6 0 6-12 6-20 6z" fill="${c2}"/><circle cx="40" cy="24" r="4" fill="${c2}"/></svg>`
  };
  const giftColours = [["#f2e6d6", "#a3302f"], ["#a3302f", "#f2e6d6"], ["#3d4f3e", "#c49a52"], ["#f2e6d6", "#3d4f3e"]];
  const stars = (n) => "★".repeat(n) + "☆".repeat(3 - n);

  // ---------- calendar ----------
  function renderGrid() {
    $("grid").innerHTML = A.days.map(({ day }) => {
      const open = isOpen(day);
      const d = state.days[day] || {};
      const label = open ? `Day ${day}${d.done ? ", done" : ""}` : `Day ${day}, opens on ${day} December`;
      return `<button type="button" class="tile${open ? "" : " locked"}${isToday(day) ? " today" : ""}" data-day="${day}" aria-label="${label}">
        <img src="img/tile${day}.jpg" alt="" loading="lazy" width="230" height="230">
        ${open ? "" : `<span class="lock">${icons.lock}${day} Dec</span>`}
        ${d.done ? `<span class="badge">${icons.tick}</span><span class="stars">${stars(d.stars || 0)}</span>` : ""}
      </button>`;
    }).join("");
  }

  function renderTally() {
    const n = stickerCount();
    $("tallyStickers").textContent = `${n} of 24 stickers`;
    $("tallyStars").textContent = `${starCount()} ★`;
    $("teacherFlag").hidden = !state.teacher;
  }

  function renderBook(newDay) {
    $("book").innerHTML = A.days.map(({ day }) => {
      const d = state.days[day];
      const r = ((day * 37) % 13) - 6;
      return d && d.done
        ? `<div class="slot got${day === newDay ? " new" : ""}" style="--r:${r}deg" title="Day ${day}"><img src="img/sticker${day}.jpg" alt="Sticker for day ${day}"></div>`
        : `<div class="slot" aria-label="Empty sticker space ${day}">${day}</div>`;
    }).join("");
    const bonus = A.days.filter((d) => d.bonus && state.days[d.day] && state.days[d.day].done).flatMap((d) => d.bonus.map((src) => ({ src, day: d.day })));
    $("bonus").hidden = !bonus.length;
    $("bonusList").innerHTML = bonus.map((b, k) => `<img class="bonus-st${b.day === newDay ? " new" : ""}" src="${esc(b.src)}" alt="" style="--r:${((k * 29) % 15) - 7}deg" loading="lazy">`).join("");
  }

  function renderGifts() {
    const n = stickerCount();
    $("gifts").innerHTML = A.presents.map((p, i) => {
      const opened = state.opened.includes(p.at);
      const ready = n >= p.at;
      const cls = opened ? "open" : ready ? "ready" : "closed";
      const note = opened ? "Opened · tap to see" : ready ? "Open me!" : `Collect ${p.at} stickers`;
      return `<button type="button" class="gift ${cls}" data-at="${p.at}" ${ready ? "" : 'aria-disabled="true"'}>
        ${icons.gift(giftColours[i][0], giftColours[i][1])}<b>${esc(p.name)}</b><span>${note}</span></button>`;
    }).join("");
  }

  function showGift(at) {
    const p = A.presents.find((x) => x.at === at);
    if (!p || stickerCount() < at) return;
    const first = !state.opened.includes(at);
    if (first) { state.opened.push(at); save(); burst(); }
    const box = $("giftOpen");
    if (p.gift === "certificate") {
      const name = state.name.trim() || "A brilliant student";
      box.innerHTML = `<h3>${esc(p.name)}</h3>
        <div class="cert" id="cert">
          <img src="img/sticker24.jpg" alt="">
          <p class="c1">Certificate of Achievement</p>
          <p>This is to certify that</p>
          <p class="c2">${esc(name)}</p>
          <p>completed all 24 days of the English Advent Calendar (A2–B1)<br>and collected <b>${starCount()} of 72 stars</b>.</p>
          <p>December ${S.year}</p>
        </div>
        <p class="hint" style="margin-top:12px">Type your name at the bottom of the page to put it on the certificate.</p>
        <button type="button" class="btn small" id="printCert">Print or save as PDF</button>`;
      const pb = $("printCert");
      pb.addEventListener("click", () => { try { window.print(); } catch (e) {} });
    } else {
      box.innerHTML = `<h3>${esc(p.name)}</h3><p>${esc(p.gift)}</p>`;
    }
    box.hidden = false;
    renderGifts();
    box.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function renderAll(newDay) { renderGrid(); renderTally(); renderBook(newDay); renderGifts(); }

  // ---------- day view ----------
  let current = 0;
  let work = null; // answers in progress for the open day
  const INFO = ["heading", "reading", "video", "script", "picture", "notebook", "checklist"];
  const blank = (d) => d.items.map((it) => (it.type === "order" || it.type === "wordsearch" ? [] : it.type === "match" ? {} : null));
  // a day with levels shows the chosen level's intro, word lists and tasks; null until a level is chosen
  function view(n) {
    const d = A.days[n - 1];
    if (!d.levels) return d;
    const L = d.levels.find((l) => l.id === (state.levels || {})[n]);
    return L ? Object.assign({}, d, { intro: L.intro || d.intro, glossary: L.glossary || d.glossary, items: L.items, level: L }) : Object.assign({}, d, { items: [], level: null });
  }
  const cur = () => view(current);
  const draftKey = (d) => (d.level ? `${d.day}-${d.level.id}` : d.day);
  const saveDraft = () => { if (current) { state.drafts = state.drafts || {}; state.drafts[draftKey(cur())] = work; save(); } };
  const nbPage = {}; // notebook spread shown, per item

  function openDay(n) {
    current = n;
    const d = view(n);
    $("dayImg").src = `img/tile${n}.jpg`;
    $("dayLabel").textContent = `Day ${n} · ${n} December`;
    $("dayTitle").textContent = isOpen(n) ? d.title : "Not yet!";
    $("daySkill").textContent = isOpen(n) ? d.skill : "";
    const src = A.days[n - 1];
    $("card").classList.toggle("wide", (src.levels ? src.levels.flatMap((l) => l.items) : src.items).some((it) => it.type === "notebook"));
    $("prev").disabled = n === 1;
    $("next").disabled = n === 24;
    if (!isOpen(n)) {
      $("dayBody").innerHTML = `<div class="locked-msg"><p>This door opens on <b>${n} December</b>. Come back then!</p></div>`;
    } else {
      const dr = state.drafts && state.drafts[draftKey(d)];
      work = dr && dr.length === d.items.length ? dr : blank(d);
      renderTask(d, false);
    }
    $("dayView").hidden = false;
    document.body.classList.add("locked-scroll");
    $("dayView").scrollTop = 0;
    if (location.hash !== `#day-${n}`) history.replaceState(null, "", `#day-${n}`);
    $("back").focus({ preventScroll: true });
  }

  function closeDay() {
    $("dayView").hidden = true;
    document.body.classList.remove("locked-scroll");
    history.replaceState(null, "", location.pathname + location.search);
    const t = document.querySelector(`.tile[data-day="${current}"]`);
    if (t) t.focus({ preventScroll: true });
  }

  // word search: where each word sits in the grid
  const wsCache = new Map();
  function wsPlaces(it) {
    if (wsCache.has(it)) return wsCache.get(it);
    const g = it.grid, R = g.length, C = g[0].length, out = {};
    for (const w of it.words) {
      search: for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) for (const [dr, dc] of [[0, 1], [1, 0], [1, 1], [-1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1]]) {
        let ok = true;
        for (let k = 0; k < w.length; k++) { const rr = r + dr * k, cc = c + dc * k; if (rr < 0 || cc < 0 || rr >= R || cc >= C || g[rr][cc] !== w[k]) { ok = false; break; } }
        if (ok) { out[w] = Array.from({ length: w.length }, (_, k) => `${r + dr * k}-${c + dc * k}`); break search; }
      }
    }
    wsCache.set(it, out);
    return out;
  }
  let wsStart = null; // {i, r, c}

  const firstWord = (w, k) => (k === 0 && !/^I('m)?$/.test(w) ? w.toLowerCase() : w);

  function itemHTML(it, i, day, checked, showAns) {
    const seed = day * 100 + i + 7;
    if (it.type === "heading") {
      return `<li class="sec${it.deco ? " has-deco" : ""}">${it.deco ? `<img class="deco" src="${esc(it.deco)}" alt="" loading="lazy">` : ""}<h3>${esc(it.text)}</h3>${it.sub ? `<p class="hint">${esc(it.sub)}</p>` : ""}${it.bank ? `<p class="bank">${it.bank.map((w) => `<span>${esc(w)}</span>`).join("")}</p>` : ""}</li>`;
    }
    if (it.type === "reading") return `<li class="sec"><div class="reading">${esc(it.text)}</div></li>`;
    if (it.type === "picture") return `<li class="sec"><figure class="pic"><img src="${esc(it.src)}" alt="${esc(it.alt || "")}" loading="lazy">${it.caption ? `<figcaption>${esc(it.caption)}</figcaption>` : ""}</figure></li>`;
    if (it.type === "script") {
      const who = [...new Set(it.lines.map((l) => l.who))].filter((w) => (it.roles || ["Harry", "Ron", "Hermione"]).includes(w));
      const mark = (g) => esc(g).replace(/‿/g, '<i class="lk">‿</i>').replace(/\/\//g, '<i class="ps">//</i>').replace(/(^|[^/<])\/(?![/])/g, '$1<i class="ps">/</i>').replace(/[↗↘]/g, (m) => `<i class="tn">${m}</i>`).replace(/\(([^)]*)\)/g, '<em>($1)</em>');
      return `<li class="sec"><div class="script" data-role="all">
        <div class="script-top"><h4>${esc(it.title || "Script")}</h4>
          <div class="roles" role="group" aria-label="Practise as">Practise as: <button type="button" class="role" data-role="all" aria-pressed="true">Everyone</button>${who.map((w) => `<button type="button" class="role" data-role="${esc(w)}" aria-pressed="false">${esc(w)}</button>`).join("")}</div></div>
        <p class="legend">${it.legend.map(([k, v]) => `<span><b>${mark(k)}</b> ${esc(v)}</span>`).join("")}</p>
        ${it.lines.map((l) => `<div class="sline" data-who="${esc(l.who)}"><p class="stext"><b>${esc(l.who)}:</b> ${esc(l.text)}</p><p class="sguide">${mark(l.guide)}</p></div>`).join("")}
      </div></li>`;
    }
    if (it.type === "notebook") return `<li class="sec">${notebookHTML(it, i)}</li>`;
    if (it.type === "checklist") return `<li class="sec"><div class="checklist"><p>${esc(it.title)}</p>${it.items.map((t) => `<label><input type="checkbox"> ${esc(t)}</label>`).join("")}</div></li>`;
    if (it.type === "video") {
      const id = encodeURIComponent(it.youtube);
      return `<li class="sec"><div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0" title="${esc(it.title || "Video")}" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div><p class="hint"><a href="https://youtu.be/${id}" target="_blank" rel="noopener">Open the video on YouTube</a> (for subtitles, transcript or 0.75 speed)</p></li>`;
    }
    let body = "";
    if (it.type === "choice") {
      const order = shuffled(it.options.map((_, k) => k), seed);
      const fixed = it.options[0] === "True" && it.options[1] === "False";
      body = `<div class="opts">${(fixed ? it.options.map((_, k) => k) : order).map((k) => `<button type="button" class="opt" data-i="${i}" data-k="${k}" aria-pressed="${work[i] === k}" ${checked ? "disabled" : ""}>${esc(it.options[k])}</button>`).join("")}</div>`;
    } else if (it.type === "gap") {
      body = `<input class="gap-input" data-i="${i}" id="gap-${day}-${i}" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Your answer" value="${esc(work[i] || "")}" ${checked ? "disabled" : ""}>`;
    } else if (it.type === "write") {
      body = `<textarea class="write-input" data-i="${i}" id="write-${day}-${i}" rows="2" aria-label="Your answer">${esc(work[i] || "")}</textarea>`;
    } else if (it.type === "match") {
      const rights = shuffled([...new Set(it.pairs.map((p) => p[1]))], seed);
      body = `<div class="${it.images ? "pics" : "pairs"}">${it.pairs.map(([l], k) => {
        const v = work[i][k] || "";
        const mark = checked ? (v === it.pairs[k][1] ? " good" : " bad") : "";
        const left = it.images ? `<img src="${esc(l)}" alt="Picture ${k + 1}" loading="lazy" width="140" height="140">` : `<b>${esc(l)}</b>`;
        return `<label class="pair${mark}">${left}<select data-i="${i}" data-k="${k}" ${checked ? "disabled" : ""}><option value="">Choose…</option>${rights.map((r) => `<option${r === v ? " selected" : ""}>${esc(r)}</option>`).join("")}</select></label>`;
      }).join("")}</div>`;
    } else if (it.type === "order") {
      const words = it.answer.split(" ");
      const pool = shuffled(words.map((w, k) => k), seed + 3);
      const used = work[i];
      body = `<div class="built" aria-label="Your sentence">${used.map((k) => `<button type="button" class="chip" data-i="${i}" data-out="${k}" ${checked ? "disabled" : ""}>${esc(firstWord(words[k], k))}</button>`).join("")}</div>
        <div class="opts">${pool.filter((k) => !used.includes(k)).map((k) => `<button type="button" class="chip" data-i="${i}" data-in="${k}" ${checked ? "disabled" : ""}>${esc(firstWord(words[k], k))}</button>`).join("")}</div>`;
    } else if (it.type === "wordsearch") {
      const places = wsPlaces(it);
      const found = new Set(work[i]);
      const lit = new Set([...found].flatMap((w) => places[w] || []));
      const shown = showAns && checked ? new Set(it.words.filter((w) => !found.has(w)).flatMap((w) => places[w] || [])) : new Set();
      body = `<div class="ws-wrap"><div class="ws" style="--cols:${it.grid[0].length}" role="grid" aria-label="Word search">${it.grid.map((row, r) => [...row].map((ch, c) => {
        const id = `${r}-${c}`;
        const sel = wsStart && wsStart.i === i && wsStart.r === r && wsStart.c === c;
        return `<button type="button" class="ws-cell${lit.has(id) ? " lit" : ""}${shown.has(id) ? " shown" : ""}${sel ? " sel" : ""}" data-i="${i}" data-r="${r}" data-c="${c}" ${checked ? "disabled" : ""} aria-label="${ch}">${ch}</button>`;
      }).join("")).join("")}</div></div>
        <p class="ws-count">Found ${found.size} of ${it.words.length}</p>
        <p class="ws-words">${it.words.map((w) => `<span class="${found.has(w) ? "got" : ""}">${esc(w.charAt(0) + w.slice(1).toLowerCase())}</span>`).join("")}</p>`;
    }
    const [got, max] = points(it, i);
    let fix = "";
    if (showAns && checked && max && got < max && it.type !== "wordsearch") {
      const a = it.type === "choice" ? it.options[it.answer] : it.type === "gap" ? it.answer[0] : it.type === "order" ? it.answer + "." : it.pairs.filter((p, k) => work[i][k] !== p[1]).map((p) => `${it.images ? "picture " + (it.pairs.indexOf(p) + 1) : p[0]} → ${p[1]}`).join(", ");
      fix = `<p class="fix">Answer: ${esc(a)}</p>`;
    }
    const q = esc(it.q).replace("___", "<b>_____</b>");
    const cls = checked && max ? (got === max ? " right" : " wrong") : "";
    return `<li class="item${cls}" data-i="${i}" data-n="${qNum(cur(), i)}"><p class="q">${q}</p>${body}${fix}</li>`;
  }

  // story text split into notebook pages by length; wide screens show two pages side by side
  const nbCache = new Map();
  function nbPages(it) {
    if (nbCache.has(it)) return nbCache.get(it);
    const budget = it.pageChars || 900, pages = [[]];
    let n = 0;
    it.paras.forEach((p, k) => {
      if (n && n + p.length > budget) { pages.push([]); n = 0; }
      pages[pages.length - 1].push(k); n += p.length;
    });
    nbCache.set(it, pages);
    return pages;
  }
  const nbWide = () => matchMedia("(min-width: 860px)").matches;
  function notebookHTML(it, i) {
    const pages = nbPages(it), per = nbWide() ? 2 : 1;
    const spreads = Math.ceil(pages.length / per);
    const s = Math.min(nbPage[`${current}-${i}`] || 0, spreads - 1);
    const page = (pi) => pages[pi] ? `<div class="nb-page">${pi === 0 ? `<h4>${esc(it.title)}</h4><p class="nb-by">${esc(it.by || "")}</p>` : ""}${pages[pi].map((k) => `<p>${it.numbered ? `<span class="nb-n">${k + 1}</span>` : ""}${esc(it.paras[k])}</p>`).join("")}<span class="nb-folio">${pi + 1}</span></div>` : `<div class="nb-page nb-end"><p>The end</p></div>`;
    const shown = Array.from({ length: per }, (_, k) => s * per + k);
    return `<div class="notebook${per === 2 ? " wide" : ""}" data-i="${i}">
      <div class="nb-cover">${per === 2 ? `${page(shown[0])}<div class="nb-rings" aria-hidden="true"></div>${page(shown[1])}` : `<div class="nb-rings" aria-hidden="true"></div>${page(shown[0])}`}</div>
      <div class="nb-nav"><button type="button" class="btn small ghost nb-turn" data-i="${i}" data-step="-1" ${s === 0 ? "disabled" : ""} aria-label="Previous page">‹ Back</button>
      <span>${per === 2 ? `Pages ${shown[0] + 1}–${Math.min(shown[1] + 1, pages.length)}` : `Page ${s + 1}`} of ${pages.length}</span>
      <button type="button" class="btn small ghost nb-turn" data-i="${i}" data-step="1" ${s >= spreads - 1 ? "disabled" : ""} aria-label="Next page">Next ›</button></div>
    </div>`;
  }

  // question number inside its task section
  function qNum(d, i) {
    let n = 0;
    for (let k = 0; k <= i; k++) n = d.items[k].type === "heading" ? 0 : INFO.includes(d.items[k].type) ? n : n + 1;
    return n;
  }

  // [points got, points possible]; info and free-writing items are worth nothing
  function points(it, i) {
    const w = work[i];
    if (it.type === "choice") return [w === it.answer ? 1 : 0, 1];
    if (it.type === "gap") return [w != null && it.answer.some((a) => norm(a) === norm(w)) ? 1 : 0, 1];
    if (it.type === "match") return [it.pairs.filter((p, k) => w[k] === p[1]).length, it.pairs.length];
    if (it.type === "order") return [norm(w.map((k) => it.answer.split(" ")[k]).join(" ")) === norm(it.answer) ? 1 : 0, 1];
    if (it.type === "wordsearch") { const max = Math.min(6, it.words.length); return [Math.round((w.length / it.words.length) * max), max]; }
    return [0, 0];
  }

  function renderTask(d, checked, showAns, result) {
    const saved = state.days[d.day];
    const prior = saved && saved.done && !checked ? `<p class="hint">You already have this sticker (${stars(saved.stars || 0)}). Try again to win more stars!</p>` : "";
    const gloss = d.glossary ? `<details class="gloss"><summary>Word lists for this lesson</summary>${d.glossary.map((g) => `<h4>${esc(g.title)}</h4><dl>${g.rows.map(([en, tr]) => `<div><dt>${esc(en)}</dt><dd>${esc(tr)}</dd></div>`).join("")}</dl>`).join("")}</details>` : "";
    const cover = d.cover ? `<img class="cover" src="${esc(d.cover.src)}" alt="${esc(d.cover.alt || "")}" width="600" height="900">` : "";
    const lv = d.levels ? `<div class="levels" role="group" aria-label="Choose your level">${d.levels.map((l) => `<button type="button" class="level" data-level="${esc(l.id)}" aria-pressed="${d.level === l}"><b>${esc(l.label)}</b><span>${esc(l.tag || "")}</span></button>`).join("")}</div>` : "";
    if (d.levels && !d.level) {
      $("dayBody").innerHTML = `<div class="top${cover ? " has-cover" : ""}">${cover}<div><p class="intro">${esc(A.days[d.day - 1].intro)}</p><p class="pick">Choose your level:</p>${lv}</div></div>`;
      return;
    }
    $("dayBody").innerHTML = `${prior}<div class="top${cover ? " has-cover" : ""}">${cover}<div>${lv}<p class="intro">${esc(d.intro)}</p></div></div>${gloss}
      ${d.text ? `<div class="reading">${esc(d.text)}</div>` : ""}
      <ol class="items">${d.items.map((it, i) => itemHTML(it, i, d.day, checked, showAns)).join("")}</ol>
      ${result || ""}
      <div class="actions">${checked
        ? `<button type="button" class="btn" id="retry">Try again</button>${showAns ? "" : '<button type="button" class="btn ghost" id="showAns">Show answers</button>'}${d.day < 24 ? '<button type="button" class="btn green" id="goNext">Next day →</button>' : ""}`
        : '<button type="button" class="btn" id="check">Check my answers</button>'}</div>`;
  }

  function check() {
    const d = cur();
    const missing = d.items.findIndex((it, i) => (it.type === "choice" && work[i] == null) || (it.type === "gap" && !(work[i] || "").trim()) || (it.type === "order" && !work[i].length) || (it.type === "match" && Object.values(work[i]).filter(Boolean).length < it.pairs.length));
    if (missing > -1) {
      const li = document.querySelector(`.item[data-i="${missing}"]`);
      if (li) { li.scrollIntoView({ behavior: "smooth", block: "center" }); li.animate?.([{ background: "color-mix(in srgb, var(--gold) 25%, transparent)" }, { background: "transparent" }], 1200); }
      return;
    }
    let right = 0, total = 0;
    d.items.forEach((it, i) => { const [g, m] = points(it, i); right += g; total += m; });
    const pct = total ? Math.round((right / total) * 100) : 100;
    const st = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= S.passPercent ? 1 : 0;
    const prev = state.days[d.day] || {};
    const wasDone = !!prev.done;
    const before = stickerCount();
    if (st > 0) state.days[d.day] = Object.assign({ done: true, stars: Math.max(st, prev.stars || 0), best: Math.max(pct, prev.best || 0) }, d.level ? { level: d.level.id } : {});
    saveDraft();
    const after = stickerCount();
    const newGift = A.presents.find((p) => before < p.at && after >= p.at);
    let html;
    if (st > 0) {
      html = `<div class="result" role="status">
        <p class="big">${st === 3 ? "Excellent!" : st === 2 ? "Well done!" : "Good job!"}</p>
        <p>${right} of ${total} points</p>
        <p class="st">${stars(st)}</p>
        ${wasDone ? "" : `<img src="img/sticker${d.day}.jpg" alt="Your new sticker"><p><b>New sticker for your sticker book!</b></p>`}
        ${wasDone || !d.bonus ? "" : `<p><b>Bonus! ${d.bonus.length} extra stickers:</b></p><div class="bonus-row">${d.bonus.map((b) => `<img src="${esc(b)}" alt="">`).join("")}</div>`}
        ${newGift ? `<p>🎁 You unlocked a present: <b>${esc(newGift.name)}</b>. Find it under the calendar.</p>` : ""}
      </div>`;
      if (!wasDone || newGift) burst();
    } else {
      html = `<div class="result" role="status"><p class="big">Nearly there!</p><p>${right} of ${total} points. Get ${Math.ceil((S.passPercent / 100) * total)} to win the sticker. Try again!</p></div>`;
    }
    renderTask(d, true, false, html);
    renderAll(wasDone ? 0 : d.day);
    const r = document.querySelector(".result");
    if (r) r.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function rerenderItem(i) {
    const d = cur();
    const li = document.querySelector(`.item[data-i="${i}"]`);
    const tmp = document.createElement("ol");
    tmp.innerHTML = itemHTML(d.items[i], i, d.day, false, false);
    if (li) li.replaceWith(tmp.firstElementChild);
  }

  function wsTap(i, r, c) {
    const it = cur().items[i];
    if (!wsStart || wsStart.i !== i) { wsStart = { i, r, c }; return rerenderItem(i); }
    const places = wsPlaces(it);
    const a = `${wsStart.r}-${wsStart.c}`, b = `${r}-${c}`;
    wsStart = null;
    if (a !== b) {
      const hit = it.words.find((w) => { const p = places[w]; return p && ((p[0] === a && p[p.length - 1] === b) || (p[0] === b && p[p.length - 1] === a)); });
      if (hit && !work[i].includes(hit)) { work[i].push(hit); saveDraft(); }
    }
    rerenderItem(i);
  }

  function burst() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const b = $("burst");
    const bits = ["❤", "★", "❄", "✦"];
    const cols = ["#a3302f", "#c49a52", "#3d4f3e", "#d9b3a3"];
    b.innerHTML = Array.from({ length: 36 }, (_, i) => `<i style="left:${(i * 53) % 100}%;color:${cols[i % 4]};font-size:${14 + (i % 4) * 5}px;animation-delay:${(i % 9) * 0.08}s">${bits[i % 4]}</i>`).join("");
    setTimeout(() => { b.innerHTML = ""; }, 3200);
  }

  // ---------- events ----------
  $("grid").addEventListener("click", (e) => {
    const t = e.target.closest(".tile");
    if (t) openDay(+t.dataset.day);
  });
  $("back").addEventListener("click", closeDay);
  $("prev").addEventListener("click", () => current > 1 && openDay(current - 1));
  $("next").addEventListener("click", () => current < 24 && openDay(current + 1));
  $("dayView").addEventListener("click", (e) => { if (e.target === $("dayView")) closeDay(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("dayView").hidden) closeDay(); });

  $("dayBody").addEventListener("click", (e) => {
    const d = cur();
    const b = e.target.closest("button");
    if (!b || b.disabled) return;
    if (b.classList.contains("level")) {
      state.levels = state.levels || {};
      state.levels[current] = b.dataset.level; save();
      return openDay(current);
    }
    if (b.classList.contains("nb-turn")) {
      const k = `${current}-${b.dataset.i}`;
      nbPage[k] = Math.max(0, (nbPage[k] || 0) + +b.dataset.step);
      const nb = b.closest(".notebook");
      const tmp = document.createElement("div");
      tmp.innerHTML = notebookHTML(d.items[+b.dataset.i], +b.dataset.i);
      nb.replaceWith(tmp.firstElementChild);
      const nn = document.querySelector(`.notebook[data-i="${b.dataset.i}"]`);
      nn.scrollIntoView({ behavior: "smooth", block: "start" });
      const nbtn = nn.querySelector(`.nb-turn[data-step="${b.dataset.step}"]`);
      (nbtn && !nbtn.disabled ? nbtn : nn.querySelector(".nb-turn:not([disabled])"))?.focus({ preventScroll: true });
      return;
    }
    if (b.id === "check") return check();
    if (b.id === "retry") { work = blank(d); saveDraft(); renderTask(d, false); $("dayView").scrollTop = 0; return; }
    if (b.id === "showAns") { const res = document.querySelector(".result"); renderTask(d, true, true, res ? res.outerHTML.replace("<img", '<img style="animation:none"') : ""); return; }
    if (b.id === "goNext") return openDay(current + 1);
    if (b.classList.contains("role")) {
      const box = b.closest(".script");
      box.dataset.role = b.dataset.role;
      box.querySelectorAll(".role").forEach((r) => r.setAttribute("aria-pressed", r === b));
      return;
    }
    const i = +b.dataset.i;
    if (b.classList.contains("ws-cell")) return wsTap(i, +b.dataset.r, +b.dataset.c);
    if (b.classList.contains("opt")) { work[i] = +b.dataset.k; saveDraft(); b.parentElement.querySelectorAll(".opt").forEach((o) => o.setAttribute("aria-pressed", o === b)); return; }
    if (b.dataset.in != null) { work[i].push(+b.dataset.in); }
    else if (b.dataset.out != null) { work[i] = work[i].filter((k) => k !== +b.dataset.out); }
    else return;
    saveDraft();
    rerenderItem(i);
  });
  $("dayBody").addEventListener("input", (e) => {
    const el = e.target;
    if (el.classList.contains("gap-input") || el.classList.contains("write-input")) { work[+el.dataset.i] = el.value; saveDraft(); }
  });
  $("dayBody").addEventListener("change", (e) => {
    const el = e.target;
    if (el.tagName === "SELECT") { work[+el.dataset.i][+el.dataset.k] = el.value; saveDraft(); }
  });
  $("dayBody").addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.classList.contains("gap-input")) {
      const ins = [...document.querySelectorAll(".gap-input")];
      const nx = ins[ins.indexOf(e.target) + 1];
      if (nx) nx.focus(); else e.target.blur();
    }
  });

  $("gifts").addEventListener("click", (e) => {
    const g = e.target.closest(".gift");
    if (g && !g.classList.contains("closed")) showGift(+g.dataset.at);
  });

  $("studentName").value = state.name;
  $("studentName").addEventListener("input", (e) => { state.name = e.target.value; save(); const c = document.querySelector("#cert .c2"); if (c) c.textContent = state.name.trim() || "A brilliant student"; });

  $("reset").addEventListener("click", () => { $("resetConfirm").hidden = false; });
  $("resetNo").addEventListener("click", () => { $("resetConfirm").hidden = true; });
  $("resetYes").addEventListener("click", () => {
    state = { name: state.name, days: {}, opened: [], teacher: state.teacher, drafts: {}, levels: {} };
    save(); $("resetConfirm").hidden = true; $("giftOpen").hidden = true; renderAll();
  });

  $("teacherForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if ($("pin").value.trim() === String(S.teacherPin)) {
      state.teacher = true; save(); renderAll();
      $("pinMsg").textContent = "Every day is open now.";
      $("pin").value = "";
    } else {
      $("pinMsg").textContent = "That PIN is not right.";
    }
  });
  $("teacherOff").addEventListener("click", () => { state.teacher = false; save(); renderAll(); });

  const fromHash = () => { const m = /^#day-(\d{1,2})$/.exec(location.hash); const n = m ? +m[1] : 0; if (n >= 1 && n <= 24) openDay(n); };
  window.addEventListener("hashchange", fromHash);

  let wasWide = nbWide();
  addEventListener("resize", () => {
    if (nbWide() === wasWide) return;
    wasWide = nbWide();
    const d = current && cur();
    document.querySelectorAll(".notebook").forEach((nb) => {
      const i = +nb.dataset.i, k = `${current}-${i}`;
      nbPage[k] = wasWide ? Math.floor((nbPage[k] || 0) / 2) : (nbPage[k] || 0) * 2;
      const tmp = document.createElement("div");
      tmp.innerHTML = notebookHTML(d.items[i], i);
      nb.replaceWith(tmp.firstElementChild);
    });
  });

  renderAll();
  fromHash();
}
