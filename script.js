document.addEventListener('DOMContentLoaded', function() {
    // العناصر الرئيسية
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const newChatBtn = document.getElementById('new-chat');
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const closeBtns = document.querySelectorAll('.close-btn');
    const saveSettingsBtn = document.getElementById('save-settings');
    const clearHistoryBtn = document.getElementById('clear-history');
    const historyItems = document.getElementById('history-items');
    const quickQuestions = document.querySelectorAll('.quick-question');
    const loadingModal = document.getElementById('loading-modal');
    const apiKeyInput = document.getElementById('api-key');
    const islamicMode = document.getElementById('islamic-mode');
    const toast = document.getElementById('error-toast');

    // الحالة التطبيقية
    let currentChatId = generateChatId();
    let chats = JSON.parse(localStorage.getItem('h-ai-chats')) || {};
    let settings = JSON.parse(localStorage.getItem('h-ai-settings')) || {
        islamicMode: true,
        apiKey: 'AIzaSyAAY8gk9aOjJL3ABB_ZDQpcQfAWQRzCnQI'
    };

    // تهيئة التطبيق
    function initApp() {
        applySettings();
        loadChatHistory();
        updateChatTitle();
        
        if (Object.keys(chats).length === 0) {
            document.querySelector('.welcome-message').style.display = 'flex';
        } else {
            document.querySelector('.welcome-message').style.display = 'none';
            loadChat(currentChatId);
        }
    }

    // توليد معرف محادثة فريد
    function generateChatId() {
        return 'chat-' + Date.now();
    }

    // تطبيق الإعدادات
    function applySettings() {
        apiKeyInput.value = settings.apiKey;
        islamicMode.checked = settings.islamicMode;
    }

    // تحميل سجل المحادثات
    function loadChatHistory() {
        historyItems.innerHTML = '';
        
        Object.keys(chats).forEach(chatId => {
            const chat = chats[chatId];
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item' + (chatId === currentChatId ? ' active' : '');
            historyItem.textContent = chat.title || 'محادثة بدون عنوان';
            historyItem.dataset.chatId = chatId;
            
            historyItem.addEventListener('click', () => loadChat(chatId));
            historyItems.appendChild(historyItem);
        });
    }

    // تحميل محادثة محددة
    function loadChat(chatId) {
        currentChatId = chatId;
        const chat = chats[chatId];
        
        document.querySelectorAll('.history-item').forEach(item => {
            item.classList.toggle('active', item.dataset.chatId === chatId);
        });
        
        updateChatTitle();
        renderChatMessages(chat.messages || []);
    }

    // عرض رسائل المحادثة
    function renderChatMessages(messages) {
        chatMessages.innerHTML = '';
        
        if (messages.length === 0) {
            document.querySelector('.welcome-message').style.display = 'flex';
            return;
        }
        
        document.querySelector('.welcome-message').style.display = 'none';
        
        messages.forEach(message => {
            addMessageToChat(message.role, message.content, false);
        });
    }

    // تحديث عنوان المحادثة الحالية
    function updateChatTitle() {
        const chat = chats[currentChatId];
        document.getElementById('current-chat-title').textContent = chat?.title || 'محادثة جديدة';
    }

    // إنشاء محادثة جديدة
    function createNewChat() {
        currentChatId = generateChatId();
        chats[currentChatId] = {
            id: currentChatId,
            title: 'محادثة جديدة',
            messages: [],
            createdAt: new Date().toISOString()
        };
        
        saveChats();
        loadChatHistory();
        loadChat(currentChatId);
    }

    // حفظ المحادثات
    function saveChats() {
        localStorage.setItem('h-ai-chats', JSON.stringify(chats));
    }

    // إضافة رسالة إلى المحادثة
    function addMessageToChat(role, content, saveToHistory = true) {
        document.querySelector('.welcome-message').style.display = 'none';
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${role}-message fade-in`;
        
        if (role === 'user') {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <div class="message-header">
                        <span class="message-sender">أنت</span>
                        <span class="message-time">الآن</span>
                    </div>
                    <div class="message-text">${content}</div>
                </div>
                <img src="user-icon.png" alt="User" class="message-avatar">
            `;
            
            if (saveToHistory) {
                if (!chats[currentChatId].messages) {
                    chats[currentChatId].messages = [];
                }
                
                chats[currentChatId].messages.push({
                    role: 'user',
                    content: content,
                    timestamp: new Date().toISOString()
                });
                
                if (chats[currentChatId].messages.length === 1) {
                    updateChatTitleFromMessage(content);
                }
            }
        } else {
            messageDiv.innerHTML = `
                <img src="ai-icon.png" alt="H.Ai" class="message-avatar">
                <div class="message-content">
                    <div class="message-header">
                        <span class="message-sender">H.Ai</span>
                        <span class="message-time">الآن</span>
                    </div>
                    <div class="message-text">${content}</div>
                </div>
            `;
            
            if (saveToHistory) {
                chats[currentChatId].messages.push({
                    role: 'ai',
                    content: content,
                    timestamp: new Date().toISOString()
                });
            }
        }
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        if (saveToHistory) {
            saveChats();
        }
    }

    // تحديث عنوان المحادثة من الرسالة الأولى
    function updateChatTitleFromMessage(message) {
        const title = message.length > 30 ? message.substring(0, 30) + '...' : message;
        chats[currentChatId].title = title;
        updateChatTitle();
        saveChats();
        loadChatHistory();
    }

    // إرسال رسالة إلى الذكاء الاصطناعي
    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;
        
        addMessageToChat('user', message);
        userInput.value = '';
        userInput.style.height = 'auto';
        sendButton.disabled = true;
        loadingModal.style.display = 'flex';
        
        try {
            const aiResponse = await getAIResponse(message);
            addMessageToChat('ai', aiResponse);
        } catch (error) {
            console.error('Error:', error);
            showToast(error.message);
            addMessageToChat('ai', `عذرًا، حدث خطأ: ${error.message}`);
        } finally {
            loadingModal.style.display = 'none';
            sendButton.disabled = false;
        }
    }

    // الحصول على رد من Gemini API
    async function getAIResponse(message) {
        const apiKey = settings.apiKey;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
        
        const context = settings.islamicMode ? 
            "أنت مساعد إسلامي سلفي تتحدث باللغة العربية الفصحى. التزم بالمنهج السلفي في الإجابات، واستشهد بالقرآن والسنة بفهم السلف الصالح. قدم إجابات واضحة ومختصرة ودقيقة." :
            "أنت مساعد ذكي يتحدث العربية. قدم إجابات دقيقة ومفيدة.";
        
        const requestBody = {
            contents: [{
                parts: [{ text: `${context}\n\nالسؤال: ${message}\nالرجاء الإجابة بطريقة إسلامية سلفية واضحة:` }]
            }],
            generationConfig: {
                temperature: 0.7,
                topK: 50,
                topP: 0.95,
                maxOutputTokens: 2048
            }
        };
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'فشل الاتصال بالخادم');
        }
        
        const data = await response.json();
        
        if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
            return data.candidates[0].content.parts[0].text;
        } else {
            throw new Error('رد غير متوقع من الذكاء الاصطناعي');
        }
    }

    // مسح سجل المحادثات
    function clearChatHistory() {
        if (confirm('هل أنت متأكد أنك تريد مسح جميع المحادثات؟')) {
            chats = {};
            currentChatId = generateChatId();
            chats[currentChatId] = {
                id: currentChatId,
                title: 'محادثة جديدة',
                messages: [],
                createdAt: new Date().toISOString()
            };
            
            saveChats();
            loadChatHistory();
            loadChat(currentChatId);
        }
    }

    // حفظ الإعدادات
    function saveSettings() {
        settings = {
            islamicMode: islamicMode.checked,
            apiKey: apiKeyInput.value
        };
        
        localStorage.setItem('h-ai-settings', JSON.stringify(settings));
        applySettings();
        settingsModal.style.display = 'none';
        showToast('تم حفظ الإعدادات بنجاح');
    }

    // عرض إشعار
    function showToast(message, duration = 3000) {
        const toastMessage = toast.querySelector('.toast-message');
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => toast.classList.remove('show'), duration);
    }

    // تكبير مربع النص تلقائيًا
    userInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    // إرسال الرسالة عند الضغط على Enter
    userInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // الأحداث
    sendButton.addEventListener('click', sendMessage);
    newChatBtn.addEventListener('click', createNewChat);
    settingsBtn.addEventListener('click', () => settingsModal.style.display = 'flex');
    closeBtns.forEach(btn => btn.addEventListener('click', () => settingsModal.style.display = 'none'));
    saveSettingsBtn.addEventListener('click', saveSettings);
    clearHistoryBtn.addEventListener('click', clearChatHistory);
    
    // تبديل تبويبات الإعدادات
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab + '-tab';
            
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // الأسئلة السريعة
    quickQuestions.forEach(question => {
        question.addEventListener('click', function() {
            userInput.value = this.textContent;
            userInput.focus();
        });
    });
    
    // بدء التطبيق
    initApp();
});