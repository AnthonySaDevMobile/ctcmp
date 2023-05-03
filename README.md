This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



    import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import perfilImage1 from "../../assets/perfilImage1.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "swiper/css/pagination";

// import required modules
import { Scrollbar, Pagination, A11y , Navigation} from "swiper";

export default function CarouselComponent() {
  
    const swiper = useSwiper();

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        className="w-9/12 m-auto mt-20 text-white h-80 bg-bg-black-ct py-20"
      >
        <SwiperSlide>
          <div className="flex gap-10 h-32">
            <Image src={perfilImage1} width={120} />
            <div className=" w-1/2">
              <p>
                "Eu sou um cliente da academia há mais de um ano e posso dizer
                com certeza que é o melhor lugar para se exercitar na cidade. O
                ambiente é sempre limpo e acolhedor, e os instrutores são
                incríveis."
              </p>
              <p className="mt-5 font-bold">Mônica Azevedo</p>
              <p className="tracking-widest text-xs">CLIENTE CMP</p>
              <div className="flex py-5 gap-7">
                <button onClick={() => swiper.slidePrev()}>
                  <FaArrowLeft />
                </button>
                <button>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex gap-10 h-32">
            <Image src={perfilImage1} width={120} />
            <div className=" w-1/2">
              <p>
                "Eu sou um cliente da academia há mais de um ano e posso dizer
                com certeza que é o melhor lugar para se exercitar na cidade. O
                ambiente é sempre limpo e acolhedor, e os instrutores são
                incríveis."
              </p>
              <p className="mt-5 font-bold">Mônica Azevedo</p>
              <p className="tracking-widest text-xs">CLIENTE CMP</p>
              <div className="flex py-5 gap-7">
                <button onClick={() => swiper.slidePrev()}>
                  <FaArrowLeft />
                </button>
                <button onClick={() => swiper.slideNext()}>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex gap-10 h-32">
            <Image src={perfilImage1} width={120} />
            <div className=" w-1/2">
              <p>
                "Eu sou um cliente da academia há mais de um ano e posso dizer
                com certeza que é o melhor lugar para se exercitar na cidade. O
                ambiente é sempre limpo e acolhedor, e os instrutores são
                incríveis."
              </p>
              <p className="mt-5 font-bold">Mônica Azevedo</p>
              <p className="tracking-widest text-xs">CLIENTE CMP</p>
              <div className="flex py-5 gap-7">
                <button onClick={() => swiper.slidePrev()}>
                  <FaArrowLeft />
                </button>
                <button onClick={() => swiper.slideNext()}>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
