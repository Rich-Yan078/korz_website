import { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за ваш запрос! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Свяжитесь с <span className="text-blue-600">Нами</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Готовы преобразить ваше пространство? Свяжитесь с нами для консультации и расчета стоимости
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Полное имя</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email адрес</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="ваш@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Номер телефона</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Сообщение</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Отправить сообщение
                <Send size={20} />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white border border-blue-200 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Контактная информация</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm mb-1">Телефон</div>
                    <a href="tel:+79990000001" className="text-gray-900 text-lg font-semibold hover:text-blue-600 transition-colors">
                      +7 (999) 000 00 01 
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm mb-1">Email</div>
                    <a href="mailto:info@ventgold.ru" className="text-gray-900 text-lg font-semibold hover:text-blue-600 transition-colors">
                      info@ventgold.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm mb-1">Адрес</div>
                    <p className="text-gray-900 text-lg font-semibold">
                      Москва, Россия
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <MessageCircle className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm mb-1">WhatsApp</div>
                    <a href="https://wa.me/79938924489" className="text-gray-900 text-lg font-semibold hover:text-blue-600 transition-colors">
                      +7 (999) 000-00-01
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-300 rounded-xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Часы работы</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Пн - Пт:</span>
                  <span className="text-blue-600 font-semibold">9:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Суббота:</span>
                  <span className="text-gray-600 font-semibold">Закрыто</span>
                </div>
                <div className="flex justify-between">
                  <span>Воскресенье:</span>
                  <span className="text-gray-600 font-semibold">Закрыто</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
