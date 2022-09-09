import React, { useState } from "react";
import styles from "./CourseDescripe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";
const DisLike = () => {
  let [likeColor, setLikeColor] = useState("black"),
    [backGroundLike, setBackGroundLike] = useState("white");

  const change = () => {
    if (likeColor == "black") {
      setLikeColor("white");
      setBackGroundLike("black");
    } else {
      setLikeColor("black");
      setBackGroundLike("white");
    }
  };
  return (
    <button
      style={{
        color: `${likeColor}`,
        backgroundColor: `${backGroundLike}`,
      }}
      onClick={change}
      className={`${styles.like} me-2`}
    >
      <FontAwesomeIcon icon={faThumbsDown} />
    </button>
  );
};

export default DisLike;
