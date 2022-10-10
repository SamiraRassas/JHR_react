import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faGithub,
  faFacebook,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="item1"></div>

        <div className="item2">
          <span style={{ paddingRight: 5 }}>Copyright </span>
          <FontAwesomeIcon icon={faCopyright} />{" "}
          <span style={{ paddingLeft: 7, paddingRight: 7 }}>
            {new Date().getFullYear()} JHR-APP && {"  "}{" "}
          </span>
          <a href="https://www.youtube.com/" className="item6">
            <FontAwesomeIcon icon={faGooglePlusG} /> jhr-app@gmail.com{" "}
          </a>
        </div>
        <a
          href="https://github.com/sudiptob2/simple-react-footer"
          className="item3"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="http://fb.com/sudiptob2" className="item4">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.youtube.com/" className="item5">
          <FontAwesomeIcon icon={faSquareInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
