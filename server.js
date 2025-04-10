require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Improved API endpoint
app.post('/api/generate', async (req, res) => {
    try {
        const { prompt } = req.body;
        
        // Enhanced prompt engineering
        const enhancedPrompt = `
        أنت مساعد ذكي إسلامي يتبع منهج السلف الصالح.
        يجب أن تكون إجاباتك:
        - دقيقة وموثوقة
        - وفق الكتاب والسنة بفهم سلف الأمة
        - بلغة عربية فصيحة
        - متوازنة ومدعمة بالأدلة
        
        السؤال: ${prompt}
        `;

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                contents: [{
                    parts: [{ text: enhancedPrompt }]
                }],
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                        threshold: "BLOCK_ONLY_HIGH"
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    topP: 0.9,
                    topK: 40
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                timeout: 30000 // 30 seconds timeout
            }
        );
        
        // Better error handling
        if (!response.data.candidates || !response.data.candidates[0].content.parts[0].text) {
            throw new Error('Invalid response structure from API');
        }
        
        res.json({
            success: true,
            response: response.data.candidates[0].content.parts[0].text
        });
    } catch (error) {
        console.error('API Error:', error.message);
        
        // User-friendly error messages
        let errorMessage = 'حدث خطأ في معالجة طلبك';
        if (error.response?.status === 429) {
            errorMessage = 'تم تجاوز الحد المسموح من الطلبات. يرجى المحاولة لاحقاً';
        } else if (error.code === 'ECONNABORTED') {
            errorMessage = 'انتهى وقت الانتظار. يرجى المحاولة مرة أخرى';
        }
        
        res.status(500).json({
            success: false,
            error: errorMessage
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
