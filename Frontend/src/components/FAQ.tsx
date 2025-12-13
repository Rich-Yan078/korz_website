import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Какие материалы используются в ваших вентиляционных решетках?',
    answer: 'Мы используем премиум материалы, включая анодированный алюминий, латунь, нержавеющую сталь и порошковую сталь. Каждый материал выбран для прочности, эстетики и оптимальной производительности в различных условиях.'
  },
  {
    question: 'Вы предлагаете нестандартные размеры и отделки?',
    answer: 'Да, мы специализируемся на индивидуальных решениях. Наша команда может создавать вентиляционные решетки нестандартных размеров и предлагает различные варианты отделки.'
  },
  {
    question: 'Какой типичный срок выполнения заказов?',
    answer: 'Стандартные продукты обычно доступны в течение 5-7 рабочих дней. Индивидуальные заказы требуют 3-4 недели на производство. Мы также предлагаем экспресс-производство за дополнительную плату.'
  },
  {
    question: 'Вы предоставляете услуги установки?',
    answer: 'Мы сотрудничаем с сертифицированными специалистами по установке в Москве и прилегающих регионах. Наша команда может координировать полные услуги установки.'
  },
  {
    question: 'Какую гарантию вы предлагаете?',
    answer: 'Все наши продукты поставляются с 5-летней гарантией, покрывающей производственные дефекты. Премиум-серии имеют 10-летнюю гарантию.'
  },
  {
    question: 'Могу ли я запросить образцы перед заказом?',
    answer: 'Да, мы предлагаем образцы для дизайнеров и архитекторов. Свяжитесь с нашей командой продаж, чтобы запросить образцы материалов и вариантов отделки.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Часто Задаваемые <span className="text-blue-600">Вопросы</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Всё, что вам нужно знать о наших продуктах и услугах
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-blue-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed bg-blue-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
