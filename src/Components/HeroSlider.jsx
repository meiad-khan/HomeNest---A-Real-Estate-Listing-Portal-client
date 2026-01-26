import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Find Your Dream Home",
    desc: "Browse verified rental and sale properties in top locations.",
    img: "https://demo39.houzez.co/wp-content/uploads/2023/01/gallery-in-0004-scaled.jpg",
    cta: "Browse Properties",
  },
  {
    id: 2,
    title: "List Your Property in Minutes",
    desc: "Reach thousands of potential buyers or tenants easily.",
    img: "https://demo39.houzez.co/wp-content/uploads/2023/01/gallery-in-0001-780x780.jpg",
    cta: "Add Property",
  },
  {
    id: 3,
    title: "Trusted Real Estate Platform",
    desc: "Connect with verified property owners and make informed decisions.",
    img: "https://demo39.houzez.co/wp-content/uploads/2023/01/apartment-0020.jpg",
    cta: "Get Started",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      className="w-full min-h-[70vh] md:h-[80vh]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="w-full min-h-[70vh] lg:h-full flex flex-col lg:flex-row bg-gray-50 overflow-hidden rounded-xl shadow-lg">
            {/* Left Info Panel (CLEAR) */}
            <div className="w-full lg:w-1/2 px-6 md:px-16 py-10 flex flex-col justify-center items-center lg:items-start h-full bg-gray-50 z-10 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeInDown">
                {slide.title}
              </h1>
              <p className="text-gray-700 text-base md:text-lg mb-6 animate-fadeInUp">
                {slide.desc}
              </p>
              <button className="w-fit px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition transform hover:scale-105">
                {slide.cta}
              </button>
            </div>

            {/* Right Image (OVERLAY ONLY HERE) */}
            <div className="relative w-full lg:w-1/2 h-[40vh] md:h-full overflow-hidden">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent"></div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
