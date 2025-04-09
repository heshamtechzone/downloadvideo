require('dotenv').config();
const express = require('express');
const axios = require('axios');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || '*'
}));
app.use(express.json());
app.use(morgan('dev'));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'لقد تجاوزت الحد المسموح به من الطلبات، يرجى المحاولة لاحقاً'
});
app.use('/api/', limiter);

// Basic authentication middleware
const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const apiKey = process.env.API_AUTH_KEY;

    if (!apiKey) return next(); // Skip if no auth key is set
    
    if (!authHeader || authHeader !== `Bearer ${apiKey}`) {
        return res.status(401).json({ error: 'غير مصرح بالوصول' });
    }
    next();
};

// Health check endpoint
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'running',
        message: 'H.Ai Proxy Server is operational',
        version: '1.0.0'
    });
});

// Proxy endpoint for Gemini API
app.post('/api/generate', authenticate, async (req, res) => {
    try {
        const { prompt, messages } = req.body;
        
        if (!prompt && !messages) {
            return res.status(400).json({
                error: 'يجب تقديم prompt أو messages في الطلب'
            });
        }

        // Construct the conversation history
        let fullPrompt = `أنت مساعد ذكي إسلامي يسمى H.Ai. يجب أن تلتزم بالآداب الإسلامية في الردود.
عند السؤال عن الدين: "أنا ذكاء اصطناعي، ولكني أفضل دين الإسلام".
يجب أن تكون الإجابات متوافقة مع منهج السلف الصالح.\n\n`;

        if (messages) {
            messages.forEach(msg => {
                fullPrompt += `${msg.role === 'user' ? 'المستخدم' : 'H.Ai'}: ${msg.content}\n`;
            });
        } else {
            fullPrompt += prompt;
        }

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${process.env.GOOGLE_API_KEY}`,
            {
                contents: [{
                    parts: [{
                        text: fullPrompt
                    }]
                }],
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                        threshold: "BLOCK_ONLY_HIGH"
                    },
                    {
                        category: "HARM_CATEGORY_HATE_SPEECH",
                        threshold: "BLOCK_ONLY_HIGH"
                    },
                    {
                        category: "HARM_CATEGORY_HARASSMENT",
                        threshold: "BLOCK_ONLY_HIGH"
                    },
                    {
                        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                        threshold: "BLOCK_ONLY_HIGH"
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    topP: 0.9,
                    topK: 40,
                    maxOutputTokens: 2048
                }
            },
            {
                timeout: 30000 // 30 seconds timeout
            }
        );

        const aiResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text || 
                          "عذرًا، لم أتمكن من معالجة طلبك";

        res.json({
            success: true,
            response: aiResponse
        });

    } catch (error) {
        console.error('Proxy error:', error);
        
        let errorMessage = 'حدث خطأ في الخادم';
        let statusCode = 500;
        
        if (error.response) {
            statusCode = error.response.status;
            errorMessage = error.response.data?.error?.message || errorMessage;
        } else if (error.request) {
            errorMessage = 'لم يتم استلام رد من خدمة جوجل';
        } else if (error.code === 'ECONNABORTED') {
            errorMessage = 'انتهت مهلة الاتصال بخدمة جوجل';
        }

        res.status(statusCode).json({
            success: false,
            error: errorMessage
        });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({
        success: false,
        error: 'حدث خطأ غير متوقع في الخادم'
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`H.Ai Proxy Server running on port ${PORT}`);
    console.log(`Allowed origins: ${process.env.ALLOWED_ORIGINS || 'All'}`);
});
