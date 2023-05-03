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
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1.8}
        spaceBetween={70}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          dynamicBullets: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        autoplay={{
            delay:3000,
            pauseOnMouseEnter:true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full bg-gradient-to-b from-transparent to-bg-black-ct"
      >
        <SwiperSlide>
          <div className="">
            <div className="w-full h-80 bg-[url('../assets/noticia1.jpg')] bg-cover bg-center ">
              <div className="flex items-end h-full ml-10 -mt-5">
                <strong className=" bg-bg-yellow-ct text-center rounded p-2 text-lg text-black font-bold mb-5">
                  FITNESS
                </strong>
              </div>
            </div>
            <p className="sm:w-9/12 w-ful text-white text-lg m-auto py-5">
              Os pequenos <strong>acima de 11 anos</strong> de idade também têm
              sua oportunidade de crescer saudáveis.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" ">
            <div className="w-full h-80 bg-[url('../assets/noticia2.jpg')] bg-cover bg-top ">
              <div className="flex items-end h-full ml-10 -mt-5">
                <strong className=" bg-bg-yellow-ct text-center rounded p-2 text-lg text-black font-bold mb-5">
                  KIDS
                </strong>
              </div>
            </div>
            <p className="sm:w-9/12 w-full text-lg m-auto text-white py-5">
              Os pequenos <strong>acima de 11 anos</strong> de idade também têm
              sua oportunidade de crescer saudáveis.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" ">
            <div className="w-full h-80 bg-[url('../assets/noticia3.jpg')] bg-cover bg-top ">
              <div className="flex items-end h-full ml-10 -mt-5">
                <strong className=" bg-bg-yellow-ct text-center rounded p-2 text-lg text-black font-bold mb-5">
                  TESTE
                </strong>
              </div>
            </div>
            <p className="sm:w-9/12 w-fultext-lg m-auto text-white py-5">
              Os pequenos <strong>acima de 11 anos</strong> de idade também têm
              sua oportunidade de crescer saudáveis.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
