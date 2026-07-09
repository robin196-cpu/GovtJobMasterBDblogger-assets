// ২িট করে ভিন্ন ভিন্ন সাব-ক্যাটাগরি যুক্ত টেস্ট ডেটাবেজ (৪০টি প্রশ্ন)
const megaQuizDatabase = [
    // ==========================================
    // BANGLA (সন্ধি = ৫টি, সমাস = ৫টি)
    // ==========================================
    { "id": 1, "category": "Bangla", "subCategory": "সন্ধি", "question": "‘ইতস্তত’ শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?", "option1": "ইত + তত", "option2": "ইতঃ + তত", "option3": "ইতি + উতো", "option4": "ইতা + তত", "correct": 1 },
    { "id": 2, "category": "Bangla", "subCategory": "সন্ধি", "question": "‘গায়ক’- এর সঠিক সন্ধি বিচ্ছেদ কোনটি?", "option1": "গা + ওক", "option2": "গৈ + অক", "option3": "গে + অক", "option4": "গাই + ক", "correct": 1 },
    { "id": 3, "category": "Bangla", "subCategory": "সন্ধি", "question": "‘উচ্ছেদ’ শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?", "option1": "উৎ + ছেদ", "option2": "উচ + ছেদ", "option3": "উদ + ছেদ", "option4": "উ + চ্ছেদ", "correct": 0 },
    { "id": 4, "category": "Bangla", "subCategory": "সন্ধি", "question": "নিপাতনে সিদ্ধ সন্ধি কোনটি?", "option1": "তস্কর", "option2": "পদ্ধতি", "option3": "সদালাপ", "option4": "উদ্ধার", "correct": 0 },
    { "id": 5, "category": "Bangla", "subCategory": "সন্ধি", "question": "‘চলচ্চিত্র’ শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?", "option1": "চল + চিত্র", "option2": "চলৎ + চিত্র", "option3": "চলতি + চিত্র", "option4": "চলচ্ + চিত্র", "correct": 1 },
    
    { "id": 6, "category": "Bangla", "subCategory": "সমাস", "question": "‘সিংহাসন’ কোন সমাসের উদাহরণ?", "option1": "রূপক কর্মধারয়", "option2": "মধ্যপদলোপী কর্মধারয়", "option3": "উপমিত কর্মধারয়", "option4": "বহুব্রীহি", "correct": 1 },
    { "id": 7, "category": "Bangla", "subCategory": "সমাস", "question": "যে সমাসে সমস্যমান পদগুলোর কোনোটির অর্থ প্রধান না বুঝিয়ে অন্য পদকে বোঝায়, তাকে কী বলে?", "option1": "দ্বিগু", "option2": "দ্বন্দ্ব", "option3": "বহুব্রীহি", "option4": "তৎপুরুষ", "correct": 2 },
    { "id": 8, "category": "Bangla", "subCategory": "সমাস", "question": "‘উপকূল’-এর সঠিক সমাস নির্ণয় কোনটি এবং এটি কোন সমাস?", "option1": "কূলের সদৃশ (অব্যয়ীভাব)", "option2": "কূলের সমীপে (অব্যয়ীভাব)", "option3": "কূলের অভাব (অব্যয়ীভাব)", "option4": "কূলের অনুগামী (তৎপুরুষ)", "correct": 1 },
    { "id": 9, "category": "Bangla", "subCategory": "সমাস", "question": "‘জায়াপতি’ সমস্তপদটির সঠিক দ্বন্দ্ব সমাস কোনটি?", "option1": "জায়া ও পতি (দম্পতি)", "option2": "জায়ার পতি", "option3": "পতি ও জায়া", "option4": "জায়াসহ পতি", "correct": 0 },
    { "id": 10, "category": "Bangla", "subCategory": "সমাস", "question": "‘তুষারশুভ্র’ কোন সমাসের উদাহরণ?", "option1": "উপমান কর্মধারয়", "option2": "উপমিত কর্মধারয়", "option3": "রূপক কর্মধারয়", "option4": "ষষ্ঠী তৎপুরুষ", "correct": 0 },

    // ==========================================
    // ENGLISH (Parts of Speech = ৫টি, Tense & Right Verbs = ৫টি)
    // ==========================================
    { "id": 11, "category": "English", "subCategory": "Parts of Speech", "question": "Which of the following is an abstract noun?", "option1": "Book", "option2": "Honesty", "option3": "Water", "option4": "Team", "correct": 1 },
    { "id": 12, "category": "English", "subCategory": "Parts of Speech", "question": "Identify the word 'Fast' in: 'He runs fast'.", "option1": "Noun", "option2": "Adjective", "option3": "Adverb", "option4": "Verb", "correct": 2 },
    { "id": 13, "category": "English", "subCategory": "Parts of Speech", "question": "What parts of speech is the word 'Beautiful'?", "option1": "Noun", "option2": "Adjective", "option3": "Adverb", "option4": "Pronoun", "correct": 1 },
    { "id": 14, "category": "English", "subCategory": "Parts of Speech", "question": "Which of the following is a collective noun?", "option1": "Gold", "option2": "Boy", "option3": "Cattle", "option4": "Happiness", "correct": 2 },
    { "id": 15, "category": "English", "subCategory": "Parts of Speech", "question": "In 'She herself did the work', 'herself' is a/an —", "option1": "Emphatic pronoun", "option2": "Relative pronoun", "option3": "Possessive pronoun", "option4": "Demonstrative pronoun", "correct": 0 },
    
    { "id": 16, "category": "English", "subCategory": "Tense and Verbs", "question": "He _____ English for two hours. (Fill in the blank)", "option1": "is learning", "option2": "has been learning", "option3": "learnt", "option4": "learns", "correct": 1 },
    { "id": 17, "category": "English", "subCategory": "Tense and Verbs", "question": "The train _____ before I reached the station.", "option1": "left", "option2": "has left", "option3": "had left", "option4": "was leaving", "correct": 2 },
    { "id": 18, "category": "English", "subCategory": "Tense and Verbs", "question": "Identify the Future Perfect Tense form:", "option1": "I will do the work", "option2": "I will be doing the work", "option3": "I will have done the work", "option4": "I would do the work", "correct": 2 },
    { "id": 19, "category": "English", "subCategory": "Tense and Verbs", "question": "Neither of the two boys _____ present today.", "option1": "was", "option2": "were", "option3": "are", "option4": "have", "correct": 0 },
    { "id": 20, "category": "English", "subCategory": "Tense and Verbs", "question": "It is high time we _____ our bad habits.", "option1": "change", "option2": "changed", "option3": "will change", "option4": "have changed", "correct": 1 },

    // ==========================================
    // GENERAL KNOWLEDGE (ইতিহাস = ৫টি, ভূগোল ও পরিবেশ = ৫টি)
    // ==========================================
    { "id": 21, "category": "GK", "subCategory": "ইতিহাস", "question": "বাংলাদেশের স্বাধীনতার ইশতেহার কবে পাঠ করা হয়?", "option1": "৩ মার্চ ১৯৭১", "option2": "৭ মার্চ ১৯৭১", "option3": "২৬ মার্চ ১৯৭১", "option4": "১০ এপ্রিল ১৯৭১", "correct": 0 },
    { "id": 22, "category": "GK", "subCategory": "ইতিহাস", "question": "মুজিবনগর সরকার কবে গঠিত হয়েছিল?", "option1": "২৬ মার্চ ১৯৭১", "option2": "১০ এপ্রিল ১৯৭১", "option3": "১৭ এপ্রিল ১৯৭১", "option4": "১৬ ডিসেম্বর ১৯৭১", "correct": 1 },
    { "id": 23, "category": "GK", "subCategory": "ইতিহাস", "question": "বঙ্গভঙ্গ কবে রদ বা বাতিল করা হয়?", "option1": "১৯০৫ সালে", "option2": "১৯১১ সালে", "option3": "১৯৪৭ সালে", "option4": "১৯৫২ সালে", "correct": 1 },
    { "id": 24, "category": "GK", "subCategory": "ইতিহাস", "question": "ঐতিহাসিক ৬-দফা কোথায় ঘোষণা করা হয়েছিল?", "option1": "ঢাকা", "option2": "করাচি", "option3": "লাহোর", "option4": "নয়াদিল্লি", "correct": 2 },
    { "id": 25, "category": "GK", "subCategory": "ইতিহাস", "question": "আগরতলা ষড়যন্ত্র মামলার আসামীর সংখ্যা কতজন ছিল?", "option1": "৩৩ জন", "option2": "৩৪ জন", "option3": "৩৫ জন", "option4": "৩৬ জন", "correct": 2 },
    
    { "id": 26, "category": "GK", "subCategory": "ভূগোল ও পরিবেশ", "question": "বাংলাদেশের একমাত্র প্রবাল দ্বীপ কোনটি?", "option1": "সেন্টমার্টিন", "option2": "কুতুবদিয়া", "option3": "মহেশখালী", "option4": "হাতিয়া", "correct": 0 },
    { "id": 27, "category": "GK", "subCategory": "ভূগোল ও পরিবেশ", "question": "গ্রীনিচ মান সময় (GMT) অপেক্ষা বাংলাদেশের সময় কত ঘন্টা এগিয়ে?", "option1": "+৫ ঘন্টা", "option2": "+৬ ঘন্টা", "option3": "-৬ ঘন্টা", "option4": "+৪ ঘন্টা", "correct": 1 },
    { "id": 28, "category": "GK", "subCategory": "ভূগোল ও পরিবেশ", "question": "বাংলাদেশের সবচেয়ে উঁচু পর্বত শৃঙ্গের নাম কী?", "option1": "কেওক্রাডং", "option2": "তাজিংডং", "option3": "সাকা হাফং", "option4": "গারো পাহাড়", "correct": 1 },
    { "id": 29, "category": "GK", "subCategory": "ভূগোল ও পরিবেশ", "question": "কোন কাল্পনিক রেখাটি বাংলাদেশের মধ্যখান দিয়ে অতিক্রম করেছে?", "option1": "নিরক্ষরেখা", "option2": "কর্কটক্রান্তি রেখা", "option3": "মকরক্রান্তি রেখা", "option4": "মূল মধ্যরেখা", "correct": 1 },
    { "id": 30, "category": "GK", "subCategory": "ভূগোল ও পরিবেশ", "question": "সুন্দরবনের মোট আয়তনের কত শতাংশ বাংলাদেশের অংশে পড়েছে?", "option1": "৪০%", "option2": "৫০%", "option3": "৬০%", "option4": "৭৫%", "correct": 2 },

    // ==========================================
    // ICT (কম্পিউটার মেমোরি = ৫টি, নেটওয়ার্কিং = ৫টি)
    // ==========================================
    { "id": 31, "category": "ICT", "subCategory": "কম্পিউটার মেমোরি", "question": "নিচের কোনটি একটি অস্থায়ী (Volatile) মেমোরি?", "option1": "ROM", "option2": "RAM", "option3": "Hard Disk", "option4": "SSD", "correct": 1 },
    { "id": 32, "category": "ICT", "subCategory": "কম্পিউটার মেমোরি", "question": "১ গিগাবাইট (1 GB) সমান কত মেগাবাইট (MB)?", "option1": "৫১২ MB", "option2": "১০০০ MB", "option3": "১০২৪ MB", "option4": "২০৪৮ MB", "correct": 2 },
    { "id": 33, "category": "ICT", "subCategory": "কম্পিউটার মেমোরি", "question": "কম্পিউটারের সবচেয়ে দ্রুতগতির মেমোরি কোনটি?", "option1": "Cache Memory", "option2": "RAM", "option3": "ROM", "option4": "Register Memory", "correct": 3 },
    { "id": 34, "category": "ICT", "subCategory": "কম্পিউটার মেমোরি", "question": "১ বাইট (1 Byte) কত বিটের সমান?", "option1": "৪ বিট", "option2": "৮ বিট", "option3": "১৬ বিট", "option4": "৩২ বিট", "correct": 1 },
    { "id": 35, "category": "ICT", "subCategory": "কম্পিউটার মেমোরি", "question": "কম্পিউটার বুট করার প্রোগ্রাম কোথায় স্থায়ীভাবে সংরক্ষিত থাকে?", "option1": "RAM", "option2": "ROM", "option3": "Cache", "option4": "Processor", "correct": 1 },
    
    { "id": 36, "category": "ICT", "subCategory": "নেটওয়ার্কিং", "question": "নিচের কোনটি আইপি অ্যাড্রেস (IP Address) এর উদাহরণ?", "option1": "info@google.com", "option2": "192.168.1.1", "option3": "www.bangla.gov", "option4": "A1-B2-C3-D4", "correct": 1 },
    { "id": 37, "category": "ICT", "subCategory": "নেটওয়ার্কিং", "question": "কোন নেটওয়ার্ক টপোলজিতে একটি কেন্দ্রীয় হাব বা সুইচ ব্যবহার করা হয়?", "option1": "Bus Topology", "option2": "Ring Topology", "option3": "Star Topology", "option4": "Mesh Topology", "correct": 2 },
    { "id": 38, "category": "ICT", "subCategory": "নেটওয়ার্কিং", "question": "URL এর পূর্ণরূপ কী?", "option1": "Uniform Resource Locator", "option2": "Universal Resource Line", "option3": "United Resource Link", "option4": "Uniform Radio Locator", "correct": 0 },
    { "id": 39, "category": "ICT", "subCategory": "নেটওয়ার্কিং", "question": "ওয়াই-ফাই (Wi-Fi) প্রযুক্তির স্ট্যান্ডার্ড কোড কোনটি?", "option1": "IEEE 802.3", "option2": "IEEE 802.11", "option3": "IEEE 802.15", "option4": "IEEE 802.16", "correct": 1 },
    { "id": 40, "category": "ICT", "subCategory": "নেটওয়ার্কিং", "question": "ওয়েব পেজ তৈরির জন্য কোন ল্যাঙ্গুয়েজটি অবশ্যই ব্যবহার করতে হয়?", "option1": "HTTP", "option2": "HTML", "option3": "FTP", "option4": "SMTP", "correct": 1 }
];





// 💼 সরকারি চাকরির সার্কুলার ডেটাবেজ
const jobCircularDatabase = [
    {
        "postKey": "mod-2026",
        "orgName": "প্রতিরক্ষা মন্ত্রণালয় (Ministry of Defence - MOD)",
        "publishDate": "21-06-2026 (10:00 AM)",
        "categoryCount": "২৪ টি ক্যাটাগরিতে",
        "totalPosts": "১১১ টি",
        "jobType": "Permanent",
        "qualification": "পদ অনুযায়ী জেএসসি / এসএসসি / এইচএসসি / স্নাতক বা সমমান পাস",
        "applyMethod": "অনলাইন (Online)",
        "applyLink": "https://dcd.teletalk.com.bd/",
        "deadline": "15-07-2026 (5:00 PM)",
        
        // 🎯 পদের বিস্তারিত তালিকা (এখানে আপনি যত ইচ্ছা অবজেক্ট বাড়াতে বা কমাতে পারবেন)
        "vacancyDetails": [
            { "name": "সহকারী তত্ত্বাবধায়ক", "count": 1, "grade": "গ্রেড-১৩", "scale": "১১০০০-২৬৫৯০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "সাঁটাক্ষরিক-কাম-কম্পিউটার অপারেটর", "count": 1, "grade": "গ্রেড-১৩", "scale": "১১০০০-২৬৫৯০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "কম্পিউটার অপারেটর", "count": 4, "grade": "গ্রেড-১৩", "scale": "১১০০০-২৬৫৯০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "উচ্চমান সহকারী", "count": 12, "grade": "গ্রেড-১৪", "scale": "১০২২০-২৪৬৮০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "সাঁটমুদ্রাক্ষরিক-কাম-কম্পিউটার অপারেটর", "count": 5, "grade": "গ্রেড-১৪", "scale": "১০২২ো-২৪৬৮০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "নকশাকার গ্রেড-৩", "count": 3, "grade": "গ্রেড-১৫", "scale": "৯৭০০-২৩৪৯০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "ড্রাইভার", "count": 2, "grade": "গ্রেড-১৫", "scale": "৯৭০০-২৩৪৯০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "office সহকারী-কাম-কম্পিউটার মুদ্রাক্ষরিক", "count": 33, "grade": "গ্রেড-১৬", "scale": "৯৩০০-২২৪৯০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "স্টোরম্যান", "count": 1, "grade": "গ্রেড-১৬", "scale": "৯৩০০-২২৪৯০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "কম্পিউটার হার্ডওয়্যার টেকনিশিয়ান", "count": 1, "grade": "গ্রেড-১৬", "scale": "৯৩০০-২২৪৯০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "এমসি-২ (কম্পোзиটর)", "count": 3, "grade": "গ্রেড-১৬", "scale": "৯৩০০-২২৪৯০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "এমসি-২ (রিডার)", "count": 1, "grade": "গ্রেড-১৬", "scale": "৯৩০০-২২৪৯০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "কাউন্টার ক্লার্ক", "count": 1, "grade": "গ্রেড-১৬", "scale": "৯৩০০-২২৪৯০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "ট্রেসার", "count": 2, "grade": "গ্রেড-১৭", "scale": "৯০০০-২১৮০০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "বुक বাইন্ডার/টিএম (বাইন্ডার)", "count": 3, "grade": "গ্রেড-১৮", "scale": "৮৮০০-২১৩১০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "ডেসপ্যাচ রাইডার", "count": 1, "grade": "গ্রেড-১৮", "scale": "৮৮০০-২১৩১০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "ফটোকপি অপারেটর", "count": 1, "grade": "গ্রেড-১৮", "scale": "৮৮০০-২১৩১০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "অফিস সহায়ক", "count": 23, "grade": "গ্রেড-২০", "scale": "৮২৫০-২০০১০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "বাবুর্চি", "count": 2, "grade": "গ্রেড-২০", "scale": "৮২৫০-২০০১০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "সহকারী বাবুর্চি", "count": 2, "grade": "গ্রেড-২০", "scale": "৮২৫০-২০০১০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "মেস ওয়েটার", "count": 2, "grade": "গ্রেড-২০", "scale": "৮২৫০-২০০১০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "নিরাপত্তা প্রহরী", "count": 1, "grade": "গ্রেড-২০", "scale": "৮২৫০-২০০১০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "মালী/গার্ডেনার", "count": 2, "grade": "গ্রেড-২০", "scale": "৮২৫০-২০০১০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "পরিচ্ছন্নতা কর্মী/ঝাড়ুদার", "count": 4, "grade": "গ্রেড-২০", "scale": "৮২৫০-২০০১০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "নিরাপত্তা প্রহরী", "count": 1, "grade": "গ্রেড-২০", "scale": "৮২৫০-২০০১০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "সহকারী বাবুর্চি", "count": 2, "grade": "গ্রেড-২০", "scale": "৮২৫০-২০০১০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
            { "name": "মেস ওয়েটার", "count": 2, "grade": "গ্রেড-২০", "scale": "৮২৫০-২০০১০/-", "link": "https://dcd.teletalk.com.bd/dcd_2026/posts.php" },
        ]
    }
];
