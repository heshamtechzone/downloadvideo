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
            content: "السلام عليكم ورحمة الله وبركاته\n\nأنا H.Ai، مساعدك الذكي الإسلامي الذي يقدم معلومات موثوقة وفق منهج السلف الصالح.\n\nكيف يمكنني مساعدتك اليوم؟"
        }
    ];

    // قاعدة المعرفة المحسنة مع تفسيرات السلف
    const islamicKnowledgeBase = {
        "الله|الرحمن|الرب": {
            answer: "الله تعالى هو الإله الحق الذي لا إله إلا هو، له الأسماء الحسنى والصفات العلى، وهو المستحق للعبادة وحده لا شريك له.",
            references: [
                "قال تعالى: ﴿قُلْ هُوَ اللَّهُ أَحَدٌ﴾ [الإخلاص:1]",
                "قال ابن تيمية: 'أصل الدين معرفة الله وإفراده بالعبادة'"
            ]
        },
        "اين الله|مكان الله": {
            answer: "الله تعالى فوق السماوات مستو على عرشه استواء يليق بجلاله، كما قال تعالى: ﴿الرَّحْمَٰنُ عَلَى الْعَرْشِ اسْتَوَى﴾ [طه:5]، وهذا مذهب السلف الصالح.",
            references: [
                "روى مسلم أن النبي ﷺ سأل الجارية: أين الله؟ قالت: في السماء، فأقرها",
                "قال الإمام مالك: 'الاستواء معلوم والكيف مجهول'"
            ]
        },
        "العقيدة|التوحيد": {
            answer: "العقيدة الصحيحة هي توحيد الله في ربوبيته وألوهيته وأسمائه وصفاته، بلا تشبيه ولا تعطيل، كما كان عليه النبي ﷺ وأصحابه.",
            references: [
                "قال تعالى: ﴿وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ﴾ [الذاريات:56]",
                "قال ابن باز: 'أساس الدين توحيد الله وإخلاص العبادة له'"
            ]
        },
        "الصلاة|الصلوات": {
            answer: "الصلاة هي الركن الثاني من أركان الإسلام، وهي عمود الدين، فرضها الله خمس مرات في اليوم والليلة.",
            references: [
                "قال ﷺ: 'بني الإسلام على خمس...' وذكر منها الصلاة (متفق عليه)",
                "قال ابن القيم: 'الصلاة صلة بين العبد وربه'"
            ]
        },
        "القرآن|الكريم": {
            answer: "القرآن هو كلام الله المنزل على النبي ﷺ، المتعبد بتلاوته، المعجز بلفظه، المحفوظ من التغيير.",
            references: [
                "قال تعالى: ﴿إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ﴾ [الحجر:9]",
                "قال الشافعي: 'كل ما حكم به رسول الله فهو مما فهمه من القرآن'"
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
            contentDiv.innerHTML = formatIslamicText(message.content);
            
            messageDiv.appendChild(avatarDiv);
            messageDiv.appendChild(contentDiv);
            chatMessages.appendChild(messageDiv);
        });
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // دالة جديدة لتنسيق النصوص الإسلامية
    function formatIslamicText(text) {
        return text
            .replace(/﴿(.*?)﴾/g, '<span class="ayah">$1</span>')
            .replace(/(رواه \w+)/g, '<em class="hadith-ref">$1</em>')
            .replace(/(قال \w+:)/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
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

    // دالة محسنة للبحث في القاعدة المعرفية
    function getIslamicAnswer(question) {
        const lowerQuestion = question.toLowerCase();
        
        // البحث باستخدام الكلمات المفتاحية
        for (const [keywords, data] of Object.entries(islamicKnowledgeBase)) {
            const keywordList = keywords.split('|');
            if (keywordList.some(kw => lowerQuestion.includes(kw))) {
                const randomRef = data.references[Math.floor(Math.random() * data.references.length)];
                return `${data.answer}<br><br><em class="reference">${randomRef}</em>`;
            }
        }
        
        // إجابات ذكية للأسئلة المشابهة
        if (lowerQuestion.includes('عقيد') || lowerQuestion.includes('اعتقاد')) {
            return islamicKnowledgeBase["العقيدة|التوحيد"].answer;
        }
        
        if (lowerQuestion.includes('صلاة') || lowerQuestion.includes('صلوات')) {
            return islamicKnowledgeBase["الصلاة|الصلوات"].answer;
        }
        
        // إجابات عامة محسنة
        const generalAnswers = [
            "هذا سؤال مهم، أنصحك بمراجعة كتب العقيدة الموثوقة مثل 'شرح الطحاوية'",
            "أسأل الله أن يهدينا جميعًا للحق، يمكنك الاستفادة من فتاوى العلماء الثقات في هذا الموضوع",
            "هذه المسألة تحتاج إلى تثبت، ومن أفضل المراجع لها كتب الشيخ ابن عثيمين رحمه الله",
            "المرجع في مثل هذه الأمور كتاب الله وسنة نبيه ﷺ بفهم السلف الصالح",
            "هذا السؤال له تفصيل في كتب العقيدة، أنصحك بمراجعة 'مجموع فتاوى ابن باز'"
        ];
        
        return generalAnswers[Math.floor(Math.random() * generalAnswers.length)];
    }

    // دالة محسنة لإرسال الرسائل
    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;
        
        addMessage('user', message);
        userInput.value = '';
        showTypingIndicator();
        
        try {
            // البحث أولاً في القاعدة المعرفية المحلية
            const localAnswer = getIslamicAnswer(message);
            
            // إذا كانت الإجابة من القاعدة المعرفية كافية
            if (!localAnswer.includes("هذا سؤال مهم")) {
                setTimeout(() => {
                    addMessage('ai', localAnswer);
                    hideTypingIndicator();
                }, 1000 + Math.random() * 2000);
                return;
            }
            
            // إذا لم تكن كافية، نستخدم API مع معالجة إضافية
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: `أنت مساعد إسلامي متخصص في العقيدة السلفية. أجب على السؤال التالي بلغة عربية فصيحة مع الاستدلال بالكتاب والسنة بفهم السلف الصالح. السؤال: ${message}`,
                    messages: messages
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            // معالجة الإجابة من API
            let aiResponse = data.response || localAnswer;
            
            // تحسين الإجابة إذا كانت عامة
            if (message.includes('اين الله') || message.includes('مكان الله')) {
                aiResponse = islamicKnowledgeBase["اين الله|مكان الله"].answer;
            }
            
            addMessage('ai', aiResponse);
            
        } catch (error) {
            console.error('Error:', error);
            const localAnswer = getIslamicAnswer(message);
            addMessage('ai', localAnswer || "عذرًا، حدث خطأ في الاتصال. جرب سؤالاً آخر أو حاول لاحقًا.");
        } finally {
            hideTypingIndicator();
        }
    }

    function clearChatHistory() {
        if (confirm('هل تريد فعلاً مسح سجل المحادثة؟')) {
            localStorage.removeItem('h-ai-messages');
            messages = [{
                role: "ai",
                content: "السلام عليكم ورحمة الله وبركاته\n\nأنا H.Ai، مساعدك الذكي الإسلامي الذي يقدم معلومات موثوقة وفق منهج السلف الصالح.\n\nكيف يمكنني مساعدتك اليوم؟"
            }];
            renderMessages();
        }
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
        
        // الكشف التلقائي عن الوضع المظلم
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            const darkMode = e.matches;
            document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
            themeIcon.className = darkMode ? 'fas fa-sun' : 'fas fa-moon';
        });
    }

    // بدء التطبيق
    initApp();
});
