import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IoIosSpeedometer } from "react-icons/io";
import { BsFillHeartPulseFill, BsShieldFillCheck } from "react-icons/bs";
import { BiRun } from "react-icons/bi";
import { FaMedal } from "react-icons/fa";
import Image from "next/image";
import back5 from "../assets/background5.png";
import playPreto from "../assets/playPreto.png";
import backgroundCT from "../assets/serviços-fachada.png";
import Head from "next/head";

export default function Services() {
  return (
    <div>
     
      <Head>
        <title>CMP - Serviços</title>
        <link rel="apple-touch-icon" tamanhos="180x180" href="/favicon.png" />
        <link
          rel="icon"
          type="image/png"
          tamanhos="32x32 "
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          tamanhos="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c " />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header position={"fixed"} background={"rgba(0,0,0,1)"} />

      <div className="sm:pt-24 pt-24 w-full">
        <div className="bg-[url('../assets/serviços.png')] bg-cover bg-top pt-20 h-[350px] lg:h-[600px] flex items-center justify-center">
          <p className="text-white text-4xl font-Montserrat-Italic">
            O QUE PODEMOS FAZER
            <strong
              className="font-Montserrat-Bold"
              style={{
                color: "#FFE900",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              {" "}
              POR VOCÊ
            </strong>
          </p>
        </div>

        <div className="sm:w-9/12 sm:m-auto w-full px-2 mt-10 flex justify-between">
          <div className="sm:leading-10 sm:w-5/12 pb-10 ">
            <strong className="sm:tracking-widest tracking-wide text-sm font-Montserrat-Bold">
              VAMOS FALAR DE SUPERAÇÃO?
            </strong>
            <p className="sm:text-2xl font-Montserrat-Bold">
              Para transformar seu propósito em legado.
            </p>
            <p className="text">
              Combine desenvolvimento físico, motor, esportivo e bem-estar em
              uma frente de trabalho integrada e personalizada.
            </p>
            <strong className="text font-Montserrat-Bold">Este é o CT.</strong>
          </div>
          <div className="flex">
            <Image
              src={back5}
              alt="splash"
              className="sm:w-80 sm:h-auto w-80 h-80 sm:-mb-40 lg:-mr-36 -mb-48 hidden sm:flex mr-10  z-10"
            />
            <Image
              src={playPreto}
              alt="splash"
              width={400}
              className="-mt-24 h-96 z-20 hidden sm:flex"
            />
          </div>
        </div>
        <div className="w-full px-2 bg-bg-yellow-ct ">
          <div className="sm:w-9/12 sm:m-auto w-full">
            <div className=" text-2xl py-5 tracking-wide sm:w-1/2">
              <strong className="font-Montserrat-Bold ">
                Benefícios que garantem
              </strong>
              <strong className="font-Montserrat-Bold">
                {" "}
                um desenvolvimento integral sob medida,
              </strong>
              <strong className="font-Montserrat-Bold">
                feito pra você e sua realidade:
              </strong>
            </div>
            <div className="sm:flex grid px-6 py-16 gap-10">
              <div className="flex flex-col items-center justify-between text-center">
                <p>
                  <IoIosSpeedometer size={40} />
                </p>
                <p className=" h-4/6">
                  Viva uma experiência imersiva feita sob medida para você
                  elevar a um novo nível seu desempenho e performance
                </p>
              </div>
              <div className="flex flex-col items-center justify-between text-center py-2">
                <p>
                  <BsFillHeartPulseFill size={40} />
                </p>
                <p className=" h-4/6">
                  Associe saúde e bem-estar aos seus protocolos de treinamento e
                  desenvolvimento esportivo
                </p>
              </div>
              <div className="flex flex-col items-center justify-between text-center">
                <p>
                  <BiRun size={40} />
                </p>
                <p className=" h-4/6">
                  Desenvolva mobilidade, flexibilidade, força e velocidade para
                  alcançar resultados mais precisos
                </p>
              </div>
              <div className="flex flex-col items-center justify-between text-center">
                <p>
                  <FaMedal size={40} />
                </p>
                <p className=" h-4/6">
                  Conte com uma equipe personalizada para assessorar cada
                  estágio de seu crescimento
                </p>
              </div>
              <div className="flex flex-col items-center justify-between text-center">
                <p>
                  <BsShieldFillCheck size={40} />
                </p>
                <p className=" h-4/6">
                  Tenha segurança de ser assistido por equipes
                  multidisciplinares com trabalho baseado em evidências
                  científicas
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[url('../assets/atletas.jpg')] bg-cover bg-center text-3xl py-40 text-white">
          
          <div className="w-9/12 m-auto font-Montserrat-Bold font-extrabold text-center">
            <p>
              O CT é feito para{" "}
              <strong className="text-bg-yellow-ct">
                todos os tipos de atletas{" "}
              </strong>
              ou para quem deseja ir mais além em preparação física e rendimento
              esportivo.
            </p>
            <p className="mt-10">
              Sua história se torna parte de um protocolo exclusivo e sob medida
              com enfoque em resultados personalizados
            </p>
          </div>
        </div>

        <div
          className="sm:w-9/12 sm:m-auto w-full sm:flex py-20 sm:gap-10"
          id="structure"
        >
          <div className="sm:w-7/12">
            <strong className="bg-black text-white font-Montserrat-Bold rounded tracking-widest sm:text-sm px-2 text-xs">
              NOSSA ESTRUTURA
            </strong>
            <p className="font-Montserrat-Bold sm:text-xl text-2xl px-2 text-left mt-5 leading-10">
              Para produzir resultados de alta performance
            </p>
          </div>
          <div className=" sm:text-right text-lg px-2">
            Nosso espaço combina áreas produtivas para abraçar a extensão de seu
            propósito. Equipamentos de ponta consolidam um atendimento
            personalizado e adaptado a cada realidade.Uma infraestrutura
            completa garante que seus objetivos sejam transformados em
            resultados de alto impacto.
          </div>
        </div>
        <div className="w-full">
          <Image src={backgroundCT} alt="splash" className="lg:h-[600px]" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
