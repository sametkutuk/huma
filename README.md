# 🎨 HUMA - Türkçe Alfabe Öğrenme Uygulaması

Çocuklar için eğlenceli ve etkileşimli Türkçe alfabe öğrenme uygulaması. **Ses klonlama özelliği ile çocuklar kendi seslerini duyarak öğrenebilir!**

## 🌐 Demo

**[Uygulamayı Deneyin](https://yourusername.github.io/huma/)** _(GitHub Pages linkinizi buraya ekleyin)_

## ✨ Özellikler

### 🎭 4 Farklı Tema
- **Alfabe Teması**: Günlük hayattan örnekler (Anne, Baba, Ev, vb.)
- **Çiftlik Hayvanları**: Hayvan isimleriyle öğrenme (At, İnek, Tavuk, vb.)
- **Ev Eşyaları**: Ev eşyalarıyla öğrenme (Masa, Sandalye, Bardak, vb.)
- **Sayılar (0-9)**: Sayıları öğrenme (Sıfır, Bir, İki, vb.)

### 🎤 Ses Özellikleri
- **🎭 Ses Klonlama**: Kendi sesinizi klonlayarak tüm metinleri kendi sesinizle dinleyin!
- **📊 Kalite Analizi**: Otomatik ses kalitesi değerlendirmesi ve iyileştirme önerileri
- **🎤 Ses Örnekleri Yönetimi**: Birden fazla ses örneği kaydedip yönetin
- **⚡ Akıllı Cache**: Klonlanan sesler cache'lenir, hızlı erişim
- **🔊 Hibrit TTS Sistemi**: Kullanıcı ses profili + tarayıcı TTS entegrasyonu
- **Ses Kaydetme**: Kendi sesinizi kaydedip kullanabilirsiniz
- **Ses Ayarları**: Hız ve ton ayarlanabilir (çocuklar için optimize edilmiş)

### 🎯 Öğrenme Özellikleri
- **Döngüsel Örnekler**: Her harfe tıklandığında farklı örnekler
- **Çoklu Promptlar**: Her harf için birden fazla prompt ekleyebilirsiniz
- **Prompt Seçimi**: Checkbox ile hangi promptların döngüde çalacağını seçin
- **Accordion Tasarım**: Temiz ve düzenli ayarlar arayüzü
- **Özel Açıklamalar**: Her harf için kendi açıklamanızı yazabilirsiniz
- **Emoji Görselleri**: Her harf için otomatik emoji gösterimi
- **Klavye Desteği**: Klavyeden harflere basarak sesleri çalabilirsiniz
- **Gizli Ayarlar**: HUMA başlığına 5 kere hızlıca tıklama (çocuk güvenliği)

### 💰 Maliyet Kontrolü
- **Kullanım Limiti**: API kullanımını sınırlayabilirsiniz
- **Ses Cache**: Üretilen sesler kaydedilir, tekrar API kullanmaz
- **Ses Klonlama Cache**: Klonlanan sesler cache'lenir, performans artışı
- **Ücretsiz Kota**: Google Cloud'da ayda 1 milyon karakter ücretsiz

### 🎤 Ses Klonlama Özellikleri
- **🎙️ Kolay Kayıt**: Tek tıkla ses kaydı başlatma
- **📊 Kalite Kontrolü**: Otomatik ses kalitesi analizi ve öneriler
- **🔧 Parametre Ayarlama**: Pitch, hız, volume özelleştirme
- **🎯 Gerçek Zamanlı Önizleme**: Ayarları anında test etme
- **💾 Otomatik Yedekleme**: Ses profilleri otomatik yedeklenir
- **🔄 Tema Uyumluluğu**: Tüm temalarla sorunsuz çalışma
- **⚡ Seamless Geçiş**: Normal TTS ile otomatik geçiş

## 🚀 Kullanım

1. `huma.html` dosyasını tarayıcınızda açın
2. **Ayarlara erişim** (çocuk güvenliği için gizli):
   - 🎯 **HUMA** başlığına **5 kere hızlıca** tıklayın (tüm cihazlarda çalışır)
3. Ses klonlama için kendi sesinizi kaydedin
4. Tema seçin ve harflere tıklayarak öğrenmeye başlayın!
5. Ayarlar açıkken **ESC** tuşu ile kapatabilirsiniz

## 🔧 Teknik Detaylar

### Dosya Yapısı
- `huma.html` - Ana HTML dosyası (CSS dahil)
- `huma.js` - Birleştirilmiş ve optimize edilmiş JavaScript
- `index.html` - Alternatif giriş noktası

### Teknolojiler
- Vanilla JavaScript (ES6+)
- **Web Audio API** (ses analizi ve işleme)
- **MediaRecorder API** (ses kaydetme)
- **SpeechSynthesis API** (hibrit ses sentezi)
- Web Speech API (tarayıcı TTS)
- LocalStorage (veri saklama)
- **Property-Based Testing** (21 test ile kapsamlı doğrulama)

### Özellikler
- ✅ **Ses Klonlama Sistemi** (kendi sesinizi kullanın)
- ✅ **Akıllı Hata Yönetimi** (kullanıcı dostu bildirimler)
- ✅ **Progress Indicator'lar** (işlem durumu takibi)
- ✅ **Kalite Geri Bildirimi** (ses kalitesi analizi)
- ✅ **Kapsamlı Backup/Restore** (ses profilleri dahil)
- ✅ Responsive tasarım (mobil uyumlu)
- ✅ Offline çalışma (cache ile)
- ✅ Tema sistemi
- ✅ Ses kaydetme
- ✅ API kullanım limiti
- ✅ Merkezi localStorage yönetimi
- ✅ Optimize edilmiş emoji eşleştirme
- ✅ **Accessibility desteği** (erişilebilirlik)

## 📝 Değişiklik Notları

### v5.0 (Son Sürüm) - Saf Ses Klonlama Sistemi 🎤
- ✅ **🚫 Google TTS Kaldırıldı**: Artık sadece kullanıcı ses klonlama sistemi
- ✅ **🎭 Saf Ses Klonlama**: Sadece kendi sesinizi kullanarak tüm metinleri dinleyin
- ✅ **🔊 Hibrit TTS Sistemi**: Kullanıcı ses profili + tarayıcı TTS entegrasyonu
- ✅ **📊 Kalite Analizi**: Otomatik ses kalitesi değerlendirmesi ve iyileştirme önerileri
- ✅ **🎤 Ses Örnekleri Yönetimi**: Birden fazla ses örneği kaydedip yönetin
- ✅ **⚡ Akıllı Cache**: Klonlanan sesler cache'lenir, performans artışı
- ✅ **🚨 Gelişmiş Hata Yönetimi**: Kullanıcı dostu bildirimler ve progress indicator'lar
- ✅ **💾 Kapsamlı Backup/Restore**: Ses profilleri ve cache verileri dahil yedekleme
- ✅ **🔄 Seamless Entegrasyon**: Tarayıcı TTS ile otomatik geçiş
- ✅ **🎯 Tema Uyumluluğu**: Tüm temalarla sorunsuz çalışma
- ✅ **♿ Accessibility**: Erişilebilirlik standartlarına uygun tasarım
- ✅ **🧪 Property-Based Testing**: 21 test ile kapsamlı doğrulama

### v3.1
- ✅ **Basitleştirilmiş Gizli Erişim**: HUMA başlığına 5 kere tıklama (tüm cihazlarda)
- ✅ **Direkt Uygulama Açılışı**: Landing page kaldırıldı
- ✅ **Hakkında Bölümü**: Ayarlar içinde bilgi ve özellikler

### v3.0
- ✅ **Sayılar Teması**: 0-9 arası sayıları öğrenme
- ✅ **Accordion Tasarım**: Ayarlar daha düzenli ve kullanışlı
- ✅ **Prompt Checkbox Sistemi**: Hangi promptların çalacağını seçin
- ✅ **Gizli Ayarlar**: "ayarlar" şifresi ile erişim (çocuk güvenliği)
- ✅ **Klavye Devre Dışı**: Ayarlar açıkken klavye sesleri çalmaz
- ✅ **Filtreleme**: Özel promptları ve kayıtları filtreleyebilme

### v2.0
- ✅ İki farklı JavaScript implementasyonu birleştirildi
- ✅ Button type attribute'ları eklendi
- ✅ Inline style'lar CSS'e taşındı
- ✅ Ses kaydetme özelliği eklendi
- ✅ Rastgele ses seçimi (kayıtlı sesler + TTS)
- ✅ Merkezi storage yönetimi
- ✅ Optimize edilmiş kod yapısı

## 🎓 Eğitim İpuçları

### 🎤 Ses Klonlama İpuçları
- **Sessiz ortamda kayıt yapın** - En iyi kalite için
- **Mikrofona 15-20 cm mesafeden konuşun**
- **En az 3-5 farklı ses örneği kaydedin**
- **Her örnek 10-30 saniye arası olsun**
- **Normal konuşma hızınızı kullanın**
- **Farklı tonlarda konuşarak çeşitlilik sağlayın**

### 📚 Genel Kullanım İpuçları
- Çocuklar için **yavaş hız** (0.5-0.8) ve **yüksek ton** (1.3+) önerilir
- Her harf için **kendi sesinizi kaydedebilirsiniz**
- **Ses klonlama** ile tüm metinler kendi sesinizle okunur
- Her harf için **birden fazla prompt ekleyebilirsiniz** (➕ Prompt Ekle butonu)
- **Checkbox** ile hangi promptların döngüde çalacağını seçin
- Her prompt'u **ayrı ayrı silebilirsiniz** (🗑️ butonu)
- **Tema değiştirerek** farklı kelime gruplarıyla öğrenebilirsiniz
- **Klavyeden** harflere basarak da sesleri çalabilirsiniz
- **Gizli ayarlara erişim:** HUMA başlığına **5 kere hızlıca** tıklayın
- Ayarlar açıkken klavye sesleri çalmaz (yazı yazabilirsiniz)
- **Düzenli yedek alın** - Ses profilleri dahil tüm verilerinizi koruyun

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

## 🤝 Katkıda Bulunma

Önerileriniz ve katkılarınız için teşekkür ederiz!
