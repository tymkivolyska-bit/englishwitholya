# Ira's Writing Studio

Published with GitHub Pages: https://tymkivolyska-bit.github.io/englishwitholya/ira/

- `index.html`: Ira's main page (aim for the autumn, Miro board link, what we studied, words, error corrections, progress report, her practice). It is **generated**: edit `report.json`, then run `python3 build_home.py` in this folder.
- `report.json`: the content of the main page: homework (`homework.due`, `tasks`; ticks and drafts are saved on Ira's device), lessons, lesson reviews (words and corrections), what's going well, what to focus on, next steps, and the Google Sheet link.
- `practice.html`: Writing Expert (Unit 1): Flashcards, Learn, Test and Matching (British voice, progress saved in the browser). The card list is the `RAW` block near the top of the script; the set "From our lessons" holds the lesson-review words. Add new cards at the end of `RAW` so the card order stays the same. Old links like `/ira/#test` open this page.
- `config.js`: the link that receives each result (a Zapier hook that saves it to a Zapier table and sends a Telegram message after every test). Empty means the practice page shows a "Send to my teacher" Telegram button instead.
- `apps-script.gs`: an alternative Google Apps Script receiver (not in use).
