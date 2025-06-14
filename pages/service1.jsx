import Layouts from "@/src/layouts/Layouts";

const MenuRestaurant = () => {
  return (
    <Layouts>
      {/* Section: Header */}
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
          vores kerneydelser
          </h1>
        </div>
      </section>

      {/* Section: Eventsikkerhed - Full Width */}
      <section className="section kf-menu">
        <div className="container">
          <div className="kf-titles align-center">
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
             Event Sikkerhed
            </h3>
          </div>
          <div className="kf-menu-items-2 w-full">
            <div
              className="kf-menu-item-2 element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="w-full">
                <h1 className="text-center mb-4">
                  Frontline Safety – Professionel Eventsikkerhed i Danmark
                </h1>
                <div className="text-justify leading-relaxed">
               Hos Frontline Safety tilbyder vi professionel og pålidelig event sikkerhed til alle typer arrangementer – store som små. Vores team af erfarne vagter sikrer, at dit event forløber trygt og uden forstyrrelser. Vi arbejder tæt sammen med arrangører for at forstå eventets behov og skræddersy sikkerhedsplaner, der dækker alt fra adgangskontrol og overvågning til konflikthåndtering og crowd management.
                  <br />
                  Med Frontline Safety får du en samarbejdspartner, der skaber trygge omgivelser gennem professionel supervision og menneskelig forståelse – uanset om det handler om events, byrum, transportknudepunkter eller andre offentlige og private rum.


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default MenuRestaurant;
