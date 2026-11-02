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
  const filename = `${hash}.mp3`;
  
  // Check all possible locations where static audio files might reside
  const possiblePaths = [
    path.join(process.cwd(), 'audio_cache', targetGender, filename),
    path.join(process.cwd(), 'audio', targetGender, filename),
    path.resolve(__dirname, '..', 'audio_cache', targetGender, filename),
    path.resolve(__dirname, '..', 'audio', targetGender, filename),
    path.join(__dirname, 'audio_cache', targetGender, filename),
    path.join(__dirname, 'audio', targetGender, filename)
  ];

  let filePath = null;
  for (const p of possiblePaths) {
    try {
      if (fs.existsSync(p)) {
        filePath = p;
        break;
      }
    } catch (e) {}
  }

  if (filePath) {
    try {
      const data = fs.readFileSync(filePath);
      res.setHeader('Content-Type', 'audio/mpeg');
      res.setHeader('Content-Length', data.length);
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      return res.end(data);
    } catch (err) {
      console.error('Error reading audio file:', err);
    }
  }

  // Fallback: Redirect to high-quality Google TTS streaming audio
  const googleTtsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=th&client=tw-ob`;
  return res.redirect(302, googleTtsUrl);
};
