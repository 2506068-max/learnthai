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

phrases = [
    # 13. Taxi
    'สวัสดีครับ ไปที่ไหนครับ?',
    'ไปสยามพารากอนครับ เปิดมิเตอร์ด้วยนะครับ',
    'ได้ครับ เปิดมิเตอร์เรียบร้อยแล้วครับ ขึ้นทางด่วนไหม?',
    'ไม่ขึ้นทางด่วนครับ ไปทางธรรมดา',
    'โอเคครับ ถ้าทางธรรมดาอาจจะรถติดนิดหน่อยนะ',
    'จอดตรงป้ายรถเมล์ข้างหน้าครับ',
    'ได้เลยครับ ทั้งหมด 95 บาทครับ',

    # 14. Chao Phraya Express Boat
    'เรือด่วนเจ้าพระยาจ้า จะไปท่าเรือไหนคะ?',
    'ไปท่าช้าง พระบรมมหาราชวังครับ',
    'นั่งเรือธงส้มได้เลยค่ะ ค่าโดยสาร 16 บาทตลอดสาย!',
    'เรือลำนี้จอดไอคอนสยามไหมครับ',
    'ลำนี้ไม่จอดค่ะ ต้องข้ามไปขึ้นเรือข้ามฟากท่าเรือตรงข้ามนะคะ',
    'เรือหมดกี่โมงครับ',
    'เรือเที่ยวสุดท้ายหมดหนึ่งทุ่มตรงค่ะ อย่ากลับดึกนะ!',

    # 15. Tourist SIM Card
    'สวัสดีค่ะ สนใจซิมการ์ดท่องเที่ยวสำหรับเล่นเน็ตไหมคะ?',
    'ขอซิมเน็ตไม่อั้น 8 วันครับ',
    'แนะนำแพ็กเกจ 8 วัน เน็ต 5G ไม่จำกัด 299 บาทค่ะ!',
    'ต้องลงทะเบียนพาสปอร์ตไหมครับ',
    'ต้องใช้พาสปอร์ตตัวจริงลงทะเบียนตามกฎหมายค่ะ',
    'ช่วยเปลี่ยนซิมและตั้งค่าให้ด้วยครับ',
    'ยินดีค่ะ ใส่ซิมให้แล้ว เปิดใช้งานเน็ตได้ทันทีเลยค่ะ!',

    # 16. Supermarket (Big C)
    'สวัสดีครับ ได้ของฝากครบหรือยังครับ มีอะไรให้ช่วยไหม?',
    'ชาไทยผงกับสาหร่ายเถ้าแก่น้อยอยู่ล็อกไหนครับ',
    'อยู่ล็อก 4 ตรงกลางห้างเลยครับ มีโปรโมชั่นซื้อ 2 แถม 1 ด้วย!',
    'มีบริการกล่องแพ็คของสำหรับโหลดขึ้นเครื่องไหมครับ',
    'มีจุดแพ็คกล่องฟรีอยู่หลังเคาน์เตอร์แคชเชียร์ครับ',
    'ขอเอกสารทำ Tax Refund ด้วยครับ',
    'ยอดเกิน 2,000 บาท นำใบเสร็จไปยื่นที่เคาน์เตอร์ได้เลยครับ',

    # 17. Temple (Wat Pho)
    'สวัสดีจ้า จะเข้าไปไหว้พระนอนด้านในใช่ไหมจ๊ะ?',
    'ตั๋วเข้าชมราคาเท่าไหร่ครับ',
    'ตั๋วคนละ 200 บาทจ้า ได้รับน้ำดื่มฟรีหนึ่งขวดด้วยนะ!',
    'ใส่กางเกงขาสั้นเข้าได้ไหมครับ',
    'กางเกงขาสั้นเข้าไม่ได้จ้ะ ต้องเช่าผ้าถุงตรงนี้ 20 บาทนะ',
    'ข้างในถ่ายรูปได้ไหมครับ',
    'ถ่ายรูปได้จ้า แต่กรุณาถอดรองเท้าและสำรวมกิริยาด้วยนะจ๊ะ',

    # 18. Laundry
    'สวัสดีค่ะ มีผ้ามาส่งซักกี่กิโลคะ?',
    'ซักและอบแห้งด้วยครับ ทั้งหมดสามกิโล',
    'ซักอบแห้งกิโลละ 50 บาท ทั้งหมด 150 บาทค่ะ!',
    'มารับผ้าได้กี่โมงครับ',
    'ซักเสร็จพร้อมพับเรียบร้อยตอนหกโมงเย็นวันนี้ค่ะ',
    'ขอเพิ่มน้ำยาปรับผ้านุ่มหอมๆ ด้วยครับ',
    'จัดให้ค่ะ ใช้น้ำยาปรับผ้านุ่มกลิ่นดอกมะลิหอมฟุ้งแน่นอนค่ะ!',

    # 19. Money Exchange (SuperRich)
    'สวัสดีครับ ต้องการแลกเปลี่ยนเงินสกุลอะไรครับ?',
    'อยากแลกเงินรูเปียห์เป็นเงินบาทครับ',
    'ได้ครับ วันนี้เรท 1,000 รูเปียห์เท่ากับ 2.2 บาทครับ',
    'นี่เงินและพาสปอร์ตครับ',
    'รับเงินมาแล้วครับ ตรวจนับเงินบาทและใบเสร็จตรงนี้ด้วยนะครับ',
    'ขอธนบัตรใบละหนึ่งร้อยกับยี่สิบบาทด้วยครับ',
    'จัดให้ครับ มีแบงก์ร้อย 5 ใบ และแบงก์ยี่สิบ 10 ใบครับ',

    # 20. Cinema (Paragon Cineplex)
    'สวัสดีค่ะ รับตั๋วหนังเรื่องอะไรดีคะ รอบกี่โมงดีคะ?',
    'ขอตั๋วสองที่นั่ง แถวตรงกลางครับ',
    'ที่นั่งแถว G ตรงกลางว่างค่ะ บัตรใบละ 260 บาทค่ะ',
    'มีซับไตเติลภาษาอังกฤษไหมครับ',
    'เรื่องนี้เสียงไทยและมีซับไตเติลภาษาอังกฤษชัดเจนค่ะ',
    'ก่อนหนังฉายต้องยืนทำความเคารพเพลงสรรเสริญพระบารมีไหมครับ',
    'ใช่ค่ะ เมื่อได้ยินเสียงเพลงบรรเลง กรุณายืนตรงเพื่อแสดงความเคารพนะคะ'
]

async def synthesize_file(text: str, voice: str, path: str, rate: str):
    if os.path.exists(path) and os.path.getsize(path) > 0:
        return
    for attempt in range(3):
        try:
            await edge_tts.Communicate(text, voice, rate=rate).save(path)
            await asyncio.sleep(0.06)
            return
        except Exception as e:
            if attempt == 2:
                print(f"Error {voice} '{text}': {e}")
            await asyncio.sleep(1.0)

async def generate_phrase(text: str, sem: asyncio.Semaphore):
    h = fnv1a(text)
    male_path = f"audio/male/{h}.mp3"
    female_path = f"audio/female/{h}.mp3"

    is_question = bool(re.search(r'[?？]|ไหม|มั้ย|หรือ|อะไร|ที่ไหน|เมื่อไหร่|เท่าไหร่|กี่|ใคร|ทำไม', text))
    has_particle = bool(re.search(r'ครับ|ค่ะ|คะ|นะครับ|นะคะ|ผม|ฉัน|จ้า|จ้ะ|จ๊ะ', text))

    male_text = text
    female_text = text

    if has_particle:
        male_text = re.sub(r'ดิฉัน|ฉัน', 'ผม', male_text)
        male_text = re.sub(r'นะคะ', 'นะครับ', male_text)
        male_text = re.sub(r'ค่ะ|คะ|จ้า|จ้ะ|จ๊ะ', 'ครับ', male_text)

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
    print(f"Generating audio for {len(phrases)} new roleplay expressions...")
    tasks = [generate_phrase(p, sem) for p in phrases]
    await asyncio.gather(*tasks)
    print("Done generating part 2 roleplay expressions audio!")

if __name__ == '__main__':
    asyncio.run(main())
