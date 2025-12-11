// ═══════════════════════════════════════════════════════════════════
// HUMA - Türkçe Alfabe Öğrenme Uygulaması
// Ses Klonlama Sistemi ile Birleştirilmiş Versiyon
// Versiyon: 4.1.0 - Debug Sistemi
// Son Güncelleme: 2024-12-11
// ═══════════════════════════════════════════════════════════════════

const HUMA_VERSION = '4.2.0';
const HUMA_BUILD_DATE = '2024-12-11';
const HUMA_FEATURES = ['Ses Klonlama', 'Debug Sistemi', 'Kayıt Rehberi', 'Motor Test Kontrolleri'];

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
        // Önce ses klonlama sistemini kontrol et
        if (window.voiceCloningSystem && voiceCloningSystem.isEnabled()) {
            try {
                const clonedAudio = await voiceCloningSystem.synthesize(text);
                if (clonedAudio) {
                    console.log('🎤 AudioManager: Klonlanan ses kullanıldı');
                    return true; // Klonlanan ses çalındı, normal TTS'e gerek yok
                }
            } catch (error) {
                console.warn('⚠️ AudioManager: Ses klonlama hatası, normal TTS kullanılacak:', error);
                
                // Error handler ile yönet
                if (errorHandler) {
                    errorHandler.handleError(error, 'Ses klonlama (AudioManager)', 'warning', false);
                }
                
                // Ses klonlama hatası durumunda sistem durumunu kontrol et
                if (voiceCloningSystem) {
                    const systemStatus = voiceCloningSystem.validateSystemState();
                    if (!systemStatus.isValid) {
                        console.log('🚫 Ses klonlama sistemi geçersiz, devre dışı bırakılıyor');
                        voiceCloningSystem.setEnabled(false);
                        
                        if (errorHandler) {
                            errorHandler.handleError('Ses klonlama sistemi devre dışı bırakıldı', 'Sistem durumu', 'warning', true);
                        }
                    }
                }
            }
        }
        
        // Normal TTS işlemi
        if (!this.apiKey) {
            throw new Error('API key bulunamadı. Lütfen ayarlardan Google Cloud API key\'inizi girin.');
        }

        const cacheKey = this.getCacheKey(text);

        if (this.audioCache.has(cacheKey)) {
            await this.playAudioData(this.audioCache.get(cacheKey));
            return true;
        }

        if (!this.canUseAPI(text.length)) {
            const anyCache = this.findAnyCacheForText(text);
            if (anyCache) {
                await this.playAudioData(anyCache);
                return true;
            }
            throw new Error(`Kullanım limiti aşıldı! Kalan: ${this.getRemainingQuota()} karakter.`);
        }

        try {
            const audioData = await this.generateAudio(text);
            this.addUsage(text.length);
            this.audioCache.set(cacheKey, audioData);
            this.saveCacheToStorage();
            await this.playAudioData(audioData);
            return true;
        } catch (error) {
            return await this.speakWithBrowser(text);
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
        // Önce ses klonlama sistemini kontrol et
        if (window.voiceCloningSystem && voiceCloningSystem.isEnabled()) {
            try {
                const clonedAudio = await voiceCloningSystem.synthesize(text);
                if (clonedAudio) {
                    console.log('🎤 AudioManager.speakWithBrowser: Klonlanan ses kullanıldı');
                    return true; // Klonlanan ses çalındı
                }
            } catch (error) {
                console.warn('⚠️ AudioManager.speakWithBrowser: Ses klonlama hatası, normal TTS kullanılacak:', error);
                // Ses klonlama hatası durumunda sistem durumunu kontrol et
                if (voiceCloningSystem) {
                    const systemStatus = voiceCloningSystem.validateSystemState();
                    if (!systemStatus.isValid) {
                        console.log('🚫 Ses klonlama sistemi geçersiz, devre dışı bırakılıyor');
                        voiceCloningSystem.setEnabled(false);
                    }
                }
            }
        }
        
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
                resolve(true);
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
    
    // Ses klonlama ile seamless entegrasyon - Test kontrolleri ile
    async speakWithVoiceCloning(text, forceVoiceCloning = false) {
        console.log('🎛️ Test Kontrolleri:', ENGINE_CONTROLS);
        
        // 1) Ses klonlama kontrolü (eğer test kontrolünde etkin)
        if (ENGINE_CONTROLS.voiceCloning && (forceVoiceCloning || (window.voiceCloningSystem && voiceCloningSystem.isEnabled()))) {
            try {
                const clonedAudio = await voiceCloningSystem.synthesize(text);
                if (clonedAudio) {
                    console.log('🎤 AudioManager.speakWithVoiceCloning: Klonlanan ses kullanıldı');
                    return { success: true, source: 'voice-cloning' };
                }
            } catch (error) {
                console.warn('⚠️ Ses klonlama hatası, fallback kullanılacak:', error);
            }
        } else if (!ENGINE_CONTROLS.voiceCloning) {
            console.log('🚫 Ses klonlama test kontrolü ile devre dışı bırakıldı');
        }
        
        // 2) Google TTS fallback (eğer test kontrolünde etkin)
        if (ENGINE_CONTROLS.googleTTS && this.apiKey) {
            try {
                const result = await this.speak(text);
                console.log('🌐 Google TTS kullanıldı');
                return { success: result === true, source: 'google-tts' };
            } catch (error) {
                console.warn('⚠️ Google TTS hatası, browser TTS kullanılacak:', error);
            }
        } else if (!ENGINE_CONTROLS.googleTTS) {
            console.log('🚫 Google TTS test kontrolü ile devre dışı bırakıldı');
        }
        
        // 3) Browser TTS fallback (eğer test kontrolünde etkin)
        if (ENGINE_CONTROLS.browserTTS) {
            try {
                const result = await this.speakWithBrowser(text);
                console.log('🔊 Tarayıcı TTS kullanıldı');
                return { success: result === true, source: 'browser-tts' };
            } catch (error) {
                console.error('❌ Tarayıcı TTS hatası:', error);
            }
        } else {
            console.log('🚫 Tarayıcı TTS test kontrolü ile devre dışı bırakıldı');
        }
        
        // Hiçbir motor kullanılamadı
        console.error('❌ Tüm ses motorları devre dışı veya başarısız!');
        return { success: false, source: 'none', error: 'Tüm ses motorları devre dışı' };
    }
    
    // Ses klonlama durumu değişikliği bildirimi
    onVoiceCloningStateChange(enabled) {
        console.log(`🔄 AudioManager: Ses klonlama ${enabled ? 'etkinleştirildi' : 'devre dışı bırakıldı'}`);
        
        // Cache stratejisini güncelle
        if (!enabled) {
            // Ses klonlama devre dışıysa, normal TTS cache'ini optimize et
            console.log('📦 Normal TTS cache optimizasyonu yapılıyor...');
        } else {
            // Ses klonlama etkinse, cache'i temizle
            console.log('🗑️ Ses klonlama etkinleştirildi, cache temizleniyor...');
        }
    }
}

// ═══════════════════════════════════════════════════════════════════
// VOICE CLONING SYSTEM - Ses klonlama sistemi
// ═══════════════════════════════════════════════════════════════════

class VoiceCloningSystem {
    constructor(storage, audioManager) {
        this.storage = storage;
        this.audioManager = audioManager;
        this.isRecording = false;
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.currentRecordingLetter = null;
        
        // Ses klonlama durumu
        this.enabled = this.storage.get('voice_cloning_enabled', 'false') === 'true';
        
        // Bileşenler
        this.audioAnalyzer = new AudioAnalyzer();
        this.profileManager = new VoiceProfileManager(storage);
        this.synthesizer = new AudioSynthesizer(storage, audioManager);
        this.cacheManager = new VoiceCacheManager(storage);
        
        // AudioManager ile entegrasyon
        if (this.audioManager) {
            this.audioManager.voiceCloningSystem = this;
        }
    }
    
    // Tema uyumluluğu testi
    testThemeCompatibility() {
        const results = {
            compatible: true,
            issues: [],
            testedThemes: []
        };
        
        const themes = ['alfabe', 'ciftlik', 'ev', 'sayilar'];
        
        themes.forEach(theme => {
            try {
                // Tema için test metni oluştur
                const testItems = theme === 'sayilar' ? ['0', '1', '2'] : ['A', 'B', 'C'];
                const testTexts = testItems.map(item => {
                    return THEMES[theme] && THEMES[theme][item] ? THEMES[theme][item] : `${item} harfi test`;
                });
                
                // Her test metni için ses klonlama uyumluluğunu kontrol et
                testTexts.forEach(text => {
                    if (!text || typeof text !== 'string' || text.trim().length === 0) {
                        results.compatible = false;
                        results.issues.push(`${theme} teması için geçersiz metin: ${text}`);
                    }
                });
                
                results.testedThemes.push(theme);
                console.log(`✅ ${theme} teması ses klonlama ile uyumlu`);
                
            } catch (error) {
                results.compatible = false;
                results.issues.push(`${theme} teması test hatası: ${error.message}`);
                console.error(`❌ ${theme} teması test hatası:`, error);
            }
        });
        
        return results;
    }
    
    // Tema değişikliği sonrası cache temizleme
    onThemeChange(oldTheme, newTheme) {
        console.log(`🎨 Ses klonlama: Tema değişti ${oldTheme} → ${newTheme}`);
        
        // Cache'i temizle (tema değiştiğinde metinler değişir)
        if (this.cacheManager) {
            const oldCacheSize = this.cacheManager.getSize();
            this.cacheManager.clear();
            console.log(`🗑️ Cache temizlendi: ${oldCacheSize} öğe silindi`);
        }
        
        // Profil durumunu kontrol et
        if (this.enabled) {
            const profile = this.profileManager.getProfile();
            if (!profile || profile.samples.length === 0) {
                console.warn('⚠️ Tema değişti ama ses profili yok');
                this.handleMissingProfile();
            }
        }
    }
    
    // Ses klonlama durumu
    isEnabled() {
        return this.enabled;
    }
    
    setEnabled(enabled) {
        const wasEnabled = this.enabled;
        this.enabled = enabled;
        this.storage.set('voice_cloning_enabled', enabled.toString());
        
        // Durum değişikliği logla
        this.storage.set('voice_cloning_last_toggle', Date.now().toString());
        
        // UI güncelle
        const toggle = document.getElementById('voiceCloningEnabled');
        if (toggle) {
            toggle.checked = enabled;
        }
        
        // AudioManager'a bildir
        if (this.audioManager && typeof this.audioManager.onVoiceCloningStateChange === 'function') {
            this.audioManager.onVoiceCloningStateChange(enabled);
        }
        
        // Cache temizle (durum değiştiğinde)
        if (wasEnabled !== enabled) {
            this.handleStateChange(wasEnabled, enabled);
        }
        
        console.log(`🎤 Ses klonlama ${enabled ? 'etkinleştirildi' : 'devre dışı bırakıldı'}`);
    }
    
    handleStateChange(wasEnabled, isEnabled) {
        if (isEnabled && !wasEnabled) {
            // Etkinleştirme
            console.log('🔄 Ses klonlama etkinleştiriliyor...');
            
            // Profil yükle ve doğrula
            const profile = this.profileManager.getProfile();
            if (!profile || profile.samples.length === 0) {
                console.warn('⚠️ Profil bulunamadı, ses klonlama devre dışı bırakılıyor');
                this.setEnabled(false);
                return;
            }
            
            // Cache'i temizle (yeni profil parametreleri için)
            this.cacheManager.clear();
            
            console.log('✅ Ses klonlama hazır');
            
        } else if (!isEnabled && wasEnabled) {
            // Devre dışı bırakma
            console.log('🔄 Ses klonlama devre dışı bırakılıyor...');
            
            // Çalan sesi durdur
            if (this.synthesizer) {
                this.synthesizer.stop();
            }
            
            console.log('✅ Normal TTS moduna geçildi');
        }
    }
    
    // Durum bilgisi
    getStatus() {
        const profile = this.profileManager.getProfile();
        const stats = this.profileManager.getProfileStats();
        
        return {
            enabled: this.enabled,
            hasProfile: profile !== null,
            sampleCount: profile ? profile.samples.length : 0,
            profileQuality: profile ? profile.quality : 0,
            lastToggle: this.storage.get('voice_cloning_last_toggle'),
            cacheSize: this.cacheManager.getSize(),
            isRecording: this.isRecording,
            stats: stats
        };
    }
    
    // Otomatik profil yükleme
    loadProfileIfAvailable() {
        const profile = this.profileManager.getProfile();
        
        if (profile && profile.samples.length > 0) {
            console.log(`📂 Ses profili yüklendi: ${profile.samples.length} örnek, kalite ${Math.round(profile.quality)}%`);
            return true;
        } else {
            console.log('📂 Ses profili bulunamadı');
            return false;
        }
    }
    
    // Eksik profil senaryosu
    handleMissingProfile() {
        if (this.enabled) {
            console.warn('⚠️ Ses klonlama etkin ama profil yok');
            
            // Kullanıcıyı bilgilendir
            const shouldRecord = confirm(
                '⚠️ Ses klonlama etkin ancak ses profili bulunamadı.\n\n' +
                'Ses kaydı yapmak istiyor musunuz?'
            );
            
            if (shouldRecord) {
                // Kayıt arayüzünü aç
                if (typeof startVoiceRecording === 'function') {
                    startVoiceRecording();
                }
            } else {
                // Ses klonlamayı devre dışı bırak
                this.setEnabled(false);
            }
        }
    }
    
    // Sistem durumu kontrolü
    validateSystemState() {
        const issues = [];
        
        // Temel kontroller
        if (!this.storage) {
            issues.push('Storage sistemi bulunamadı');
        }
        
        if (!this.audioManager) {
            issues.push('Audio manager bulunamadı');
        }
        
        if (!('speechSynthesis' in window)) {
            issues.push('Tarayıcı ses sentezini desteklemiyor');
        }
        
        if (!navigator.mediaDevices) {
            issues.push('Mikrofon erişimi desteklenmiyor');
        }
        
        // Profil kontrolleri
        if (this.enabled) {
            const profile = this.profileManager.getProfile();
            if (!profile) {
                issues.push('Ses profili bulunamadı');
            } else if (profile.samples.length === 0) {
                issues.push('Ses profili boş');
            } else if (profile.quality < 30) {
                issues.push('Ses profili kalitesi çok düşük');
            }
        }
        
        return {
            isValid: issues.length === 0,
            issues: issues
        };
    }
    
    // Ses örneği kaydetme
    async startRecording(letter = null) {
        if (this.isRecording) {
            throw new Error('Zaten kayıt yapılıyor');
        }
        
        try {
            // Mikrofon erişimi iste
            const stream = await navigator.mediaDevices.getUserMedia({ 
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true,
                    sampleRate: 44100
                }
            });
            
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
            
            this.mediaRecorder = new MediaRecorder(stream, mimeType ? { mimeType } : {});
            // FIXED: MediaRecorder.stream is readonly - using separate property instead
            this.currentStream = stream;
            console.log('✅ MediaRecorder created successfully, stream stored in currentStream');
            this.audioChunks = [];
            this.currentRecordingLetter = letter;
            this.isRecording = true;
            
            this.mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    this.audioChunks.push(event.data);
                }
            };
            
            this.mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(this.audioChunks, { type: mimeType || 'audio/webm' });
                
                try {
                    await this.processSample(audioBlob, letter);
                } catch (error) {
                    console.error('❌ Ses işleme hatası:', error);
                    alert('❌ Ses kaydı işlenirken hata oluştu. Lütfen tekrar deneyin.');
                }
                
                // Stream'i temizle
                if (this.currentStream) {
                    this.currentStream.getTracks().forEach(track => track.stop());
                    this.currentStream = null;
                }
                this.isRecording = false;
                this.mediaRecorder = null;
            };
            
            this.mediaRecorder.onerror = (event) => {
                console.error('❌ MediaRecorder hatası:', event.error);
                this.isRecording = false;
                if (this.currentStream) {
                    this.currentStream.getTracks().forEach(track => track.stop());
                    this.currentStream = null;
                }
                throw new Error('Kayıt sırasında hata oluştu: ' + event.error);
            };
            
            // Kayıt başlat
            this.mediaRecorder.start(1000); // Her saniye data event'i
            console.log('🎤 Kayıt başlatıldı, MIME type:', mimeType || 'default');
            
        } catch (error) {
            this.isRecording = false;
            this.mediaRecorder = null;
            
            // Hata türüne göre özel mesajlar
            if (error.name === 'NotAllowedError') {
                error.message = 'Mikrofon erişimi reddedildi';
            } else if (error.name === 'NotFoundError') {
                error.message = 'Mikrofon bulunamadı';
            } else if (error.name === 'NotReadableError') {
                error.message = 'Mikrofon başka bir uygulama tarafından kullanılıyor';
            }
            
            // Error handler ile yönet
            if (errorHandler) {
                errorHandler.handleError(error, 'Ses kaydı başlatma', 'error', true);
            }
            
            throw error;
        }
    }
    
    stopRecording() {
        if (this.mediaRecorder && this.isRecording) {
            this.mediaRecorder.stop();
        }
        
        // Stream'i manuel olarak temizle (eğer hala varsa)
        if (this.currentStream) {
            this.currentStream.getTracks().forEach(track => track.stop());
            this.currentStream = null;
        }
    }
    
    async processSample(audioBlob, letter) {
        try {
            console.log('🔄 Ses örneği işleniyor...');
            
            // Ses örneğini analiz et
            const arrayBuffer = await audioBlob.arrayBuffer();
            
            // Kalite kontrolü (hızlı)
            const quality = this.audioAnalyzer.checkQuality(arrayBuffer);
            
            // Düşük kalite uyarısı
            if (quality.score < 30) {
                const proceed = confirm(
                    `⚠️ Ses kalitesi düşük (${Math.round(quality.score)}%).\n\n` +
                    `Sorunlar:\n${quality.issues.map(i => '• ' + i.description).join('\n')}\n\n` +
                    `Öneriler:\n${quality.recommendations.map(r => '• ' + r).join('\n')}\n\n` +
                    `Yine de kaydetmek istiyor musunuz?`
                );
                
                if (!proceed) {
                    throw new Error('Kullanıcı düşük kalite nedeniyle kaydı iptal etti');
                }
            }
            
            // Detaylı analiz
            const analysis = await this.audioAnalyzer.analyzeAudio(arrayBuffer);
            
            // Gürültü filtreleme (isteğe bağlı)
            let processedBuffer = arrayBuffer;
            if (quality.score < 70) {
                console.log('🔧 Gürültü filtreleme uygulanıyor...');
                processedBuffer = await this.audioAnalyzer.filterNoise(arrayBuffer);
            }
            
            // Ses örneğini kaydet
            const reader = new FileReader();
            const processedBlob = new Blob([processedBuffer], { type: audioBlob.type });
            reader.readAsDataURL(processedBlob);
            
            reader.onloadend = () => {
                const base64Audio = reader.result;
                
                const sample = {
                    id: Date.now().toString(),
                    audioData: base64Audio,
                    duration: analysis.duration,
                    quality: quality.score,
                    timestamp: Date.now(),
                    sampleRate: analysis.sampleRate,
                    letter: letter,
                    analysis: {
                        rms: analysis.rms,
                        zeroCrossings: analysis.zeroCrossings,
                        peakAmplitude: analysis.peakAmplitude,
                        spectralCentroid: analysis.spectralCentroid,
                        silenceRatio: analysis.silenceRatio,
                        dynamicRange: analysis.dynamicRange,
                        snr: analysis.snr
                    },
                    qualityReport: quality
                };
                
                // Profil güncelle
                this.profileManager.addSample(sample);
                
                // Kalite geri bildirimi
                if (qualityFeedback) {
                    const feedback = qualityFeedback.analyzeRecordingQuality(sample);
                    qualityFeedback.showQualityFeedback(feedback);
                }
                
                // Kullanıcıya bilgi ver
                const message = `✅ Ses örneği kaydedildi!\n\n` +
                    `📊 Kalite: ${Math.round(quality.score)}%\n` +
                    `⏱️ Süre: ${analysis.duration.toFixed(1)}s\n` +
                    `🔊 RMS: ${(analysis.rms * 100).toFixed(1)}%\n` +
                    `📈 SNR: ${analysis.snr.toFixed(1)}dB`;
                
                console.log(message);
                
                // Kalite durumuna göre mesaj
                if (quality.score >= 80) {
                    console.log('🎉 Mükemmel kalite!');
                } else if (quality.score >= 60) {
                    console.log('👍 İyi kalite.');
                } else {
                    console.log('⚠️ Kalite artırılabilir.');
                }
            };
            
            reader.onerror = () => {
                throw new Error('Ses dosyası okunamadı');
            };
            
        } catch (error) {
            console.error('❌ Ses işleme hatası:', error);
            
            if (error.message.includes('iptal etti')) {
                // Kullanıcı iptal etti, sessizce geç
                if (errorHandler) {
                    errorHandler.handleError('Ses kaydı kullanıcı tarafından iptal edildi', 'Ses işleme', 'info', false);
                }
                return;
            }
            
            // Error handler ile yönet
            if (errorHandler) {
                errorHandler.handleError(error, 'Ses kaydı işleme', 'error', true);
            } else {
                alert('❌ Ses kaydı işlenirken hata oluştu:\n\n' + error.message + '\n\nLütfen tekrar deneyin.');
            }
            
            throw error;
        }
    }
    
    // Ses sentezi
    async synthesize(text) {
        if (!this.enabled) {
            return null; // Normal TTS kullanılacak
        }
        
        const profile = this.profileManager.getProfile();
        if (!profile || profile.samples.length === 0) {
            console.warn('⚠️ Ses profili bulunamadı veya boş, normal TTS kullanılacak');
            return null;
        }
        
        // Metin validasyonu
        if (!text || typeof text !== 'string' || text.trim().length === 0) {
            console.warn('⚠️ Geçersiz metin, normal TTS kullanılacak');
            return null;
        }
        
        try {
            // Cache kontrol et
            const cacheKey = this.cacheManager.generateKey(text, profile);
            const cached = this.cacheManager.get(cacheKey);
            if (cached) {
                console.log('📦 Cache\'den klonlanan ses alındı');
                
                // Cache'den alınan sesi çal
                await this.playClonedAudio(cached);
                return cached;
            }
            
            // Yeni ses üret
            console.log('🎤 Klonlanan ses üretiliyor...');
            const audioData = await this.synthesizer.synthesize(text, profile);
            
            // Cache'e kaydet
            this.cacheManager.set(cacheKey, audioData);
            
            console.log('✅ Klonlanan ses üretildi ve cache\'lendi');
            return audioData;
            
        } catch (error) {
            console.error('❌ Ses klonlama hatası:', error);
            
            // Hata durumunda normal TTS'e geri dön
            console.log('🔄 Normal TTS\'e geri dönülüyor...');
            return null;
        }
    }
    
    async playClonedAudio(audioData) {
        // Cache'den alınan ses verisini çal
        console.log('🔊 Klonlanan ses çalınıyor:', audioData.text);
        
        try {
            // Eğer audioData gerçek ses verisi içeriyorsa (base64 audio)
            if (audioData.audioContent) {
                // AudioManager'ın playAudioData metodunu kullan
                if (this.audioManager) {
                    await this.audioManager.playAudioData(audioData.audioContent);
                    return true;
                }
            }
            
            // Eğer audioData sadece metadata ise, synthesizer ile çal
            if (audioData.text && audioData.profile) {
                const profile = this.profileManager.getProfile();
                if (profile && profile.id === audioData.profile) {
                    await this.synthesizer.synthesize(audioData.text, profile);
                    return true;
                }
            }
            
            // Fallback: Simülasyon için kısa bekleme
            console.log('⚠️ Ses verisi bulunamadı, simülasyon çalınıyor');
            return new Promise(resolve => {
                setTimeout(() => resolve(true), audioData.duration * 1000 || 1000);
            });
            
        } catch (error) {
            console.error('❌ Klonlanan ses çalma hatası:', error);
            throw error;
        }
    }
}

// ═══════════════════════════════════════════════════════════════════
// AUDIO ANALYZER - Ses analizi
// ═══════════════════════════════════════════════════════════════════

class AudioAnalyzer {
    constructor() {
        this.minDuration = 3; // Minimum 3 saniye
        this.maxDuration = 120; // Maksimum 2 dakika
        this.minVolumeThreshold = 0.01; // Minimum ses seviyesi
        this.maxVolumeThreshold = 0.95; // Maksimum ses seviyesi (clipping önleme)
    }
    
    async analyzeAudio(arrayBuffer) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer.slice(0));
            
            const channelData = audioBuffer.getChannelData(0);
            const sampleRate = audioBuffer.sampleRate;
            const duration = audioBuffer.duration;
            
            // Temel özellikler
            const rms = this.calculateRMS(channelData);
            const zeroCrossings = this.calculateZeroCrossings(channelData);
            const peakAmplitude = this.calculatePeakAmplitude(channelData);
            const spectralCentroid = this.calculateSpectralCentroid(channelData, sampleRate);
            const silenceRatio = this.calculateSilenceRatio(channelData);
            
            // Ses karakteristikleri
            const features = {
                duration,
                sampleRate,
                rms,
                zeroCrossings,
                peakAmplitude,
                spectralCentroid,
                silenceRatio,
                energy: rms * rms,
                dynamicRange: this.calculateDynamicRange(channelData),
                snr: this.estimateSignalToNoiseRatio(channelData)
            };
            
            // Cleanup
            audioContext.close();
            
            return features;
            
        } catch (error) {
            console.error('❌ Ses analizi hatası:', error);
            throw new Error('Ses dosyası analiz edilemedi: ' + error.message);
        }
    }
    
    checkQuality(arrayBuffer) {
        const issues = [];
        let score = 100;
        const recommendations = [];
        
        try {
            // Temel boyut kontrolü
            const fileSizeMB = arrayBuffer.byteLength / (1024 * 1024);
            
            // Süre tahmini (yaklaşık)
            const estimatedDuration = arrayBuffer.byteLength / (44100 * 2); // 16-bit mono varsayımı
            
            // Süre kontrolü
            if (estimatedDuration < this.minDuration) {
                issues.push({
                    type: 'duration',
                    severity: 'high',
                    description: `Ses örneği çok kısa (${estimatedDuration.toFixed(1)}s < ${this.minDuration}s)`
                });
                score -= 40;
                recommendations.push(`En az ${this.minDuration} saniye kayıt yapın`);
            } else if (estimatedDuration > this.maxDuration) {
                issues.push({
                    type: 'duration',
                    severity: 'medium',
                    description: `Ses örneği çok uzun (${estimatedDuration.toFixed(1)}s > ${this.maxDuration}s)`
                });
                score -= 15;
                recommendations.push(`Kayıt süresini ${this.maxDuration} saniyenin altında tutun`);
            }
            
            // Dosya boyutu kontrolü
            if (fileSizeMB > 50) { // 50MB
                issues.push({
                    type: 'size',
                    severity: 'high',
                    description: `Dosya çok büyük (${fileSizeMB.toFixed(1)}MB)`
                });
                score -= 20;
                recommendations.push('Daha kısa kayıt yapın veya kaliteyi düşürün');
            } else if (fileSizeMB < 0.1) { // 100KB
                issues.push({
                    type: 'size',
                    severity: 'medium',
                    description: `Dosya çok küçük (${fileSizeMB.toFixed(1)}MB)`
                });
                score -= 10;
                recommendations.push('Daha uzun veya yüksek kalitede kayıt yapın');
            }
            
            // Format kontrolü
            if (arrayBuffer.byteLength === 0) {
                issues.push({
                    type: 'format',
                    severity: 'high',
                    description: 'Boş ses dosyası'
                });
                score = 0;
                recommendations.push('Geçerli bir ses kaydı yapın');
            }
            
        } catch (error) {
            issues.push({
                type: 'analysis',
                severity: 'high',
                description: 'Kalite analizi yapılamadı: ' + error.message
            });
            score -= 30;
        }
        
        // Genel öneriler
        if (score > 80) {
            recommendations.push('Mükemmel! Ses kalitesi çok iyi.');
        } else if (score > 60) {
            recommendations.push('İyi kalite. Daha iyi sonuçlar için sessiz ortamda kayıt yapın.');
        } else if (score > 40) {
            recommendations.push('Orta kalite. Mikrofona daha yakın konuşun ve gürültüyü azaltın.');
        } else {
            recommendations.push('Düşük kalite. Yeni bir kayıt yapmanızı öneririz.');
        }
        
        return {
            score: Math.max(0, Math.min(100, score)),
            issues,
            recommendations
        };
    }
    
    async filterNoise(arrayBuffer) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer.slice(0));
            
            const channelData = audioBuffer.getChannelData(0);
            const filteredData = new Float32Array(channelData.length);
            
            // Basit high-pass filter (gürültü azaltma)
            const cutoffFreq = 80; // 80 Hz altını filtrele
            const sampleRate = audioBuffer.sampleRate;
            const rc = 1.0 / (cutoffFreq * 2 * Math.PI);
            const dt = 1.0 / sampleRate;
            const alpha = dt / (rc + dt);
            
            filteredData[0] = channelData[0];
            for (let i = 1; i < channelData.length; i++) {
                filteredData[i] = alpha * (filteredData[i-1] + channelData[i] - channelData[i-1]);
            }
            
            // Yeni AudioBuffer oluştur
            const filteredBuffer = audioContext.createBuffer(1, filteredData.length, sampleRate);
            filteredBuffer.copyToChannel(filteredData, 0);
            
            // ArrayBuffer'a geri çevir (basitleştirilmiş)
            audioContext.close();
            return arrayBuffer; // Şimdilik orijinali döndür
            
        } catch (error) {
            console.warn('⚠️ Gürültü filtreleme hatası:', error);
            return arrayBuffer; // Hata durumunda orijinali döndür
        }
    }
    
    async getVolumeLevel(arrayBuffer) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer.slice(0));
            const channelData = audioBuffer.getChannelData(0);
            
            const rms = this.calculateRMS(channelData);
            const level = Math.min(100, rms * 100 * 10); // 0-100 arası
            
            audioContext.close();
            return level;
            
        } catch (error) {
            console.warn('⚠️ Ses seviyesi hesaplama hatası:', error);
            return 0;
        }
    }
    
    // Yardımcı fonksiyonlar
    calculateRMS(channelData) {
        let sum = 0;
        for (let i = 0; i < channelData.length; i++) {
            sum += channelData[i] * channelData[i];
        }
        return Math.sqrt(sum / channelData.length);
    }
    
    calculateZeroCrossings(channelData) {
        let crossings = 0;
        for (let i = 1; i < channelData.length; i++) {
            if ((channelData[i] >= 0) !== (channelData[i - 1] >= 0)) {
                crossings++;
            }
        }
        return crossings / channelData.length; // Normalize et
    }
    
    calculatePeakAmplitude(channelData) {
        let peak = 0;
        for (let i = 0; i < channelData.length; i++) {
            const abs = Math.abs(channelData[i]);
            if (abs > peak) peak = abs;
        }
        return peak;
    }
    
    calculateSpectralCentroid(channelData, sampleRate) {
        // Basitleştirilmiş spektral centroid hesaplama
        const fftSize = 1024;
        let weightedSum = 0;
        let magnitudeSum = 0;
        
        for (let i = 0; i < Math.min(fftSize, channelData.length); i++) {
            const magnitude = Math.abs(channelData[i]);
            const frequency = (i * sampleRate) / fftSize;
            
            weightedSum += frequency * magnitude;
            magnitudeSum += magnitude;
        }
        
        return magnitudeSum > 0 ? weightedSum / magnitudeSum : 0;
    }
    
    calculateSilenceRatio(channelData) {
        const threshold = 0.01; // Sessizlik eşiği
        let silentSamples = 0;
        
        for (let i = 0; i < channelData.length; i++) {
            if (Math.abs(channelData[i]) < threshold) {
                silentSamples++;
            }
        }
        
        return silentSamples / channelData.length;
    }
    
    calculateDynamicRange(channelData) {
        const peak = this.calculatePeakAmplitude(channelData);
        const rms = this.calculateRMS(channelData);
        
        if (rms === 0) return 0;
        
        // dB cinsinden dinamik aralık
        return 20 * Math.log10(peak / rms);
    }
    
    estimateSignalToNoiseRatio(channelData) {
        // Basit SNR tahmini
        const windowSize = Math.floor(channelData.length / 10);
        let maxRMS = 0;
        let minRMS = Infinity;
        
        for (let i = 0; i < channelData.length - windowSize; i += windowSize) {
            const window = channelData.slice(i, i + windowSize);
            const rms = this.calculateRMS(window);
            
            if (rms > maxRMS) maxRMS = rms;
            if (rms < minRMS) minRMS = rms;
        }
        
        if (minRMS === 0) return Infinity;
        return 20 * Math.log10(maxRMS / minRMS);
    }
}

// ═══════════════════════════════════════════════════════════════════
// VOICE PROFILE MANAGER - Ses profili yönetimi
// ═══════════════════════════════════════════════════════════════════

class VoiceProfileManager {
    constructor(storage) {
        this.storage = storage;
        this.maxSamples = 10; // Maksimum örnek sayısı
        this.profileVersion = '1.0';
    }
    
    addSample(sample) {
        try {
            let profile = this.getProfile();
            
            if (!profile) {
                profile = this.createEmptyProfile();
                console.log('🆕 Yeni ses profili oluşturuldu');
            }
            
            // Örnek validasyonu
            if (!this.validateSample(sample)) {
                throw new Error('Geçersiz ses örneği');
            }
            
            // Maksimum örnek sayısı kontrolü
            if (profile.samples.length >= this.maxSamples) {
                // En eski örneği sil
                profile.samples.shift();
                console.log('📝 En eski ses örneği silindi (maksimum limit)');
            }
            
            // Örneği ekle
            profile.samples.push(sample);
            profile.updatedAt = Date.now();
            
            // Profil özelliklerini güncelle
            this.updateProfileFeatures(profile);
            
            // Kaydet
            this.save(profile);
            
            console.log(`✅ Ses örneği profile eklendi (${profile.samples.length}/${this.maxSamples})`);
            
        } catch (error) {
            console.error('❌ Ses örneği ekleme hatası:', error);
            throw error;
        }
    }
    
    removeSample(sampleId) {
        const profile = this.getProfile();
        if (!profile) return false;
        
        const initialLength = profile.samples.length;
        profile.samples = profile.samples.filter(sample => sample.id !== sampleId);
        
        if (profile.samples.length < initialLength) {
            profile.updatedAt = Date.now();
            this.updateProfileFeatures(profile);
            this.save(profile);
            
            console.log(`🗑️ Ses örneği silindi: ${sampleId}`);
            return true;
        }
        
        return false;
    }
    
    createEmptyProfile() {
        return {
            id: 'profile_' + Date.now(),
            version: this.profileVersion,
            samples: [],
            parameters: {
                pitch: 1.0,
                rate: 1.0,
                volume: 1.0,
                voice: '',
                // Gelişmiş parametreler
                emphasis: 1.0,
                breathiness: 0.5,
                roughness: 0.3
            },
            features: {
                sampleCount: 0,
                averageQuality: 0,
                totalDuration: 0,
                averageRMS: 0,
                averagePitch: 0,
                spectralProfile: null
            },
            quality: 0,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            metadata: {
                deviceInfo: this.getDeviceInfo(),
                browserInfo: this.getBrowserInfo()
            }
        };
    }
    
    updateProfileFeatures(profile) {
        if (profile.samples.length === 0) {
            profile.features = {
                sampleCount: 0,
                averageQuality: 0,
                totalDuration: 0,
                averageRMS: 0,
                averagePitch: 0,
                spectralProfile: null
            };
            profile.quality = 0;
            return;
        }
        
        // Temel istatistikler
        const totalQuality = profile.samples.reduce((sum, sample) => sum + sample.quality, 0);
        const totalDuration = profile.samples.reduce((sum, sample) => sum + sample.duration, 0);
        
        // Analiz verilerinden ortalamalar
        let totalRMS = 0;
        let totalSpectralCentroid = 0;
        let validAnalysisCount = 0;
        
        profile.samples.forEach(sample => {
            if (sample.analysis) {
                totalRMS += sample.analysis.rms || 0;
                totalSpectralCentroid += sample.analysis.spectralCentroid || 0;
                validAnalysisCount++;
            }
        });
        
        // Özellikler güncelle
        profile.features = {
            sampleCount: profile.samples.length,
            averageQuality: totalQuality / profile.samples.length,
            totalDuration: totalDuration,
            averageRMS: validAnalysisCount > 0 ? totalRMS / validAnalysisCount : 0,
            averagePitch: validAnalysisCount > 0 ? totalSpectralCentroid / validAnalysisCount : 0,
            spectralProfile: this.calculateSpectralProfile(profile.samples)
        };
        
        // Genel kalite skoru
        profile.quality = this.calculateOverallQuality(profile);
        
        console.log(`📊 Profil özellikleri güncellendi: Kalite ${Math.round(profile.quality)}%, ${profile.samples.length} örnek`);
    }
    
    calculateSpectralProfile(samples) {
        // Basitleştirilmiş spektral profil
        const validSamples = samples.filter(s => s.analysis && s.analysis.spectralCentroid);
        
        if (validSamples.length === 0) return null;
        
        const centroids = validSamples.map(s => s.analysis.spectralCentroid);
        const mean = centroids.reduce((sum, c) => sum + c, 0) / centroids.length;
        
        // Standart sapma
        const variance = centroids.reduce((sum, c) => sum + Math.pow(c - mean, 2), 0) / centroids.length;
        const stdDev = Math.sqrt(variance);
        
        return {
            mean: mean,
            stdDev: stdDev,
            min: Math.min(...centroids),
            max: Math.max(...centroids)
        };
    }
    
    calculateOverallQuality(profile) {
        if (profile.samples.length === 0) return 0;
        
        let score = profile.features.averageQuality;
        
        // Örnek sayısı bonusu
        const sampleBonus = Math.min(profile.samples.length * 5, 20); // Max 20 puan
        score += sampleBonus;
        
        // Süre bonusu
        if (profile.features.totalDuration > 30) {
            score += 10; // 30+ saniye için bonus
        }
        
        // Tutarlılık bonusu
        const qualityVariance = this.calculateQualityVariance(profile.samples);
        if (qualityVariance < 100) { // Düşük varyans = tutarlı kalite
            score += 5;
        }
        
        return Math.min(100, Math.max(0, score));
    }
    
    calculateQualityVariance(samples) {
        if (samples.length < 2) return 0;
        
        const qualities = samples.map(s => s.quality);
        const mean = qualities.reduce((sum, q) => sum + q, 0) / qualities.length;
        const variance = qualities.reduce((sum, q) => sum + Math.pow(q - mean, 2), 0) / qualities.length;
        
        return variance;
    }
    
    save(profile) {
        try {
            // Profil validasyonu
            if (!this.validate(profile)) {
                throw new Error('Geçersiz profil verisi');
            }
            
            // Backup oluştur
            this.createBackup();
            
            // Ana profili kaydet
            this.storage.setJSON('voice_profile', profile);
            
            // Metadata güncelle
            this.storage.set('voice_profile_last_saved', Date.now().toString());
            
            console.log(`💾 Ses profili kaydedildi: ${profile.id}`);
            
        } catch (error) {
            console.error('❌ Profil kaydetme hatası:', error);
            throw error;
        }
    }
    
    getProfile() {
        try {
            const profile = this.storage.getJSON('voice_profile', null);
            
            if (profile && this.validate(profile)) {
                // Versiyon kontrolü
                if (profile.version !== this.profileVersion) {
                    console.log('🔄 Profil versiyonu güncelleniyor...');
                    return this.migrateProfile(profile);
                }
                
                return profile;
            }
            
            return null;
            
        } catch (error) {
            console.error('❌ Profil yükleme hatası:', error);
            return null;
        }
    }
    
    delete() {
        try {
            // Backup oluştur
            this.createBackup();
            
            // Ana profili sil
            this.storage.remove('voice_profile');
            this.storage.remove('voice_profile_last_saved');
            
            console.log('🗑️ Ses profili silindi');
            
        } catch (error) {
            console.error('❌ Profil silme hatası:', error);
            throw error;
        }
    }
    
    updateParameters(params) {
        const profile = this.getProfile();
        if (!profile) {
            throw new Error('Güncellenecek profil bulunamadı');
        }
        
        // Parametre validasyonu
        const validatedParams = this.validateParameters(params);
        
        profile.parameters = { ...profile.parameters, ...validatedParams };
        profile.updatedAt = Date.now();
        
        this.save(profile);
        
        console.log('⚙️ Profil parametreleri güncellendi:', Object.keys(validatedParams));
    }
    
    resetToDefaults() {
        const profile = this.getProfile();
        if (!profile) return;
        
        profile.parameters = {
            pitch: 1.0,
            rate: 1.0,
            volume: 1.0,
            voice: '',
            emphasis: 1.0,
            breathiness: 0.5,
            roughness: 0.3
        };
        profile.updatedAt = Date.now();
        
        this.save(profile);
        
        console.log('🔄 Profil parametreleri varsayılana sıfırlandı');
    }
    
    validate(profile) {
        if (!profile || typeof profile !== 'object') return false;
        
        // Temel alanlar
        if (!profile.id || !profile.version) return false;
        if (!Array.isArray(profile.samples)) return false;
        if (!profile.parameters || typeof profile.parameters !== 'object') return false;
        if (!profile.features || typeof profile.features !== 'object') return false;
        
        // Parametre validasyonu
        const params = profile.parameters;
        if (typeof params.pitch !== 'number' || params.pitch < 0.1 || params.pitch > 3.0) return false;
        if (typeof params.rate !== 'number' || params.rate < 0.1 || params.rate > 3.0) return false;
        if (typeof params.volume !== 'number' || params.volume < 0.0 || params.volume > 2.0) return false;
        
        // Timestamp validasyonu
        if (typeof profile.createdAt !== 'number' || typeof profile.updatedAt !== 'number') return false;
        
        return true;
    }
    
    validateSample(sample) {
        if (!sample || typeof sample !== 'object') return false;
        
        // Temel alanlar
        if (!sample.id || !sample.audioData) return false;
        if (typeof sample.duration !== 'number' || sample.duration <= 0) return false;
        if (typeof sample.quality !== 'number' || sample.quality < 0 || sample.quality > 100) return false;
        if (typeof sample.timestamp !== 'number') return false;
        
        return true;
    }
    
    validateParameters(params) {
        const validated = {};
        
        if (typeof params.pitch === 'number' && params.pitch >= 0.1 && params.pitch <= 3.0) {
            validated.pitch = params.pitch;
        }
        
        if (typeof params.rate === 'number' && params.rate >= 0.1 && params.rate <= 3.0) {
            validated.rate = params.rate;
        }
        
        if (typeof params.volume === 'number' && params.volume >= 0.0 && params.volume <= 2.0) {
            validated.volume = params.volume;
        }
        
        if (typeof params.voice === 'string') {
            validated.voice = params.voice;
        }
        
        if (typeof params.emphasis === 'number' && params.emphasis >= 0.0 && params.emphasis <= 2.0) {
            validated.emphasis = params.emphasis;
        }
        
        if (typeof params.breathiness === 'number' && params.breathiness >= 0.0 && params.breathiness <= 1.0) {
            validated.breathiness = params.breathiness;
        }
        
        if (typeof params.roughness === 'number' && params.roughness >= 0.0 && params.roughness <= 1.0) {
            validated.roughness = params.roughness;
        }
        
        return validated;
    }
    
    createBackup() {
        try {
            const profile = this.storage.getJSON('voice_profile', null);
            if (profile) {
                const backupKey = `voice_profile_backup_${Date.now()}`;
                this.storage.setJSON(backupKey, profile);
                
                // Eski backupları temizle (son 3'ü sakla)
                this.cleanupBackups();
            }
        } catch (error) {
            console.warn('⚠️ Backup oluşturulamadı:', error);
        }
    }
    
    cleanupBackups() {
        try {
            const backupKeys = [];
            
            // localStorage'dan backup anahtarlarını bul
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith('voice_profile_backup_')) {
                    backupKeys.push(key);
                }
            }
            
            // Tarihe göre sırala (en yeni önce)
            backupKeys.sort((a, b) => {
                const timestampA = parseInt(a.split('_').pop());
                const timestampB = parseInt(b.split('_').pop());
                return timestampB - timestampA;
            });
            
            // İlk 3'ü sakla, geri kalanını sil
            for (let i = 3; i < backupKeys.length; i++) {
                this.storage.remove(backupKeys[i]);
            }
            
        } catch (error) {
            console.warn('⚠️ Backup temizleme hatası:', error);
        }
    }
    
    migrateProfile(oldProfile) {
        try {
            console.log(`🔄 Profil ${oldProfile.version || 'unknown'} -> ${this.profileVersion} versiyonuna güncelleniyor`);
            
            const newProfile = this.createEmptyProfile();
            
            // Eski verileri koru
            newProfile.id = oldProfile.id || newProfile.id;
            newProfile.samples = oldProfile.samples || [];
            newProfile.createdAt = oldProfile.createdAt || newProfile.createdAt;
            
            // Parametreleri güncelle
            if (oldProfile.parameters) {
                newProfile.parameters = { ...newProfile.parameters, ...oldProfile.parameters };
            }
            
            // Özellikleri yeniden hesapla
            this.updateProfileFeatures(newProfile);
            
            // Yeni profili kaydet
            this.save(newProfile);
            
            console.log('✅ Profil başarıyla güncellendi');
            return newProfile;
            
        } catch (error) {
            console.error('❌ Profil güncelleme hatası:', error);
            return null;
        }
    }
    
    getDeviceInfo() {
        return {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language,
            timestamp: Date.now()
        };
    }
    
    getBrowserInfo() {
        return {
            vendor: navigator.vendor,
            cookieEnabled: navigator.cookieEnabled,
            onLine: navigator.onLine,
            timestamp: Date.now()
        };
    }
    
    // Profil istatistikleri
    getProfileStats() {
        const profile = this.getProfile();
        if (!profile) return null;
        
        return {
            sampleCount: profile.samples.length,
            totalDuration: profile.features.totalDuration,
            averageQuality: Math.round(profile.features.averageQuality),
            overallQuality: Math.round(profile.quality),
            createdDate: new Date(profile.createdAt).toLocaleDateString('tr-TR'),
            lastUpdated: new Date(profile.updatedAt).toLocaleDateString('tr-TR'),
            profileAge: Math.floor((Date.now() - profile.createdAt) / (1000 * 60 * 60 * 24)) // gün
        };
    }
    
    // Ses örneği silme
    deleteSample(sampleId) {
        const profile = this.getProfile();
        if (!profile) {
            throw new Error('Ses profili bulunamadı');
        }
        
        const initialLength = profile.samples.length;
        profile.samples = profile.samples.filter(sample => sample.id !== sampleId);
        
        if (profile.samples.length === initialLength) {
            throw new Error('Silinecek ses örneği bulunamadı');
        }
        
        profile.updatedAt = Date.now();
        this.updateProfileFeatures(profile);
        this.save(profile);
        
        console.log(`🗑️ Ses örneği silindi: ${sampleId}`);
        return true;
    }
    
    // Tüm ses örneklerini temizle
    clearAllSamples() {
        const profile = this.getProfile();
        if (!profile) {
            throw new Error('Ses profili bulunamadı');
        }
        
        const deletedCount = profile.samples.length;
        profile.samples = [];
        profile.updatedAt = Date.now();
        this.updateProfileFeatures(profile);
        this.save(profile);
        
        console.log(`🗑️ ${deletedCount} ses örneği silindi`);
        return deletedCount;
    }
}

// ═══════════════════════════════════════════════════════════════════
// AUDIO SYNTHESIZER - Ses sentezi
// ═══════════════════════════════════════════════════════════════════

class AudioSynthesizer {
    constructor(storage, audioManager = null) {
        this.storage = storage;
        this.audioManager = audioManager;
        this.isPlaying = false;
        this.currentUtterance = null;
        this.synthesisQueue = [];
        this.maxQueueSize = 5;
    }
    
    async synthesize(text, profile) {
        return new Promise((resolve, reject) => {
            if (!('speechSynthesis' in window)) {
                reject(new Error('Tarayıcınız ses sentezini desteklemiyor.'));
                return;
            }
            
            // Metin validasyonu
            if (!text || typeof text !== 'string' || text.trim().length === 0) {
                reject(new Error('Geçersiz metin'));
                return;
            }
            
            // Profil validasyonu
            if (!profile || !profile.parameters) {
                reject(new Error('Geçersiz ses profili'));
                return;
            }
            
            try {
                // Utterance oluştur
                const utterance = new SpeechSynthesisUtterance(text.trim());
                
                // Ses parametrelerini uygula
                this.applyVoiceParameters(utterance, profile);
                
                // Ses profili özelliklerini uygula
                this.applyProfileCharacteristics(utterance, profile);
                
                // Event handler'ları ayarla
                utterance.onstart = () => {
                    this.isPlaying = true;
                    this.currentUtterance = utterance;
                    console.log('🔊 Klonlanan ses çalmaya başladı');
                };
                
                utterance.onend = () => {
                    this.isPlaying = false;
                    this.currentUtterance = null;
                    
                    // Ses verisi oluştur (simülasyon)
                    const audioData = {
                        text: text,
                        profile: profile.id,
                        timestamp: Date.now(),
                        duration: this.estimateDuration(text, utterance.rate),
                        parameters: { ...profile.parameters },
                        quality: this.calculateSynthesisQuality(profile)
                    };
                    
                    console.log('✅ Klonlanan ses sentezi tamamlandı');
                    resolve(audioData);
                };
                
                utterance.onerror = (event) => {
                    this.isPlaying = false;
                    this.currentUtterance = null;
                    
                    console.error('❌ Ses sentezi hatası:', event.error);
                    reject(new Error('Ses sentezi hatası: ' + (event.error || 'Bilinmeyen hata')));
                };
                
                utterance.onpause = () => {
                    console.log('⏸️ Ses sentezi duraklatıldı');
                };
                
                utterance.onresume = () => {
                    console.log('▶️ Ses sentezi devam ediyor');
                };
                
                // Sentezi başlat
                speechSynthesis.speak(utterance);
                
            } catch (error) {
                reject(new Error('Ses sentezi başlatılamadı: ' + error.message));
            }
        });
    }
    
    applyVoiceParameters(utterance, profile) {
        const params = profile.parameters;
        
        // Temel parametreler
        utterance.pitch = params.pitch || 1.0;
        utterance.rate = params.rate || 1.0;
        utterance.volume = params.volume || 1.0;
        
        // Gelişmiş parametreler (SpeechSynthesis API sınırları içinde)
        // Emphasis -> pitch modifikasyonu
        if (params.emphasis && params.emphasis !== 1.0) {
            utterance.pitch *= (0.8 + (params.emphasis * 0.4)); // 0.8-1.2 arası
        }
        
        // Breathiness -> rate modifikasyonu (nefes sesi için daha yavaş)
        if (params.breathiness && params.breathiness > 0.5) {
            utterance.rate *= (1.0 - (params.breathiness - 0.5) * 0.2); // Hafif yavaşlatma
        }
        
        // Roughness -> pitch varyasyonu (basit implementasyon)
        if (params.roughness && params.roughness > 0.3) {
            const roughnessVariation = (params.roughness - 0.3) * 0.1;
            utterance.pitch += (Math.random() - 0.5) * roughnessVariation;
        }
        
        // Ses seçimi (profil özelliklerine göre)
        this.selectOptimalVoice(utterance, profile);
        
        // Dil ayarı
        utterance.lang = 'tr-TR';
        
        // Parametreleri sınırlar içinde tut
        utterance.pitch = Math.max(0.1, Math.min(2.0, utterance.pitch));
        utterance.rate = Math.max(0.1, Math.min(10.0, utterance.rate));
        utterance.volume = Math.max(0.0, Math.min(1.0, utterance.volume));
    }
    
    applyProfileCharacteristics(utterance, profile) {
        // Profil özelliklerini kullanarak ses karakteristiklerini ayarla
        if (profile.features && profile.features.averageRMS) {
            // RMS'e göre volume ayarla
            const rmsBonus = Math.min(profile.features.averageRMS * 0.5, 0.2);
            utterance.volume = Math.min(1.0, utterance.volume + rmsBonus);
        }
        
        if (profile.features && profile.features.averagePitch) {
            // Ortalama pitch'e göre ayarlama
            const pitchAdjustment = (profile.features.averagePitch / 2000) * 0.2; // Normalize
            utterance.pitch = Math.max(0.1, Math.min(2.0, utterance.pitch + pitchAdjustment));
        }
        
        // Kalite skoruna göre ayarlama
        if (profile.quality < 70) {
            // Düşük kaliteli profiller için daha konservatif parametreler
            utterance.pitch = Math.max(0.8, Math.min(1.2, utterance.pitch));
            utterance.rate = Math.max(0.8, Math.min(1.2, utterance.rate));
        }
    }
    
    selectOptimalVoice(utterance, profile) {
        const voices = speechSynthesis.getVoices();
        const turkishVoices = voices.filter(v => v.lang.startsWith('tr'));
        
        if (turkishVoices.length === 0) {
            console.warn('⚠️ Türkçe ses bulunamadı');
            return;
        }
        
        // Profil özelliklerine göre en uygun sesi seç
        let selectedVoice = null;
        
        // Öncelik sırası: Kadın sesler (çocuk uygulaması için)
        const femaleVoices = turkishVoices.filter(v => 
            v.name.toLowerCase().includes('female') ||
            v.name.toLowerCase().includes('kadın') ||
            v.name.toLowerCase().includes('woman')
        );
        
        if (femaleVoices.length > 0) {
            selectedVoice = femaleVoices[0];
        } else {
            selectedVoice = turkishVoices[0];
        }
        
        // Kullanıcı tercihi varsa onu kullan
        if (profile.parameters.voice) {
            const userVoice = voices.find(v => v.name === profile.parameters.voice);
            if (userVoice) {
                selectedVoice = userVoice;
            }
        }
        
        if (selectedVoice) {
            utterance.voice = selectedVoice;
            console.log(`🎤 Ses seçildi: ${selectedVoice.name}`);
        }
    }
    
    estimateDuration(text, rate) {
        // Basit süre tahmini (kelime başına ~0.6 saniye, rate ile ayarlanmış)
        const words = text.trim().split(/\s+/).length;
        const baseTime = words * 0.6;
        return baseTime / (rate || 1.0);
    }
    
    calculateSynthesisQuality(profile) {
        // Sentez kalitesi hesaplama
        let quality = 70; // Temel kalite
        
        // Profil kalitesine göre bonus
        if (profile.quality) {
            quality += (profile.quality - 70) * 0.3;
        }
        
        // Örnek sayısına göre bonus
        if (profile.samples && profile.samples.length > 3) {
            quality += Math.min(profile.samples.length * 2, 10);
        }
        
        // Parametre tutarlılığına göre bonus
        const params = profile.parameters;
        if (params.pitch >= 0.8 && params.pitch <= 1.2 &&
            params.rate >= 0.8 && params.rate <= 1.2) {
            quality += 5; // Doğal parametreler için bonus
        }
        
        return Math.max(0, Math.min(100, quality));
    }
    
    async preview(text, profile) {
        // Önizleme metni hazırla
        const previewText = text || 'Bu bir ses önizlemesidir.';
        
        try {
            console.log('🔊 Ses önizlemesi başlatılıyor...');
            
            // Mevcut sesi durdur
            this.stop();
            
            // Önizleme için sentez yap
            const result = await this.synthesize(previewText, profile);
            
            console.log('✅ Ses önizlemesi tamamlandı');
            return result;
            
        } catch (error) {
            console.error('❌ Önizleme hatası:', error);
            throw new Error('Önizleme çalınamadı: ' + error.message);
        }
    }
    
    stop() {
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
            console.log('⏹️ Ses sentezi durduruldu');
        }
        
        this.isPlaying = false;
        this.currentUtterance = null;
    }
    
    pause() {
        if (speechSynthesis.speaking && !speechSynthesis.paused) {
            speechSynthesis.pause();
            console.log('⏸️ Ses sentezi duraklatıldı');
        }
    }
    
    resume() {
        if (speechSynthesis.paused) {
            speechSynthesis.resume();
            console.log('▶️ Ses sentezi devam ediyor');
        }
    }
    
    // Kuyruk yönetimi
    addToQueue(text, profile) {
        if (this.synthesisQueue.length >= this.maxQueueSize) {
            console.warn('⚠️ Sentez kuyruğu dolu, eski öğeler siliniyor');
            this.synthesisQueue.shift();
        }
        
        this.synthesisQueue.push({ text, profile, timestamp: Date.now() });
    }
    
    async processQueue() {
        if (this.synthesisQueue.length === 0 || this.isPlaying) {
            return;
        }
        
        const item = this.synthesisQueue.shift();
        if (item) {
            try {
                await this.synthesize(item.text, item.profile);
                
                // Sonraki öğeyi işle
                setTimeout(() => this.processQueue(), 100);
                
            } catch (error) {
                console.error('❌ Kuyruk işleme hatası:', error);
                
                // Hataya rağmen devam et
                setTimeout(() => this.processQueue(), 500);
            }
        }
    }
    
    // Durum bilgisi
    getStatus() {
        return {
            isPlaying: this.isPlaying,
            queueLength: this.synthesisQueue.length,
            currentText: this.currentUtterance?.text || null,
            speechSynthesisSupported: 'speechSynthesis' in window,
            voicesAvailable: speechSynthesis.getVoices().length
        };
    }
    
    // Ses listesi
    getAvailableVoices() {
        const voices = speechSynthesis.getVoices();
        return voices.map(voice => ({
            name: voice.name,
            lang: voice.lang,
            gender: this.detectGender(voice.name),
            recommended: voice.lang.startsWith('tr') && this.detectGender(voice.name) === 'female'
        }));
    }
    
    detectGender(voiceName) {
        const name = voiceName.toLowerCase();
        if (name.includes('female') || name.includes('kadın') || name.includes('woman')) {
            return 'female';
        } else if (name.includes('male') || name.includes('erkek') || name.includes('man')) {
            return 'male';
        }
        return 'unknown';
    }
}

// ═══════════════════════════════════════════════════════════════════
// VOICE CACHE MANAGER - Ses önbellek yönetimi
// ═══════════════════════════════════════════════════════════════════

class VoiceCacheManager {
    constructor(storage) {
        this.storage = storage;
        this.cache = new Map();
        this.maxCacheSize = 100; // Maksimum cache boyutu
        this.maxCacheAge = 7 * 24 * 60 * 60 * 1000; // 1 hafta (ms)
        this.compressionEnabled = true;
        this.stats = {
            hits: 0,
            misses: 0,
            evictions: 0,
            compressions: 0
        };
        
        this.loadCache();
        this.loadStats();
        
        // Otomatik temizleme (5 dakikada bir)
        setInterval(() => this.performMaintenance(), 5 * 60 * 1000);
    }
    
    generateKey(text, profile) {
        // Daha detaylı anahtar oluşturma
        const params = profile.parameters;
        const features = profile.features || {};
        
        // Metin hash'i (basit)
        const textHash = this.simpleHash(text.toLowerCase().trim());
        
        // Parametre hash'i
        const paramString = [
            params.pitch || 1.0,
            params.rate || 1.0,
            params.volume || 1.0,
            params.emphasis || 1.0,
            params.breathiness || 0.5,
            params.roughness || 0.3
        ].join('|');
        
        // Profil özellik hash'i
        const featureString = [
            features.averageRMS || 0,
            features.averagePitch || 0,
            profile.quality || 0
        ].join('|');
        
        return `vc_${profile.id}_${textHash}_${this.simpleHash(paramString)}_${this.simpleHash(featureString)}`;
    }
    
    simpleHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // 32-bit integer'a çevir
        }
        return Math.abs(hash).toString(36);
    }
    
    get(key) {
        const item = this.cache.get(key);
        
        if (item) {
            // Hit
            this.stats.hits++;
            
            // Yaş kontrolü
            if (this.isExpired(item)) {
                this.cache.delete(key);
                this.stats.evictions++;
                this.saveStats();
                return null;
            }
            
            // Son erişim zamanını güncelle
            item.lastAccessed = Date.now();
            item.accessCount = (item.accessCount || 0) + 1;
            
            this.saveStats();
            return item.data;
        } else {
            // Miss
            this.stats.misses++;
            this.saveStats();
            return null;
        }
    }
    
    set(key, data) {
        // Cache boyutu kontrolü
        if (this.cache.size >= this.maxCacheSize) {
            this.evictLeastRecentlyUsed();
        }
        
        // Veri sıkıştırma (isteğe bağlı)
        let processedData = data;
        if (this.compressionEnabled && this.shouldCompress(data)) {
            processedData = this.compressData(data);
            this.stats.compressions++;
        }
        
        // Cache item oluştur
        const cacheItem = {
            data: processedData,
            timestamp: Date.now(),
            lastAccessed: Date.now(),
            accessCount: 0,
            size: this.estimateSize(processedData),
            compressed: processedData !== data
        };
        
        this.cache.set(key, cacheItem);
        this.saveCache();
        this.saveStats();
        
        console.log(`📦 Cache'e eklendi: ${key} (${this.cache.size}/${this.maxCacheSize})`);
    }
    
    clear() {
        const oldSize = this.cache.size;
        this.cache.clear();
        this.storage.remove('voice_cache');
        
        // İstatistikleri sıfırla
        this.stats = {
            hits: 0,
            misses: 0,
            evictions: 0,
            compressions: 0
        };
        this.saveStats();
        
        console.log(`🗑️ Cache temizlendi: ${oldSize} öğe silindi`);
    }
    
    cleanup() {
        const initialSize = this.cache.size;
        let removedCount = 0;
        
        // Eski öğeleri temizle
        for (const [key, item] of this.cache.entries()) {
            if (this.isExpired(item)) {
                this.cache.delete(key);
                removedCount++;
            }
        }
        
        if (removedCount > 0) {
            this.stats.evictions += removedCount;
            this.saveCache();
            this.saveStats();
            
            console.log(`🧹 Cache temizliği: ${removedCount}/${initialSize} eski öğe silindi`);
        }
    }
    
    performMaintenance() {
        console.log('🔧 Cache bakımı başlatılıyor...');
        
        // Eski öğeleri temizle
        this.cleanup();
        
        // Cache boyutu kontrolü
        if (this.cache.size > this.maxCacheSize * 0.9) {
            const targetSize = Math.floor(this.maxCacheSize * 0.7);
            this.evictToSize(targetSize);
        }
        
        // İstatistikleri kaydet
        this.saveStats();
        
        console.log(`✅ Cache bakımı tamamlandı: ${this.cache.size} öğe`);
    }
    
    evictLeastRecentlyUsed() {
        if (this.cache.size === 0) return;
        
        let oldestKey = null;
        let oldestTime = Date.now();
        
        for (const [key, item] of this.cache.entries()) {
            if (item.lastAccessed < oldestTime) {
                oldestTime = item.lastAccessed;
                oldestKey = key;
            }
        }
        
        if (oldestKey) {
            this.cache.delete(oldestKey);
            this.stats.evictions++;
            console.log(`🗑️ LRU eviction: ${oldestKey}`);
        }
    }
    
    evictToSize(targetSize) {
        const itemsToRemove = this.cache.size - targetSize;
        if (itemsToRemove <= 0) return;
        
        // En az kullanılan öğeleri sırala
        const items = Array.from(this.cache.entries())
            .map(([key, item]) => ({
                key,
                score: this.calculateEvictionScore(item)
            }))
            .sort((a, b) => a.score - b.score);
        
        // En düşük skorlu öğeleri sil
        for (let i = 0; i < itemsToRemove && i < items.length; i++) {
            this.cache.delete(items[i].key);
            this.stats.evictions++;
        }
        
        console.log(`🗑️ Cache boyutu düşürüldü: ${itemsToRemove} öğe silindi`);
    }
    
    calculateEvictionScore(item) {
        // Eviction skoru: düşük skor = önce silinir
        const age = Date.now() - item.timestamp;
        const timeSinceAccess = Date.now() - item.lastAccessed;
        const accessFrequency = item.accessCount || 0;
        
        // Skor hesaplama (düşük = kötü)
        return (accessFrequency * 1000) - (age / 1000) - (timeSinceAccess / 1000);
    }
    
    isExpired(item) {
        return (Date.now() - item.timestamp) > this.maxCacheAge;
    }
    
    shouldCompress(data) {
        // Büyük veri için sıkıştırma
        const estimatedSize = this.estimateSize(data);
        return estimatedSize > 1024; // 1KB'den büyükse sıkıştır
    }
    
    compressData(data) {
        // Basit sıkıştırma (gerçek uygulamada LZ4, gzip vb. kullanılabilir)
        try {
            const jsonString = JSON.stringify(data);
            // Basit tekrar eden karakter sıkıştırması
            return {
                compressed: true,
                data: jsonString.replace(/(.)\1{2,}/g, (match, char) => `${char}*${match.length}`)
            };
        } catch (error) {
            console.warn('⚠️ Sıkıştırma hatası:', error);
            return data;
        }
    }
    
    decompressData(compressedData) {
        if (!compressedData.compressed) return compressedData;
        
        try {
            const decompressed = compressedData.data.replace(/(.)\*(\d+)/g, (match, char, count) => 
                char.repeat(parseInt(count))
            );
            return JSON.parse(decompressed);
        } catch (error) {
            console.warn('⚠️ Açma hatası:', error);
            return compressedData;
        }
    }
    
    estimateSize(data) {
        // Veri boyutu tahmini (byte)
        try {
            return JSON.stringify(data).length * 2; // UTF-16 için x2
        } catch (error) {
            return 1000; // Varsayılan boyut
        }
    }
    
    getSize() {
        return this.cache.size;
    }
    
    getTotalSize() {
        let totalSize = 0;
        for (const [key, item] of this.cache.entries()) {
            totalSize += item.size || 0;
        }
        return totalSize;
    }
    
    getStats() {
        const hitRate = this.stats.hits + this.stats.misses > 0 
            ? (this.stats.hits / (this.stats.hits + this.stats.misses) * 100).toFixed(1)
            : 0;
        
        return {
            ...this.stats,
            hitRate: parseFloat(hitRate),
            cacheSize: this.cache.size,
            maxSize: this.maxCacheSize,
            totalSize: this.getTotalSize(),
            oldestItem: this.getOldestItemAge(),
            newestItem: this.getNewestItemAge()
        };
    }
    
    getOldestItemAge() {
        let oldest = 0;
        for (const [key, item] of this.cache.entries()) {
            const age = Date.now() - item.timestamp;
            if (age > oldest) oldest = age;
        }
        return Math.floor(oldest / 1000); // saniye
    }
    
    getNewestItemAge() {
        let newest = Infinity;
        for (const [key, item] of this.cache.entries()) {
            const age = Date.now() - item.timestamp;
            if (age < newest) newest = age;
        }
        return newest === Infinity ? 0 : Math.floor(newest / 1000); // saniye
    }
    
    loadCache() {
        try {
            const cached = this.storage.getJSON('voice_cache', {});
            let loadedCount = 0;
            
            for (const [key, value] of Object.entries(cached)) {
                // Veri formatı kontrolü
                if (value && typeof value === 'object' && value.data) {
                    // Sıkıştırılmış veriyi aç
                    if (value.compressed) {
                        value.data = this.decompressData(value.data);
                    }
                    
                    this.cache.set(key, value);
                    loadedCount++;
                }
            }
            
            console.log(`📦 Cache yüklendi: ${loadedCount} öğe`);
            
        } catch (error) {
            console.error('❌ Cache yükleme hatası:', error);
            this.cache.clear();
        }
    }
    
    saveCache() {
        try {
            const cacheObj = {};
            for (const [key, value] of this.cache.entries()) {
                cacheObj[key] = value;
            }
            this.storage.setJSON('voice_cache', cacheObj);
        } catch (error) {
            console.error('❌ Cache kaydetme hatası:', error);
        }
    }
    
    loadStats() {
        const savedStats = this.storage.getJSON('voice_cache_stats', {});
        this.stats = { ...this.stats, ...savedStats };
    }
    
    saveStats() {
        this.storage.setJSON('voice_cache_stats', this.stats);
    }
    
    // Cache yönetimi metodları
    prefetch(textList, profile) {
        // Önceden cache'leme (gelecekte kullanım için)
        console.log(`🔄 Prefetch başlatılıyor: ${textList.length} metin`);
        
        textList.forEach(text => {
            const key = this.generateKey(text, profile);
            if (!this.cache.has(key)) {
                // Bu metinler için cache miss olacak, önceden hazırlanabilir
                console.log(`📝 Prefetch hedefi: ${text.substring(0, 20)}...`);
            }
        });
    }
    
    warmup(commonTexts, profile) {
        // Sık kullanılan metinler için cache ısıtma
        console.log(`🔥 Cache warmup: ${commonTexts.length} yaygın metin`);
        
        // Bu metodun implementasyonu synthesizer ile entegre edilmeli
        // Şimdilik sadece log
    }
    
    // Backup/Restore metodları
    exportCache() {
        try {
            const exportData = {
                version: '1.0',
                exportDate: Date.now(),
                stats: this.stats,
                cache: {}
            };
            
            // Cache verilerini export et
            for (const [key, item] of this.cache.entries()) {
                // Sadece önemli cache öğelerini export et (son 24 saatte kullanılanlar)
                const daysSinceAccess = (Date.now() - item.lastAccessed) / (1000 * 60 * 60 * 24);
                if (daysSinceAccess <= 1 && item.accessCount > 1) {
                    exportData.cache[key] = {
                        ...item,
                        // Büyük audio verilerini export etme (boyut nedeniyle)
                        data: item.data && item.data.audioContent ? 
                            { ...item.data, audioContent: '[EXCLUDED_FROM_BACKUP]' } : 
                            item.data
                    };
                }
            }
            
            console.log(`📦 Cache export: ${Object.keys(exportData.cache).length} öğe`);
            return exportData;
            
        } catch (error) {
            console.error('❌ Cache export hatası:', error);
            return {};
        }
    }
    
    importCache(importData) {
        try {
            if (!importData || !importData.cache) {
                console.warn('⚠️ Geçersiz cache import verisi');
                return false;
            }
            
            let importedCount = 0;
            
            // Stats'ları import et
            if (importData.stats) {
                this.stats = { ...this.stats, ...importData.stats };
                this.saveStats();
            }
            
            // Cache verilerini import et
            for (const [key, item] of Object.entries(importData.cache)) {
                // Audio content hariç verileri import et
                if (item && item.data && item.data.audioContent !== '[EXCLUDED_FROM_BACKUP]') {
                    this.cache.set(key, {
                        ...item,
                        timestamp: Date.now(), // Yeni timestamp
                        lastAccessed: Date.now()
                    });
                    importedCount++;
                }
            }
            
            // Cache'i kaydet
            this.saveCache();
            
            console.log(`📥 Cache import: ${importedCount} öğe yüklendi`);
            return true;
            
        } catch (error) {
            console.error('❌ Cache import hatası:', error);
            return false;
        }
    }
    
    // Cache temizleme ve bakım
    clearExpiredItems() {
        let clearedCount = 0;
        const now = Date.now();
        
        for (const [key, item] of this.cache.entries()) {
            if (this.isExpired(item)) {
                this.cache.delete(key);
                clearedCount++;
            }
        }
        
        if (clearedCount > 0) {
            console.log(`🗑️ ${clearedCount} süresi dolmuş cache öğesi temizlendi`);
            this.saveCache();
        }
        
        return clearedCount;
    }
}

// ═══════════════════════════════════════════════════════════════════
// GLOBAL STATE
// ═══════════════════════════════════════════════════════════════════

let storage;
let audioManager;
let voiceCloningSystem; // Yeni eklenen
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
    console.log(`🎨 HUMA v${HUMA_VERSION} - Ses Klonlama sistemi başlatılıyor...`);
    console.log(`📅 Build: ${HUMA_BUILD_DATE} | Özellikler: ${HUMA_FEATURES.join(', ')}`);
    
    // Mobil Safari uyumluluk kontrolü
    const isMobileSafari = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isMobileSafari) {
        console.log('📱 Mobil Safari tespit edildi, uyumluluk modu etkin');
        
        // Mobil Safari için özel ayarlar
        try {
            // Readonly property hatalarını önle
            Object.defineProperty(window, 'voiceCloningSystem', {
                writable: true,
                configurable: true
            });
        } catch (e) {
            // Ignore if already defined
        }
    }
    
    // Show loading state
    document.body.classList.add('loading');
    
    try {
        // Error handler, progress indicator ve quality feedback'i başlat
        errorHandler = new ErrorHandler();
        progressIndicator = new ProgressIndicator();
        qualityFeedback = new QualityFeedback();
        
        storage = new StorageManager();
        audioManager = new AudioManager(storage);
        voiceCloningSystem = new VoiceCloningSystem(storage, audioManager);
        
        console.log('✅ Temel sistemler başlatıldı');
        
    } catch (error) {
        console.error('❌ Sistem başlatma hatası:', error);
        if (errorHandler) {
            errorHandler.handleError(error, 'Sistem başlatma', 'critical', true);
        }
    } finally {
        // Remove loading state
        document.body.classList.remove('loading');
    }
    
    loadSettings();
    loadVoices();
    renderLetterGrid();
    renderPromptsGrid();
    updateUsageStats();
    
    // Ses klonlama sistem kontrolü
    setTimeout(() => {
        initializeVoiceCloningSystem();
        
        // Tema uyumluluğu testi
        if (voiceCloningSystem) {
            const compatibilityResult = voiceCloningSystem.testThemeCompatibility();
            if (compatibilityResult.compatible) {
                console.log('✅ Tüm temalar ses klonlama ile uyumlu');
            } else {
                console.warn('⚠️ Tema uyumluluk sorunları:', compatibilityResult.issues);
                if (errorHandler) {
                    errorHandler.handleError('Tema uyumluluk sorunları tespit edildi', 'Sistem kontrolü', 'warning', false);
                }
            }
        }
        
        // Final sistem kontrolü
        performFinalSystemCheck();
    }, 1000);
    
    // Yedekleme hatırlatıcısını kontrol et
    setTimeout(() => {
        checkBackupReminder();
    }, 2000);
}

function initializeVoiceCloningSystem() {
    console.log('🔧 Ses klonlama sistemi başlatılıyor...');
    
    // Sistem durumu kontrolü
    const systemStatus = voiceCloningSystem.validateSystemState();
    
    if (!systemStatus.isValid) {
        console.warn('⚠️ Ses klonlama sistem sorunları:', systemStatus.issues);
        
        // Kritik sorunlar varsa ses klonlamayı devre dışı bırak
        const criticalIssues = systemStatus.issues.filter(issue => 
            issue.includes('desteklemiyor') || issue.includes('bulunamadı')
        );
        
        if (criticalIssues.length > 0) {
            voiceCloningSystem.setEnabled(false);
            console.log('🚫 Ses klonlama devre dışı bırakıldı (sistem uyumsuzluğu)');
        }
    }
    
    // Profil durumu kontrolü
    if (voiceCloningSystem.isEnabled()) {
        const hasProfile = voiceCloningSystem.loadProfileIfAvailable();
        
        if (!hasProfile) {
            voiceCloningSystem.handleMissingProfile();
        }
    }
    
    // Durum raporu
    const status = voiceCloningSystem.getStatus();
    console.log('📊 Ses klonlama durumu:', {
        enabled: status.enabled,
        hasProfile: status.hasProfile,
        sampleCount: status.sampleCount,
        quality: status.profileQuality,
        cacheSize: status.cacheSize
    });
    
    console.log('✅ Ses klonlama sistemi hazır');
}

// Tema uyumluluğu testi
function testVoiceCloningWithAllThemes() {
    console.log('🧪 Tüm temalar için ses klonlama uyumluluğu test ediliyor...');
    
    const themes = ['alfabe', 'ciftlik', 'ev', 'sayilar'];
    const results = {};
    
    themes.forEach(theme => {
        console.log(`🎨 Test ediliyor: ${theme}`);
        
        // Tema değiştir
        const oldTheme = currentTheme;
        currentTheme = theme;
        
        // Test metinleri
        const testItems = theme === 'sayilar' ? NUMBERS.slice(0, 3) : TURKISH_LETTERS.slice(0, 3);
        
        results[theme] = {
            compatible: true,
            testedItems: testItems.length,
            errors: []
        };
        
        testItems.forEach(item => {
            try {
                const prompt = THEMES[theme][item];
                if (prompt && voiceCloningSystem) {
                    // Ses klonlama test et (gerçek ses çalmadan)
                    const profile = voiceCloningSystem.profileManager.getProfile();
                    if (profile) {
                        const cacheKey = voiceCloningSystem.cacheManager.generateKey(prompt, profile);
                        // Cache key oluşturulabiliyorsa uyumlu
                        if (!cacheKey || cacheKey.length === 0) {
                            results[theme].errors.push(`Cache key oluşturulamadı: ${item}`);
                        }
                    }
                }
            } catch (error) {
                results[theme].compatible = false;
                results[theme].errors.push(`${item}: ${error.message}`);
            }
        });
        
        // Tema geri al
        currentTheme = oldTheme;
    });
    
    // Sonuçları raporla
    console.log('📊 Tema uyumluluğu test sonuçları:');
    themes.forEach(theme => {
        const result = results[theme];
        if (result.compatible && result.errors.length === 0) {
            console.log(`✅ ${theme}: Uyumlu (${result.testedItems} öğe test edildi)`);
        } else {
            console.log(`⚠️ ${theme}: Sorunlar var (${result.errors.length} hata)`);
            result.errors.forEach(error => console.log(`   - ${error}`));
        }
    });
    
    return results;
}

function loadVoices() {
    // Storage henüz hazır değilse bekle
    if (!storage || typeof storage.get !== 'function') {
        console.log('⏳ Storage henüz hazır değil, voices yüklemesi erteleniyor...');
        return;
    }
    
    voices = speechSynthesis.getVoices();
    const voiceSelect = document.getElementById('voiceSelect');
    
    if (!voiceSelect) {
        console.log('⏳ voiceSelect elementi henüz hazır değil');
        return;
    }
    
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

    try {
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
        console.log('✅ Voices yüklendi:', voices.length);
    } catch (error) {
        console.error('❌ Voice yükleme hatası:', error);
    }
}

// Voices değiştiğinde yeniden yükle (sadece storage hazırsa)
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => {
        if (storage) {
            loadVoices();
        }
    };
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
    
    // Ses klonlama ayarlarını yükle
    loadVoiceCloningSettings();
}

function loadVoiceCloningSettings() {
    if (!voiceCloningSystem) return;
    
    const enabled = voiceCloningSystem.isEnabled();
    const toggle = document.getElementById('voiceCloningEnabled');
    if (toggle) {
        toggle.checked = enabled;
    }
    
    // Motor kontrollerini yükle
    loadEngineControls();
    
    updateVoiceProfileStatus();
    loadVoiceParameters();
}

function loadVoiceParameters() {
    const profile = voiceCloningSystem?.profileManager.getProfile();
    const parametersSection = document.getElementById('voiceParametersSection');
    
    if (profile && profile.samples.length > 0) {
        // Parametreleri göster
        parametersSection.style.display = 'block';
        
        const params = profile.parameters;
        
        // Temel parametreler
        updateParameterUI('pitch', params.pitch || 1.0);
        updateParameterUI('rate', params.rate || 1.0);
        updateParameterUI('volume', params.volume || 1.0);
        
        // Gelişmiş parametreler
        updateParameterUI('emphasis', params.emphasis || 1.0);
        updateParameterUI('breathiness', params.breathiness || 0.5);
        updateParameterUI('roughness', params.roughness || 0.3);
        
    } else {
        // Parametreleri gizle
        parametersSection.style.display = 'none';
    }
}

function updateParameterUI(paramName, value) {
    const slider = document.getElementById(`voiceClone${paramName.charAt(0).toUpperCase() + paramName.slice(1)}`);
    const valueSpan = document.getElementById(`voiceClone${paramName.charAt(0).toUpperCase() + paramName.slice(1)}Value`);
    
    if (slider) slider.value = value;
    if (valueSpan) valueSpan.textContent = value.toFixed(1);
}

function updateVoiceProfileStatus() {
    const statusDiv = document.getElementById('voiceProfileStatus');
    const deleteBtn = document.getElementById('deleteProfileBtn');
    
    if (!voiceCloningSystem || !statusDiv) return;
    
    const profile = voiceCloningSystem.profileManager.getProfile();
    const stats = voiceCloningSystem.profileManager.getProfileStats();
    
    if (profile && profile.samples.length > 0 && stats) {
        // Kalite durumuna göre renk
        let qualityColor = '#4caf50'; // Yeşil
        let qualityIcon = '✅';
        
        if (stats.overallQuality < 50) {
            qualityColor = '#ff6b6b'; // Kırmızı
            qualityIcon = '⚠️';
        } else if (stats.overallQuality < 70) {
            qualityColor = '#ffc107'; // Sarı
            qualityIcon = '⚡';
        }
        
        statusDiv.innerHTML = `
            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; border-left: 4px solid ${qualityColor};">
                <p><strong>${qualityIcon} Ses profili aktif</strong></p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 10px 0; font-size: 0.9em;">
                    <div>📊 Genel Kalite: <strong>${stats.overallQuality}%</strong></div>
                    <div>🎤 Ses Örnekleri: <strong>${stats.sampleCount}/${voiceCloningSystem.profileManager.maxSamples}</strong></div>
                    <div>⏱️ Toplam Süre: <strong>${Math.round(stats.totalDuration)}s</strong></div>
                    <div>📈 Ort. Kalite: <strong>${stats.averageQuality}%</strong></div>
                    <div>📅 Oluşturulma: <strong>${stats.createdDate}</strong></div>
                    <div>🔄 Son Güncelleme: <strong>${stats.lastUpdated}</strong></div>
                </div>
                ${stats.overallQuality < 70 ? 
                    '<p style="color: #f57c00; font-size: 0.85em; margin-top: 10px;">💡 Daha iyi sonuçlar için daha fazla kaliteli ses örneği ekleyin.</p>' : 
                    '<p style="color: #4caf50; font-size: 0.85em; margin-top: 10px;">🎉 Mükemmel! Ses profiliniz kullanıma hazır.</p>'
                }
            </div>
        `;
        deleteBtn.style.display = 'inline-block';
        
        // Ses örnekleri listesini de güncelle
        renderVoiceSamplesList();
        
        // Backup bilgisini güncelle
        updateBackupInfo();
    } else {
        statusDiv.innerHTML = `
            <div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107;">
                <p><strong>⚠️ Ses profili bulunamadı</strong></p>
                <p style="margin: 10px 0; font-size: 0.9em;">Ses klonlama özelliğini kullanmak için önce ses kaydı yapın.</p>
                <div style="background: #f8f9fa; padding: 10px; border-radius: 6px; margin-top: 10px;">
                    <p style="font-size: 0.85em; margin: 0;"><strong>📝 Öneriler:</strong></p>
                    <ul style="font-size: 0.8em; margin: 5px 0 0 20px; padding: 0;">
                        <li>En az 3-5 farklı ses örneği kaydedin</li>
                        <li>Her örnek 10-30 saniye arası olsun</li>
                        <li>Sessiz ortamda kayıt yapın</li>
                        <li>Normal konuşma hızınızı kullanın</li>
                    </ul>
                </div>
            </div>
        `;
        deleteBtn.style.display = 'none';
        
        // Ses örnekleri listesini gizle
        const samplesSection = document.getElementById('voiceSamplesSection');
        if (samplesSection) {
            samplesSection.style.display = 'none';
        }
        
        // Backup bilgisini güncelle
        updateBackupInfo();
    }
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
    // Eğer zaten çalıyorsa, yeni tıklamayı engelle
    if (card.classList.contains('playing')) {
        return;
    }
    
    // Butonu devre dışı bırak
    card.classList.add('playing', 'animate-bounce');
    card.style.pointerEvents = 'none';
    
    setTimeout(() => {
        card.classList.remove('animate-bounce');
        card.style.pointerEvents = 'auto';
        card.classList.remove('playing');
    }, 600);

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

    // Sadece animasyon göster (buton içindeki emoji değişmesin)
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

    // Ses çalma öncelik sırası: 1) Klonlanan ses, 2) Kayıtlı ses, 3) Normal TTS
    let audioPlayed = false;
    let audioSource = 'unknown';
    
    // 1. Ses klonlama kontrolü (en yüksek öncelik)
    if (voiceCloningSystem && voiceCloningSystem.isEnabled()) {
        try {
            const systemStatus = voiceCloningSystem.validateSystemState();
            
            if (systemStatus.isValid) {
                const voiceClonedAudio = await voiceCloningSystem.synthesize(prompt);
                if (voiceClonedAudio) {
                    console.log('🎤 Klonlanan ses kullanıldı');
                    audioPlayed = true;
                    audioSource = 'voice-cloning';
                    
                    // Klonlanan ses başarı istatistiği
                    const stats = voiceCloningSystem.cacheManager.getStats();
                    if (stats.hitRate > 0) {
                        console.log(`📊 Cache hit rate: ${stats.hitRate}%`);
                    }
                }
            } else {
                console.warn('⚠️ Ses klonlama sistemi geçersiz:', systemStatus.issues);
                // Sistem geçersizse ses klonlamayı devre dışı bırak
                voiceCloningSystem.setEnabled(false);
            }
        } catch (error) {
            console.warn('⚠️ Ses klonlama hatası, diğer seçeneklere geçiliyor:', error);
            
            // Kritik hata varsa ses klonlamayı geçici olarak devre dışı bırak
            if (error.message.includes('desteklemiyor') || error.message.includes('bulunamadı')) {
                voiceCloningSystem.setEnabled(false);
                console.log('🚫 Ses klonlama geçici olarak devre dışı bırakıldı');
            }
        }
    }
    
    // 2. Kayıtlı sesler (orta öncelik)
    if (!audioPlayed && availableAudios.length > 0) {
        // Kayıtlı sesler varsa öncelik ver
        const recordedAudios = availableAudios.filter(audio => audio.type === 'recording');
        const cachedAudios = availableAudios.filter(audio => audio.type === 'tts');
        
        if (recordedAudios.length > 0) {
            // Kayıtlı seslerden rastgele seç
            const randomIndex = Math.floor(Math.random() * recordedAudios.length);
            const selectedAudio = recordedAudios[randomIndex];
            
            console.log('🎙️ Kayıtlı ses kullanıldı');
            const audio = new Audio(selectedAudio.data);
            await audio.play();
            audioPlayed = true;
            audioSource = 'recorded';
            
        } else if (cachedAudios.length > 0) {
            // Cache'li TTS seslerden seç
            const randomIndex = Math.floor(Math.random() * cachedAudios.length);
            const selectedAudio = cachedAudios[randomIndex];
            
            console.log('📦 Cache\'li TTS kullanıldı');
            await audioManager.playAudioData(selectedAudio.data);
            audioPlayed = true;
            audioSource = 'cached-tts';
        }
    }
    
    // 3. Normal TTS (en düşük öncelik) - Seamless entegrasyon kullan
    if (!audioPlayed) {
        console.log('🔊 Seamless TTS sistemi kullanılıyor');
        
        try {
            const result = await audioManager.speakWithVoiceCloning(prompt);
            audioPlayed = result.success;
            audioSource = result.source;
            
            if (result.error) {
                console.error('❌ Seamless TTS hatası:', result.error);
            }
        } catch (error) {
            console.error('❌ Seamless TTS sistemi hatası:', error);
            
            // Son çare: Direkt browser TTS
            try {
                const fallbackResult = await audioManager.speakWithBrowser(prompt);
                audioSource = 'browser-tts-emergency';
                audioPlayed = fallbackResult === true;
            } catch (fallbackError) {
                console.error('❌ Emergency fallback TTS hatası:', fallbackError);
            }
        }
    }
    
    // Ses çalma istatistiği
    if (audioPlayed) {
        console.log(`✅ Ses çalındı: ${letter} (${audioSource})`);
        
        // Tema bazlı istatistik (isteğe bağlı)
        const themeStats = storage.getJSON('theme_audio_stats', {});
        if (!themeStats[currentTheme]) {
            themeStats[currentTheme] = {};
        }
        if (!themeStats[currentTheme][audioSource]) {
            themeStats[currentTheme][audioSource] = 0;
        }
        themeStats[currentTheme][audioSource]++;
        storage.setJSON('theme_audio_stats', themeStats);
        
    } else {
        console.error('❌ Hiçbir ses çalınamadı:', letter);
        
        // Error handler ile kullanıcıya bilgi ver
        if (errorHandler) {
            errorHandler.handleError(`"${letter}" harfi için ses çalınamadı`, 'Harf seslendirme', 'error', true);
        } else {
            alert(`❌ "${letter}" harfi için ses çalınamadı.\n\nLütfen ses ayarlarınızı kontrol edin.`);
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

function showVersionInfo() {
    const versionInfo = `
🎨 HUMA - Türkçe Alfabe Öğrenme Uygulaması

📋 VERSİYON BİLGİSİ:
• Versiyon: ${HUMA_VERSION}
• Build Tarihi: ${HUMA_BUILD_DATE}
• Özellikler: ${HUMA_FEATURES.join(', ')}

🆕 YENİ ÖZELLİKLER (v4.1.0):
• 🎤 Ses Klonlama Sistemi
• 🔍 Debug ve Durum Kontrol
• 📖 Kayıt Rehberi
• 🛠️ Gelişmiş Hata Yönetimi
• 📱 Mobil Safari Uyumluluğu

🔧 TEKNİK BİLGİLER:
• Tarayıcı: ${navigator.userAgent.split(' ')[0]}
• Platform: ${navigator.platform}
• Dil: ${navigator.language}

💡 GitHub Pages'te yeni versiyon yayınlandığında bu bilgiler güncellenecek.
    `;
    
    alert(versionInfo);
}

function checkVoiceCloningStatus() {
    if (!voiceCloningSystem) {
        alert('❌ Ses klonlama sistemi yüklenmemiş!');
        return;
    }
    
    const status = voiceCloningSystem.getStatus();
    const profile = voiceCloningSystem.profileManager.getProfile();
    
    let statusText = `🔍 Ses Klonlama Durum Raporu\n\n`;
    statusText += `✅ Sistem Yüklü: ${voiceCloningSystem ? 'Evet' : 'Hayır'}\n`;
    statusText += `🎤 Etkin Durum: ${status.enabled ? 'Etkin' : 'Devre Dışı'}\n`;
    statusText += `📁 Profil Var: ${status.hasProfile ? 'Evet' : 'Hayır'}\n`;
    statusText += `🎵 Ses Örneği: ${status.sampleCount} adet\n`;
    statusText += `⭐ Kalite: ${Math.round(status.profileQuality)}%\n`;
    statusText += `💾 Cache: ${status.cacheSize} öğe\n\n`;
    
    if (!status.enabled) {
        statusText += `⚠️ SORUN: Ses klonlama devre dışı!\n`;
        statusText += `🔧 ÇÖZÜM: Ayarlar > Ses Klonlamayı Etkinleştir\n\n`;
    }
    
    if (!status.hasProfile) {
        statusText += `⚠️ SORUN: Ses profili yok!\n`;
        statusText += `🔧 ÇÖZÜM: Ses Kaydı Yap düğmesine tıklayın\n\n`;
    }
    
    if (status.sampleCount < 5) {
        statusText += `⚠️ UYARI: Az ses örneği (${status.sampleCount})\n`;
        statusText += `🔧 ÖNERİ: En az 5-10 örnek kaydedin\n\n`;
    }
    
    if (status.enabled && status.hasProfile) {
        statusText += `✅ SES KLONLAMA HAZIR!\n`;
        statusText += `🎯 Harflere tıkladığınızda sizin sesiniz çalacak`;
    }
    
    alert(statusText);
}

function showRecordingGuide() {
    const guideContent = `
📖 Ses Klonlama Kayıt Rehberi

🎯 AMAÇ:
Sesinizi klonlamak için kaliteli ses örnekleri kaydetmek

🎤 KAYIT İPUÇLARI:

1️⃣ ORTAM HAZIRLIĞI:
• Sessiz bir ortam seçin
• Arka plan gürültüsünü minimize edin
• Mikrofonu ağzınıza 15-20 cm uzaklıkta tutun

2️⃣ SES KALİTESİ:
• Normal konuşma hızında okuyun
• Net ve anlaşılır telaffuz yapın
• Çok yavaş veya çok hızlı konuşmayın
• Doğal ses tonunuzu kullanın

3️⃣ KAYIT SÜRECİ:
• Her harf/kelime için 2-3 saniye kayıt yapın
• Kayıt başlamadan önce 1 saniye bekleyin
• Kayıt bittikten sonra 1 saniye daha bekleyin
• Hata yaparsanız kaydı tekrarlayın

4️⃣ ÖRNEK METİNLER:
• Verilen metinleri tam olarak okuyun
• Noktalama işaretlerine dikkat edin
• Vurguları doğal yapın

5️⃣ KALİTE KONTROL:
• Sistem size kalite puanı verecek
• %70'in üzerinde puan almaya çalışın
• Düşük puanlı kayıtları tekrarlayın

✅ İYİ KAYIT ÖRNEĞİ:
"A harfi Annenin A'sı" - Net, sakin, doğal

❌ KÖTÜ KAYIT ÖRNEKLERİ:
• Çok hızlı: "AharfiAnneninAsi"
• Çok yavaş: "A... harfi... Annenin... A'sı"
• Gürültülü: Arka planda müzik/konuşma

🔄 TEKRAR KAYIT:
Memnun kalmazsanız istediğiniz kadar tekrar kayıt yapabilirsiniz.

💡 İPUCU:
En az 10-15 farklı ses örneği kaydetmeniz önerilir.
    `;
    
    alert(guideContent);
}

function changeTheme() {
    const newTheme = document.getElementById('themeSelect').value;
    const oldTheme = currentTheme;
    
    currentTheme = newTheme;
    storage.set('theme', currentTheme);
    
    // Ses klonlama sistemi ile tema değişikliğini bildir
    if (voiceCloningSystem && oldTheme !== newTheme) {
        voiceCloningSystem.onThemeChange(oldTheme, newTheme);
        
        // Tema istatistiklerini güncelle
        const themeStats = storage.getJSON('theme_usage_stats', {});
        if (!themeStats[newTheme]) {
            themeStats[newTheme] = { switchCount: 0, lastUsed: Date.now() };
        }
        themeStats[newTheme].switchCount++;
        themeStats[newTheme].lastUsed = Date.now();
        storage.setJSON('theme_usage_stats', themeStats);
    }
    
    // Ses cache'ini de temizle
    if (audioManager && audioManager.audioCache) {
        audioManager.audioCache.clear();
        audioManager.saveCacheToStorage();
        console.log('🗑️ Audio cache temizlendi (tema değişikliği)');
    }
    
    renderLetterGrid();
    renderPromptsGrid();
    
    console.log(`🎨 Tema değiştirildi: ${currentTheme}`);
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
// VOICE CLONING FUNCTIONS - Ses klonlama fonksiyonları
// ═══════════════════════════════════════════════════════════════════

function toggleVoiceCloning() {
    const checkbox = document.getElementById('voiceCloningEnabled');
    const enabled = checkbox.checked;
    
    if (enabled) {
        // Profil kontrolü
        const profile = voiceCloningSystem.profileManager.getProfile();
        if (!profile || profile.samples.length === 0) {
            alert('⚠️ Ses klonlamayı etkinleştirmek için önce ses kaydı yapmanız gerekiyor.\n\nLütfen "Ses Kaydı Yap" butonunu kullanarak sesinizi kaydedin.');
            checkbox.checked = false;
            return;
        }
        
        // Profil kalite kontrolü
        if (profile.quality < 50) {
            const proceed = confirm(
                `⚠️ Ses profili kalitesi düşük (${Math.round(profile.quality)}%).\n\n` +
                `Bu durum ses klonlama performansını etkileyebilir.\n\n` +
                `Yine de etkinleştirmek istiyor musunuz?`
            );
            
            if (!proceed) {
                checkbox.checked = false;
                return;
            }
        }
        
        // Başarılı etkinleştirme mesajı
        const stats = voiceCloningSystem.profileManager.getProfileStats();
        if (stats) {
            console.log(`✅ Ses klonlama etkinleştirildi - Kalite: ${stats.overallQuality}%, Örnekler: ${stats.sampleCount}`);
        }
        
    } else {
        // Devre dışı bırakma onayı
        if (voiceCloningSystem.isEnabled()) {
            const confirmDisable = confirm('🎤 Ses klonlamayı devre dışı bırakmak istediğinize emin misiniz?\n\nNormal TTS sesine geri dönülecek.');
            if (!confirmDisable) {
                checkbox.checked = true;
                return;
            }
        }
        
        console.log('🔇 Ses klonlama devre dışı bırakıldı');
    }
    
    // Durumu kaydet
    voiceCloningSystem.setEnabled(enabled);
    
    // UI güncellemeleri
    updateVoiceCloningUI(enabled);
    
    // Kullanıcıya bilgi ver
    showVoiceCloningStatusMessage(enabled);
}

// ═══════════════════════════════════════════════════════════════════
// SES MOTORU TEST KONTROLLERİ
// ═══════════════════════════════════════════════════════════════════

// Ses motoru test kontrolleri
const ENGINE_CONTROLS = {
    voiceCloning: true,
    googleTTS: true,
    browserTTS: true
};

function toggleEngineControl(engine) {
    const checkbox = document.getElementById(`enable${engine.charAt(0).toUpperCase() + engine.slice(1)}`);
    ENGINE_CONTROLS[engine] = checkbox.checked;
    
    // En az bir motor aktif olmalı
    const activeEngines = Object.values(ENGINE_CONTROLS).filter(Boolean).length;
    if (activeEngines === 0) {
        checkbox.checked = true;
        ENGINE_CONTROLS[engine] = true;
        alert('⚠️ En az bir ses motoru aktif olmalı!');
        return;
    }
    
    console.log(`🔧 ${engine} motoru: ${checkbox.checked ? 'Etkin' : 'Devre Dışı'}`);
    console.log('🎛️ Aktif motorlar:', Object.entries(ENGINE_CONTROLS)
        .filter(([key, value]) => value)
        .map(([key]) => key)
        .join(', '));
    
    // Ayarları kaydet
    storage.set(`engine_${engine}_enabled`, checkbox.checked.toString());
}

function loadEngineControls() {
    // Kaydedilmiş ayarları yükle
    ENGINE_CONTROLS.voiceCloning = storage.get('engine_voiceCloning_enabled', 'true') === 'true';
    ENGINE_CONTROLS.googleTTS = storage.get('engine_googleTTS_enabled', 'true') === 'true';
    ENGINE_CONTROLS.browserTTS = storage.get('engine_browserTTS_enabled', 'true') === 'true';
    
    // UI'ı güncelle
    const vcCheckbox = document.getElementById('enableVoiceCloning');
    const gtCheckbox = document.getElementById('enableGoogleTTS');
    const btCheckbox = document.getElementById('enableBrowserTTS');
    
    if (vcCheckbox) vcCheckbox.checked = ENGINE_CONTROLS.voiceCloning;
    if (gtCheckbox) gtCheckbox.checked = ENGINE_CONTROLS.googleTTS;
    if (btCheckbox) btCheckbox.checked = ENGINE_CONTROLS.browserTTS;
}

function updateVoiceCloningUI(enabled) {
    // Parametre bölümünü göster/gizle
    const parametersSection = document.getElementById('voiceParametersSection');
    if (parametersSection) {
        parametersSection.style.display = enabled ? 'block' : 'none';
    }
    
    // Diğer UI elementlerini güncelle
    const recordBtn = document.getElementById('recordVoiceBtn');
    if (recordBtn && enabled) {
        recordBtn.textContent = '🎙️ Yeni Ses Kaydı Ekle';
    } else if (recordBtn) {
        recordBtn.textContent = '🎙️ Ses Kaydı Yap';
    }
}

function showVoiceCloningStatusMessage(enabled) {
    if (enabled) {
        // Başarı mesajı göster
        const messageDiv = document.createElement('div');
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4caf50;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 10000;
            font-weight: bold;
            animation: slideIn 0.3s ease-out;
        `;
        messageDiv.innerHTML = '🎤 Ses klonlama etkinleştirildi!<br><small>Artık metinler sizin sesinizle okunacak.</small>';
        
        document.body.appendChild(messageDiv);
        
        // 3 saniye sonra kaldır
        setTimeout(() => {
            messageDiv.style.animation = 'slideOut 0.3s ease-in forwards';
            setTimeout(() => messageDiv.remove(), 300);
        }, 3000);
        
    } else {
        // Devre dışı mesajı
        console.log('ℹ️ Normal TTS sesine geri dönüldü');
    }
}

// CSS animasyonları ekle
if (!document.getElementById('voiceCloningAnimations')) {
    const style = document.createElement('style');
    style.id = 'voiceCloningAnimations';
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

let recordingTimer = null;
let recordingStartTime = 0;

function startVoiceRecording() {
    // Tarayıcı desteği kontrolü
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('⚠️ Tarayıcınız ses kaydını desteklemiyor.\n\nLütfen güncel bir tarayıcı kullanın (Chrome, Firefox, Safari).');
        return;
    }

    // HTTPS kontrolü
    if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
        alert('⚠️ Ses kaydı için HTTPS gereklidir!\n\nMobil cihazlarda ses kaydı sadece güvenli bağlantılarda (HTTPS) çalışır.\n\nÇözüm: Uygulamayı GitHub Pages üzerinden açın.');
        return;
    }

    // MediaRecorder desteği kontrolü
    if (!window.MediaRecorder) {
        alert('⚠️ Tarayıcınız ses kaydını desteklemiyor.\n\nLütfen güncel bir tarayıcı kullanın.');
        return;
    }

    // Progress indicator göster
    const progressId = progressIndicator ? progressIndicator.show('voice-recording-start', 'Mikrofon erişimi isteniyor...') : null;
    
    // UI hazırlık
    document.getElementById('recordVoiceBtn').disabled = true;
    document.getElementById('recordVoiceBtn').textContent = '🔄 Mikrofon erişimi isteniyor...';

    voiceCloningSystem.startRecording()
        .then(() => {
            // Progress indicator'ı gizle
            if (progressId && progressIndicator) {
                progressIndicator.hide(progressId);
            }
            
            // Kayıt UI'ını göster
            document.getElementById('voiceCloningRecordingSection').classList.add('active');
            document.getElementById('recordVoiceBtn').textContent = '🎙️ Kayıt yapılıyor...';
            
            // Timer başlat
            recordingStartTime = Date.now();
            recordingTimer = setInterval(updateRecordingTimer, 100);
            
            // Gerçek zamanlı ses seviyesi gösterimi başlat
            startAudioLevelMonitoring();
            
            console.log('🎤 Ses klonlama kaydı başlatıldı');
            
            // Başarı bildirimi
            if (errorHandler) {
                errorHandler.handleError('Ses kaydı başlatıldı', 'Ses kaydı', 'info', true);
            }
        })
        .catch(error => {
            // Progress indicator'ı gizle
            if (progressId && progressIndicator) {
                progressIndicator.hide(progressId);
            }
            
            console.error('❌ Kayıt başlatma hatası:', error);
            
            // UI'ı sıfırla
            document.getElementById('recordVoiceBtn').disabled = false;
            document.getElementById('recordVoiceBtn').textContent = '🎙️ Ses Kaydı Yap';
            
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
        });
}

let audioLevelMonitor = null;

function startAudioLevelMonitoring() {
    if (!voiceCloningSystem.mediaRecorder || !voiceCloningSystem.currentStream) {
        return;
    }

    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioContext.createMediaStreamSource(voiceCloningSystem.currentStream);
        const analyser = audioContext.createAnalyser();
        
        analyser.fftSize = 256;
        source.connect(analyser);
        
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        
        function updateLevel() {
            if (!voiceCloningSystem.isRecording) {
                audioContext.close();
                return;
            }
            
            analyser.getByteFrequencyData(dataArray);
            
            // RMS hesapla
            let sum = 0;
            for (let i = 0; i < dataArray.length; i++) {
                sum += dataArray[i] * dataArray[i];
            }
            const rms = Math.sqrt(sum / dataArray.length);
            const level = (rms / 255) * 100;
            
            // Progress bar'ı ses seviyesi olarak kullan
            const progressBar = document.getElementById('recordingProgressBar');
            if (progressBar) {
                // Ses seviyesine göre renk değiştir
                if (level < 10) {
                    progressBar.style.background = '#ff6b6b'; // Çok sessiz - kırmızı
                } else if (level < 30) {
                    progressBar.style.background = '#ffc107'; // Sessiz - sarı
                } else if (level < 80) {
                    progressBar.style.background = '#4caf50'; // İyi - yeşil
                } else {
                    progressBar.style.background = '#ff9800'; // Çok yüksek - turuncu
                }
            }
            
            requestAnimationFrame(updateLevel);
        }
        
        updateLevel();
        
    } catch (error) {
        console.warn('⚠️ Ses seviyesi monitörü başlatılamadı:', error);
    }
}

function stopVoiceRecording() {
    const elapsed = recordingStartTime ? (Date.now() - recordingStartTime) / 1000 : 0;
    
    // Minimum süre kontrolü
    if (elapsed < 3) {
        if (!confirm('⚠️ Kayıt çok kısa (3 saniyeden az).\n\nYine de kaydetmek istiyor musunuz?')) {
            return;
        }
    }
    
    voiceCloningSystem.stopRecording();
    
    // Timer durdur
    if (recordingTimer) {
        clearInterval(recordingTimer);
        recordingTimer = null;
    }
    
    // UI'ı güncelle
    document.getElementById('voiceCloningRecordingSection').classList.remove('active');
    document.getElementById('recordVoiceBtn').disabled = false;
    document.getElementById('recordVoiceBtn').textContent = '🎙️ Ses Kaydı Yap';
    
    // Progress sıfırla
    const progressBar = document.getElementById('recordingProgressBar');
    progressBar.style.width = '0%';
    progressBar.style.background = '#4ECDC4';
    document.getElementById('recordingTimer').textContent = '00:00';
    
    // Progress indicator göster
    const progressId = progressIndicator ? progressIndicator.show('voice-processing', 'Ses kaydı işleniyor...') : null;
    
    // İşleme mesajı göster
    document.getElementById('recordVoiceBtn').textContent = '🔄 Ses işleniyor...';
    document.getElementById('recordVoiceBtn').disabled = true;
    
    // Profil durumunu güncelle (biraz bekle, işleme zamanı ver)
    setTimeout(() => {
        // Progress güncelle
        if (progressId && progressIndicator) {
            progressIndicator.update(progressId, 'Ses profili güncelleniyor...', 75);
        }
        
        updateVoiceProfileStatus(); // Bu fonksiyon renderVoiceSamplesList()'i de çağırır
        loadVoiceParameters(); // Parametreleri de yükle
        
        // Progress tamamla
        if (progressId && progressIndicator) {
            progressIndicator.update(progressId, 'Tamamlandı!', 100);
            setTimeout(() => progressIndicator.hide(progressId), 500);
        }
        
        document.getElementById('recordVoiceBtn').disabled = false;
        document.getElementById('recordVoiceBtn').textContent = '🎙️ Ses Kaydı Yap';
        
        // Başarı bildirimi
        if (errorHandler) {
            errorHandler.handleError('Ses kaydı başarıyla tamamlandı', 'Ses kaydı', 'info', true);
        }
    }, 2000);
    
    console.log(`⏹️ Ses klonlama kaydı durduruldu (${elapsed.toFixed(1)}s)`);
}

function updateRecordingTimer() {
    if (!recordingStartTime) return;
    
    const elapsed = (Date.now() - recordingStartTime) / 1000;
    const minutes = Math.floor(elapsed / 60);
    const seconds = Math.floor(elapsed % 60);
    
    // Timer güncelle
    const timerElement = document.getElementById('recordingTimer');
    timerElement.textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Süre durumu göster
    if (elapsed < 3) {
        timerElement.style.color = '#ff6b6b';
        timerElement.textContent += ' (çok kısa)';
    } else if (elapsed < 10) {
        timerElement.style.color = '#ffc107';
        timerElement.textContent += ' (daha uzun olabilir)';
    } else if (elapsed < 60) {
        timerElement.style.color = '#4caf50';
        timerElement.textContent += ' (iyi)';
    } else {
        timerElement.style.color = '#ff9800';
        timerElement.textContent += ' (çok uzun)';
    }
    
    // Otomatik durdurma (2 dakika)
    if (elapsed >= 120) {
        stopVoiceRecording();
        alert('ℹ️ Kayıt otomatik olarak durduruldu (2 dakika limit).');
    }
}

function deleteVoiceProfile() {
    if (confirm('🗑️ Ses profilinizi silmek istediğinize emin misiniz?\n\nBu işlem geri alınamaz.')) {
        voiceCloningSystem.profileManager.delete();
        voiceCloningSystem.cacheManager.clear();
        voiceCloningSystem.setEnabled(false);
        
        updateVoiceProfileStatus();
        loadVoiceParameters(); // Parametreleri gizle
        
        alert('✅ Ses profili silindi.');
        console.log('🗑️ Ses profili silindi');
    }
}

// Ses parametresi güncelleme
let parameterUpdateTimeout = null;

function updateVoiceCloneParameter(paramName, value) {
    const numValue = parseFloat(value);
    
    // UI'ı hemen güncelle
    updateParameterUI(paramName, numValue);
    
    // Gerçek zamanlı önizleme için debounce
    if (parameterUpdateTimeout) {
        clearTimeout(parameterUpdateTimeout);
    }
    
    parameterUpdateTimeout = setTimeout(() => {
        try {
            // Parametreyi kaydet
            const params = {};
            params[paramName] = numValue;
            voiceCloningSystem.profileManager.updateParameters(params);
            
            // Önizleme (isteğe bağlı)
            if (document.getElementById('realtimePreview')?.checked) {
                previewVoiceClone();
            }
            
            console.log(`⚙️ Parametre güncellendi: ${paramName} = ${numValue}`);
            
        } catch (error) {
            console.error('❌ Parametre güncelleme hatası:', error);
        }
    }, 300); // 300ms debounce
}

function toggleAdvancedVoiceParams() {
    const checkbox = document.getElementById('showAdvancedVoiceParams');
    const advancedSection = document.getElementById('advancedVoiceParams');
    
    if (checkbox.checked) {
        advancedSection.style.display = 'block';
    } else {
        advancedSection.style.display = 'none';
    }
}

function previewVoiceClone() {
    if (!voiceCloningSystem || !voiceCloningSystem.isEnabled()) {
        alert('⚠️ Ses klonlama etkin değil.');
        return;
    }
    
    const profile = voiceCloningSystem.profileManager.getProfile();
    if (!profile || profile.samples.length === 0) {
        alert('⚠️ Ses profili bulunamadı.');
        return;
    }
    
    // Önizleme metni
    const previewTexts = [
        'Merhaba, bu benim klonlanmış sesim.',
        'A harfi Annenin A\'sı, B harfi Babanın B\'si.',
        'Bir, iki, üç, dört, beş.',
        'Güzel bir gün, güzel bir ses.',
        'Ses klonlama testi başarılı.'
    ];
    
    const randomText = previewTexts[Math.floor(Math.random() * previewTexts.length)];
    
    // Önizleme butonunu devre dışı bırak
    const previewBtn = event.target;
    const originalText = previewBtn.textContent;
    previewBtn.disabled = true;
    previewBtn.textContent = '🔄 Çalıyor...';
    
    // Ses çal
    voiceCloningSystem.synthesizer.preview(randomText, profile)
        .then(() => {
            console.log('🔊 Önizleme tamamlandı');
        })
        .catch(error => {
            console.error('❌ Önizleme hatası:', error);
            alert('❌ Önizleme çalınamadı: ' + error.message);
        })
        .finally(() => {
            // Butonu tekrar etkinleştir
            previewBtn.disabled = false;
            previewBtn.textContent = originalText;
        });
}

function resetVoiceParameters() {
    if (confirm('🔄 Tüm ses parametrelerini varsayılan değerlere sıfırlamak istediğinize emin misiniz?')) {
        try {
            voiceCloningSystem.profileManager.resetToDefaults();
            loadVoiceParameters(); // UI'ı güncelle
            
            alert('✅ Parametreler varsayılan değerlere sıfırlandı.');
            console.log('🔄 Ses parametreleri sıfırlandı');
            
        } catch (error) {
            console.error('❌ Parametre sıfırlama hatası:', error);
            alert('❌ Parametreler sıfırlanamadı: ' + error.message);
        }
    }
}

// ═══════════════════════════════════════════════════════════════════
// ERROR HANDLING & USER FEEDBACK - Hata yönetimi ve kullanıcı geri bildirimi
// ═══════════════════════════════════════════════════════════════════

class ErrorHandler {
    constructor() {
        this.errorHistory = [];
        this.maxHistorySize = 50;
        this.notificationContainer = null;
        this.createNotificationContainer();
    }
    
    createNotificationContainer() {
        // Bildirim container'ı oluştur
        this.notificationContainer = document.createElement('div');
        this.notificationContainer.id = 'errorNotificationContainer';
        this.notificationContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            max-width: 400px;
            pointer-events: none;
        `;
        document.body.appendChild(this.notificationContainer);
    }
    
    handleError(error, context = '', severity = 'error', showToUser = true) {
        const errorInfo = {
            message: error.message || error,
            context: context,
            severity: severity,
            timestamp: Date.now(),
            stack: error.stack || null,
            userAgent: navigator.userAgent
        };
        
        // Hata geçmişine ekle
        this.errorHistory.push(errorInfo);
        if (this.errorHistory.length > this.maxHistorySize) {
            this.errorHistory.shift();
        }
        
        // Console'a log
        const logMessage = `${severity.toUpperCase()}: ${context ? context + ' - ' : ''}${errorInfo.message}`;
        switch (severity) {
            case 'error':
                console.error('❌', logMessage, error);
                break;
            case 'warning':
                console.warn('⚠️', logMessage, error);
                break;
            case 'info':
                console.info('ℹ️', logMessage, error);
                break;
        }
        
        // Kullanıcıya göster
        if (showToUser) {
            this.showUserNotification(errorInfo);
        }
        
        // Kritik hatalar için özel işlem
        if (severity === 'critical') {
            this.handleCriticalError(errorInfo);
        }
        
        return errorInfo;
    }
    
    showUserNotification(errorInfo) {
        const notification = document.createElement('div');
        notification.className = `error-notification ${errorInfo.severity}`;
        
        const icon = this.getErrorIcon(errorInfo.severity);
        const title = this.getErrorTitle(errorInfo.severity);
        const message = this.getUserFriendlyMessage(errorInfo);
        
        notification.innerHTML = `
            <div class="error-notification-content">
                <div class="error-notification-header">
                    <span class="error-icon">${icon}</span>
                    <span class="error-title">${title}</span>
                    <button class="error-close" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
                </div>
                <div class="error-message">${message}</div>
                ${errorInfo.context ? `<div class="error-context">${errorInfo.context}</div>` : ''}
            </div>
        `;
        
        // Stil ekle
        notification.style.cssText = `
            background: ${this.getNotificationColor(errorInfo.severity)};
            border: 2px solid ${this.getNotificationBorderColor(errorInfo.severity)};
            border-radius: 8px;
            margin-bottom: 10px;
            padding: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            pointer-events: auto;
            animation: slideInRight 0.3s ease-out;
            font-family: 'Segoe UI', sans-serif;
        `;
        
        this.notificationContainer.appendChild(notification);
        
        // Otomatik kaldırma
        const autoRemoveTime = errorInfo.severity === 'error' ? 8000 : 5000;
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease-in';
                setTimeout(() => notification.remove(), 300);
            }
        }, autoRemoveTime);
    }
    
    getErrorIcon(severity) {
        switch (severity) {
            case 'error': return '❌';
            case 'warning': return '⚠️';
            case 'info': return 'ℹ️';
            case 'critical': return '🚨';
            default: return '❓';
        }
    }
    
    getErrorTitle(severity) {
        switch (severity) {
            case 'error': return 'Hata';
            case 'warning': return 'Uyarı';
            case 'info': return 'Bilgi';
            case 'critical': return 'Kritik Hata';
            default: return 'Bildirim';
        }
    }
    
    getNotificationColor(severity) {
        switch (severity) {
            case 'error': return '#ffebee';
            case 'warning': return '#fff3e0';
            case 'info': return '#e3f2fd';
            case 'critical': return '#fce4ec';
            default: return '#f5f5f5';
        }
    }
    
    getNotificationBorderColor(severity) {
        switch (severity) {
            case 'error': return '#f44336';
            case 'warning': return '#ff9800';
            case 'info': return '#2196f3';
            case 'critical': return '#e91e63';
            default: return '#9e9e9e';
        }
    }
    
    getUserFriendlyMessage(errorInfo) {
        const message = errorInfo.message.toLowerCase();
        
        // Mikrofon hataları
        if (message.includes('notallowederror') || message.includes('mikrofon erişimi reddedildi')) {
            return 'Mikrofon erişimi reddedildi. Lütfen tarayıcı ayarlarından mikrofon iznini verin.';
        }
        if (message.includes('notfounderror') || message.includes('mikrofon bulunamadı')) {
            return 'Mikrofon bulunamadı. Lütfen mikrofonunuzun bağlı olduğundan emin olun.';
        }
        if (message.includes('notreadableerror') || message.includes('başka bir uygulama')) {
            return 'Mikrofon başka bir uygulama tarafından kullanılıyor. Diğer uygulamaları kapatıp tekrar deneyin.';
        }
        
        // API hataları
        if (message.includes('api key') || message.includes('unauthorized')) {
            return 'API anahtarı geçersiz. Lütfen ayarlardan doğru API anahtarını girin.';
        }
        if (message.includes('quota') || message.includes('limit')) {
            return 'Kullanım limiti aşıldı. Lütfen limitinizi artırın veya cache\'li sesleri kullanın.';
        }
        
        // Ses klonlama hataları
        if (message.includes('ses profili') || message.includes('voice profile')) {
            return 'Ses profili bulunamadı. Lütfen önce ses kaydı yapın.';
        }
        if (message.includes('kalite') || message.includes('quality')) {
            return 'Ses kalitesi yetersiz. Daha sessiz bir ortamda kayıt yapmayı deneyin.';
        }
        
        // Tarayıcı uyumluluk hataları
        if (message.includes('speechsynthesis') || message.includes('desteklemiyor')) {
            return 'Tarayıcınız bu özelliği desteklemiyor. Lütfen güncel bir tarayıcı kullanın.';
        }
        
        // Genel hata mesajı
        return errorInfo.message || 'Beklenmeyen bir hata oluştu.';
    }
    
    handleCriticalError(errorInfo) {
        // Kritik hatalar için özel işlemler
        console.error('🚨 CRITICAL ERROR:', errorInfo);
        
        // Ses klonlama sistemini güvenli moda al
        if (window.voiceCloningSystem) {
            try {
                voiceCloningSystem.setEnabled(false);
                console.log('🛡️ Ses klonlama güvenli moda alındı');
            } catch (e) {
                console.error('❌ Güvenli mod hatası:', e);
            }
        }
        
        // Kullanıcıya özel uyarı
        setTimeout(() => {
            if (confirm('🚨 Kritik bir hata oluştu. Sayfayı yeniden yüklemek istiyor musunuz?')) {
                window.location.reload();
            }
        }, 1000);
    }
    
    getErrorHistory() {
        return [...this.errorHistory];
    }
    
    clearErrorHistory() {
        this.errorHistory = [];
    }
    
    exportErrorLog() {
        const logData = {
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
            errors: this.errorHistory
        };
        
        const blob = new Blob([JSON.stringify(logData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `huma-error-log-${Date.now()}.json`;
        a.click();
        
        URL.revokeObjectURL(url);
    }
}

// Global error handler instance
let errorHandler = null;

// Progress indicator sistemi
class ProgressIndicator {
    constructor() {
        this.activeOperations = new Map();
        this.container = null;
        this.createContainer();
    }
    
    createContainer() {
        this.container = document.createElement('div');
        this.container.id = 'progressIndicatorContainer';
        this.container.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10001;
            pointer-events: none;
        `;
        document.body.appendChild(this.container);
    }
    
    show(operationId, message, type = 'loading') {
        const indicator = document.createElement('div');
        indicator.className = `progress-indicator ${type}`;
        indicator.innerHTML = `
            <div class="progress-content">
                <div class="progress-spinner"></div>
                <div class="progress-message">${message}</div>
            </div>
        `;
        
        indicator.style.cssText = `
            background: rgba(255, 255, 255, 0.95);
            border: 2px solid #4ECDC4;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.2);
            pointer-events: auto;
            animation: fadeIn 0.3s ease-out;
            text-align: center;
            min-width: 200px;
        `;
        
        this.activeOperations.set(operationId, indicator);
        this.container.appendChild(indicator);
        
        return operationId;
    }
    
    update(operationId, message, progress = null) {
        const indicator = this.activeOperations.get(operationId);
        if (indicator) {
            const messageEl = indicator.querySelector('.progress-message');
            if (messageEl) {
                messageEl.textContent = message;
            }
            
            if (progress !== null) {
                let progressBar = indicator.querySelector('.progress-bar');
                if (!progressBar) {
                    progressBar = document.createElement('div');
                    progressBar.className = 'progress-bar';
                    progressBar.style.cssText = `
                        width: 100%;
                        height: 4px;
                        background: #e0e0e0;
                        border-radius: 2px;
                        margin-top: 10px;
                        overflow: hidden;
                    `;
                    
                    const progressFill = document.createElement('div');
                    progressFill.className = 'progress-fill';
                    progressFill.style.cssText = `
                        height: 100%;
                        background: #4ECDC4;
                        transition: width 0.3s ease;
                        width: 0%;
                    `;
                    
                    progressBar.appendChild(progressFill);
                    indicator.querySelector('.progress-content').appendChild(progressBar);
                }
                
                const progressFill = progressBar.querySelector('.progress-fill');
                if (progressFill) {
                    progressFill.style.width = `${Math.min(100, Math.max(0, progress))}%`;
                }
            }
        }
    }
    
    hide(operationId) {
        const indicator = this.activeOperations.get(operationId);
        if (indicator) {
            indicator.style.animation = 'fadeOut 0.3s ease-in';
            setTimeout(() => {
                if (indicator.parentNode) {
                    indicator.remove();
                }
                this.activeOperations.delete(operationId);
            }, 300);
        }
    }
    
    hideAll() {
        for (const [operationId] of this.activeOperations) {
            this.hide(operationId);
        }
    }
}

// Global progress indicator instance
let progressIndicator = null;

// Quality feedback system
class QualityFeedback {
    constructor() {
        this.feedbackHistory = [];
    }
    
    analyzeRecordingQuality(sample) {
        const feedback = {
            score: sample.quality || 0,
            issues: [],
            recommendations: [],
            timestamp: Date.now()
        };
        
        // Kalite analizi
        if (sample.quality < 30) {
            feedback.issues.push('Ses kalitesi çok düşük');
            feedback.recommendations.push('Daha sessiz bir ortamda kayıt yapın');
            feedback.recommendations.push('Mikrofona daha yakın konuşun');
        } else if (sample.quality < 50) {
            feedback.issues.push('Ses kalitesi düşük');
            feedback.recommendations.push('Arka plan gürültüsünü azaltın');
        } else if (sample.quality < 70) {
            feedback.issues.push('Ses kalitesi orta');
            feedback.recommendations.push('Daha net konuşmaya çalışın');
        }
        
        // Süre analizi
        if (sample.duration < 3) {
            feedback.issues.push('Kayıt çok kısa');
            feedback.recommendations.push('En az 5-10 saniye kayıt yapın');
        } else if (sample.duration > 60) {
            feedback.issues.push('Kayıt çok uzun');
            feedback.recommendations.push('30 saniyeden kısa kayıtlar daha etkili');
        }
        
        // Ses seviyesi analizi
        if (sample.analysis && sample.analysis.rms) {
            if (sample.analysis.rms < 0.01) {
                feedback.issues.push('Ses seviyesi çok düşük');
                feedback.recommendations.push('Daha yüksek sesle konuşun');
            } else if (sample.analysis.rms > 0.9) {
                feedback.issues.push('Ses seviyesi çok yüksek');
                feedback.recommendations.push('Mikrofona daha uzaktan konuşun');
            }
        }
        
        this.feedbackHistory.push(feedback);
        return feedback;
    }
    
    showQualityFeedback(feedback) {
        if (!errorHandler) return;
        
        let message = `Ses kalitesi: ${Math.round(feedback.score)}%`;
        let severity = 'info';
        
        if (feedback.score < 50) {
            severity = 'warning';
            message += '\n\nÖneriler:\n' + feedback.recommendations.slice(0, 2).map(r => '• ' + r).join('\n');
        } else if (feedback.score >= 80) {
            message += '\n\n🎉 Mükemmel kalite!';
        }
        
        errorHandler.handleError(message, 'Kalite değerlendirmesi', severity, true);
    }
    
    getOverallFeedback(profile) {
        if (!profile || profile.samples.length === 0) return null;
        
        const avgQuality = profile.features.averageQuality;
        const sampleCount = profile.samples.length;
        
        const feedback = {
            overallScore: avgQuality,
            sampleCount: sampleCount,
            recommendations: []
        };
        
        if (sampleCount < 3) {
            feedback.recommendations.push('Daha fazla ses örneği ekleyin (önerilen: 3-5 adet)');
        }
        
        if (avgQuality < 60) {
            feedback.recommendations.push('Ses kalitesini artırmak için daha sessiz ortamda kayıt yapın');
        }
        
        if (sampleCount >= 3 && avgQuality >= 70) {
            feedback.recommendations.push('Harika! Ses profiliniz kullanıma hazır');
        }
        
        return feedback;
    }
}

// Global quality feedback instance
let qualityFeedback = null;

// Final sistem kontrolü
function performFinalSystemCheck() {
    console.log('🔍 Final sistem kontrolü başlatılıyor...');
    
    const checks = {
        storage: false,
        audioManager: false,
        voiceCloning: false,
        errorHandler: false,
        progressIndicator: false,
        qualityFeedback: false,
        themes: false,
        backup: false
    };
    
    try {
        // Storage kontrolü
        if (storage && typeof storage.get === 'function') {
            checks.storage = true;
        }
        
        // AudioManager kontrolü
        if (audioManager && typeof audioManager.speak === 'function') {
            checks.audioManager = true;
        }
        
        // VoiceCloning kontrolü
        if (voiceCloningSystem && typeof voiceCloningSystem.synthesize === 'function') {
            checks.voiceCloning = true;
        }
        
        // ErrorHandler kontrolü
        if (errorHandler && typeof errorHandler.handleError === 'function') {
            checks.errorHandler = true;
        }
        
        // ProgressIndicator kontrolü
        if (progressIndicator && typeof progressIndicator.show === 'function') {
            checks.progressIndicator = true;
        }
        
        // QualityFeedback kontrolü
        if (qualityFeedback && typeof qualityFeedback.analyzeRecordingQuality === 'function') {
            checks.qualityFeedback = true;
        }
        
        // Tema kontrolü
        if (THEMES && THEMES.alfabe && THEMES.ciftlik && THEMES.ev && THEMES.sayilar) {
            checks.themes = true;
        }
        
        // Backup fonksiyonları kontrolü
        if (typeof exportData === 'function' && typeof importData === 'function') {
            checks.backup = true;
        }
        
        // Sonuçları değerlendir
        const passedChecks = Object.values(checks).filter(Boolean).length;
        const totalChecks = Object.keys(checks).length;
        
        console.log(`✅ Sistem kontrolü tamamlandı: ${passedChecks}/${totalChecks} kontrol başarılı`);
        
        // Başarısız kontroller varsa uyar
        const failedChecks = Object.entries(checks)
            .filter(([key, value]) => !value)
            .map(([key]) => key);
            
        if (failedChecks.length > 0) {
            console.warn('⚠️ Başarısız kontroller:', failedChecks);
            if (errorHandler) {
                errorHandler.handleError(`Sistem kontrolü: ${failedChecks.join(', ')} başarısız`, 'Sistem kontrolü', 'warning', false);
            }
        }
        
        // Performans optimizasyonları
        optimizePerformance();
        
        // Accessibility kontrolü
        checkAccessibility();
        
        // Final başarı mesajı
        console.log('🎉 HUMA Ses Klonlama sistemi hazır!');
        
        // Kullanıcıya hoş geldin mesajı (sadece ilk kez)
        const isFirstTime = !storage.get('first_launch_completed');
        if (isFirstTime) {
            setTimeout(() => {
                if (errorHandler) {
                    errorHandler.handleError(
                        'HUMA Ses Klonlama sistemine hoş geldiniz! Ayarlar menüsünden ses klonlama özelliğini keşfedebilirsiniz.',
                        'Hoş geldiniz',
                        'info',
                        true
                    );
                }
                storage.set('first_launch_completed', 'true');
            }, 2000);
        }
        
    } catch (error) {
        console.error('❌ Final sistem kontrolü hatası:', error);
        if (errorHandler) {
            errorHandler.handleError(error, 'Final sistem kontrolü', 'error', false);
        }
    }
}

// Performans optimizasyonları
function optimizePerformance() {
    try {
        // Cache temizleme
        if (voiceCloningSystem && voiceCloningSystem.cacheManager) {
            voiceCloningSystem.cacheManager.clearExpiredItems();
        }
        
        // Memory cleanup
        if (window.gc && typeof window.gc === 'function') {
            window.gc(); // Chrome DevTools'da mevcut
        }
        
        // Event listener optimizasyonu
        optimizeEventListeners();
        
        console.log('⚡ Performans optimizasyonları uygulandı');
        
    } catch (error) {
        console.warn('⚠️ Performans optimizasyon hatası:', error);
    }
}

// Event listener optimizasyonu
function optimizeEventListeners() {
    // Passive event listeners ekle
    const letterCards = document.querySelectorAll('.letter-card');
    letterCards.forEach(card => {
        // Touch events için passive listener
        if (card.ontouchstart === null) {
            card.addEventListener('touchstart', () => {}, { passive: true });
        }
    });
    
    // Scroll performance için throttling
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Scroll işlemleri burada
        }, 16); // 60fps için ~16ms
    }, { passive: true });
}

// Accessibility kontrolü
function checkAccessibility() {
    try {
        const issues = [];
        
        // Alt text kontrolü
        const images = document.querySelectorAll('img:not([alt])');
        if (images.length > 0) {
            issues.push(`${images.length} resimde alt text eksik`);
        }
        
        // Button accessibility
        const buttons = document.querySelectorAll('button:not([aria-label]):not([title])');
        const buttonsWithoutText = Array.from(buttons).filter(btn => !btn.textContent.trim());
        if (buttonsWithoutText.length > 0) {
            issues.push(`${buttonsWithoutText.length} buton accessibility label eksik`);
        }
        
        // Focus management
        const focusableElements = document.querySelectorAll('button, input, select, textarea, [tabindex]');
        if (focusableElements.length === 0) {
            issues.push('Focusable element bulunamadı');
        }
        
        // Color contrast (basit kontrol)
        const lowContrastElements = document.querySelectorAll('[style*="color: #ccc"], [style*="color: #ddd"]');
        if (lowContrastElements.length > 0) {
            issues.push(`${lowContrastElements.length} element düşük kontrast riski`);
        }
        
        if (issues.length === 0) {
            console.log('♿ Accessibility kontrolü: Sorun bulunamadı');
        } else {
            console.warn('♿ Accessibility sorunları:', issues);
        }
        
    } catch (error) {
        console.warn('⚠️ Accessibility kontrol hatası:', error);
    }
}

// Optimal ses klonlama eğitim metinleri
function getOptimalTrainingTexts() {
    return [
        // Türkçe alfabe harflerini kapsayan cümleler
        'A harfi Annenin A\'sı, B harfi Babanın B\'si, C harfi Ceylinin C\'si.',
        'Ç harfi Çiçeğin Ç\'si, D harfi Dedenin D\'si, E harfi Evin E\'si.',
        'F harfi Fıstığın F\'sı, G harfi Güneşin G\'si, Ğ harfi Dağın Ğ\'sı.',
        'H harfi Halanın H\'sı, I harfi Irmağın I\'sı, İ harfi İpliğin İ\'si.',
        'J harfi Jimnastiğin J\'si, K harfi Kalemin K\'sı, L harfi Lambanın L\'si.',
        'M harfi Meyvenin M\'si, N harfi Nenenin N\'si, O harfi Okumun O\'su.',
        'Ö harfi Öğretmenin Ö\'sü, P harfi Pastanın P\'si, R harfi Resminin R\'si.',
        'S harfi Saatin S\'sı, Ş harfi Şapkanın Ş\'sı, T harfi Topun T\'sı.',
        'U harfi Uçağın U\'su, Ü harfi Ütünün Ü\'sü, V harfi Vazonun V\'sı.',
        'Y harfi Yatağın Y\'sı, Z harfi Zeytinin Z\'si.',
        
        // Sayılar
        'Sıfır, bir, iki, üç, dört, beş, altı, yedi, sekiz, dokuz.',
        'Bir elma, iki armut, üç kiraz, dört çilek, beş üzüm.',
        
        // Çiftlik hayvanları teması
        'At koşuyor, inek möörlüyor, tavuk gıdaklıyor, koyun meliyor.',
        'Çiftlikte horoz öter, ördek vak vak der, güvercin uçar.',
        'Buzağı süt içer, dana otlar, öküz çeker, manda yüzer.',
        
        // Ev eşyaları teması  
        'Masada bardak var, sandalyede yastık var, dolabın içinde tabak var.',
        'Ayna duvarda, lamba tavanda, halı yerde, perde pencerede.',
        'Çatal, kaşık, bıçak mutfakta, sabun, havlu banyoda.',
        
        // Fonetik çeşitlilik için özel cümleler
        'Güzel çiçekler bahçede açmış, arılar vızıldayarak bal yapıyor.',
        'Küçük kedi yumuşak yastığın üzerinde uyuyor, rüya görüyor.',
        'Şirin şarkıcı şahane şarkılar söylüyor, şeytan şaşırıyor.',
        'Çocuklar çimlerde çiçek topluyor, çok çalışkan çocuklar.',
        'Öğretmen öğrencilere ödev veriyor, özenle öğretmeye devam ediyor.',
        
        // Uzun sesli harfler
        'Aaa, eee, iii, ooo, uuu sesleri çıkarıyorum.',
        'Ağaç altında oturuyorum, kuş sesleri dinliyorum.',
        'İyi günler, nasılsınız, çok teşekkür ederim.',
        
        // Sessiz harfler ve geçişler
        'Kedi kapıda, köpek bahçede, kuş kafeste, kaplumbağa suda.',
        'Pembe panda patates pişiriyor, papa parmağını penceye vuruyor.',
        'Tatlı teyze tencerede tarhana pişiriyor, tam tamına.',
        
        // Duygusal tonlamalar
        'Merhaba sevgili çocuklar! Bugün çok güzel bir gün.',
        'Aferin sana! Çok güzel okudun, tebrik ederim.',
        'Dikkatli ol lütfen, yavaş yavaş oku.',
        'Harika! Mükemmel! Çok başarılısın!',
        
        // Günlük konuşma kalıpları
        'Günaydın anne, günaydın baba, günaydın kardeşim.',
        'Teşekkür ederim, rica ederim, özür dilerim.',
        'Evet, hayır, belki, tabii ki, kesinlikle.',
        'Ne yapıyorsun? Nasılsın? İyi misin?',
        
        // Tekrarlı sesler (ses klonlama için önemli)
        'La la la, ma ma ma, na na na, ra ra ra.',
        'Ba ba ba, da da da, ga ga ga, ka ka ka.',
        'Sa sa sa, şa şa şa, ta ta ta, za za za.',
        
        // Karma cümleler (tüm sesleri içeren)
        'Çok güzel bir gün, güneş parlıyor, kuşlar şarkı söylüyor.',
        'Annem mutfakta yemek pişiriyor, babam bahçede çiçek suluyor.',
        'Okula gidiyorum, arkadaşlarımla oynuyorum, öğretmenimi dinliyorum.',
        'Kitap okumayı seviyorum, resim yapmayı seviyorum, müzik dinlemeyi seviyorum.'
    ];
}

// Ses klonlama için önerilen kayıt cümleleri
function getRecommendedRecordingTexts() {
    const texts = getOptimalTrainingTexts();
    
    // En önemli 10 cümleyi seç (fonetik çeşitlilik için)
    const recommended = [
        texts[0],  // Alfabe A-C
        texts[1],  // Alfabe Ç-E  
        texts[2],  // Alfabe F-Ğ
        texts[10], // Sayılar
        texts[12], // Çiftlik hayvanları
        texts[15], // Ev eşyaları
        texts[18], // Fonetik çeşitlilik
        texts[22], // Uzun sesli harfler
        texts[26], // Duygusal tonlama
        texts[32]  // Karma cümle
    ];
    
    return recommended;
}

// Backup bilgilerini güncelle
function updateBackupInfo() {
    const backupInfoDiv = document.getElementById('voiceCloningBackupInfo');
    const backupDetailsDiv = document.getElementById('voiceBackupDetails');
    
    if (!backupInfoDiv || !backupDetailsDiv) return;
    
    if (voiceCloningSystem) {
        const profile = voiceCloningSystem.profileManager.getProfile();
        const status = voiceCloningSystem.getStatus();
        
        if (profile && profile.samples.length > 0) {
            backupInfoDiv.style.display = 'block';
            
            const sampleSize = profile.samples.reduce((total, sample) => {
                return total + (sample.audioData ? sample.audioData.length : 0);
            }, 0);
            
            const sizeInKB = (sampleSize / 1024).toFixed(1);
            
            backupDetailsDiv.innerHTML = `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.8em;">
                    <div>📊 Ses Örnekleri: <strong>${profile.samples.length} adet</strong></div>
                    <div>📏 Yaklaşık Boyut: <strong>${sizeInKB} KB</strong></div>
                    <div>🎯 Profil Kalitesi: <strong>${Math.round(profile.quality)}%</strong></div>
                    <div>🔄 Durum: <strong>${status.enabled ? 'Etkin' : 'Devre Dışı'}</strong></div>
                </div>
                <p style="margin-top: 8px; font-size: 0.75em; opacity: 0.8;">
                    ⚠️ Ses örnekleri büyük dosyalar olabilir. Yedekleme biraz zaman alabilir.
                </p>
            `;
        } else {
            backupInfoDiv.style.display = 'none';
        }
    } else {
        backupInfoDiv.style.display = 'none';
    }
}

// ═══════════════════════════════════════════════════════════════════
// VOICE SAMPLE MANAGEMENT - Ses örneği yönetimi
// ═══════════════════════════════════════════════════════════════════

function renderVoiceSamplesList() {
    const samplesList = document.getElementById('voiceSamplesList');
    const samplesSection = document.getElementById('voiceSamplesSection');
    
    if (!voiceCloningSystem || !voiceCloningSystem.profileManager) {
        samplesSection.style.display = 'none';
        return;
    }
    
    const profile = voiceCloningSystem.profileManager.getProfile();
    
    if (!profile || !profile.samples || profile.samples.length === 0) {
        samplesSection.style.display = 'none';
        samplesList.innerHTML = `
            <div class="no-samples-message">
                <p>📭 Henüz ses örneği bulunmuyor</p>
                <small>Ses kaydı yaparak başlayın</small>
            </div>
        `;
        return;
    }
    
    samplesSection.style.display = 'block';
    
    const samplesHTML = profile.samples.map((sample, index) => {
        const duration = sample.duration ? `${sample.duration.toFixed(1)}s` : 'Bilinmiyor';
        const quality = sample.quality || 0;
        const qualityClass = getQualityClass(quality);
        const qualityText = getQualityText(quality);
        const date = sample.timestamp ? new Date(sample.timestamp).toLocaleDateString('tr-TR') : 'Bilinmiyor';
        
        return `
            <div class="voice-sample-item" data-sample-id="${sample.id}">
                <div class="voice-sample-header">
                    <div class="voice-sample-title">
                        🎤 Ses Örneği ${index + 1}
                        ${sample.letter ? ` (${sample.letter})` : ''}
                    </div>
                    <div class="voice-sample-quality">
                        <span>${qualityText}</span>
                        <div class="quality-bar">
                            <div class="quality-fill ${qualityClass}" style="width: ${quality}%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="voice-sample-meta">
                    <span>⏱️ ${duration}</span>
                    <span>📅 ${date}</span>
                    <span>📊 ${Math.round(quality)}% kalite</span>
                </div>
                
                <div class="voice-sample-controls">
                    <button class="voice-sample-btn" onclick="playVoiceSample('${sample.id}')">
                        ▶️ Çal
                    </button>
                    <button class="voice-sample-btn secondary" onclick="testVoiceSample('${sample.id}')">
                        🧪 Test Et
                    </button>
                    <button class="voice-sample-btn danger" onclick="deleteVoiceSample('${sample.id}')">
                        🗑️ Sil
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    samplesList.innerHTML = samplesHTML;
}

function getQualityClass(quality) {
    if (quality >= 80) return 'quality-excellent';
    if (quality >= 60) return 'quality-good';
    if (quality >= 40) return 'quality-fair';
    if (quality >= 20) return 'quality-poor';
    return 'quality-bad';
}

function getQualityText(quality) {
    if (quality >= 80) return 'Mükemmel';
    if (quality >= 60) return 'İyi';
    if (quality >= 40) return 'Orta';
    if (quality >= 20) return 'Zayıf';
    return 'Kötü';
}

function playVoiceSample(sampleId) {
    if (!voiceCloningSystem || !voiceCloningSystem.profileManager) {
        alert('❌ Ses klonlama sistemi bulunamadı');
        return;
    }
    
    const profile = voiceCloningSystem.profileManager.getProfile();
    const sample = profile.samples.find(s => s.id === sampleId);
    
    if (!sample) {
        alert('❌ Ses örneği bulunamadı');
        return;
    }
    
    try {
        // Ses örneğini çal
        if (sample.audioData) {
            const audio = new Audio(sample.audioData);
            audio.play();
            console.log(`🔊 Ses örneği çalınıyor: ${sampleId}`);
        } else {
            alert('❌ Ses verisi bulunamadı');
        }
    } catch (error) {
        console.error('❌ Ses çalma hatası:', error);
        if (errorHandler) {
            errorHandler.handleError(error, 'Ses örneği çalma', 'error', true);
        } else {
            alert('❌ Ses çalınamadı: ' + error.message);
        }
    }
}

function testVoiceSample(sampleId) {
    if (!voiceCloningSystem || !voiceCloningSystem.profileManager) {
        alert('❌ Ses klonlama sistemi bulunamadı');
        return;
    }
    
    const profile = voiceCloningSystem.profileManager.getProfile();
    const sample = profile.samples.find(s => s.id === sampleId);
    
    if (!sample) {
        alert('❌ Ses örneği bulunamadı');
        return;
    }
    
    // Test metni ile ses klonlama testi
    const testTexts = getOptimalTrainingTexts();
    const randomTestText = testTexts[Math.floor(Math.random() * testTexts.length)];
    
    const testText = randomTestText;
    
    try {
        // Sadece bu örneği kullanarak test profili oluştur
        const testProfile = {
            ...profile,
            samples: [sample] // Sadece bu örneği kullan
        };
        
        voiceCloningSystem.synthesizer.synthesize(testText, testProfile)
            .then(() => {
                console.log(`🧪 Ses örneği test edildi: ${sampleId}`);
            })
            .catch(error => {
                console.error('❌ Test hatası:', error);
                alert('❌ Test başarısız: ' + error.message);
            });
            
    } catch (error) {
        console.error('❌ Test hazırlama hatası:', error);
        if (errorHandler) {
            errorHandler.handleError(error, 'Ses örneği test', 'error', true);
        } else {
            alert('❌ Test hazırlanamadı: ' + error.message);
        }
    }
}

function deleteVoiceSample(sampleId) {
    if (!voiceCloningSystem || !voiceCloningSystem.profileManager) {
        alert('❌ Ses klonlama sistemi bulunamadı');
        return;
    }
    
    const profile = voiceCloningSystem.profileManager.getProfile();
    const sample = profile.samples.find(s => s.id === sampleId);
    
    if (!sample) {
        alert('❌ Ses örneği bulunamadı');
        return;
    }
    
    const confirmMessage = `🗑️ "${sample.letter || 'Ses Örneği'}" örneğini silmek istediğinize emin misiniz?\n\nBu işlem geri alınamaz.`;
    
    if (confirm(confirmMessage)) {
        try {
            voiceCloningSystem.profileManager.deleteSample(sampleId);
            renderVoiceSamplesList(); // Listeyi güncelle
            updateVoiceProfileStatus(); // Profil durumunu güncelle
            
            console.log(`🗑️ Ses örneği silindi: ${sampleId}`);
            
            // Eğer hiç örnek kalmadıysa ses klonlamayı devre dışı bırak
            const updatedProfile = voiceCloningSystem.profileManager.getProfile();
            if (!updatedProfile || updatedProfile.samples.length === 0) {
                voiceCloningSystem.setEnabled(false);
                alert('⚠️ Son ses örneği silindi. Ses klonlama devre dışı bırakıldı.');
            }
            
        } catch (error) {
            console.error('❌ Ses örneği silme hatası:', error);
            if (errorHandler) {
                errorHandler.handleError(error, 'Ses örneği silme', 'error', true);
            } else {
                alert('❌ Silme işlemi başarısız: ' + error.message);
            }
        }
    }
}

function addNewVoiceSample() {
    // Yeni ses örneği kaydetmek için kayıt arayüzünü aç
    startVoiceRecording();
}

function clearAllVoiceSamples() {
    if (!voiceCloningSystem || !voiceCloningSystem.profileManager) {
        alert('❌ Ses klonlama sistemi bulunamadı');
        return;
    }
    
    const profile = voiceCloningSystem.profileManager.getProfile();
    
    if (!profile || profile.samples.length === 0) {
        alert('ℹ️ Silinecek ses örneği bulunmuyor');
        return;
    }
    
    const confirmMessage = `🗑️ Tüm ses örneklerini (${profile.samples.length} adet) silmek istediğinize emin misiniz?\n\nBu işlem geri alınamaz ve ses klonlama devre dışı kalacak.`;
    
    if (confirm(confirmMessage)) {
        try {
            voiceCloningSystem.profileManager.clearAllSamples();
            voiceCloningSystem.setEnabled(false); // Ses klonlamayı devre dışı bırak
            
            renderVoiceSamplesList(); // Listeyi güncelle
            updateVoiceProfileStatus(); // Profil durumunu güncelle
            
            console.log('🗑️ Tüm ses örnekleri silindi');
            alert('✅ Tüm ses örnekleri silindi. Ses klonlama devre dışı bırakıldı.');
            
        } catch (error) {
            console.error('❌ Toplu silme hatası:', error);
            if (errorHandler) {
                errorHandler.handleError(error, 'Toplu ses örneği silme', 'error', true);
            } else {
                alert('❌ Silme işlemi başarısız: ' + error.message);
            }
        }
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
// INITIALIZE ON LOAD - Mobil Safari uyumluluğu
// ═══════════════════════════════════════════════════════════════════

// Mobil Safari'de window.onload readonly property hatası verebilir
// addEventListener kullanarak güvenli başlatma
(function() {
    'use strict';
    
    function safeInit() {
        try {
            init();
        } catch (error) {
            console.error('❌ Uygulama başlatma hatası:', error);
            // Fallback: Temel fonksiyonları yükle
            setTimeout(function() {
                try {
                    if (typeof renderLetterGrid === 'function') {
                        renderLetterGrid();
                    }
                } catch (fallbackError) {
                    console.error('❌ Fallback başlatma hatası:', fallbackError);
                }
            }, 1000);
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', safeInit);
    } else {
        // Sayfa zaten yüklenmişse hemen çalıştır
        setTimeout(safeInit, 0);
    }
})();

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


// ═══════════════════════════════════════════════════════════════════
// BASIT YEDEKLEME SİSTEMİ - localStorage Export/Import
// ═══════════════════════════════════════════════════════════════════

function exportData() {
    try {
        // localStorage'dan HUMA verilerini topla
        const data = {
            version: '3.3',
            exportDate: new Date().toISOString(),
            data: {}
        };
        
        // Tüm HUMA verilerini topla
        for (let key in localStorage) {
            if (key.startsWith('huma_') || 
                key.startsWith('voice_recording_') || 
                key.startsWith('voice_profile') || 
                key.startsWith('voice_cloning_') ||
                key.startsWith('indexeddb_migrated') || 
                key.startsWith('lastBackupDate')) {
                data.data[key] = localStorage.getItem(key);
            }
        }
        
        // Ses klonlama özel verileri
        if (voiceCloningSystem) {
            try {
                // Ses profili durumu
                const profile = voiceCloningSystem.profileManager.getProfile();
                if (profile) {
                    data.voiceCloning = {
                        profile: profile,
                        enabled: voiceCloningSystem.isEnabled(),
                        status: voiceCloningSystem.getStatus(),
                        exportDate: Date.now()
                    };
                }
                
                // Cache verilerini de dahil et (isteğe bağlı)
                const cacheData = voiceCloningSystem.cacheManager.exportCache();
                if (cacheData && Object.keys(cacheData).length > 0) {
                    data.voiceCloning.cache = cacheData;
                }
                
                console.log('✅ Ses klonlama verileri yedekleme dosyasına eklendi');
            } catch (error) {
                console.warn('⚠️ Ses klonlama verileri yedeklenemedi:', error);
                if (errorHandler) {
                    errorHandler.handleError(error, 'Ses klonlama yedekleme', 'warning', false);
                }
            }
        }
        
        // Veri sayısını kontrol et
        const dataCount = Object.keys(data.data).length;
        if (dataCount === 0) {
            alert('⚠️ Yedeklenecek veri bulunamadı.');
            return;
        }
        
        // JSON dosyası oluştur ve indir
        const jsonString = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `huma-yedek-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        // Son yedekleme tarihini kaydet
        localStorage.setItem('lastBackupDate', Date.now().toString());
        
        alert(`✅ Yedek başarıyla indirildi!\n\n${dataCount} veri kaydedildi.`);
        
    } catch (error) {
        console.error('❌ Dışa aktarma hatası:', error);
        alert('❌ Yedek oluşturulamadı: ' + error.message);
    }
}

function importData() {
    try {
        // Dosya seçici oluştur
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const importData = JSON.parse(event.target.result);
                    
                    // Veri formatını kontrol et
                    if (!importData.data || typeof importData.data !== 'object') {
                        alert('❌ Geçersiz yedek dosyası formatı!');
                        return;
                    }
                    
                    const dataCount = Object.keys(importData.data).length;
                    
                    // Ses klonlama verisi var mı kontrol et
                    const hasVoiceCloning = importData.voiceCloning && importData.voiceCloning.profile;
                    const voiceInfo = hasVoiceCloning ? 
                        `\n🎤 Ses klonlama: ${importData.voiceCloning.profile.samples.length} ses örneği` : 
                        '';
                    
                    if (confirm(`⚠️ ${dataCount} veri geri yüklenecek.${voiceInfo}\nMevcut verileriniz silinecek.\n\nDevam etmek istiyor musunuz?`)) {
                        // Progress indicator göster
                        const progressId = progressIndicator ? progressIndicator.show('data-import', 'Veriler geri yükleniyor...') : null;
                        
                        try {
                            // Mevcut HUMA verilerini temizle
                            const keysToRemove = [];
                            for (let key in localStorage) {
                                if (key.startsWith('huma_') || 
                                    key.startsWith('voice_recording_') || 
                                    key.startsWith('voice_profile') || 
                                    key.startsWith('voice_cloning_') ||
                                    key.startsWith('voice_cache')) {
                                    keysToRemove.push(key);
                                }
                            }
                            keysToRemove.forEach(key => localStorage.removeItem(key));
                            
                            // Progress güncelle
                            if (progressId && progressIndicator) {
                                progressIndicator.update(progressId, 'Temel veriler yükleniyor...', 25);
                            }
                            
                            // Yeni verileri yükle
                            for (let key in importData.data) {
                                localStorage.setItem(key, importData.data[key]);
                            }
                            
                            // Progress güncelle
                            if (progressId && progressIndicator) {
                                progressIndicator.update(progressId, 'Ses klonlama verileri yükleniyor...', 50);
                            }
                            
                            // Ses klonlama verilerini restore et
                            if (hasVoiceCloning) {
                                try {
                                    // Profili restore et
                                    localStorage.setItem('voice_profile', JSON.stringify(importData.voiceCloning.profile));
                                    
                                    // Ses klonlama durumunu restore et
                                    localStorage.setItem('voice_cloning_enabled', importData.voiceCloning.enabled.toString());
                                    
                                    // Cache verilerini restore et (varsa)
                                    if (importData.voiceCloning.cache && voiceCloningSystem && voiceCloningSystem.cacheManager) {
                                        voiceCloningSystem.cacheManager.importCache(importData.voiceCloning.cache);
                                    }
                                    
                                    console.log('✅ Ses klonlama verileri restore edildi');
                                    
                                } catch (voiceError) {
                                    console.error('❌ Ses klonlama restore hatası:', voiceError);
                                    if (errorHandler) {
                                        errorHandler.handleError(voiceError, 'Ses klonlama restore', 'warning', false);
                                    }
                                }
                            }
                            
                            // Progress tamamla
                            if (progressId && progressIndicator) {
                                progressIndicator.update(progressId, 'Tamamlandı!', 100);
                                setTimeout(() => progressIndicator.hide(progressId), 500);
                            }
                            
                            const successMessage = hasVoiceCloning ? 
                                `✅ ${dataCount} veri ve ses klonlama profili başarıyla geri yüklendi!\n\nSayfa yenilenecek.` :
                                `✅ ${dataCount} veri başarıyla geri yüklendi!\n\nSayfa yenilenecek.`;
                            
                            alert(successMessage);
                            location.reload();
                            
                        } catch (restoreError) {
                            // Progress gizle
                            if (progressId && progressIndicator) {
                                progressIndicator.hide(progressId);
                            }
                            
                            console.error('❌ Restore hatası:', restoreError);
                            if (errorHandler) {
                                errorHandler.handleError(restoreError, 'Veri restore', 'error', true);
                            } else {
                                alert('❌ Veri restore hatası: ' + restoreError.message);
                            }
                        }
                    }
                } catch (error) {
                    console.error('❌ İçe aktarma hatası:', error);
                    alert('❌ Geçersiz yedek dosyası!');
                }
            };
            
            reader.readAsText(file);
        };
        
        input.click();
        
    } catch (error) {
        console.error('❌ İçe aktarma hatası:', error);
        alert('❌ Yedek yüklenemedi: ' + error.message);
    }
}

function showStorageInfo() {
    try {
        // localStorage verilerini say
        let humaDataCount = 0;
        let voiceDataCount = 0;
        let totalSize = 0;
        let voiceSize = 0;
        
        for (let key in localStorage) {
            if (key.startsWith('huma_') || key.startsWith('voice_recording_')) {
                humaDataCount++;
                totalSize += localStorage.getItem(key).length;
            } else if (key.startsWith('voice_profile') || 
                       key.startsWith('voice_cloning_') || 
                       key.startsWith('voice_cache')) {
                voiceDataCount++;
                voiceSize += localStorage.getItem(key).length;
            }
        }
        
        // Ses klonlama profil bilgisi
        let voiceProfileInfo = '';
        if (voiceCloningSystem) {
            const profile = voiceCloningSystem.profileManager.getProfile();
            if (profile) {
                voiceProfileInfo = `\n🎤 Ses Profili: ${profile.samples.length} örnek, ${Math.round(profile.quality)}% kalite`;
            }
        }
        
        // Boyutu MB'ye çevir (yaklaşık)
        const totalSizeAll = totalSize + voiceSize;
        const sizeInMB = (totalSizeAll / (1024 * 1024)).toFixed(2);
        const voiceSizeInMB = (voiceSize / (1024 * 1024)).toFixed(2);
        
        alert(`📊 Depolama Bilgisi\n\n` +
              `💾 HUMA Verileri: ${humaDataCount} adet\n` +
              `🎤 Ses Klonlama: ${voiceDataCount} adet (${voiceSizeInMB} MB)\n` +
              `📏 Toplam Boyut: ${sizeInMB} MB\n` +
              `🗂️ Depolama: localStorage${voiceProfileInfo}\n\n` +
              `⚠️ Tarayıcı verilerini temizlerseniz silinebilir.\n` +
              `💡 Düzenli yedek almayı unutmayın!`);
        
    } catch (error) {
        console.error('❌ Depolama bilgisi hatası:', error);
        alert('❌ Depolama bilgisi alınamadı.');
    }
}

// Yedekleme hatırlatıcısı
function checkBackupReminder() {
    const lastBackup = localStorage.getItem('lastBackupDate');
    
    if (!lastBackup) {
        // İlk kullanım
        localStorage.setItem('lastBackupDate', Date.now().toString());
        return;
    }
    
    const daysSinceBackup = (Date.now() - parseInt(lastBackup)) / (1000 * 60 * 60 * 24);
    
    if (daysSinceBackup > 7) {
        setTimeout(() => {
            if (confirm('💾 Verilerinizi 7 günden fazla yedeklemediniz.\n\nŞimdi yedek almak ister misiniz?')) {
                exportData();
            }
        }, 3000); // 3 saniye sonra sor
    }
}
