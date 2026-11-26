# Lana's English

Pink and white lessons site for Lana, published with GitHub Pages at `/lana/`.
All content comes from Olya's Miro board "Unit 1 - Vlog your day!" (https://miro.com/app/board/uXjVENcX35A=/).

- `index.html`: the page (design, and the app: Lessons, Flashcards, Progress, Stickers tabs).
- `lessons.js`: the unit, its 4 sections (1.1 Vocabulary, 1.2 Grammar, 1.3 Listening, 1.4 Global Skills), every exercise, the flashcard decks and the progress-check questions. The comment at the top explains the task types. After editing, bump the `?v=` number on the `lessons.js` script line in `index.html` so phones load the new version.
- `stickers.js`: the pink stickers drawn in SVG (bows, cocoa, latte, gift, candle, planner, roses, headphones, heart...).

Saving: answers, scores (best score per exercise), flashcards marked "I know it" and progress-check results are saved in the browser on Lana's device (localStorage key `lana-english-v1`). "start again" at the bottom clears them.

Checking: exercises with a fixed answer are marked automatically. Exercises that need the audio Olya plays in class (1.1 Ex 3, 1.3 Ex 3-5) and the writing/speaking tasks are saved and count as done, but Olya checks them. To auto-mark one, put the right answer in `lessons.js` (`answer: 0` for the first option, `true/false` for tf).
