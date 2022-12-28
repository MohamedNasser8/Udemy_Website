import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CourseDescripe.module.scss";
import {
  faAngleUp,
  faAngleDown,
  faStar,
  faCertificate,
  faPeopleGroup,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";

const Instructor = ({ instructor }) => {
  let [classShadow, setClassShadow] = useState(
    `${styles.boxshadow} ${styles.size} ${styles.contentmore}`
  );

  const [isReadMore, setIsReadMore] = useState(false);

  let up, down;
  up = (
    <span className={`d-flex gap-1 ${styles.sizecolor}`}>
      <span>{"Show less"}</span>
      <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
    </span>
  );
  down = (
    <span className={`d-flex gap-1 ${styles.sizecolor}`}>
      <span className={`${styles.sizecolor}`}>{"Show more"}</span>
      <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
    </span>
  );
  let [buttonText, setButtonText] = useState(down);
  const toggleBtn = (e) => {
    if (!isReadMore) {
      setClassShadow(`${styles.size}`);
      setButtonText(up);
    }
    if (isReadMore) {
      setButtonText(down);
      setClassShadow(
        `${styles.boxshadow} ${styles.size} ${styles.contentmore}`
      );
    }
    e.target.value = "none";
    setIsReadMore((prevState) => !prevState);
  };

  return (
    <>
      <>
        <div
          className={`${styles.udemyinstructor} fw-bold fs-5 mb-2 fw-normal`}
        >
          {instructor?.name}
        </div>
        <div className={`${styles.ceo} mb-2`}>{instructor?.Intro}</div>
        <div className="d-flex gap-3 mb-3">
          <div className={`${styles.imgwidth}`}>
            <img
              alt={instructor?.Intro}
              className="img-fluid rounded-circle"
              src={instructor?.Image}
            ></img>
          </div>
          <div className="py-2 d-flex flex-column gap-2">
            <div>
              <FontAwesomeIcon icon={faStar} className="me-3"></FontAwesomeIcon>
              <span>{instructor?.Rating} Instructor Rating</span>
            </div>
            <div>
              <FontAwesomeIcon
                className="me-3"
                icon={faCertificate}
              ></FontAwesomeIcon>
              <span>{instructor?.reviewsNumber} Reviews</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faPeopleGroup}
                className="me-3"
              ></FontAwesomeIcon>
              <span>{instructor?.studentsNumber} Student</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faPlayCircle}
                className="me-3"
              ></FontAwesomeIcon>
              <span>{instructor?.coursesNumber} Course</span>
            </div>
          </div>
        </div>
        <div>
          <div className={classShadow}>
            <p className={`${styles.size} ${styles.textcolor}`}>
              {instructor?.description[0]}
            </p>
          </div>
          {isReadMore ? (
            <div className={`${styles.size} ${styles.textcolor}`}>
              {instructor?.description.map((des, index) => {
                if (index >= 1) return des;
              })}
            </div>
          ) : (
            <></>
          )}
          <span onClick={toggleBtn}>{buttonText}</span>
        </div>
      </>
    </>
  );
};

export default Instructor;
