import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import Image from "next/image";

export default function Header({ position, background }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header
      className="sm:w-full :py-8 py-10 text-white text-xs z-30 lg:tracking-widest items-center flex"
      style={{ position: position, background: background }}
    >
      <div className="flex items-center m-auto sm:gap-10 gap-8 w-9/12 sm:m-auto sm:flex sm:justify-between">
        <Link href="/">
          <Image
            src={Logo}
            widht={80}
            height={80}
            alt="logo"
            onClick={() => {}}
            className="w-24 sm:w-32"
          />
        </Link>

        <nav className="hidden sm:items-center sm:justify-between justify-between sm:flex w-96 gap-9 sm:gap-10 sm:w-9/12 ">
          <Link href="/">
            <p className="hover:text-bg-yellow-ct hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
              HOME
            </p>
          </Link>
          <Link className="link" href="/about">
            <p className="hover:text-bg-yellow-ct hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
              SOMOS O CT
            </p>
          </Link>
          <Link className="link" href="/services">
            <p className="hover:text-bg-yellow-ct hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
              SERVIÇOS
            </p>
          </Link>
          <Link className="link" href="/#contact">
            <p className="hover:text-bg-yellow-ct hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
              CONTATO
            </p>
          </Link>
          <div className="hidden gap-3 items-center bg-bg-yellow-ct text-black rounded hover:bg-transparent hover:cursor-pointer hover:border-solid hover:border hover:border-bg-yellow-ct hover:text-bg-yellow-ct sm:flex">
            <Link href="https://api.whatsapp.com/send?phone=38999337788" target="_blank">
              <strong className="py-2 px-3 hover:border-solid hover:text-white hidden sm:flex">
                AULA EXPERIMENTAL
              </strong>
            </Link>
          </div>
        </nav>
      </div>

      <section className="MOBILE-MENU flex w-96 text-right md:hidden">
        <div
          className="space-y-2 max-[320px]:ml-28 ml-44"
          onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
          <span className="block h-0.5 w-8 animate-pulse bg-bg-yellow-ct hover:bg-yellow-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-bg-yellow-ct hover:bg-yellow-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-bg-yellow-ct hover:bg-yellow-600"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-bg-yellow-ct"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
            <Link onClick={() => setIsNavOpen(false)} href="/">
              <p className="hover:text-bg-yellow-ct hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
                HOME
              </p>
            </Link>
            <Link onClick={() => setIsNavOpen(false)} href="/about">
              <p className="hover:text-bg-yellow-ct hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
                SOMOS O CT
              </p>
            </Link>
            <Link onClick={() => setIsNavOpen(false)} href="/services">
              <p className="hover:text-bg-yellow-ct hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
                SERVIÇOS
              </p>
            </Link>
            <Link onClick={() => setIsNavOpen(false)} href="/#contact">
              <p className="hover:text-bg-yellow-ct hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
                CONTATO
              </p>
            </Link>
            <Link onClick={() => setIsNavOpen(false)} href="/">
              <p className="bg-bg-yellow-ct text-black p-2 rounded font-bold transition ease-in delay-75 hover:border hover:border-solid hover:bg-transparent hover:text-bg-yellow-ct hover:border-bg-yellow-ct">
                AULA EXPERIMENTAL
              </p>
            </Link>
          </div>
        </div>
      </section>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        right: 0;
        background: #161616;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </header>
  );
}
