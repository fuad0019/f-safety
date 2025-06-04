import VideoPlayer from "@/src/components/VideoPlayer";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const About = () => {
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
                Om
          </h1>
        </div>
      </section>
      {/* Section About-2 */}
      <section className="section kf-choose kf-choose-2">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
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
           
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                Frontline Safety er et sikkerhedsbureau, som er specialiseret i at levere safety-personale til alle typer arrangementer, om det er koncerter, events eller festivaler. 
Vi har 20 års erfaring i branchen, som gør os til et sikkert og trygt valg, når du som arrangør skal afholde store eller små events, hvor personale og sikkerhed skal være på plads.
Alene i år har vi afviklet koncerter i Forum, K.B. Hallen, Falkonér Salen, Vega, Pumpehuset og DR Koncertsal. 
Vi har specialiseret os i at levere den rette blanding af service og sikkerhed, så afholdelsen af dit arrangement sker så gnidningsfrit som overhovedet muligt i samarbejde med dig, som arrangør. 

Vores safety-personale
Vores medarbejdere leverer service i topklasse, er smilende og kan med sikker hånd styre gæsterne igennem dit event, så det bliver en god oplevelse for alle.
Alle medarbejdere har gennemgået kurser i crowd-safety, i kommunikation og konflikthåndtering samt førstehjælp. 
Vi kan leverer op mod 300 medarbejdere til et event og kan op- og nedskalere præcis efter dit behov for bemanding. 
Skriv eller ring til os, og vi tager en snak om, hvordan vi kan løse dine sikkerhedsopgaver ved dit næste arrangement. 
Du er også altid velkommen til at kontakte os, hvis du har spørgsmål og brug for at afklare dit behov ved næste arrangement.

                </p>
              </div>
              {/* <div className="kf-choose-list">
                <ul>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/choose_icon1.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Natural Coffee Beans</h5>
                      <div className="subname">
                        Sed ut perspiciatis unde omnis iste natus error
                        voluptate accusantium doloremque
                      </div>
                    </div>
                  </li>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/choose_icon2.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">100% ISO Certification</h5>
                      <div className="subname">
                        Sed ut perspiciatis unde omnis iste natus error
                        voluptate accusantium doloremque
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
              <Link
                href="services"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>our services</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1">
              <div
                className="kf-choose-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/5.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Numbers-2 */}
      <section className="section kf-numbers-2 section-bg">
        <div className="container">
          <div className="kf-numbers-items-2 row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-gem" />
                </div>
                <div className="num">256+</div>
                <div className="desc">
                  <h5 className="name">Premium Clients</h5>
               
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-user-tie" />
                </div>
                <div className="num">42+</div>
                <div className="desc">
                  <h5 className="name">Client-focussed operations managers</h5>
                
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-trophy" />
                </div>
                <div className="num">7+</div>
                <div className="desc">
                  <h5 className="name">Winning Awards</h5>
               
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="lar la-grin-stars" />
                </div>
                <div className="num">100+</div>
                <div className="desc">
                  <h5 className="name">5 Star Reviews</h5>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Video */}
      {/* <section className="section kf-video">
        <div className="container">
          <VideoPlayer
            videoBg={"images/video_bg.jpg"}
            extraClass={"kf-image-hover"}
          />
        </div>
      </section> */}
      {/* Section Services-2 */}
      {/* <section className="section kf-services">
        <div className="container">
          <div className="kf-services-items-2 row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-services-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/service_icon1.png" alt="image" />
                </div>
                <div className="desc">
                  <h5 className="name">Birthday Cakes</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-services-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/service_icon2.png" alt="image" />
                </div>
                <div className="desc">
                  <h5 className="name">Fresh Foods</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-services-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/service_icon3.png" alt="image" />
                </div>
                <div className="desc">
                  <h5 className="name">Skills Chefs</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-services-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/service_icon4.png" alt="image" />
                </div>
                <div className="desc">
                  <h5 className="name">Organic Juice</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Section Team */}
      {/* <section className="section kf-team section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Experience Team Member
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Meet Our Professional Chefs
            </h3>
          </div>
          <div className="kf-team-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Anthony J. Bowman</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/team1.jpg" alt="image" />
                  <div className="info">
                    <div className="label">bowmankf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Kenny V. Gonzalez</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/team2.jpg" alt="image" />
                  <div className="info">
                    <div className="label">gonzalezkf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Joseph M. Lawrence</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/team3.jpg" alt="image" />
                  <div className="info">
                    <div className="label">lawrencekf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="desc">
                  <h5 className="name">Charles K. Smith</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/team4.jpg" alt="image" />
                  <div className="info">
                    <div className="label">smithkf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Section Brands */}
      {/* <section className="section kf-brands">
        <div className="container">
          <div className="kf-brands-items row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand1.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand2.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand3.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand4.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand5.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
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
      </section> */}
      {/* Section Testimonials Carousel */}
      <TestimonialsCarousel />
      {/* Section CTA */}
      <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(images/8.jpeg)" }}
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
               Need a security solution for your event?
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link
                href="contacts"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>get touch</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default About;
