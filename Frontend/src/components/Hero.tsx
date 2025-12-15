import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [shouldLoadFullImage, setShouldLoadFullImage] = useState(false);

  useEffect(() => {
    const conn: any = (navigator as any).connection || {};
    const slow = conn.effectiveType && ["2g", "slow-2g", "3g"].includes(conn.effectiveType);
    if (window.innerWidth < 700 || slow) {
      setShouldLoadFullImage(false);
      return;
    }

    const el = containerRef.current;
    if (!el) {
      setShouldLoadFullImage(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadFullImage(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={(r) => (containerRef.current = r)}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <picture>
          <source
            type="image/avif"
            srcSet={
              shouldLoadFullImage
                ? "/src/assets/img_4205.jpg"
                : "/src/assets/img_4205_small.jpg"
            }
            sizes="100vw"
          />
          <source
            type="image/jpg"
            srcSet={
              shouldLoadFullImage
                ? "/src/assets/img_4205.jpg"
                : "/src/assets/img_4205_small.jpg"
            }
            sizes="100vw"
          />
          <img
            src={
              shouldLoadFullImage
                ? "/src/assets/img_4205.jpg"
                : "/src/assets/img_4205_small.jpg"
            }
            alt="Building with ventilation grilles"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            width={1600}
            height={2400}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-full sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight sm:leading-snug break-words">
        Корзины, панели и экраны
        </h1>


        <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 text-5xl sm:text-6xl md:text-8xl mb-7">
          для кондиционеров
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
          <button
            onClick={onExplore}
            className="group px-6 py-3 w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            Просмотреть каталог
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 w-full sm:w-auto border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Запросить расценку
          </button>
        </div>

        <p className="text-white text-lg md:text-xl font-medium leading-relaxed mt-12 max-w-3xl mx-auto">
          Наши корзины для кондиционеров — это не просто функциональный аксессуар, а стильное решение для вашего дома.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
            <div className="text-2xl font-bold text-yellow-400 mb-1">500+</div>
            <div className="text-gray-200">Завершено проектов</div>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
            <div className="text-2xl font-bold text-yellow-400 mb-1">15+</div>
            <div className="text-gray-200">Серии продуктов</div>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
            <div className="text-2xl font-bold text-yellow-400 mb-1">10</div>
            <div className="text-gray-200">Лет опыта</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />
    </section>
  );
}
