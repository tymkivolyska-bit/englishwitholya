"""Records the Listen buttons of the hub page (Errors tab) with a British female voice (Kokoro TTS, voice bf_emma).
Usage (from the alyona folder):  python tools/make_hub_audio.py data.json audio
Needs: pip install kokoro-onnx soundfile, ffmpeg, and kok/kokoro.onnx + kok/voices.bin
(model: npm package kokoro-q8-shards, join its part0..part5 files into kokoro.onnx;
 voice: bf_emma.bin from npm package kokoro-js, saved as an npz 'voices.bin' with key bf_emma, shape (510,1,256)).
Update data.json from the sheet first, then run. Existing recordings are kept."""
import json,hashlib,re,subprocess,tempfile,sys,os
import soundfile as sf
from kokoro_onnx import Kokoro
k=Kokoro(os.path.join(os.environ.get('KOKORO_DIR','kok'),'kokoro.onnx'),os.path.join(os.environ.get('KOKORO_DIR','kok'),'voices.bin'))
def speak(s):return re.sub(r'^to ','',re.sub(r'\(.*?\)','',str(s))).strip()
def texts(d):
  T=set()
  for r in d.get('Errors',[]):
    t=str(r.get('Type','')).lower()
    T.add(speak(r.get('You said / word','') if ('new word' in t or 'pronun' in t) else r.get('Better / meaning','')))
  return sorted(x for x in T if x)
out=sys.argv[2];man={}
for t in texts(json.load(open(sys.argv[1]))):
  fn=re.sub(r'[^a-z0-9]+','-',t.lower()).strip('-')[:40]+'-'+hashlib.sha1(t.encode()).hexdigest()[:6]+'.mp3'
  man[t]=fn;path=os.path.join(out,fn)
  if os.path.exists(path):continue
  s,sr=k.create(t,voice='bf_emma',speed=0.9,lang='en-gb')
  with tempfile.NamedTemporaryFile(suffix='.wav') as w:
    sf.write(w.name,s,sr)
    subprocess.run(['ffmpeg','-loglevel','error','-y','-i',w.name,'-af','silenceremove=start_periods=1:start_threshold=-50dB,areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse','-ac','1','-ar','24000','-b:a','48k',path],check=True)
  print(t,fn)
open(os.path.join(out,'hub.js'),'w').write('/* Recorded British female voice (Kokoro bf_emma) for the hub page. Made by tools/make_hub_audio.py */\nwindow.HUB_AUDIO='+json.dumps(man,ensure_ascii=False)+';\n')
