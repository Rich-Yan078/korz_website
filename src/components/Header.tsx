import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // динамический стиль фона: прозрачный -> черно->оранжевый акцент
  const bgStyle: React.CSSProperties = isScrolled
    ? {
        background:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.96) 0%, rgba(0,0,0,0.9) 75%, rgba(255,138,0,0.06) 100%)",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.35)"
      }
    : { background: "transparent" };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 
      transition-all duration-300 ease-in-out
       ${isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"}`}

      // @ts-ignore
      data-scrolled={isScrolled}
    >
      <div style={bgStyle} className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md p-1 shadow-sm">
                <img
                  src="/icons/фавикон вентголд пнг.png"
                  alt="VENTGOLD"
                  className="w-full h-full object-contain"
                />
              </div>

              <span
                className={`font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-white"
                } text-xl md:text-2xl`}
              >
                VENT<span className="text-yellow-400">GOLD</span>
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("home")} className={`font-medium transition-colors ${isScrolled ? "text-white hover:text-yellow-300" : "text-white hover:text-yellow-300"}`}>
                Главная
              </button>
              <button onClick={() => scrollToSection("catalog")} className={`font-medium transition-colors ${isScrolled ? "text-white hover:text-yellow-300" : "text-white hover:text-yellow-300"}`}>
                Каталог
              </button>
              <button onClick={() => scrollToSection("projects")} className={`font-medium transition-colors ${isScrolled ? "text-white hover:text-yellow-300" : "text-white hover:text-yellow-300"}`}>
                Проекты
              </button>
              <button onClick={() => scrollToSection("faq")} className={`font-medium transition-colors ${isScrolled ? "text-white hover:text-yellow-300" : "text-white hover:text-yellow-300"}`}>
                FAQ
              </button>
              <button onClick={() => scrollToSection("contact")} className={`font-medium transition-colors ${isScrolled ? "text-white hover:text-yellow-300" : "text-white hover:text-yellow-300"}`}>
                Контакты
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <a href="tel:+79938924489" className="hidden md:flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                <Phone size={18} />
                <span className="select-none">+7 (993) 892-44-89</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-yellow-800">
            <nav className="flex flex-col px-4 py-4 gap-4">
              <button onClick={() => scrollToSection("home")} className="text-white hover:text-yellow-300 text-left font-medium">
                Главная
              </button>
              <button onClick={() => scrollToSection("catalog")} className="text-white hover:text-yellow-300 text-left font-medium">
                Каталог
              </button>
              <button onClick={() => scrollToSection("projects")} className="text-white hover:text-yellow-300 text-left font-medium">
                Проекты
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-white hover:text-yellow-300 text-left font-medium">
                FAQ
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-white hover:text-yellow-300 text-left font-medium">
                Контакты
              </button>
              <a href="tel:+79938924489" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                <Phone size={18} />
                <span>+7 (993) 892-44-89</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
