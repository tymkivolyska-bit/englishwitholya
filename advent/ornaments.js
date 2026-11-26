// Hand-drawn SVG ornaments for the calendar cells (viewBox 0 0 100 100).
// Days not listed here show a big glossy red number instead.
const RED = "#8e1b2c";

const ORNAMENTS = {
  // 1 — little vintage car carrying a tree
  1: `
  <defs>
    <linearGradient id="car1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#c8423f"/><stop offset="1" stop-color="#7d1d22"/>
    </linearGradient>
    <linearGradient id="wood1" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#b9772f"/><stop offset="1" stop-color="#e0a85a"/>
    </linearGradient>
  </defs>
  <ellipse cx="52" cy="80" rx="40" ry="4" fill="#000" opacity=".12"/>
  <path d="M30 34 Q40 20 52 28 Q64 18 74 33 Q66 40 52 37 Q38 41 30 34Z" fill="#1f3a2a"/>
  <path d="M34 33 Q44 25 52 31 Q60 24 70 32" stroke="#2f5a3d" stroke-width="3" fill="none"/>
  <g fill="#fff" opacity=".7"><circle cx="40" cy="29" r="1.2"/><circle cx="58" cy="27" r="1.2"/><circle cx="66" cy="31" r="1"/><circle cx="48" cy="33" r="1"/></g>
  <rect x="32" y="37" width="40" height="3" rx="1.5" fill="#3b2a20"/>
  <path d="M10 66 L12 54 Q14 50 20 50 L28 50 L34 40 Q36 38 40 38 L70 38 Q74 38 76 42 L80 50 L88 52 Q93 54 93 60 L93 66Z" fill="url(#car1)"/>
  <path d="M37 42 L43 42 L43 50 L32 50Z M47 42 L58 42 L58 50 L47 50Z M62 42 L70 42 Q72 42 73 44 L76 50 L62 50Z" fill="#cfe3ea"/>
  <path d="M22 53 L76 53 L76 63 L22 63Z" fill="url(#wood1)"/>
  <path d="M40 53 V63 M58 53 V63" stroke="#7a4a1c" stroke-width="1.2"/>
  <rect x="8" y="64" width="87" height="4" rx="2" fill="#d9d9d9"/>
  <circle cx="26" cy="69" r="8" fill="#222"/><circle cx="26" cy="69" r="3.5" fill="#bbb"/>
  <circle cx="76" cy="69" r="8" fill="#222"/><circle cx="76" cy="69" r="3.5" fill="#bbb"/>
  <circle cx="90" cy="57" r="2.2" fill="#ffe9a8"/>`,

  // 2 — pinecone with a red ribbon
  2: `
  <defs>
    <radialGradient id="cone2" cx=".4" cy=".35" r=".8">
      <stop offset="0" stop-color="#b07a3e"/><stop offset="1" stop-color="#4f2c14"/>
    </radialGradient>
  </defs>
  <ellipse cx="50" cy="93" rx="14" ry="3" fill="#000" opacity=".1"/>
  <path d="M50 22 Q72 34 68 62 Q64 86 50 92 Q36 86 32 62 Q28 34 50 22Z" fill="url(#cone2)"/>
  <g fill="none" stroke="#e1b57a" stroke-width="1.4" opacity=".85">
    <path d="M38 38 Q44 42 50 38 Q56 42 62 38"/>
    <path d="M34 48 Q42 53 50 48 Q58 53 66 48"/>
    <path d="M33 58 Q41 63 50 58 Q59 63 67 58"/>
    <path d="M34 68 Q42 73 50 68 Q58 73 66 68"/>
    <path d="M38 78 Q44 82 50 78 Q56 82 62 78"/>
    <path d="M44 86 Q50 89 56 86"/>
  </g>
  <g fill="#c62a3a">
    <path d="M50 22 Q36 8 34 18 Q36 25 50 22Z"/>
    <path d="M50 22 Q64 8 66 18 Q64 25 50 22Z"/>
    <circle cx="50" cy="22" r="3.4" fill="#9e1626"/>
  </g>
  <path d="M48 24 Q42 30 40 34 M52 24 Q58 30 60 34" stroke="#c62a3a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M48 16 L52 10 L54 18" stroke="#2f5a3d" stroke-width="2" fill="none"/>`,

  // 4 — line-art bow
  4: `
  <g fill="none" stroke="${RED}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M50 40 Q34 18 14 16 Q6 22 10 34 Q18 48 46 46"/>
    <path d="M50 40 Q66 18 86 16 Q94 22 90 34 Q82 48 54 46"/>
    <path d="M16 22 Q28 28 40 40 M84 22 Q72 28 60 40"/>
    <rect x="44" y="37" width="12" height="11" rx="3"/>
    <path d="M46 48 Q38 66 24 86 L32 82 L34 90 Q46 70 50 50"/>
    <path d="M54 48 Q62 66 76 86 L68 82 L66 90 Q54 70 50 50"/>
  </g>`,

  // 6 — glossy green bauble
  6: `
  <defs>
    <radialGradient id="ball6" cx=".35" cy=".3" r=".75">
      <stop offset="0" stop-color="#4fb37a"/><stop offset=".55" stop-color="#16673e"/><stop offset="1" stop-color="#0a3a22"/>
    </radialGradient>
    <linearGradient id="cap6" x1="0" x2="1"><stop offset="0" stop-color="#8a6a2a"/><stop offset=".5" stop-color="#f0d27a"/><stop offset="1" stop-color="#8a6a2a"/></linearGradient>
  </defs>
  <ellipse cx="52" cy="94" rx="26" ry="3.5" fill="#000" opacity=".1"/>
  <path d="M46 14 Q50 6 54 14" stroke="#9a8a6a" stroke-width="2" fill="none"/>
  <rect x="42" y="14" width="16" height="9" rx="2" fill="url(#cap6)"/>
  <circle cx="50" cy="56" r="34" fill="url(#ball6)"/>
  <g stroke="#e9f5ee" stroke-width="1.8" stroke-linecap="round" fill="none">
    <g transform="translate(38 48)"><path d="M0-9V9M-8-4.5 8 4.5M-8 4.5 8-4.5"/><path d="M-3-7 0-4 3-7M-3 7 0 4 3 7"/></g>
    <g transform="translate(64 62) scale(.8)"><path d="M0-9V9M-8-4.5 8 4.5M-8 4.5 8-4.5"/><path d="M-3-7 0-4 3-7M-3 7 0 4 3 7"/></g>
    <g transform="translate(46 76) scale(.6)"><path d="M0-9V9M-8-4.5 8 4.5M-8 4.5 8-4.5"/></g>
    <g transform="translate(70 40) scale(.55)"><path d="M0-9V9M-8-4.5 8 4.5M-8 4.5 8-4.5"/></g>
    <g transform="translate(26 66) scale(.55)"><path d="M0-9V9M-8-4.5 8 4.5M-8 4.5 8-4.5"/></g>
  </g>
  <ellipse cx="38" cy="36" rx="9" ry="5" fill="#fff" opacity=".35" transform="rotate(-35 38 36)"/>`,

  // 7 — icy snowflake
  7: `
  <g stroke="#9fb6cc" stroke-width="2.4" stroke-linecap="round" fill="none">
    ${[0, 60, 120, 180, 240, 300].map(a => `
    <g transform="rotate(${a} 50 50)">
      <path d="M50 50 V12"/>
      <path d="M50 22 L43 15 M50 22 L57 15"/>
      <path d="M50 32 L40 24 M50 32 L60 24"/>
      <path d="M50 41 L44 37 M50 41 L56 37"/>
    </g>`).join("")}
  </g>
  <circle cx="50" cy="50" r="5" fill="#c9d6e4" stroke="#8aa1b8" stroke-width="1.5"/>
  <g fill="#fff">${[0, 60, 120, 180, 240, 300].map(a => `<circle cx="50" cy="12" r="1.8" transform="rotate(${a} 50 50)"/>`).join("")}</g>`,

  // 9 — eight-point line star
  9: `
  <g fill="none" stroke="#6e6e6e" stroke-width="1.8" stroke-linejoin="round">
    <path d="M50 8 L58 40 L86 26 L64 50 L90 66 L58 60 L50 92 L42 60 L10 66 L36 50 L14 26 L42 40Z"/>
    <path d="M50 8 L50 92 M14 26 L86 26 M10 66 L90 66" opacity=".0"/>
    <path d="M50 8 L50 50 M86 26 L50 50 M90 66 L50 50 M50 92 L50 50 M10 66 L50 50 M14 26 L50 50" stroke-width="1.2"/>
    <path d="M58 40 L50 50 M64 50 L50 50 M58 60 L50 50 M42 60 L50 50 M36 50 L50 50 M42 40 L50 50" stroke-width="1"/>
  </g>`,

  // 12 — tartan ribbon bow
  12: `
  <defs>
    <pattern id="plaid12" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(20)">
      <rect width="8" height="8" fill="#b31d2e"/>
      <rect y="2" width="8" height="3" fill="#1d5a36" opacity=".85"/>
      <rect x="2" width="3" height="8" fill="#1d5a36" opacity=".6"/>
      <rect y="6" width="8" height=".8" fill="#f2d27a"/>
    </pattern>
  </defs>
  <ellipse cx="52" cy="72" rx="36" ry="4" fill="#000" opacity=".1"/>
  <path d="M48 48 Q30 30 12 40 Q8 52 20 58 Q34 60 48 52Z" fill="url(#plaid12)" stroke="#6d0f1b" stroke-width="1"/>
  <path d="M52 48 Q70 30 88 40 Q92 52 80 58 Q66 60 52 52Z" fill="url(#plaid12)" stroke="#6d0f1b" stroke-width="1"/>
  <path d="M46 52 L30 74 L36 72 L38 78 L50 56Z" fill="url(#plaid12)" stroke="#6d0f1b" stroke-width="1"/>
  <path d="M54 52 L72 72 L66 72 L66 78 L50 56Z" fill="url(#plaid12)" stroke="#6d0f1b" stroke-width="1"/>
  <rect x="44" y="44" width="12" height="12" rx="3" fill="url(#plaid12)" stroke="#6d0f1b" stroke-width="1"/>`,

  // 14 — striped gift with kraft tag and sprig
  14: `
  <defs>
    <pattern id="stripe14" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="10" height="10" fill="#f3d6c4"/><rect width="5" height="10" fill="#5a1a1e"/>
    </pattern>
  </defs>
  <ellipse cx="58" cy="82" rx="34" ry="4" fill="#000" opacity=".1"/>
  <g transform="rotate(-10 60 50)">
    <rect x="30" y="22" width="58" height="52" fill="url(#stripe14)"/>
    <path d="M59 22 V74 M30 48 H88" stroke="#c9a26a" stroke-width="1.6"/>
  </g>
  <path d="M8 70 L40 52 L50 68 L18 86Z" fill="#c48b55"/>
  <circle cx="40" cy="58" r="2" fill="#f5e6d3"/>
  <path d="M40 58 Q50 50 58 48" stroke="#c9a26a" stroke-width="1.2" fill="none"/>
  <g stroke="#2f6b3f" stroke-width="1.6" fill="none" stroke-linecap="round">
    <path d="M52 66 Q60 50 64 36"/>
    ${[0, 1, 2, 3, 4, 5].map(i => `<path d="M${54 + i * 1.8} ${62 - i * 4.5} l-6 -3 M${54 + i * 1.8} ${62 - i * 4.5} l6 -1"/>`).join("")}
  </g>`,

  // 15 — glittery silver tree ornament
  15: `
  <defs>
    <linearGradient id="silver15" x1="0" x2="1">
      <stop offset="0" stop-color="#8f9399"/><stop offset=".45" stop-color="#eef0f2"/><stop offset="1" stop-color="#7c8086"/>
    </linearGradient>
    <pattern id="glit15" width="4" height="4" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r=".7" fill="#fff" opacity=".8"/><circle cx="3" cy="3" r=".5" fill="#666" opacity=".4"/>
    </pattern>
  </defs>
  <path d="M48 6 Q50 2 52 6" stroke="#999" stroke-width="1.5" fill="none"/>
  <rect x="46" y="6" width="8" height="6" rx="1.5" fill="#b8bcc2"/>
  <g>
    <path d="M50 12 L64 32 L58 32 L70 52 L62 52 L76 76 L24 76 L38 52 L30 52 L42 32 L36 32Z" fill="url(#silver15)"/>
    <path d="M50 12 L64 32 L58 32 L70 52 L62 52 L76 76 L24 76 L38 52 L30 52 L42 32 L36 32Z" fill="url(#glit15)"/>
  </g>
  <rect x="45" y="76" width="10" height="10" fill="#9a9ea4"/>`,

  // 17 — gingerbread friend
  17: `
  <defs>
    <radialGradient id="gb17" cx=".45" cy=".35" r=".8">
      <stop offset="0" stop-color="#d88b44"/><stop offset="1" stop-color="#9a5420"/>
    </radialGradient>
  </defs>
  <ellipse cx="50" cy="94" rx="28" ry="3" fill="#000" opacity=".1"/>
  <path d="M50 8 A14 14 0 0 1 60 32 L80 36 Q90 40 84 48 L64 50 L70 80 Q72 90 62 90 L50 72 L38 90 Q28 90 30 80 L36 50 L16 48 Q10 40 20 36 L40 32 A14 14 0 0 1 50 8Z" fill="url(#gb17)"/>
  <g fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round">
    <path d="M44 26 Q50 30 56 26"/>
    <path d="M20 40 q3 4 0 8 M80 40 q-3 4 0 8 M34 82 q4 3 8 0 M58 82 q4 3 8 0"/>
  </g>
  <circle cx="45" cy="19" r="2" fill="#2a1408"/><circle cx="55" cy="19" r="2" fill="#2a1408"/>
  <path d="M44 34 L50 37 L56 34 L56 40 L50 37 L44 40Z" fill="#c62a3a"/>
  <circle cx="50" cy="48" r="2.6" fill="#fff"/><circle cx="50" cy="57" r="2.6" fill="#fff"/><circle cx="50" cy="66" r="2.6" fill="#3a8a4a"/>`,

  // 18 — line-art clinking glasses
  18: `
  <g fill="none" stroke="${RED}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 22 Q20 12 32 16 Q38 22 36 32 Q32 42 22 40 Q14 36 14 22Z"/>
    <path d="M16 26 Q24 24 35 28"/>
    <path d="M26 41 L18 64 M10 66 Q18 60 26 66"/>
    <path d="M58 26 Q64 14 76 18 Q84 22 82 32 Q78 44 66 42 Q58 38 58 26Z"/>
    <path d="M60 30 Q70 28 81 32"/>
    <path d="M72 43 L76 66 M68 68 Q76 62 84 68"/>
    <path d="M40 22 L44 16 M46 24 L52 20 M42 30 L50 30"/>
    <path d="M50 50 Q40 46 38 54 Q42 58 50 52 Q58 58 62 54 Q60 46 50 50Z"/>
    <path d="M50 52 Q44 70 36 88 M50 52 Q54 70 64 84"/>
  </g>`,

  // 20 — faceted silver star
  20: `
  <defs>
    <linearGradient id="s20a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f4f5f7"/><stop offset="1" stop-color="#a7abb2"/></linearGradient>
    <linearGradient id="s20b" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c9ccd1"/><stop offset="1" stop-color="#6f737a"/></linearGradient>
  </defs>
  <ellipse cx="50" cy="92" rx="30" ry="3.5" fill="#000" opacity=".12"/>
  ${(() => {
    const pts = [];
    for (let i = 0; i < 10; i++) {
      const r = i % 2 ? 17 : 40, a = -Math.PI / 2 + i * Math.PI / 5;
      pts.push([50 + r * Math.cos(a), 52 + r * Math.sin(a)]);
    }
    let s = "";
    for (let i = 0; i < 10; i++) {
      const p = pts[i], q = pts[(i + 1) % 10];
      s += `<path d="M50 52 L${p[0].toFixed(1)} ${p[1].toFixed(1)} L${q[0].toFixed(1)} ${q[1].toFixed(1)}Z" fill="url(#${i % 2 ? "s20a" : "s20b"})"/>`;
    }
    return s;
  })()}`,

  // 21 — evergreen wreath with berries
  21: `
  <g stroke-linecap="round">
    ${Array.from({ length: 36 }, (_, i) => {
      const a = (i / 36) * Math.PI * 2, r = 30 + (i % 3) * 4;
      const x = 50 + r * Math.cos(a), y = 50 + r * Math.sin(a);
      const ang = (a * 180 / Math.PI) + 90 + (i % 2 ? 30 : -30);
      const col = ["#1f4d2c", "#2e6b3c", "#3f7f48"][i % 3];
      return `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${ang.toFixed(0)})">
        <path d="M0 0 L0 -12" stroke="${col}" stroke-width="2"/>
        ${[2, 5, 8, 11].map(t => `<path d="M0 -${t} l-4 -3 M0 -${t} l4 -3" stroke="${col}" stroke-width="1.4"/>`).join("")}
      </g>`;
    }).join("")}
  </g>
  <g fill="#b3192b">
    ${[[24, 40], [30, 70], [62, 80], [78, 56], [70, 24], [44, 18], [20, 58], [80, 38]].map(([x, y]) =>
      `<circle cx="${x}" cy="${y}" r="2.6"/><circle cx="${x + 3}" cy="${y + 2}" r="2.2"/>`).join("")}
  </g>`,

  // 23 — leaping red reindeer
  23: `
  <defs>
    <linearGradient id="deer23" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d23a3a"/><stop offset="1" stop-color="#8a1820"/></linearGradient>
  </defs>
  <ellipse cx="50" cy="88" rx="32" ry="3" fill="#000" opacity=".1"/>
  <g fill="none" stroke="#a52128" stroke-width="2.4" stroke-linecap="round">
    <path d="M68 30 Q66 18 72 8 M69 22 L62 16 M70 16 L76 12"/>
    <path d="M74 32 Q80 20 88 14 M80 22 L84 26 M84 18 L90 20"/>
  </g>
  <path d="M74 30 Q82 30 86 38 L80 40 Q76 40 72 42
           Q66 52 58 56 Q44 60 34 58
           L20 72 Q16 76 12 74 L26 58
           Q18 56 14 48 L6 50 Q10 42 16 44
           Q24 40 36 44 Q50 44 60 40 Q66 34 70 30Z" fill="url(#deer23)"/>
  <path d="M58 56 L70 70 Q74 76 80 72 L66 60Z M46 58 L50 74 Q52 82 58 78 L52 58Z" fill="url(#deer23)"/>
  <circle cx="77" cy="34" r="1.3" fill="#2a0a0a"/>`,
};
