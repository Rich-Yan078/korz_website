import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * CookieBanner (средний вариант):
 * - Показывает баннер снизу, сохраняет выбор в localStorage "cookie_consent"
 * - При Accept динамически подгружает аналитики (Яндекс / GA) при наличии ID в env
 * - При Decline — аналитика не загружается
 */

const COOKIE_KEY = "cookie_consent"; // values: "accepted" | "declined"

function loadYandexMetrika(id: string) {
  if (!id) return;
  // guard: не дублировать
  if ((window as any).yaMetrikaLoaded) return;
  (window as any).yaMetrikaLoaded = true;

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.innerHTML = `
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(${id}, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });
  `;
  document.head.appendChild(script);
}

function loadGA(id: string) {
  if (!id) return;
  if ((window as any).gaLoaded) return;
  (window as any).gaLoaded = true;

  const s1 = document.createElement("script");
  s1.async = true;
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s1);

  const s2 = document.createElement("script");
  s2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${id}', { 'anonymize_ip': true });
  `;
  document.head.appendChild(s2);
}

export default function CookieBanner() {
  const [consent, setConsent] = useState<string | null>(() => {
    try {
      return localStorage.getItem(COOKIE_KEY);
    } catch {
      return null;
    }
  });

  useEffect(() => {
    // если уже дал согласие — загружаем метрики (если заданы ID)
    if (consent === "accepted") {
      const yandexId = import.meta.env.VITE_YANDEX_METRIKA_ID;
      const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
      if (yandexId) loadYandexMetrika(yandexId);
      if (gaId) loadGA(gaId);
    }
  }, [consent]);

  function accept() {
    try {
      localStorage.setItem(COOKIE_KEY, "accepted");
    } catch {}
    setConsent("accepted");
  }

  function decline() {
    try {
      localStorage.setItem(COOKIE_KEY, "declined");
    } catch {}
    setConsent("declined");
  }

  if (consent === "accepted" || consent === "declined") {
    return null; // уже сделал выбор
  }

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[9999] max-w-5xl mx-auto animate-slide-up">
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-xl rounded-2xl shadow-2xl border border-yellow-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-yellow-600/5"></div>

        <div className="relative p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-2">Настройки конфиденциальности</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Мы используем cookies и сервисы аналитики (Яндекс.Метрика / Google Analytics) для
                улучшения работы сайта и анализа посещаемости. Подробнее в{" "}
                <Link to="/cookies" className="text-yellow-400 hover:text-yellow-300 underline font-medium">
                  Политике Cookies
                </Link>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={decline}
                className="px-6 py-3 rounded-xl border-2 border-gray-600 text-gray-300 font-semibold hover:bg-gray-700 hover:border-gray-500 transition-all duration-300"
              >
                Отклонить
              </button>

              <button
                onClick={accept}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300"
              >
                Разрешить все
              </button>
            </div>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500"></div>
      </div>
    </div>
  );
}
