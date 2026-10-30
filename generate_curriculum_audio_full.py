import asyncio
import os
import re
import edge_tts
from build_full_curriculum import LESSON_DATABASE, CURRICULUM_UNITS

def fnv1a(s: str) -> str:
    h = 0x811c9dc5
    for c in s.encode('utf-8'):
        h ^= c
        h = (h * 0x01000193) & 0xffffffff
    return f'{h:08x}'

MALE_VOICE = 'th-TH-NiwatNeural'
FEMALE_VOICE = 'th-TH-PremwadeeNeural'

os.makedirs('audio/male', exist_ok=True)
os.makedirs('audio/female', exist_ok=True)

phrases = set()

# Gather all Thai phrases from curriculum
for lid, lesson in LESSON_DATABASE.items():
    for q in lesson.get('questions', []):
        if 'thai' in q and q['thai']:
            m = re.findall(r'[\u0E00-\u0E7F\s]+', q['thai'])
            if m:
                t = ''.join(m).strip()
                if t: phrases.add(t)
        if 'options' in q and q['options']:
            for opt in q['options']:
                if isinstance(opt, str):
                    m = re.findall(r'[\u0E00-\u0E7F\s]+', opt)
                    if m:
                        t = ''.join(m).strip()
                        if t: phrases.add(t)
        if 'pairs' in q and q['pairs']:
            for p in q['pairs']:
                if 'thai' in p and p['thai']:
                    m = re.findall(r'[\u0E00-\u0E7F\s]+', p['thai'])
                    if m:
                        t = ''.join(m).strip()
                        if t: phrases.add(t)
        if 'correctSentence' in q and q['correctSentence']:
            for w in q['correctSentence']:
                m = re.findall(r'[\u0E00-\u0E7F\s]+', w)
                if m:
                    t = ''.join(m).strip()
                    if t: phrases.add(t)

sorted_phrases = sorted(list(phrases))
print(f"Total unique curriculum phrases: {len(sorted_phrases)}")

async def synthesize_file(text: str, voice: str, path: str):
    if os.path.exists(path) and os.path.getsize(path) > 0:
        return
    for attempt in range(3):
        try:
            await edge_tts.Communicate(text, voice).save(path)
            await asyncio.sleep(0.04)
            return
        except Exception as e:
            if attempt == 2:
                print(f"Error {voice} '{text}': {e}")
            await asyncio.sleep(0.5)

async def generate_phrase(text: str, sem: asyncio.Semaphore, idx: int, total: int):
    h = fnv1a(text)
    male_path = f"audio/male/{h}.mp3"
    female_path = f"audio/female/{h}.mp3"

    async with sem:
        await synthesize_file(text, MALE_VOICE, male_path)
        await synthesize_file(text, FEMALE_VOICE, female_path)
        if idx % 25 == 0 or idx == total:
            print(f"Curriculum audio progress: [{idx}/{total}] completed ({int(idx/total*100)}%)")

async def main():
    sem = asyncio.Semaphore(4)
    tasks = [generate_phrase(p, sem, i+1, len(sorted_phrases)) for i, p in enumerate(sorted_phrases)]
    await asyncio.gather(*tasks)
    print("SUCCESS: All curriculum audio generated!")

if __name__ == '__main__':
    asyncio.run(main())
