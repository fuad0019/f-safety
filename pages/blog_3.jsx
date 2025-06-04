import Layouts from "@/src/layouts/Layouts";

const blog3 = () => {
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
     NYHEDER
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
 Sådan Uddanner Vi Vores Vagtpersonale til at Håndtere Enhver Situation
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
Hos Frontline Safety er vi stolte af at tilbyde ikke bare sikkerhed, men professionalisme i praksis. Det er kun muligt, fordi vi har høje krav til uddannelse og træning af vores vagtpersonale. Vores folk skal kunne håndtere alt fra rolige konferencer til hektiske festivaler – og gøre det med overblik, respekt og handlekraft. I dette blogindlæg får du indsigt i, hvordan vi uddanner vores personale, så de altid er klar til enhver situation.
                  <br />
                  <br />
              Professionel sikkerhed starter med grundig uddannelse
Alle vagter hos Frontline Safety er autoriseret af Rigspolitiet og har gennemført de påkrævede kurser og godkendelser i henhold til dansk lovgivning. Men vi stopper ikke der.

Vores interne træning fokuserer på både de tekniske og menneskelige aspekter af sikkerhed:
Konflikthåndtering og deeskalering

Kundeservice og kommunikation

Førstehjælp og nødberedskab

Samarbejde med politi og brandvæsen
Psykologisk forståelse og kulturforståelse



                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default blog3;
