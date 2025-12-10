// ═══════════════════════════════════════════════════════════════════
// IndexedDB Manager - idb kütüphanesi ile veri yönetimi
// ═══════════════════════════════════════════════════════════════════

// idb kütüphanesini import et (CDN'den yüklenecek)
// <script type="module" src="indexeddb-manager.js"></script>

// openDB global olarak yüklenecek (HTML'den)

const DB_NAME = 'HumaDB';
const DB_VERSION = 1;

class IndexedDBManager {
    constructor() {
        this.db = null;
    }

    // Veritabanını başlat
    async init() {
        try {
            this.db = await window.openDB(DB_NAME, DB_VERSION, {
                upgrade(db) {
                    // Ses kayıtları deposu
                    if (!db.objectStoreNames.contains('recordings')) {
                        db.createObjectStore('recordings', { keyPath: 'letter' });
                    }
                    
                    // Promptlar deposu
                    if (!db.objectStoreNames.contains('prompts')) {
                        db.createObjectStore('prompts', { keyPath: 'theme' });
                    }
                    
                    // Ayarlar deposu
                    if (!db.objectStoreNames.contains('settings')) {
                        db.createObjectStore('settings', { keyPath: 'key' });
                    }
                }
            });
            
            console.log('✅ IndexedDB başlatıldı');
            return true;
        } catch (error) {
            console.error('❌ IndexedDB başlatma hatası:', error);
            return false;
        }
    }

    // ═══════════════════════════════════════════════════════════════
    // SES KAYITLARI
    // ═══════════════════════════════════════════════════════════════

    async saveRecording(letter, audioBlob) {
        try {
            await this.db.put('recordings', {
                letter: letter,
                audio: audioBlob,
                timestamp: Date.now()
            });
            console.log(`✅ Ses kaydı kaydedildi: ${letter}`);
            return true;
        } catch (error) {
            console.error('❌ Ses kaydı kaydetme hatası:', error);
            return false;
        }
    }

    async getRecording(letter) {
        try {
            const record = await this.db.get('recordings', letter);
            return record ? record.audio : null;
        } catch (error) {
            console.error('❌ Ses kaydı okuma hatası:', error);
            return null;
        }
    }

    async deleteRecording(letter) {
        try {
            await this.db.delete('recordings', letter);
            console.log(`✅ Ses kaydı silindi: ${letter}`);
            return true;
        } catch (error) {
            console.error('❌ Ses kaydı silme hatası:', error);
            return false;
        }
    }

    async getAllRecordings() {
        try {
            return await this.db.getAll('recordings');
        } catch (error) {
            console.error('❌ Tüm kayıtları okuma hatası:', error);
            return [];
        }
    }

    // ═══════════════════════════════════════════════════════════════
    // PROMPTLAR
    // ═══════════════════════════════════════════════════════════════

    async savePrompts(prompts) {
        try {
            // Her tema için ayrı kayıt
            for (const theme in prompts) {
                await this.db.put('prompts', {
                    theme: theme,
                    data: prompts[theme],
                    timestamp: Date.now()
                });
            }
            console.log('✅ Promptlar kaydedildi');
            return true;
        } catch (error) {
            console.error('❌ Promptlar kaydetme hatası:', error);
            return false;
        }
    }

    async getPrompts() {
        try {
            const allPrompts = await this.db.getAll('prompts');
            const result = {};
            
            allPrompts.forEach(item => {
                result[item.theme] = item.data;
            });
            
            return result;
        } catch (error) {
            console.error('❌ Promptlar okuma hatası:', error);
            return { alfabe: {}, ciftlik: {}, ev: {}, sayilar: {} };
        }
    }

    // ═══════════════════════════════════════════════════════════════
    // AYARLAR
    // ═══════════════════════════════════════════════════════════════

    async saveSetting(key, value) {
        try {
            await this.db.put('settings', {
                key: key,
                value: value,
                timestamp: Date.now()
            });
            return true;
        } catch (error) {
            console.error(`❌ Ayar kaydetme hatası (${key}):`, error);
            return false;
        }
    }

    async getSetting(key, defaultValue = null) {
        try {
            const record = await this.db.get('settings', key);
            return record ? record.value : defaultValue;
        } catch (error) {
            console.error(`❌ Ayar okuma hatası (${key}):`, error);
            return defaultValue;
        }
    }

    async getAllSettings() {
        try {
            const allSettings = await this.db.getAll('settings');
            const result = {};
            
            allSettings.forEach(item => {
                result[item.key] = item.value;
            });
            
            return result;
        } catch (error) {
            console.error('❌ Tüm ayarları okuma hatası:', error);
            return {};
        }
    }

    // ═══════════════════════════════════════════════════════════════
    // DIŞA/İÇE AKTARMA
    // ═══════════════════════════════════════════════════════════════

    async exportAllData() {
        try {
            const recordings = await this.getAllRecordings();
            const prompts = await this.getPrompts();
            const settings = await this.getAllSettings();
            
            // Ses kayıtlarını base64'e çevir (JSON için)
            const recordingsData = await Promise.all(
                recordings.map(async (rec) => ({
                    letter: rec.letter,
                    audio: await this.blobToBase64(rec.audio),
                    timestamp: rec.timestamp
                }))
            );
            
            const exportData = {
                version: '3.3',
                exportDate: new Date().toISOString(),
                recordings: recordingsData,
                prompts: prompts,
                settings: settings
            };
            
            return exportData;
        } catch (error) {
            console.error('❌ Veri dışa aktarma hatası:', error);
            return null;
        }
    }

    async importAllData(importData) {
        try {
            // Ses kayıtlarını geri yükle
            if (importData.recordings) {
                for (const rec of importData.recordings) {
                    const audioBlob = await this.base64ToBlob(rec.audio);
                    await this.saveRecording(rec.letter, audioBlob);
                }
            }
            
            // Promptları geri yükle
            if (importData.prompts) {
                await this.savePrompts(importData.prompts);
            }
            
            // Ayarları geri yükle
            if (importData.settings) {
                for (const key in importData.settings) {
                    await this.saveSetting(key, importData.settings[key]);
                }
            }
            
            console.log('✅ Veriler içe aktarıldı');
            return true;
        } catch (error) {
            console.error('❌ Veri içe aktarma hatası:', error);
            return false;
        }
    }

    // ═══════════════════════════════════════════════════════════════
    // YARDIMCI FONKSİYONLAR
    // ═══════════════════════════════════════════════════════════════

    async blobToBase64(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    async base64ToBlob(base64) {
        const response = await fetch(base64);
        return await response.blob();
    }

    // Veritabanı boyutunu hesapla
    async getStorageSize() {
        try {
            if (navigator.storage && navigator.storage.estimate) {
                const estimate = await navigator.storage.estimate();
                return {
                    usage: estimate.usage,
                    quota: estimate.quota,
                    usageInMB: (estimate.usage / (1024 * 1024)).toFixed(2),
                    quotaInMB: (estimate.quota / (1024 * 1024)).toFixed(2),
                    percentage: ((estimate.usage / estimate.quota) * 100).toFixed(2)
                };
            }
            return null;
        } catch (error) {
            console.error('❌ Depolama boyutu hesaplama hatası:', error);
            return null;
        }
    }

    // Tüm verileri sil
    async clearAllData() {
        try {
            await this.db.clear('recordings');
            await this.db.clear('prompts');
            await this.db.clear('settings');
            console.log('✅ Tüm veriler silindi');
            return true;
        } catch (error) {
            console.error('❌ Veri silme hatası:', error);
            return false;
        }
    }
}

// ═══════════════════════════════════════════════════════════════════
// PERSISTENT STORAGE
// ═══════════════════════════════════════════════════════════════════

async function requestPersistentStorage() {
    if (navigator.storage && navigator.storage.persist) {
        const isPersisted = await navigator.storage.persisted();
        
        if (isPersisted) {
            console.log('✅ Depolama zaten kalıcı');
            return true;
        }
        
        const result = await navigator.storage.persist();
        
        if (result) {
            console.log('✅ Kalıcı depolama izni alındı!');
            return true;
        } else {
            console.log('⚠️ Kalıcı depolama izni reddedildi');
            return false;
        }
    }
    
    console.log('⚠️ Persistent Storage API desteklenmiyor');
    return false;
}

// ═══════════════════════════════════════════════════════════════════
// GLOBAL EXPORT (window objesine ekle)
// ═══════════════════════════════════════════════════════════════════

window.IndexedDBManager = IndexedDBManager;
window.requestPersistentStorage = requestPersistentStorage;
