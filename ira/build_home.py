#!/usr/bin/env python3
"""Builds ira/index.html (Ira's main page) from report.json, reusing the look of practice.html.
Run from the ira/ folder after editing report.json:  python3 build_home.py"""
import json, re, html

app = open("practice.html", encoding="utf-8").read()
r = json.load(open("report.json", encoding="utf-8"))

style = re.search(r"<style>.*?</style>", app, re.S).group(0)
frame = re.search(r'<svg class="frame".*?</svg>', app, re.S).group(0)
bows = "\n".join(re.findall(r'<img class="bow"[^>]*>', app))
s = app.index("function drawFrame")
e = app.index('document.getElementById("bowBot").addEventListener("load",drawFrame);') + len('document.getElementById("bowBot").addEventListener("load",drawFrame);')
draw = app[s:e]

esc = lambda t: html.escape(str(t))

def ipa_split(w):
    m = re.search(r"/[^/]+/", w)
    return (re.sub(r"\s*/[^/]+/", "", w).strip(), m.group(0) if m else "")

lessons = "".join(
    f'<article class="lesson"><div class="num">{l["n"]}</div><div><h3>{esc(l["title"])}</h3>'
    f'<p class="topic">{esc(l["topic"])}</p><p>{esc(l["studied"])}</p>'
    f'<p class="key"><b>Key language:</b> {esc(l["language"])}</p></div></article>'
    for l in r["lessons"])

words = ""
for rv in r["reviews"]:
    rows = ""
    for en, ua, mean, ex in rv["words"]:
        w, ipa = ipa_split(en)
        rows += (f'<tr><td><b>{esc(w)}</b>{f"<span class=ipa>{esc(ipa)}</span>" if ipa else ""}</td>'
                 f'<td>{esc(ua)}</td><td>{esc(mean)}<span class="ex">{esc(ex)}</span></td></tr>')
    words += (f'<details class="day" {"open" if rv is r["reviews"][-1] else ""}><summary>{esc(rv["label"])} '
              f'<span class="count">{len(rv["words"])} words</span></summary>'
              f'<div class="tw"><table><thead><tr><th>Word</th><th>Українською</th><th>Meaning · example</th></tr></thead>'
              f'<tbody>{rows}</tbody></table></div></details>')

corr = "".join(
    f'<li><span class="date">{esc(rv["label"])}</span><span class="said">{esc(c["said"])}</span>'
    f'<span class="arrow" aria-hidden="true">→</span><span class="better">{esc(c["better"])}</span>'
    f'<span class="why">{esc(c["why"])}</span></li>'
    for rv in r["reviews"] for c in rv["corrections"])

well = "".join(f"<li>{esc(g)}</li>" for g in r["going_well"])
focus = "".join(
    f'<li><b>{esc(f["area"])}</b><span class="seen">In lessons: {esc(f["why"])}</span><span>{esc(f["do"])}</span></li>'
    for f in r["focus"])
nexts = "".join(f"<li>{esc(s)}</li>" for s in r["next_steps"])
nwords = sum(len(x["words"]) for x in r["reviews"])
ncorr = sum(len(x["corrections"]) for x in r["reviews"])

sheet_btn = (f'<a class="btn line" href="{esc(r["sheet"])}" target="_blank" rel="noopener">Progress sheet</a>'
             if r.get("sheet") else "")

page = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Ira's Writing Studio</title>
<script>/* old links like /ira/#test open the practice page */
(function(){{var h=location.hash.slice(1);if(["home","flashcards","learn","test","matching","teacher"].indexOf(h)>-1)location.replace("practice.html#"+h);}})();</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Nunito:wght@400;600;700;800&display=swap">
{style}
<style>
a{{color:var(--accent)}}
section{{margin-top:34px}}
.aim{{background:var(--wash);border-radius:var(--r);padding:20px 22px;display:grid;gap:12px;text-align:center}}
.aim .label{{font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-soft)}}
.aim p.big{{font-family:var(--font-display);font-size:clamp(19px,3.2vw,23px);line-height:1.4;margin:0;text-wrap:balance}}
.actions{{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}}
.actions .btn{{text-decoration:none}}
.stats{{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:18px}}
.stat{{border:1.5px solid var(--wash-2);border-radius:var(--r);padding:12px;text-align:center}}
.stat b{{display:block;font-family:var(--font-display);font-size:30px;line-height:1.1;font-variant-numeric:tabular-nums}}
.stat span{{font-size:13px;color:var(--ink-soft)}}
@media (max-width:560px){{.stats{{grid-template-columns:repeat(2,minmax(0,1fr))}}}}
.lessons{{display:grid;gap:12px}}
.lesson{{display:grid;grid-template-columns:44px 1fr;gap:14px;border:1.5px solid var(--wash-2);border-radius:var(--r);padding:16px}}
.lesson .num{{width:44px;height:44px;border-radius:50%;background:var(--ribbon-soft);display:grid;place-items:center;font-family:var(--font-display);font-weight:700;font-size:20px}}
.lesson h3{{margin:0;font-family:var(--font-display);font-size:21px;font-weight:600}}
.lesson p{{margin:4px 0 0}}
.lesson .topic{{color:var(--accent);font-weight:700;margin-top:0}}
.lesson .key{{font-size:14px;color:var(--ink-soft)}}
details.day{{border:1.5px solid var(--wash-2);border-radius:var(--r);margin-top:10px;overflow:hidden}}
details.day summary{{cursor:pointer;padding:12px 16px;font-family:var(--font-display);font-weight:600;font-size:19px;background:var(--wash);display:flex;gap:10px;align-items:baseline}}
details.day .count{{font-family:var(--font-body);font-size:13px;color:var(--ink-soft);font-weight:700}}
.tw{{overflow-x:auto}}
.tw table{{border-collapse:collapse;width:100%;min-width:520px;font-size:15px}}
.tw th{{text-align:left;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-soft);padding:8px 12px;border-bottom:1.5px solid var(--ribbon-soft)}}
.tw td{{padding:9px 12px;vertical-align:top;border-bottom:1px solid var(--wash-2)}}
.tw tbody tr:nth-child(even){{background:var(--wash)}}
.ipa{{display:block;font-size:13px;color:var(--ink-soft)}}
.ex{{display:block;font-style:italic;color:var(--ink-soft);font-size:14px;margin-top:2px}}
ul.corr{{list-style:none;margin:0;padding:0;display:grid;gap:10px}}
ul.corr li{{display:grid;grid-template-columns:auto 1fr auto 1fr;gap:4px 12px;align-items:baseline;border:1.5px solid var(--wash-2);border-radius:var(--r);padding:12px 16px}}
ul.corr .date{{grid-column:1/-1;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-soft)}}
ul.corr .said{{grid-column:1/3;color:var(--bad);text-decoration:line-through;text-decoration-thickness:1.5px}}
ul.corr .arrow{{color:var(--ink-soft)}}
ul.corr .better{{color:var(--good);font-weight:800}}
ul.corr .why{{grid-column:1/-1;font-size:14px;color:var(--ink-soft)}}
@media (max-width:560px){{ul.corr li{{grid-template-columns:1fr}} ul.corr .said,ul.corr .why{{grid-column:auto}} ul.corr .arrow{{display:none}}}}
.report{{display:grid;grid-template-columns:1fr 1fr;gap:14px}}
@media (max-width:700px){{.report{{grid-template-columns:1fr}}}}
.card{{border-radius:var(--r);padding:16px 18px}}
.card h3{{margin:0 0 8px;font-family:var(--font-display);font-size:20px;font-weight:600}}
.card ul{{margin:0;padding-left:20px;display:grid;gap:8px}}
.card.good{{background:var(--good-wash)}}
.card.focus{{background:var(--wash)}}
.card.focus ul{{list-style:none;padding:0;gap:12px}}
.card.focus li{{display:grid;gap:2px;padding-left:14px;border-left:3px solid var(--ribbon)}}
.card.focus .seen{{font-size:13px;color:var(--ink-soft)}}
.card.next{{grid-column:1/-1;border:1.5px dashed var(--ribbon)}}
#practice .live{{border:1.5px solid var(--wash-2);border-radius:var(--r);padding:14px 16px;display:grid;gap:8px}}
.bars{{display:grid;gap:8px}}
.bar{{display:grid;grid-template-columns:minmax(110px,190px) 1fr 52px;gap:10px;align-items:center;font-size:14px}}
.bar .track{{height:10px;border-radius:6px;background:var(--wash-2);overflow:hidden}}
.bar .fill{{height:100%;background:var(--accent);border-radius:6px}}
.bar .v{{text-align:right;font-variant-numeric:tabular-nums;font-weight:700}}
</style>
</head>
<body>
<div class="paper" id="paper">
  {frame}
  {bows}
  <div class="brand">
    <div class="eyebrow">Writing Studio · B1–B2 · {esc(r["term"])}</div>
    <h1>Ira's <em>Writing</em> Studio</h1>
  </div>
  <main>
    <div class="aim">
      <div class="label">Main aim this autumn</div>
      <p class="big">{esc(r["aim"])}</p>
      <div class="actions">
        <a class="btn" href="practice.html">Practise your words</a>
        <a class="btn line" href="{esc(r["miro"])}" target="_blank" rel="noopener">Our Miro board</a>
        {sheet_btn}
      </div>
    </div>
    <div class="stats">
      <div class="stat"><b>4</b><span>writing lessons</span></div>
      <div class="stat"><b>{len(r["reviews"])}</b><span>lesson reviews</span></div>
      <div class="stat"><b>{nwords}</b><span>new words</span></div>
      <div class="stat"><b>{ncorr}</b><span>corrections</span></div>
    </div>

    <section id="studied">
      <h2>What we've studied</h2>
      <p class="sub">Writing Studio, Lessons 1–4, on <a href="{esc(r["miro"])}" target="_blank" rel="noopener">our Miro board</a>.</p>
      <div class="lessons">{lessons}</div>
    </section>

    <section id="words">
      <h2>Words from our lessons</h2>
      <p class="sub">New words from the lesson reviews. They are also in the flashcards as the set <a href="practice.html#flashcards">“From our lessons”</a>.</p>
      {words}
    </section>

    <section id="corrections">
      <h2>Error corrections</h2>
      <p class="sub">What you said in class, and what to say instead.</p>
      <ul class="corr">{corr}</ul>
    </section>

    <section id="report">
      <h2>Progress report</h2>
      <p class="sub">{esc(r["term"])} · based on our lessons and lesson reviews.</p>
      <div class="report">
        <div class="card good"><h3>What's going well</h3><ul>{well}</ul></div>
        <div class="card focus"><h3>What to focus on</h3><ul>{focus}</ul></div>
        <div class="card next"><h3>Next steps</h3><ul>{nexts}</ul></div>
      </div>
    </section>

    <section id="practice">
      <h2>Your practice</h2>
      <p class="sub">From the flashcards on this phone or computer.</p>
      <div class="live" id="live"><p class="muted" style="margin:0">No practice yet on this device. <a href="practice.html">Start with the flashcards.</a></p></div>
    </section>
  </main>
</div>
<script>
const paper=document.getElementById("paper");
{draw}
/* practice summary from the flashcards' saved progress (same browser) */
(function(){{
  let S=null; try{{S=JSON.parse(localStorage.getItem("writingExpertU1.progress.v1")||"null")}}catch(e){{}}
  if(!S||!S.log||!S.log.length) return;
  const names={{text:"Text-speak",chat:"Chat replies",formal:"Formal emails",caption:"Captions & hair",grammar:"Grammar for your year",lessons:"From our lessons",all:"All words"}};
  const box=document.getElementById("live"); box.textContent="";
  const tests=S.tests||{{}}, ids=Object.keys(names).filter(k=>tests[k]&&tests[k].best!=null);
  const p=document.createElement("p"); p.style.margin="0";
  const nTests=S.log.filter(x=>x.mode==="Test").length;
  p.textContent=S.log.length+" practice rounds so far, "+nTests+" of them tests. Best test score per set:";
  box.append(p);
  const bars=document.createElement("div"); bars.className="bars";
  ids.forEach(k=>{{const v=Math.round(tests[k].best);
    const row=document.createElement("div"); row.className="bar";
    const n=document.createElement("span"); n.textContent=names[k];
    const t=document.createElement("div"); t.className="track"; const f=document.createElement("div"); f.className="fill"; f.style.width=v+"%"; t.append(f);
    const val=document.createElement("span"); val.className="v"; val.textContent=v+"%";
    row.append(n,t,val); bars.append(row);}});
  if(ids.length) box.append(bars);
  requestAnimationFrame(drawFrame);
}})();
</script>
</body>
</html>
"""
open("index.html", "w", encoding="utf-8").write(page)
print("index.html", len(page))
