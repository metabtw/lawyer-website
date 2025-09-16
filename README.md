# Hukuk Bürosu Web Sitesi

Modern ve profesyonel hukuk bürosu web sitesi. Next.js, React ve Tailwind CSS kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Modern Tasarım**: Profesyonel ve kullanıcı dostu arayüz
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Animasyonlu Navbar**: Scroll durumuna göre değişen şeffaf/beyaz navbar
- **Smooth Scrolling**: Yumuşak sayfa geçişleri
- **Hizmet Alanları**: Ceza, Ticaret, Gayrimenkul ve Aile Hukuku
- **Müşteri Referansları**: Dinamik testimonial slider
- **İletişim Formu**: Kolay iletişim için form
- **SEO Optimized**: Arama motorları için optimize edilmiş

## 🛠️ Teknolojiler

- **Next.js 15**: React framework
- **React 19**: UI kütüphanesi
- **TypeScript**: Type-safe geliştirme
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animasyonlar
- **Google Fonts**: Playfair Display & Inter fontları

## 📦 Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd lawyer-web
```

2. Bağımlılıkları yükleyin:
```bash
npm install
# veya
yarn install
```

3. Development server'ı başlatın:
```bash
npm run dev
# veya
yarn dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 🏗️ Proje Yapısı

```
lawyer-web/
├── src/
│   └── app/
│       ├── globals.css      # Global stiller
│       ├── layout.tsx       # Ana layout
│       └── page.tsx         # Ana sayfa
├── public/                  # Statik dosyalar
├── package.json
└── README.md
```

## 🎨 Tasarım Özellikleri

### Navbar
- Sayfa üstündeyken şeffaf, yazılar beyaz
- Scroll yapıldığında beyaz arka plan, yazılar siyah
- 300ms animasyonlu geçiş efekti
- Responsive menü

### Bölümler
- **Hero Section**: Etkileyici giriş bölümü
- **Hakkımızda**: Büro tanıtımı
- **Hizmetler**: Hukuk alanları
- **Referanslar**: Müşteri yorumları
- **İletişim**: İletişim formu ve bilgileri

## 🚀 Deployment

### Vercel (Önerilen)
```bash
npm run build
vercel --prod
```

### Diğer Platformlar
```bash
npm run build
npm start
```

## 📝 Özelleştirme

### Renkler
`src/app/globals.css` dosyasındaki CSS değişkenlerini düzenleyin:
```css
:root {
  --primary: #2563eb;
  --secondary: #f59e0b;
  --accent: #10b981;
  --dark: #1f2937;
}
```

### İçerik
`src/app/page.tsx` dosyasındaki veri dizilerini güncelleyin:
- `services`: Hizmet alanları
- `testimonials`: Müşteri referansları

## 📞 İletişim

Proje hakkında sorularınız için iletişime geçebilirsiniz.
