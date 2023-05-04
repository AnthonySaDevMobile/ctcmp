import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

export default function CarouselComponent() {
  return (
    <>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1.6}
        spaceBetween={70}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          slideShadows: false,
        }}
        pagination={{
          dynamicBullets: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        autoplay={{
          delay:5000
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full bg-gradient-to-b from-transparent to-bg-black-ct"
      >
        <SwiperSlide>
          <div className="">
            <div className="lg:w-[800px] md:w-[500px] w-[200px] lg:h-96 md:h-60 h-40 bg-[url('../assets/noticia1.jpg')] bg-cover bg-center ">
              <div className="flex items-end h-full ml-10 -mt-5">
                <strong className=" bg-bg-yellow-ct text-center rounded p-2 md:text-lg text-sm text-black font-bold mb-5">
                  FITNESS
                </strong>
              </div>
            </div>
            <p className="w-full text-base m-auto text-white pt-5 pb-20">
              Os pequenos <strong>acima de 11 anos</strong> de idade também têm
              sua oportunidade de crescer saudáveis.
            </p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className=" ">
            <div className="lg:w-[800px] md:w-[500px] w-[200px] lg:h-96 md:h-60 h-40 bg-[url('../assets/noticia2.jpg')] bg-cover bg-top ">
              <div className="flex items-end h-full ml-10 -mt-5">
                <strong className=" bg-bg-yellow-ct text-center rounded p-2 md:text-lg text-sm text-black font-bold mb-5">
                  KIDS
                </strong>
              </div>
            </div>
            <p className=" w-full text-base m-auto text-white pt-5 pb-20">
              Os pequenos <strong>acima de 11 anos</strong> de idade também têm
              sua oportunidade de crescer saudáveis.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="lg:w-[800px] md:w-[500px] w-[200px] lg:h-96 md:h-60 h-40 bg-[url('../assets/noticia1.jpg')] bg-cover bg-top ">
              <div className="flex items-end h-full ml-10 -mt-5">
                <strong className=" bg-bg-yellow-ct text-center rounded p-2 md:text-lg text-sm text-black font-bold mb-5">
                  FITNESS
                </strong>
              </div>
            </div>
            <p className="w-full text-base m-auto text-white pt-5 pb-20">
              Os pequenos <strong>acima de 11 anos</strong> de idade também têm
              sua oportunidade de crescer saudáveis.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" ">
            <div className="lg:w-[800px] md:w-[500px] w-[200px] lg:h-96 md:h-60 h-40 bg-[url('../assets/noticia3.jpg')] bg-cover bg-top ">
              <div className="flex items-end h-full ml-10 -mt-5">
                <strong className=" bg-bg-yellow-ct text-center rounded p-2 md:text-lg text-sm text-black font-bold mb-5">
                  TESTE
                </strong>
              </div>
            </div>
            <p className="w-full text-base m-auto text-white pt-5 pb-20">
              Os pequenos <strong>acima de 11 anos</strong> de idade também têm
              sua oportunidade de crescer saudáveis.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
