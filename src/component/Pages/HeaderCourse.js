import React, { useState } from "react";
import styles from "./CourseDescripe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faStar,
  faExclamationCircle,
  faClosedCaptioning,
  faAngleRight,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmpty } from "@fortawesome/free-regular-svg-icons";
function rate(course) {
  let starRate = [];
  starRate.push(
    <span className={`me-1 ${styles.rateval}`}>{course.rate}</span>
  );
  let i;
  for (i = 1; i < course.rate; i++) {
    starRate.push(
      <span className={`${styles.sspan}`}>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      </span>
    );
  }
  let j = i - 1 + 0.5;
  if (Math.abs(course.rate - j) <= 0.3) {
    starRate.push(
      <span className={`${styles.sspan}`}>
        <FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon>
      </span>
    );
  } else if (j - course.rate > 0.3) {
    starRate.push(
      <span>
        <FontAwesomeIcon icon={faEmpty}></FontAwesomeIcon>
      </span>
    );
  } else {
    starRate.push(
      <span>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      </span>
    );
  }
  for (i; i < 5; i++) {
    starRate.push(
      <span>
        <FontAwesomeIcon icon={faEmpty}></FontAwesomeIcon>
      </span>
    );
  }
  starRate.push(
    <span className={`raten ms-1 ${styles.size}`}>
      ({course.ratingCount} {"ratings"})
    </span>
  );
  starRate.push(
    <span className={`raten mx-2 ${styles.size}`}>
      {course.enrollCount} {"student"}
    </span>
  );
  return starRate;
}
const HeaderCourse = ({ content }) => {
  let [display, setDisplay] = useState("none");
  return (
    <div className="bg-dark p-4 mb-2">
      <div className={`${styles.con} mx-auto ms-xl-5 p-xl-s-5 my-2`}>
        <div className="ps-xl-5">
          <div className="text-light ps-xl-5 ms-xl-5">
            <div className="d-flex gap-2 mb-3">
              <span>Development</span>
              <FontAwesomeIcon icon={faAngleRight} className="d-flex fs-6" />
              <span>Development</span>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>{content.topic}</span>
            </div>
            <img
              alt=""
              src={content.image}
              className={`w-100 ${styles.imgofcourse}`}
            />
            <h2 className={` fw-bold`}>{content.title}</h2>
            <h5 className=" mb-3 fs-5">{content.Introduction}</h5>
            <div className="rate mb-3">{rate(content)}</div>
            <p className={`${styles.size}`}>
              Created by {content.instructor?.name}
            </p>
            <div className={`d-flex flex-column gap-3 ${styles.itemofcourse}`}>
              <div className="d-flex gap-2">
                <FontAwesomeIcon icon={faExclamationCircle} className="" />
                <span>Last update {content.lastUpdate}</span>
              </div>
              <div className="d-flex gap-2">
                <FontAwesomeIcon icon={faGlobe} className="" />
                <span>English</span>
              </div>
              <div className="d-flex gap-2 mb-4">
                <FontAwesomeIcon icon={faClosedCaptioning} />
                <span>English</span>
              </div>
            </div>
            <h3 className={`${styles.imgofcourse} fw-bold mb-3`}>
              E£{content.price}
            </h3>
            <button
              className={`${styles.addbutton} ${styles.imgofcourse} mb-2`}
            >
              Add to cart
            </button>
            <p className={`${styles.imgofcourse}`}>
              30-Day Money-Back Guarantee
            </p>
            <p className={`${styles.pros} ${styles.imgofcourse}`}>
              Full lifetime access
            </p>
            <div
              className={`d-flex ${styles.imgofcourse} justify-content-between ${styles.option} mb-4`}
            >
              <p className={`${styles.optionp}`}>Share</p>
              <p className={`${styles.optionp}`}>Gift this course</p>
              <p className={`${styles.optionp}`}>Apply Coupon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCourse;
