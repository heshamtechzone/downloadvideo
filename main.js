document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatMessages = document.getElementById('chatMessages');
    const themeBtn = document.getElementById('themeBtn');
    
    // Check for saved theme or prefer color scheme
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    
    // Auto-resize textarea
    userInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
    
    // Theme toggle
    themeBtn.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
    
    // Send message
    function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;
        
        // Add user message to chat
        addMessage(message, 'user');
        userInput.value = '';
        userInput.style.height = 'auto';
        
        // Show loading indicator
        const loadingId = 'loading-' + Date.now();
        addMessage('...', 'ai', loadingId);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Send to server
        fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: message })
        })
        .then(response => response.json())
        .then(data => {
            // Remove loading indicator
            const loadingElement = document.getElementById(loadingId);
            if (loadingElement) loadingElement.remove();
            
            // Add AI response
            const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                              "عذراً، حدث خطأ في معالجة طلبك. يرجى المحاولة مرة أخرى.";
            addMessage(aiResponse, 'ai');
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        })
        .catch(error => {
            console.error('Error:', error);
            const loadingElement = document.getElementById(loadingId);
            if (loadingElement) {
                loadingElement.querySelector('.message-content p').textContent = 
                    "عذراً، حدث خطأ في الاتصال بالخادم. يرجى المحاولة مرة أخرى.";
            }
        });
    }
    
    // Add message to chat
    function addMessage(text, sender, id = '') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        if (id) messageDiv.id = id;
        
        const avatar = sender === 'ai' ? 
            'https://cdn-icons-png.flaticon.com/512/4712/4712035.png' : 
            'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
        
        messageDiv.innerHTML = `
            <img src="${avatar}" alt="${sender}" class="avatar">
            <div class="message-content">
                <p>${text}</p>
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
    }
    
    // Event listeners
    sendBtn.addEventListener('click', sendMessage);
    
    userInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // Initial greeting based on time
    const hour = new Date().getHours();
    let greeting = 'مرحباً';
    if (hour < 12) greeting = 'صباح الخير';
    else if (hour < 18) greeting = 'مساء الخير';
    else greeting = 'مساء الخير';
    
    const firstMessage = document.querySelector('.ai-message .message-content p');
    if (firstMessage) firstMessage.textContent = `${greeting}! أنا H.Ai، مساعدك الذكي. كيف يمكنني مساعدتك اليوم؟`;
});
