# Lera's Word Deck

Flashcards for Lera's architecture lessons, published with GitHub Pages.

- `words.json`: the word list. Add new lesson words at the end (same fields: `id`, `lesson`, `lessonTitle`, `word`, `pos`, `ipa`, `def`, `example`, `order`). Add `"focus": true` to show a word in "Teacher's focus words".
- `feedback.json`: lesson feedback shown at the top of the Progress tab (date, lesson, mistakes, newWords, stillToLearn word ids, mainTask, selfStudy). Newest last.
- `config.js`: the Google Apps Script link that saves each session to the tracker sheet and sends a Telegram message.
- Progress is kept in the browser Lera practises on; every finished session is also sent to the sheet.
