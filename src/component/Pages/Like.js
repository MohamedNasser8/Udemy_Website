import React, { useState } from "react";
import styles from "./CourseDescripe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
const Like = () => {
  let [likeColor, setLikeColor] = useState("black"),
    [backGroundLike, setBackGroundLike] = useState("white"),
    [disLikeColor, setDisLikeColor] = useState("black"),
    [backGroundDisLike, setBackGroundDisLike] = useState("white");

  const change = () => {
    if (likeColor == "black") {
      setLikeColor("white");
      setBackGroundLike("black");
      setDisLikeColor("black");
      setBackGroundDisLike("white");
    } else {
      setLikeColor("black");
      setBackGroundLike("white");
    }
  };
  const change1 = () => {
    if (disLikeColor == "black") {
      setDisLikeColor("white");
      setBackGroundDisLike("black");
      setLikeColor("black");
      setBackGroundLike("white");
    } else {
      setDisLikeColor("black");
      setBackGroundDisLike("white");
    }
  };
  return (
    <>
      <button
        style={{
          color: `${likeColor}`,
          backgroundColor: `${backGroundLike}`,
        }}
        onClick={change}
        className={`${styles.like} me-2`}
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button
        style={{
          color: `${disLikeColor}`,
          backgroundColor: `${backGroundDisLike}`,
        }}
        onClick={change1}
        className={`${styles.like} me-2`}
      >
        <FontAwesomeIcon icon={faThumbsDown} />
      </button>
    </>
  );
};

export default Like;
