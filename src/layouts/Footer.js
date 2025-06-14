const Footer = () => {
  return (
    <div className="kf-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* logo */}
            <div
              className="kf-logo element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a href="index.html">
                <img src="images/l5.png" alt="image" />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* hours */}
            <div
  className="kf-f-hours element-anim-1 scroll-animate"
  data-animate="active"
>
  <h5>Follow us</h5>
  <ul style={{ listStyle: "none", padding: 0 }}>
    {/* <li style={{ marginBottom: "10px" }}>
      <a
        href="https://www.linkedin.com/company/frontline-safety"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex", alignItems: "center", fontSize: "18px", textDecoration: "none", color: "#0e76a8" }}
      >
        <i className="lab la-linkedin" style={{ fontSize: "24px", marginRight: "10px" }} />
        LinkedIn
      </a>
    </li> */}
    <li style={{ marginBottom: "10px" }}>
      <a
        href="https://www.instagram.com/frontline_safety"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex", alignItems: "center", fontSize: "18px", textDecoration: "none", color: "#C13584" }}
      >
        <i className="lab la-instagram" style={{ fontSize: "24px", marginRight: "10px" }} />
        Instagram
      </a>
    </li>
    <li>
      {/* <em style={{ fontSize: "16px", color: "#555" }}>
        (For help with the application process, our Recruitment team is on Tlf: + 45 70 23 18 24)
      </em> */}
    </li>
  </ul>
</div>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* contact */}
            <div
              className="kf-f-contact element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <i className="las la-map-marker" />
                  <em>Location :</em>
               Suomisvej 4, 1., 1927 Frederiksberg C.
                </li>
                <li>
                  <i className="las la-envelope-open-text" />
                  <em>Email Address :</em>
                    info@frontlinesafety.dk
                </li>
                <li>
                
                  <em>Phone Number :</em>
                  Tlf: + 45 70 23 18 24
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* gallery */}
            <div
              className="kf-f-gallery element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Core Services</h5>
              <ul>
                <li>
                  <a
                    href="images/6.jpeg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/8.jpeg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/7.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/11.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/12.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/13.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/4.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/background.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/5.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/12.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/6.jpeg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/2.jpg" alt="image" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
            {/* copyright */}
            <div
              className="kf-copyright element-anim-1 scroll-animate"
              data-animate="active"
            >
              Copyright © 2025Frontline Safety.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;