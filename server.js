require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    try {
        const { prompt, messages } = req.body;
        
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                contents: [{
                    parts: [{ text: prompt }]
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
            }
        );
        
        res.json(response.data);
    } catch (error) {
        console.error('API Error:', error.response?.data || error.message);
        res.status(500).json({ 
            error: 'حدث خطأ في الخادم',
            details: error.message 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
