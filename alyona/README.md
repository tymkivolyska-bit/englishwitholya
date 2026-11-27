# Alyona's English (B1/B2)

Published with GitHub Pages: https://tymkivolyska-bit.github.io/englishwitholya/alyona/

- `index.html`: Alyona's main page. Sections: Homework, Flashcards by topic (with her progress), Errors from our lessons (with a "Test myself" mode and Listen buttons), What to focus on, Timetable & Zoom, Additional materials.
- Content comes from the Google Sheet **"Alyona – English hub (B1/B2)"**: https://docs.google.com/spreadsheets/d/1f6GQaFDXwfi6hnsccZ9r-I8jV4xLSGebWluVxOzdovY/edit
  - Tabs: Overview (Miro, Zoom link, next lesson, goal), Timetable, Homework, Errors, Focus, Materials, Flashcards, Progress.
  - Header row is row 4 on every tab; keep the column names as they are.
  - The page reads the sheet live only while the sheet is shared as "Anyone with the link: Viewer". Otherwise it shows `data.json` (a copy of the sheet made on 27 Nov 2026), so update that file too if the sheet is private.
- `cards.html`: the Lesson 7 flashcards (pronunciation with built-in British voice recordings in `audio/`, flashcards and quizzes, progress sent to the Zapier hook in `config.js`). Old `#join=` and `#teacher` links to `/alyona/` are forwarded here.
- Homework ticks and flashcard progress are saved in the browser on Alyona's phone.
