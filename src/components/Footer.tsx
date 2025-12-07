import { Wind, Facebook, Instagram, Mail} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-blue-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Wind className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                VENT<span className="text-blue-600">GOLD</span>
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Премиум-решетки вентиляции, которые объединяют инженерное совершенство с изысканным дизайном.
              Преобразуем пространства в Москве с 2014 года.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
                <Facebook className="text-gray-600 hover:text-blue-600" size={20} />
              </a>
              <a href="#" className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
                <Instagram className="text-gray-600 hover:text-blue-600" size={20} />
              </a>
              <a href="#" className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
                <Mail className="text-gray-600 hover:text-blue-600" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Главная</a>
              </li>
              <li>
                <a href="#catalog" className="text-gray-600 hover:text-blue-600 transition-colors">Каталог</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Проекты</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-4">Серии продуктов</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">S-серия Линейные</li>
              <li className="text-gray-600">M-серия Декоративные</li>
              <li className="text-gray-600">V-серия Потолочные</li>
              <li className="text-gray-600">L-серия Напольные</li>
              <li className="text-gray-600">R-серия Регулируемые</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 VentGold. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="/personal-data-agreement" className="text-gray-500 hover:text-blue-600 transition-colors">
              Соглашение на обработку персональных данных
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              Политика cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
