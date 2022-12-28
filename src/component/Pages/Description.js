import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./CourseDescripe.module.scss";

const Description = ({ descriptions }) => {
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
  let x = [];
  x.push(
    descriptions.map((description, index) => {
      if (index > 2) return <p>{description}</p>;
    })
  );

  return (
    <div className="w-100 mb-5">
      <div className={classShadow}>
        <h3 className="mb-3 fw-bold">Description</h3>
        {descriptions.map((description, index) => {
          if (index == 0)
            return (
              <p>
                <strong>{description}</strong>
              </p>
            );
          else if (index <= 2) return <p>{description}</p>;
        })}
      </div>
      {isReadMore ? x : <></>}
      <span onClick={toggleBtn}>{buttonText}</span>
    </div>
  );
};

export default Description;
