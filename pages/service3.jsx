import Layouts from "@/src/layouts/Layouts";

const Services3 = () => {
  return (
    <Layouts>
      {/* Section: Header */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/4.jpg)" }}
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
             Generel Mandskab
            </h3>
          </div>
          <div className="kf-menu-items-2 w-full">
            <div
              className="kf-menu-item-2 element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="w-full">
                <h1 className="text-center mb-4">
            
                </h1>
                <div className="text-justify leading-relaxed">
             Fleksible og erfarne medarbejdere til praktiske opgaver før, under og efter dit event.
                  <br />
                Hos Frontline Safety tilbyder vi pålideligt og alsidigt generelt mandskab, der kan assistere med en bred vifte af opgaver i forbindelse med dit arrangement. Vores team står klar til at hjælpe med opbygning, nedtagning, logistik, afspærring, servicefunktioner og meget mere.

Vi sørger for, at dit event forløber effektivt og professionelt ved at stille med arbejdskraft, der er vant til at arbejde under tidspres og i samarbejde med både arrangører, teknikere og andre aktører. Uanset størrelsen på dit arrangement, leverer vi et stærkt hold, der får tingene til at fungere i praksis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Services3;
