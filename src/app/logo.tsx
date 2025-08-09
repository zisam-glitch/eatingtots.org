'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const logos = [
  { src: '/eatingtots.png', alt: 'eatingtots' },
  { src: '/happyFace.png', alt: 'happyFace' },
  { src: '/usda.png', alt: 'usda' },
  { src: '/map.png', alt: 'map' },
  { src: '/logo.png', alt: 'logo' },
];

const LOGO_HEIGHT = 100; // Fixed height for all logos

export default function LogoSlider() {
  return (
    <section className="py-4 px-4 md:px-8 md:hidden block w-full">
      <div className="max-w-6xl mx-auto w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            400: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full"
        >
          {logos.map((logo, index) => (
            <SwiperSlide 
              key={index} 
              className="flex items-center justify-center w-full h-[120px]"
            >
              <div className="relative w-full h-full flex items-center justify-center p-2">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ 
                      width: 'auto', 
                      height: '100%',
                      maxHeight: '100px',
                      objectFit: 'contain' 
                    }}
                    priority={index < 3} // Only preload first few images
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}