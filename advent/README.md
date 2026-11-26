# Christmas advent calendar

Live at `/advent/`. 24 days in a 4 x 6 grid; tapping a day opens its task.

## Adding a task

Edit `tasks.json` and fill in the day you want:

```json
{ "day": 5, "title": "Winter words", "text": "Write 5 winter words.\nUse each one in a sentence.", "link": "", "image": "" }
```

- `title`: the task's heading. While it is empty, the day shows "Task coming soon" and has no Done button.
- `text`: the task itself. `\n` starts a new line.
- `link` (optional): a URL shown as an "Open the task" button. Add `"linkLabel": "Watch the video"` to change the button text.
- `image` (optional): a picture URL shown under the text (a file in this folder works too, e.g. `"img/day5.png"`).

## Lesson pages

A day can open a full lesson page. Put it in its own folder (day 1 is in `day1/`) and set that day's `link` to the folder, e.g. `"link": "day1/"`, `"linkLabel": "Start the lesson"`. Links inside the site open in the same tab; outside links open a new tab.

`day1/`: *Romanticizing Winter*, a CELTA reading lesson (B2–C1). It links to and embeds Maya Top's original Substack post rather than copying it. Tick "Teacher notes" at the top to show aims, timings, CCQs and staging notes. Students' answers are saved on their device.

## Settings

- `settings.unlockByDate`: `false` (default) lets every day open any time. `true` opens day N only from December N of `settings.year`.

## Saved progress

"Mark as done" ticks a day. Ticks are saved in the browser on that device (localStorage), so each student keeps their own progress; another phone or a cleared browser starts fresh. "Reset my progress" at the bottom clears it.

## Files

- `index.html`, `style.css`: page and look.
- `ornaments.js`: the drawn ornaments (SVG) for days that show a picture instead of a big number.
- `app.js`: calendar, task view, saved progress.
