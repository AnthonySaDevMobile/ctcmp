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
            <div className="flex gap-10 sm:h-32 h-36 mb-10">
            <Image src={perfilImage1} alt="PerfilImage" className="sm:h-32 sm:w-36 h-40 w-40" />
            <div className="sm:w-1/2 w-3/5 sm:px-0 px-4 md:text-sm text-xs">
              <p>
                "Eu sou um cliente da academia há mais de um ano e posso dizer
                com certeza que é o melhor lugar para se exercitar na cidade. O
                ambiente é sempre limpo e acolhedor, e os instrutores são
                incríveis."
              </p>
              <p className="mt-5 font-bold">Matheus Fraga</p>
              <p className="tracking-widest text-xs">CLIENTE CMP</p>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="flex gap-10 sm:h-32 h-40 mb-10">
            <Image src={perfilImage1} alt="PerfilImage" className="sm:h-32 sm:w-36 h-40 w-40" />
            <div className=" sm:w-1/2 w-3/5 sm:px-0 px-4 md:text-sm text-xs">
              <p>
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              </p>
              <p className="mt-5 font-bold">Lorem Ipsum</p>
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
