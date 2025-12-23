import { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact({ orderData, setOrderData }: any) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [agreement, setAgreement] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreement) {
      alert('Для отправки заявки необходимо дать согласие');
      return;
    }

    console.log("ОТПРАВКА ЗАЯВКИ:", {
      ...formData,
      ...orderData
    });

    alert('Спасибо за ваш запрос! Мы свяжемся с вами в ближайшее время.');

    setFormData({ name: '', email: '', phone: '', message: '' });
    setOrderData({ product: "", size: "", color: "", price: 0 });
    setAgreement(false);
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-white to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Свяжитесь с <span className="text-yellow-5s00">Нами</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Готовы преобразить ваше пространство? Свяжитесь с нами для консультации и расчета стоимости
          </p>
        </div>

        {/* ✔ Блок выбранного товара */}
        {orderData?.product && (
          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Вы выбрали:</h2>

            <p className="text-gray-800"><b>Товар:</b> {orderData.product}</p>
            <p className="text-gray-800"><b>Размер:</b> {orderData.size}</p>
            <p className="text-gray-800"><b>Цвет (RAL):</b> {orderData.color}</p>
            <p className="text-gray-800"><b>Цена:</b> {orderData.price.toLocaleString()} ₽</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ФОРМА */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Полное имя</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg"
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
                  className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Номер телефона</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              {/* Сообщение — НЕобязательное */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Сообщение <span className="text-gray-400">(необязательно)</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>

              {/* СОГЛАСИЕ — ДОБАВЛЕНО */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={agreement}
                  onChange={(e) => setAgreement(e.target.checked)}
                  className="mt-0 w-10 h-10 accent-yellow-500"
                  required
                />
                <p className="text-sm text-gray-600 leading-snug">
                  Отправляя заявку, я даю согласие на{' '}
                  <a
                    href="http://localhost:5173/personal-data-agreement"
                    target="_blank"
                    className="text-black-600 underline hover:text-black-800"
                  >
                    обработку своих персональных данных
                  </a>{' '}
                  и подтверждаю ознакомление с{' '}
                  <a
                    href="http://localhost:5173/privacy-policy"
                    target="_blank"
                    className="text-black-600 underline hover:text-black-800"
                  >
                    политикой конфиденциальности
                  </a>.
                </p>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg flex items-center justify-center gap-2"
              >
                Отправить сообщение
                <Send size={20} />
              </button>

            </form>
          </div>

          
          <div className="space-y-8">

            {/* Контакты */}
            <div className="bg-white border border-yellow-200 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Контактная информация</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Phone className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm mb-1">Телефон</div>
                    <a href="tel:+79959009556" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                      +7 (995) 900-95-56
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Mail className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm mb-1">Email</div>
                    <a href="mailto:ventilyaciya-mos.ru@yandex.ru" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                      ventilyaciya-mos.ru@yandex.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <MapPin className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm mb-1">Адрес</div>
                    <p className="text-lg font-semibold text-gray-900">Москва, Россия</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <MessageCircle className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm mb-1">WhatsApp</div>
                    <a href="https://wa.me/79959009556" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                      +7 (995) 900-95-56
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Часы работы */}
            <div className="bg-gradient-to-br from-white-100 to-white-50 border border-yellow-300 rounded-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Часы работы</h2>

              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Пн - Пт:</span>
                  <span className="text-black-600 font-semibold">9:00 - 19:00</span>
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
