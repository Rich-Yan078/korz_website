import { ArrowRight, AirVent } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/src/assets/img_4205.jpg"
          alt="Building with ventilation grilles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full mb-6">
            <AirVent className="text-yellow-400" size={20} />
            <span className="text-white text-sm font-medium">Премиум решения вентиляции</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
             Корзины, панели и экраны
           <br />
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 text-5xl sm:text-6xl md:text-8xl">
            для кондиционеров
           </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-lg">
            Откройте нашу эксклюзивную коллекцию архитектурных вентиляционных решеток.
            Где инженерное совершенство встречается с изысканным дизайном.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onExplore}
              className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-yellow-500/40 transition-all duration-300 flex items-center gap-2"
            >
              Просмотреть каталог
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white hover:text-black backdrop-blur-sm transition-all duration-300"
            >
              Запросить расценку
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-gray-100">Завершено проектов</div>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl">
            <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
            <div className="text-gray-100">Серии продуктов</div>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl">
            <div className="text-3xl font-bold text-yellow-400 mb-2">10</div>
            <div className="text-gray-100">Лет опыта</div>
          </div>
        </div>
      </div>
    </section>
  );
}
