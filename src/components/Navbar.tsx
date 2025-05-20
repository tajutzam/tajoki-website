import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-primary-800 font-heading font-bold text-xl">
          <Code2 size={28} className="text-primary-600" />
          <span>Tajoki</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="font-medium text-gray-700 hover:text-primary-600 transition-colors"
          >
            Beranda
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="font-medium text-gray-700 hover:text-primary-600 transition-colors"
          >
            Layanan
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="font-medium text-gray-700 hover:text-primary-600 transition-colors"
          >
            Testimoni
          </button>
          <button 
            onClick={() => scrollToSection('order')}
            className="btn btn-primary"
          >
            Pesan Sekarang
          </button>
        </nav>
        
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="container py-5">
          <div className="flex justify-between items-center mb-10">
            <a href="#" className="flex items-center gap-2 text-primary-800 font-heading font-bold text-xl">
              <Code2 size={28} className="text-primary-600" />
              <span>Tajoki</span>
            </a>
            <button onClick={toggleMenu}>
              <X size={24} className="text-gray-700" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6">
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-medium text-lg text-gray-700 hover:text-primary-600 transition-colors"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="font-medium text-lg text-gray-700 hover:text-primary-600 transition-colors"
            >
              Layanan
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="font-medium text-lg text-gray-700 hover:text-primary-600 transition-colors"
            >
              Testimoni
            </button>
            <button 
              onClick={() => scrollToSection('order')}
              className="btn btn-primary w-full"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;