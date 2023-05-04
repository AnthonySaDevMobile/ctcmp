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
        <div className="lg:w-9/12 lg:m-auto lg:flex lg:px-0 px-2 items-center justify-between text-xl">
          <div className="lg:w-2/5  h-full flex flex-col justify-between">
            <div className="lg:py-10 py-5">
              <strog className="bg-black text-white font-Montserrat-Bold rounded tracking-widest text-xs lg:text-sm lg:px-2">
                NOSSA HISTÓRIA
              </strog>
            </div>
            <div className="lg:mt-5">
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
          <div className="lg:w-1/2 pt-16">
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
        <div className="w-full md:h-[400px] h-[400px] text-white">
        <Image
          src={backAbout2}
          alt="background"
          className="h-full absolute -z-20 brightness-50 w-full object-cover"
        />
        <div className=" px-2 pb-10 ">
          <div className="h-full">
            <div className="bg-bg-yellow-ct text-xs text-center w-1/3 md:w-1/6 md:text-xl lg:w-1/12 text-black tracking-widest font-semibold lg:ml-44 px-3 rounded mb-5 mt-10">
              <strong className="font-Montserrat-Bold">COMO?</strong>
            </div>
          </div>
          <div className="md:flex gap-5 md:leading-loose md:text-xl w-full lg:text-3xl lg:px-44">
          <div>
            <strong className="font-extrabold leading-10">
              Criando rotinas e protocolos exclusivos, especializados em
              necessidades individuais.
            </strong>
          </div>
          <div className="">
            <p className="">
              Um complexo esportivo de atenção ampla e multiprofissional auxilia
              atletas e iniciantes a avançar em saúde e, claro, desempenho. Uma{" "}
              <strong className="font-Montserrat-Bold">
                equipe multidisciplinar
              </strong>
              , composta por preparadores físicos, fisioterapeutas e médicos,
              desenvolve protocolos personalizados, cuidando da trajetória de
              cada atleta.
            </p>
          </div>
          </div>
        </div>
      </div>

       
        <div className=" py-10 w-full bg-bg-yellow-ct" id="vision">
          <div className="lg:w-9/12 lg:m-auto w-full mr-2 lg:gap-20 lg:flex justify-around p-16">
            <div className="bg-white px-5 py-7 text-center">
              <strong className="tracking-wide text-xl">NOSSA MISSÃO</strong>
              <p className="mt-5 text-lg">
                Proporcionar desenvolvimento físico, desportivo e motor de
                atletas, aliando protocolos personalizados, baseados em
                eidências científicas e comprometidos com saúde integral e
                bem-estar.
              </p>
            </div>
            <div className="bg-white px-5 py-7 mt-10 lg:mt-0 text-center">
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
          className="lg:-mt-40 lg:w-96 lg:h-96 w-48 h-48 -mt-28"
        />
          <div className="w-full">
            <div className="lg:w-9/12 lg:m-auto w-full">
              <div className="text-center lg:-mt-40 lg:py-10 py-6">
                <strong className="font-Montserrat-Bold">NOSSOS VALORES</strong>
              </div>
              <div className=" grid grid-cols-3 text-center gap-y-5 lg:gap-10 pb-20">
                <div className="flex items-center flex-col lg:px-9">
                  <p className="bg-bg-yellow-ct p-4 rounded-full">
                    <ImLeaf color="black" size={26} />
                  </p>

                  <p className="mt-5" >
                    Compromisso com saúde integral e bem-estar
                  </p>
                </div>
                <div className="flex items-center flex-col lg:px-9">
                  <p className="bg-bg-yellow-ct p-4 rounded-full">
                    <CgSearchLoading color="black" size={26} />
                  </p>

                  <p className="mt-5" >
                  Abertura à história pessoal, ao estudo de necessidades individuais
              e diversidade
                  </p>
                </div>
                <div className="flex items-center flex-col lg:px-9">
                  <p className="bg-bg-yellow-ct p-4 rounded-full">
                    <BsRobot color="black" size={26} />
                  </p>

                  <p className="mt-5" >
                  Atenção profissional humanizada e focalizada em trajetórias
              personalizadas
                  </p>
                </div>
                <div className="flex items-center flex-col lg:px-9">
                  <p className="bg-bg-yellow-ct p-4 rounded-full">
                    <FaCodeBranch color="black" size={26} />
                  </p>

                  <p className="mt-5" >
                    Foco em inovação, tecnologia, resultado e visão estratégica
                  </p>
                </div>
                <div className="flex items-center flex-col lg:px-9">
                  <p className="bg-bg-yellow-ct p-4 rounded-full">
                    <TbTargetArrow color="black" size={26} />
                  </p>

                  <p className="mt-5" >
                  Valorização da trajetória e dos objetivos dos clientes
                  </p>
                </div>
                <div className="flex items-center flex-col lg:px-9">
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
