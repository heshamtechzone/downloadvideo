require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || true,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ملفات ثابتة
app.use(express.static(__dirname));

// Route للحصول على API Key
app.get('/api/key', (req, res) => {
  if (process.env.NODE_ENV === 'production' && 
      !req.headers.referer?.includes(process.env.ALLOWED_ORIGINS)) {
    return res.status(403).json({ error: 'غير مسموح بالوصول' });
  }

  res.json({
    status: 'success',
    key: process.env.GOOGLE_API_KEY,
    expires: new Date(Date.now() + 3600000).toISOString()
  });
});

// Route لمعالجة المحادثة
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'طلب غير صالح' });
    }

    // هنا يمكنك إضافة منطق معالجة المحادثة
    res.json({
      status: 'success',
      data: {
        reply: "هذه استجابة تجريبية من الخادم",
        messages: messages.slice(-3) // آخر 3 رسائل كإثبات استلام
      }
    });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({
      status: 'error',
      message: 'حدث خطأ في معالجة طلبك'
    });
  }
});

// جميع الطلبات الأخرى ترجع ملف index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`
  ██╗  ██╗ █████╗ ██╗
  ██║  ██║██╔══██╗██║
  ███████║███████║██║
  ██╔══██║██╔══██║██║
  ██║  ██║██║  ██║██║
  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝
  Server running on port ${PORT}
  Mode: ${process.env.NODE_ENV}
  `);
});