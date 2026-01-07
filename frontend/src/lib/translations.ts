export type LanguageCode = 'en' | 'hi' | 'ta' | 'ml' | 'te';

export const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    // App Name
    appName: 'GrowSmart AI',
    appTagline: 'Smart Farming Guide',
    
    // Navigation
    navHome: 'Home',
    navAssistant: 'Assistant',
    navGuides: 'Guides',
    navSettings: 'Settings',
    
    // Home Page
    homeTitle: 'Explore Crops',
    homeSubtitle: 'Learn about different crops and farming techniques',
    
    // Voice Assistant
    assistantTitle: 'Voice Assistant',
    assistantSubtitle: 'Your AI farming expert',
    assistantIdle: 'Tap to ask anything',
    assistantIdleDesc: 'Ask about crops, soil, fertilizers, or farming techniques',
    assistantListening: 'Listening...',
    assistantListeningDesc: 'Speak your question clearly',
    assistantSpeaking: 'Here\'s what I found...',
    assistantSpeakingDesc: 'For wheat cultivation, ensure proper irrigation and use NPK fertilizer in a 4:2:1 ratio.',
    assistantTryAsking: 'Try asking:',
    assistantQ1: 'What fertilizer is best for wheat?',
    assistantQ2: 'How to improve soil quality?',
    assistantQ3: 'When to plant rice?',
    
    // Crop Detail
    playAudio: 'Play Audio Explanation',
    season: 'Season',
    water: 'Water',
    sunlight: 'Sunlight',
    description: 'Description',
    farmingTips: 'Farming Tips',
    recommendedSoil: 'Recommended Soil',
    
    // Guides
    guidesTitle: 'Farming Guides',
    guidesSubtitle: 'Essential information for successful farming',
    soilTypes: 'Soil Types',
    fertilizers: 'Fertilizers',
    bestFor: 'Best For',
    characteristics: 'Characteristics',
    suitableFor: 'Suitable For',
    application: 'Application',
    
    // Settings
    settingsTitle: 'Settings',
    settingsSubtitle: 'Customize your experience',
    languageSelection: 'Language Selection',
    about: 'About',
    aboutText: 'GrowSmart AI is an AI-powered agricultural advisory system designed to help farmers make informed decisions about crop cultivation, soil management, and fertilizer application.',
    version: 'Version 1.0.0',
    footer: '© 2025. Built with love using',
  },
  hi: {
    // App Name
    appName: 'GrowSmart AI',
    appTagline: 'स्मार्ट खेती गाइड',
    
    // Navigation
    navHome: 'होम',
    navAssistant: 'सहायक',
    navGuides: 'गाइड',
    navSettings: 'सेटिंग्स',
    
    // Home Page
    homeTitle: 'फसलें देखें',
    homeSubtitle: 'विभिन्न फसलों और खेती तकनीकों के बारे में जानें',
    
    // Voice Assistant
    assistantTitle: 'वॉयस असिस्टेंट',
    assistantSubtitle: 'आपका AI खेती विशेषज्ञ',
    assistantIdle: 'पूछने के लिए टैप करें',
    assistantIdleDesc: 'फसलों, मिट्टी, उर्वरक या खेती तकनीकों के बारे में पूछें',
    assistantListening: 'सुन रहा हूं...',
    assistantListeningDesc: 'अपना सवाल स्पष्ट रूप से बोलें',
    assistantSpeaking: 'यहाँ मुझे मिला...',
    assistantSpeakingDesc: 'गेहूं की खेती के लिए, उचित सिंचाई सुनिश्चित करें और 4:2:1 अनुपात में NPK उर्वरक का उपयोग करें।',
    assistantTryAsking: 'पूछने की कोशिश करें:',
    assistantQ1: 'गेहूं के लिए कौन सा उर्वरक सबसे अच्छा है?',
    assistantQ2: 'मिट्टी की गुणवत्ता कैसे सुधारें?',
    assistantQ3: 'धान कब लगाएं?',
    
    // Crop Detail
    playAudio: 'ऑडियो स्पष्टीकरण चलाएं',
    season: 'मौसम',
    water: 'पानी',
    sunlight: 'धूप',
    description: 'विवरण',
    farmingTips: 'खेती के टिप्स',
    recommendedSoil: 'अनुशंसित मिट्टी',
    
    // Guides
    guidesTitle: 'खेती गाइड',
    guidesSubtitle: 'सफल खेती के लिए आवश्यक जानकारी',
    soilTypes: 'मिट्टी के प्रकार',
    fertilizers: 'उर्वरक',
    bestFor: 'सर्वोत्तम के लिए',
    characteristics: 'विशेषताएं',
    suitableFor: 'उपयुक्त',
    application: 'उपयोग',
    
    // Settings
    settingsTitle: 'सेटिंग्स',
    settingsSubtitle: 'अपने अनुभव को अनुकूलित करें',
    languageSelection: 'भाषा चयन',
    about: 'के बारे में',
    aboutText: 'GrowSmart AI एक AI-संचालित कृषि सलाहकार प्रणाली है जो किसानों को फसल की खेती, मिट्टी प्रबंधन और उर्वरक अनुप्रयोग के बारे में सूचित निर्णय लेने में मदद करने के लिए डिज़ाइन की गई है।',
    version: 'संस्करण 1.0.0',
    footer: '© 2025. प्यार से बनाया गया',
  },
  ta: {
    // App Name
    appName: 'GrowSmart AI',
    appTagline: 'ஸ்மார்ட் விவசாய வழிகாட்டி',
    
    // Navigation
    navHome: 'முகப்பு',
    navAssistant: 'உதவியாளர்',
    navGuides: 'வழிகாட்டிகள்',
    navSettings: 'அமைப்புகள்',
    
    // Home Page
    homeTitle: 'பயிர்களை ஆராயுங்கள்',
    homeSubtitle: 'பல்வேறு பயிர்கள் மற்றும் விவசாய நுட்பங்களைப் பற்றி அறியுங்கள்',
    
    // Voice Assistant
    assistantTitle: 'குரல் உதவியாளர்',
    assistantSubtitle: 'உங்கள் AI விவசாய நிபுணர்',
    assistantIdle: 'கேட்க தட்டவும்',
    assistantIdleDesc: 'பயிர்கள், மண், உரங்கள் அல்லது விவசாய நுட்பங்களைப் பற்றி கேளுங்கள்',
    assistantListening: 'கேட்கிறது...',
    assistantListeningDesc: 'உங்கள் கேள்வியை தெளிவாக பேசுங்கள்',
    assistantSpeaking: 'நான் கண்டுபிடித்தது இதோ...',
    assistantSpeakingDesc: 'கோதுமை சாகுபடிக்கு, சரியான நீர்ப்பாசனத்தை உறுதிசெய்து 4:2:1 விகிதத்தில் NPK உரத்தைப் பயன்படுத்துங்கள்.',
    assistantTryAsking: 'கேட்க முயற்சிக்கவும்:',
    assistantQ1: 'கோதுமைக்கு எந்த உரம் சிறந்தது?',
    assistantQ2: 'மண் தரத்தை எவ்வாறு மேம்படுத்துவது?',
    assistantQ3: 'நெல் எப்போது நடவு செய்வது?',
    
    // Crop Detail
    playAudio: 'ஆடியோ விளக்கத்தை இயக்கவும்',
    season: 'பருவம்',
    water: 'நீர்',
    sunlight: 'சூரிய ஒளி',
    description: 'விளக்கம்',
    farmingTips: 'விவசாய குறிப்புகள்',
    recommendedSoil: 'பரிந்துரைக்கப்பட்ட மண்',
    
    // Guides
    guidesTitle: 'விவசாய வழிகாட்டிகள்',
    guidesSubtitle: 'வெற்றிகரமான விவசாயத்திற்கான அத்தியாவசிய தகவல்',
    soilTypes: 'மண் வகைகள்',
    fertilizers: 'உரங்கள்',
    bestFor: 'சிறந்தது',
    characteristics: 'பண்புகள்',
    suitableFor: 'பொருத்தமானது',
    application: 'பயன்பாடு',
    
    // Settings
    settingsTitle: 'அமைப்புகள்',
    settingsSubtitle: 'உங்கள் அனுபவத்தை தனிப்பயனாக்குங்கள்',
    languageSelection: 'மொழி தேர்வு',
    about: 'பற்றி',
    aboutText: 'GrowSmart AI என்பது AI-இயங்கும் விவசாய ஆலோசனை அமைப்பாகும், இது விவசாயிகள் பயிர் சாகுபடி, மண் மேலாண்மை மற்றும் உர பயன்பாடு பற்றி தகவலறிந்த முடிவுகளை எடுக்க உதவும் வகையில் வடிவமைக்கப்பட்டுள்ளது.',
    version: 'பதிப்பு 1.0.0',
    footer: '© 2025. அன்புடன் உருவாக்கப்பட்டது',
  },
  ml: {
    // App Name
    appName: 'GrowSmart AI',
    appTagline: 'സ്മാർട്ട് കൃഷി ഗൈഡ്',
    
    // Navigation
    navHome: 'ഹോം',
    navAssistant: 'സഹായി',
    navGuides: 'ഗൈഡുകൾ',
    navSettings: 'ക്രമീകരണങ്ങൾ',
    
    // Home Page
    homeTitle: 'വിളകൾ പര്യവേക്ഷണം ചെയ്യുക',
    homeSubtitle: 'വിവിധ വിളകളെയും കൃഷി സാങ്കേതികതകളെയും കുറിച്ച് അറിയുക',
    
    // Voice Assistant
    assistantTitle: 'വോയ്സ് അസിസ്റ്റന്റ്',
    assistantSubtitle: 'നിങ്ങളുടെ AI കൃഷി വിദഗ്ധൻ',
    assistantIdle: 'ചോദിക്കാൻ ടാപ്പ് ചെയ്യുക',
    assistantIdleDesc: 'വിളകൾ, മണ്ണ്, വളങ്ങൾ അല്ലെങ്കിൽ കൃഷി സാങ്കേതികതകളെ കുറിച്ച് ചോദിക്കുക',
    assistantListening: 'കേൾക്കുന്നു...',
    assistantListeningDesc: 'നിങ്ങളുടെ ചോദ്യം വ്യക്തമായി പറയുക',
    assistantSpeaking: 'ഞാൻ കണ്ടെത്തിയത് ഇതാ...',
    assistantSpeakingDesc: 'ഗോതമ്പ് കൃഷിക്ക്, ശരിയായ ജലസേചനം ഉറപ്പാക്കുകയും 4:2:1 അനുപാതത്തിൽ NPK വളം ഉപയോഗിക്കുകയും ചെയ്യുക.',
    assistantTryAsking: 'ചോദിക്കാൻ ശ്രമിക്കുക:',
    assistantQ1: 'ഗോതമ്പിന് ഏത് വളമാണ് നല്ലത്?',
    assistantQ2: 'മണ്ണിന്റെ ഗുണനിലവാരം എങ്ങനെ മെച്ചപ്പെടുത്താം?',
    assistantQ3: 'നെല്ല് എപ്പോൾ നടണം?',
    
    // Crop Detail
    playAudio: 'ഓഡിയോ വിശദീകരണം പ്ലേ ചെയ്യുക',
    season: 'സീസൺ',
    water: 'വെള്ളം',
    sunlight: 'സൂര്യപ്രകാശം',
    description: 'വിവരണം',
    farmingTips: 'കൃഷി നുറുങ്ങുകൾ',
    recommendedSoil: 'ശുപാർശ ചെയ്യുന്ന മണ്ണ്',
    
    // Guides
    guidesTitle: 'കൃഷി ഗൈഡുകൾ',
    guidesSubtitle: 'വിജയകരമായ കൃഷിക്ക് അത്യാവശ്യമായ വിവരങ്ങൾ',
    soilTypes: 'മണ്ണ് തരങ്ങൾ',
    fertilizers: 'വളങ്ങൾ',
    bestFor: 'ഏറ്റവും നല്ലത്',
    characteristics: 'സവിശേഷതകൾ',
    suitableFor: 'അനുയോജ്യം',
    application: 'പ്രയോഗം',
    
    // Settings
    settingsTitle: 'ക്രമീകരണങ്ങൾ',
    settingsSubtitle: 'നിങ്ങളുടെ അനുഭവം ഇഷ്ടാനുസൃതമാക്കുക',
    languageSelection: 'ഭാഷ തിരഞ്ഞെടുക്കൽ',
    about: 'കുറിച്ച്',
    aboutText: 'GrowSmart AI എന്നത് AI-പവർഡ് കാർഷിക ഉപദേശക സംവിധാനമാണ്, ഇത് കർഷകരെ വിള കൃഷി, മണ്ണ് മാനേജ്മെന്റ്, വള പ്രയോഗം എന്നിവയെക്കുറിച്ച് വിവരമുള്ള തീരുമാനങ്ങൾ എടുക്കാൻ സഹായിക്കുന്നതിനായി രൂപകൽപ്പന ചെയ്തിട്ടുള്ളതാണ്.',
    version: 'പതിപ്പ് 1.0.0',
    footer: '© 2025. സ്നേഹത്തോടെ നിർമ്മിച്ചത്',
  },
  te: {
    // App Name
    appName: 'GrowSmart AI',
    appTagline: 'స్మార్ట్ వ్యవసాయ గైడ్',
    
    // Navigation
    navHome: 'హోమ్',
    navAssistant: 'సహాయకుడు',
    navGuides: 'గైడ్‌లు',
    navSettings: 'సెట్టింగ్‌లు',
    
    // Home Page
    homeTitle: 'పంటలను అన్వేషించండి',
    homeSubtitle: 'వివిధ పంటలు మరియు వ్యవసాయ పద్ధతుల గురించి తెలుసుకోండి',
    
    // Voice Assistant
    assistantTitle: 'వాయిస్ అసిస్టెంట్',
    assistantSubtitle: 'మీ AI వ్యవసాయ నిపుణుడు',
    assistantIdle: 'అడగడానికి ట్యాప్ చేయండి',
    assistantIdleDesc: 'పంటలు, నేల, ఎరువులు లేదా వ్యవసాయ పద్ధతుల గురించి అడగండి',
    assistantListening: 'వింటోంది...',
    assistantListeningDesc: 'మీ ప్రశ్నను స్పష్టంగా చెప్పండి',
    assistantSpeaking: 'నేను కనుగొన్నది ఇదిగో...',
    assistantSpeakingDesc: 'గోధుమ సాగుకు, సరైన నీటిపారుదల నిర్ధారించండి మరియు 4:2:1 నిష్పత్తిలో NPK ఎరువును ఉపయోగించండి.',
    assistantTryAsking: 'అడగడానికి ప్రయత్నించండి:',
    assistantQ1: 'గోధుమకు ఏ ఎరువు ఉత్తమమైనది?',
    assistantQ2: 'నేల నాణ్యతను ఎలా మెరుగుపరచాలి?',
    assistantQ3: 'వరిని ఎప్పుడు నాటాలి?',
    
    // Crop Detail
    playAudio: 'ఆడియో వివరణను ప్లే చేయండి',
    season: 'సీజన్',
    water: 'నీరు',
    sunlight: 'సూర్యకాంతి',
    description: 'వివరణ',
    farmingTips: 'వ్యవసాయ చిట్కాలు',
    recommendedSoil: 'సిఫార్సు చేయబడిన నేల',
    
    // Guides
    guidesTitle: 'వ్యవసాయ గైడ్‌లు',
    guidesSubtitle: 'విజయవంతమైన వ్యవసాయానికి అవసరమైన సమాచారం',
    soilTypes: 'నేల రకాలు',
    fertilizers: 'ఎరువులు',
    bestFor: 'ఉత్తమమైనది',
    characteristics: 'లక్షణాలు',
    suitableFor: 'అనుకూలం',
    application: 'అప్లికేషన్',
    
    // Settings
    settingsTitle: 'సెట్టింగ్‌లు',
    settingsSubtitle: 'మీ అనుభవాన్ని అనుకూలీకరించండి',
    languageSelection: 'భాష ఎంపిక',
    about: 'గురించి',
    aboutText: 'GrowSmart AI అనేది AI-శక్తితో కూడిన వ్యవసాయ సలహా వ్యవస్థ, ఇది రైతులకు పంట సాగు, నేల నిర్వహణ మరియు ఎరువుల అప్లికేషన్ గురించి సమాచారంతో కూడిన నిర్ణయాలు తీసుకోవడంలో సహాయపడటానికి రూపొందించబడింది.',
    version: 'వెర్షన్ 1.0.0',
    footer: '© 2025. ప్రేమతో నిర్మించబడింది',
  },
};

export function getTranslation(lang: LanguageCode, key: string): string {
  return translations[lang]?.[key] || translations.en[key] || key;
}
