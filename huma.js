// ═══════════════════════════════════════════════════════════════════
// HUMA - Türkçe Alfabe Öğrenme Uygulaması
// Birleştirilmiş ve Optimize Edilmiş Versiyon
// ═══════════════════════════════════════════════════════════════════

// Türkçe Alfabe - 29 harf
const TURKISH_LETTERS = [
    'A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'Ğ', 'H',
    'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P',
    'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'Y', 'Z'
];

// Sayılar - 0-9
const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Lowercase mapping
const LOWERCASE = {
    'A': 'a', 'B': 'b', 'C': 'c', 'Ç': 'ç', 'D': 'd', 'E': 'e', 'F': 'f', 'G': 'g', 'Ğ': 'ğ',
    'H': 'h', 'I': 'ı', 'İ': 'i', 'J': 'j', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'O': 'o',
    'Ö': 'ö', 'P': 'p', 'R': 'r', 'S': 's', 'Ş': 'ş', 'T': 't', 'U': 'u', 'Ü': 'ü', 'V': 'v',
    'Y': 'y', 'Z': 'z',
    // Sayılar için (kendisi)
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'
};

// Sayı isimleri
const NUMBER_NAMES = {
    '0': 'sıfır', '1': 'bir', '2': 'iki', '3': 'üç', '4': 'dört',
    '5': 'beş', '6': 'altı', '7': 'yedi', '8': 'sekiz', '9': 'dokuz'
};

// Temalar
const THEMES = {
    alfabe: {
        'A': 'A harfi Annenin A\'sı', 'B': 'B harfi Babanın B\'si', 'C': 'C harfi Ceylinin C\'si',
        'Ç': 'Ç harfi Çiçeğin Ç\'si', 'D': 'D harfi Dedenin D\'si', 'E': 'E harfi Evin E\'si',
        'F': 'F harfi Fıstığın F\'sı', 'G': 'G harfi Güneşin G\'si', 'Ğ': 'Ğ harfi Dağın Ğ\'sı',
        'H': 'H harfi Halanın H\'sı', 'I': 'I harfi Irmağın I\'sı', 'İ': 'İ harfi İpliğin İ\'si',
        'J': 'J harfi Jimnastiğin J\'si', 'K': 'K harfi Kalemin K\'sı', 'L': 'L harfi Lambanın L\'si',
        'M': 'M harfi Meyvenin M\'si', 'N': 'N harfi Nenenin N\'si', 'O': 'O harfi Okumun O\'su',
        'Ö': 'Ö harfi Öğretmenin Ö\'sü', 'P': 'P harfi Pastanın P\'si', 'R': 'R harfi Resminin R\'si',
        'S': 'S harfi Saatin S\'sı', 'Ş': 'Ş harfi Şapkanın Ş\'sı', 'T': 'T harfi Topun T\'sı',
        'U': 'U harfi Uçağın U\'su', 'Ü': 'Ü harfi Ütünün Ü\'sü', 'V': 'V harfi Vazonun V\'sı',
        'Y': 'Y harfi Yatağın Y\'sı', 'Z': 'Z harfi Zeytinin Z\'si'
    },
    ciftlik: {
        'A': 'A harfi Atın A\'sı', 'B': 'B harfi Buzağının B\'si', 'C': 'C harfi Civcivın C\'si',
        'Ç': 'Ç harfi Çobanın Ç\'si', 'D': 'D harfi Danayın D\'si', 'E': 'E harfi Eşeğin E\'si',
        'F': 'F harfi Farenin F\'si', 'G': 'G harfi Güvercinin G\'si', 'Ğ': 'Ğ harfi Ağılın Ğ\'sı',
        'H': 'H harfi Horozun H\'sı', 'I': 'I harfi Kırlangıcın I\'sı', 'İ': 'İ harfi İneğin İ\'si',
        'J': 'J harfi Jokeyın J\'si', 'K': 'K harfi Koyunun K\'sı', 'L': 'L harfi Leylek\'in L\'si',
        'M': 'M harfi Mandanın M\'si', 'N': 'N harfi Nenenin N\'si', 'O': 'O harfi Ordek\'in O\'su',
        'Ö': 'Ö harfi Öküzün Ö\'sü', 'P': 'P harfi Pelikannın P\'si', 'R': 'R harfi Reyhanın R\'si',
        'S': 'S harfi Sığırın S\'sı', 'Ş': 'Ş harfi Şahinın Ş\'sı', 'T': 'T harfi Tavuğun T\'sı',
        'U': 'U harfi Uğurböceğinin U\'su', 'Ü': 'Ü harfi Ülkünün Ü\'sü', 'V': 'V harfi Varanın V\'sı',
        'Y': 'Y harfi Yılanın Y\'sı', 'Z': 'Z harfi Zürafa\'nın Z\'si'
    },
    ev: {
        'A': 'A harfi Aynanın A\'sı', 'B': 'B harfi Bardağın B\'si', 'C': 'C harfi Camın C\'si',
        'Ç': 'Ç harfi Çatalın Ç\'si', 'D': 'D harfi Dolabın D\'si', 'E': 'E harfi Elektriğin E\'si',
        'F': 'F harfi Fırının F\'sı', 'G': 'G harfi Gözlüğün G\'sü', 'Ğ': 'Ğ harfi Yağın Ğ\'sı',
        'H': 'H harfi Halının H\'sı', 'I': 'I harfi Işığın I\'sı', 'İ': 'İ harfi İğnenin İ\'si',
        'J': 'J harfi Jiletın J\'si', 'K': 'K harfi Kapının K\'sı', 'L': 'L harfi Lambanın L\'si',
        'M': 'M harfi Masanın M\'si', 'N': 'N harfi Nişastanın N\'si', 'O': 'O harfi Odanın O\'su',
        'Ö': 'Ö harfi Örtünün Ö\'sü', 'P': 'P harfi Perdenin P\'si', 'R': 'R harfi Rafın R\'si',
        'S': 'S harfi Sandalyenin S\'sı', 'Ş': 'Ş harfi Şemsiyenin Ş\'sı', 'T': 'T harfi Tabağın T\'sı',
        'U': 'U harfi Ütünün U\'su', 'Ü': 'Ü harfi Ütü masasının Ü\'sü', 'V': 'V harfi Vazonun V\'sı',
        'Y': 'Y harfi Yastığın Y\'sı', 'Z': 'Z harfi Zilin Z\'si'
    },
    sayilar: {
        '0': 'Sıfır. Hiçbir şey yok', '1': 'Bir. Tek bir şey', '2': 'İki. İki tane',
        '3': 'Üç. Üç tane', '4': 'Dört. Dört tane', '5': 'Beş. Beş tane',
        '6': 'Altı. Altı tane', '7': 'Yedi. Yedi tane', '8': 'Sekiz. Sekiz tane', '9': 'Dokuz. Dokuz tane'
    }
};

// Theme images (emoji)
const THEME_IMAGES = {
    alfabe: {
        'A': '👩', 'B': '👨', 'C': '👧', 'Ç': '🌸', 'D': '👴', 'E': '🏠', 'F': '🥜', 'G': '☀️', 'Ğ': '⛰️',
        'H': '👩‍🦰', 'I': '🏞️', 'İ': '🧵', 'J': '🤸', 'K': '✏️', 'L': '💡', 'M': '🍎', 'N': '👵', 'O': '🏹',
        'Ö': '👨‍🏫', 'P': '🍰', 'R': '🎨', 'S': '⏰', 'Ş': '🎩', 'T': '⚽', 'U': '✈️', 'Ü': '🔌', 'V': '🏺',
        'Y': '🛏️', 'Z': '🫒'
    },
    ciftlik: {
        'A': '🐴', 'B': '🐄', 'C': '🐣', 'Ç': '👨‍🌾', 'D': '🐮', 'E': '🫏', 'F': '🐭', 'G': '🕊️', 'Ğ': '🏚️',
        'H': '🐓', 'I': '🐦', 'İ': '🐄', 'J': '🏇', 'K': '🐑', 'L': '🦩', 'M': '🦬', 'N': '🐔', 'O': '🦆',
        'Ö': '🐂', 'P': '🦜', 'R': '🌿', 'S': '🐄', 'Ş': '🦅', 'T': '🐔', 'U': '🐞', 'Ü': '🦋', 'V': '🦎',
        'Y': '🐍', 'Z': '🦒'
    },
    ev: {
        'A': '🪞', 'B': '🥤', 'C': '🪟', 'Ç': '🍴', 'D': '🗄️', 'E': '💡', 'F': '🔥', 'G': '👓', 'Ğ': '🧈',
        'H': '🧺', 'I': '💡', 'İ': '🪡', 'J': '🪒', 'K': '🚪', 'L': '🕯️', 'M': '🪑', 'N': '🧺', 'O': '🚪',
        'Ö': '🧣', 'P': '🪟', 'R': '📚', 'S': '🪑', 'Ş': '☂️', 'T': '🍽️', 'U': '🔌', 'Ü': '🧺', 'V': '🏺',
        'Y': '🛏️', 'Z': '🔔'
    },
    sayilar: {
        '0': '⭕', '1': '1️⃣', '2': '2️⃣', '3': '3️⃣', '4': '4️⃣',
        '5': '5️⃣', '6': '6️⃣', '7': '7️⃣', '8': '8️⃣', '9': '9️⃣'
    }
};

// Optimize edilmiş kelime-emoji eşleştirme (temel kelimeler)
const WORD_EMOJI_MAP = {
    'anne': '👩', 'baba': '👨', 'çiçek': '🌸', 'dede': '👴', 'ev': '🏠', 'fıstık': '🥜',
    'güneş': '☀️', 'dağ': '⛰️', 'hala': '👩‍🦰', 'ırmak': '🏞️', 'iplik': '🧵', 'jimnastik': '🤸',
    'kalem': '✏️', 'lamba': '💡', 'meyve': '🍎', 'nene': '👵', 'ok': '🏹', 'öğretmen': '👨‍🏫',
    'pasta': '🍰', 'resim': '🎨', 'saat': '⏰', 'şapka': '🎩', 'top': '⚽', 'uçak': '✈️',
    'ütü': '🔌', 'vazo': '🏺', 'yatak': '🛏️', 'zeytin': '🫒',
    'at': '🐴', 'inek': '🐄', 'buzağı': '🐄', 'civciv': '🐣', 'çoban': '👨‍🌾', 'dana': '🐮',
    'eşek': '🫏', 'fare': '🐭', 'güvercin': '🕊️', 'ağıl': '🏚️', 'horoz': '🐓', 'kırlangıç': '🐦',
    'jokey': '🏇', 'koyun': '🐑', 'leylek': '🦩', 'manda': '🦬', 'ördek': '🦆', 'öküz': '🐂',
    'pelikan': '🦜', 'reyhan': '🌿', 'sığır': '🐄', 'şahin': '🦅', 'tavuk': '🐔', 'uğurböceği': '🐞',
    'ülkü': '🦋', 'varan': '🦎', 'yılan': '🐍', 'zürafa': '🦒',
    'ayna': '🪞', 'bardak': '🥤', 'cam': '🪟', 'çatal': '🍴', 'dolap': '🗄️', 'elektrik': '💡',
    'fırın': '🔥', 'gözlük': '👓', 'yağ': '🧈', 'halı': '🧺', 'ışık': '💡', 'iğne': '🪡',
    'jilet': '🪒', 'kapı': '🚪', 'masa': '🪑', 'nişasta': '🧺', 'oda': '🚪', 'örtü': '🧣',
    'perde': '🪟', 'raf': '📚', 'sandalye': '🪑', 'şemsiye': '☂️', 'tabak': '🍽️', 'yastık': '🛏️', 'zil': '🔔'
};

// Prompt'tan emoji çıkar (optimize edilmiş)
function getEmojiFromPrompt(prompt) {
    // Eğer prompt string değilse, null döndür
    if (!prompt || typeof prompt !== 'string') {
        return null;
    }
    
    const lowerPrompt = prompt.toLowerCase();
    const words = lowerPrompt.split(' ');

    for (let word of words) {
        word = word.replace(/[.,!?;:'"]/g, '').replace(/ın$|in$|un$|ün$|nın$|nin$|nun$|nün$/g, '');
        if (WORD_EMOJI_MAP[word]) {
            return WORD_EMOJI_MAP[word];
        }
    }

    for (let key in WORD_EMOJI_MAP) {
        if (lowerPrompt.includes(key)) {
            return WORD_EMOJI_MAP[key];
        }
    }

    return null;
}

// ═══════════════════════════════════════════════════════════════════
// STORAGE MANAGER - Merkezi localStorage yönetimi
// ═══════════════════════════════════════════════════════════════════

class StorageManager {
    constructor() {
        this.keys = {
            theme: 'huma_theme',
            prompts: 'huma_prompts',
            rate: 'huma_rate',
            pitch: 'huma_pitch',
            voice: 'huma_voice',
            apiKey: 'huma_apikey',
            engine: 'huma_engine',
            googleVoice: 'huma_google_voice',
            totalUsage: 'huma_total_usage',
            maxLimit: 'huma_max_limit',
            unlimited: 'huma_unlimited',
            audioCache: 'huma_audio_cache'
        };
    }

    get(key, defaultValue = null) {
        const value = localStorage.getItem(this.keys[key] || key);
        return value !== null ? value : defaultValue;
    }

    set(key, value) {
        localStorage.setItem(this.keys[key] || key, value);
    }

    getJSON(key, defaultValue = {}) {
        try {
            const value = this.get(key);
            return value ? JSON.parse(value) : defaultValue;
        } catch (e) {
            return defaultValue;
        }
    }

    setJSON(key, value) {
        this.set(key, JSON.stringify(value));
    }

    remove(key) {
        localStorage.removeItem(this.keys[key] || key);
    }
}

// ═══════════════════════════════════════════════════════════════════
// AUDIO MANAGER - Google TTS ve ses yönetimi
// ═══════════════════════════════════════════════════════════════════

class AudioManager {
    constructor(storage) {
        this.storage = storage;
        this.currentAudio = null;
        this.audioCache = new Map();
        this.isPlayingFlag = false;

        this.apiKey = this.storage.get('apiKey', '');
        this.totalUsage = parseInt(this.storage.get('totalUsage', '0'));
        this.maxLimit = parseInt(this.storage.get('maxLimit', '90'));
        this.unlimitedUsage = this.storage.get('unlimited', 'false') === 'true';

        this.loadCacheFromStorage();
    }

    loadCacheFromStorage() {
        const cached = this.storage.getJSON('audioCache', {});
        for (let key in cached) {
            this.audioCache.set(key, cached[key]);
        }
    }

    saveCacheToStorage() {
        const cacheObj = {};
        for (let [key, value] of this.audioCache.entries()) {
            cacheObj[key] = value;
        }
        this.storage.setJSON('audioCache', cacheObj);
    }

    setApiKey(key) {
        this.apiKey = key;
        this.storage.set('apiKey', key);
    }

    getApiKey() {
        return this.apiKey;
    }

    setUsageLimit(limit, unlimited = false) {
        this.unlimitedUsage = unlimited;
        this.maxLimit = limit;
        this.storage.set('maxLimit', limit.toString());
        this.storage.set('unlimited', unlimited.toString());
    }

    addUsage(characters) {
        this.totalUsage += characters;
        this.storage.set('totalUsage', this.totalUsage.toString());
    }

    canUseAPI(textLength) {
        if (this.unlimitedUsage) return true;
        return this.totalUsage + textLength <= this.maxLimit;
    }

    getRemainingQuota() {
        if (this.unlimitedUsage) return '∞';
        return Math.max(0, this.maxLimit - this.totalUsage);
    }

    getCacheKey(text) {
        const voiceName = this.storage.get('googleVoice', 'tr-TR-Wavenet-A');
        const pitch = this.storage.get('pitch', '1.5');
        const rate = this.storage.get('rate', '0.75');
        return `${text}|${voiceName}|${pitch}|${rate}`;
    }

    async speak(text) {
        if (!this.apiKey) {
            throw new Error('API key bulunamadı. Lütfen ayarlardan Google Cloud API key\'inizi girin.');
        }

        const cacheKey = this.getCacheKey(text);

        if (this.audioCache.has(cacheKey)) {
            await this.playAudioData(this.audioCache.get(cacheKey));
            return;
        }

        if (!this.canUseAPI(text.length)) {
            const anyCache = this.findAnyCacheForText(text);
            if (anyCache) {
                await this.playAudioData(anyCache);
                return;
            }
            throw new Error(`Kullanım limiti aşıldı! Kalan: ${this.getRemainingQuota()} karakter.`);
        }

        try {
            const audioData = await this.generateAudio(text);
            this.addUsage(text.length);
            this.audioCache.set(cacheKey, audioData);
            this.saveCacheToStorage();
            await this.playAudioData(audioData);
        } catch (error) {
            await this.speakWithBrowser(text);
        }
    }

    findAnyCacheForText(text) {
        for (const [key, value] of this.audioCache.entries()) {
            const textPart = key.split('|')[0];
            if (textPart === text) {
                return value;
            }
        }
        return null;
    }

    async generateAudio(text) {
        const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${this.apiKey}`;
        const voiceName = this.storage.get('googleVoice', 'tr-TR-Wavenet-A');
        const pitch = parseFloat(this.storage.get('pitch', '1.5'));
        const rate = parseFloat(this.storage.get('rate', '0.75'));

        const requestBody = {
            input: { text: text },
            voice: {
                languageCode: 'tr-TR',
                name: voiceName,
                ssmlGender: 'FEMALE'
            },
            audioConfig: {
                audioEncoding: 'MP3',
                pitch: (pitch - 1) * 20,
                speakingRate: rate
            }
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'API hatası');
        }

        const data = await response.json();
        return data.audioContent;
    }

    async playAudioData(base64Audio) {
        this.stop();

        return new Promise((resolve, reject) => {
            try {
                const binaryString = atob(base64Audio);
                const bytes = new Uint8Array(binaryString.length);
                for (let i = 0; i < binaryString.length; i++) {
                    bytes[i] = binaryString.charCodeAt(i);
                }
                const blob = new Blob([bytes], { type: 'audio/mp3' });
                const url = URL.createObjectURL(blob);

                this.currentAudio = new Audio(url);
                this.isPlayingFlag = true;

                this.currentAudio.onended = () => {
                    this.isPlayingFlag = false;
                    URL.revokeObjectURL(url);
                    resolve();
                };

                this.currentAudio.onerror = (error) => {
                    this.isPlayingFlag = false;
                    URL.revokeObjectURL(url);
                    reject(error);
                };

                this.currentAudio.play();
            } catch (error) {
                this.isPlayingFlag = false;
                reject(error);
            }
        });
    }

    async speakWithBrowser(text) {
        return new Promise((resolve, reject) => {
            if (!('speechSynthesis' in window)) {
                reject(new Error('Tarayıcınız ses sentezini desteklemiyor.'));
                return;
            }

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'tr-TR';
            utterance.rate = parseFloat(this.storage.get('rate', '0.75'));
            utterance.pitch = parseFloat(this.storage.get('pitch', '1.5'));

            const voiceName = this.storage.get('voice');
            if (voiceName) {
                const voices = speechSynthesis.getVoices();
                const voice = voices.find(v => v.name === voiceName);
                if (voice) utterance.voice = voice;
            }

            utterance.onend = () => {
                this.isPlayingFlag = false;
                resolve();
            };

            utterance.onerror = (error) => {
                this.isPlayingFlag = false;
                reject(error);
            };

            this.isPlayingFlag = true;
            speechSynthesis.speak(utterance);
        });
    }

    stop() {
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
            this.currentAudio = null;
        }
        if ('speechSynthesis' in window) {
            speechSynthesis.cancel();
        }
        this.isPlayingFlag = false;
    }

    isPlaying() {
        return this.isPlayingFlag;
    }
}

// ═══════════════════════════════════════════════════════════════════
// GLOBAL STATE
// ═══════════════════════════════════════════════════════════════════

let storage;
let audioManager;
let currentTheme = 'alfabe';
let customPrompts = {};
let speechRate = 0.75;
let speechPitch = 1.5;
let selectedVoice = null;
let voices = [];
let ttsEngine = 'browser';
let letterClickCount = {};
let mediaRecorder;
let audioChunks = [];
let currentRecordingLetter = null;

// ═══════════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════════

function init() {
    storage = new StorageManager();
    audioManager = new AudioManager(storage);
    loadSettings();
    loadVoices();
    renderLetterGrid();
    renderPromptsGrid();
    updateUsageStats();
}

function loadVoices() {
    voices = speechSynthesis.getVoices();
    const voiceSelect = document.getElementById('voiceSelect');
    voiceSelect.innerHTML = '<option value="">Varsayılan</option>';

    const turkishVoices = voices.filter(v => v.lang.startsWith('tr'));
    turkishVoices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        const isFemale = voice.name.toLowerCase().includes('female') ||
                         voice.name.toLowerCase().includes('kadın') ||
                         voice.name.toLowerCase().includes('woman');
        option.textContent = voice.name + (isFemale ? ' 👧 (Önerilen)' : '');
        voiceSelect.appendChild(option);
    });

    const savedVoice = storage.get('voice');
    if (savedVoice) {
        voiceSelect.value = savedVoice;
        selectedVoice = voices.find(v => v.name === savedVoice);
    } else {
        const femaleVoice = turkishVoices.find(v =>
            v.name.toLowerCase().includes('female') ||
            v.name.toLowerCase().includes('kadın')
        );
        if (femaleVoice) {
            selectedVoice = femaleVoice;
            voiceSelect.value = femaleVoice.name;
        }
    }
}

if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
}

function loadSettings() {
    currentTheme = storage.get('theme', 'alfabe');
    document.getElementById('themeSelect').value = currentTheme;

    customPrompts = storage.getJSON('prompts', { alfabe: {}, ciftlik: {}, ev: {}, sayilar: {} });
    if (!customPrompts.alfabe && !customPrompts.ciftlik && !customPrompts.ev && !customPrompts.sayilar) {
        const oldPrompts = {...customPrompts};
        customPrompts = { alfabe: oldPrompts, ciftlik: {}, ev: {}, sayilar: {} };
    }
    
    // Sayılar teması yoksa ekle
    if (!customPrompts.sayilar) {
        customPrompts.sayilar = {};
    }

    speechRate = parseFloat(storage.get('rate', '0.75'));
    document.getElementById('speechRate').value = speechRate;
    document.getElementById('rateValue').textContent = speechRate;

    speechPitch = parseFloat(storage.get('pitch', '1.5'));
    document.getElementById('speechPitch').value = speechPitch;
    document.getElementById('pitchValue').textContent = speechPitch;

    const apiKey = storage.get('apiKey');
    if (apiKey) {
        document.getElementById('apiKey').value = apiKey;
    }

    ttsEngine = storage.get('engine', 'browser');
    document.getElementById('ttsEngine').value = ttsEngine;
    updateEngineUI();

    const googleVoice = storage.get('googleVoice', 'tr-TR-Wavenet-A');
    document.getElementById('googleVoiceSelect').value = googleVoice;

    const maxLimit = parseInt(storage.get('maxLimit', '90'));
    document.getElementById('maxLimit').value = maxLimit;

    const unlimited = storage.get('unlimited', 'false') === 'true';
    document.getElementById('unlimitedUsage').checked = unlimited;
    document.getElementById('limitGroup').classList.toggle('hidden', unlimited);

    document.getElementById('cacheCount').textContent = audioManager.audioCache.size;
}

function updateUsageStats() {
    document.getElementById('totalUsage').textContent = audioManager.totalUsage;
    document.getElementById('currentLimit').textContent = audioManager.unlimitedUsage ? '∞' : audioManager.maxLimit;
    document.getElementById('remainingQuota').textContent = audioManager.getRemainingQuota();
    document.getElementById('cacheCount').textContent = audioManager.audioCache.size;
}

function updateEngineUI() {
    const googleGroup = document.getElementById('googleVoiceGroup');
    const browserGroup = document.getElementById('browserVoiceGroup');

    if (ttsEngine === 'google') {
        googleGroup.classList.add('visible');
        browserGroup.classList.add('hidden');
    } else {
        googleGroup.classList.remove('visible');
        browserGroup.classList.remove('hidden');
    }
}

// ═══════════════════════════════════════════════════════════════════
// LETTER GRID RENDERING
// ═══════════════════════════════════════════════════════════════════

function renderLetterGrid() {
    const grid = document.getElementById('letterGrid');
    grid.innerHTML = '';
    
    // Tema'ya göre grid class'ını ayarla
    if (currentTheme === 'sayilar') {
        grid.classList.add('numbers-theme');
    } else {
        grid.classList.remove('numbers-theme');
    }

    // Tema'ya göre hangi karakterleri göstereceğimize karar ver
    const items = currentTheme === 'sayilar' ? NUMBERS : TURKISH_LETTERS;

    items.forEach(letter => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'letter-card';
        card.setAttribute('data-letter', letter);

        const themePrompts = customPrompts[currentTheme] || {};
        let prompt = themePrompts[letter];
        
        // Eğer array ise, ilk elementi al
        if (Array.isArray(prompt)) {
            prompt = prompt[0] || THEMES[currentTheme][letter];
        } else if (!prompt) {
            prompt = THEMES[currentTheme][letter];
        }
        
        let icon = getEmojiFromPrompt(prompt);

        if (!icon) {
            icon = THEME_IMAGES[currentTheme][letter] || '❓';
        }

        card.innerHTML = `
            <div class="letter-display">
                <div class="letter-uppercase">${letter}</div>
                <div class="letter-lowercase">${LOWERCASE[letter]}</div>
            </div>
            <div class="letter-icon">
                <div>${icon}</div>
            </div>
        `;
        card.onclick = () => playLetter(letter, card);
        grid.appendChild(card);
    });
}

// ═══════════════════════════════════════════════════════════════════
// PLAY LETTER - Ses çalma ve kayıt yönetimi
// ═══════════════════════════════════════════════════════════════════

async function playLetter(letter, card) {
    card.classList.add('animate-bounce');
    setTimeout(() => card.classList.remove('animate-bounce'), 600);

    let prompt;
    const themePrompts = customPrompts[currentTheme] || {};

    // Döngüsel örnekler sistemi
    {
        if (!letterClickCount[currentTheme]) {
            letterClickCount[currentTheme] = {};
        }
        if (!letterClickCount[currentTheme][letter]) {
            letterClickCount[currentTheme][letter] = 0;
        }

        const allPrompts = getAllPromptsForLetter(letter);
        const index = letterClickCount[currentTheme][letter] % allPrompts.length;
        prompt = allPrompts[index];

        letterClickCount[currentTheme][letter]++;
    }

    updateCardEmoji(card, prompt);
    
    // Emoji animasyonu - butonun üzerinde göster
    showEmojiAnimation(card, prompt);

    // Ses kayıtlarını kontrol et
    const recordedAudio = storage.get(`voice_recording_${letter}`);
    const availableAudios = [];

    if (recordedAudio) {
        availableAudios.push({ type: 'recording', data: recordedAudio });
    }

    // Cache'deki TTS seslerini bul
    for (const [key, value] of audioManager.audioCache.entries()) {
        const textPart = key.split('|')[0];
        if (textPart === prompt) {
            availableAudios.push({ type: 'tts', data: value });
        }
    }

    // Rastgele ses seç veya yeni üret
    if (availableAudios.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableAudios.length);
        const selectedAudio = availableAudios[randomIndex];

        if (selectedAudio.type === 'recording') {
            const audio = new Audio(selectedAudio.data);
            await audio.play();
        } else {
            await audioManager.playAudioData(selectedAudio.data);
        }
    } else {
        // Yeni ses üret
        if (ttsEngine === 'google' && audioManager.apiKey) {
            await audioManager.speak(prompt);
        } else {
            await audioManager.speakWithBrowser(prompt);
        }
    }

    if (document.getElementById('settingsModal').classList.contains('active')) {
        updateUsageStats();
    }
}

function updateCardEmoji(card, prompt) {
    const iconDiv = card.querySelector('.letter-icon div');
    if (iconDiv) {
        let emoji = getEmojiFromPrompt(prompt);
        if (!emoji) {
            const letter = card.getAttribute('data-letter');
            emoji = THEME_IMAGES[currentTheme][letter] || '❓';
        }
        iconDiv.textContent = emoji;
    }
}

function showEmojiAnimation(card, prompt) {
    // Emoji'yi al
    let emoji = getEmojiFromPrompt(prompt);
    if (!emoji) {
        const letter = card.getAttribute('data-letter');
        emoji = THEME_IMAGES[currentTheme][letter] || '❓';
    }
    
    // Butonun pozisyonunu al
    const rect = card.getBoundingClientRect();
    
    // Animasyon elementi oluştur
    const emojiElement = document.createElement('div');
    emojiElement.textContent = emoji;
    emojiElement.style.cssText = `
        position: fixed;
        left: ${rect.left + rect.width / 2}px;
        top: ${rect.top}px;
        font-size: 60px;
        pointer-events: none;
        z-index: 10000;
        transform: translate(-50%, -50%);
        animation: emojiFloat 1.5s ease-out forwards;
    `;
    
    document.body.appendChild(emojiElement);
    
    // Animasyon bitince elementi kaldır
    setTimeout(() => {
        emojiElement.remove();
    }, 1500);
}

// Emoji animasyon CSS'i ekle
if (!document.getElementById('emojiAnimationStyles')) {
    const style = document.createElement('style');
    style.id = 'emojiAnimationStyles';
    style.textContent = `
        @keyframes emojiFloat {
            0% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(0.5);
            }
            50% {
                opacity: 1;
                transform: translate(-50%, -100px) scale(1.2);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -150px) scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}

function getAllPromptsForLetter(letter) {
    const prompts = [];
    const themePrompts = customPrompts[currentTheme] || {};
    const activePrompts = storage.getJSON('activePrompts', {});
    const letterActivePrompts = activePrompts[currentTheme]?.[letter] || [];

    if (themePrompts[letter]) {
        // Eğer array ise, sadece aktif promptları ekle
        if (Array.isArray(themePrompts[letter])) {
            themePrompts[letter].forEach((prompt, index) => {
                if (prompt.trim() && (letterActivePrompts.length === 0 || letterActivePrompts.includes(index))) {
                    prompts.push(prompt);
                }
            });
        } else if (typeof themePrompts[letter] === 'string') {
            // Eski format uyumluluğu
            prompts.push(themePrompts[letter]);
        }
    }

    // Eğer hiç aktif prompt yoksa, tema varsayılanını ekle
    if (prompts.length === 0 && THEMES[currentTheme][letter]) {
        prompts.push(THEMES[currentTheme][letter]);
    }

    if (prompts.length === 0) {
        prompts.push(`${letter} harfi`);
    }

    return prompts;
}

// ═══════════════════════════════════════════════════════════════════
// SETTINGS FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

function openSettings() {
    document.getElementById('settingsModal').classList.add('active');
    updateUsageStats();
}

function closeSettings() {
    document.getElementById('settingsModal').classList.remove('active');
}

function changeTheme() {
    currentTheme = document.getElementById('themeSelect').value;
    storage.set('theme', currentTheme);
    renderLetterGrid();
    renderPromptsGrid();
}

function saveVoice() {
    const voiceName = document.getElementById('voiceSelect').value;
    storage.set('voice', voiceName);
    selectedVoice = voices.find(v => v.name === voiceName);
}

function updateRate(value) {
    speechRate = parseFloat(value);
    document.getElementById('rateValue').textContent = value;
    storage.set('rate', value);
}

function updatePitch(value) {
    speechPitch = parseFloat(value);
    document.getElementById('pitchValue').textContent = value;
    storage.set('pitch', value);
}

function saveApiKey() {
    const apiKey = document.getElementById('apiKey').value.trim();
    if (!apiKey) {
        alert('Lütfen geçerli bir API key girin.');
        return;
    }
    audioManager.setApiKey(apiKey);
    alert('✅ API key kaydedildi!');
}

function saveTtsEngine() {
    ttsEngine = document.getElementById('ttsEngine').value;
    storage.set('engine', ttsEngine);
    updateEngineUI();
}

function saveGoogleVoice() {
    const googleVoice = document.getElementById('googleVoiceSelect').value;
    storage.set('googleVoice', googleVoice);
}

function toggleUnlimited() {
    const unlimited = document.getElementById('unlimitedUsage').checked;
    document.getElementById('limitGroup').classList.toggle('hidden', unlimited);
    storage.set('unlimited', unlimited.toString());
    audioManager.unlimitedUsage = unlimited;
    updateUsageStats();
}

function saveLimit() {
    const maxLimit = parseInt(document.getElementById('maxLimit').value);
    const unlimited = document.getElementById('unlimitedUsage').checked;
    audioManager.setUsageLimit(maxLimit, unlimited);
    updateUsageStats();
    alert('✅ Limit kaydedildi!');
}

// ═══════════════════════════════════════════════════════════════════
// PROMPTS GRID RENDERING
// ═══════════════════════════════════════════════════════════════════

function renderPromptsGrid() {
    const grid = document.getElementById('promptsGrid');
    
    // Mevcut açık accordion'ları kaydet
    const expandedCards = [];
    document.querySelectorAll('.prompt-group-card.expanded').forEach(card => {
        expandedCards.push(card.getAttribute('data-letter'));
    });
    
    grid.innerHTML = '';

    // Tema'ya göre hangi karakterleri göstereceğimize karar ver
    const items = currentTheme === 'sayilar' ? NUMBERS : TURKISH_LETTERS;

    items.forEach(letter => {
        const group = document.createElement('div');
        group.className = 'prompt-group-card';
        group.setAttribute('data-letter', letter);

        const themePrompts = customPrompts[currentTheme] || {};
        const letterPrompts = themePrompts[letter] || [];
        const hasRecording = storage.get(`voice_recording_${letter}`) !== null;

        // Eğer eski format varsa (string), array'e çevir
        if (typeof letterPrompts === 'string') {
            themePrompts[letter] = [letterPrompts];
        }

        const promptsArray = Array.isArray(letterPrompts) ? letterPrompts : [];
        const hasCustom = promptsArray.length > 0;
        const defaultPrompt = THEMES[currentTheme][letter];

        // Data attributes for filtering
        if (hasCustom) group.setAttribute('data-has-custom', 'true');
        if (hasRecording) group.setAttribute('data-has-recording', 'true');

        // Aktif promptları al (checkbox ile işaretlenenler)
        const activePrompts = storage.getJSON('activePrompts', {});
        const letterActivePrompts = activePrompts[currentTheme]?.[letter] || [];
        
        // Eğer hiç aktif prompt seçilmemişse, hepsini aktif yap
        if (letterActivePrompts.length === 0 && promptsArray.length > 0) {
            promptsArray.forEach((_, index) => {
                letterActivePrompts.push(index);
            });
        }

        let promptsHTML = '';
        
        // Mevcut promptları göster
        promptsArray.forEach((prompt, index) => {
            const isActive = letterActivePrompts.includes(index);
            promptsHTML += `
                <div class="prompt-item">
                    <input type="checkbox"
                           class="prompt-checkbox"
                           data-letter="${letter}"
                           data-index="${index}"
                           ${isActive ? 'checked' : ''}
                           onchange="togglePromptActive('${letter}', ${index}, this.checked)"
                           onclick="event.stopPropagation()"
                           title="Döngüde kullan">
                    <span class="prompt-number">${index + 1}.</span>
                    <input type="text"
                           data-letter="${letter}"
                           data-index="${index}"
                           value="${prompt}"
                           placeholder="${defaultPrompt}"
                           onblur="updatePromptAtIndex('${letter}', ${index}, this.value)"
                           onclick="event.stopPropagation()"
                           class="prompt-input">
                    <button type="button" class="delete-prompt-btn"
                            onclick="event.stopPropagation(); deletePromptAtIndex('${letter}', ${index})"
                            title="Sil">🗑️</button>
                </div>
            `;
        });

        group.innerHTML = `
            <div class="prompt-header" onclick="toggleAccordion('${letter}')">
                <div class="prompt-header-left">
                    <span class="expand-icon">▶</span>
                    <h3 class="letter-title">${letter}${currentTheme === 'sayilar' ? ` - ${NUMBER_NAMES[letter]}` : ` - ${LOWERCASE[letter]}`}</h3>
                </div>
                <div class="header-badges">
                    ${hasRecording ? '<span class="badge badge-recording">🎤</span>' : ''}
                    ${hasCustom ? `<span class="badge badge-custom">${promptsArray.length}</span>` : ''}
                </div>
            </div>
            
            <div class="prompt-body">
                <div class="prompt-body-inner">
                    ${promptsHTML ? `
                        <div class="prompts-info">
                            <small>✓ İşaretli promptlar döngüde çalacak</small>
                        </div>
                        <div class="prompts-list">
                            ${promptsHTML}
                        </div>
                    ` : `
                        <div class="no-prompts">
                            <p>Henüz özel prompt eklenmedi</p>
                            <small>Varsayılan: ${defaultPrompt}</small>
                        </div>
                    `}
                    
                    <div class="action-buttons">
                        <button type="button" class="btn-add"
                                onclick="addNewPrompt('${letter}', event)">
                            ➕ Prompt Ekle
                        </button>
                        ${hasCustom ? `
                            <button type="button" class="btn-clear"
                                    onclick="event.stopPropagation(); resetPrompt('${letter}')">
                                🗑️ Tümünü Sil
                            </button>
                        ` : ''}
                    </div>
                    
                    <div class="extra-options">
                        <button type="button" class="btn-record ${hasRecording ? 'has-recording' : ''}"
                                onclick="event.stopPropagation(); startRecording('${letter}')">
                            🎙️ ${hasRecording ? 'Ses Kaydını Değiştir' : 'Ses Kaydet'}
                        </button>
                        
                        ${hasRecording ? `
                            <button type="button" class="btn-delete-recording"
                                    onclick="event.stopPropagation(); deleteRecording('${letter}')">
                                🗑️ Kaydı Sil
                            </button>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;

        grid.appendChild(group);
        
        // Eğer bu kart daha önce açıktıysa, tekrar aç
        if (expandedCards.includes(letter)) {
            group.classList.add('expanded');
        }
    });
}

function toggleAccordion(letter) {
    const card = document.querySelector(`.prompt-group-card[data-letter="${letter}"]`);
    if (card) {
        card.classList.toggle('expanded');
    }
}

function toggleSettingsAccordion(id) {
    const accordion = event.currentTarget.closest('.settings-accordion');
    if (accordion) {
        accordion.classList.toggle('expanded');
    }
}

function togglePromptActive(letter, index, isActive) {
    const activePrompts = storage.getJSON('activePrompts', {});
    
    if (!activePrompts[currentTheme]) {
        activePrompts[currentTheme] = {};
    }
    
    if (!activePrompts[currentTheme][letter]) {
        activePrompts[currentTheme][letter] = [];
    }
    
    const letterActivePrompts = activePrompts[currentTheme][letter];
    
    if (isActive) {
        // Ekle
        if (!letterActivePrompts.includes(index)) {
            letterActivePrompts.push(index);
        }
    } else {
        // Çıkar
        const idx = letterActivePrompts.indexOf(index);
        if (idx > -1) {
            letterActivePrompts.splice(idx, 1);
        }
    }
    
    // En az bir prompt aktif olmalı
    if (letterActivePrompts.length === 0) {
        letterActivePrompts.push(index);
        // Checkbox'ı tekrar işaretle
        const checkbox = document.querySelector(`input[type="checkbox"][data-letter="${letter}"][data-index="${index}"]`);
        if (checkbox) checkbox.checked = true;
        alert('En az bir prompt aktif olmalıdır!');
    }
    
    storage.setJSON('activePrompts', activePrompts);
}

function filterLetters(filter) {
    // Buton aktif durumunu güncelle
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Kartları filtrele
    const cards = document.querySelectorAll('.prompt-group-card');
    cards.forEach(card => {
        let show = false;
        
        if (filter === 'all') {
            show = true;
        } else if (filter === 'custom') {
            show = card.hasAttribute('data-has-custom');
        } else if (filter === 'recorded') {
            show = card.hasAttribute('data-has-recording');
        }
        
        if (show) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

function addNewPrompt(letter, event) {
    // Event propagation'ı durdur (accordion kapanmasın)
    if (event) {
        event.stopPropagation();
    }
    
    if (!customPrompts[currentTheme]) {
        customPrompts[currentTheme] = {};
    }
    
    if (!customPrompts[currentTheme][letter]) {
        customPrompts[currentTheme][letter] = [];
    }
    
    // Eğer eski format varsa (string), array'e çevir
    if (typeof customPrompts[currentTheme][letter] === 'string') {
        customPrompts[currentTheme][letter] = [customPrompts[currentTheme][letter]];
    }
    
    customPrompts[currentTheme][letter].push('');
    storage.setJSON('prompts', customPrompts);
    
    // Accordion'u açık tut
    const card = document.querySelector(`.prompt-group-card[data-letter="${letter}"]`);
    if (card && !card.classList.contains('expanded')) {
        card.classList.add('expanded');
    }
    
    renderPromptsGrid();
    
    // Yeni eklenen input'a focus yap
    setTimeout(() => {
        const inputs = document.querySelectorAll(`input[data-letter="${letter}"][type="text"]`);
        if (inputs.length > 0) {
            inputs[inputs.length - 1].focus();
        }
    }, 100);
}

function updatePromptAtIndex(letter, index, value) {
    value = value.trim();
    
    if (!customPrompts[currentTheme]) {
        customPrompts[currentTheme] = {};
    }
    
    if (!customPrompts[currentTheme][letter]) {
        customPrompts[currentTheme][letter] = [];
    }
    
    // Eğer eski format varsa (string), array'e çevir
    if (typeof customPrompts[currentTheme][letter] === 'string') {
        customPrompts[currentTheme][letter] = [customPrompts[currentTheme][letter]];
    }
    
    if (value) {
        customPrompts[currentTheme][letter][index] = value;
    } else {
        // Boş ise sil
        customPrompts[currentTheme][letter].splice(index, 1);
        
        // Eğer hiç prompt kalmadıysa, harfi sil
        if (customPrompts[currentTheme][letter].length === 0) {
            delete customPrompts[currentTheme][letter];
        }
    }
    
    storage.setJSON('prompts', customPrompts);
    renderLetterGrid();
    renderPromptsGrid();
}

function deletePromptAtIndex(letter, index) {
    if (!customPrompts[currentTheme] || !customPrompts[currentTheme][letter]) {
        return;
    }
    
    // Eğer eski format varsa (string), array'e çevir
    if (typeof customPrompts[currentTheme][letter] === 'string') {
        customPrompts[currentTheme][letter] = [customPrompts[currentTheme][letter]];
    }
    
    customPrompts[currentTheme][letter].splice(index, 1);
    
    // Aktif promptları güncelle
    const activePrompts = storage.getJSON('activePrompts', {});
    if (activePrompts[currentTheme]?.[letter]) {
        // Silinen index'i çıkar
        const letterActivePrompts = activePrompts[currentTheme][letter];
        const idx = letterActivePrompts.indexOf(index);
        if (idx > -1) {
            letterActivePrompts.splice(idx, 1);
        }
        
        // Daha büyük index'leri 1 azalt
        for (let i = 0; i < letterActivePrompts.length; i++) {
            if (letterActivePrompts[i] > index) {
                letterActivePrompts[i]--;
            }
        }
        
        storage.setJSON('activePrompts', activePrompts);
    }
    
    // Eğer hiç prompt kalmadıysa, harfi sil
    if (customPrompts[currentTheme][letter].length === 0) {
        delete customPrompts[currentTheme][letter];
        // Aktif promptları da temizle
        if (activePrompts[currentTheme]?.[letter]) {
            delete activePrompts[currentTheme][letter];
            storage.setJSON('activePrompts', activePrompts);
        }
    }
    
    storage.setJSON('prompts', customPrompts);
    renderLetterGrid();
    renderPromptsGrid();
}



function resetPrompt(letter) {
    if (confirm(`${letter} harfi için tüm özel promptları silmek istediğinize emin misiniz?`)) {
        if (customPrompts[currentTheme]) {
            delete customPrompts[currentTheme][letter];
        }
        
        // Aktif promptları da temizle
        const activePrompts = storage.getJSON('activePrompts', {});
        if (activePrompts[currentTheme]?.[letter]) {
            delete activePrompts[currentTheme][letter];
            storage.setJSON('activePrompts', activePrompts);
        }

        storage.setJSON('prompts', customPrompts);
        renderLetterGrid();
        renderPromptsGrid();
    }
}

// ═══════════════════════════════════════════════════════════════════
// VOICE RECORDING
// ═══════════════════════════════════════════════════════════════════

async function startRecording(letter) {
    // HTTPS kontrolü (mobil için gerekli)
    if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
        alert('⚠️ Ses kaydı için HTTPS gereklidir!\n\nMobil cihazlarda ses kaydı sadece güvenli bağlantılarda (HTTPS) çalışır.\n\nÇözüm: Uygulamayı GitHub Pages üzerinden açın.');
        return;
    }

    // MediaDevices API desteği kontrolü
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('⚠️ Tarayıcınız ses kaydını desteklemiyor.\n\nLütfen güncel bir tarayıcı kullanın (Chrome, Firefox, Safari).');
        return;
    }

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                autoGainControl: true
            }
        });

        // MediaRecorder desteği kontrolü
        if (!window.MediaRecorder) {
            alert('⚠️ Tarayıcınız ses kaydını desteklemiyor.');
            stream.getTracks().forEach(track => track.stop());
            return;
        }

        // Desteklenen MIME type'ı bul
        let mimeType = 'audio/webm;codecs=opus';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = 'audio/webm';
            if (!MediaRecorder.isTypeSupported(mimeType)) {
                mimeType = 'audio/mp4';
                if (!MediaRecorder.isTypeSupported(mimeType)) {
                    mimeType = ''; // Varsayılan
                }
            }
        }

        mediaRecorder = new MediaRecorder(stream, mimeType ? { mimeType } : {});

        audioChunks = [];
        currentRecordingLetter = letter;

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                audioChunks.push(event.data);
            }
        };

        mediaRecorder.onstop = async () => {
            const audioBlob = new Blob(audioChunks, { type: mimeType || 'audio/webm' });

            const reader = new FileReader();
            reader.readAsDataURL(audioBlob);
            reader.onloadend = () => {
                const base64Audio = reader.result;
                storage.set(`voice_recording_${currentRecordingLetter}`, base64Audio);

                alert(`✅ ${currentRecordingLetter} harfi için ses kaydedildi!`);

                document.getElementById('recordingSection').classList.remove('active');
                renderPromptsGrid();
                stream.getTracks().forEach(track => track.stop());
            };
        };

        mediaRecorder.onerror = (event) => {
            console.error('MediaRecorder hatası:', event.error);
            alert('❌ Kayıt sırasında hata oluştu. Lütfen tekrar deneyin.');
            stream.getTracks().forEach(track => track.stop());
        };

        mediaRecorder.start();

        document.getElementById('recordingSection').classList.add('active');
        document.getElementById('recordingLetter').textContent = letter;

    } catch (error) {
        console.error('Mikrofon erişim hatası:', error);
        
        let errorMessage = '❌ Mikrofon erişimi başarısız!\n\n';
        
        if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
            errorMessage += '🔒 Mikrofon izni reddedildi.\n\n';
            errorMessage += 'Çözüm:\n';
            errorMessage += '1. Tarayıcı adres çubuğundaki kilit ikonuna tıklayın\n';
            errorMessage += '2. Mikrofon iznini "İzin Ver" olarak ayarlayın\n';
            errorMessage += '3. Sayfayı yenileyin ve tekrar deneyin';
        } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
            errorMessage += '🎤 Mikrofon bulunamadı.\n\n';
            errorMessage += 'Lütfen cihazınızda mikrofon olduğundan emin olun.';
        } else if (error.name === 'NotReadableError' || error.name === 'TrackStartError') {
            errorMessage += '⚠️ Mikrofon başka bir uygulama tarafından kullanılıyor.\n\n';
            errorMessage += 'Lütfen diğer uygulamaları kapatın ve tekrar deneyin.';
        } else {
            errorMessage += `Hata: ${error.message}\n\n`;
            errorMessage += 'Lütfen tarayıcı ayarlarından mikrofon iznini kontrol edin.';
        }
        
        alert(errorMessage);
    }
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
    }
}

function deleteRecording(letter) {
    if (confirm(`${letter} harfi için kaydedilen sesi silmek istediğinize emin misiniz?`)) {
        storage.remove(`voice_recording_${letter}`);
        alert(`${letter} harfi için ses kaydı silindi.`);
        renderPromptsGrid();
    }
}

// ═══════════════════════════════════════════════════════════════════
// MODAL CONTROLS
// ═══════════════════════════════════════════════════════════════════

document.getElementById('settingsModal').onclick = function(e) {
    if (e.target === this) {
        closeSettings();
    }
};

// ═══════════════════════════════════════════════════════════════════
// INITIALIZE ON LOAD
// ═══════════════════════════════════════════════════════════════════

window.onload = init;

// ═══════════════════════════════════════════════════════════════════
// KEYBOARD SUPPORT
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('keydown', (e) => {
    const settingsModalActive = document.getElementById('settingsModal').classList.contains('active');
    
    // ESC ile ayarları kapat
    if (e.key === 'Escape') {
        closeSettings();
        return;
    }

    // Ayarlar modalı açıkken klavye girişlerini devre dışı bırak
    if (settingsModalActive) {
        return;
    }

    // Tema'ya göre hangi karakterleri dinleyeceğimize karar ver
    const items = currentTheme === 'sayilar' ? NUMBERS : TURKISH_LETTERS;
    const keyToCheck = currentTheme === 'sayilar' ? e.key : e.key.toUpperCase();
    
    if (items.includes(keyToCheck)) {
        const cards = document.querySelectorAll('.letter-card');
        const index = items.indexOf(keyToCheck);
        if (cards[index]) {
            playLetter(keyToCheck, cards[index]);
        }
    }
});

// ═══════════════════════════════════════════════════════════════════
// SECRET TAP - HUMA başlığına 5 kere tıklama ile ayarlar erişimi
// ═══════════════════════════════════════════════════════════════════

let tapCount = 0;
let tapTimeout = null;
const TAP_THRESHOLD = 5; // 5 kere tıklama
const TAP_TIME_WINDOW = 2000; // 2 saniye içinde

// HUMA başlığına tıklama dinleyicisi ekle
document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.querySelector('h1');
    
    if (titleElement) {
        // Başlığı tıklanabilir yap
        titleElement.style.cursor = 'pointer';
        titleElement.style.userSelect = 'none';
        
        titleElement.addEventListener('click', handleSecretTap);
        titleElement.addEventListener('touchend', handleSecretTap);
    }
});

function handleSecretTap(e) {
    e.preventDefault();
    e.stopPropagation();
    
    tapCount++;
    
    // İlk tıklamada timeout başlat
    if (tapCount === 1) {
        tapTimeout = setTimeout(() => {
            tapCount = 0;
        }, TAP_TIME_WINDOW);
    }
    
    // Eşik değere ulaşıldıysa ayarları aç
    if (tapCount >= TAP_THRESHOLD) {
        clearTimeout(tapTimeout);
        tapCount = 0;
        openSettings();
        
        // Görsel geri bildirim
        const feedback = document.createElement('div');
        feedback.textContent = '⚙️';
        feedback.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 60px;
            animation: fadeOut 1s forwards;
            z-index: 10000;
            pointer-events: none;
        `;
        document.body.appendChild(feedback);
        
        setTimeout(() => feedback.remove(), 1000);
    }
}

// Fade out animasyonu için CSS ekle
if (!document.getElementById('secretTapStyles')) {
    const style = document.createElement('style');
    style.id = 'secretTapStyles';
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            to { opacity: 0; transform: translate(-50%, -50%) scale(2); }
        }
    `;
    document.head.appendChild(style);
}
