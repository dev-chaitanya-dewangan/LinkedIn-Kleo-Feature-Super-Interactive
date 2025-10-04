"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";

// Define the type for image objects
type ImageObject = {
  src: string;
  alt: string;
};

// Define the props type for the Carousel_001 component
type CarouselProps = {
  images: ImageObject[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
};

// Create a carousel component based on the provided code
const Carousel_001 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 40,
}: CarouselProps) => {
  const css = `
  .Carousal_001 {
    padding-bottom: 50px !important;
  }
  
  .swiper-slide {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .swiper-slide:hover {
    transform: scale(1.05);
    z-index: 10 !important;
  }
  `;
  
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("w-3xl relative", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 1500,
                disableOnInteraction: false,
              }
            : false
        }
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={loop}
        slidesPerView={2.43}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={
          showPagination
            ? {
                clickable: true,
              }
            : false
        }
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        className="Carousal_001"
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide 
            key={index} 
            className="!h-[320px] w-full border rounded-xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <div 
              className="h-full w-full bg-gray-200 flex items-center justify-center relative"
              onMouseEnter={(e) => {
                // Add vignette effect on hover
                e.currentTarget.style.boxShadow = 'inset 0 0 100px 50px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                // Remove vignette effect on leave
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <span className="text-gray-500">Viral Post {index + 1}</span>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl pointer-events-none"></div>
            </div>
          </SwiperSlide>
        ))}
        {showNavigation && (
          <div>
            <div className="swiper-button-next after:hidden">
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </div>
            <div className="swiper-button-prev after:hidden">
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </div>
          </div>
        )}
      </Swiper>
    </motion.div>
  );
};

// Create the Skiper47 component as requested
export const Skiper47 = () => {
  const images = [
    { src: "/images/linkedin/viral1.jpeg", alt: "Viral LinkedIn Post 1" },
    { src: "/images/linkedin/viral2.jpeg", alt: "Viral LinkedIn Post 2" },
    { src: "/images/linkedin/viral3.jpeg", alt: "Viral LinkedIn Post 3" },
    { src: "/images/linkedin/viral4.jpeg", alt: "Viral LinkedIn Post 4" },
    { src: "/images/linkedin/viral5.jpeg", alt: "Viral LinkedIn Post 5" },
    { src: "/images/linkedin/viral6.jpeg", alt: "Viral LinkedIn Post 6" },
  ];

  return (
    <section id="inspire" className="py-20 bg-[#f5f4f3] px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Inspire Your Content
        </motion.h2>
        
        <div className="relative">
          <Carousel_001 
            className="" 
            images={images} 
            showPagination={false} 
            showNavigation={false} 
            loop={true} 
            autoplay={false} 
            spaceBetween={40} 
          />
        </div>
      </div>
    </section>
  );
};

export { Carousel_001 };