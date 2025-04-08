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
    
    // القرآن الكريم (موسع مع تفسير الطبري)
    quran: {
        patterns: ["عدد سور القرآن", "أطول سورة في القرآن", "أقصر سورة في القرآن", "ما هو القرآن", "أول سورة نزلت", "آخر سورة نزلت", "أطول آية في القرآن", "ما هي السورة التي تسمى قلب القرآن"],
        responses: [
            "القرآن الكريم هو كلام الله المنزل على محمد ﷺ المتعبد بتلاوته، المنقول إلينا بالتواتر. عدد سوره 114 سورة، أطولها سورة البقرة (286 آية)، وأقصرها سورة الكوثر (3 آيات). أول ما نزل من القرآن أول سورة العلق، وآخر ما نزل سورة النصر.",
            "أطول آية في القرآن هي آية الدين في سورة البقرة (آية 282). والسورة التي تسمى قلب القرآن هي سورة يس، كما ورد في الحديث: 'إن لكل شيء قلبًا، وقلب القرآن يس'."
        ],
        surahs: [
            {name: "الفاتحة", ayahs: 7, type: "مكية", startPage: 1, juz: 1},
            {name: "البقرة", ayahs: 286, type: "مدنية", startPage: 2, juz: [1,2,3]},
            {name: "آل عمران", ayahs: 200, type: "مدنية", startPage: 50, juz: [3,4]},
            {name: "النساء", ayahs: 176, type: "مدنية", startPage: 77, juz: [4,5,6]},
            {name: "المائدة", ayahs: 120, type: "مدنية", startPage: 106, juz: [6,7]},
            {name: "الأنعام", ayahs: 165, type: "مكية", startPage: 128, juz: [7,8]},
            {name: "الأعراف", ayahs: 206, type: "مكية", startPage: 151, juz: [8,9]},
            {name: "الأنفال", ayahs: 75, type: "مدنية", startPage: 177, juz: [9,10]},
            {name: "التوبة", ayahs: 129, type: "مدنية", startPage: 187, juz: [10,11]},
            {name: "يونس", ayahs: 109, type: "مكية", startPage: 208, juz: [11]},
            {name: "هود", ayahs: 123, type: "مكية", startPage: 221, juz: [11,12]},
            {name: "يوسف", ayahs: 111, type: "مكية", startPage: 235, juz: [12,13]},
            {name: "الرعد", ayahs: 43, type: "مدنية", startPage: 249, juz: [13]},
            {name: "إبراهيم", ayahs: 52, type: "مكية", startPage: 255, juz: [13]},
            {name: "الحجر", ayahs: 99, type: "مكية", startPage: 262, juz: [14]},
            {name: "النحل", ayahs: 128, type: "مكية", startPage: 267, juz: [14]},
            {name: "الإسراء", ayahs: 111, type: "مكية", startPage: 282, juz: [15]},
            {name: "الكهف", ayahs: 110, type: "مكية", startPage: 293, juz: [15,16]},
            {name: "مريم", ayahs: 98, type: "مكية", startPage: 305, juz: [16]},
            {name: "طه", ayahs: 135, type: "مكية", startPage: 312, juz: [16]},
            {name: "الأنبياء", ayahs: 112, type: "مكية", startPage: 322, juz: [17]},
            {name: "الحج", ayahs: 78, type: "مدنية", startPage: 332, juz: [17]},
            {name: "المؤمنون", ayahs: 118, type: "مكية", startPage: 342, juz: [18]},
            {name: "النور", ayahs: 64, type: "مدنية", startPage: 350, juz: [18]},
            {name: "الفرقان", ayahs: 77, type: "مكية", startPage: 359, juz: [18,19]},
            {name: "الشعراء", ayahs: 227, type: "مكية", startPage: 367, juz: [19]},
            {name: "النمل", ayahs: 93, type: "مكية", startPage: 377, juz: [19,20]},
            {name: "القصص", ayahs: 88, type: "مكية", startPage: 385, juz: [20]},
            {name: "العنكبوت", ayahs: 69, type: "مكية", startPage: 396, juz: [20,21]},
            {name: "الروم", ayahs: 60, type: "مكية", startPage: 404, juz: [21]},
            {name: "لقمان", ayahs: 34, type: "مكية", startPage: 411, juz: [21]},
            {name: "السجدة", ayahs: 30, type: "مكية", startPage: 415, juz: [21]},
            {name: "الأحزاب", ayahs: 73, type: "مدنية", startPage: 418, juz: [21,22]},
            {name: "سبأ", ayahs: 54, type: "مكية", startPage: 428, juz: [22]},
            {name: "فاطر", ayahs: 45, type: "مكية", startPage: 434, juz: [22]},
            {name: "يس", ayahs: 83, type: "مكية", startPage: 440, juz: [22,23]},
            {name: "الصافات", ayahs: 182, type: "مكية", startPage: 446, juz: [23]},
            {name: "ص", ayahs: 88, type: "مكية", startPage: 453, juz: [23]},
            {name: "الزمر", ayahs: 75, type: "مكية", startPage: 458, juz: [23,24]},
            {name: "غافر", ayahs: 85, type: "مكية", startPage: 467, juz: [24]},
            {name: "فصلت", ayahs: 54, type: "مكية", startPage: 477, juz: [24,25]},
            {name: "الشورى", ayahs: 53, type: "مكية", startPage: 483, juz: [25]},
            {name: "الزخرف", ayahs: 89, type: "مكية", startPage: 489, juz: [25]},
            {name: "الدخان", ayahs: 59, type: "مكية", startPage: 496, juz: [25]},
            {name: "الجاثية", ayahs: 37, type: "مكية", startPage: 499, juz: [25]},
            {name: "الأحقاف", ayahs: 35, type: "مكية", startPage: 502, juz: [26]},
            {name: "محمد", ayahs: 38, type: "مدنية", startPage: 507, juz: [26]},
            {name: "الفتح", ayahs: 29, type: "مدنية", startPage: 511, juz: [26]},
            {name: "الحجرات", ayahs: 18, type: "مدنية", startPage: 515, juz: [26]},
            {name: "ق", ayahs: 45, type: "مكية", startPage: 518, juz: [26]},
            {name: "الذاريات", ayahs: 60, type: "مكية", startPage: 520, juz: [26,27]},
            {name: "الطور", ayahs: 49, type: "مكية", startPage: 523, juz: [27]},
            {name: "النجم", ayahs: 62, type: "مكية", startPage: 526, juz: [27]},
            {name: "القمر", ayahs: 55, type: "مكية", startPage: 528, juz: [27]},
            {name: "الرحمن", ayahs: 78, type: "مدنية", startPage: 531, juz: [27]},
            {name: "الواقعة", ayahs: 96, type: "مكية", startPage: 534, juz: [27]},
            {name: "الحديد", ayahs: 29, type: "مدنية", startPage: 537, juz: [27]},
            {name: "المجادلة", ayahs: 22, type: "مدنية", startPage: 542, juz: [28]},
            {name: "الحشر", ayahs: 24, type: "مدنية", startPage: 545, juz: [28]},
            {name: "الممتحنة", ayahs: 13, type: "مدنية", startPage: 549, juz: [28]},
            {name: "الصف", ayahs: 14, type: "مدنية", startPage: 551, juz: [28]},
            {name: "الجمعة", ayahs: 11, type: "مدنية", startPage: 553, juz: [28]},
            {name: "المنافقون", ayahs: 11, type: "مدنية", startPage: 554, juz: [28]},
            {name: "التغابن", ayahs: 18, type: "مدنية", startPage: 556, juz: [28]},
            {name: "الطلاق", ayahs: 12, type: "مدنية", startPage: 558, juz: [28]},
            {name: "التحريم", ayahs: 12, type: "مدنية", startPage: 560, juz: [28]},
            {name: "الملك", ayahs: 30, type: "مكية", startPage: 562, juz: [29]},
            {name: "القلم", ayahs: 52, type: "مكية", startPage: 564, juz: [29]},
            {name: "الحاقة", ayahs: 52, type: "مكية", startPage: 566, juz: [29]},
            {name: "المعارج", ayahs: 44, type: "مكية", startPage: 568, juz: [29]},
            {name: "نوح", ayahs: 28, type: "مكية", startPage: 570, juz: [29]},
            {name: "الجن", ayahs: 28, type: "مكية", startPage: 572, juz: [29]},
            {name: "المزمل", ayahs: 20, type: "مكية", startPage: 574, juz: [29]},
            {name: "المدثر", ayahs: 56, type: "مكية", startPage: 575, juz: [29]},
            {name: "القيامة", ayahs: 40, type: "مكية", startPage: 577, juz: [29]},
            {name: "الإنسان", ayahs: 31, type: "مدنية", startPage: 578, juz: [29]},
            {name: "المرسلات", ayahs: 50, type: "مكية", startPage: 580, juz: [29]},
            {name: "النبأ", ayahs: 40, type: "مكية", startPage: 582, juz: [30]},
            {name: "النازعات", ayahs: 46, type: "مكية", startPage: 583, juz: [30]},
            {name: "عبس", ayahs: 42, type: "مكية", startPage: 585, juz: [30]},
            {name: "التكوير", ayahs: 29, type: "مكية", startPage: 586, juz: [30]},
            {name: "الانفطار", ayahs: 19, type: "مكية", startPage: 587, juz: [30]},
            {name: "المطففين", ayahs: 36, type: "مكية", startPage: 587, juz: [30]},
            {name: "الانشقاق", ayahs: 25, type: "مكية", startPage: 589, juz: [30]},
            {name: "البروج", ayahs: 22, type: "مكية", startPage: 590, juz: [30]},
            {name: "الطارق", ayahs: 17, type: "مكية", startPage: 591, juz: [30]},
            {name: "الأعلى", ayahs: 19, type: "مكية", startPage: 591, juz: [30]},
            {name: "الغاشية", ayahs: 26, type: "مكية", startPage: 592, juz: [30]},
            {name: "الفجر", ayahs: 30, type: "مكية", startPage: 593, juz: [30]},
            {name: "البلد", ayahs: 20, type: "مكية", startPage: 594, juz: [30]},
            {name: "الشمس", ayahs: 15, type: "مكية", startPage: 595, juz: [30]},
            {name: "الليل", ayahs: 21, type: "مكية", startPage: 595, juz: [30]},
            {name: "الضحى", ayahs: 11, type: "مكية", startPage: 596, juz: [30]},
            {name: "الشرح", ayahs: 8, type: "مكية", startPage: 596, juz: [30]},
            {name: "التين", ayahs: 8, type: "مكية", startPage: 597, juz: [30]},
            {name: "العلق", ayahs: 19, type: "مكية", startPage: 597, juz: [30]},
            {name: "القدر", ayahs: 5, type: "مكية", startPage: 598, juz: [30]},
            {name: "البينة", ayahs: 8, type: "مدنية", startPage: 598, juz: [30]},
            {name: "الزلزلة", ayahs: 8, type: "مدنية", startPage: 599, juz: [30]},
            {name: "العاديات", ayahs: 11, type: "مكية", startPage: 599, juz: [30]},
            {name: "القارعة", ayahs: 11, type: "مكية", startPage: 600, juz: [30]},
            {name: "التكاثر", ayahs: 8, type: "مكية", startPage: 600, juz: [30]},
            {name: "العصر", ayahs: 3, type: "مكية", startPage: 601, juz: [30]},
            {name: "الهمزة", ayahs: 9, type: "مكية", startPage: 601, juz: [30]},
            {name: "الفيل", ayahs: 5, type: "مكية", startPage: 601, juz: [30]},
            {name: "قريش", ayahs: 4, type: "مكية", startPage: 602, juz: [30]},
            {name: "الماعون", ayahs: 7, type: "مكية", startPage: 602, juz: [30]},
            {name: "الكوثر", ayahs: 3, type: "مكية", startPage: 602, juz: [30]},
            {name: "الكافرون", ayahs: 6, type: "مكية", startPage: 603, juz: [30]},
            {name: "النصر", ayahs: 3, type: "مدنية", startPage: 603, juz: [30]},
            {name: "المسد", ayahs: 5, type: "مكية", startPage: 603, juz: [30]},
            {name: "الإخلاص", ayahs: 4, type: "مكية", startPage: 604, juz: [30]},
            {name: "الفلق", ayahs: 5, type: "مكية", startPage: 604, juz: [30]},
            {name: "الناس", ayahs: 6, type: "مكية", startPage: 604, juz: [30]}
        ],
        getAyahs: async function(surahNumber) {
            try {
                const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`);
                const data = await response.json();
                
                if (data.code === 200 && data.status === "OK") {
                    return data.data.ayahs.map(ayah => ayah.text);
                }
                return ["لا يمكن تحميل الآيات حالياً، يرجى المحاولة لاحقاً"];
            } catch (error) {
                console.error("Error fetching Quran:", error);
                return ["حدث خطأ أثناء جلب الآيات"];
            }
        },
        getTafsir: function(surahIndex, ayahNumber, tafsirType) {
            const tafsirs = {
                "tabari": {
                    0: {
                        1: "تفسير الطبري للفاتحة: البسملة هي آية من الفاتحة ومن كل سورة، وهي استفتاح الكلام تبركًا بها.",
                        2: "تفسير الطبري: الحمد لله ثناء على الله بما هو أهله، ورب العالمين أي مالك جميع الخلق."
                    },
                    1: {
                        1: "تفسير الطبري: (الم) الله أعلم بمراده بهذه الحروف المقطعة.",
                        2: "تفسير الطبري: ذلك الكتاب أي هذا القرآن لا ريب فيه أنه من عند الله."
                    }
                },
                "ibn-kathir": {
                    0: {
                        1: "تفسير ابن كثير: البسملة آية من الفاتحة، وهي من القرآن بإجماع العلماء.",
                        2: "تفسير ابن كثير: الحمد لله ثناء أثنى به على نفسه، وفي ضمنه أمر عباده أن يثنوا عليه."
                    }
                },
                "qurtubi": {
                    0: {
                        1: "تفسير القرطبي: البسملة آية من الفاتحة عند الشافعي، واجبة القراءة في الصلاة.",
                        2: "تفسير القرطبي: الحمد لله هو الثناء باللسان على الجميل الاختياري."
                    }
                },
                "saadi": {
                    0: {
                        1: "تفسير السعدي: البسملة تذكير للعبد برحمة الله ولطفه قبل كل شيء.",
                        2: "تفسير السعدي: الحمد لله هو الثناء على الله بصفات الكمال وبأفعاله الدائرة بين الفضل والعدل."
                    }
                }
            };
            
            return tafsirs[tafsirType]?.[surahIndex]?.[ayahNumber] || "التفسير غير متوفر حاليًا لهذه الآية.";
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
    currentScienceCategory: null,
    bookmarks: [],
    reminders: [],
    currentTafsir: "tabari"
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
    remindersBtn: document.getElementById('reminders-btn'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    
    // النماذج
    loginForm: document.getElementById('login-form'),
    registerForm: document.getElementById('register-form'),
    
    // النوافذ المنبثقة
    loginModal: document.getElementById('login-modal'),
    registerModal: document.getElementById('register-modal'),
    translateModal: document.getElementById('translate-modal'),
    remindersModal: document.getElementById('reminders-modal'),
    tafsirModal: document.getElementById('tafsir-modal'),
    
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
    reciterSelect: document.getElementById('reciter-select'),
    playSurah: document.getElementById('play-surah'),
    tafsirBtn: document.getElementById('tafsir-btn'),
    bookmarkBtn: document.getElementById('bookmark-btn'),
    surahName: document.getElementById('surah-name'),
    surahType: document.getElementById('surah-type'),
    surahAyahs: document.getElementById('surah-ayahs'),
    surahPage: document.getElementById('surah-page'),
    ayahsContainer: document.getElementById('ayahs-container'),
    scienceCategories: document.querySelectorAll('.category-card'),
    scienceTopics: document.getElementById('science-topics'),
    translateInput: document.getElementById('translate-input'),
    translateOutput: document.getElementById('translate-output'),
    translateFrom: document.getElementById('translate-from'),
    translateTo: document.getElementById('translate-to'),
    doTranslate: document.getElementById('do-translate'),
    copyTranslation: document.getElementById('copy-translation'),
    speakTranslation: document.getElementById('speak-translation'),
    translationStatus: document.getElementById('translation-status'),
    quranSearch: document.getElementById('quran-search'),
    searchBtn: document.getElementById('search-btn'),
    tafsirTitle: document.getElementById('tafsir-title'),
    tafsirContent: document.getElementById('tafsir-content'),
    tafsirTabs: document.querySelectorAll('.tafsir-tab'),
    reminderItems: document.querySelectorAll('.reminder-item'),
    setReminderBtns: document.querySelectorAll('.set-reminder'),
    usernameInput: document.getElementById('username-input'),
    emailInput: document.getElementById('email-input'),
    passwordInput: document.getElementById('password-input'),
    saveSettings: document.getElementById('save-settings')
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
    
    // تحميل الإشارات المرجعية
    loadBookmarks();
    
    // تحميل التذكيرات
    loadReminders();
    
    // ضبط الواجهة للهاتف
    adjustForMobile();
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
    elements.speakTranslation.addEventListener('click', speakTranslation);
    
    // التذكيرات
    elements.remindersBtn.addEventListener('click', () => showModal('reminders'));
    
    // القرآن الكريم
    elements.surahSelect.addEventListener('change', loadSurah);
    elements.playSurah.addEventListener('click', playSurah);
    elements.tafsirBtn.addEventListener('click', showSurahTafsir);
    elements.bookmarkBtn.addEventListener('click', toggleBookmark);
    elements.searchBtn.addEventListener('click', searchQuran);
    elements.quranSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchQuran();
        }
    });
    
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
    
    // إغلاق النوافذ المنبثقة عند النقر خارج المحتوى
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModals();
            }
        });
    });
    
    // إغلاق النوافذ عند النقر على زر الإغلاق
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', closeModals);
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
    
    // تفسير القرآن
    elements.tafsirTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            elements.tafsirTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            app.currentTafsir = tab.getAttribute('data-tafsir');
            updateTafsirContent();
        });
    });
    
    // التذكيرات
    elements.setReminderBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const time = e.target.getAttribute('data-time');
            setReminder(time);
        });
    });
    
    // القائمة الجوالية
    elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // ضبط ارتفاع حقل النص تلقائياً
    elements.userInput.addEventListener('input', adjustTextareaHeight);
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
    
    // إغلاق القائمة الجوالية إذا كانت مفتوحة
    document.querySelector('.nav-links').classList.remove('active');
}

// عرض النافذة المنبثقة
function showModal(modal) {
    document.querySelectorAll('.modal').forEach(m => {
        m.classList.remove('active');
    });
    
    switch (modal) {
        case 'login':
            elements.loginModal.classList.add('active');
            document.getElementById('login-username').focus();
            break;
        case 'register':
            elements.registerModal.classList.add('active');
            document.getElementById('register-username').focus();
            break;
        case 'translate':
            elements.translateModal.classList.add('active');
            document.getElementById('translate-input').focus();
            break;
        case 'reminders':
            elements.remindersModal.classList.add('active');
            break;
        case 'tafsir':
            elements.tafsirModal.classList.add('active');
            break;
    }
    
    // منع التمرير عند فتح النافذة المنبثقة
    document.body.style.overflow = 'hidden';
}

// إغلاق النوافذ المنبثقة
function closeModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = '';
}

// تحميل قائمة السور
function loadSurahList() {
    knowledgeBase.quran.surahs.forEach((surah, index) => {
        const option = document.createElement('option');
        option.value = index + 1; // لأن API يبدأ السور من 1
        option.textContent = `${surah.name} (${surah.type}) - ${surah.ayahs} آيات`;
        elements.surahSelect.appendChild(option);
    });
}

// تحميل السورة المحددة
async function loadSurah() {
    const surahNumber = elements.surahSelect.value;
    if (!surahNumber) return;
    
    const surahIndex = surahNumber - 1; // لأن الفهرس يبدأ من 0
    const surah = knowledgeBase.quran.surahs[surahIndex];
    app.currentSurah = surah;
    
    elements.surahName.textContent = `سورة ${surah.name}`;
    elements.surahType.textContent = surah.type;
    elements.surahAyahs.textContent = `${surah.ayahs} آيات`;
    elements.surahPage.textContent = `الصفحة ${surah.startPage}`;
    
    elements.ayahsContainer.innerHTML = '<p>جاري تحميل الآيات...</p>';
    
    const ayahs = await knowledgeBase.quran.getAyahs(surahNumber);
    
    elements.ayahsContainer.innerHTML = '';
    
    ayahs.forEach((ayah, index) => {
        const ayahElement = document.createElement('div');
        ayahElement.className = 'ayah';
        ayahElement.innerHTML = `
            <span class="ayah-text">${ayah}</span>
            <span class="ayah-number">${index + 1}</span>
            <div class="ayah-actions">
                <button class="ayah-btn" onclick="playAyah(${index + 1})">
                    <i class="fas fa-play"></i>
                </button>
                <button class="ayah-btn" onclick="showAyahTafsir(${index + 1}, '${ayah.replace(/"/g, '&quot;')}')">
                    <i class="fas fa-book-open"></i>
                </button>
                <button class="ayah-btn" onclick="copyAyah(${index + 1}, '${ayah.replace(/"/g, '&quot;')}')">
                    <i class="fas fa-copy"></i>
                </button>
            </div>
        `;
        elements.ayahsContainer.appendChild(ayahElement);
    });
    
    // تحديث حالة الإشارة المرجعية
    updateBookmarkButton();
}

// تشغيل السورة (محاكاة)
function playSurah() {
    if (!app.currentSurah) return;
    
    const reciter = elements.reciterSelect.value;
    showMessage(`جاري تشغيل سورة ${app.currentSurah.name} بصوت القارئ ${getReciterName(reciter)}...`, 'info');
}

// تشغيل الآية (محاكاة)
function playAyah(ayahNumber) {
    if (!app.currentSurah) return;
    
    const reciter = elements.reciterSelect.value;
    showMessage(`جاري تشغيل الآية ${ayahNumber} من سورة ${app.currentSurah.name} بصوت القارئ ${getReciterName(reciter)}...`, 'info');
}

// الحصول على اسم القارئ
function getReciterName(reciterCode) {
    const reciters = {
        'ar.alafasy': 'مشاري العفاسي',
        'ar.abdulbasit': 'عبد الباسط عبد الصمد',
        'ar.husary': 'محمود خليل الحصري',
        'ar.minshawi': 'محمد صديق المنشاوي'
    };
    return reciters[reciterCode] || reciterCode;
}

// عرض تفسير السورة
function showSurahTafsir() {
    if (!app.currentSurah) return;
    
    elements.tafsirTitle.textContent = `تفسير سورة ${app.currentSurah.name}`;
    updateTafsirContent();
    showModal('tafsir');
}

// عرض تفسير الآية
function showAyahTafsir(ayahNumber, ayahText) {
    elements.tafsirTitle.textContent = `تفسير الآية ${ayahNumber}: ${ayahText.substring(0, 30)}...`;
    updateTafsirContent(ayahNumber);
    showModal('tafsir');
}

// تحديث محتوى التفسير
function updateTafsirContent(ayahNumber) {
    const surahIndex = elements.surahSelect.value - 1;
    if (surahIndex < 0) return;
    
    let tafsirText = '';
    
    if (ayahNumber) {
        tafsirText = knowledgeBase.quran.getTafsir(surahIndex, ayahNumber, app.currentTafsir);
    } else {
        // تفسير السورة كاملة
        const surah = knowledgeBase.quran.surahs[surahIndex];
        for (let i = 1; i <= surah.ayahs; i++) {
            const ayahTafsir = knowledgeBase.quran.getTafsir(surahIndex, i, app.currentTafsir);
            if (ayahTafsir) {
                tafsirText += `<p><strong>تفسير الآية ${i}:</strong> ${ayahTafsir}</p>`;
            }
        }
    }
    
    elements.tafsirContent.innerHTML = tafsirText || "التفسير غير متوفر حاليًا لهذه الآية.";
}

// نسخ الآية
function copyAyah(ayahNumber, ayahText) {
    navigator.clipboard.writeText(ayahText);
    showMessage(`تم نسخ الآية ${ayahNumber}`, 'success');
}

// البحث في القرآن
function searchQuran() {
    const query = elements.quranSearch.value.trim();
    if (!query) return;
    
    showMessage(`جاري البحث عن "${query}" في القرآن الكريم...`, 'info');
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
        education: ["علم النفس التربوي", "طرق التدريس", "تقويم المناهج"],
        physics: ["الميكانيكا الكلاسيكية", "الكهرومغناطيسية", "النظرية النسبية"],
        chemistry: ["الكيمياء العضوية", "الكيمياء غير عضوية", "الكيمياء التحليلية"]
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
        education: "التربية",
        physics: "الفيزياء",
        chemistry: "الكيمياء"
    };
    return names[category] || category;
}

// سؤال عن موضوع معين
function askAboutTopic(category, topic) {
    showContent('chat');
    
    const message = `أريد معلومات عن ${topic} في تخصص ${getCategoryName(category)}`;
    addMessageToChat(message, 'user');
    
    showTypingIndicator();
    
    setTimeout(() => {
        removeTypingIndicator();
        
        const response = getScienceResponse(category, topic);
        addMessageToChat(response, 'ai');
        
        if (response.length > 300) {
            addExpandButton();
        }
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
        physics: {
            "الميكانيكا الكلاسيكية": "الميكانيكا الكلاسيكية تدرس حركة الأجسام تحت تأثير القوى، وتشمل ثلاث قوانين أساسية لنيوتن: 1) قانون القصور الذاتي، 2) قانون التسارع (F=ma)، 3) قانون الفعل ورد الفعل.",
            "النظرية النسبية": "النظرية النسبية لأينشتاين نوعان: النسبية الخاصة (1905) وتدرس الأجسام المتحركة بسرعات ثابتة، والنسبية العامة (1915) وهي نظرية الجاذبية التي تصفها كتشوه في الزمكان."
        },
        chemistry: {
            "الكيمياء العضوية": "الكيمياء العضوية تدرس مركبات الكربون باستثناء أكاسيد الكربون والكربونات. تشمل دراسة الهيدروكربونات، المجموعات الوظيفية، التفاعلات العضوية مثل الإضافة، الاستبدال، الحذف."
        }
    };
    
    return responses[category]?.[topic] || `ليس لدي معلومات كافية عن ${topic} حالياً. يمكنك طرح سؤال أكثر تحديداً.`;
}

// إرسال رسالة
function sendMessage() {
    const message = elements.userInput.value.trim();
    if (!message) return;
    
    addMessageToChat(message, 'user');
    elements.userInput.value = '';
    adjustTextareaHeight();
    
    showTypingIndicator();
    
    const delay = calculateTypingDelay(message);
    
    setTimeout(() => {
        removeTypingIndicator();
        
        const response = getAIResponse(message);
        addMessageToChat(response, 'ai');
        
        if (response.length > 300) {
            addExpandButton();
        }
    }, delay);
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
    
    app.chatHistory.push({
        sender,
        message,
        timestamp: new Date().toISOString()
    });
}

// عرض مؤشر الكتابة
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message ai-message typing-indicator';
    typingDiv.innerHTML = `
        <img src="${app.aiAvatar}" alt="H.Ai Avatar">
        <div class="message-content">
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    elements.chatMessages.appendChild(typingDiv);
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

// إزالة مؤشر الكتابة
function removeTypingIndicator() {
    const typing = document.querySelector('.typing-indicator');
    if (typing) typing.remove();
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
                        <li>تلاوة وتفسير أي آية من القرآن الكريم</li>
                        <li>الرد على أسئلتك الشرعية وفق منهج السلف</li>
                        <li>حل مسائل علمية في مختلف التخصصات</li>
                        <li>تفسير آيات القرآن بتفاسير متعددة</li>
                        <li>الترجمة بين العربية والإنجليزية</li>
                        <li>تذكيرك بأوقات الصلاة والأذكار</li>
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
    const lowerPrompt = prompt.toLowerCase();
    
    // 1. التحقق من التحية أولاً
    if (isGreeting(lowerPrompt)) {
        return getRandomResponse(knowledgeBase.greeting.responses);
    }
    
    // 2. التحقق من اللهجة العامية
    if (isColloquial(prompt)) {
        return getColloquialResponse(prompt);
    }
    
    // 3. البحث في القرآن إذا طلب آية أو تفسير
    if (prompt.includes("آية") || prompt.includes("سورة") || prompt.includes("قرآن")) {
        return getQuranResponse(prompt);
    }
    
    // 4. البحث في التخصصات العلمية إذا كان هناك تخصص محدد
    if (app.currentScienceCategory) {
        const scienceResponse = getScienceResponse(app.currentScienceCategory, prompt);
        if (scienceResponse) return scienceResponse;
    }
    
    // 5. البحث في قاعدة المعرفة العامة
    for (const category in knowledgeBase) {
        if (category === 'default' || category === 'colloquial' || category === 'greeting') continue;
        
        const patterns = knowledgeBase[category].patterns;
        for (const pattern of patterns) {
            if (lowerPrompt.includes(pattern.toLowerCase())) {
                app.currentTopic = category;
                return getContextualResponse(category, prompt);
            }
        }
    }
    
    // 6. إذا كان هناك موضوع حالى، حاول الرد ضمنه
    if (app.currentTopic && knowledgeBase[app.currentTopic]) {
        return getContextualResponse(app.currentTopic, prompt);
    }
    
    // 7. الرد الافتراضي
    return getRandomResponse(knowledgeBase.default.responses);
}

// الحصول على رد متعلق بالقرآن
function getQuranResponse(prompt) {
    if (prompt.includes("تفسير")) {
        return "يمكنك عرض تفسير أي آية أو سورة من خلال الذهاب إلى قسم القرآن واختيار السورة ثم النقر على زر التفسير.";
    }
    
    if (prompt.includes("سورة الفاتحة")) {
        return "سورة الفاتحة هي أعظم سورة في القرآن، وتسمى بأم الكتاب والسبع المثاني. تحتوي على 7 آيات وهي مكية. تبدأ بـ 'بسم الله الرحمن الرحيم' وتشمل الثناء على الله وطلب الهداية إلى الصراط المستقيم.";
    }
    
    if (prompt.includes("آية الكرسي")) {
        return "آية الكرسي هي الآية 255 من سورة البقرة، وهي أعظم آية في القرآن. نصها: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ'";
    }
    
    return "يمكنك الذهاب إلى قسم القرآن الكريم لتلاوة أي سورة أو آية تريدها، كما يمكنك الاستماع إليها وقراءة تفسيرها.";
}

// التحقق من التحية
function isGreeting(message) {
    return knowledgeBase.greeting.patterns.some(pattern => message.includes(pattern));
}

// التحقق من اللهجة العامية
function isColloquial(message) {
    return knowledgeBase.colloquial.patterns.some(pattern => message.includes(pattern));
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

// الحصول على رد contextual
function getContextualResponse(category, prompt) {
    let response = getRandomResponse(knowledgeBase[category].responses);
    
    if (response.length < 150 && knowledgeBase[category].responses.length > 1) {
        const additionalInfo = knowledgeBase[category].responses.find(r => r !== response);
        if (additionalInfo) {
            response += "\n\n" + additionalInfo;
        }
    }
    
    if (category === 'aqeedah' || category === 'fiqh' || category === 'hadith') {
        response += "\n\n📚 المراجع:\n- كتاب التوحيد لابن خزيمة\n- فتح الباري لابن حجر\n- مجموع فتاوى ابن تيمية";
    }
    
    return response;
}

// الحصول على رد عشوائي من مجموعة الردود
function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

// الترجمة
async function translateText() {
    const text = elements.translateInput.value.trim();
    if (!text) return;
    
    const from = elements.translateFrom.value;
    const to = elements.translateTo.value;
    
    elements.translationStatus.textContent = "جاري الترجمة...";
    
    try {
        const response = await fetch('https://libretranslate.de/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                q: text,
                source: from,
                target: to
            })
        });
        
        const data = await response.json();
        
        if (response.ok && data.translatedText) {
            elements.translateOutput.value = data.translatedText;
            elements.translationStatus.textContent = "تمت الترجمة بنجاح";
        } else {
            elements.translationStatus.textContent = "فشل في الترجمة، جرب مرة أخرى";
        }
    } catch (error) {
        console.error("Translation error:", error);
        elements.translationStatus.textContent = "حدث خطأ أثناء الترجمة";
        elements.translateOutput.value = translate(text, from, to); // استخدام الترجمة المحلية كبديل
    }
}

// دالة الترجمة الأساسية (محلية)
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

// نطق الترجمة
function speakTranslation() {
    const text = elements.translateOutput.value;
    if (!text) return;
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = elements.translateTo.value === 'ar' ? 'ar-SA' : 'en-US';
    speechSynthesis.speak(utterance);
}

// تطبيق السمة المختارة
function applyTheme() {
    document.body.classList.remove('theme-default', 'theme-green', 'theme-purple', 'theme-dark');
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
    
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    
    if (!username || !password) {
        showMessage('يرجى إدخال اسم المستخدم وكلمة المرور', 'error');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('HAi_users')) || [];
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        app.currentUser = user;
        localStorage.setItem('HAi_user', JSON.stringify(user));
        updateAuthUI();
        closeModals();
        
        e.target.reset();
        showMessage('تم تسجيل الدخول بنجاح', 'success');
    } else {
        showMessage('اسم المستخدم أو كلمة المرور غير صحيحة', 'error');
        document.getElementById('login-password').value = '';
        document.getElementById('login-password').focus();
    }
}

// معالجة التسجيل
function handleRegister(e) {
    e.preventDefault();
    
    const username = document.getElementById('register-username').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    // التحقق من صحة المدخلات
    if (!username || !email || !password || !confirmPassword) {
        showMessage('يرجى ملء جميع الحقول', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showMessage('كلمة المرور وتأكيدها غير متطابقين', 'error');
        document.getElementById('register-confirm-password').value = '';
        document.getElementById('register-confirm-password').focus();
        return;
    }
    
    if (password.length < 6) {
        showMessage('كلمة المرور يجب أن تكون 6 أحرف على الأقل', 'error');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('HAi_users')) || [];
    if (users.some(u => u.username === username)) {
        showMessage('اسم المستخدم موجود بالفعل', 'error');
        document.getElementById('register-username').value = '';
        document.getElementById('register-username').focus();
        return;
    }
    
    if (users.some(u => u.email === email)) {
        showMessage('البريد الإلكتروني مستخدم بالفعل', 'error');
        document.getElementById('register-email').value = '';
        document.getElementById('register-email').focus();
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
    closeModals();
    
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

// تحميل الإشارات المرجعية
function loadBookmarks() {
    const bookmarks = localStorage.getItem('HAi_bookmarks');
    if (bookmarks) {
        app.bookmarks = JSON.parse(bookmarks);
    }
}

// حفظ الإشارات المرجعية
function saveBookmarks() {
    localStorage.setItem('HAi_bookmarks', JSON.stringify(app.bookmarks));
}

// تحديث زر الإشارة المرجعية
function updateBookmarkButton() {
    if (!app.currentSurah) return;
    
    const isBookmarked = app.bookmarks.some(b => b.surah === app.currentSurah.name);
    elements.bookmarkBtn.innerHTML = isBookmarked ? 
        '<i class="fas fa-bookmark"></i> إزالة من المحفوظات' : 
        '<i class="fas fa-bookmark"></i> حفظ الموضع';
}

// تبديل الإشارة المرجعية
function toggleBookmark() {
    if (!app.currentSurah) return;
    
    const index = app.bookmarks.findIndex(b => b.surah === app.currentSurah.name);
    
    if (index === -1) {
        app.bookmarks.push({
            surah: app.currentSurah.name,
            index: elements.surahSelect.value,
            timestamp: new Date().toISOString()
        });
        showMessage(`تم إضافة سورة ${app.currentSurah.name} إلى المحفوظات`, 'success');
    } else {
        app.bookmarks.splice(index, 1);
        showMessage(`تم إزالة سورة ${app.currentSurah.name} من المحفوظات`, 'info');
    }
    
    saveBookmarks();
    updateBookmarkButton();
}

// تحميل التذكيرات
function loadReminders() {
    const reminders = localStorage.getItem('HAi_reminders');
    if (reminders) {
        app.reminders = JSON.parse(reminders);
    }
}

// حفظ التذكيرات
function saveReminders() {
    localStorage.setItem('HAi_reminders', JSON.stringify(app.reminders));
}

// تعيين تذكير
function setReminder(time) {
    if (time === 'adaptive') {
        showMessage('سيتم تذكيرك بأذكار بعد الصلاة تلقائيًا عند دخول وقت الصلاة', 'info');
        return;
    }
    
    const reminder = {
        type: 'أذكار',
        time,
        active: true,
        createdAt: new Date().toISOString()
    };
    
    app.reminders.push(reminder);
    saveReminders();
    
    showMessage(`تم تعيين تذكير للأذكار الساعة ${time}`, 'success');
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

// ضبط ارتفاع حقل النص
function adjustTextareaHeight() {
    elements.userInput.style.height = 'auto';
    elements.userInput.style.height = elements.userInput.scrollHeight + 'px';
}

// حساب وقت الكتابة
function calculateTypingDelay(message) {
    const words = message.split(/\s+/).length;
    const baseDelay = 1000;
    const wordDelay = 150;
    const maxDelay = 5000;
    
    return Math.min(baseDelay + (words * wordDelay), maxDelay);
}

// إضافة زر التوسيع
function addExpandButton() {
    const lastMessage = elements.chatMessages.lastElementChild;
    if (lastMessage && lastMessage.classList.contains('ai-message')) {
        const expandBtn = document.createElement('button');
        expandBtn.className = 'expand-btn';
        expandBtn.innerHTML = '<i class="fas fa-expand"></i> عرض كامل الإجابة';
        expandBtn.onclick = () => {
            lastMessage.classList.toggle('expanded');
            expandBtn.innerHTML = lastMessage.classList.contains('expanded') ? 
                '<i class="fas fa-compress"></i> تصغير' : 
                '<i class="fas fa-expand"></i> عرض كامل الإجابة';
        };
        lastMessage.querySelector('.message-content').appendChild(expandBtn);
    }
}

// تبديل القائمة الجوالية
function toggleMobileMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// ضبط الواجهة للهاتف
function adjustForMobile() {
    if (window.innerWidth <= 768) {
        // إخفاء بعض العناصر غير الضرورية على الهاتف
        document.querySelectorAll('.chat-actions button span, .quran-controls button span').forEach(span => {
            span.style.display = 'none';
        });
        
        // تعديل حجم الخط
        document.body.style.fontSize = '14px';
        
        // تعديل حجم عناصر الإدخال
        document.querySelectorAll('input, select, textarea, button').forEach(el => {
            el.style.fontSize = '14px';
        });
    } else {
        // استعادة الإعدادات الأصلية
        document.querySelectorAll('.chat-actions button span, .quran-controls button span').forEach(span => {
            span.style.display = 'inline';
        });
        
        document.body.style.fontSize = '';
        document.querySelectorAll('input, select, textarea, button').forEach(el => {
            el.style.fontSize = '';
        });
    }
}

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', init);

// جعل الدوال متاحة عالمياً للاستدعاء من HTML
window.askAboutTopic = askAboutTopic;
window.copyTranslation = copyTranslation;
window.playAyah = playAyah;
window.showAyahTafsir = showAyahTafsir;
window.copyAyah = copyAyah;
