const fs = require('fs');
const path = require('path');

function fnv1a(str) {
  if (!str) return '00000000';
  const utf8 = Buffer.from(str, 'utf8');
  let h = 0x811c9dc5;
  for (let i = 0; i < utf8.length; i++) {
    h ^= utf8[i];
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { text = '', gender = 'female' } = req.query;
  if (!text) {
    return res.status(400).send('Missing text parameter');
  }

  const hash = fnv1a(text);
  const targetGender = gender === 'male' ? 'male' : 'female';
  
  // Check if static audio file exists in audio_cache or audio
  const cachePath = path.join(process.cwd(), 'audio_cache', targetGender, `${hash}.mp3`);
  const pregenPath = path.join(process.cwd(), 'audio', targetGender, `${hash}.mp3`);

  let filePath = null;
  if (fs.existsSync(cachePath)) {
    filePath = cachePath;
  } else if (fs.existsSync(pregenPath)) {
    filePath = pregenPath;
  }

  if (filePath) {
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    const stream = fs.createReadStream(filePath);
    return stream.pipe(res);
  }

  // Fallback: Redirect to high-quality Google TTS streaming audio
  const googleTtsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=th&client=tw-ob`;
  return res.redirect(302, googleTtsUrl);
};
