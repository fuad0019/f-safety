import Layouts from "@/src/layouts/Layouts";

const blog1 = () => {
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
         Vigtigheden af Professionel Eventsikkerhed i Danmark
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
              Når man planlægger en begivenhed – uanset om det er en musikfestival, en firmafest, en konference eller en sportsbegivenhed – er sikkerheden for deltagerne noget af det allervigtigste. I Danmark er der stigende fokus på at sikre trygge rammer for både gæster og personale. Hos Frontline Safety er det vores kerneopgave at levere netop dette: tryghed, professionalisme og ro i sindet for alle involverede.

Hvorfor er professionel sikkerhed nødvendig?
Mange tænker ikke over det, men sikkerhed handler ikke kun om at håndtere konflikter. Det handler i lige så høj grad om at forebygge dem. Professionelle sikkerhedsvagter er uddannet til at spotte risici før de udvikler sig, håndtere menneskemængder effektivt, og gribe hurtigt ind i nødsituationer – alt imens de opretholder en rolig og venlig tilstedeværelse.

Hos Frontline Safety arbejder vi proaktivt med risikovurdering og planlægning, så intet overlades til tilfældighederne. Vores tilgang er baseret på erfaring, træning og samarbejde med arrangører, myndigheder og personale.
                  <br />
                  <br />
                


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default blog1;
