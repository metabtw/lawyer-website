'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    icon: '⚖️',
    title: 'Ceza Hukuku',
    description: 'Ceza davalarında uzman savunma hizmetleri ve profesyonel hukuki danışmanlık'
  },
  {
    icon: '🏢',
    title: 'Ticaret Hukuku', 
    description: 'Şirket kuruluşu, ticari sözleşmeler ve kurumsal hukuk danışmanlığı'
  },
  {
    icon: '🏠',
    title: 'Gayrimenkul Hukuku',
    description: 'Tapu işlemleri, emlak sözleşmeleri ve gayrimenkul hukuku hizmetleri'
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Aile Hukuku',
    description: 'Boşanma, velayet, nafaka ve aile hukuku konularında uzman destek'
  }
];

const testimonials = [
  {
    name: 'Mehmet Yılmaz',
    text: 'Profesyonel yaklaşımı ve detaylı çalışması sayesinde davamı kazandık. Kesinlikle tavsiye ederim.',
    rating: 5,
    position: 'İş İnsanı'
  },
  {
    name: 'Ayşe Demir', 
    text: 'Aile hukuku konusundaki uzmanlığı ve anlayışlı yaklaşımı için çok teşekkür ederim.',
    rating: 5,
    position: 'Öğretmen'
  },
  {
    name: 'Ali Kaya',
    text: 'Ticaret hukuku danışmanlığında aldığım hizmet beklentilerimin üzerindeydi.',
    rating: 5,
    position: 'Girişimci'
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    services: false,
    testimonials: false,
    contact: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setIsVisible(prev => ({ ...prev, [sectionId]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    // Scroll event listener for navbar
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                HLG
              </div>
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}>Hukuk Bürosu</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className={`hover:text-primary transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}>
                Hakkımızda
              </button>
              <button onClick={() => scrollToSection('services')} className={`hover:text-primary transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}>
                Hizmetler
              </button>
              <button onClick={() => scrollToSection('testimonials')} className={`hover:text-primary transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}>
                Referanslar
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary">
                İletişim
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Hukuk ve Adalet"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 container text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Hukuki Haklarınızı<br/>Koruyoruz
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 font-light max-w-2xl mx-auto">
              15+ yıllık deneyimimizle, hukuki sorunlarınıza profesyonel çözümler sunuyoruz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Ücretsiz Danışmanlık
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              >
                Hizmetlerimiz
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">30+</div>
                <div className="text-sm text-gray-300">Yıllık Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-sm text-gray-300">Başarılı Dava</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Milyonlarca</div>
                <div className="text-sm text-gray-300">Tazminat</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-dark">Müvekkillerimiz Konuşuyor</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-light-gray p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                  ⚖️
                </div>
                <div>
                  <h4 className="font-semibold text-dark">Ceza Hukuku</h4>
                  <p className="text-sm text-gray-600">Uzman savunma</p>
                </div>
              </div>
              <p className="text-gray-700">"Ceza davamda beni başarıyla temsil etti. Profesyonel yaklaşımı sayesinde beraat ettim."</p>
            </div>
            
            <div className="bg-light-gray p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                  🏢
                </div>
                <div>
                  <h4 className="font-semibold text-dark">Ticaret Hukuku</h4>
                  <p className="text-sm text-gray-600">Kurumsal danışmanlık</p>
                </div>
              </div>
              <p className="text-gray-700">"Şirket kuruluşumda her aşamada yanımda oldu. Hukuki süreçleri sorunsuz tamamladık."</p>
            </div>
            
            <div className="bg-light-gray p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                  👨‍👩‍👧‍👦
                </div>
                <div>
                  <h4 className="font-semibold text-dark">Aile Hukuku</h4>
                  <p className="text-sm text-gray-600">Anlayışlı yaklaşım</p>
                </div>
              </div>
              <p className="text-gray-700">"Boşanma sürecimde çok anlayışlı davrandı. Haklarımı en iyi şekilde korudu."</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-section-gray">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className={`slide-in-left ${isVisible.about ? 'visible' : ''}`}
            >
              <h2 className="text-4xl font-bold mb-6 text-dark">Hukuk Alanında<br/>Güvenilir Ortağınız</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                15 yılı aşkın deneyimimizle, hukuk alanında müvekkillerimize en kaliteli hizmeti sunmaya odaklanıyoruz. 
                Adalet ve dürüstlük ilkelerinden asla taviz vermeden, her davaya özenle yaklaşırız.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                İstanbul Üniversitesi Hukuk Fakültesi mezunu ekibimizle, çeşitli hukuk dallarında uzmanlaşmış 
                ve yüzlerce başarılı dava sonuçlandırmışızdır.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-dark mb-2">Deneyim</h4>
                  <p className="text-gray-600">15+ Yıl<br/>Hukuk Pratiği</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-dark mb-2">Başarı</h4>
                  <p className="text-gray-600">1000+ Başarılı<br/>Dava Sonucu</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className={`slide-in-right ${isVisible.about ? 'visible' : ''}`}
            >
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Hukuk Ekibi"
                  width={600}
                  height={700}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container">
          <motion.div
            className={`fade-in ${isVisible.services ? 'visible' : ''}`}
          >
            <h2 className="section-title">Hukuki Hizmetlerimiz</h2>
            <p className="section-subtitle">
              Geniş hukuk bilgimiz ve deneyimimizle, farklı alanlarda profesyonel hizmet sunuyoruz
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`service-card fade-in ${isVisible.services ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-dark">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <button className="text-primary font-medium hover:underline">
                  Detayları Gör →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dark text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="text-xl text-gray-300">Hukuki sorunlarınızda güvenilir çözüm ortağınız</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                🎯
              </div>
              <h3 className="text-xl font-semibold mb-4">Uzman Kadro</h3>
              <p className="text-gray-300">Alanında uzman avukatlarımızla profesyonel hizmet</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-4">Hızlı Çözüm</h3>
              <p className="text-gray-300">Hukuki süreçlerinizi en kısa sürede sonuçlandırıyoruz</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                🤝
              </div>
              <h3 className="text-xl font-semibold mb-4">Güvenilir Hizmet</h3>
              <p className="text-gray-300">Şeffaf ve dürüst yaklaşımımızla güveninizi kazanıyoruz</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container">
          <motion.div
            className={`fade-in ${isVisible.contact ? 'visible' : ''}`}
          >
            <h2 className="section-title">Hukuki Yardıma mı İhtiyacınız Var?</h2>
            <p className="section-subtitle">
              Uzman avukat ekibimizle hemen iletişime geçin
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              className={`slide-in-left ${isVisible.contact ? 'visible' : ''}`}
            >
              <div className="card">
                <h3 className="text-2xl font-semibold mb-8 text-dark">Ücretsiz Danışmanlık Alın</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Adınızı ve soyadınızı girin"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Telefon numaranızı girin"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="E-posta adresinizi girin"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hukuki Konunuz *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="form-input form-textarea"
                      placeholder="Hukuki danışmanlık ihtiyacınızı detaylandırın"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full text-lg py-4"
                  >
                    Ücretsiz Danışmanlık Talep Et
                  </button>
                </form>
              </div>
            </motion.div>
            
            <motion.div
              className={`slide-in-right ${isVisible.contact ? 'visible' : ''}`}
            >
              <div className="space-y-8">
                <div className="card">
                  <h3 className="text-2xl font-semibold mb-6 text-dark">İletişim Bilgileri</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                        📍
                      </div>
                      <div>
                        <p className="font-medium text-dark">Adres</p>
                        <p className="text-gray-600">Levent Mahallesi, Büyükdere Cad.<br/>No:123 Şişli/İstanbul</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                        📞
                      </div>
                      <div>
                        <p className="font-medium text-dark">Telefon</p>
                        <p className="text-gray-600">+90 212 123 45 67</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                        ✉️
                      </div>
                      <div>
                        <p className="font-medium text-dark">E-posta</p>
                        <p className="text-gray-600">info@hukukburosu.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                        🕒
                      </div>
                      <div>
                        <p className="font-medium text-dark">Çalışma Saatleri</p>
                        <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00<br/>Cumartesi: 10:00 - 16:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary text-white p-8 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4">Acil Durum Hattı</h4>
                  <p className="mb-4">7/24 acil hukuki destek için:</p>
                  <p className="text-2xl font-bold">+90 555 123 45 67</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                  HLG
                </div>
                <span className="text-xl font-bold">Hukuk Bürosu</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Adalet ve dürüstlük ilkeleriyle, hukuki sorunlarınıza profesyonel çözümler sunuyoruz.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                  📧
                </a>
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                  📱
                </a>
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                  💼
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Hizmetler</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Ceza Hukuku</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ticaret Hukuku</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Aile Hukuku</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gayrimenkul Hukuku</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">İletişim</h4>
              <div className="space-y-3 text-gray-300">
                <p>📍 Levent, Şişli/İstanbul</p>
                <p>📞 +90 212 123 45 67</p>
                <p>✉️ info@hukukburosu.com</p>
                <p>🕒 Pzt-Cum: 09:00-18:00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 HLG Hukuk Bürosu. Tüm Hakları Saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
