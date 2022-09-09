import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import styles from "./CourseDescripe.module.scss";
const Footer = () => {
  return (
    <div className="bg-dark p-4 py-3">
      <div className="d-flex flex-wrap justify-content-between">
        <h5 className={`mt-1 ${styles.footertextcolor}`}>
          Top companies choose
          <span className="fw-bold" style={{ color: "#cec0fc" }}>
            Udemy Business
          </span>{" "}
          to build in-demand career skills.
        </h5>
        <div className="mb-4">
          <img
            alt=""
            className="me-4"
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
          />
          <img
            alt=""
            className="me-4"
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
          />
          <img
            alt=""
            className="me-4 "
            src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
          />
          <img
            alt=""
            className="me-4"
            src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
          />
          <img
            alt=""
            className="me-4"
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
          />
        </div>
      </div>
      <div className="row flex-lg-row flex-column-reverse">
        <div
          className={`mt-1  flex-lg-row flex-column col-10 row p-5 ${styles.size}`}
        >
          <ul
            className={`${styles.footertextcolor} col-12 col-lg-3 d-flex flex-column gap-2`}
          >
            <li>Udemy Business</li>
            <li>Teach on Udemy</li>
            <li>Get the app</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          <ul
            className={`${styles.footertextcolor} col-12 col-lg-3 d-flex flex-column gap-2`}
          >
            <li>Careers</li>
            <li>Blog</li>
            <li>Help and Support</li>
            <li>Affiliate</li>
            <li>Investors</li>
          </ul>
          <ul
            className={`${styles.footertextcolor} col-12 col-lg-3 d-flex flex-column gap-2`}
          >
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Cookies settings</li>
            <li>Sitemap</li>
            <li>Accessibility statement</li>
          </ul>
        </div>
        <div className="col d-flex justify-lg-content-end me-3 py-lg-5">
          <button
            className={`${styles.language} d-flex align-items-center px-3`}
          >
            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
            <sapn className="ms-2">English</sapn>
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between px-3">
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg
        "
          alt=""
          style={{ width: "90px" }}
        ></img>
        <span
          style={{ fontSize: "12px" }}
          className={`${styles.footertextcolor}`}
        >
          <FontAwesomeIcon icon={faCopyright} /> 2022 Udemy,Inc.
        </span>
      </div>
    </div>
  );
};

export default Footer;
