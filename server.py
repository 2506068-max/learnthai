#!/usr/bin/env python3
import http.server
import socketserver
import urllib.parse
import os
import asyncio
import edge_tts

PORT = 3000
MALE_VOICE = 'th-TH-NiwatNeural'
FEMALE_VOICE = 'th-TH-PremwadeeNeural'

os.makedirs('audio/male', exist_ok=True)
os.makedirs('audio/female', exist_ok=True)
os.makedirs('audio_cache/male', exist_ok=True)
os.makedirs('audio_cache/female', exist_ok=True)

def fnv1a(s: str) -> str:
    h = 0x811c9dc5
    for c in s.encode('utf-8'):
        h ^= c
        h = (h * 0x01000193) & 0xffffffff
    return f'{h:08x}'

class ThaiAppRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and disable referer restriction
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_HEAD(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == '/api/tts':
            self.send_response(200)
            self.send_header('Content-Type', 'audio/mpeg')
            self.end_headers()
            return
        super().do_HEAD()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == '/api/tts':
            query = urllib.parse.parse_qs(parsed.query)
            text = query.get('text', [''])[0].strip()
            gender = query.get('gender', ['female'])[0].lower()
            if not text:
                self.send_error(400, "Missing 'text' parameter")
                return

            h = fnv1a(text)
            voice = MALE_VOICE if gender == 'male' else FEMALE_VOICE
            cached_path = f"audio_cache/{gender}/{h}.mp3"
            pregen_path = f"audio/{gender}/{h}.mp3"

            target_path = pregen_path if os.path.exists(pregen_path) else cached_path

            if not os.path.exists(target_path) or os.path.getsize(target_path) == 0:
                try:
                    async def generate():
                        rate = "-2%" if gender == 'male' else "+2%"
                        await edge_tts.Communicate(text, voice, rate=rate).save(cached_path)
                    asyncio.run(generate())
                    target_path = cached_path
                except Exception as e:
                    print(f"TTS Generation Error for '{text}': {e}")
                    self.send_error(500, f"TTS error: {e}")
                    return

            try:
                with open(target_path, 'rb') as f:
                    data = f.read()
                self.send_response(200)
                self.send_header('Content-Type', 'audio/mpeg')
                self.send_header('Content-Length', str(len(data)))
                self.send_header('Cache-Control', 'public, max-age=31536000')
                self.end_headers()
                self.wfile.write(data)
            except Exception as e:
                self.send_error(500, f"File read error: {e}")
            return

        # Fallback to standard static file serving (index.html, fairy_thai_academy.html, audio/...)
        super().do_GET()

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), ThaiAppRequestHandler) as httpd:
        print(f"🌿 Mali's Thai Garden Server running with Neural TTS at http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
