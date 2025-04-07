// قاعدة المعرفة الموسعة للذكاء الاصطناعي
const knowledgeBase = {
    // التحية والترحيب
    greeting: {
        patterns: ["مرحبا", "السلام عليكم", "اهلا", "hello", "hi", "اهلين", "مرحبتين"],
        responses: [
            "وعليكم السلام ورحمة الله وبركاته، كيف يمكنني مساعدتك اليوم؟",
            "السلام عليكم ورحمة الله، تفضل بسؤالك.",
            "مرحبًا بك، كيف يمكنني مساعدتك؟"
        ]
    },
    
    // العقيدة الإسلامية (موسعة)
    aqeedah: {
        patterns: ["ما هو الإسلام", "تعريف الإسلام", "ماهي أركان الإسلام", "ما هي العقيدة", "ما معنى التوحيد", "أنواع التوحيد", "ما هو الشرك", "أقسام التوحيد"],
        responses: [
            "الإسلام هو الاستسلام لله بالتوحيد والانقياد له بالطاعة والبراءة من الشرك وأهله. وأركان الإسلام خمسة: شهادة أن لا إله إلا الله وأن محمداً رسول الله، وإقام الصلاة، وإيتاء الزكاة، وصوم رمضان، وحج البيت لمن استطاع إليه سبيلاً.",
            "العقيدة الإسلامية هي الإيمان الجازم بالله وملائكته وكتبه ورسله واليوم الآخر والقدر خيره وشره، وما ثبت من أمور الغيب والأخبار الصحيحة. والتوحيد ثلاثة أنواع: توحيد الربوبية، وتوحيد الألوهية، وتوحيد الأسماء والصفات.",
            "الشرك هو جعل شريك لله في ربوبيته أو ألوهيته أو أسمائه وصفاته. وهو أعظم الذنوب عند الله. والشرك نوعان: شرك أكبر يخرج من الملة، وشرك أصغر وهو ما ثبت بالنصوص أنه شرك لكنه لا يخرج من الملة."
        ]
    },
    
    // الفقه الإسلامي (موسع)
    fiqh: {
        patterns: ["كيف أصلي", "عدد ركعات الصلاة", "مواقيت الصلاة", "شروط الصلاة", "كيف أتوضأ", "ما ينقض الوضوء", "أحكام الصيام", "مبطلات الصيام", "أحكام الزكاة", "أنصبة الزكاة", "أحكام الحج", "أركان الحج"],
        responses: [
            "صفة الصلاة: تستقبل القبلة ثم تنوي الصلاة التي تريدها، ثم تكبر تكبيرة الإحرام، ثم تقرأ الفاتحة وما تيسر من القرآن، ثم تركع قائلاً الله أكبر، ثم ترفع من الركوع قائلاً سمع الله لمن حمده، ثم تسجد قائلاً الله أكبر، ثم تجلس بين السجدتين، ثم تسجد الثانية، وهكذا في كل ركعة.",
            "أركان الصلاة أربعة عشر: القيام مع القدرة، وتكبيرة الإحرام، وقراءة الفاتحة، والركوع، والاعتدال منه، والسجود، والجلوس بين السجدتين، والطمأنينة في جميع الأركان، والتشهد الأخير، والصلاة على النبي ﷺ، والتسليم، والترتيب بين الأركان.",
            "أحكام الصيام: يجب الصيام على كل مسلم بالغ عاقل قادر مقيم، ويحرم على الحائض والنفساء، ويجب الإمساك عن المفطرات من طلوع الفجر إلى غروب الشمس، ومبطلات الصيام: الأكل والشرب عمداً، والجماع، والحيض والنفاس، والتقيؤ عمداً."
        ]
    },
    
    // القرآن الكريم (موسع)
    quran: {
        patterns: ["عدد سور القرآن", "أطول سورة في القرآن", "أقصر سورة في القرآن", "ما هو القرآن", "أول سورة نزلت", "آخر سورة نزلت", "أطول آية في القرآن", "ما هي السورة التي تسمى قلب القرآن"],
        responses: [
            "القرآن الكريم هو كلام الله المنزل على محمد ﷺ المتعبد بتلاوته، المنقول إلينا بالتواتر. عدد سوره 114 سورة، أطولها سورة البقرة (286 آية)، وأقصرها سورة الكوثر (3 آيات). أول ما نزل من القرآن أول سورة العلق، وآخر ما نزل سورة النصر.",
            "أطول آية في القرآن هي آية الدين في سورة البقرة (آية 282). والسورة التي تسمى قلب القرآن هي سورة يس، كما ورد في الحديث: 'إن لكل شيء قلبًا، وقلب القرآن يس'."
        ]
    },
    
    // الحديث النبوي (موسع)
    hadith: {
        patterns: ["ما هو الحديث", "أشهر كتب الحديث", "ما هو الحديث الصحيح", "ما هو الحديث الضعيف", "ما هو الحديث الموضوع", "ما هو الحديث القدسي", "كم حديث في صحيح البخاري"],
        responses: [
            "الحديث هو ما أضيف إلى النبي ﷺ من قول أو فعل أو تقرير أو صفة. الحديث الصحيح هو ما اتصل سنده بنقل العدل الضابط عن مثله إلى منتهاه من غير شذوذ ولا علة. والحديث الضعيف ما فقد شرطًا من شروط الصحة. والموضوع هو المختلق المصنوع.",
            "أشهر كتب الحديث: الصحيحان (البخاري ومسلم) وهما أصح الكتب بعد القرآن، ثم السنن الأربعة (أبو داود والترمذي والنسائي وابن ماجه). صحيح البخاري يحتوي على 7563 حديثًا بالمكرر، وبدون المكرر حوالي 2602 حديثًا."
        ]
    },
    
    // السيرة النبوية (موسعة)
    seerah: {
        patterns: ["متى ولد النبي", "أين ولد النبي", "كم كان عمر النبي عندما بعث", "كم سنة عاش النبي في مكة", "كم سنة عاش النبي في المدينة", "متى توفي النبي", "كم كان عمر النبي عندما توفي", "أسماء زوجات النبي"],
        responses: [
            "ولد النبي ﷺ يوم الاثنين 12 ربيع الأول عام الفيل (571م) في مكة. بعث وهو في الأربعين من عمره، وعاش في مكة بعد البعثة 13 سنة، ثم هاجر إلى المدينة وعاش فيها 10 سنوات، وتوفي يوم الاثنين 12 ربيع الأول سنة 11هـ وعمره 63 سنة.",
            "زوجات النبي ﷺ هن: خديجة بنت خويلد، وسودة بنت زمعة، وعائشة بنت أبي بكر، وحفصة بنت عمر، وزينب بنت خزيمة، وأم سلمة، وزينب بنت جحش، وجويرية بنت الحارث، وصفية بنت حيي، وأم حبيبة، وميمونة بنت الحارث، ومارية القبطية."
        ]
    },
    
    // التاريخ الإسلامي (موسع)
    history: {
        patterns: ["الخلفاء الراشدين", "فتح مكة", "غزوة بدر", "غزوة أحد", "غزوة الخندق", "كم سنة حكم الخلفاء الراشدون", "أول خليفة في الإسلام", "فتح الأندلس"],
        responses: [
            "الخلفاء الراشدون هم أبو بكر الصديق (حكم سنتين)، وعمر بن الخطاب (10 سنوات)، وعثمان بن عفان (12 سنة)، وعلي بن أبي طالب (5 سنوات). وفتح مكة كان في السنة الثامنة للهجرة، وغزوة بدر في السنة الثانية، وأحد في الثالثة، والخندق في الخامسة.",
            "فتح الأندلس كان في سنة 92هـ بقيادة طارق بن زياد وموسى بن نصير في عهد الوليد بن عبد الملك الأموي. واستمر الحكم الإسلامي في الأندلس أكثر من ثمانية قرون."
        ]
    },
    
    // الفيزياء (موسعة)
    physics: {
        patterns: ["قوانين نيوتن", "ما هي الجاذبية", "ما هي الكهرومغناطيسية", "ما هي النظرية النسبية", "ما هي الميكانيكا الكلاسيكية", "ما هي الديناميكا الحرارية"],
        responses: [
            "قوانين نيوتن للحركة ثلاثة: 1) يبقى الجسم في حالته ما لم تؤثر عليه قوة خارجية. 2) القوة تساوي الكتلة مضروبة في التسارع (F=ma). 3) لكل فعل رد فعل مساوٍ له في المقدار ومعاكس في الاتجاه.",
            "الجاذبية هي قوة التجاذب بين الأجسام ذات الكتلة. وصاغ نيوتن قانون الجذب العام الذي ينص على أن القوة تتناسب طرديًا مع حاصل ضرب الكتلتين وعكسيًا مع مربع المسافة بينهما. أما النظرية النسبية لأينشتاين فترى الجاذبية كتشوه في الزمكان."
        ]
    },
    
    // الكيمياء (موسعة)
    chemistry: {
        patterns: ["ما هو الجدول الدوري", "ما هي الذرة", "ما هي الروابط الكيميائية", "ما هي الأحماض والقواعد", "ما هي التفاعلات الكيميائية", "ما هي الكيمياء العضوية"],
        responses: [
            "الجدول الدوري ترتيب للعناصر الكيميائية حسب عددها الذري (عدد البروتونات) وخواصها الكيميائية. الذرة تتكون من نواة (بروتونات ونيوترونات) وإلكترونات تدور حولها. الروابط الكيميائية أنواع: أيونية، وتشاركية، وفلزية.",
            "الأحماض مواد تطلق أيونات الهيدروجين (H+) في المحاليل المائية، والقواعد تطلق أيونات الهيدروكسيد (OH-). التفاعلات الكيميائية أنواع: اتحاد، وتحلل، وتبادل مزدوج، واحتراق. الكيمياء العضوية تدرس مركبات الكربون."
        ]
    },
    
    // علم الأحياء (موسع)
    biology: {
        patterns: ["ما هي الخلية", "ما هو الحمض النووي", "ما هي نظرية التطور", "ما هي عملية البناء الضوئي", "ما هي أجزاء النبات", "ما هي الكروموسومات"],
        responses: [
            "الخلية هي وحدة بناء الكائنات الحية. الخلايا النباتية لها جدار خلوي وبلاستيدات خضراء، بينما الحيوانية لا. الحمض النووي (DNA) يحمل المعلومات الوراثية. الكروموسومات هياكل تحتوي على DNA وتوجد في النواة.",
            "البناء الضوئي عملية تقوم بها النباتات لتحويل الطاقة الضوئية إلى كيميائية (جلوكوز) باستخدام ثاني أكسيد الكربون والماء وإطلاق الأكسجين. معادلته: 6CO2 + 6H2O + ضوء → C6H12O6 + 6O2."
        ]
    },
    
    // الطب (موسع)
    medicine: {
        patterns: ["ما هو ضغط الدم", "ما هي أعراض السكري", "ما هو الجهاز الهضمي", "ما هي أعراض الإنفلونزا", "ما هو فيروس كورونا", "ما هي أعراض النوبة القلبية"],
        responses: [
            "ضغط الدم الطبيعي 120/80 ملم زئبق. السكري يسبب العطش وكثرة التبول والتعب. الإنفلونزا تسبب حرارة، سعال، آلام عضلية. النوبة القلبية: ألم بالصدر، ضيق تنفس، تعرق، غثيان.",
            "فيروس كورونا (كوفيد-19) يسبب حرارة، سعال جاف، إرهاق، فقدان حاسة الشم أو التذوق. الجهاز الهضمي يشمل الفم، المريء، المعدة، الأمعاء الدقيقة والغليظة، الكبد، البنكرياس."
        ]
    },
    
    // التمريض (موسع)
    nursing: {
        patterns: ["ما هي الإسعافات الأولية", "كيف أعمل إنعاش قلبي رئوي", "كيف أتعامل مع الجروح", "كيف أتعامل مع الحروق", "ما هي علامات الحياة", "كيف أقيس الضغط"],
        responses: [
            "الإسعافات الأولية: تأمين المكان، تقييم الوضع، طلب المساعدة، الإنعاش إذا لزم. الإنعاش القلبي الرئوي: 30 ضغطة صدر ثم تنفسين صناعيين. الجروح: تنظيف، ضماد. الحروق: تبريد بالماء 10-15 دقيقة.",
            "علامات الحياة: التنفس، النبض، الاستجابة. قياس الضغط: وضع الكفة على الذراع، النفخ حتى 180، تخفيف الهواء تدريجيًا، سماع النبضات لتحديد الضغط الانقباضي والانبساطي."
        ]
    },
    
    // الرياضيات (موسع)
    math: {
        patterns: ["ما هي نظرية فيثاغورث", "كيف أحل معادلة من الدرجة الثانية", "ما هي الدائرة", "ما هو قانون مساحة المثلث", "ما هي نظرية ذات الحدين", "ما هو اللوغاريتم"],
        responses: [
            "نظرية فيثاغورث: في المثلث القائم، مربع الوتر = مجموع مربعي الضلعين الآخرين (أ² + ب² = ج²). معادلة الدرجة الثانية: أس² + ب س + ج = 0، حلها: س = [-ب ± √(ب² - 4أج)] / 2أ.",
            "مساحة المثلث: ½ × القاعدة × الارتفاع. الدائرة: محيطها = 2πنق، مساحتها = πنق². اللوغاريتم هو الأس الذي يجب أن يرفع إليه الأساس ليعطي العدد."
        ]
    },
    
    // أسئلة عامة
    general: {
        patterns: ["من أنت", "ما هو اسمك", "ماذا تعرف", "ماذا تفعل", "ما هي قدراتك"],
        responses: [
            "أنا H.Ai، مساعدك الإسلامي الشامل. أساعدك في الإجابة على أسئلتك الشرعية والعلمية وفق منهج أهل السنة والجماعة.",
            "اسمي H.Ai، وأنا هنا لمساعدتك في فهم دينك وحل مشاكلك العلمية في مختلف المجالات."
        ]
    },
    
    // الردود عند عدم الفهم
    default: {
        responses: [
            "عذرًا، لم أفهم سؤالك تمامًا. هل يمكنك إعادة صياغته؟",
            "ليس لدي إجابة كافية عن هذا السؤال حالياً. يمكنك طرح سؤال آخر.",
            "أسئلتك الشرعية تحتاج إلى توضيح أكثر حتى أتمكن من مساعدتك بشكل أفضل.",
            "هذا السؤال يحتاج إلى مزيد من التفصيل. هل يمكنك توضيح ما تقصده؟"
        ]
    }
};

// اقتراحات الأسئلة
const suggestions = {
    islamic: [
        "ما هي أركان الإسلام؟",
        "كيف أتوضأ للصلاة؟",
        "ما هي شروط الصيام؟",
        "ما هو حد الزنا في الإسلام؟",
        "ما حكم الموسيقى في الإسلام؟",
        "كيف أحج بيت الله الحرام؟"
    ],
    science: [
        "ما هي قوانين نيوتن للحركة؟",
        "كيف تحدث عملية البناء الضوئي؟",
        "ما هي مكونات الذرة؟",
        "كيف يعمل الجهاز الهضمي؟",
        "ما هي أعراض مرض السكري؟",
        "كيف أحل معادلة من الدرجة الثانية؟"
    ]
};

// متغيرات التطبيق
const app = {
    currentUser: null,
    chatHistory: [],
    aiAvatar: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
    aiStyle: "islamic",
    currentTopic: null
};

// عناصر DOM
const elements = {
    // الروابط
    chatLink: document.getElementById('chat-link'),
    settingsLink: document.getElementById('settings-link'),
    topicsLink: document.getElementById('topics-link'),
    
    // المحتوى
    chatContent: document.getElementById('chat-content'),
    settingsContent: document.getElementById('settings-content'),
    topicsContent: document.getElementById('topics-content'),
    
    // الأزرار
    loginBtn: document.getElementById('login-btn'),
    registerBtn: document.getElementById('register-btn'),
    logoutBtn: document.getElementById('logout-btn'),
    sendBtn: document.getElementById('send-btn'),
    newChatBtn: document.getElementById('new-chat-btn'),
    suggestBtn: document.getElementById('suggest-btn'),
    
    // النماذج
    loginForm: document.getElementById('login-form'),
    registerForm: document.getElementById('register-form'),
    
    // النوافذ المنبثقة
    loginModal: document.getElementById('login-modal'),
    registerModal: document.getElementById('register-modal'),
    suggestionsModal: document.getElementById('suggestions-modal'),
    
    // العناصر الأخرى
    authButtons: document.getElementById('auth-buttons'),
    userProfile: document.getElementById('user-profile'),
    usernameDisplay: document.getElementById('username-display'),
    userInput: document.getElementById('user-input'),
    chatMessages: document.getElementById('chat-messages'),
    aiStyleSelect: document.getElementById('ai-style'),
    aiAvatarSelect: document.getElementById('ai-avatar'),
    suggestionsContainer: document.getElementById('suggestions-container'),
    topicCards: document.querySelectorAll('.topic-card')
};

// تهيئة التطبيق
function init() {
    // تحميل بيانات المستخدم من localStorage
    loadUser();
    
    // إعداد معالجات الأحداث
    setupEventListeners();
    
    // عرض صفحة الدردشة افتراضيًا
    showContent('chat');
}

// تحميل بيانات المستخدم
function loadUser() {
    const userData = localStorage.getItem('HAi_user');
    if (userData) {
        app.currentUser = JSON.parse(userData);
        updateAuthUI();
    }
}

// تحديث واجهة المصادقة
function updateAuthUI() {
    if (app.currentUser) {
        elements.authButtons.style.display = 'none';
        elements.userProfile.style.display = 'flex';
        elements.usernameDisplay.textContent = app.currentUser.username;
    } else {
        elements.authButtons.style.display = 'block';
        elements.userProfile.style.display = 'none';
    }
}

// إعداد معالجات الأحداث
function setupEventListeners() {
    // روابط التنقل
    elements.chatLink.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('chat');
    });
    
    elements.settingsLink.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('settings');
    });
    
    elements.topicsLink.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('topics');
    });
    
    // أزرار المصادقة
    elements.loginBtn.addEventListener('click', () => showModal('login'));
    elements.registerBtn.addEventListener('click', () => showModal('register'));
    elements.logoutBtn.addEventListener('click', logout);
    
    // إرسال رسالة
    elements.sendBtn.addEventListener('click', sendMessage);
    elements.userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // محادثة جديدة
    elements.newChatBtn.addEventListener('click', startNewChat);
    
    // اقتراحات الأسئلة
    elements.suggestBtn.addEventListener('click', showSuggestions);
    
    // نماذج المصادقة
    elements.loginForm.addEventListener('submit', handleLogin);
    elements.registerForm.addEventListener('submit', handleRegister);
    
    // إغلاق النوافذ المنبثقة
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('active');
            });
        });
    });
    
    // الروابط بين النوافذ المنبثقة
    document.getElementById('show-register').addEventListener('click', (e) => {
        e.preventDefault();
        showModal('register');
    });
    
    document.getElementById('show-login').addEventListener('click', (e) => {
        e.preventDefault();
        showModal('login');
    });
    
    // تغيير إعدادات الذكاء الاصطناعي
    elements.aiStyleSelect.addEventListener('change', (e) => {
        app.aiStyle = e.target.value;
    });
    
    elements.aiAvatarSelect.addEventListener('change', (e) => {
        const avatarMap = {
            '1': 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png',
            '2': 'https://cdn-icons-png.flaticon.com/512/201/201634.png',
            '3': 'https://cdn-icons-png.flaticon.com/512/2702/2702602.png',
            '4': 'https://cdn-icons-png.flaticon.com/512/2785/2785473.png',
            '5': 'https://cdn-icons-png.flaticon.com/512/1141/1141435.png'
        };
        app.aiAvatar = avatarMap[e.target.value];
        document.querySelectorAll('.ai-info img, .ai-message img').forEach(img => {
            img.src = app.aiAvatar;
        });
    });
    
    // بطاقات المواضيع
    elements.topicCards.forEach(card => {
        card.addEventListener('click', () => {
            const topic = card.getAttribute('data-topic');
            app.currentTopic = topic;
            let topicName = '';
            
            switch(topic) {
                case 'aqeedah': topicName = 'العقيدة الإسلامية'; break;
                case 'fiqh': topicName = 'الفقه الإسلامي'; break;
                case 'quran': topicName = 'القرآن الكريم'; break;
                case 'hadith': topicName = 'الحديث النبوي'; break;
                case 'seerah': topicName = 'السيرة النبوية'; break;
                case 'history': topicName = 'التاريخ الإسلامي'; break;
                case 'physics': topicName = 'الفيزياء'; break;
                case 'chemistry': topicName = 'الكيمياء'; break;
                case 'biology': topicName = 'علم الأحياء'; break;
                case 'medicine': topicName = 'الطب'; break;
                case 'nursing': topicName = 'التمريض'; break;
                case 'math': topicName = 'الرياضيات'; break;
            }
            
            addMessageToChat(`أريد الاستفسار عن موضوع ${topicName}`, 'user');
            
            // إظهار رسالة "يكتب..." من الذكاء الاصطناعي
            const typingIndicator = document.createElement('div');
            typingIndicator.className = 'message ai-message typing';
            typingIndicator.innerHTML = `
                <img src="${app.aiAvatar}" alt="H.Ai Avatar">
                <div class="message-content">
                    <p>يكتب...</p>
                </div>
            `;
            elements.chatMessages.appendChild(typingIndicator);
            elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
            
            // محاكاة انتظار الرد
            setTimeout(() => {
                // إزالة مؤشر الكتابة
                document.querySelector('.typing').remove();
                
                // إضافة رد الذكاء الاصطناعي
                addMessageToChat(`حسنًا، أنا مستعد للإجابة على أسئلتك حول ${topicName}. تفضل بطرح سؤالك.`, 'ai');
                
                // العودة إلى صفحة الدردشة
                showContent('chat');
            }, 1000 + Math.random() * 2000);
        });
    });
}

// عرض المحتوى
function showContent(page) {
    // إخفاء جميع المحتويات
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });
    
    // إزالة النشاط من جميع الروابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    
    // عرض المحتوى المطلوب
    switch (page) {
        case 'chat':
            elements.chatContent.classList.add('active');
            elements.chatLink.classList.add('active');
            break;
        case 'settings':
            elements.settingsContent.classList.add('active');
            elements.settingsLink.classList.add('active');
            break;
        case 'topics':
            elements.topicsContent.classList.add('active');
            elements.topicsLink.classList.add('active');
            break;
    }
}

// عرض النافذة المنبثقة
function showModal(modal) {
    document.querySelectorAll('.modal').forEach(m => {
        m.classList.remove('active');
    });
    
    switch (modal) {
        case 'login':
            elements.loginModal.classList.add('active');
            break;
        case 'register':
            elements.registerModal.classList.add('active');
            break;
        case 'suggestions':
            elements.suggestionsModal.classList.add('active');
            loadSuggestions();
            break;
    }
}

// عرض اقتراحات الأسئلة
function showSuggestions() {
    showModal('suggestions');
}

// تحميل اقتراحات الأسئلة
function loadSuggestions() {
    let html = '';
    
    // إضافة اقتراحات إسلامية
    html += `
        <div class="suggestion-category">
            <h3><i class="fas fa-mosque"></i> اقتراحات إسلامية</h3>
            <ul class="suggestion-list">
                ${suggestions.islamic.map(item => `<li onclick="selectSuggestion('${item}')">${item}</li>`).join('')}
            </ul>
        </div>
    `;
    
    // إضافة اقتراحات علمية
    html += `
        <div class="suggestion-category">
            <h3><i class="fas fa-flask"></i> اقتراحات علمية</h3>
            <ul class="suggestion-list">
                ${suggestions.science.map(item => `<li onclick="selectSuggestion('${item}')">${item}</li>`).join('')}
            </ul>
        </div>
    `;
    
    elements.suggestionsContainer.innerHTML = html;
}

// اختيار اقتراح
function selectSuggestion(suggestion) {
    elements.userInput.value = suggestion;
    elements.suggestionsModal.classList.remove('active');
}

// معالجة تسجيل الدخول
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    // هنا يجب التحقق من صحة بيانات المستخدم مع الخادم
    // ولكن لأغراض العرض، سنستخدم تخزين محلي بسيط
    
    const users = JSON.parse(localStorage.getItem('HAi_users')) || [];
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        app.currentUser = user;
        localStorage.setItem('HAi_user', JSON.stringify(user));
        updateAuthUI();
        elements.loginModal.classList.remove('active');
        
        // إعادة تعيين الحقول
        e.target.reset();
        
        // عرض رسالة نجاح
        showMessage('تم تسجيل الدخول بنجاح', 'success');
    } else {
        showMessage('اسم المستخدم أو كلمة المرور غير صحيحة', 'error');
    }
}

// معالجة التسجيل
function handleRegister(e) {
    e.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    // التحقق من صحة البيانات
    if (password !== confirmPassword) {
        showMessage('كلمة المرور وتأكيدها غير متطابقين', 'error');
        return;
    }
    
    // التحقق من عدم وجود مستخدم بنفس الاسم
    const users = JSON.parse(localStorage.getItem('HAi_users')) || [];
    if (users.some(u => u.username === username)) {
        showMessage('اسم المستخدم موجود بالفعل', 'error');
        return;
    }
    
    // إنشاء مستخدم جديد
    const newUser = {
        username,
        email,
        password,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('HAi_users', JSON.stringify(users));
    
    // تسجيل الدخول تلقائيًا
    app.currentUser = newUser;
    localStorage.setItem('HAi_user', JSON.stringify(newUser));
    updateAuthUI();
    elements.registerModal.classList.remove('active');
    
    // إعادة تعيين الحقول
    e.target.reset();
    
    // عرض رسالة نجاح
    showMessage('تم إنشاء الحساب بنجاح', 'success');
}

// تسجيل الخروج
function logout() {
    app.currentUser = null;
    localStorage.removeItem('HAi_user');
    updateAuthUI();
    showMessage('تم تسجيل الخروج بنجاح', 'success');
}

// إرسال رسالة
function sendMessage() {
    const message = elements.userInput.value.trim();
    if (!message) return;
    
    // إضافة رسالة المستخدم إلى الدردشة
    addMessageToChat(message, 'user');
    
    // مسح حقل الإدخال
    elements.userInput.value = '';
    
    // إظهار رسالة "يكتب..." من الذكاء الاصطناعي
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'message ai-message typing';
    typingIndicator.innerHTML = `
        <img src="${app.aiAvatar}" alt="H.Ai Avatar">
        <div class="message-content">
            <p>يكتب...</p>
        </div>
    `;
    elements.chatMessages.appendChild(typingIndicator);
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
    
    // محاكاة انتظار الرد
    setTimeout(() => {
        // إزالة مؤشر الكتابة
        document.querySelector('.typing').remove();
        
        // الحصول على الرد من قاعدة المعرفة
        const response = getAIResponse(message);
        
        // إضافة رد الذكاء الاصطناعي
        addMessageToChat(response, 'ai');
    }, 1000 + Math.random() * 2000); // وقت انتظار عشوائي بين 1-3 ثواني
}

// إضافة رسالة إلى الدردشة
function addMessageToChat(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatar = sender === 'ai' ? app.aiAvatar : 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
    
    messageDiv.innerHTML = `
        <img src="${avatar}" alt="${sender === 'ai' ? 'H.Ai Avatar' : 'User Avatar'}">
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    
    elements.chatMessages.appendChild(messageDiv);
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
    
    // حفظ الرسالة في السجل
    app.chatHistory.push({
        sender,
        message,
        timestamp: new Date().toISOString()
    });
}

// بدء محادثة جديدة
function startNewChat() {
    if (confirm('هل تريد بدء محادثة جديدة؟ سيتم مسح سجل المحادثة الحالي.')) {
        elements.chatMessages.innerHTML = `
            <div class="message ai-message">
                <img src="${app.aiAvatar}" alt="H.Ai Avatar">
                <div class="message-content">
                    <p>السلام عليكم ورحمة الله وبركاته، أنا H.Ai المساعد الإسلامي الشامل. أسألني عن:</p>
                    <ul class="suggestions-list">
                        <li>أي موضوع ديني وفق منهج السلف الصالح</li>
                        <li>أسئلة في الطب والتمريض</li>
                        <li>مسائل في الفيزياء والكيمياء</li>
                        <li>استفسارات في الأحياء والعلوم</li>
                        <li>أو أي موضوع آخر وسأجيبك بأفضل ما لدي</li>
                    </ul>
                </div>
            </div>
        `;
        app.chatHistory = [{
            sender: 'ai',
            message: 'السلام عليكم ورحمة الله وبركاته، أنا H.Ai المساعد الإسلامي الشامل. أسألني عن أي موضوع ديني أو علمي وسأجيبك بأفضل ما لدي.',
            timestamp: new Date().toISOString()
        }];
        app.currentTopic = null;
    }
}

// الحصول على رد من الذكاء الاصطناعي
function getAIResponse(prompt) {
    // تحويل السؤال إلى أحرف صغيرة لإزالة الحساسية لحالة الأحرف
    const lowerPrompt = prompt.toLowerCase();
    
    // البحث عن تطابق في أنماط الأسئلة
    for (const category in knowledgeBase) {
        if (category === 'default') continue;
        
        const patterns = knowledgeBase[category].patterns;
        for (const pattern of patterns) {
            if (lowerPrompt.includes(pattern.toLowerCase())) {
                app.currentTopic = category;
                return getRandomResponse(knowledgeBase[category].responses);
            }
        }
    }
    
    // إذا كان هناك موضوع حالى، حاول الرد ضمنه
    if (app.currentTopic && knowledgeBase[app.currentTopic]) {
        return getRandomResponse(knowledgeBase[app.currentTopic].responses);
    }
    
    // إذا لم يتم العثور على تطابق، استخدم الرد الافتراضي
    return getRandomResponse(knowledgeBase.default.responses);
}

// الحصول على رد عشوائي من مجموعة الردود
function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

// عرض رسالة للمستخدم
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `user-message floating ${type}`;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    // إزالة الرسالة بعد 3 ثوان
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', init);
