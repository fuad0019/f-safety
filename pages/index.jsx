import { useState } from "react";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

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
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: 'bullets',
          }}
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
          <SwiperSlide className="swiper-slide">
            <div className="kf-started-item">
              <div
                className="slide js-parallax"
                style={{ backgroundImage: "url(images/6.jpeg)" }}
              />
              <div className="container">
                <div className={`description align-left element-anim-1 transition-opacity duration-1000 ease-in-out ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
                  <h2 className="name text-anim-1" data-splitting="chars">
                    Professionel sikkerhed  <br />
                    til ethvert arrangement
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

          <SwiperSlide className="swiper-slide">
            <div className="kf-started-item">
              <div
                className="slide js-parallax"
                style={{ backgroundImage: "url(images/hero.jpeg)" }}
              />
              <div className="container">
                <div className={`description align-left element-anim-1 transition-opacity duration-1000 ease-in-out ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
                  <h2 className="name text-anim-1" data-splitting="chars">
                    Din sikkerhed. <br />
                    Vores ansvar
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

          <SwiperSlide className="swiper-slide">
            <div className="kf-started-item">
              <div
                className="slide js-parallax"
                style={{ backgroundImage: "url(images/8.jpeg)" }}
              />
              <div className="container">
                <div className={`description align-left element-anim-1 transition-opacity duration-1000 ease-in-out ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
                  <h2 className="name text-anim-1" data-splitting="chars">
                    Når det handler om sikkerhed, <br />
                    går vi forrest
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

          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </Swiper>
      </section>

      {/* Section Category */}
      <section className="section kf-category">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="kf-category-items element-anim-1 scroll-animate" data-animate="active">
                {[
                  { src: "images/7.jpg", label: "Eventsikkerhed" },
                  { src: "images/crowd.jpeg", label: "Crowd Management" },
                  { src: "images/6.jpeg", label: "VIP Beskyttelse" },
                  { src: "images/8.jpeg", label: "Adgangskontrol & Billet Scanning" },
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
                  vores kerneydelse, <br />
                  men ikke begrænset
                </h3>
              </div>
              <div className="kf-text element-anim-1 scroll-animate" data-animate="active">
                <p>
                  Velkommen til Frontline Safety, Danmarks mest betroede crowd management-, spillesteds- og eventsikkerhedsspecialist, med et internationalt ry for fremragende kvalitet.
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
                  Need a Security Service?
                </h3>
              </div>
            </div>
            <div className="col-lg-4 align-self-center align-right">
              <Link href="contacts" className="kf-btn element-anim-1 scroll-animate" data-animate="active">
                <span>Contact us</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Latest Blog */}
      <section className="section kf-latest-blog section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
              Get Every Single Update
            </div>
            <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
              Read Some Latest Blog &amp; News
            </h3>
          </div>
          <div className="kf-blog-grid-items row">
            {[
              { img: "images/2.jpg", title: "The best way to keep your home safe is to install a security system", date: "25 Sep 2021", comments: 7 },
              { img: "images/7.jpg", title: "Keeping the neighborhood safe with community-based surveillance", date: "10 Oct 2021", comments: 5 },
              { img: "images/8.jpeg", title: "Keeping the neighborhood safe with community-based surveillance", date: "10 Oct 2021", comments: 5 },
            ].map((blog, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="kf-blog-grid-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image kf-image-hover">
                    <Link href="blog-single">
                      <img src={blog.img} alt="image" />
                    </Link>
                  </div>
                  <div className="desc">
                    <h5 className="name">{blog.title}</h5>
                    <div className="kf-date">
                      <i className="far fa-calendar-alt" /> {blog.date}
                    </div>
                    <div className="kf-comm">
                      <i className="far fa-comments" /> Comments ({blog.comments})
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Testimonials */}
      <TestimonialsCarousel />
    </Layouts>
  );
};

export default Index;
