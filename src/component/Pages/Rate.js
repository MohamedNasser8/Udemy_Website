import React from "react";
import styles from "./CourseDescripe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmpty } from "@fortawesome/free-regular-svg-icons";
const Rate = ({ rate, studentFeedback }) => {
  function getStar(full, empty) {
    let x = [];
    for (let i = 0; i < full; i++) {
      x.push(
        <span>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </span>
      );
    }
    for (let i = 0; i < empty; i++) {
      x.push(
        <span>
          <FontAwesomeIcon icon={faEmpty}></FontAwesomeIcon>
        </span>
      );
    }
    return x;
  }
  function ratestar(rate) {
    let starRate = [];
    let i;
    for (i = 1; i < rate; i++) {
      starRate.push(
        <span>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </span>
      );
    }
    let j = i - 1 + 0.5;
    if (Math.abs(rate - j) <= 0.3) {
      starRate.push(
        <span>
          <FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon>
        </span>
      );
    } else if (j - rate > 0.3) {
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
    return starRate;
  }

  function rateBar(rateValue) {
    let x = [];
    for (let i = 0; i < rateValue; i++) {
      x.push(<div className={`${styles.rateunit}`}></div>);
    }
    return x;
  }

  return (
    <div className="w-100 mb-5">
      <h3 className="fw-bold ">Student Feedback</h3>
      <div className="d-flex gap row">
        <div className=" px-1 py-3 col-9 col-lg-2 me-2">
          <div className={`${styles.ratesize} fw-bold`}>{rate}</div>
          <div className={`${styles.star} mb-2`}>{ratestar(rate)}</div>
          <div className={`${styles.star} fw-bold`}>Course Rate</div>
        </div>
        <div className="d-flex col-7 col-lg-6 flex-column justify-content-between py-3">
          <div className={`${styles.ratebar}`}>
            {rateBar(studentFeedback ? studentFeedback[0] : "")}
          </div>
          <div className={`${styles.ratebar}`}>
            {rateBar(studentFeedback ? studentFeedback[1] : "")}
          </div>
          <div className={`${styles.ratebar}`}>
            {rateBar(studentFeedback ? studentFeedback[2] : "")}
          </div>
          <div className={`${styles.ratebar}`}>
            {rateBar(studentFeedback ? studentFeedback[3] : "")}
          </div>
          <div className={`${styles.ratebar}`}>
            {rateBar(studentFeedback ? studentFeedback[4] : "")}
          </div>
        </div>
        <div className="d-flex col-lg-3 col-4  px-0 px-0 flex-column justify-content-between pt-2">
          <div className={`${styles.star}`}>
            {getStar(5, 0)}{" "}
            <span className={`${styles.udemycolor}`}>
              {studentFeedback ? studentFeedback[0] : ""}%
            </span>
          </div>
          <div className={`${styles.star}`}>
            {getStar(4, 1)}{" "}
            <span className={`${styles.udemycolor}`}>
              {studentFeedback ? studentFeedback[1] : ""}%
            </span>
          </div>
          <div className={`${styles.star}`}>
            {getStar(3, 2)}{" "}
            <span className={`${styles.udemycolor}`}>
              {studentFeedback ? studentFeedback[2] : ""}%
            </span>
          </div>
          <div className={`${styles.star}`}>
            {getStar(2, 3)}{" "}
            <span className={`${styles.udemycolor}`}>
              {studentFeedback ? studentFeedback[3] : ""}%
            </span>
          </div>
          <div className={`${styles.star}`}>
            {getStar(1, 4)}{" "}
            <span className={`${styles.udemycolor}`}>
              {studentFeedback ? studentFeedback[4] : ""}%
            </span>
          </div>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Rate;
