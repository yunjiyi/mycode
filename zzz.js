const testCases = [
  {
    language: "zh-Hans",
    name: "简体中文",
    fonts: ["SimSun", "Microsoft YaHei", "PingFang SC"],
    text: "龘麤纛鸂鶒齉鱻",
    likelyCountries: ["CN", "SG", "MY"]
  },
  {
    language: "zh-Hant",
    name: "繁體中文",
    fonts: ["PingFang TC", "Songti TC", "Heiti TC", "PMingLiU", "MingLiU"],
    text: "「龜龘」齉鱻、龗齾！",
    likelyCountries: ["TW", "HK", "MO"]
  },
  {
    language: "ja",
    name: "日文",
    fonts: ["Yu Gothic", "Meiryo", "MS PGothic"],
    text: "あいうえおカキクケコサシスセソ",
    likelyCountries: ["JP"]
  },
  {
    language: "ko",
    name: "韩文",
    fonts: ["Malgun Gothic", "Dotum", "Gulim"],
    text: "한글입니다 가나다라 마바사아자차카타파하",
    likelyCountries: ["KR"]
  },
  {
    language: "en",
    name: "英文",
    fonts: ["Arial", "Times New Roman", "Tahoma"],
    text: "The quick brown fox jumps over the lazy dog",
    likelyCountries: ["US", "GB", "CA", "AU", "NZ", "IN", "ZA"]
  },
  {
    language: "fr",
    name: "法语",
    fonts: ["Arial", "Verdana", "Georgia"],
    text: "Éléphant à l’école mange du gâteau",
    likelyCountries: ["FR", "BE", "CA", "CH", "LU", "SN", "MG"]
  },
  {
    language: "de",
    name: "德语",
    fonts: ["Arial", "Tahoma", "Times New Roman"],
    text: "Fünf große Bücher über österreichische Ästhetik",
    likelyCountries: ["DE", "AT", "CH", "LI"]
  },
  {
    language: "es",
    name: "西班牙语",
    fonts: ["Arial", "Verdana", "Georgia"],
    text: "El pingüino comió ñoquis en el jardín",
    likelyCountries: ["ES", "MX", "AR", "CO", "CL", "PE"]
  },
  {
    language: "pt",
    name: "葡萄牙语",
    fonts: ["Arial", "Times New Roman", "Tahoma"],
    text: "O coração do João está cheio de emoção",
    likelyCountries: ["PT", "BR", "AO", "MZ"]
  },
  {
    language: "it",
    name: "意大利语",
    fonts: ["Arial", "Georgia", "Verdana"],
    text: "L’aquila vola sopra il lago tranquillo",
    likelyCountries: ["IT", "CH", "SM"]
  },
  {
    language: "ru",
    name: "俄语",
    fonts: ["Arial", "Times New Roman", "Georgia"],
    text: "Привет мир Ж Ц Щ Ы Э Ю Я",
    likelyCountries: ["RU", "BY", "KZ", "KG", "UA"]
  },
  {
    language: "uk",
    name: "乌克兰语",
    fonts: ["Arial", "Georgia", "Tahoma"],
    text: "Їжак їв яблуко біля ялинки",
    likelyCountries: ["UA"]
  },
  {
    language: "pl",
    name: "波兰语",
    fonts: ["Arial", "Verdana", "Georgia"],
    text: "Zażółć gęślą jaźń wśród źdźbeł",
    likelyCountries: ["PL"]
  },
  {
    language: "cs",
    name: "捷克语",
    fonts: ["Arial", "Tahoma", "Times New Roman"],
    text: "Příliš žluťoučký kůň úpěl ďábelské ódy",
    likelyCountries: ["CZ"]
  },
  {
    language: "ro",
    name: "罗马尼亚语",
    fonts: ["Arial", "Georgia", "Verdana"],
    text: "Îți văd zâmbetul în zori de zi",
    likelyCountries: ["RO", "MD"]
  },
  {
    language: "hu",
    name: "匈牙利语",
    fonts: ["Arial", "Tahoma", "Georgia"],
    text: "Árvíztűrő tükörfúrógép",
    likelyCountries: ["HU"]
  },
  {
    language: "tr",
    name: "土耳其语",
    fonts: ["Arial", "Verdana", "Georgia"],
    text: "Pijamalı hasta yağız şoföre çabucak güvendi",
    likelyCountries: ["TR", "CY"]
  },
  {
    language: "el",
    name: "希腊语",
    fonts: ["Arial", "Times New Roman", "Georgia"],
    text: "Η γρήγορη αλεπού πήδηξε πάνω από τον τεμπέλη σκύλο",
    likelyCountries: ["GR", "CY"]
  },
  {
    language: "sv",
    name: "瑞典语",
    fonts: ["Arial", "Tahoma", "Georgia"],
    text: "Yxskaftbud, ge vår WC-zonmö IQ-hjälp",
    likelyCountries: ["SE", "FI"]
  },
  {
    language: "da",
    name: "丹麦语",
    fonts: ["Arial", "Verdana", "Georgia"],
    text: "Høj bly gom vandt fræk sexquiz",
    likelyCountries: ["DK"]
  },
  {
    language: "fi",
    name: "芬兰语",
    fonts: ["Arial", "Tahoma", "Georgia"],
    text: "Törkylempijävongahdus",
    likelyCountries: ["FI"]
  },
  {
    language: "no",
    name: "挪威语",
    fonts: ["Arial", "Verdana", "Georgia"],
    text: "Blåbærsyltetøy på fjelltoppen",
    likelyCountries: ["NO"]
  },
  {
    language: "nl",
    name: "荷兰语",
    fonts: ["Arial", "Georgia", "Verdana"],
    text: "Pa’s wijze lynx bezag vroom het fikse aquaduct",
    likelyCountries: ["NL", "BE", "SR"]
  },
  {
    language: "he",
    name: "希伯来语",
    fonts: ["Arial Hebrew", "FrankRuehl", "David", "Noto Sans Hebrew"],
    text: "שָׁלוֹם עוֹלָם אֵיךְ אַתָּה מַרְגִּישׁ הַיּוֹם",
    likelyCountries: ["IL"]
  },
  {
    language: "ar",
    name: "阿拉伯语",
    fonts: ["Amiri", "Scheherazade", "Arial"],
    text: "السلام عليكم كيف حالك اليوم",
    likelyCountries: ["SA", "EG", "AE", "DZ", "MA", "IQ", "JO", "LB", "SY", "SD"]
  },
  {
    language: "fa",
    name: "波斯语",
    fonts: ["B Nazanin", "Tahoma", "Arial"],
    text: "سلام دنیا حال شما چطور است",
    likelyCountries: ["IR", "AF", "TJ"]
  },
  {
    language: "hi",
    name: "印地语",
    fonts: ["Mangal", "Noto Sans Devanagari", "Arial"],
    text: "नमस्ते दुनिया आप कैसे हैं",
    likelyCountries: ["IN", "FJ", "MU"]
  },
  {
    language: "bn",
    name: "孟加拉语",
    fonts: ["SolaimanLipi", "Noto Sans Bengali", "Arial"],
    text: "হ্যালো বিশ্ব আপনি কেমন আছেন",
    likelyCountries: ["BD", "IN"]
  },
  {
    language: "ta",
    name: "泰米尔语",
    fonts: ["Latha", "Noto Sans Tamil", "Arial"],
    text: "வணக்கம் உலகம் நீங்கள் எப்படி இருக்கிறீர்கள்",
    likelyCountries: ["IN", "LK", "SG"]
  },
  {
    language: "ur",
    name: "乌尔都语",
    fonts: ["Nafees Nastaleeq", "Arial", "Tahoma"],
    text: "ہیلو دنیا آپ کیسے ہیں",
    likelyCountries: ["PK", "IN"]
  },
  {
    language: "th",
    name: "泰语",
    fonts: ["Tahoma", "Noto Sans Thai", "Arial"],
    text: "สวัสดีครับ วันนี้คุณเป็นอย่างไรบ้าง",
    likelyCountries: ["TH"]
  },
  {
    language: "vi",
    name: "越南语",
    fonts: ["Arial", "Tahoma", "Times New Roman"],
    text: "Chữ quốc ngữ rất đẹp và dễ học",
    likelyCountries: ["VN"]
  },
  {
    language: "id",
    name: "印尼语",
    fonts: ["Arial", "Verdana", "Georgia"],
    text: "Selamat pagi dunia bagaimana kabarmu",
    likelyCountries: ["ID"]
  },
  {
    language: "my",
    name: "缅甸语",
    fonts: ["Myanmar Text", "Noto Sans Myanmar", "Arial"],
    text: "မင်္ဂလာပါ ကမ္ဘာကြီး",
    likelyCountries: ["MM"]
  },
  {
    language: "sw",
    name: "斯瓦希里语",
    fonts: ["Arial", "Verdana", "Georgia"],
    text: "Habari dunia unajisikiaje leo",
    likelyCountries: ["KE", "TZ", "UG", "RW", "CD"]
  },
  {
    language: "am",
    name: "阿姆哈拉语",
    fonts: ["Nyala", "Noto Sans Ethiopic", "Arial"],
    text: "ሰላም ዓለም እንዴት",
    likelyCountries: ["ET"]
  }
];
