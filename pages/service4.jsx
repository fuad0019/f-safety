import Layouts from "@/src/layouts/Layouts";

const Services4 = () => {
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
            our Core Services
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
            Adgangskontrol & Billet Scanning
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
                Adgangskontrol og billet scanning er essentielle elementer i at sikre trygheden og effektiviteten ved større arrangementer. Frontline Safety tilbyder avancerede løsninger til både adgangskontrol og billetverifikation, der muliggør hurtig og præcis scanning af billetter ved indgangen. Vores systemer sikrer, at kun autoriserede personer får adgang, hvilket forhindrer uautoriserede indtrængen og reducerer risikoen for sikkerhedsbrud. Ved at bruge moderne teknologi, såsom mobile apps og digitale scannere, kan vi tilbyde en smidig og effektiv løsning, der minimerer ventetider og optimerer flowet af besøgende. Frontline Safety sikrer dermed både høj sikkerhed og en god oplevelse for deltagerne.
                  <ul className="list-disc list-inside my-4">
                    <li>Koncerter og festivaler</li>
                    <li>Firmaarrangementer</li>
                    <li>Sportsbegivenheder</li>
                    <li>Private fester</li>
                    <li>Offentlige forsamlinger</li>
                  </ul>
                  Vi har fokus på crowd management, adgangskontrol,
                  risikovurdering og beredskabsplanlægning, og vi arbejder tæt
                  sammen med arrangører og myndigheder for at skabe et sikkert
                  og trygt miljø.
                  <br />
                  <br />
                  Uanset om du planlægger en lille privat fest eller et stort
                  offentligt event, er Frontline Safety din pålidelige partner
                  inden for professionel eventsikkerhed i Danmark.
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
