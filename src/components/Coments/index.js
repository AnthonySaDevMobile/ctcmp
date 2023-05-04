import React, {useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import perfilImage1 from "../../assets/perfilImage1.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper";
export default function Contact() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [_, setInit] = useState();
    return (
        <>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
            spaceBetween={50}
            loop={true}
            slidesPerView={1}
            autoplay={{
                delay:6000,
                pauseOnMouseEnter:false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            onInit={() => setInit(true)}
            
          >
            <SwiperSlide>
            <div className="flex gap-10 sm:h-32 h-48 md:mb-20 mb-2">
            <Image src={perfilImage1} alt="PerfilImage" className="sm:h-44 object-cover sm:w-36 h-40 w-40" />
            <div className="sm:w-1/2 w-3/5 sm:px-0 px-4 md:text-sm text-xs">
              <p>
                "Eu sou um cliente da academia há mais de um ano e posso dizer
                com certeza que é o melhor lugar para se exercitar na cidade. "
              </p>
              <p className="md:mt-5 mt-2 font-bold">Matheus Fraga</p>
              <p className="tracking-widest text-xs">CLIENTE CMP</p>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="flex gap-10 sm:h-32 h-48 md:mb-20 mb-2">
            <Image src={perfilImage1} alt="PerfilImage" className="md:h-44 object-cover md:w-36 h-44 w-44" />
            <div className=" sm:w-1/2 w-3/5 sm:px-0 px-4 md:text-sm text-xs">
              <p>
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
              </p>
              <p className="md:mt-5 mt-2 font-bold">Lorem Ipsum</p>
              <p className="tracking-widest text-xs">CLIENTE CMP</p>
              </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
          
          <button ref={prevRef} className="cursor-pointer ml-8 mr-4"> <FaArrowLeft /></button>
          <button ref={nextRef} className="cursor-pointer"> <FaArrowRight /></button>
          

        </>
      );
  
}
