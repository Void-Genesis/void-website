"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import useScreenWidth from "@/hooks/useScreenWidth";

export default function Simplifique() {
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const isMobile = useScreenWidth();

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoVisible(false);
    }, 5300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const images = ["1", "2", "3", "4", "5", "6"];

  const NavigationButtons = ({ swiper }: any) => {
    const slidePrev = () => {
      if (swiper) {
        swiper.slidePrev();
      }
    };

    const slideNext = () => {
      if (swiper) {
        swiper.slideNext();
      }
    };

    return (
      <div className="flex justify-center gap-2 md:gap-10 p-4">
        <button
          onClick={slidePrev}
          className="w-full md:w-48 p-2 bg-void-orange rounded"
        >
          <p className="font-bold text-xl">Anterior</p>
        </button>
        <button
          onClick={slideNext}
          className="w-full md:w-48 p-2 bg-void-blue rounded"
        >
          <p className="font-bold text-xl">Próximo</p>
        </button>
      </div>
    );
  };

  return (
    <div className="h-screen flex flex-col relative">
      {/* Video Background */}
      <video
        autoPlay
        muted
        playsInline
        className={`h-screen w-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
          isVideoVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        src="/video-void-genesis.mp4"
      />
      {/* Main Content */}
      <div
        className={`relative flex flex-col h-full transition-opacity duration-1000 ${
          isVideoVisible ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Header */}
        <header className="flex justify-between items-center md:px-24 p-4">
          <div>
            <Image
              src="/logo-void-genesis-white.svg"
              width={isMobile ? 150 : 200}
              height={0}
              alt="logo"
            />
          </div>
          <div>
            <p className="font-thin text-sm">Proposta de valor</p>
            <h1 className="font-medium md:text-4xl text-[#94af88]">
              Simplifique!
            </h1>
          </div>
        </header>
        {/* Swiper */}
        <div className="flex-grow flex items-center justify-center">
          <Swiper
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="h-full w-full"
          >
            {images.map((item) => (
              <SwiperSlide key={item}>
                <div className="relative w-full h-full">
                  <Image
                    src={`/${
                      isMobile ? "simplifique-mobile" : "simplifique"
                    }/${item}.png`}
                    alt="image"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <NavigationButtons swiper={swiperRef.current} />
      </div>
    </div>
  );
}
