# React + Vite
# Todo App

React ile geliştirilmiş basit bir Todo List uygulaması. Kullanıcılar görev ekleyebilir, tamamlanan görevleri işaretleyebilir, filtreleyebilir ve tamamlanan görevleri silebilir. Tüm veriler tarayıcıda localStorage kullanılarak saklanır.

## Dosya Yapısı ve Açıklamaları

- `src/App.jsx`: Uygulamanın ana bileşeni. 
- `src/App.css`: Tüm uygulamanın stil dosyası. 
- `src/components/TodoCreate.jsx`: Görev ekleme, düzenleme, silme ve filtreleme işlemlerini yönetir. 
- `src/components/Todo.jsx`: Her bir görev öğesini (text, tamamlanma durumu, silme ve tamamlama butonları) render eder.  
- `src/components/TodoFilter.jsx`: Görevleri “Hepsi”, “Yapılacaklar” ve “Tamamlananlar” şeklinde filtrelemeyi sağlar.  
- `src/utils/localStorage.js`: Görevleri tarayıcıda saklamak ve almak için yardımcı fonksiyonlar içerir.

  
## Kurulum

1. Depoyu klonlayın:

```bash
git clone https://github.com/hacerbeyza/Todo-APP-w-React.git

2. Proje dizinine gidin:
cd ToDo-APP

3. Bağımlılıkları yükleyin:
npm install

4. Uygulamayı başlatın:
npm start
