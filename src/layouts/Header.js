import Link from "next/link";
import { useEffect, useState } from "react";
import { stickyNav } from "../utils";

const Header = () => {
  useEffect(() => {
    stickyNav();
  }, []);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (document.querySelector("header").className.includes("animated")) {
      setTimeout(() => {
        document.querySelector("header").classList.add("opened", "show");
      }, 800);
    }
  }, [toggle]);

  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };

  return (
    <header className={`kf-header ${toggle ? "animated" : ""}`}>
      {/* topline */}
      {/* <div className="kf-topline">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        
            <div className="kf-h-group">
              <i className="far fa-clock" /> <em>opening hours :</em> 08:00 am -
              09:00 pm
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center">
         
            <div className="kf-h-social">
              <a href="facebook.com" target="blank">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="twitter.com" target="blank">
                <i className="fab fa-twitter" />
              </a>
              <a href="instagram.com" target="blank">
                <i className="fab fa-instagram" />
              </a>
              <a href="youtube.com" target="blank">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-right">
          
            <div className="kf-h-group">
              <i className="fas fa-map-marker-alt" /> <em>Location :</em> 55
              main street, new york
            </div>
          </div>
        </div>
      </div> */}
      {/* navbar */}
      <div className="kf-navbar">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            {/* logo */}
            <div className="kf-logo">
              <Link href="/">
                <img src="images/l1.png" alt="image" />
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center">
            {/* main menu */}
            <div className="kf-main-menu">
              <ul>
                <li>
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li>
                      <Link href="services">Our Service</Link>
                    </li>
                
                <li>
                  <Link href="about">About Us</Link>
                </li>
            
                <li>
                <Link href="team">Jobs</Link>
                
                </li>
                <li>
                  <a href="blog-grid">
                    News
                  </a>
                </li>
                {/* <li>
                      <Link href="history">Training</Link>
                    </li> */}
                <li>
                  <Link href="contacts">Contacts</Link>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right">
            {/* menu btn */}
            <a
              href="#"
              className={`kf-menu-btn ${toggle ? "active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </a>
            {/* btn */}
            {/* <Link href="reservation" className="kf-btn h-btn">
              <span>Book a table</span>
            </Link> */}
          </div>
        </div>
      </div>
      <div className="kf-navbar-mobile">
        {/* mobile menu */}
        <div className="kf-main-menu">
          <ul>
            <li className="has-children">
              <Link href="/">Home</Link>
            
           
            </li>
            <li>
                  <Link href="services"> Our Service</Link>
                </li>

            <li>
              <Link href="about">About Us</Link>
            </li>
            <li>
                  <Link href="history">Training</Link>
                </li>
                <li>
                  <Link href="team">Jobs</Link>
                </li>
           
            <li className="has-children">
              <a href="blog-grid">News</a>
            </li>
            <li>
              <Link href="contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        {/* mobile topline */}
        <div className="kf-topline">
          {/* <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
             
              <Link href="reservation" className="kf-btn h-btn">
                <span>Book a table</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
           
              <div className="kf-h-social">
                <a href="facebook.com" target="blank">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="twitter.com" target="blank">
                  <i className="fab fa-twitter" />
                </a>
                <a href="instagram.com" target="blank">
                  <i className="fab fa-instagram" />
                </a>
                <a href="youtube.com" target="blank">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              
              <div className="kf-h-group">
                <i className="far fa-clock" /> <em>opening hours :</em> 08:00 am
                - 09:00 pm
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              
              <div className="kf-h-group">
                <i className="fas fa-map-marker-alt" /> <em>Location :</em> 55
                main street, new york
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
};
export default Header;