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
        ],
        surahs: [
            {name: "الفاتحة", ayahs: 7, type: "مكية", startPage: 1},
            {name: "البقرة", ayahs: 286, type: "مدنية", startPage: 2},
            {name: "آل عمران", ayahs: 200, type: "مدنية", startPage: 50},
            // ... يمكن إضافة بقية السور
        ],
        getAyahs: function(surahIndex) {
            // في التطبيق الحقيقي، هنا سيتم جلب الآيات من قاعدة بيانات
            const sampleAyahs = {
                0: ["بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", "الرَّحْمَٰنِ الرَّحِيمِ", "مَالِكِ يَوْمِ الدِّينِ", "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ"],
                1: ["الم", "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ", "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ"]
            };
            return sampleAyahs[surahIndex] || ["لا توجد آيات متاحة حاليًا"];
        }
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
            "الخلفاء الراشدون هم أبو بكر الصديق (��كم سنتين)، وعمر بن الخطاب (10 سنوات)، وعثمان بن عفان (12 سنة)، وعلي بن أبي طالب (5 سنوات). وفتح مكة كان في السنة الثامنة للهجرة، وغزوة بدر في السنة الثانية، وأحد في الثالثة، والخندق في الخامسة.",
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
            "الأحماض مواد تطلق أيونات الهيدروجين (H+) في المحاليل المائية، والقواعد تطلق أيونات الهيدروكسيد (OH-). التفاعلات الكيميائية أنواع: اتحاد، وتحلل، وتبادل مزدوج، واحتراق. ال��يمياء العضوية تدرس مركبات الكربون."
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
    
    // علوم الحاسب (موسع)
    computer: {
        patterns: ["ما هي البرمجة", "ما هو الذكاء الاصطناعي", "ما هي لغة Python", "ما هي قواعد البيانات", "ما هو HTML", "ما هي الشبكات"],
        responses: [
            "البرمجة هي عملية كتابة تعليمات للحاسوب لتنفيذ مهام محددة. الذكاء الاصطناعي هو محاكاة الذكاء البشري في الآلات. Python لغة برمجة عالية المستوى سهلة التعلم.",
            "HTML هي لغة ترميز تستخدم لإنشاء صفحات الويب. قواعد البيانات هي أنظمة لتخزين وإدارة البيانات بكفاءة. الشبكات تربط أجهزة الحاسوب لتبادل البيانات والموارد."
        ]
    },
    
    // الهندسة (موسع)
    engineering: {
        patterns: ["ما هي الهندسة المدنية", "ما هي الهندسة الميكانيكية", "ما هي الهندسة الكهربائية", "ما هي مواد البناء", "ما هو حساب الأحمال"],
        responses: [
            "الهندسة المدنية تختص بتصميم وتنفيذ البنية التحتية مثل الطرق والجسور. الهندسة الميكانيكية تهتم بتصميم الآلات والأنظمة الميكانيكية.",
            "الهندسة الكهربائية تتعامل مع دراسة وتطبيق الكهرباء والإلكترونيات. مواد البناء تشمل الخرسانة، الحديد، الخشب، وغيرها. حساب الأحمال هو تحديد القوى المؤثرة على المنشآت."
        ]
    },
    
    // إدارة الأعمال (موسع)
    business: {
        patterns: ["ما هي إدارة الأعمال", "ما هو التسويق", "ما هي المحاسبة", "ما هي دراسة الجدوى", "ما هي إدارة المشاريع"],
        responses: [
            "إدارة الأعمال هي تنظيم الموارد لتحقيق أهداف المنظمة. التسويق هو عملية تعريف العملاء بالمنتجات والخدمات. المحاسبة هي تسجيل وتصنيف المعاملات المالية.",
            "دراسة الجدوى تحليل لإمكانية نجاح المشروع. إدارة المشاريع هي تطبيق المعارف والمهارات لتحقيق أهداف المشروع ضمن الوقت والتكلفة المحددين."
        ]
    },
    
    // القانون (موسع)
    law: {
        patterns: ["ما هو القانون المدني", "ما هو القانون الجنائي", "ما هي المحكمة الدستورية", "ما هي الجريمة", "ما هي العقوبة"],
        responses: [
            "القانون المدني ينظم العلاقات بين الأفراد. القانون الجنائي يتناول الجرائم والعقوبات. المحكمة الدستورية تراقب دستورية القوانين.",
            "الجريمة هي فعل محظور قانونًا يعاقب عليه. العقوبة هي الجزاء المقرر لمخالفة القانون، وتشمل السجن، الغرامة، وغيرها."
        ]
    },
    
    // التربية (موسع)
    education: {
        patterns: ["ما هي التربية", "ما هي طرق التدريس", "ما هي النظرية البنائية", "ما هو التعليم الإلكتروني", "ما هي صعوبات التعلم"],
        responses: [
            "التربية هي عملية تنمية الفرد وتوجيهه. طرق التدريس تشمل المحاضرة، المناقشة، التعلم النشط. النظرية البنائية ترى أن المعرفة تُبنى ولا تُنقل.",
            "التعليم الإلكتروني هو استخدام التقنية في التعليم. صعوبات التعلم هي مشاكل في اكتساب المهارات الأكاديمية رغم الذكاء الطبيعي."
        ]
    },
    
    // الترجمة
    translation: {
        patterns: ["ترجم", "translate", "ماذا يعني", "ما معنى"],
        responses: [
            "يمكنك استخدام أداة الترجمة المدمجة لترجمة النصوص بين العربية والإنجليزية. اضغط على زر الترجمة في شريط الأدوات.",
            "لترجمة أي نص، افتح نافذة الترجمة من الزر المخصص في واجهة الدردشة."
        ]
    },

    // اللهجة العامية
    colloquial: {
        patterns: ["عايز", "مش عارف", "عندي سؤال", "فين", "ازاي", "ليه", "هتعمل ايه", "عامل ايه"],
        responses: [
            "أنا فهمت سؤالك، هحاول أجاوبك بأفضل طريقة ممكنة.",
            "بالطبع، تقدر تسأل بأي طريقة تناسبك وهحاول أفهمك وأجاوبك.",
            "مش مشكلة، هساعدك في أي حاجة محتاجها.",
            "تمام، قول لي بالظبط إيه اللي محتاج تعرفه؟"
        ],
        answers: {
            "عايز": ["تقصد بخصوص إيه بالظبط؟", "عايز مساعدة في حاجة معينة؟"],
            "مش عارف": ["مش مشكلة، هساعدك تفهم", "إيه اللي مش عارفه؟"],
            "عندي سؤال": ["تفضل، أنا مستعد للإجابة", "هات سؤالك وهشوف أزاي أساعدك"],
            "فين": ["تقصد مكان معين؟", "ممكن توضح أكتر؟"],
            "ازاي": ["هشرح لك الخطوات بالتفصيل", "عايز توضيح لطريقة عمل حاجة معينة؟"],
            "ليه": ["هذا يعتمد على عدة عوامل...", "هناك أسباب متعددة..."],
            "هتعمل ايه": ["هساعدك بحل المشكلة", "هقدم لك النصيحة المناسبة"],
            "عامل ايه": ["الحمد لله، أنا بخير. إنت عامل إيه؟", "أنا دايماً جاهز لمساعدتك"]
        }
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

// بيانات الترجمة (مبسطة)
const translationData = {
    "hello": "مرحباً",
    "thank you": "شكراً لك",
    "how are you": "كيف حالك",
    "what is your name": "ما هو اسمك",
    "islam": "الإسلام",
    "prayer": "الصلاة",
    "quran": "القرآن الكريم",
    "science": "العلم",
    "medicine": "الطب",
    "engineering": "الهندسة",
    "computer": "الحاسوب",
    "business": "إدارة الأعمال",
    "law": "القانون",
    "education": "التربية",
    "الله أكبر": "God is great",
    "الحمد لله": "Praise be to God",
    "الصلاة": "Prayer",
    "الصيام": "Fasting",
    "الزكاة": "Zakat",
    "الحج": "Hajj"
};

// متغيرات التطبيق
const app = {
    currentUser: null,
    chatHistory: [],
    aiAvatar: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
    aiStyle: "islamic",
    currentTopic: null,
    theme: "default",
    currentSurah: null,
    currentScienceCategory: null
};

// عناصر DOM
const elements = {
    // الروابط
    chatLink: document.getElementById('chat-link'),
    quranLink: document.getElementById('quran-link'),
    scienceLink: document.getElementById('science-link'),
    settingsLink: document.getElementById('settings-link'),
    
    // المحتوى
    chatContent: document.getElementById('chat-content'),
    quranContent: document.getElementById('quran-content'),
    scienceContent: document.getElementById('science-content'),
    settingsContent: document.getElementById('settings-content'),
    
    // الأزرار
    loginBtn: document.getElementById('login-btn'),
    registerBtn: document.getElementById('register-btn'),
    logoutBtn: document.getElementById('logout-btn'),
    sendBtn: document.getElementById('send-btn'),
    newChatBtn: document.getElementById('new-chat-btn'),
    translateBtn: document.getElementById('translate-btn'),
    
    // النماذج
    loginForm: document.getElementById('login-form'),
    registerForm: document.getElementById('register-form'),
    
    // النوافذ المنبثقة
    loginModal: document.getElementById('login-modal'),
    registerModal: document.getElementById('register-modal'),
    translateModal: document.getElementById('translate-modal'),
    
    // العناصر الأخرى
    authButtons: document.getElementById('auth-buttons'),
    userProfile: document.getElementById('user-profile'),
    usernameDisplay: document.getElementById('username-display'),
    userInput: document.getElementById('user-input'),
    chatMessages: document.getElementById('chat-messages'),
    aiStyleSelect: document.getElementById('ai-style'),
    aiAvatarSelect: document.getElementById('ai-avatar'),
    themeSelect: document.getElementById('theme'),
    surahSelect: document.getElementById('surah-select'),
    playAyah: document.getElementById('play-ayah'),
    surahName: document.getElementById('surah-name'),
    surahMeta: document.getElementById('surah-meta'),
    ayahsContainer: document.getElementById('ayahs-container'),
    scienceCategories: document.querySelectorAll('.category-card'),
    scienceTopics: document.getElementById('science-topics'),
    translateInput: document.getElementById('translate-input'),
    translateOutput: document.getElementById('translate-output'),
    translateFrom: document.getElementById('translate-from'),
    translateTo: document.getElementById('translate-to'),
    doTranslate: document.getElementById('do-translate'),
    copyTranslation: document.getElementById('copy-translation')
};

// تهيئة التطبيق
function init() {
    // تحميل بيانات المستخدم من localStorage
    loadUser();
    
    // إعداد معالجات الأحداث
    setupEventListeners();
    
    // عرض صفحة الدردشة افتراضيًا
    showContent('chat');
    
    // تحميل قائمة السور
    loadSurahList();
    
    // تطبيق السمة المختارة
    applyTheme();
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
        
        // تعبئة بيانات المستخدم في الإعدادات
        if (elements.usernameInput) {
            elements.usernameInput.value = app.currentUser.username;
        }
        if (elements.emailInput) {
            elements.emailInput.value = app.currentUser.email;
        }
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
    
    elements.quranLink.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('quran');
    });
    
    elements.scienceLink.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('science');
    });
    
    elements.settingsLink.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('settings');
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
    
    // الترجمة
    elements.translateBtn.addEventListener('click', () => showModal('translate'));
    elements.doTranslate.addEventListener('click', translateText);
    elements.copyTranslation.addEventListener('click', copyTranslation);
    
    // القرآن الكريم
    elements.surahSelect.addEventListener('change', loadSurah);
    elements.playAyah.addEventListener('click', playAyah);
    
    // العلوم
    elements.scienceCategories.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            loadScienceTopics(category);
        });
    });
    
    // الإعدادات
    elements.aiStyleSelect.addEventListener('change', (e) => {
        app.aiStyle = e.target.value;
    });
    
    elements.aiAvatarSelect.addEventListener('change', (e) => {
        const avatarMap = {
            '1': 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png',
            '2': 'https://cdn-icons-png.flaticon.com/512/201/201634.png',
            '3': 'https://cdn-icons-png.flaticon.com/512/2785/2785473.png',
            '4': 'https://cdn-icons-png.flaticon.com/512/1141/1141435.png',
            '5': 'https://cdn-icons-png.flaticon.com/512/2936/2936886.png'
        };
        app.aiAvatar = avatarMap[e.target.value];
        document.querySelectorAll('.ai-info img, .ai-message img').forEach(img => {
            img.src = app.aiAvatar;
        });
    });
    
    elements.themeSelect.addEventListener('change', (e) => {
        app.theme = e.target.value;
        applyTheme();
    });
    
    elements.saveSettings.addEventListener('click', saveSettings);
    
    // النماذج
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
        case 'quran':
            elements.quranContent.classList.add('active');
            elements.quranLink.classList.add('active');
            break;
        case 'science':
            elements.scienceContent.classList.add('active');
            elements.scienceLink.classList.add('active');
            break;
        case 'settings':
            elements.settingsContent.classList.add('active');
            elements.settingsLink.classList.add('active');
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
        case 'translate':
            elements.translateModal.classList.add('active');
            break;
    }
}

// تحميل قائمة السور
function loadSurahList() {
    knowledgeBase.quran.surahs.forEach((surah, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${surah.name} (${surah.type}) - ${surah.ayahs} آيات`;
        elements.surahSelect.appendChild(option);
    });
}

// تحميل السورة المحددة
function loadSurah() {
    const surahIndex = elements.surahSelect.value;
    if (!surahIndex) return;
    
    const surah = knowledgeBase.quran.surahs[surahIndex];
    app.currentSurah = surah;
    
    elements.surahName.textContent = `سورة ${surah.name}`;
    elements.surahMeta.textContent = `${surah.type} - ${surah.ayahs} آية - الصفحة ${surah.startPage}`;
    
    const ayahs = knowledgeBase.quran.getAyahs(surahIndex);
    elements.ayahsContainer.innerHTML = '';
    
    ayahs.forEach((ayah, index) => {
        const ayahElement = document.createElement('div');
        ayahElement.className = 'ayah';
        ayahElement.innerHTML = `
            <span class="ayah-text">${ayah}</span>
            <span class="ayah-number">${index + 1}</span>
        `;
        elements.ayahsContainer.appendChild(ayahElement);
    });
}

// تشغيل الآية (محاكاة)
function playAyah() {
    if (!app.currentSurah) return;
    
    showMessage('جاري تشغيل الآيات... سيتم تنزيل ميزة الاستماع الكاملة قريبًا', 'info');
}

// تحميل مواضيع العلم
function loadScienceTopics(category) {
    app.currentScienceCategory = category;
    
    // في التطبيق الحقيقي، هنا سيتم جلب المواضيع من قاعدة البيانات
    const topics = {
        medicine: ["التشريح", "الفزيولوجيا", "الكيمياء الحيوية", "علم الأدوية"],
        engineering: ["الهندسة المدنية", "الهندسة الميكانيكية", "الهندسة الكهربائية"],
        computer: ["البرمجة", "قواعد البيانات", "الذكاء الاصطناعي"],
        business: ["المحاسبة", "التسويق", "الإدارة المالية"],
        law: ["القانون المدني", "القانون الجنائي", "القانون التجاري"],
        education: ["علم النفس التربوي", "طرق التدريس", "تقويم المناهج"]
    };
    
    let html = `<h3>مواضيع ${getCategoryName(category)}</h3><ul>`;
    
    topics[category].forEach(topic => {
        html += `<li onclick="askAboutTopic('${category}', '${topic}')">${topic}</li>`;
    });
    
    html += '</ul>';
    elements.scienceTopics.innerHTML = html;
}

// الحصول على اسم التخصص
function getCategoryName(category) {
    const names = {
        medicine: "الطب البشري",
        engineering: "الهندسة",
        computer: "علوم الحاسب",
        business: "إدارة الأعمال",
        law: "القانون",
        education: "التربية"
    };
    return names[category] || category;
}

// سؤال عن موضوع معين
function askAboutTopic(category, topic) {
    showContent('chat');
    
    const message = `أريد معلومات عن ${topic} في تخصص ${getCategoryName(category)}`;
    addMessageToChat(message, 'user');
    
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
        
        // الحصول على الرد المناسب
        const response = getScienceResponse(category, topic);
        
        // إضافة رد الذكاء الاصطناعي
        addMessageToChat(response, 'ai');
    }, 1000 + Math.random() * 2000);
}

// الحصول على رد علمي
function getScienceResponse(category, topic) {
    // في التطبيق الحقيقي، هنا سيتم جلب الإجابة من قاعدة البيانات
    const responses = {
        medicine: {
            "التشريح": "علم التشريح يدرس تركيب الجسم البشري وأجهزته المختلفة. ينقسم إلى تشريح عياني (بالعين المجردة) وتشريح مجهري (بالمجهر).",
            "الفزيولوجيا": "علم وظائف الأعضاء يدرس كيفية عمل أجهزة الجسم المختلفة مثل الجهاز الهضمي، العصبي، الدوري وغيرها."
        },
        // ... إجابات للتخصصات الأخرى
    };
    
    return responses[category]?.[topic] || `ليس لدي معلومات كافية عن ${topic} حالياً. يمكنك طرح سؤال أكثر تحديداً.`;
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
    }, 1000 + Math.random() * 2000);
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
                    <p>السلام عليكم ورحمة الله وبركاته، أنا H.Ai المساعد الإسلامي الشامل. يمكنني:</p>
                    <ul class="suggestions-list">
                        <li>الرد على أسئلتك الشرعية وفق منهج السلف</li>
                        <li>حل مسائل علمية في مختلف التخصصات</li>
                        <li>تفسير آيات القرآن الكريم</li>
                        <li>الترجمة بين العربية والإنجليزية</li>
                        <li>الرد على الأسئلة باللهجة العامية</li>
                    </ul>
                </div>
            </div>
        `;
        app.chatHistory = [{
            sender: 'ai',
            message: 'السلام عليكم ورحمة الله وبركاته، أنا H.Ai المساعد الإسلامي الشامل. يمكنني مساعدتك في العديد من المجالات الشرعية والعلمية.',
            timestamp: new Date().toISOString()
        }];
        app.currentTopic = null;
    }
}

// الحصول على رد من الذكاء الاصطناعي
function getAIResponse(prompt) {
    // تحويل السؤال إلى أحرف صغيرة لإزالة الحساسية لحالة الأحرف
    const lowerPrompt = prompt.toLowerCase();
    
    // التحقق من اللهجة العامية أولاً
    if (isColloquial(prompt)) {
        return getColloquialResponse(prompt);
    }
    
    // البحث عن تطابق في أنماط الأسئلة
    for (const category in knowledgeBase) {
        if (category === 'default' || category === 'colloquial') continue;
        
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

// التحقق من اللهجة العامية
function isColloquial(message) {
    for (const pattern of knowledgeBase.colloquial.patterns) {
        if (message.includes(pattern)) {
            return true;
        }
    }
    return false;
}

// الحصول على رد باللهجة العامية
function getColloquialResponse(message) {
    for (const [pattern, responses] of Object.entries(knowledgeBase.colloquial.answers)) {
        if (message.includes(pattern)) {
            return getRandomResponse(responses);
        }
    }
    return getRandomResponse(knowledgeBase.colloquial.responses);
}

// الحصول على رد عشوائي من مجموعة الردود
function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

// الترجمة
function translateText() {
    const text = elements.translateInput.value.trim();
    if (!text) return;
    
    const from = elements.translateFrom.value;
    const to = elements.translateTo.value;
    
    const translated = translate(text, from, to);
    elements.translateOutput.value = translated;
}

// دالة الترجمة الأساسية
function translate(text, from, to) {
    if (from === 'en' && to === 'ar') {
        // ترجمة من الإنجليزية إلى العربية
        return translationData[text.toLowerCase()] || "لا توجد ترجمة متاحة لهذه الكلمة";
    } else if (from === 'ar' && to === 'en') {
        // ترجمة من العربية إلى الإنجليزية
        const entry = Object.entries(translationData).find(([key, val]) => val === text);
        return entry ? entry[0] : "No translation available for this word";
    }
    return text;
}

// نسخ الترجمة
function copyTranslation() {
    elements.translateOutput.select();
    document.execCommand('copy');
    showMessage('تم نسخ الترجمة', 'success');
}

// تطبيق السمة المختارة
function applyTheme() {
    // إزالة جميع السمات الحالية
    document.body.classList.remove('theme-default', 'theme-green', 'theme-purple', 'theme-dark');
    
    // إضافة السمة المختارة
    document.body.classList.add(`theme-${app.theme}`);
}

// حفظ الإعدادات
function saveSettings() {
    if (!app.currentUser) return;
    
    const username = elements.usernameInput.value.trim();
    const email = elements.emailInput.value.trim();
    const password = elements.passwordInput.value.trim();
    
    if (username) app.currentUser.username = username;
    if (email) app.currentUser.email = email;
    if (password) app.currentUser.password = password;
    
    localStorage.setItem('HAi_user', JSON.stringify(app.currentUser));
    updateAuthUI();
    
    showMessage('تم حفظ الإعدادات بنجاح', 'success');
}

// معالجة تسجيل الدخول
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    const users = JSON.parse(localStorage.getItem('HAi_users')) || [];
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        app.currentUser = user;
        localStorage.setItem('HAi_user', JSON.stringify(user));
        updateAuthUI();
        elements.loginModal.classList.remove('active');
        
        e.target.reset();
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
    
    if (password !== confirmPassword) {
        showMessage('كلمة المرور وتأكيدها غير متطابقين', 'error');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('HAi_users')) || [];
    if (users.some(u => u.username === username)) {
        showMessage('اسم المستخدم موجود بالفعل', 'error');
        return;
    }
    
    const newUser = {
        username,
        email,
        password,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('HAi_users', JSON.stringify(users));
    
    app.currentUser = newUser;
    localStorage.setItem('HAi_user', JSON.stringify(newUser));
    updateAuthUI();
    elements.registerModal.classList.remove('active');
    
    e.target.reset();
    showMessage('تم إنشاء الحساب بنجاح', 'success');
}

// تسجيل الخروج
function logout() {
    app.currentUser = null;
    localStorage.removeItem('HAi_user');
    updateAuthUI();
    showMessage('تم تسجيل الخروج بنجاح', 'success');
}

// عرض رسالة للمستخدم
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `user-message floating ${type}`;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', init);

// جعل الدوال متاحة عالمياً للاستدعاء من HTML
window.askAboutTopic = askAboutTopic;
window.copyTranslation = copyTranslation;
