import Layouts from "@/src/layouts/Layouts";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const History = () => {
  useEffect(() => {
    const bullets = document.querySelectorAll(
      ".kf-history-carousel .swiper-pagination-bullet"
    );
    const sliders = document.querySelectorAll(
      ".kf-history-carousel .swiper-slide"
    );
    bullets.forEach((bullet, bulletIndex) => {
      sliders.forEach((slider, sliderIndex) => {
        if (bulletIndex == sliderIndex) {
          bullet.innerHTML =
            slider.getElementsByClassName("date-value")[0].innerHTML;
        }
      });
    });
  }, []);

  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/8.jpeg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Training
          </h1>
        </div>
      </section>
      {/* Section Quote */}
      {/* <section className="section kf-quote">
        <div className="container">
          <div className="kf-parallax-icon pi-4" data-jarallax-element={-60}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/quote_line_icon1.png)" }}
            />
          </div>
          <div className="kf-parallax-icon pi-5" data-jarallax-element={-80}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/quote_line_icon2.png)" }}
            />
          </div>
          <div
            className="kf-quote-box element-anim-1 scroll-animate"
            data-animate="active"
          >
            <div className="text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae ab illo inventore veritatis et voluptatem sequi nesciunt
              neque porro quisqe
            </div>
            <div className="info">
              <div className="img">
                <img src="images/quote_img2.jpg" alt="image" />
              </div>
              <h5 className="name">Dante J. Castaneda</h5>
              <div className="subname">CEO &amp; Founder</div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Section History */}
      <section className="section kf-history section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
            
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
            Front line safety Training offers specialised training to equip security personnel with the skills needed for ensuring safety at events.
            </h3>
          </div>
          <div className="kf-history-carousel">
            <Swiper {...sliderProps.kfHistory} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div
                    className="kf-history-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="images/6.jpeg" alt="image" />
                    </div>
                    <div className="desc">
                      <div className="subname">
                  
                      </div>
                      <h5 className="name">
                      Training and Development
                      </h5>
                      <div className="kf-text">
                        <p>
                    
The Frontline Training department offers a unique blend of credible event security experience and educational partnerships. Front line safety provide training that ranges from entry-level skills to management degrees.
                        </p>
                      </div>
                    </div>
                    <div className="date">1996</div>
                    <div className="label">25 January 1996</div>
                    <div className="date-value">Training</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="kf-history-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="images/4.jpg" alt="image" />
                    </div>
                    <div className="desc">
                      <div className="subname"></div>
                      <h5 className="name">
                      
                      </h5>
                      <div className="kf-text">
                        <p>
                         
Shaping the Future: Front line's Management Development Programme (MDP) Has Been Transforming The Live Events Sector Since 2019
                        </p>
                      </div>
                    </div>
                    <div className="date">1998</div>
                    <div className="label">14 December 1998</div>
                    <div className="date-value">Managment</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="kf-history-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="images/8.jpeg" alt="image" />
                    </div>
                    <div className="desc">
                      <div className="subname"></div>
                      <h5 className="name">
                      eLearning
                      </h5>
                      <div className="kf-text">
                        <p>
                     
When designing and developing eLearning, we keep our learners in mind throughout each step of the process. From defining learning outcomes, to designing activities where they can practice what they have learned.
                        </p>
                      </div>
                    </div>
                    <div className="date">2024</div>
                    <div className="label">10 June 2024</div>
                    <div className="date-value">E-learning</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="kf-history-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="images/5.jpg" alt="image" />
                    </div>
                    <div className="desc">
                      <div className="subname">
                        
                      </div>
                      <h5 className="name">
                      Event Safety Training
                      </h5>
                      <div className="kf-text">
                        <p>
                          Sorem ipsum dolor sit am consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Quis ipsum suspendi sultrices gravida.
                          Risus commodo viverra maecenas cumsan lacus vel
                          facilisis.
                        </p>
                      </div>
                    </div>
                    <div className="date">2008</div>
                    <div className="label">15 October 2023</div>
                    <div className="date-value">Safety</div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-pagination" />
              <div className="swiper-scrollbar" />
              <div className="swiper-button-prev">
                <i className="fas fa-angle-left" />
              </div>
              <div className="swiper-button-next">
                <i className="fas fa-angle-right" />
              </div>
            </Swiper>
          </div>
        </div>
      </section>
      {/* Section Brands */}
      {/* <div className="section kf-brands">
        <div className="container">
          <div className="kf-brands-items row">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand1.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand2.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand3.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand4.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand5.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand6.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Section Latest Blog */}
      <section className="section kf-latest-blog section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Get Every Single Update
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Read Some Latest Blog &amp; News
            </h3>
          </div>
          <div className="kf-blog-grid-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <img src="images/2.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                    The best way to keep your home safe is to install a security system
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
                  <Link href="blog-single">
                    <img src="images/7.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                   keep your home safe is to install a security system
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
                  <Link href="blog-single">
                    <img src="images/6.jpeg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                    The best way to keep your home safe is to install a security system
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
              <span>view all</span>
              <i className="fas fa-chevron-right" />
            </a>
          </div>
        </div>
      </section>
      {/* Section CTA */}
      <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(images/6.jpeg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
              
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                 Need a security system for your home?
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link
                href="contacts"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>Regsiter training</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default History;
