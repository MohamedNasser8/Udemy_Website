import React from "react";
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
const CourseSection = ({
  price,
  hours,
  intro,
  title,
  downloadResource,
  article,
  topic,
  content,
}) => {
  return (
    <div className={`${styles.slidercourse}`}>
      <div className="d-flex gap-2 mb-3">
        <span>Development</span>
        <FontAwesomeIcon icon={faAngleRight} className="d-flex fs-6" />
        <span>Development</span>
        <FontAwesomeIcon icon={faAngleRight} />
        <span>{topic}</span>
      </div>
      <img
        src="https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg"
        alt=""
      />
      <div className={`${styles.slidercoursepart}`}>
        <h3 className="fw-bold mb-3">{title}</h3>
        <h5>{intro}</h5>
        <div className="rate mb-3">{rate(content)}</div>
        <p className={`${styles.size}`}>
          Created by {content.instructor?.name}
        </p>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex gap-2">
            <FontAwesomeIcon icon={faExclamationCircle} className="" />
            <span>Last update {content.lastUpdate}</span>
          </div>
          <div className="d-flex gap-2">
            <FontAwesomeIcon icon={faGlobe} className="" />
            <span>English</span>
          </div>
          <div className="d-flex gap-2">
            <FontAwesomeIcon icon={faClosedCaptioning} />
            <span>English</span>
          </div>
        </div>
        <button className={`${styles.addbutton} mb-2`}>Add to cart</button>
        <p>30-Day Money-Back Guarantee</p>
        <p className="fw-bold">This course includes:</p>

        <div className={`d-flex justify-content-between ${styles.option} mb-4`}>
          <p className={`${styles.optionp}`}>Share</p>
          <p className={`${styles.optionp}`}>Gift this course</p>
          <p className={`${styles.optionp}`}>Apply Coupon</p>
        </div>

        {/* <p>lorem ipsum {scrollPosition}</p> */}
      </div>
    </div>
  );
};

export default CourseSection;
