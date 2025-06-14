import { useState } from "react";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper core and required modules
import { Autoplay, Pagination, Navigation } from "swiper";


// Import Swiper styles (make sure you have these installed)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Layouts>
      {/* Section Started Slider */}
      <section className="section kf-started-slider">
        <Swiper
          {...sliderProps.mainSliderSelector}
          className="swiper-container"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]} // <- Added modules here
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
        >
          {[ // Map slides for cleaner code
            {
              bg: "images/6.jpeg",
              title: (
                <>
                  Professionel sikkerhed <br />
                  til ethvert arrangement
                </>
              ),
            },
            {
              bg: "images/hero.jpeg",
              title: (
                <>
                  Din sikkerhed. <br />
                  Vores ansvar
                </>
              ),
            },
            {
              bg: "images/8.jpeg",
              title: (
                <>
                  Når det handler om sikkerhed, <br />
                  går vi forrest
                </>
              ),
            },
          ].map((slide, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="kf-started-item">
                {/* Removed js-parallax to prevent glitches */}
                <div
                  className="slide"
                  style={{
                    backgroundImage: `url(${slide.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100vh", // Added explicit height for mobile
                    transform: "translate3d(0, 0, 0)", // GPU acceleration fix
                  }}
                />
                <div className="container">
                  <div
                    className={`description align-left element-anim-1 transition-opacity duration-800 ease-in-out ${
                      activeIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h2 className="name text-anim-1" data-splitting="chars">
                      {slide.title}
                    </h2>
                    <div className="kf-bts">
                      <Link href="services" className="kf-btn">
                        <span>udforske mere</span>
                        <i className="fas fa-chevron-right" />
                      </Link>
                      <Link href="contacts" className="kf-btn dark-btn">
                        <span>få kontakt med</span>
                        <i className="fas fa-chevron-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </Swiper>
      </section>

      {/* ... rest of your component remains unchanged ... */}

      <TestimonialsCarousel />
    </Layouts>
  );
};

export default Index;
