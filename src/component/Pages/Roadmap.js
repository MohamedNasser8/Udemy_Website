import React from "react";
import styles from "./CourseDescripe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Roadmap = ({ overView }) => {
  return (
    <div className="w-100 border border-secondary p-4 mb-5">
      <h3 className="fw-bold mb-3">What you'll learn</h3>
      <div className="row">
        {overView?.map((learn) => {
          return (
            <div className={`col-11-md col-md-6 ${styles.size} mb-3`}>
              <FontAwesomeIcon
                className="me-3"
                icon={faCheck}
              ></FontAwesomeIcon>
              <span>{learn}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Roadmap;
