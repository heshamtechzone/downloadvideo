document.addEventListener('DOMContentLoaded', function() {
    // عناصر DOM
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const typingIndicator = document.getElementById('typing-indicator');
    
    // قاعدة المعرفة العقائدية السلفية
    const salafiAqida = {
        "اين الله": {
            answer: "الله تعالى فوق السماوات السبع على عرشه استواء يليق بجلاله، كما قال تعالى: ﴿الرَّحْمَٰنُ عَلَى الْعَرْشِ اسْتَوَى﴾ [طه:5]، وقال النبي ﷺ للجارية: 'أين الله؟' قالت: 'في السماء' فقال: 'اعتقها فإنها مؤمنة' (رواه مسلم).",
            scholars: [
                "قال الإمام الذهبي: 'هو العلي الأعلى، العالي فوق خلقه، وفوق كل شيء'",
                "قال الشيخ ابن باز: 'الله فوق العرش فوق السماوات'",
                "قال الشيخ ابن عثيمين: 'استواء الله على عرشه حقيقة وليس مجازاً'"
            ]
        },
        "هل الله في السماء": {
            answer: "نعم، الله تعالى في السماء فوق العرش، قال الإمام مالك: 'الاستواء معلوم، والكيف مجهول، والإيمان به واجب'.",
            scholars: [
                "قال الإمام ابن تيمية: 'من أنكر أن الله في السماء فهو معطل جهمي'",
                "قال الشيخ الألباني: 'القول بأن الله في كل مكان كفر صريح'"
            ]
        },
        "استواء الله على العرش": {
            answer: "استواء الله على عرشه استواء حقيقي يليق بجلاله من غير تكييف ولا تمثيل، قال تعالى: ﴿ثُمَّ اسْتَوَى عَلَى الْعَرْشِ﴾ في سبع آيات من القرآن.",
            scholars: [
                "قال الإمام الطحاوي: 'والعرش والكرسي حق، وهو مستغن عن العرش وما دونه'",
                "قال الشيخ الفوزان: 'من أنكر استواء الله على عرشه فهو ضال'"
            ]
        },
        "صفات الله": {
            answer: "صفات الله كلها صفات كمال تليق بجلاله من غير تحريف ولا تعطيل ولا تكييف ولا تمثيل، كالاستواء والنزول واليدين والوجه وغيرها.",
            scholars: [
                "قال الإمام ابن القيم: 'أهل السنة يثبتون الصفات وينزهون الله عن مشابهة المخلوقات'",
                "قال الشيخ صالح آل الشيخ: 'من نفى صفة من الصفات الثابتة بالكتاب والسنة فهو معطل'"
            ]
        }
    };

    // رسائل المحادثة
    let messages = JSON.parse(localStorage.getItem('h-ai-messages')) || [
        {
            role: "ai",
            content: "السلام عليكم ورحمة الله وبركاته\nأنا H.Ai المساعد الشرعي الملتزم بعقيدة السلف الصالح.\nأسأل الله أن يهدينا جميعاً لمعرفة الحق والعمل به."
        }
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

    // البحث في العقيدة السلفية
    function getSalafiAnswer(question) {
        const lowerQuestion = question.toLowerCase();
        
        // البحث المباشر
        for (const [key, data] of Object.entries(salafiAqida)) {
            if (lowerQuestion.includes(key.toLowerCase())) {
                const randomScholar = data.scholars[Math.floor(Math.random() * data.scholars.length)];
                return `${data.answer}<br><br><em>${randomScholar}</em>`;
            }
        }
        
        // إجابات عامة
        const generalAnswers = [
            "هذا من أمور العقيدة المهمة، والأولى الرجوع إلى كتب العقيدة السلفية",
            "أسأل الله أن يثبتنا على العقيدة الصحيحة",
            "هذا السؤال يحتاج إلى تثبت، ومن أفضل ما يُراجع فيه كتب الشيخ ابن عثيمين رحمه الله",
            "انظر في كتب العقيدة مثل 'شرح الطحاوية' و'العقيدة الواسطية'"
        ];
        
        return generalAnswers[Math.floor(Math.random() * generalAnswers.length)];
    }

    // معالجة الرسالة
    function processMessage(message) {
        typingIndicator.style.display = 'block';
        
        setTimeout(() => {
            const response = getSalafiAnswer(message);
            
            messages.push({
                role: "ai",
                content: response
            });
            
            localStorage.setItem('h-ai-messages', JSON.stringify(messages));
            renderMessages();
            typingIndicator.style.display = 'none';
        }, 1000 + Math.random() * 2000);
    }

    // إرسال الرسالة
    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (!userMessage) return;
        
        messages.push({
            role: "user",
            content: userMessage
        });
        
        localStorage.setItem('h-ai-messages', JSON.stringify(messages));
        renderMessages();
        userInput.value = '';
        
        processMessage(userMessage);
    }

    // الأحداث
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // التهيئة
    renderMessages();
});
