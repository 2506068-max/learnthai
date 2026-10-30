# -*- coding: utf-8 -*-
"""
Assembler for 119 written Thai curriculum modules.
Outputs purely written curriculum with interactive TTS buttons, rules, and worksheets.
Completely removes YouTube videos, embeds, and thumbnails.
"""

import json
import sys
from curriculum_builder_part1 import get_part1_content
from curriculum_builder_part2 import get_part2_content
from curriculum_builder_part3 import get_part3_content
from curriculum_builder_part4 import get_part4_content

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

p1 = get_part1_content()
p2 = get_part2_content()
p3 = get_part3_content()
p4 = get_part4_content()

all_details = {}
all_details.update(p1)
all_details.update(p2)
all_details.update(p3)
all_details.update(p4)

print(f"Total detailed written modules loaded: {len(all_details)}")

with open('jazmi_complete_curriculum.json', 'r', encoding='utf-8') as f:
    base_parts = json.load(f)

assembled_parts = []
total_assembled = 0

for bp in base_parts:
    part_num = bp['part']
    part_title = bp['partTitle']
    part_lessons = []

    for l in bp['lessons']:
        g_idx = l['globalIndex']
        det = all_details.get(g_idx)

        # Fallback if any index missing
        if not det:
            det = {
                "title": l['title'],
                "tag": l.get('tag', f"Modul [{g_idx:02d}]"),
                "icon": "📖",
                "summary": f"Materi tertulis dan latihan evaluasi untuk {l['title']}.",
                "keyPoints": [
                    "Penjelasan kaidah dan tata bahasa",
                    "Contoh kosakata dan audio pengucapan",
                    "Latihan mandiri dan evaluasi"
                ],
                "thaiSample": {"thai": "เรียนภาษาไทย", "rtgs": "rian phaa-saa thai", "meaning": "Belajar bahasa Thai"},
                "contentHtml": f"""
<div class="lesson-content-block">
  <h3>🎯 {l['title']}</h3>
  <p>Materi tertulis dan latihan pemahaman konsep.</p>
</div>
"""
            }

        # Check worksheet
        worksheet = l.get('worksheet')
        if det.get('worksheet'):
            worksheet = det['worksheet']

        lesson_obj = {
            "globalIndex": g_idx,
            "part": part_num,
            "partTitle": part_title,
            "id": f"jazmi-materi-{g_idx:03d}",
            "lessonNumber": l.get('lessonNumber'),
            "title": det['title'],
            "tag": det.get('tag', l.get('tag', f"Materi [{g_idx:02d}]")),
            "badgeClass": det.get('badgeClass', 'badge-lesson' if not l.get('isGame') else 'badge-game'),
            "icon": det.get('icon', '📖'),
            "isGame": l.get('isGame', False),
            "summary": det['summary'],
            "keyPoints": det['keyPoints'],
            "thaiSample": det['thaiSample'],
            "worksheet": worksheet,
            "contentHtml": det['contentHtml'].strip()
        }

        part_lessons.append(lesson_obj)
        total_assembled += 1

    assembled_parts.append({
        "part": part_num,
        "partTitle": part_title,
        "moduleCount": len(part_lessons),
        "lessons": part_lessons
    })

print(f"Total modules assembled: {total_assembled}")

# Export to jazmi_curriculum_data.js
js_content = f"""/* JAZMI NARA - COMPLETE WRITTEN CURRICULUM (PARTS I - IV • 119 MODULES • MATERI 01-90)
 * Pure Written Learning Content with Interactive Audio & Writing Worksheets.
 * No YouTube videos, no iframes, no video player dependencies.
 */
const JAZMI_CURRICULUM_DATA = {json.dumps(assembled_parts, indent=2, ensure_ascii=False)};
"""

with open('jazmi_curriculum_data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Saved jazmi_curriculum_data.js successfully!")

