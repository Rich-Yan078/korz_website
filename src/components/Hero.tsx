import { ArrowRight, AirVent } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-90"></div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-300 rounded-full mb-6">
            <AirVent className="text-blue-600" size={20} />
            <span className="text-blue-600 text-sm font-medium">Премиум решения вентиляции</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
             Корзины, панели и экраны
           <br />
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 text-5xl sm:text-6xl md:text-8xl">
            для кондиционеров
           </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Откройте нашу эксклюзивную коллекцию архитектурных вентиляционных решеток.
            Где инженерное совершенство встречается с изысканным дизайном.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onExplore}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-300 flex items-center gap-2"
            >
              Просмотреть каталог
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Запросить расценку
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white backdrop-blur-sm rounded-xl border border-blue-200 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Завершено проектов</div>
          </div>
          <div className="text-center p-6 bg-white backdrop-blur-sm rounded-xl border border-blue-200 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Серии продуктов</div>
          </div>
          <div className="text-center p-6 bg-white backdrop-blur-sm rounded-xl border border-blue-200 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">10</div>
            <div className="text-gray-600">Лет опыта</div>
          </div>
        </div>
      </div>
    </section>
  );
}
