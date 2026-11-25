# Writing Expert (Unit 1) – Ira

Flashcards, Learn, Test and Matching for the Writing Studio lessons 1–4 (180 English–Ukrainian cards), with a British voice and saved progress. Published with GitHub Pages.

- `index.html`: the whole app. The card list is the `RAW` block near the top of the script.
- `config.js`: the Google Apps Script link that receives each result. Empty means the page shows a "Send to my teacher" Telegram button after each test instead.
- `apps-script.gs`: the code for that Apps Script. It writes every test, Learn round and Matching round to a Google Sheet and sends a Telegram message after every test. The bot token is kept in the script's properties, never on this public site.
- Progress is kept in the browser Ira practises on.
