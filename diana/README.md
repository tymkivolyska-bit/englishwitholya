# Diana's English board (A2+)

Published with GitHub Pages: https://tymkivolyska-bit.github.io/englishwitholya/diana/

Drawn like her Miro board (https://miro.com/app/board/uXjVEYONBlw=/): dotted canvas, white frames with small labels, sticky notes, pink pills and black chips, Miro-style toolbar.

Sections (toolbar): **Home** (Miro and Zoom links, this week, lesson map), **Homework** (tick boxes, writing boxes), **Cards** (Quizlet-style: Flashcards, Learn, Test, Match, per lesson or "Still learning"), **Check** (a progress check for each lesson), **Report** (words known, homework, best check scores, last 14 days, words to practise, teacher's notes, "Send my report to Olya", print/PDF).

## Files
- `index.html`: the page and the app.
- `data.js`: everything Diana sees: links (Miro, Zoom, meeting ID, passcode), `nextLesson`, lessons, homework, flashcard sets, progress checks and teacher's notes (`feedback`). The comment at the top explains each field. After editing, bump `?v=` on the `data.js` line in `index.html`.
  - Keep homework `id`s and card English words the same once Diana has used them (her progress is saved by them).
- `config.js`: `SHEET_URL`, the Apps Script web app link of the Google Sheet. Empty = progress stays only on her phone (it is queued and sent once the link is added).
- `apps-script.gs`: the receiver for the sheet, with setup steps at the top.

## Saving
- Everything Diana does is saved in the browser on her phone (localStorage key `diana-english-v1`), so it works without internet once the page is open.
- Each activity (homework ticked, flashcard round, test, match game, progress check, report) is queued and sent to the Google Sheet **"Diana A2+ – English hub"**: https://docs.google.com/spreadsheets/d/16gDQiY1BZvoUfF450wGhH4YhsXFyzj2jr1vHP564arU/edit
  - **Activity**: one row per event (duplicates are skipped by event id).
  - **Progress checks**: one row per finished check, with her mistakes.
  - **Homework** (with her written answers) and **Words** (seen / right / wrong / New, Learning, Known): rewritten from her phone each time, so they show the current state.
  - **Summary**: totals by formula.
- A word becomes "known" after two right answers in a row, or when she taps "I know it" on a flashcard. A wrong answer moves it back to "learning".
