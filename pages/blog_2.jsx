import Layouts from "@/src/layouts/Layouts";

const blog2 = () => {
  return (
    <Layouts>
      {/* Section: Header */}
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
    Hvad Du Kan Forvente af Frontline Safety til Dit Næste Event
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
Når du hyrer Frontline Safety til at sikre dit event, får du mere end bare sikkerhedsvagter. Du får en erfaren samarbejdspartner, der arbejder systematisk, professionelt og engageret for at skabe en tryg og velkoordineret oplevelse for alle deltagere. I dette indlæg giver vi dig et indblik i, hvordan vi arbejder – før, under og efter et event.
                  <br />
                  <br />
                Før Eventet: Grundig Forberedelse og Risikovurdering
Sikkerhed begynder længe før dørene åbner. Hos Frontline Safety starter vi med en grundig risikovurdering i samarbejde med dig som arrangør. Vi stiller spørgsmål som:

Hvilken type event er der tale om?

Hvor mange gæster forventes der?

Er der VIP’er til stede?

Hvilket publikum henvender eventet sig til?

Er der særlige risici på grund af alkohol, politik, musikgenre eller andet?

Med udgangspunkt i disse oplysninger udarbejder vi en sikkerhedsplan, der tager højde for både synlige og skjulte risici. Planen dækker bl.a. bemanding, adgangskontrol, flugtveje, crowd management og nødberedskab.


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default blog2;
