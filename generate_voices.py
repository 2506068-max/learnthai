import asyncio
import os
import re
import edge_tts

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

with open('fairy_thai_academy.html', 'r', encoding='utf-8') as f:
    content = f.read()

spoken = re.findall(r"spoken:\s*'([^']+)'", content)
thai_phrases = re.findall(r"thai:\s*'([^']+)'", content)

raw_items = set()
for s in spoken + thai_phrases:
    clean = re.sub(r'<[^>]*>', '', s).strip()
    clean = re.sub(r'^[-\s]+|[-\s]+$', '', clean)
    if clean and any('\u0e00' <= c <= '\u0e7f' for c in clean):
        raw_items.add(clean)

additional = [
    'สวัสดีครับ', 'สวัสดีค่ะ',
    'ขอบคุณครับ', 'ขอบคุณค่ะ',
    'ขอโทษครับ', 'ขอโทษค่ะ',
    'ไม่เป็นไรครับ', 'ไม่เป็นไรค่ะ',
    'สบายดีไหมครับ', 'สบายดีไหมคะ',
    'ยินดีที่ได้รู้จักครับ', 'ยินดีที่ได้รู้จักค่ะ',
    'ลาก่อนครับ', 'ลาก่อนค่ะ',
    'พบกันใหม่ครับ', 'พบกันใหม่ค่ะ',
    'อันนี้เท่าไหร่ครับ', 'อันนี้เท่าไหร่คะ',
    'ลดหน่อยได้ไหมครับ', 'ลดหน่อยได้ไหมคะ',
    'ขอผัดไทยหนึ่งจานครับ', 'ขอผัดไทยหนึ่งจานค่ะ',
    'ขอน้ำเปล่าหนึ่งแก้วครับ', 'ขอน้ำเปล่าหนึ่งแก้วค่ะ',
    'ไปวัดอรุณครับ', 'ไปวัดอรุณค่ะ',
    'จอดที่นี่ด้วยครับ', 'จอดที่นี่ด้วยค่ะ',
    'ห้องน้ำอยู่ที่ไหนครับ', 'ห้องน้ำอยู่ที่ไหนคะ',
    'อร่อยมากครับ', 'อร่อยมากค่ะ',
    'เก็บเงินด้วยครับ', 'เก็บเงินด้วยค่ะ',
    'ใช่ครับ', 'ใช่ค่ะ',
    'ไม่ใช่ครับ', 'ไม่ใช่ค่ะ',
    'เข้าใจแล้วครับ', 'เข้าใจแล้วค่ะ',
    'กอ ไก่', 'ขอ ไข่', 'ฅอ คน', 'คอ ควาย', 'ฆอ ระฆัง', 'งอ งู',
    'จอ จาน', 'ฉอ ฉิ่ง', 'ชอ ช้าง', 'ซอ โซ่', 'ฌอ กะเฌอ', 'ญอ หญิง',
    'ฎอ ชฎา', 'ฏอ ปฏัก', 'ฐอ ฐาน', 'ฑอ มณโฑ', 'ฒอ ผู้เฒ่า', 'ณอ เณร',
    'ดอ เด็ก', 'ตอ เต่า', 'ถอ ถุง', 'ทอ ทหาร', 'ธอ ธง', 'นอ หนู',
    'บอ ใบไม้', 'ปอ ปลา', 'ผอ ผึ้ง', 'ฝอ ฝา', 'พอ พาน', 'ฟอ ฟัน',
    'ภอ สำเภา', 'มอ ม้า', 'ยอ ยักษ์', 'รอ เรือ', 'ลอ ลิง', 'วอ แหวน',
    'ศอ ศาลา', 'ษอ ฤๅษี', 'สอ เสือ', 'หอ หีบ', 'ฬอ จุฬา', 'ออ อ่าง', 'ฮอ นกฮูก',
    'สระอะ', 'สระอา', 'สระอิ', 'สระอี', 'สระอึ', 'สระอือ', 'สระอุ', 'สระอู',
    'สระเอ', 'สระแอ', 'สระโอ', 'สระเอาะ', 'สระเอีย', 'สระเอือ', 'สระใบลไม้ม้วน', 'สระไม้มลาย',
    'เสียงสามัญ', 'เสียงเอก', 'เสียงโท', 'เสียงตรี', 'เสียงจัตวา',
    'กา', 'ก่า', 'ก้า', 'ก๊า', 'ก๋า',
    'มา', 'หม่า', 'ม่า', 'ม้า', 'หมา',
    'ปา', 'ป่า', 'ป้า', 'ป๊า', 'ป๋า',
    'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า', 'สิบ'
]

for item in additional:
    raw_items.add(item)

print(f"Total vocabulary and phrase targets: {len(raw_items)}")

async def synthesize_file(text: str, voice: str, path: str, rate: str):
    if os.path.exists(path) and os.path.getsize(path) > 0:
        return
    for attempt in range(3):
        try:
            await edge_tts.Communicate(text, voice, rate=rate).save(path)
            await asyncio.sleep(0.08)
            return
        except Exception as e:
            if attempt == 2:
                print(f"Failed {voice} '{text}': {e}")
            await asyncio.sleep(1.0)

async def generate_item(text: str, sem: asyncio.Semaphore):
    h = fnv1a(text)
    male_path = f"audio/male/{h}.mp3"
    female_path = f"audio/female/{h}.mp3"

    is_question = bool(re.search(r'[?？]|ไหม|มั้ย|หรือ|อะไร|ที่ไหน|เมื่อไหร่|เท่าไหร่|กี่|ใคร|ทำไม', text))
    has_particle = bool(re.search(r'ครับ|ค่ะ|คะ|นะครับ|นะคะ|ผม|ฉัน', text))

    male_text = text
    female_text = text

    if has_particle:
        male_text = re.sub(r'ดิฉัน|ฉัน', 'ผม', male_text)
        male_text = re.sub(r'นะคะ', 'นะครับ', male_text)
        male_text = re.sub(r'ค่ะ|คะ', 'ครับ', male_text)

        female_text = re.sub(r'ผม', 'ฉัน', female_text)
        female_text = re.sub(r'นะครับ', 'นะคะ', female_text)
        if is_question:
            female_text = re.sub(r'ครับ', 'คะ', female_text)
        else:
            female_text = re.sub(r'ครับ', 'ค่ะ', female_text)

    async with sem:
        await synthesize_file(male_text, MALE_VOICE, male_path, "-2%")
        await synthesize_file(female_text, FEMALE_VOICE, female_path, "+2%")

async def main():
    sem = asyncio.Semaphore(2)
    items = sorted(list(raw_items))
    for i, item in enumerate(items):
        await generate_item(item, sem)
        if i % 25 == 0:
            print(f"Progress: {i}/{len(items)}")
    print("All voice audio generation completed!")

if __name__ == '__main__':
    asyncio.run(main())
