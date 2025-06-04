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
          Crowd Planning & Management.
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
                Hos Frontline Safety tilbyder vi specialiseret rådgivning og håndtering inden for Crowd Planning & Management – en afgørende del af sikkerheden ved alle typer arrangementer, hvor mange mennesker samles.

Vi arbejder strategisk med at analysere publikumsflow, ind- og udgange, flugtveje, barriereopsætning og adfærdsforudsigelse for at sikre, at både gæster og personale færdes trygt og effektivt. Vores team har stor erfaring med at udvikle tilpassede crowd management-planer til både små og store events, herunder koncerter, sportsbegivenheder, festivaler og offentlige forsamlinger.
                  <br />
                  <br />
                  Vi tilbyder:
                  <ul className="list-disc list-inside my-4">
                    <li>Risikovurdering og kapacitetsanalyse</li>
                    <li>Udvikling af crowd management-planer</li>
                    <li>Praktisk koordinering og instruktion af personale</li>
                    <li>Synlig og professionel tilstedeværelse under afvikling</li>
                    <li>Evaluering og opfølgning efter event</li>
                  </ul>
                  Frontline Safety kombinerer viden om menneskelig adfærd med praktisk erfaring og stærk kommunikation. Resultatet er sikre, velfungerende arrangementer, hvor publikum føler sig velkomne og trygge – og hvor sikkerheden aldrig overlades til tilfældigheder.
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

export default Services2;
