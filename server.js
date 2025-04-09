require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Route للحصول على الردود من Gemini API (مفتاح API مخفي في .env)
app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;
        
        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'طلب غير صالح' });
        }

        // هنا يتم التواصل مع Gemini API باستخدام المفتاح من process.env.GOOGLE_API_KEY
        // ثم إعادة الرد للعميل
        
        res.json({
            status: 'success',
            reply: "هذه استجابة من الخادم (سيتم استبدالها بالرد الفعلي من API)"
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'حدث خطأ في الخادم' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
