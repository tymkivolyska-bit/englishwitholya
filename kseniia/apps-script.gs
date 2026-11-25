/**
 * Kseniia's page -> "Kseniia B1 Progress Check" Google Sheet.
 *
 * Setup (once):
 * 1. Open the sheet. Extensions > Apps Script.
 * 2. Delete everything in Code.gs and paste this file. Save.
 * 3. Deploy > New deployment > gear icon > Web app.
 *    Execute as: Me. Who has access: Anyone. Deploy, then allow the permissions
 *    (Advanced > Go to ... > Allow).
 * 4. Copy the Web app URL and paste it on Kseniia's page (edit mode, Progress check section).
 *
 * It writes one row per entry on the skill tabs (Vocabulary, Grammar, Listening, Writing,
 * Pronunciation): Date | Lesson topic | Task / activity | Score | Out of | (% is a formula) |
 * Teacher's comments | Next step / homework. Data rows start at row 5.
 */
var TABS = ['Vocabulary', 'Grammar', 'Listening', 'Writing', 'Pronunciation'];
var FIRST = 5;

function doGet() { return out({ ok: true, sheet: SpreadsheetApp.getActiveSpreadsheet().getName() }); }

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    var d = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (d.action === 'ping') return out({ ok: true, sheet: ss.getName() });
    if (d.action === 'delete') { clearRow(ss, d.tab, d.row); return out({ ok: true }); }
    if (TABS.indexOf(d.tab) < 0) throw new Error('Unknown tab ' + d.tab);
    var sh = ss.getSheetByName(d.tab);
    if (d.oldTab && d.row && d.oldTab !== d.tab) { clearRow(ss, d.oldTab, d.row); d.row = 0; }
    var row = Number(d.row) >= FIRST ? Number(d.row) : firstEmpty(sh);
    sh.getRange(row, 1, 1, 5).setValues([[toDate(d.date), d.topic || '', d.task || '', num(d.score), num(d.outOf)]]);
    sh.getRange(row, 7, 1, 2).setValues([[d.comment || '', d.next || '']]);
    return out({ ok: true, tab: d.tab, row: row });
  } catch (err) {
    return out({ ok: false, error: String(err && err.message || err) });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

function firstEmpty(sh) {
  var last = Math.max(sh.getLastRow(), FIRST);
  var vals = sh.getRange(FIRST, 1, last - FIRST + 1, 3).getValues();
  for (var i = 0; i < vals.length; i++) {
    if (vals[i][0] === '' && vals[i][1] === '' && vals[i][2] === '') return FIRST + i;
  }
  return last + 1;
}
function clearRow(ss, tab, row) {
  if (TABS.indexOf(tab) < 0 || !(Number(row) >= FIRST)) return;
  var sh = ss.getSheetByName(tab);
  sh.getRange(Number(row), 1, 1, 5).clearContent();
  sh.getRange(Number(row), 7, 1, 2).clearContent();
}
function toDate(s) {
  var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || '');
  return m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : (s || '');
}
function num(v) { return v === '' || v == null || isNaN(Number(v)) ? (v || '') : Number(v); }
function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
