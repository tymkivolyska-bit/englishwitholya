/**
 * Ira's results receiver for "Writing Expert (Unit 1)".
 *
 * Setup (once):
 * 1. Create a Google Sheet called "Ira – Writing Expert results".
 * 2. In it: Extensions > Apps Script. Replace the code with this file. Save.
 * 3. Project Settings (gear) > Script Properties > Add property:
 *      TG_TOKEN = your @IraUK_bot token   (it stays private here, never on the website)
 * 4. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone.
 *    Allow the permissions, then copy the web app URL.
 * 5. Put that URL in ira/config.js (window.RESULTS_URL = "...").
 */
var CHAT_ID = 426642797; // the teacher's Telegram chat with @IraUK_bot

function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('Results') || ss.insertSheet('Results');
  if (sh.getLastRow() === 0) {
    sh.appendRow(['Time (Kyiv)', 'Student', 'Section', 'Set', 'Score %', 'Right', 'Questions', 'Missed / details']);
    sh.setFrozenRows(1);
  }
  var when = Utilities.formatDate(new Date(d.at || Date.now()), 'Europe/Kyiv', 'd MMM yyyy, HH:mm');
  var details = d.mode === 'Matching'
    ? d.seconds + ' s, ' + d.mistakes + ' mistakes'
    : (d.missed || []).join(', ') || d.note || '';
  sh.appendRow([when, d.student || 'Ira', d.mode, d.set, d.pct == null ? '' : d.pct, d.right == null ? '' : d.right, d.n == null ? '' : d.n, details]);

  if (d.mode === 'Test') {
    var token = PropertiesService.getScriptProperties().getProperty('TG_TOKEN');
    if (token) {
      var missed = (d.missed || []).length ? d.missed.join(', ') : 'nothing 🎉';
      var text = '📝 ' + (d.student || 'Ira') + ' finished a test\n' +
        'Set: ' + d.set + '\n' +
        'Score: ' + d.pct + '% (' + d.right + '/' + d.n + ')\n' +
        'Missed: ' + missed + '\n' +
        'Time: ' + Utilities.formatDate(new Date(d.at || Date.now()), 'Europe/Kyiv', 'd MMM, HH:mm');
      UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
        method: 'post', payload: { chat_id: String(CHAT_ID), text: text }, muteHttpExceptions: true
      });
    }
  }
  return ContentService.createTextOutput('ok');
}
