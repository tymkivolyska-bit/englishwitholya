/**
 * Diana's page -> "Diana A2+ – English hub" Google Sheet.
 * https://docs.google.com/spreadsheets/d/16gDQiY1BZvoUfF450wGhH4YhsXFyzj2jr1vHP564arU/edit
 *
 * Setup (once, about 2 minutes):
 * 1. Open the sheet. Extensions > Apps Script.
 * 2. Delete everything in Code.gs, paste this whole file, and Save.
 * 3. Deploy > New deployment > gear icon > Web app.
 *    Execute as: Me. Who has access: Anyone. Deploy, then allow the permissions
 *    (Advanced > Go to ... (unsafe) > Allow: it is your own script).
 * 4. Copy the Web app URL (ends with /exec) and put it in diana/config.js (window.SHEET_URL),
 *    or send it to Claude to add.
 *
 * What it writes:
 * - Activity: one row per event (homework ticked, flashcard session, progress check, report sent).
 *   Column I holds the event id so a resent event is never written twice.
 * - Progress checks: one row per finished check, with her mistakes.
 * - Homework (with Diana's written answers) and Words: rewritten in full from Diana's phone each time (current state).
 */
var ACTIVITY = 'Activity', CHECKS = 'Progress checks', HOMEWORK = 'Homework', WORDS = 'Words';

function doGet() { return out({ ok: true, sheet: SpreadsheetApp.getActiveSpreadsheet().getName() }); }

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    var d = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (d.action === 'ping') return out({ ok: true, sheet: ss.getName() });
    var added = addEvents(ss, d.events || []);
    if (d.homework) rewrite(ss.getSheetByName(HOMEWORK), d.homework.map(function (h) {
      return [h.text, h.lesson || '', h.due ? toDate(h.due) : '', h.done ? 'Yes' : 'No', h.doneAt ? new Date(h.doneAt) : '', h.answer || ''];
    }), 6);
    if (d.words) rewrite(ss.getSheetByName(WORDS), d.words.map(function (w) {
      return [w.w, w.t, w.lesson || '', w.seen || 0, w.right || 0, w.wrong || 0, w.status || '', w.last ? new Date(w.last) : ''];
    }), 8);
    return out({ ok: true, added: added });
  } catch (err) {
    return out({ ok: false, error: String(err && err.message || err) });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

function addEvents(ss, events) {
  if (!events.length) return 0;
  var act = ss.getSheetByName(ACTIVITY), chk = ss.getSheetByName(CHECKS);
  var last = act.getLastRow();
  var seen = {};
  if (last > 1) act.getRange(2, 9, last - 1, 1).getValues().forEach(function (r) { seen[r[0]] = true; });
  var n = 0;
  events.forEach(function (ev) {
    if (!ev.id || seen[ev.id]) return;
    seen[ev.id] = true;
    var when = new Date(ev.at || Date.now());
    var row = act.getLastRow() + 1;
    act.getRange(row, 1, 1, 9).setValues([[when, ev.type || '', ev.lesson || '', ev.what || '',
      num(ev.score), num(ev.outOf), '', ev.details || '', ev.id]]);
    if (ev.outOf) act.getRange(row, 7).setFormula('=IF(F' + row + '=0,"",E' + row + '/F' + row + ')');
    if (ev.type === 'Progress check') {
      var r2 = chk.getLastRow() + 1;
      chk.getRange(r2, 1, 1, 5).setValues([[when, ev.lesson || '', ev.what || '', num(ev.score), num(ev.outOf)]]);
      chk.getRange(r2, 6).setFormula('=IF(E' + r2 + '=0,"",D' + r2 + '/E' + r2 + ')');
      chk.getRange(r2, 7).setValue(ev.details || '');
    }
    n++;
  });
  return n;
}

function rewrite(sh, rows, cols) {
  var last = sh.getLastRow();
  if (last > 1) sh.getRange(2, 1, last - 1, cols).clearContent();
  if (rows.length) sh.getRange(2, 1, rows.length, cols).setValues(rows);
}
function toDate(s) {
  var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || '');
  return m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : (s || '');
}
function num(v) { return v === '' || v == null || isNaN(Number(v)) ? (v || '') : Number(v); }
function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
