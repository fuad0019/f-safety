import { useState } from "react";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Layouts>
      {/* Section Started Slider */}
      <section className="section kf-started-slider">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade, Navigation]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          spaceBetween={0}
          touchStartPreventDefault={false}
          allowTouchMove={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="swiper-container"
        >
          {[
            {
              bg: "images/6.jpeg",
              title: "Professionel sikkerhed \ntil ethvert arrangement",
            },
            {
              bg: "images/hero.jpeg",
              title: "Din sikkerhed. \nVores ansvar",
            },
            {
              bg: "images/8.jpeg",
              title: "Når det handler om sikkerhed, \ngår vi forrest",
            },
          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="kf-started-item">
                <div
                  className="slide"
                  style={{ backgroundImage: `url(${slide.bg})` }}
                />
                <div className="container">
                  <div
                    className={`description align-left element-anim-1 transition-opacity duration-800 ease-in-out ${
                      activeIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h2 className="name text-anim-1" data-splitting="chars">
                      {slide.title.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
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
        </Swiper>
      </section>
          {/* Section Category */}
      <section className="section kf-category">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="kf-category-items element-anim-1 scroll-animate" data-animate="active">
                {[
                  { src: "images/7.jpg", label: "Protection of stage hands & production crew." },
                  { src: "images/crowd.jpeg", label: "General Crew." },
                  { src: "images/6.jpeg", label: "beyond events for supervision - guiding." },
                  { src: "images/8.jpeg", label: " Crowd Planning & Management." },
                ].map((item, i) => (
                  <div className="kf-category-item" key={i}>
                    <div className="image kf-image-hover">
                      <Link href="services"><img src={item.src} alt="image" /></Link>
                    </div>
                    <div className="desc">
                      <h5 className="name">{item.label}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 align-self-center">
              <div className="kf-titles">
                <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">Vores Tjenester</div>
                <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                  Er du arrangør og skal afholde et stort event, en koncert eller festival med mange gæster?  <br />
                  Så er du landet det rette sted.
                </h3>
              </div>
              <div className="kf-text element-anim-1 scroll-animate" data-animate="active">
                <p>
                  Frontline Safety leverer safety-personalet til dit næste store arrangement.
                  Vi tager os af gæsternes sikkerhed, så du med ro i maven kan afvikle eventet med alle sikkerhedsforanstaltninger i orden.
                  Vores tilgang er enkel: Vi skal levere den helt rette blanding af service og sikkerhed. HVER GANG!
                </p>
              </div>
              <Link href="services" className="kf-btn element-anim-1 scroll-animate" data-animate="active">
                <span>udforske flere tjenester</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="section kf-cta kf-parallax" style={{ backgroundImage: "url(images/6.jpeg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="kf-titles">
                <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                  Brug for en Sikkerhed Service? 
                </h3>
              </div>
            </div>
            <div className="col-lg-4 align-self-center align-right">
              <Link href="contacts" className="kf-btn element-anim-1 scroll-animate" data-animate="active">
                <span>Kontakt os!</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Latest Blog */}
         <section className="section kf-latest-blog">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
             
             Få hver eneste opdatering
            </div>
         
          </div>
          <div className="kf-blog-grid-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog_1">
                    <img src="images/4.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                  Vigtigheden af Professionel Eventsikkerhed i Danmark
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2024
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog_2">
                    <img src="images/8.jpeg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
               Hvad Du Kan Forvente af Frontline Safety til Dit Næste Event
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog_3">
                    <img src="images/5.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                 Sådan Uddanner Vi Vores Vagtpersonale til at Håndtere Enhver Situation
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
          
          
           
          </div>
          <div className="align-center">
            <a
              href="#"
              className="kf-btn element-anim-1 scroll-animate"
              data-animate="active"
            >
              <span>load more</span>
              <i className="fas fa-chevron-right" />
            </a>
          </div>
        </div>
      </section>

      {/* Section Testimonials */}

      {/* Other content continues... */}
      {/* <TestimonialsCarousel /> */}
    </Layouts>
  );
};

export default Index;
