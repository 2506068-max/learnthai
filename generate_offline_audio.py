#!/usr/bin/env python3
import asyncio
import os
import sys
import json
import edge_tts

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

MALE_VOICE = 'th-TH-NiwatNeural'
FEMALE_VOICE = 'th-TH-PremwadeeNeural'

os.makedirs('audio_cache/male', exist_ok=True)
os.makedirs('audio_cache/female', exist_ok=True)

def fnv1a(s: str) -> str:
    h = 0x811c9dc5
    for c in s.encode('utf-8'):
        h ^= c
        h = (h * 0x01000193) & 0xffffffff
    return f'{h:08x}'

# Essential list of Thai words from matrix & dictionary
WORDS_TO_CACHE = [
    # Consonants (spoken names)
    'กอ ไก่', 'จอ จาน', 'ฎอ ชฎา', 'ฏอ ปฏัก', 'ดอ เด็ก', 'ตอ เต่า', 'บอ ใบไม้', 'ปอ ปลา', 'ออ อ่าง',
    'ขอ ไข่', 'ฃอ ขวด', 'ฉอ ฉิ่ง', 'ฐอ ฐาน', 'ถอ ถุง', 'ผอ ผึ้ง', 'ฝอ ฝา', 'ศอ ศาลา', 'ษอ ฤๅษี', 'สอ เสือ', 'หอ หีบ',
    'คอ ควาย', 'ฅอ คน', 'ฆอ ระฆัง', 'งอ งู', 'ชอ ช้าง', 'ซอ โซ่', 'ฌอ เฌอ', 'ญอ หญิง', 'ฑอ มณโฑ', 'ฒอ ผู้เฒ่า',
    'ณอ เณร', 'ทอ ทหาร', 'ธอ ธง', 'นอ หนู', 'พอ พาน', 'ฟอ ฟัน', 'ภอ สำเภา', 'มอ ม้า', 'ยอ ยักษ์', 'รอ เรือ',
    'ลอ ลิง', 'วอ แหวน', 'ฬอ จุฬา', 'ฮอ นกฮูก',
    # Vowels
    'สระอะ', 'สระอา', 'สระอิ', 'สระอี', 'สระอึ', 'สระอือ', 'สระอุ', 'สระอู', 'สระเอ', 'สระแอ', 'สระโอ', 'สระเอาะ', 'สระเอีย', 'สระเอือ',
    # Numerals
    'ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า', 'สิบ',
    # 5 Tones minimal pairs
    'กา', 'ก่า', 'ก้า', 'ก๊า', 'ก๋า',
    'ปา', 'ป่า', 'ป้า', 'ป๊า', 'ป๋า',
    'มา', 'หม่า', 'ม่า', 'ม้า', 'หมา',
    'คา', 'ข่า', 'ค่า', 'ค้า', 'ขา',
    # Essential Greetings & Phrases
    'สวัสดีค่ะ', 'สวัสดีครับ', 'ขอบคุณค่ะ', 'ขอบคุณครับ', 'ขอโทษค่ะ', 'ขอโทษครับ',
    'ไม่เป็นไรค่ะ', 'ไม่เป็นไรครับ', 'สบายดีไหมคะ', 'สบายดีครับ',
    'ยินดีต้อนรับสู่สวนภาษาไทยนะคะ มะลิพร้อมช่วยฝึกพูดค่ะ',
    'กิน', 'ดื่ม', 'น้ำ', 'น้ำเปล่า', 'ข้าว', 'ข้าวผัด', 'ผัดไทย', 'ต้มยำกุ้ง', 'ส้มตำ', 'ชาเย็น', 'กาแฟ',
    'เผ็ด', 'ไม่เผ็ด', 'เผ็ดนิดหน่อย', 'อร่อย', 'หวาน', 'เค็ม', 'เปรี้ยว',
    'เท่าไหร่', 'กี่บาท', 'แพง', 'ถูก', 'ลดได้ไหม', 'เช็คบิล', 'เก็บเงินด้วย',
    'ไปไหน', 'อยู่ที่ไหน', 'ตรงไป', 'เลี้ยวซ้าย', 'เลี้ยวขวา', 'ใกล้', 'ไกล', 'ห้องน้ำ',
    'สนามบิน', 'โรงแรม', 'รถแท็กซี่', 'รถตุ๊กตุ๊ก', 'รถไฟฟ้า', 'จอดที่นี่', 'เปิดมิเตอร์ด้วย',
    'พูดภาษาไทยได้ไหม', 'เข้าใจ', 'ไม่เข้าใจ', 'นิดหน่อย', 'รักภาษาไทย'
]

async def cache_word(word: str, gender: str):
    h = fnv1a(word)
    voice = MALE_VOICE if gender == 'male' else FEMALE_VOICE
    target = f'audio_cache/{gender}/{h}.mp3'
    if os.path.exists(target) and os.path.getsize(target) > 500:
        return 'EXISTS'
    try:
        rate = '-2%' if gender == 'male' else '+2%'
        await edge_tts.Communicate(word, voice, rate=rate).save(target)
        return 'SUCCESS'
    except Exception as e:
        return f'ERROR: {e}'

async def main():
    unique_words = sorted(list(set(WORDS_TO_CACHE)))
    print(f"📦 Total target kosakata unik untuk pra-generasi: {len(unique_words)} kata", flush=True)

    sem = asyncio.Semaphore(5)

    async def sem_task(w, g):
        async with sem:
            res = await cache_word(w, g)
            return (w, g, res)

    tasks = []
    for g in ['female', 'male']:
        for w in unique_words:
            tasks.append(sem_task(w, g))

    print(f"🚀 Memulai pra-generasi {len(tasks)} audio files (Wanita + Pria)...", flush=True)
    results = await asyncio.gather(*tasks)

    success_cnt = sum(1 for r in results if r[2] == 'SUCCESS')
    exists_cnt = sum(1 for r in results if r[2] == 'EXISTS')
    error_cnt = sum(1 for r in results if 'ERROR' in r[2])

    print(f"✅ Pra-generasi selesai!")
    print(f"   • Dibuat baru: {success_cnt}")
    print(f"   • Sudah ada sebelumnya: {exists_cnt}")
    print(f"   • Gagal/Skip: {error_cnt}")

if __name__ == '__main__':
    asyncio.run(main())

