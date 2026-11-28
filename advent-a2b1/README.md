# Advent calendar (English A2–B1)

Live at `/advent-a2b1/`. 24 illustrated days. Each day opens one short English task (grammar, vocabulary or reading) that checks itself. Students earn:

- a **sticker** for their sticker book when they get at least half right (`passPercent` in `tasks.js`),
- **1–3 stars** for their score (they can try again to win more),
- a **present** at 6, 12 and 18 stickers (a badge with a small surprise), and a **certificate** with their name at 24.

## Unlocking

Day N opens on N December (`settings.year`) by the student's own device clock. Set `unlockByDate: false` in `tasks.js` to open every day at once.

**Teacher preview:** at the bottom of the page, open "For teachers" and type the PIN (`teacherPin` in `tasks.js`, default `2512`). Every day opens on that device until "Turn off" is pressed.

## Saved progress

Stickers, stars, opened presents and the student's name are saved in the browser on that device (localStorage, key `advent-a2b1-v1`). Nothing is sent anywhere. Another phone, a private window or clearing browser data starts fresh. "Reset my progress" clears it.

## Editing tasks

All the tasks are in `tasks.js`. Each day has a `title`, `skill`, `intro`, an optional reading `text`, and `items`:

```js
{ type: "choice", q: "Would you like ___ cocoa?", options: ["some", "many", "a"], answer: 0 } // answer = index of the right option; options are shuffled on screen
{ type: "gap", q: "Christmas Day is ___ 25 December.", answer: ["on"] }            // any of these answers counts
{ type: "match", q: "Match the words.", pairs: [["hat", "on your head"], ...] }
{ type: "order", q: "Put the words in order.", answer: "I would like a new book" }
{ type: "wordsearch", q: "Find the words.", grid: ["ROWOFLETTERS", ...], words: ["WORD", ...] }
{ type: "write", q: "Open question" }              // saved, not marked
{ type: "heading", text: "Task 1. ...", bank: ["word bank"] } // starts a new task section
{ type: "reading", text: "A text between tasks" }
```

Day 1 is a full lesson (the Grinch film workbook): it uses headings, a word list fold-out (`glossary`), picture labelling (`match` with `images: true`), a word search and open questions. Answers in progress are saved on the device, so students can stop and come back.

## Pictures

`img/tile1.jpg`–`tile24.jpg` are cut from the calendar design; `img/sticker*.jpg` are the round sticker versions.
