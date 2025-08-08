from flask import Flask, request, jsonify
from flask_cors import CORS
import yt_dlp
import json

# --- تهيئة السيرفر ---
app = Flask(__name__)
# السماح لجميع المصادر بالوصول للـ API (ضروري عشان Netlify يكلم Render)
CORS(app) 

# --- إعدادات yt-dlp ---
# نطلب من المكتبة عدم تحميل الفيديو على السيرفر، فقط جلب المعلومات والروابط
YDL_OPTS = {
    'noplaylist': True,
    'quiet': True,
    'format': 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best',
}

# --- نقطة النهاية الرئيسية للـ API ---
@app.route('/api/download', methods=['POST'])
def download_video():
    # استلام الرابط من الطلب اللي جاي من الواجهة
    data = request.get_json()
    url = data.get('url')

    if not url:
        return jsonify({'error': 'الرابط مطلوب!'}), 400

    try:
        # استخدام yt-dlp لجلب معلومات الفيديو
        with yt_dlp.YoutubeDL(YDL_OPTS) as ydl:
            info_dict = ydl.extract_info(url, download=False)
            
            # تجهيز البيانات اللي هترجع للواجهة
            video_info = {
                'title': info_dict.get('title', 'لا يوجد عنوان'),
                'thumbnail': info_dict.get('thumbnail', ''),
                'uploader': info_dict.get('uploader', ''),
                'formats': []
            }
            
            # استخراج روابط التحميل والجودات المتاحة
            formats = info_dict.get('formats', [info_dict])
            for f in formats:
                # التأكد من أن الفورمات يحتوي على رابط مباشر وفيديو
                if f.get('url') and f.get('vcodec') != 'none':
                    # وصف الجودة (مثال: 720p, 1080p)
                    resolution = f.get('format_note', f.get('resolution'))
                    if resolution is None:
                        # لو مفيش وصف للجودة، ممكن نستخدم ارتفاع الفيديو
                        height = f.get('height')
                        if height:
                            resolution = f"{height}p"
                        else:
                            resolution = "جودة غير معروفة"
                    
                    video_info['formats'].append({
                        'url': f.get('url'),
                        'ext': f.get('ext'),
                        'resolution': resolution,
                        'filesize': f.get('filesize', 0) # حجم الملف بالبايت
                    })

            # فلترة الصيغ المتشابهة في الجودة والاحتفاظ بالأفضل
            unique_formats = {f['resolution']: f for f in sorted(video_info['formats'], key=lambda x: x.get('filesize') or 0, reverse=True)}.values()
            video_info['formats'] = sorted(list(unique_formats), key=lambda x: int(x['resolution'][:-1]) if x['resolution'][:-1].isdigit() else 0, reverse=True)


            # إرسال البيانات كـ JSON للواجهة
            return jsonify(video_info)

    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({'error': 'فشل في جلب معلومات الفيديو. قد يكون الرابط غير صحيح أو الفيديو خاص.'}), 500

# --- تشغيل السيرفر ---
if __name__ == '__main__':
    # يعمل فقط عند التشغيل محليًا وليس على Render
    app.run(debug=True, port=5000)
