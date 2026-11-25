# Lera's Word Deck

Flashcards for Lera's architecture lessons, published with GitHub Pages.

- `words.json`: the word list. Add new lesson words at the end (same fields: `id`, `lesson`, `lessonTitle`, `word`, `pos`, `ipa`, `def`, `example`, `order`). Add `"focus": true` to show a word in "Teacher's focus words".
- `feedback.json`: lesson feedback shown at the top of the Progress tab (date, lesson, mistakes, newWords, stillToLearn word ids, mainTask, selfStudy). Newest last.
- `config.js`: the Google Apps Script link that saves each session to the tracker sheet and sends a Telegram message.
- Progress is kept in the browser Lera practises on; every finished session is also sent to the sheet.

## Progress backup (Zapier)
`PROGRESS_URL` in config.js is a Zapier catch hook (workflow "Lera flashcards progress sync"). About 20 seconds after she answers, and whenever she finishes or leaves the page, the full per-word progress is sent and stored in Storage by Zapier under the key `lera-progress`.
