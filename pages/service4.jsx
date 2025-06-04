import Layouts from "@/src/layouts/Layouts";

const Services4 = () => {
  return (
    <Layouts>
      {/* Section: Header */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/5.jpg)" }}
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
       Beskyttelse af Stagehands & Produktionspersonale
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
                Hos Frontline Safety prioriterer vi sikkerheden for stagehands og produktionspersonale under alle faser af et arrangement – fra opbygning til nedtagning. Vi forstår de unikke risici, der kan opstå i hektiske produktionsmiljøer, og tilbyder målrettede sikkerhedsløsninger, der beskytter både mennesker og materiel.
                  <br />
                  Vores ydelser omfatter:
                  <ul className="list-disc list-inside my-4">
                    <li>Tilstedeværelse af sikkerhedspersonale under opbygning og nedtagning</li>
                    <li>Adgangskontrol og zoneopdeling for at sikre arbejdsro og tryghed</li>
                    <li>Konflikthåndtering og forebyggelse af uautoriseret adgang</li>
                    <li>Førstehjælpsberedskab og nødprocedurer</li>
                    <li>Samarbejde med produktionsteamet for at identificere og minimere risici</li>
                  </ul>
                  Vi arbejder tæt sammen med crewledere, teknikere og eventansvarlige for at sikre, at alle arbejdsforhold lever op til gældende sikkerhedsstandarder – og at alle kan fokusere på deres opgaver i et trygt miljø.
                  <br />
                  <br />
                  Frontline Safety er din pålidelige partner, når det handler om professionel beskyttelse af de mennesker, der får produktionen til at køre.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Services4;
