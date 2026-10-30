import json
import yt_dlp
import sys
import re

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

playlists = [
    {
        "part": 1,
        "partTitle": "Part I: Mengenal Aksara dan Ketentuan Bacanya",
        "file": "playlist_info.json",
        "playlistUrl": "https://youtube.com/playlist?list=PL3T0fRzpDm1nR6Z9dR8KzdU_Y6_S3mVbV"
    },
    {
        "part": 2,
        "partTitle": "Part II: Nada dan Ketentuan Tambahan Lainnya",
        "file": "playlist_part2_info.json",
        "playlistUrl": "https://youtube.com/playlist?list=PL3T0fRzpDm1m78DticHWj56Xt1Hu3-H5_"
    },
    {
        "part": 3,
        "partTitle": "Part III: Ilmu Dasar Bahasa Thai",
        "file": "playlist_part3_info.json",
        "playlistUrl": "https://youtube.com/playlist?list=PL3T0fRzpDm1nsHCeWR878iY0e1skUTyIq"
    },
    {
        "part": 4,
        "partTitle": "Part IV: Ceritakan Aktivitasmu!",
        "file": "playlist_part4_info.json",
        "playlistUrl": "https://youtube.com/playlist?list=PL3T0fRzpDm1n6R-P5hsW1bgA9UnPGAKR3"
    }
]

ydl = yt_dlp.YoutubeDL({'quiet': True, 'skip_download': True})

all_parts = []
total_videos = 0

for p in playlists:
    print(f"Loading {p['partTitle']}...")
    with open(p['file'], 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    entries = data.get('entries', [])
    part_lessons = []
    
    for idx, e in enumerate(entries):
        vid = e['id']
        raw_title = e['title']
        duration = e.get('duration', 0)
        
        # Clean title: remove "|| Learn Thai Language" or "|| Belajar Bahasa Thailand"
        clean_title = re.sub(r'\s*\|\|\s*(Learn Thai.*|Belajar Bahasa Thai.*)', '', raw_title, flags=re.IGNORECASE).strip()
        
        # Extract lesson number if available e.g. [01], [13], [26]
        lesson_num_match = re.search(r'\[(\d+)\]', clean_title)
        lesson_num = int(lesson_num_match.group(1)) if lesson_num_match else None
        
        # Determine category / type
        is_game = bool(re.search(r'game|tebak|translator|melatinkan|praktik|latihan', clean_title, re.IGNORECASE))
        
        part_lessons.append({
            'globalIndex': total_videos + idx + 1,
            'part': p['part'],
            'partTitle': p['partTitle'],
            'id': vid,
            'lessonNumber': lesson_num,
            'title': clean_title,
            'rawTitle': raw_title,
            'duration': duration,
            'durationFormatted': f"{duration // 60}:{duration % 60:02d}",
            'isGame': is_game,
            'youtubeUrl': f"https://www.youtube.com/watch?v={vid}",
            'embedUrl': f"https://www.youtube-nocookie.com/embed/{vid}"
        })
        
    total_videos += len(entries)
    all_parts.append({
        'part': p['part'],
        'partTitle': p['partTitle'],
        'playlistUrl': p['playlistUrl'],
        'videoCount': len(entries),
        'lessons': part_lessons
    })

print(f"Total videos mapped across 4 parts: {total_videos}")

with open("jazmi_complete_curriculum.json", "w", encoding="utf-8") as f:
    json.dump(all_parts, f, indent=2, ensure_ascii=False)

print("Saved jazmi_complete_curriculum.json successfully!")

