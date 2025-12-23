import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const images = Array.from({ length: 20 }, (_, i) => `/works/${i + 1}.jpg`);

export default function OurWorks() {
  return (
    <section
      id="works"
      className="
        relative
        pt-24 pb-28
        overflow-hidden
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: "url('/public/workfon.jpg')",
      }}
    >
      {/* затемнение фона */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* ЗАГОЛОВОК */}
        <div className="text-center mb-14">
          <h2
            className="
              text-4xl sm:text-5xl md:text-6xl
              font-extrabold
              bg-gradient-to-r from-yellow-400 to-yellow-600
              bg-clip-text text-transparent
              drop-shadow-[0_6px_25px_rgba(0,0,0,0.85)]
            "
          >
            Наши работы
          </h2>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          centeredSlides
          grabCursor
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation
          spaceBetween={40}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.6 },
          }}
          className="!overflow-visible"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`
                    transition-all duration-500 ease-out
                    ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-50"}
                  `}
                >
                  <img
                    src={src}
                    alt={`Проект ${index + 1}`}
                    loading="lazy"
                    className="
                      w-full
                      h-[260px] sm:h-[360px] md:h-[460px]
                      object-cover
                      rounded-2xl
                      shadow-2xl
                    "
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
