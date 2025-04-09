document.addEventListener('DOMContentLoaded', function() {
    // العناصر
    const authContainer = document.getElementById('auth-container');
    const mainContainer = document.getElementById('main-container');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const voiceBtn = document.getElementById('voice-btn');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const typingIndicator = document.getElementById('typing-indicator');
    const themeBtn = document.getElementById('theme-btn');
    const themeIcon = document.getElementById('theme-icon');
    const settingsBtn = document.getElementById('settings-btn');
    const settingsOverlay = document.getElementById('settings-overlay');
    const closeSettings = document.getElementById('close-settings');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginBox = document.getElementById('login-box');
    const registerBox = document.getElementById('register-box');

    // المتغيرات
    const API_ENDPOINT = '/api/chat';
    let recognition;
    let isListening = false;
    let messages = JSON.parse(localStorage.getItem('h-ai-messages')) || [
        {
            role: "ai",
            content: "السلام عليكم ورحمة الله وبركاته\n\nأنا H.Ai، مساعدك الذكي الذي يقدم معلومات مفيدة وموثوقة وفقًا للمنهج الإسلامي الصحيح.\n\nكيف يمكنني مساعدتك اليوم؟"
        }
    ];

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
        },
        "العقيدة السلفية": {
            answer: "العقيدة السلفية هي ما كان عليه النبي ﷺ وأصحابه من إثبات ما أثبته الله لنفسه في كتابه أو على لسان رسوله ﷺ من غير تحريف ولا تعطيل ولا تكييف ولا تمثيل.",
            scholars: [
                "قال الإمام أحمد: 'أصول السنة عندنا التمسك بما كان عليه الصحابة'",
                "قال الشيخ ابن عثيمين: 'السلفي هو من سار على منهج السلف الصالح'"
            ]
        }
    };

    // ============= الدوال الأساسية =============

    function initTheme() {
        const savedTheme = localStorage.getItem('h-ai-theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('h-ai-theme', 'light');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('h-ai-theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    }

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

    function initSpeechRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        
        if (!SpeechRecognition) {
            voiceBtn.style.display = 'none';
            return;
        }

        recognition = new SpeechRecognition();
        recognition.lang = 'ar-SA';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            isListening = true;
            voiceBtn.innerHTML = '<i class="fas fa-microphone-slash"></i>';
            voiceBtn.style.backgroundColor = '#e74c3c';
            userInput.placeholder = 'جاري الاستماع...';
        };

        recognition.onend = () => {
            isListening = false;
            voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
            voiceBtn.style.backgroundColor = '';
            userInput.placeholder = 'اكتب رسالتك هنا...';
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            userInput.value = transcript;
            sendMessage();
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            addMessage('ai', 'حدث خطأ في التعرف على الصوت. يرجى المحاولة مرة أخرى أو استخدام الكتابة.');
        };
    }

    function toggleSpeechRecognition() {
        if (!recognition) {
            addMessage('ai', "المتصفح لا يدعم ميزة التعرف على الصوت. يرجى استخدام متصفح حديث مثل Chrome.");
            return;
        }
        
        if (isListening) {
            recognition.stop();
        } else {
            try {
                recognition.start();
            } catch (error) {
                console.error('Error starting speech recognition:', error);
                addMessage('ai', 'تعذر بدء التعرف على الصوت. يرجى التحقق من إذن الميكروفون.');
            }
        }
    }

    function addMessage(role, content) {
        messages.push({ role, content });
        localStorage.setItem('h-ai-messages', JSON.stringify(messages));
        renderMessages();
    }

    function showTypingIndicator() {
        typingIndicator.style.display = 'block';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function hideTypingIndicator() {
        typingIndicator.style.display = 'none';
    }

    function getSalafiAnswer(question) {
        const lowerQuestion = question.toLowerCase();
        
        // البحث المباشر في قاعدة المعرفة
        for (const [key, data] of Object.entries(salafiAqida)) {
            if (lowerQuestion.includes(key.toLowerCase())) {
                const randomScholar = data.scholars[Math.floor(Math.random() * data.scholars.length)];
                return `${data.answer}<br><br><em>${randomScholar}</em>`;
            }
        }
        
        // إجابات عامة للأسئلة الأخرى
        const generalAnswers = [
            "هذا من أمور العقيدة المهمة، والأولى الرجوع إلى كتب العقيدة السلفية",
            "أسأل الله أن يثبتنا على العقيدة الصحيحة",
            "هذا السؤال يحتاج إلى تثبت، ومن أفضل ما يُراجع فيه كتب الشيخ ابن عثيمين رحمه الله",
            "انظر في كتب العقيدة مثل 'شرح الطحاوية' و'العقيدة الواسطية'",
            "المرجع في مثل هذه المسائل كتاب الله وسنة رسوله ﷺ وفهم السلف الصالح",
            "هذا السؤال له تفصيل في كتب العقيدة، ومن أحسن ما كتب في ذلك 'مجموع فتاوى الشيخ ابن باز'"
        ];
        
        return generalAnswers[Math.floor(Math.random() * generalAnswers.length)];
    }

    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;
        
        addMessage('user', message);
        userInput.value = '';
        showTypingIndicator();
        
        try {
            // أولاً: البحث في قاعدة المعرفة المحلية
            const localAnswer = getSalafiAnswer(message);
            
            // إذا وجدنا إجابة مناسبة في القاعدة المحلية
            if (localAnswer && !localAnswer.includes("هذا من أمور العقيدة المهمة")) {
                setTimeout(() => {
                    addMessage('ai', localAnswer);
                    hideTypingIndicator();
                }, 1000 + Math.random() * 2000);
                return;
            }
            
            // إذا لم نجد، نستخدم الخادم الوسيط
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: message,
                    messages: messages
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            addMessage('ai', data.response || localAnswer);
            
        } catch (error) {
            console.error('Error:', error);
            const localAnswer = getSalafiAnswer(message);
            addMessage('ai', localAnswer || "حدث خطأ في الاتصال بالخادم. جرب سؤالاً آخر.");
        } finally {
            hideTypingIndicator();
        }
    }

    function clearChatHistory() {
        localStorage.removeItem('h-ai-messages');
        messages = [{
            role: "ai",
            content: "السلام عليكم ورحمة الله وبركاته\n\nأنا H.Ai، مساعدك الذكي الذي يقدم معلومات مفيدة وموثوقة وفقًا للمنهج الإسلامي الصحيح.\n\nكيف يمكنني مساعدتك اليوم؟"
        }];
        renderMessages();
    }

    // ============= إعداد الأحداث =============

    function setupEventListeners() {
        // تسجيل الدخول
        loginBtn.addEventListener('click', () => {
            const username = document.getElementById('login-username').value.trim();
            const password = document.getElementById('login-password').value.trim();
            
            if (username && password) {
                authContainer.style.display = 'none';
                mainContainer.style.display = 'flex';
                initSpeechRecognition();
                renderMessages();
            } else {
                alert('الرجاء إدخال اسم المستخدم وكلمة المرور');
            }
        });

        // تسجيل حساب جديد
        registerBtn.addEventListener('click', () => {
            const name = document.getElementById('register-name').value.trim();
            const username = document.getElementById('register-username').value.trim();
            const email = document.getElementById('register-email').value.trim();
            const password = document.getElementById('register-password').value.trim();
            const confirmPassword = document.getElementById('register-confirm-password').value.trim();
            
            if (!name || !username || !email || !password || !confirmPassword) {
                alert('الرجاء ملء جميع الحقول');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('كلمة المرور وتأكيدها غير متطابقين');
                return;
            }
            
            alert('تم تسجيل الحساب بنجاح! يمكنك الآن تسجيل الدخول');
            document.getElementById('login-username').value = username;
            document.getElementById('login-password').value = password;
            document.getElementById('register-box').style.display = 'none';
            document.getElementById('login-box').style.display = 'block';
        });

        // إرسال الرسالة
        sendButton.addEventListener('click', sendMessage);
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        // التعرف على الصوت
        voiceBtn.addEventListener('click', toggleSpeechRecognition);

        // الوضع الداكن
        themeBtn.addEventListener('click', toggleTheme);

        // الإعدادات
        settingsBtn.addEventListener('click', () => {
            settingsOverlay.style.display = 'flex';
        });
        closeSettings.addEventListener('click', () => {
            settingsOverlay.style.display = 'none';
        });
        settingsOverlay.addEventListener('click', (e) => {
            if (e.target === settingsOverlay) {
                settingsOverlay.style.display = 'none';
            }
        });

        // تبديل بين تسجيل الدخول والتسجيل
        showRegister.addEventListener('click', () => {
            loginBox.style.display = 'none';
            registerBox.style.display = 'block';
            loginTab.classList.remove('active');
            registerTab.classList.add('active');
        });
        
        showLogin.addEventListener('click', () => {
            registerBox.style.display = 'none';
            loginBox.style.display = 'block';
            registerTab.classList.remove('active');
            loginTab.classList.add('active');
        });

        loginTab.addEventListener('click', () => {
            registerBox.style.display = 'none';
            loginBox.style.display = 'block';
            registerTab.classList.remove('active');
            loginTab.classList.add('active');
        });

        registerTab.addEventListener('click', () => {
            loginBox.style.display = 'none';
            registerBox.style.display = 'block';
            loginTab.classList.remove('active');
            registerTab.classList.add('active');
        });

        // مسح المحادثة بعد 24 ساعة
        setInterval(clearChatHistory, 24 * 60 * 60 * 1000);
    }

    // ============= تهيئة التطبيق =============
    function initApp() {
        initTheme();
        setupEventListeners();
        renderMessages();
    }

    // بدء التطبيق
    initApp();
});
