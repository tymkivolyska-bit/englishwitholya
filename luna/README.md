# Luna's English

Interactive English lessons for Luna, published with GitHub Pages at `/luna/`.
Design: cream paper clipped to a pink striped wall (from a Pinterest picture), drawn in CSS/SVG.

- `index.html`: the page. Lesson list, then each lesson with new words (with a Listen button), a "Remember" grammar card and tasks with a Check button.
- `lessons.js`: all lessons and tasks (after editing it, change the `?v=` number on the `lessons.js` script line in `index.html` so phones load the new version). Edit this file to add or change lessons. The comment at the top explains every field and task type (`choose`, `fill`, `match`, `order`), pictures (`img`), intros and free answers (`"*"`).
- `img/`: pictures for the lessons (cut-out WebP stickers).
- Progress (answers and stars) is saved in the browser on Luna's device (localStorage key `luna-english-v1`). "start again" at the bottom clears it.

Lessons:
1. "There is a panda on the bus!" is built from the ESL Level 2 Lesson 4 worksheet (adjectives tall/short/big/small/cute/scary, panda, wolf, bus, giraffe) plus there is / there are / there isn't / there aren't practice.
2. "What's in the kitchen?" from the Lesson 5 worksheet and slides (kitchen words, singular/plural, Is there…? Are there…?). Starts with the "What is on your plate today?" warm-up (`type:"plate"`: tap food to put it on the plate; the page writes the there is / there are sentence).

   Also has reading (`type:"cvc"`: tap each letter to hear its sound, "Sound it out" blends them, then she picks the picture), writing (missing vowel, build the word from letters with `letters:true` on an `order` task, write the word) and speaking (`type:"speak"`: she says her own sentence; the browser's speech recognition checks it has the words in `need`, or she taps "I said it").

3. "Snowy CVC words" from the Winter CVC Words Activity Booklet (pictures cropped from it into `img/w/`). Task types added: `spy` (read a word, tap it in the picture; `box` is [left, top, right, bottom] in % of the picture), `join` (pick one letter per column), `colour` (pick a colour from the key, tap matching words on the scarf). In `cvc` words, write digraphs with dashes (`s-o-ck`), and options can be picture paths.

Pictures in tasks: `img` can be one path or a list (shows them side by side); `no:true` draws a red "no" sign over the picture.
