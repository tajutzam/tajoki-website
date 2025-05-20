import React from 'react';
import { Code, Terminal, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToOrder = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:pr-10">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium text-sm animate-fade-in">
              #1 Jasa Joki Coding Terpercaya
            </div>
            <h1 className="font-bold text-primary-800 animate-slide-in">
              Solusi Tugas Coding Anda dengan <span className="text-accent-500">Tajoki</span>
            </h1>
            <p className="text-lg text-gray-600 animate-slide-in" style={{ animationDelay: '0.1s' }}>
              Kami membantu mahasiswa dan pelajar menyelesaikan tugas programming dengan kualitas kode terbaik, tepat waktu, dan harga bersahabat.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <button onClick={scrollToOrder} className="btn btn-accent">
                Pesan Sekarang
              </button>
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-secondary">
                Lihat Layanan
              </button>
            </div>
            <div className="flex flex-wrap gap-6 pt-4 animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-primary-600" />
                <span className="font-medium">500+ Klien Puas</span>
              </div>
              <div className="flex items-center gap-2">
                <Code size={20} className="text-primary-600" />
                <span className="font-medium">15+ Bahasa Pemrograman</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal size={20} className="text-primary-600" />
                <span className="font-medium">Revisi Tanpa Batas</span>
              </div>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="relative z-10 bg-white shadow-xl rounded-2xl overflow-hidden border-8 border-white">
              <img 
                src="https://blog.rilidigital.com/wp-content/uploads/2024/12/Menciptakan-Berbagai-Teknologi-Melalui-Coding.jpg" 
                alt="Programmer coding" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-100 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-100 rounded-full z-0"></div>
            <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-20 h-20 bg-secondary-100 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;