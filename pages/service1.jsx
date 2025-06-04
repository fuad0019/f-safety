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
              beyond events for supervision - guiding.
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
                Frontline Safety er en professionel sikkerhedsvirksomhed med base i Danmark, der tilbyder omfattende løsninger inden for tryghed og beskyttelse – ikke kun ved events, men også i hverdagsmiljøer, hvor tilstedeværelse og tryghed er afgørende.

Vi specialiserer os i overvågning, vejledning og generel supervision, og vores arbejde spænder bredt – fra store offentlige begivenheder og koncerter til institutioner, butikker, boligområder og private virksomheder.
Vores team består af erfarne og veluddannede sikkerhedsmedarbejdere, der ikke blot håndterer konflikter og forebygger uønsket adfærd, men også fungerer som synlige, servicemindede guider og støttepersoner. Vi tror på, at god sikkerhed bygger på dialog, respekt og tilstedeværelse – ikke blot kontrol.

Frontline Safety lægger vægt på at forstå hver enkelt kundes behov og konteksten, hvori vi opererer. Derfor skræddersyr vi løsninger, der passer til alt fra faste vagtordninger og rådgivning til ad hoc-opgaver og tilsyn i udsatte områder.
                  <br />
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
