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
                <img src="images/l1.png" alt="image" />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* hours */}
            <div
              className="kf-f-hours element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Want to work for us?</h5>
              <ul>
                <li>
              
                  <em>(for help with the application process, our Recruitment team is on Tlf: + 45 70 23 18 24)</em>
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
                  Vesterbrogade 69, 3. th., DK 1620 København V
                </li>
                <li>
                  <i className="las la-envelope-open-text" />
                  <em>Email Address :</em>
                  info@manosecurity.dk
                </li>
                <li>
                  <i className="las la-phone" />
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