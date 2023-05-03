import React, {useState, useEffect} from "react";
import Header from "@/components/Header";
import {
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { AiFillDownCircle } from "react-icons/ai";
import back4 from "../assets/background4.png";
import Image from "next/image";
import FormularioContato from "@/components/Forms";
import Footer from "@/components/Footer";
import CarouselComponent from "@/components/Carousel";
import Coments from "@/components/Coments";
import Link from "next/link";
import Head from "next/head";


export default function Home() {
  const [play, setPlay]= useState(true);
  useEffect(()=>{
    setPlay(true);
  },[])
  return (
    <div >

      <Head>
        <title>CMP - Home</title>
        <link rel="apple-touch-icon" tamanhos="180x180" href="/favicon.png"/> 
        <link rel="icon" type="image/png" tamanhos="32x32 " href="/favicon-32x32.png"/> 
        <link rel="icon" type="image/png" tamanhos="16x16" href="/favicon-16x16.png"/> 
        <link rel="manifest" href ="/site.webmanifest"/> 
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/> 
        <meta name="msapplication-TileColor" content="#da532c "/> 
        <meta name="theme-color" content="#ffffff"/> 
      </Head>

      <video
        loop
        autoPlay={play}
        src={"/VideoBackground.mp4"}
        className="absolute brightness-50 w-full bg-bg-black-ct object-fill h-full -z-10 "
      />
      <Header
        position={"fixed"}
        background={
          "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
        }
      />

      <div className="h-full max-[350px]:h-[500px]  w-full z-10 flex items-center max-[350px]:flex max-[350px]:text-xs">
        <div className="font-Montserrat-Bold w-9/12 m-auto text-left mt-36 lg:py-16 py-14 ">
          <p className="text-white text-5xl tracking-wide mb-3 max-[350px]:text-2xl">SEJA O</p>
          <p className="text-bg-yellow-ct text-5xl tracking-wide mb-3 font-bold max-[350px]:text-2xl">
            ATLETA
          </p>
          <p className="text-white text-5xl tracking-wide mb-3 max-[350px]:text-2xl">QUE VOCÊ</p>
          <p className="text-white text-5xl tracking-wide mb-3 font-bold max-[350px]:text-2xl">
            PODE SER!
          </p>
          <Link
            href="https://api.whatsapp.com/send?phone=38999337788"
            target="_blank"
          >
            <p className="max-[350px]:text-xs text-sm mt-10 border rounded transition ease-in delay-75 font-semibold border-solid border-bg-yellow-ct w-2/5 lg:w-1/5 text-center text-white p-1 hover:bg-bg-yellow-ct hover:text-black ">
              FAÇA UMA AVALIAÇÃO
            </p>
          </Link>
          <div className="lg:mt-40 flex justify-end max-[320px]:gap-3 gap-8">
            <Link href="https://www.instagram.com/ctcmpmoc/" target="_blank">
            <FaInstagram size={18} color="white" />
            </Link>
            
            <FaTelegramPlane size={18} color="white" />

            <FaYoutube size={18} color="white" />
          
          </div>
        </div>
      </div>

      <div className="bg-black w-auto text-white text-center sm:-mt-22 -mt-6 p-10">
        <p className=" lg:w-1/3 m-auto font-semibold text-4xl">
          Esqueça tudo o que você conhece sobre{" "}
          <strong className="font-semibold text-4xl text-bg-yellow-ct">
            treinamento esportivo.
          </strong>
        </p>
        <p className="mt-10 font-semibold text-xl">
          Que tal encarar um desafio{" "}
          <strong className="text-bg-yellow-ct">transformador</strong>?
        </p>
        <Link href="#sobre">
          <AiFillDownCircle
            size={60}
            color="#ffe900"
            className="m-auto mt-10"
          />
        </Link>
      </div>

      <div className="lg:flex w-full lg:px-0 px-2 lg:w-9/12 m-auto" id="sobre">
        <div className="lg:h-2/5 m-auto mt-14 ">
          <strong className="bg-black text-white font-semibold rounded lg:tracking-widest text-sm px-2">
            SOMOS O CT
          </strong>
          <p className="lg:w-2/3 mt-5 lg:mb-10 mb-2 font-bold lg:text-3xl">
            Construir atletas, celebrar a superação e promover desenvolvimento
            integral.
          </p>
          <p className="lg:w-2/3 lg:mb-10 mb-2 lg:text-lg">
            Nossa história começa com o propósito de permitir que atletas em
            suas mais diferentes histórias encontrem sua melhor versão.
          </p>
          <p className="lg:w-2/3 lg:mb-10 mb-2 lg:text-lg">
            Uma equipe multidisciplinar, composta por preparadores físicos,
            fisioterapeutas e médicos, desenvolve protocolos
            personalizados,cuidando da trajetória de cada atleta.
          </p>
          <p className="lg:w-2/3 lg:mb-10 lg:text-lg">
            Seja o atleta que você <strong className="font-Montserrat-Bold">pode</strong> ser.
          </p>
        </div>
        <div className="mr-1 lg:mr-0">
          <div className="hidden lg:flex bg-[url('../assets/background2.jpg')] bg-cover bg-center lg:w-64 lg:h-5/6 w-44 h-5/6 z-10 lg:-mt-14 -mt-8" />
          <Link href="/about">
            <div className="bg-bg-yellow-ct font-Montserrat-Bold text-center m-auto mt-16 lg:p-2 p-6 rounded">
              <strong>SAIBA MAIS</strong>
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-[url('../assets/backgroundHome.jpg')] bg-cover bg-top flex items-end  w-full h-auto mt-10 z-0">
        <div className="w-9/12 flex items-end justify-end m-auto">
          <div className="text-white mt-10 font-semibold lg:text-4xl text-2xl text-right w-1/2 flex flex-col items-end leading-relaxed">
            <p>
              Uma <strong>experiência imersiva</strong> para você elevar seu{" "}
              <strong>desenvolvimento</strong> a um novo nível
            </p>
            <div className="mt-8 mb-10 bg-bg-yellow-ct text-center lg:w-1/2 rounded p-1 lg:text-xl text-lg text-black font-Montserrat-Bold">
              <Link
                href="https://api.whatsapp.com/send?phone=38999337788"
                target="_blank"
              >
                <p>COMECE AGORA!</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Image
          src={back4}
          alt="splash"
          className="lg:-mt-40 z-20 lg:w-96 lg:h-96 w-48 h-48 -mt-28"
        />
        <div className="w-full">
          <div className="text-center lg:-mt-36 ">
            <strog className="bg-black text-white font-semibold rounded tracking-widest text-sm px-2">
              NOSSAS MODALIDADES
            </strog>
            <p className="mt-5 mb-10 font-bold text-3xl">
              Pra te fazer ir mais longe.
            </p>
            <p className="mb-10 text-lg">
              Escolha a modalidade que adapta à sua realidade.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center border border-none">
        <CarouselComponent />
      </div>

      <div
        className="bg-bg-black-ct text-white py-20 "
        id="contact"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="lg:w-9/12 lg:m-auto w-full  lg:flex justify-between">
          <div className="lg:w-1/3 lg:px-2 px-8 h-full mb-10 lg:mb-0">
            <strong className="bg-white text-black rounded px-1 lg:tracking-widest lg:text-sm tracking-wide text-xs">
              CONTATO
            </strong>
            <p className="lg:mt-5 font-bold text-3xl">Vamos Conversar?</p>
            <p className="lg:mt-5 text-lg">
              Se desafios te motivam e resultados personalizados é o que você
              procura,{" "}
              <strong className="font-Montserrat-Bold text-bg-yellow-ct">
                agende uma aula experimental.
              </strong>
            </p>
            <p className="lg:mt-5 text-lg">
              Para conhecer mais sobre uma nova experiência, conte com a gente
            </p>
            <p className="lg:mt-10 font-bold text-lg">
              Qual história podemos te ajudar a construir?
            </p>
          </div>
          <div className="lg:w-1/3 lg:px-2 px-8 h-full lg:mb-0">
            <FormularioContato />
          </div>
        </div>
      </div>

      <div className="bg-[url('../assets/serviços-fachada.png')] bg-cover bg-center w-full h-96 hover:opacity-80 hover:cursor-pointer transition-opacity duration-300 ">
        <div className="h-full w-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
          <Link href="/services#structure">
            <p className="bg-bg-yellow-ct text-center rounded p-2 text-xl text-black font-Montserrat-Bold cursor-pointer">
              CONHEÇA NOSSO ESPAÇO
            </p>
          </Link>
        </div>
      </div>

      <div className="w-full h-96 px-2 bg-bg-black-ct border-t-2 border-zinc-700">
        <div className="lg:w-9/12 lg:m-auto w-full  flex justify-between">
          <div className="w-1/2 ">
            <p className="pt-10 text-white font-semibold rounded tracking-widest text-sm">
              NOSSO ESPAÇO
            </p>
            <p className="mt-5 text-white text-2xl">
              Onde sua história acontece.
            </p>
            <div className="mt-5 flex  items-center gap-2">
              <FaMapMarkerAlt size={30} color="#fff" />
              <div className="text-white text-sm">
                <p>R. Dr. Mário Veloso, 346</p>
                <p>Jardim São Luiz, Montes Claros - MG</p>
              </div>
            </div>
          </div>

          <div className="flex justify-start h-80 items-center lg:w-1/3 bg-[url('../assets/whatsapp.png')] lg:bg-cover bg-contain bg-no-repeat bg-center">
            <Link
              href="https://api.whatsapp.com/send?phone=38999337788"
              target="_blank"
            >
              <button className="hover:bg-bg-yellow-ct bg-white text-center rounded lg:p-2 py-2 px-1 lg:text-xl text-xs text-black font-Montserrat-Bold mr-2">
                FALE POR WHATSAPP
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[url('../assets/mapa.png')] bg-cover bg-center h-32 w-full">
      </div>

      <div className="w-full lg:py-20 bg-bg-black-ct">
        <div className="lg:w-9/12 lg:px-0 px-2 flex flex-col items-center justify-center  m-auto pt-20">
          <strong className="bg-bg-yellow-ct text-center rounded px-5 text-sm  tracking-widest  text-black font-Unimed">
            SEJA O ATLETA QUE VOCÊ PODE SER
          </strong>
          <p className="mt-10 text-white lg:text-5xl text-xl font-bold">
            Nossos princípios
          </p>
          <div className="flex justify-between gap-1">
            <p className="mt-10 text-white lg:text-5xl text-xl font-bold">
              Nossa missão // 
            </p>
            <p
              className="mt-10 lg:text-5xl text-xl text-bg-black-ct font-bold"
              style={{
                textShadow:
                  "-1px -1px 0px #FFF,-1px 1px 0px #FFF,1px -1px 0px #FFF,1px 0px 0px #FFF",
              }}
            >
             {" "} Nossa visão
            </p>
          </div>
          <p className="mt-10 lg:text-5xl text-xl text-white font-bold">
            Nossa filosofia
          </p>
          <Link
            href="https://api.whatsapp.com/send?phone=38999337788"
            target="_blank"
          >
            <div className="flex mb-10 items-center gap-2 bg-bg-yellow-ct mt-10 hover:bg-white text-center rounded p-2 lg:text-xl text-base text-black font-Montserrat-Bold">
              COMECE AGORA!
              <FaArrowRight />
            </div>
          </Link>
        </div>
      </div>
      <div className="lg:w-9/12 py-20 lg:m-auto w-full ">
        <div>
          <strong className="bg-black text-white font-semibold rounded tracking-widest text-sm px-2">
            FEEDBACK
          </strong>
          <p className="my-5 lg:px-0 px-2 text-lg font-bold lg:w-1/4 ">
            O que nossos clientes estão dizendo sobre nós:
          </p>
        </div>
        <Coments />
      </div>
      <div className="bg-[url('../assets/background7.jpg')] bg-cover bg-center w-full py-28">
        <div className="h-full w-9/12 m-auto gap-5 flex flex-col items-start justify-center text-black">
          <p className="text-xs tracking-widest">ALTA PERFORMANCE</p>
          <p className="text-3xl">Agenda uma</p>
          <strong className="text-3xl">aula experimental</strong>
          <Link
            href="https://api.whatsapp.com/send?phone=38999337788"
            target="_blank"
          >
            <p className="bg-bg-yellow-ct text-center rounded p-2 text-xl text-black font-Montserrat-Bold">
              COMECE AGORA!
            </p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
