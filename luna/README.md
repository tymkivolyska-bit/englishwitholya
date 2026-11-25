# Luna's English

Interactive English lessons for Luna, published with GitHub Pages at `/luna/`.
Design: cream paper clipped to a pink striped wall (from a Pinterest picture), drawn in CSS/SVG.

- `index.html`: the page. Lesson list, then each lesson with new words (with a Listen button), a "Remember" grammar card and tasks with a Check button.
- `lessons.js`: all lessons and tasks. Edit this file to add or change lessons. The comment at the top explains every field and task type (`choose`, `fill`, `match`, `order`), pictures (`img`), intros and free answers (`"*"`).
- `img/`: pictures for the lessons (cut-out WebP stickers).
- Progress (answers and stars) is saved in the browser on Luna's device (localStorage key `luna-english-v1`). "start again" at the bottom clears it.

Lesson 1 "There is a panda on the bus!" is built from the ESL Level 2 Lesson 4 worksheet (adjectives tall/short/big/small/cute/scary, panda, wolf, bus, giraffe) plus there is / there are / there isn't / there aren't practice.
