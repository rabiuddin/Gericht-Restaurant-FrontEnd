import React from "react";
import { FiFacebook, FiX, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";

import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-233-4231</p>
        <p className="p__opensans">+1 222-643-4212</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo" />
        <p className="p__opensans">
          "The best to find your self is to lose yourself in the service of
          others."
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiX />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">10:00 am - 02:00 am</p>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">10:00 am - 01:00 am</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2024 Gericht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
