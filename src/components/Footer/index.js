"use client";
import React from "react";
import Logo from "../../../public/logo.png";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full sm:h-80 h-[450px] bg-bg-black-ct pt-10">

        <div className="sm:w-9/12 sm:m-auto mr-2 flex justify-between">
          <div className="sm:w-2/12 w-5/12 flex flex-col items-center sm:pb-20 pt-5">
            <Image src={Logo}  alt="logo" className="md:mt-0 mt-2 lg:w-1/2 lg:h-1/2" />
            <div className="flex flex-col gap-10 mt-20 sm:gap-5 sm:flex-row">
              <p>
              <Link href="https://www.instagram.com/ctcmpmoc/" target="_blank">
            <FaInstagram size={22} color="white" />
            </Link>
              </p>
              <p>
                <FaTelegramPlane color="#fff" size={22} />
              </p>
              <p>
                <FaYoutube color="#fff" size={22} />
              </p>
            </div>
          </div>
          <div className="sm:w-7/12 px-4 py-5">
            <strong className="mt-5 text-white text-xl">
              Seja o atleta que você pode ser!
            </strong>
            <div className="flex flex-col sm:flex-row sm:mt-16 mt-12 justify-between">
              <div className="info">
                <p className="text-zinc-600 sm:text-sm text-xs mb-4">FUNCIONAMENTO</p>
                <p className="text-white text-xs">SEG - SEX 8:00 ÀS 18:00</p>
              </div>
              <div className="info">
                <p className="text-zinc-600  sm:text-sm text-xs mb-4 mt-4 sm:mt-0">ONDE ESTAMOS</p>
                <p className="text-white text-xs">R. Dr. Mario Veloso, 346</p>
                <p className="text-white text-xs">
                  Jardim São Luiz, Montes Claros - MG
                </p>
              </div>
              <div className="info">
                <p className="text-zinc-600 mb-4 sm:text-sm text-xs mt-4 sm:mt-0">CONTATO</p>
                <p className="text-white text-xs">(38) 94685-9354</p>
                <p className="text-white text-xs">(38) 97753-3575</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-0.5 bg-zinc-600 md:mb-10"></div>
    </footer>
  );
}

export default Footer;
