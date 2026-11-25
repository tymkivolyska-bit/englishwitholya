# Sasha's word cards

- `index.html` + `cards.js`: the flashcard app (Study, Learn, Progress report). `cards.js` holds the lessons and words.
- `progress.html`: the progress check table. One row per lesson: lesson done, NMT tests, words learned.
- `progress.json`: what the teacher fills in for the progress check.
  - `lessons`: lessons done, in order. `id` matches a lesson in `cards.js` (`l1`...). Optional `date` (YYYY-MM-DD) and `note`. A lesson without words in `cards.js` can use any new id plus `"title"`.
  - `nmtTests`: `{ "title", "url", "date", "score", "lesson" }`. `lesson` is the lesson id the test goes with; leave it empty for a general test.
- Words learned come from the flashcard progress saved in the browser on Sasha's phone (a word counts as learned after it has been remembered three times in a row on the spaced schedule).
  - `homework`: `{ "due": "YYYY-MM-DD", "tasks": [{ "title", "url" }] }`, shown at the top of the progress check with a tick box per task (ticks are saved on the device). Newest set last.
