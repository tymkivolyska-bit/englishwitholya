/* Pink stickers drawn in SVG (in the style of Lana's sticker sheet: bows, cocoa, latte,
   gift, candle, planner, roses, headphones, heart). No brand logos.
   STICKERS[name] is the inner SVG markup for a 0 0 100 100 viewBox.
   The gradients live once in #sticker-defs in index.html. */
window.STICKERS = {
  bow: `
    <path d="M50 50C36 28 10 24 8 40c-2 16 22 22 42 12z" fill="url(#sPink)"/>
    <path d="M50 50C64 28 90 24 92 40c2 16-22 22-42 12z" fill="url(#sPink)"/>
    <path d="M18 36c6-6 18-4 26 6" stroke="#fff" stroke-opacity=".55" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M82 36c-6-6-18-4-26 6" stroke="#fff" stroke-opacity=".4" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M46 54L32 88l8-5 5 8 8-34z" fill="url(#sPinkD)"/>
    <path d="M54 54l14 34-8-5-5 8-8-34z" fill="url(#sPinkD)"/>
    <ellipse cx="50" cy="51" rx="8" ry="9" fill="#f29bb8"/>
    <ellipse cx="48" cy="48" rx="3" ry="3.5" fill="#fff" opacity=".5"/>`,

  pearlbow: `
    <path d="M50 40C38 22 14 18 12 32c-2 14 20 18 38 10z" fill="url(#sPink)"/>
    <path d="M50 40C62 22 86 18 88 32c2 14-20 18-38 10z" fill="url(#sPink)"/>
    <path d="M47 44l-12 26 7-4 4 7 6-29z" fill="url(#sPinkD)"/>
    <path d="M53 44l12 26-7-4-4 7-6-29z" fill="url(#sPinkD)"/>
    <circle cx="50" cy="41" r="7" fill="url(#sPearl)"/>
    <path d="M50 48v20" stroke="#d9b25a" stroke-width="2.5"/>
    <circle cx="50" cy="78" r="11" fill="url(#sPearl)"/>
    <circle cx="46" cy="74" r="3" fill="#fff"/>`,

  heart: `
    <path d="M50 88C20 66 6 48 12 30 18 13 42 12 50 30c8-18 32-17 38 0 6 18-8 36-38 58z" fill="url(#sHeart)"/>
    <ellipse cx="30" cy="32" rx="9" ry="6" fill="#fff" opacity=".55" transform="rotate(-30 30 32)"/>`,

  cocoa: `
    <path d="M74 42c14 0 16 22 0 26" stroke="#f3a9c0" stroke-width="8" fill="none"/>
    <path d="M18 30h60v42c0 12-10 18-30 18S18 84 18 72z" fill="url(#sPink)"/>
    <ellipse cx="48" cy="30" rx="30" ry="9" fill="#f7c3d3"/>
    <ellipse cx="48" cy="31" rx="26" ry="6.5" fill="#7a4a3a"/>
    <rect x="30" y="22" width="10" height="9" rx="2" fill="#fff" transform="rotate(-12 35 26)"/>
    <rect x="43" y="20" width="10" height="9" rx="2" fill="#fff4f8" transform="rotate(8 48 24)"/>
    <rect x="55" y="23" width="10" height="9" rx="2" fill="#fff" transform="rotate(-4 60 27)"/>
    <rect x="38" y="27" width="9" height="7" rx="2" fill="#fde3ec"/>
    <path d="M26 44v26" stroke="#fff" stroke-opacity=".5" stroke-width="4" stroke-linecap="round"/>`,

  latte: `
    <ellipse cx="50" cy="76" rx="40" ry="12" fill="#fff" stroke="#f1d3dc" stroke-width="2"/>
    <path d="M74 44c13 0 13 18 0 18" stroke="#f4eef0" stroke-width="7" fill="none"/>
    <path d="M20 40h58c0 22-10 36-29 36S20 62 20 40z" fill="#fff" stroke="#efdbe2" stroke-width="2"/>
    <ellipse cx="49" cy="40" rx="29" ry="9" fill="#c48a5a"/>
    <path d="M49 46c-9-5-11-11-6-12 3 0 5 2 6 4 1-2 3-4 6-4 5 1 3 7-6 12z" fill="#fbeee0"/>`,

  gift: `
    <rect x="16" y="40" width="68" height="48" rx="4" fill="#fff" stroke="#f1d1db" stroke-width="2"/>
    <rect x="12" y="30" width="76" height="14" rx="3" fill="#fff" stroke="#f1d1db" stroke-width="2"/>
    <rect x="44" y="30" width="12" height="58" fill="url(#sPink)"/>
    <rect x="12" y="34" width="76" height="0" />
    <path d="M50 30C38 12 22 16 26 26c3 6 14 6 24 4z" fill="url(#sPink)"/>
    <path d="M50 30C62 12 78 16 74 26c-3 6-14 6-24 4z" fill="url(#sPink)"/>
    <circle cx="50" cy="29" r="5" fill="#ee8fb0"/>`,

  candle: `
    <path d="M50 10c6 8 6 14 0 18-6-4-6-10 0-18z" fill="#ffd27a"/>
    <path d="M50 16c3 5 3 8 0 10-3-2-3-5 0-10z" fill="#fff6d8"/>
    <path d="M50 28v8" stroke="#555" stroke-width="2"/>
    <rect x="22" y="34" width="56" height="56" rx="8" fill="#fff" fill-opacity=".55" stroke="#e7d9df" stroke-width="2"/>
    <rect x="26" y="44" width="48" height="42" rx="5" fill="url(#sPink)"/>
    <ellipse cx="50" cy="44" rx="24" ry="5" fill="#f9c9d8"/>
    <path d="M30 40v44" stroke="#fff" stroke-opacity=".7" stroke-width="3" stroke-linecap="round"/>
    <path d="M64 58l10 6v14H62V64z" fill="#fff" stroke="#f0c8d5"/>
    <path d="M68 68c-2-2-4 0-2 2l2 2 2-2c2-2 0-4-2-2z" fill="#ee8fb0"/>`,

  planner: `
    <rect x="18" y="14" width="60" height="76" rx="6" fill="url(#sPink)"/>
    <rect x="24" y="18" width="52" height="68" rx="3" fill="#fffaf2"/>
    <g stroke="#f1c9d6" stroke-width="2">
      <path d="M32 32h36M32 42h36M32 52h36M32 62h36M32 72h28"/>
    </g>
    <g fill="#d5d5da">
      <circle cx="22" cy="24" r="3"/><circle cx="22" cy="36" r="3"/><circle cx="22" cy="48" r="3"/>
      <circle cx="22" cy="60" r="3"/><circle cx="22" cy="72" r="3"/><circle cx="22" cy="84" r="3"/>
    </g>
    <path d="M64 70L88 14l6 3-24 56-7 4z" fill="url(#sPinkD)"/>
    <path d="M88 14l6 3 2-5-5-3z" fill="#c9c9cf"/>`,

  roses: `
    <path d="M30 50l20 44 20-44z" fill="#fff" stroke="#f1d3dc" stroke-width="2"/>
    <path d="M44 84h12l-6 8z" fill="#f3f3f3"/>
    <path d="M22 50c4-10 10-14 18-12M78 50c-4-10-10-14-18-12" stroke="#5c9a62" stroke-width="5" fill="none" stroke-linecap="round"/>
    <g fill="url(#sRose)">
      <circle cx="36" cy="40" r="11"/><circle cx="64" cy="40" r="11"/><circle cx="50" cy="32" r="12"/>
      <circle cx="42" cy="52" r="10"/><circle cx="58" cy="52" r="10"/><circle cx="50" cy="20" r="9"/>
    </g>
    <g stroke="#e58aa8" stroke-width="1.6" fill="none">
      <path d="M50 28c4 0 5 5 1 6-4 1-6-3-3-6"/><path d="M36 36c3 0 4 4 1 5"/><path d="M64 36c3 0 4 4 1 5"/>
      <path d="M42 48c3 0 4 4 1 5"/><path d="M58 48c3 0 4 4 1 5"/><path d="M50 17c3 0 4 4 1 5"/>
    </g>`,

  headphones: `
    <path d="M20 58V48c0-17 13-30 30-30s30 13 30 30v10" stroke="url(#sPink)" stroke-width="9" fill="none" stroke-linecap="round"/>
    <rect x="12" y="52" width="22" height="34" rx="10" fill="url(#sPink)"/>
    <rect x="66" y="52" width="22" height="34" rx="10" fill="url(#sPink)"/>
    <rect x="17" y="57" width="12" height="24" rx="6" fill="#fbe3eb"/>
    <rect x="71" y="57" width="12" height="24" rx="6" fill="#fbe3eb"/>`,

  wave: `
    <rect x="4" y="30" width="92" height="40" rx="20" fill="url(#sPink)"/>
    <path d="M16 42v16l12-8z" fill="#fff"/>
    <g stroke="#fff" stroke-width="2.6" stroke-linecap="round">
      <path d="M36 47v6M41 43v14M46 39v22M51 44v12M56 36v28M61 42v16M66 46v8M71 41v18M76 45v10M81 48v4"/>
    </g>`,

  cup: `
    <path d="M26 30h48l-6 58H32z" fill="#fff" stroke="#ece0e4" stroke-width="2"/>
    <rect x="22" y="20" width="56" height="12" rx="4" fill="#f7f7f9" stroke="#e5e5ea" stroke-width="2"/>
    <rect x="30" y="14" width="40" height="8" rx="3" fill="#efeff2"/>
    <path d="M38 56c4-5 8-5 12-2 4-3 8-3 12 2-4 6-8 8-12 8s-8-2-12-8z" fill="#ee86a8"/>
    <path d="M38 56c6 2 18 2 24 0" stroke="#c9577e" stroke-width="1.6" fill="none"/>`,

  scarf: `
    <path d="M24 26c10-10 42-10 52 0 6 8-2 18-26 18S18 34 24 26z" fill="url(#sPink)"/>
    <path d="M40 40l-8 44h16l4-40z" fill="url(#sPinkD)"/>
    <path d="M56 40l6 36H48l-2-34z" fill="url(#sPink)"/>
    <g stroke="#f0a7bf" stroke-width="2"><path d="M34 84v8M38 84v8M42 84v8M46 84v8M50 76v8M54 76v8M58 76v8"/></g>
    <path d="M30 28c12-6 28-6 40 0" stroke="#fff" stroke-opacity=".5" stroke-width="3" fill="none"/>`,
};

window.STICKER_ORDER = ["bow", "cocoa", "latte", "heart", "gift", "candle", "planner", "roses", "headphones", "pearlbow", "cup", "wave", "scarf"];

window.sticker = function (name, cls) {
  return `<svg class="stk ${cls || ""}" viewBox="0 0 100 100" aria-hidden="true">${window.STICKERS[name] || ""}</svg>`;
};
