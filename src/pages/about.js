import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ImLeaf } from "react-icons/im";
import { CgSearchLoading } from "react-icons/cg";
import { BsRobot } from "react-icons/bs";
import { FaCodeBranch, FaRegHandshake } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import playPreto from "../assets/playPreto.png";
import backAbout2 from '../assets/background2.jpg'
import Image from "next/image";
import Head from "next/head";

export default function About() {
  return (
    <div className="flex flex-col">
            <Head>
        <title>CMP - Somos o CT</title>
        <link rel="apple-touch-icon" tamanhos="180x180" href="/favicon.png"/> 
        <link rel="icon" type="image/png" tamanhos="32x32 " href="/favicon-32x32.png"/> 
        <link rel="icon" type="image/png" tamanhos="16x16" href="/favicon-16x16.png"/> 
        <link rel="manifest" href ="/site.webmanifest"/> 
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/> 
        <meta name="msapplication-TileColor" content="#da532c "/> 
        <meta name="theme-color" content="#ffffff"/> 
      </Head>
      <Header position={"fixed"} background={"rgba(0,0,0,1)"} />

      <div className="mt-20 w-full">
        <div className="lg:pt-24 bg-[url('../assets/Somos-O-ct.png')] bg-cover bg-top lg:h-96 h-72 flex items-center justify-center">
          <strong className="text-white text-3xl italic">
            SOMOS O<strong className="px-2 text-bg-yellow-ct">CT</strong>
          </strong>
        </div>
        <div className="sm:w-9/12 sm:m-auto sm:flex sm:px-0 px-2 items-center justify-between text-xl">
          <div className="sm:w-2/5  h-full flex flex-col justify-between">
            <div className="sm:py-10 py-5">
              <strog className="bg-black text-white font-Montserrat-Bold rounded tracking-widest text-xs sm:text-sm sm:px-2">
                NOSSA HISTÓRIA
              </strog>
            </div>
            <div className="sm:mt-5">
              <strong>
                Construir atletas, celebrar as superação e promover
                desenvolvimento integral.
              </strong>
            </div>

            <p className="pt-5 leading-10">
              Nossa história começa com o propósito de permitir que atletas em
              suas mais diferentes histórias encontrem sua melhor versão.
            </p>
          </div>
          <div className="sm:w-1/2 pt-16">
            <p className="leading-7">
              O <strong className="font-Montserrat-Bold">Centro de Treinamento (CT)</strong> é a parte da
              expansão do trabalho e dos resultados alcançados com a trajetória
              da <strong className="font-Montserrat-Bold">Clínica Máxima Performance (CMP) </strong>em auxiliar
              atletas de todos os tipos a descobrir e alcançar sua melhor
              versão. Para transformar <strong className="font-Montserrat-Bold">propósito em legado</strong> e{" "}
              <strong className="font-Montserrat-Bold">vontade em desempenho</strong>, o CT desponta como uma
              frente integrada de trabalho, saúde, performance e
              desenvolvimento.
            </p>
          </div>
        </div>
        <div className="mt-20 py-10">
          <Image src={backAbout2} alt="background" className="absolute object-cover -z-10 brightness-50 h-full w-full"/>
          <div className="sm:w-9/12 sm:m-auto w-full text-white sm:flex mb-10">
            <div className="flex flex-col items-start justify-between py-14 px-2">
              <div className=" bg-bg-yellow-ct sm:text-sm text-xs text-center sm:mt-10  text-black tracking-widest font-semibold px-3 rounded">
                <strong className="font-Montserrat-Bold">COMO?</strong>
              </div>
              <strong className="pt-2 sm:text-3xl text-lg sm:leading-10 font-Montserrat-Bold">
                Criando rotinas e protocolos exclusivos, especializados em
                necessidades individuais.
              </strong>
            </div>
            <div className="flex flex-col sm:justify-end sm:pb-14 font-semibold sm:font-normal px-2">
              <p className="sm:leading-10 sm:text-2xl sm:px-14 ">
                Um complexo esportivo de atenção ampla e multiprofissional
                auxilia atletas e iniciantes a avançar em saúde e, claro,
                desempenho. Uma <strong className="font-Montserrat-Bold">equipe multidisciplinar</strong>,
                composta por preparadores físicos, fisioterapeutas e médicos,
                desenvolve protocolos personalizados, cuidando da trajetória de
                cada atleta.
              </p>
            </div>
          </div>
        </div>

        <div className=" py-14 w-full bg-bg-yellow-ct">
          <div className="sm:w-9/12 sm:m-auto w-full mr-2 sm:gap-20 sm:flex justify-around p-16">
            <div className="bg-white px-5 py-7 text-center">
              <strong className="tracking-wide text-xl">NOSSA MISSÃO</strong>
              <p className="mt-5 text-lg">
                Proporcionar desenvolvimento físico, desportivo e motor de
                atletas, aliando protocolos personalizados, baseados em
                eidências científicas e comprometidos com saúde integral e
                bem-estar.
              </p>
            </div>
            <div className="bg-white px-5 py-7 mt-10 sm:mt-0 text-center">
              <strong className="tracking-wide text-xl font-Montserrat-Bold">NOSSA VISÃO</strong>
              <p className="mt-5 text-lg">
                Ser reconhecida e admirada como uma empresa promotora de
                desenvolvimento desportivo e humano por meio de práticas de
                saúde e bem-estar para todos os tipos de histórias, trajetórias
                e necessidades.
              </p>
            </div>
          </div>
        </div>
        <div>
        <Image
          src={playPreto}
          alt="splash"
          className="sm:-mt-40 sm:w-96 sm:h-96 w-48 h-48 -mt-28"
        />
          <div className="w-full">
            <div className="sm:w-9/12 sm:m-auto w-full">
              <div className="text-center sm:-mt-40 sm:py-10 py-6">
                <strong className="font-Montserrat-Bold">NOSSOS VALORES</strong>
              </div>
              <div className=" grid grid-cols-3 text-center gap-y-5 sm:gap-10 pb-20">
                <div className="flex items-center flex-col sm:px-9">
                  <p className="bg-bg-yellow-ct p-4 rounded-full">
                    <ImLeaf color="black" size={26} />
                  </p>

                  <p className="mt-5" >
                    Compromisso com saúde integral e bem-estar
                  </p>
                </div>
                <div className="flex items-center flex-col sm:px-9">
                  <p className="bg-bg-yellow-ct p-4 rounded-full">
                    <CgSearchLoading color="black" size={26} />
                  </p>

                  <p className="mt-5" >
                  Abertura à história pessoal, ao estudo de necessidades individuais
              e diversidade
                  </p>
                </div>
                <div className="flex items-center flex-col sm:px-9">
                  <p className="bg-bg-yellow-ct p-4 rounded-full">
                    <BsRobot color="black" size={26} />
                  </p>

                  <p className="mt-5" >
                  Atenção profissional humanizada e focalizada em trajetórias
              personalizadas
                  </p>
                </div>
                <div className="flex items-center flex-col sm:px-9">
                  <p className="bg-bg-yellow-ct p-4 rounded-full">
                    <FaCodeBranch color="black" size={26} />
                  </p>

                  <p className="mt-5" >
                    Foco em inovação, tecnologia, resultado e visão estratégica
                  </p>
                </div>
                <div className="flex items-center flex-col sm:px-9">
                  <p className="bg-bg-yellow-ct p-4 rounded-full">
                    <TbTargetArrow color="black" size={26} />
                  </p>

                  <p className="mt-5" >
                  Valorização da trajetória e dos objetivos dos clientes
                  </p>
                </div>
                <div className="flex items-center flex-col sm:px-9">
                  <p className="bg-bg-yellow-ct p-4 rounded-full">
                    <FaRegHandshake color="black" size={26} />
                  </p>

                  <p className="mt-5" >
                  Investimento ininterrupto em culturas mais humanas
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
