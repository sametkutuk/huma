# 🎨 HUMA - Türkçe Alfabe Öğrenme Uygulaması

Çocuklar için eğlenceli ve etkileşimli Türkçe alfabe öğrenme uygulaması.

## 🌐 Demo

**[Uygulamayı Deneyin](https://sametkutuk.github.io/huma/huma.html)** _(GitHub Pages linkinizi buraya ekleyin)_

## ✨ Özellikler

### 🎭 4 Farklı Tema
- **Alfabe Teması**: Günlük hayattan örnekler (Anne, Baba, Ev, vb.)
- **Çiftlik Hayvanları**: Hayvan isimleriyle öğrenme (At, İnek, Tavuk, vb.)
- **Ev Eşyaları**: Ev eşyalarıyla öğrenme (Masa, Sandalye, Bardak, vb.)
- **Sayılar (0-9)**: Sayıları öğrenme (Sıfır, Bir, İki, vb.)

### 🎤 Ses Özellikleri
- **Google Cloud TTS**: Yüksek kaliteli Türkçe ses sentezi
- **Tarayıcı TTS**: Ücretsiz tarayıcı tabanlı ses
- **Ses Kaydetme**: Kendi sesinizi kaydedip kullanabilirsiniz
- **Rastgele Ses Seçimi**: Her tıklamada farklı sesler (kayıtlı sesler + TTS)
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
- **Ücretsiz Kota**: Google Cloud'da ayda 1 milyon karakter ücretsiz

## 🚀 Kullanım

1. `huma.html` dosyasını tarayıcınızda açın
2. **Ayarlara erişim** (çocuk güvenliği için gizli):
   - 🎯 **HUMA** başlığına **5 kere hızlıca** tıklayın (tüm cihazlarda çalışır)
3. (Opsiyonel) Google Cloud API key'inizi girin
4. Tema seçin ve harflere tıklayarak öğrenmeye başlayın!
5. Ayarlar açıkken **ESC** tuşu ile kapatabilirsiniz

## 🔧 Teknik Detaylar

### Dosya Yapısı
- `huma.html` - Ana HTML dosyası (CSS dahil)
- `huma.js` - Birleştirilmiş ve optimize edilmiş JavaScript
- `index.html` - Alternatif giriş noktası

### Teknolojiler
- Vanilla JavaScript (ES6+)
- Google Cloud Text-to-Speech API
- Web Speech API (tarayıcı TTS)
- MediaRecorder API (ses kaydetme)
- LocalStorage (veri saklama)

### Özellikler
- ✅ Responsive tasarım (mobil uyumlu)
- ✅ Offline çalışma (cache ile)
- ✅ Tema sistemi
- ✅ Ses kaydetme
- ✅ API kullanım limiti
- ✅ Merkezi localStorage yönetimi
- ✅ Optimize edilmiş emoji eşleştirme

## 📝 Değişiklik Notları

### v3.1 (Son Sürüm)
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

- Çocuklar için **yavaş hız** (0.5-0.8) ve **yüksek ton** (1.3+) önerilir
- Her harf için **kendi sesinizi kaydedebilirsiniz**
- Her harf için **birden fazla prompt ekleyebilirsiniz** (➕ Prompt Ekle butonu)
- **Checkbox** ile hangi promptların döngüde çalacağını seçin
- Her prompt'u **ayrı ayrı silebilirsiniz** (🗑️ butonu)
- **Tema değiştirerek** farklı kelime gruplarıyla öğrenebilirsiniz
- **Klavyeden** harflere basarak da sesleri çalabilirsiniz
- **Gizli ayarlara erişim:** HUMA başlığına **5 kere hızlıca** tıklayın
- Ayarlar açıkken klavye sesleri çalmaz (yazı yazabilirsiniz)

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

## 🤝 Katkıda Bulunma

Önerileriniz ve katkılarınız için teşekkür ederiz!

