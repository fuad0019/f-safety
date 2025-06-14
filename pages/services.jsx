import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const Services = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/6.jpeg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Services
          </h1>
        </div>
      </section>
      {/* Section Services */}
      {/* <section className="section kf-services">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              We provide
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
             Services One
            </h3>
          </div>
          <div className="kf-services-items row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <img src="images/8.jpeg" alt="image" />
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-utensils" />
                  </div>
                  <h5 className="name">Adgangskontrol & Billet Scanning</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <img src="images/7.jpg" alt="image" />
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-coffee" />
                  </div>
                  <h5 className="name">Overvågning & Monitorering</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <img src="images/4.jpg" alt="image" />
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-glass-cheers" />
                  </div>
                  <h5 className="name">Brandsikkerhed / Beredskabsplanlægning</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Section Numbers-2 */}
      {/* <section className="section kf-numbers-2 section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              What we do
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
            KAFE Services Two
            </h3>
          </div>
          <div className="kf-numbers-items-2 row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-cookie" />
                </div>
                <div className="desc">
                  <h5 className="name">Birthday Cakes</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-carrot" />
                </div>
                <div className="desc">
                  <h5 className="name">Fresh Food</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-hamburger" />
                </div>
                <div className="desc">
                  <h5 className="name">Fast Food</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-fish" />
                </div>
                <div className="desc">
                  <h5 className="name">Sea Food</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-pizza-slice" />
                </div>
                <div className="desc">
                  <h5 className="name">Pizza</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-glass-cheers" />
                </div>
                <div className="desc">
                  <h5 className="name">Drinks</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-mug-hot" />
                </div>
                <div className="desc">
                  <h5 className="name">Coffee</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-seedling" />
                </div>
                <div className="desc">
                  <h5 className="name">Vegetables</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Section Services-2 */}
      <section className="section kf-services">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
           kerneydelser
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
          
            </h3>
          </div>
          <div className="kf-services-items-2 row">
          <Link href="/service1" className="col-xs-12 col-sm-12 col-md-6 col-lg-3" >
            
              <div
                className="kf-services-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/p.png" alt="image" />
                </div>
                <div className="desc">
                  <h5 className="name">Event Sikkerhed</h5>
                  <div className="subname">Hos Frontline Safety er din tryghed vores prioritet. Vi tilbyder professionel eventsikkerhed til alle typer arrangementer – store som små.</div>
                </div>
              </div>
            
            </Link>
            <Link href="service2" className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-services-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/c.png" alt="image" />
                </div>
                <div className="desc">
                  <h5 className="name">Adgangskontrol og billet</h5>
                  <div className="subname">Effektiv adgangshåndtering med fokus på sikkerhed, service og hurtig gennemstrømning..</div>
                </div>
              </div>
            </Link>
            <Link href="service3" className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-services-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/vip.png" alt="image" />
                </div>
                <div className="desc">
                  <h5 className="name">Generel Mandskab</h5>
                  <div className="subname"></div>Fleksible og erfarne medarbejdere til praktiske opgaver før, under og efter dit event.
                </div>
              </div>
            </Link>
            <Link href="service4" className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-services-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/l9.png" alt="image" />
                </div>
                <div className="desc">
                  <h5 className="name">
Beskyttelse af scenehænder og produktionspersonale</h5>
                  <div className="subname">En sikker og effektiv indgang er første skridt mod et vellykket event</div>
                </div>
              </div>
            </Link>
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
                 Brug for en Sikkerhed Service? 
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link
                href="contacts"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>Kontakt os! </span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Services;
