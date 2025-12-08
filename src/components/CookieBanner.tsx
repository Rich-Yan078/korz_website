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
    <div style={{
      position: "fixed",
      bottom: 18,
      left: 18,
      right: 18,
      zIndex: 9999,
      boxShadow: "0 6px 30px rgba(0,0,0,0.12)",
      borderRadius: 10,
      background: "white",
      padding: "16px 18px",
      display: "flex",
      gap: 12,
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: 1000,
      margin: "0 auto"
    }}>
      <div style={{flex: 1, fontSize: 14, color: "#111"}}>
        Мы используем cookies и сервисы аналитики (Яндекс.Метрика / Google Analytics) для
        улучшения работы сайта и анализа посещаемости. Подробнее в{" "}
        <Link to="/cookies">Политике Cookies</Link> и{" "}
        <Link to="/privacy">Политике конфиденциальности</Link>.
      </div>

      <div style={{display: "flex", gap: 8, alignItems: "center"}}>
        <button
          onClick={decline}
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: "1px solid #ccc",
            background: "transparent",
            cursor: "pointer"
          }}
        >
          Отклонить
        </button>

        <button
          onClick={accept}
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: "none",
            background: "#0070f3",
            color: "white",
            cursor: "pointer"
          }}
        >
          Разрешить
        </button>

        <Link to="/cookies" style={{fontSize: 12, color: "#666", marginLeft: 6}}>Настройки</Link>
      </div>
    </div>
  );
}
