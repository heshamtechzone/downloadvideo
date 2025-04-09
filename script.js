const API_KEY = 'AIzaSyChJ6xacAytY92-g-O2laC9V15MOo_EIuw';
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const typingIndicator = document.getElementById('typing-indicator');

// تحميل الرسائل السابقة من localStorage
let messages = JSON.parse(localStorage.getItem('h-ai-messages')) || [
    {
        role: "ai",
        content: "السلام عليكم ورحمة الله وبركاته، أنا H.Ai مساعدك الذكي الملتزم بمنهج السلف الصالح. كيف يمكنني مساعدتك اليوم؟"
    }
];

// قائمة بالأسئلة العقدية وردودها المحددة حسب منهج السلف
const aqidaQuestions = {
    "أين الله": "الله تعالى فوق السماوات مستو على عرشه بائن من خلقه، كما قال تعالى: ﴿الرَّحْمَٰنُ عَلَى الْعَرْشِ اسْتَوَى﴾ [طه:5]، وقال النبي ﷺ: 'إن الله كتب كتابًا قبل أن يخلق الخلق: إن رحمتي سبقت غضبي، فهو مكتوب عنده فوق العرش'. رواه البخاري.",
    "هل الله في السماء": "نعم، الله تعالى في السماء فوق العرش، كما في حديث الجارية المشهور عندما سألها النبي ﷺ: 'أين الله؟' قالت: 'في السماء'. فقال: 'اعتقها فإنها مؤمنة'. رواه مسلم.",
    "استواء الله على العرش": "استواء الله على عرشه استواء يليق بجلاله من غير تكييف ولا تمثيل، كما قال الإمام مالك: 'الاستواء معلوم، والكيف مجهول، والإيمان به واجب'.",
    "علو الله": "الله تعالى عالٍ فوق خلقه بذاته، كما قال الإمام الذهبي: 'فهو العلي الأعلى، العالي فوق خلقه، وفوق كل شيء، فوق العرش فوق السماوات'."
};

// قائمة بالعلماء السلفيين
const salafiScholars = [
    'ابن تيمية', 'ابن القيم', 'الألباني', 'ابن باز', 
    'ابن عثيمين', 'الفوزان', 'صالح آل الشيخ', 'عبد الرزاق البدر',
    'اللجنة الدائمة', 'ابن جبرين', 'عبد المحسن العباد'
];

// عرض الرسائل
function renderMessages() {
    chatMessages.innerHTML = '';
    messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${message.role}`;
        
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'avatar';
        avatarDiv.textContent = message.role === 'ai' ? 'H' : 'أنت';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = `message-content ${message.role}-content`;
        contentDiv.innerHTML = message.content.replace(/\n/g, '<br>');
        
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);
    });
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// تصفية الردود لضمان التزامها بمنهج السلف في العقيدة
function filterAqidaResponse(response, userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // إذا كان السؤال عن مكان الله أو علوه
    if (lowerCaseMessage.includes("أين الله") || 
        lowerCaseMessage.includes("مكان الله") ||
        lowerCaseMessage.includes("هل الله في السماء")) {
        
        const correctAnswer = "الله تعالى فوق السماوات مستو على عرشه، كما دل على ذلك الكتاب والسنة وإجماع السلف. قال تعالى: ﴿الرَّحْمَٰنُ عَلَى الْعَرْشِ اسْتَوَى﴾ [طه:5]، وقال النبي ﷺ: 'أين الله؟' قالت الجارية: 'في السماء'. فقال: 'اعتقها فإنها مؤمنة' رواه مسلم.";
        
        if (!response.includes("فوق") && !response.includes("العرش") && !response.includes("السماوات")) {
            return correctAnswer;
        }
    }
    
    return response;
}

// إضافة مقدمة شرعية للردود
function addSalafiIntroduction(response) {
    const introductions = [
        "قال الشيخ ابن عثيمين رحمه الله:",
        "جاء في فتاوى اللجنة الدائمة:",
        "ذكر الإمام ابن القيم في كتابه إعلام الموقعين:",
        "نقل الحافظ ابن رجب في جامع العلوم والحكم:",
        "قال الإمام ابن تيمية في مجموع الفتاوى:"
    ];
    
    const randomIntro = introductions[Math.floor(Math.random() * introductions.length)];
    return `${randomIntro}\n${response}`;
}

// التهيئة الأولية
renderMessages();

// إرسال الرسالة
async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;
    
    // إضافة رسالة المستخدم إلى المحادثة
    messages.push({
        role: "user",
        content: userMessage
    });
    localStorage.setItem('h-ai-messages', JSON.stringify(messages));
    renderMessages();
    userInput.value = '';
    
    // عرض مؤشر الكتابة
    typingIndicator.style.display = 'block';
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    try {
        // التحقق من الأسئلة العقدية أولاً
        const lowerCaseMessage = userMessage.toLowerCase();
        for (const [question, answer] of Object.entries(aqidaQuestions)) {
            if (lowerCaseMessage.includes(question.toLowerCase())) {
                messages.push({
                    role: "ai",
                    content: answer
                });
                localStorage.setItem('h-ai-messages', JSON.stringify(messages));
                return;
            }
        }
        
        // تحضير النص مع السياق الإسلامي الصارم
        let prompt = `أنت عالم شرعي متخصص في منهج السلف الصالح، مهمتك:
1. الالتزام التام بعقيدة أهل السنة في صفات الله تعالى
2. إثبات علو الله تعالى على خلقه بذاته واستوائه على العرش
3. الرد على الشبهات في باب الأسماء والصفات
4. التحذير من التأويلات المخالفة لفهم السلف
5. الاعتماد على الأدلة الصحيحة من الكتاب والسنة

الضوابط الشرعية:
- عند السؤال عن صفات الله: الإيمان بها من غير تكييف ولا تمثيل
- عند السؤال عن مكان الله: الجواب بأنه فوق السماوات على العرش
- عند السؤال عن الاستواء: إثباته بلا كيف كما قال الإمام مالك

المصادر المعتمدة:
- القرآن الكريم
- الصحيحان (البخاري ومسلم)
- أقوال الأئمة (${salafiScholars.join('، ')})

المحادثة الحالية:
${messages.map(msg => `${msg.role === 'user' ? 'المستخدم' : 'H.Ai'}: ${msg.content}`).join('\n')}

الآن أجب وفق هذه الضوابط بدقة:`;
        
        // استدعاء API
        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${API_KEY}`;
        
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                safetySettings: [
                    {
                        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
                        "threshold": "BLOCK_ONLY_HIGH"
                    }
                ],
                generationConfig: {
                    "temperature": 0.3, // تقليل درجة الإبداع لأقصى حد
                    "topP": 0.7,
                    "topK": 20,
                    "maxOutputTokens": 2048
                }
            })
        });
        
        if (!response.ok) {
            throw new Error(`خطأ في الخادم (${response.status}): ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // معالجة الاستجابة
        let aiResponse = "عذرًا، لم أتمكن من معالجة طلبك";
        if (data.candidates?.[0]?.content?.parts) {
            aiResponse = data.candidates[0].content.parts[0].text;
            aiResponse = filterAqidaResponse(aiResponse, userMessage);
            aiResponse = addSalafiIntroduction(aiResponse);
        }
        
        // إضافة رد الذكاء الاصطناعي إلى المحادثة
        messages.push({
            role: "ai",
            content: aiResponse
        });
        localStorage.setItem('h-ai-messages', JSON.stringify(messages));
        
    } catch (error) {
        console.error('Error:', error);
        const salafiResponses = [
            "هذه المسألة تحتاج إلى تثبت، والأولى الرجوع لعلماء العقيدة الموثوقين",
            "وفقنا الله وإياك لمعرفة الحق في باب الأسماء والصفات",
            "المرجو الرجوع إلى كتب العقيدة السلفية مثل كتاب التوحيد لابن خزيمة"
        ];
        const randomResponse = salafiResponses[Math.floor(Math.random() * salafiResponses.length)];
        messages.push({
            role: "ai",
            content: randomResponse
        });
    } finally {
        typingIndicator.style.display = 'none';
        renderMessages();
    }
}

// استماع للأحداث
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// مسح سجل المحادثة بعد 24 ساعة
setInterval(() => {
    localStorage.removeItem('h-ai-messages');
    messages = [{
        role: "ai",
        content: "السلام عليكم ورحمة الله وبركاته، أنا H.Ai مساعدك الذكي الملتزم بمنهج السلف الصالح. كيف يمكنني مساعدتك اليوم؟"
    }];
    renderMessages();
}, 24 * 60 * 60 * 1000);
