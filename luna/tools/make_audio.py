"""Records every phrase the page says with a female voice (Kokoro TTS, voice af_heart).
Usage:
  node tools/phrases.js > phrases.json
  python make_audio.py phrases.json luna/audio   (needs: pip install kokoro-onnx soundfile; model files kokoro.onnx + voices.bin
  from github.com/thewh1teagle/kokoro-onnx releases, path in KOKORO_DIR; ffmpeg)
Writes one mp3 per phrase and audio/index.js (window.AUDIO = {key: file}). Existing files are kept."""
import hashlib, json, os, subprocess, sys, tempfile
import soundfile as sf
from kokoro_onnx import Kokoro

VOICE, LANG, SPEED = "af_heart", "en-us", 0.9
# letter sounds as phonemes (short vowel sounds and consonants with a light schwa)
SOUNDS = {"a": "æ", "e": "ɛ", "i": "ɪ", "o": "ɑ", "u": "ʌ", "b": "bə", "c": "kə", "k": "kə", "ck": "kə", "d": "də", "f": "fff", "ff": "fff",
          "g": "ɡə", "h": "hə", "j": "ʤə", "l": "lll", "m": "mmm", "n": "nnn", "p": "pə", "r": "ɹə", "s": "sss", "ss": "sss", "t": "tə",
          "v": "vvv", "w": "wə", "x": "ks", "y": "jə", "z": "zzz", "sh": "ʃʃ", "ch": "ʧə"}

src, outdir = sys.argv[1], sys.argv[2]
d = os.environ.get("KOKORO_DIR", "kok")
k = Kokoro(os.path.join(d, "kokoro.onnx"), os.path.join(d, "voices.bin"))
os.makedirs(outdir, exist_ok=True)
phr = json.load(open(src))
man = {}
for key, v in phr.items():
    fn = hashlib.sha1((VOICE + "|" + key).encode()).hexdigest()[:12] + ".mp3"
    man[key] = fn
    path = os.path.join(outdir, fn)
    if os.path.exists(path):
        continue
    if "sound" in v:
        samples, sr = k.create(SOUNDS.get(v["sound"], v["sound"]), voice=VOICE, speed=0.8, lang=LANG, is_phonemes=True)
    else:
        samples, sr = k.create(v["text"], voice=VOICE, speed=SPEED, lang=LANG)
    with tempfile.NamedTemporaryFile(suffix=".wav") as w:
        sf.write(w.name, samples, sr)
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", w.name, "-af", "silenceremove=start_periods=1:start_threshold=-50dB,areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse",
                        "-ac", "1", "-ar", "24000", "-b:a", "48k", path], check=True)
    print(key, "->", fn, round(len(samples) / sr, 2), "s")
with open(os.path.join(outdir, "index.js"), "w") as f:
    f.write("/* made by tools/make_audio.py: phrase -> recording (girl's voice) */\nwindow.AUDIO = " + json.dumps(man, ensure_ascii=False, indent=0) + ";\n")
print(len(man), "phrases")
