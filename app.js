// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // تحميل المفتاح من الخادم
    const response = await fetch('/api/key');
    const data = await response.json();
    
    if (data.status !== 'success') {
      throw new Error('Failed to load API key');
    }

    window.API_KEY = data.key;
    initializeChat();
  } catch (error) {
    console.error('Initialization error:', error);
    alert('حدث خطأ في تحميل التطبيق. يرجى تحديث الصفحة أو المحاولة لاحقاً.');
  }
});

function initializeChat() {
  // عناصر DOM
  const chatMessages = document.getElementById('chat-messages');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');
  const typingIndicator = document.getElementById('typing-indicator');

  // رسائل المحادثة
  let messages = JSON.parse(localStorage.getItem('h-ai-messages')) || [
    {
      role: "ai",
      content: "السلام عليكم ورحمة الله وبركاته، أنا H.Ai مساعدك الذكي الملتزم بمنهج السلف الصالح. كيف يمكنني مساعدتك اليوم؟"
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

  // إرسال الرسالة
  async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;
    
    // إضافة رسالة الم��تخدم
    messages.push({ role: "user", content: userMessage });
    localStorage.setItem('h-ai-messages', JSON.stringify(messages));
    renderMessages();
    userInput.value = '';
    
    // عرض مؤشر الكتابة
    typingIndicator.style.display = 'block';
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    try {
      // إرسال إلى خادمنا بدلاً من Google مباشرة
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages })
      });
      
      const data = await response.json();
      
      if (data.status === 'success') {
        // إضافة رد المساعد
        messages.push({
          role: "ai",
          content: data.data.reply || "شكراً لسؤالك، سيتم الرد قريباً"
        });
      } else {
        throw new Error(data.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Chat error:', error);
      messages.push({
        role: "ai",
        content: "عذراً، حدث خطأ أثناء معالجة سؤالك. يرجى المحاولة مرة أخرى."
      });
    } finally {
      typingIndicator.style.display = 'none';
      localStorage.setItem('h-ai-messages', JSON.stringify(messages));
      renderMessages();
    }
  }

  // استماع للأحداث
  sendButton.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  // التهيئة الأولية
  renderMessages();
}