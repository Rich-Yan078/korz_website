import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-yellow-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg p-1 shadow-sm">
              <img
                src="/icons/фавикон вентголд пнг.png"
                alt="VENTGOLD logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              VENT<span className="text-yellow-600">GOLD</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-yellow-600 transition-colors font-medium">
              Главная
            </button>
            <button onClick={() => scrollToSection('catalog')} className="text-gray-600 hover:text-yellow-600 transition-colors font-medium">
              Каталог
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-yellow-600 transition-colors font-medium">
              Проекты
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-yellow-600 transition-colors font-medium">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-yellow-600 transition-colors font-medium">
              Контакты
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+79938924489" className="hidden md:flex items-center gap-2 text-yellow-600 hover:text-yellow-700 transition-colors font-medium">
              <Phone size={18} />
              <span>+7 (993) 892-44-89</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-yellow-600 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-yellow-200">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-yellow-600 transition-colors text-left font-medium">
              Главная
            </button>
            <button onClick={() => scrollToSection('catalog')} className="text-gray-600 hover:text-yellow-600 transition-colors text-left font-medium">
              Каталог
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-yellow-600 transition-colors text-left font-medium">
              Проекты
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-yellow-600 transition-colors text-left font-medium">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-yellow-600 transition-colors text-left font-medium">
              Контакты
            </button>
            <a href="tel:+79938924489" className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700 transition-colors font-medium">
              <Phone size={18} />
              <span>+7 (993) 892-44-89</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
