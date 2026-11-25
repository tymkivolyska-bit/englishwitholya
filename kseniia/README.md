# Kseniia's English (B1)

Kseniia's page, published with GitHub Pages: https://tymkivolyska-bit.github.io/englishwitholya/kseniia/

Sections, in order: 1) Still need to do, 2) Flashcards, 3) Topics we did, 4) Teacher's feedback, 5) Vocabulary test, 6) Progress check.

- `index.html`: the page (pink heart design).
- `data.json`: everything on the page. The teacher edits it from the page itself: tap "Teacher: edit this page" at the bottom (or open the page with `?edit`).
  - Every change is kept in that browser straight away, then committed to this file on GitHub about 2 seconds later.
  - Saving to GitHub needs a fine-grained token (repository `englishwitholya`, Contents: Read and write), pasted once per device. It is stored only in that browser, never in the repo.
  - You can also edit `data.json` directly on GitHub. Lists: `todo` (text, due, done), `flashcards` (word, translation, example, topic), `topics` (date, title, note; newest first), `feedback` (date, lesson, text, next; newest first). Dates are YYYY-MM-DD.
- Kseniia's own ticks on tasks and her "I know it" cards are kept on her phone.

## Vocabulary test and progress sheet
- The Vocabulary test is built from the flashcards that have a translation (multiple choice both ways, plus typing the English word). Kseniia picks a topic or all words.
- Progress check entries (`progress` in data.json: date, skill, topic, task, score, outOf, comment, next) are written to the "Kseniia B1 Progress Check" Google Sheet, one row on the tab of the skill (Vocabulary, Grammar, Listening, Writing, Pronunciation). `sheetTab`/`sheetRow` remember the row, so edits update it and deletes clear it.
- Each finished test (not practice rounds) is added to the Vocabulary tab.
- The link is an Apps Script web app bound to that sheet: `apps-script.gs`. Setup steps are at the top of that file and on the page in edit mode. Its URL is stored in `settings.sheetUrl`.
