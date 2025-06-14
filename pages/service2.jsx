import Layouts from "@/src/layouts/Layouts";

const Services2 = () => {
  return (
    <Layouts>
      {/* Section: Header */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/7.jpg)" }}
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
        Adgangskontrol & Billetscanning
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
             Effektiv adgangshåndtering med fokus på sikkerhed, service og hurtig gennemstrømning.
                  <br />
                  <br />
             Hos Frontline Safety sikrer vi, at kun autoriserede gæster får adgang til dit arrangement. Vores erfarne personale håndterer adgangskontrol og billetscanning med høj præcision og professionalisme – uanset eventets størrelse.

Vi skaber en struktureret og sikker indgangsproces, der minimerer ventetid og forhindrer uautoriseret adgang. Med fokus på både sikkerhed og gæsteservice sørger vi for en god start på oplevelsen allerede ved indgangen.
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

export default Services2;
