(() => {
  const STORE_KEY = "advent-calendar-progress-v1";
  const grid = document.getElementById("grid");
  const view = document.getElementById("dayView");
  const $ = id => document.getElementById(id);

  let tasks = {};      // day -> task object from tasks.json
  let settings = {};

  // ---------- saved progress (this browser only) ----------
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || { done: [] }; }
    catch { return { done: [] }; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch { /* private mode */ }
  }
  let progress = loadProgress();
  const isDone = d => progress.done.includes(d);
  function toggleDone(d) {
    progress.done = isDone(d) ? progress.done.filter(x => x !== d) : [...progress.done, d];
    saveProgress(progress);
    render();
  }

  // ---------- optional date lock ----------
  function isLocked(d) {
    if (!settings.unlockByDate) return false;
    const now = new Date();
    const year = settings.year || now.getFullYear();
    const opens = new Date(year, 11, d); // December d, local time
    return now < opens;
  }

  // ---------- calendar ----------
  function art(d) {
    return ORNAMENTS[d]
      ? `<svg viewBox="0 0 100 100" aria-hidden="true">${ORNAMENTS[d]}</svg>`
      : `<span class="big-num" data-n="${d}" aria-hidden="true">${d}</span>`;
  }

  function render() {
    grid.innerHTML = "";
    for (let d = 1; d <= 24; d++) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "cell" + (isDone(d) ? " done" : "") + (isLocked(d) ? " locked" : "");
      b.setAttribute("aria-label", `Day ${d}${isDone(d) ? ", done" : ""}${isLocked(d) ? ", not open yet" : ""}`);
      b.innerHTML = (ORNAMENTS[d] ? `<span class="small-num">${d}</span>` : "") + art(d);
      b.addEventListener("click", () => {
        if (isLocked(d)) { b.animate([{ transform: "translateX(0)" }, { transform: "translateX(-4px)" }, { transform: "translateX(4px)" }, { transform: "translateX(0)" }], { duration: 250 }); return; }
        location.hash = `day-${d}`;
      });
      grid.appendChild(b);
    }
    const n = progress.done.length;
    $("progress").textContent = n ? `${n} of 24 days done` : "";
  }

  // ---------- day view ----------
  let lastFocus = null;
  function openDay(d) {
    const t = tasks[d] || {};
    lastFocus = document.activeElement;
    $("dayArt").innerHTML = art(d);
    $("dayLabel").textContent = `Day ${d}`;
    $("dayTitle").textContent = t.title || "Task coming soon";
    const txt = $("dayText");
    txt.textContent = t.title ? (t.text || "") : "This day's task hasn't been added yet. Check back soon!";
    txt.classList.toggle("empty", !t.title);

    const img = $("dayImg");
    if (t.image) { img.src = t.image; img.hidden = false; } else { img.hidden = true; img.removeAttribute("src"); }
    const link = $("dayLink");
    if (t.link) { link.href = t.link; link.textContent = t.linkLabel || "Open the task"; link.hidden = false; } else { link.hidden = true; }

    const btn = $("doneBtn");
    btn.hidden = !t.title;
    btn.classList.toggle("is-done", isDone(d));
    btn.textContent = isDone(d) ? "✓ Done · tap to undo" : "Mark as done";
    btn.onclick = () => { toggleDone(d); openDay(d); };

    $("prev").disabled = d <= 1;
    $("next").disabled = d >= 24 || isLocked(d + 1);
    $("prev").onclick = () => { location.hash = `day-${d - 1}`; };
    $("next").onclick = () => { location.hash = `day-${d + 1}`; };

    view.hidden = false;
    document.body.style.overflow = "hidden";
    view.scrollTop = 0;
    $("back").focus();
  }
  function closeDay() {
    view.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function route() {
    const m = location.hash.match(/^#day-(\d{1,2})$/);
    const d = m ? +m[1] : 0;
    if (d >= 1 && d <= 24 && !isLocked(d)) openDay(d);
    else closeDay();
  }

  $("back").addEventListener("click", () => { history.pushState("", "", location.pathname + location.search); route(); });
  view.addEventListener("click", e => { if (e.target === view) $("back").click(); });
  document.addEventListener("keydown", e => {
    if (view.hidden) return;
    if (e.key === "Escape") $("back").click();
    if (e.key === "ArrowLeft" && !$("prev").disabled) $("prev").click();
    if (e.key === "ArrowRight" && !$("next").disabled) $("next").click();
  });
  window.addEventListener("hashchange", route);

  $("reset").addEventListener("click", () => {
    if (!progress.done.length) return;
    if (confirm("Clear all ticked days on this device?")) { progress = { done: [] }; saveProgress(progress); render(); }
  });

  // ---------- load tasks ----------
  render();
  fetch("tasks.json", { cache: "no-store" })
    .then(r => r.json())
    .then(data => {
      settings = data.settings || {};
      (data.days || []).forEach(t => { tasks[t.day] = t; });
    })
    .catch(() => { /* tasks file missing: every day shows "coming soon" */ })
    .finally(() => { render(); route(); });
})();
