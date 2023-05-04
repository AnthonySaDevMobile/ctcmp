import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import backAbout from '../assets/Somos-O-ct.png'
import backAbout2 from "../assets/background2.jpg";

export default function Testes() {
  return (
    <>
        <Header
        position={"fixed"}
        background={
          "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
        }
      />
    <div className="h-screen">
    <div className="w-full md:h-[400px] h-[400px] text-white">
        <Image
          src={backAbout}
          alt="background"
          className="h-full absolute -z-20 brightness-50 w-full object-cover"
        />
        <div className=" flex items-center justify-center h-full">
          <div className="h-full flex items-center">
            <div className="">
            <strong className="text-white text-3xl italic">
            SOMOS O<strong className="px-2 text-bg-yellow-ct">CT</strong>
          </strong>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-14 w-full bg-bg-yellow-ct">
        <div className="lg:w-9/12 lg:m-auto w-full mr-2 lg:gap-20 lg:flex justify-around p-16">
          <div className="bg-white px-5 py-7 text-center">
            <strong className="tracking-wide text-xl">NOSSA MISSÃO</strong>
            <p className="mt-5 text-lg">
              Proporcionar desenvolvimento físico, desportivo e motor de
              atletas, aliando protocolos personalizados, baseados em eidências
              científicas e comprometidos com saúde integral e bem-estar.
            </p>
          </div>
          <div className="bg-white px-5 py-7 mt-10 lg:mt-0 text-center">
            <strong className="tracking-wide text-xl font-Montserrat-Bold">
              NOSSA VISÃO
            </strong>
            <p className="mt-5 text-lg">
              Ser reconhecida e admirada como uma empresa promotora de
              desenvolvimento desportivo e humano por meio de práticas de saúde
              e bem-estar para todos os tipos de histórias, trajetórias e
              necessidades.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
