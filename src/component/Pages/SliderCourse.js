import React, { useState, useEffect } from "react";
import styles from "./CourseDescripe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faInfinity,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCirclePlay,
  faFile,
  faSquareCaretDown,
} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

const SliderCourse = ({
  img,
  price,
  hours,
  downloadResource,
  article,
  reference,
}) => {
  let [end, setEnd] = useState(500);
  let [x, setX] = useState(true);
  let [display, setDisplay] = useState("block");
  let [y, sety] = useState(true);
  let [z, setZ] = useState(true);
  let [topPosition, setTopPosition] = useState("105px");
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setEnd(reference?.current.offsetTop - 730);
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  let [pos, setPos] = useState("absolute");
  if (y)
    if (scrollPosition < 150) {
      setDisplay("block");
      setPos("absolute");
      setX(true);
      sety(false);
      setZ(true);
      setTopPosition("105px");
    }
  if (x)
    if (scrollPosition >= 300 && scrollPosition < end) {
      setDisplay("none");
      setPos("fixed");
      setTopPosition("20px");
      setX(false);
      setZ(true);
      sety(true);
    }
  if (z)
    if (scrollPosition >= end) {
      setPos("absolute");
      setTopPosition(`${end}px`);
      setZ(false);
      setX(true);
      sety(true);
    }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${styles.slidercourse}`}
      style={{ position: `${pos}`, top: `${topPosition}` }}
    >
      <img src={img} alt="" style={{ width: "100%", display: `${display}` }} />
      <div className={`${styles.slidercoursepart}`}>
        <h3 className="fw-bold mb-3">E£{price}</h3>
        <button className={`${styles.addbutton} mb-2`}>Add to cart</button>
        <button className={`${styles.buybutton} mb-3`}>Buy now</button>
        <p>30-Day Money-Back Guarantee</p>
        <p className="fw-bold">This course includes:</p>

        <div className="d-flex gap-3">
          <FontAwesomeIcon icon={faCirclePlay} />{" "}
          <p className={`${styles.pros}`}>{hours} hours on-demand video</p>
        </div>
        <div className="d-flex gap-3">
          <FontAwesomeIcon icon={faFile} />{" "}
          <p className={`${styles.pros}`}>{article} article</p>
        </div>
        <div className="d-flex gap-3">
          <FontAwesomeIcon icon={faSquareCaretDown} />{" "}
          <p className={`${styles.pros}`}>
            {downloadResource} downloadable resources
          </p>
        </div>
        <div className="d-flex gap-3">
          <FontAwesomeIcon icon={faInfinity} />{" "}
          <p className={`${styles.pros}`}>Full lifetime access</p>
        </div>
        <div className="d-flex gap-3">
          <FontAwesomeIcon icon={faMobile} />{" "}
          <p className={`${styles.pros}`}>Access on mobile and TV</p>
        </div>
        <div className="d-flex gap-3 mb-3">
          <FontAwesomeIcon icon={faTrophy} />{" "}
          <p className={`${styles.pros}`}>Certificate of completion</p>
        </div>

        <div className={`d-flex justify-content-between ${styles.option} mb-4`}>
          <p className={`${styles.optionp}`}>Share</p>
          <p className={`${styles.optionp}`}>Gift this course</p>
          <p className={`${styles.optionp}`}>Apply Coupon</p>
        </div>
        <h5 className="fw-bold">Training 5 or more people?</h5>
        <p className={`${styles.size}`}>
          Get your team access to 17,000+ top Udemy courses anytime, anywhere.
        </p>
        <button
          className={`${styles.buybutton} mb-1`}
          style={{ height: "55px" }}
        >
          Try Udemy Business
        </button>

        {/* <p>lorem ipsum {scrollPosition}</p> */}
      </div>
    </div>
  );
};

export default SliderCourse;
