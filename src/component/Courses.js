import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmpty } from "@fortawesome/free-regular-svg-icons";

function rate(course) {
  // make array of star rate

  let starRate = [];
  starRate.push(<span className="rateval">{course.rating}</span>);
  let i;
  for (i = 1; i < course.rating; i++) {
    starRate.push(
      <span>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      </span>
    );
  }
  let j = i - 1 + 0.5;
  if (Math.abs(course.rating - j) <= 0.3) {
    starRate.push(
      <span>
        <FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon>
      </span>
    );
  } else if (j - course.rating > 0.3) {
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
  starRate.push(<span className="raten">({course.people})</span>);
  return starRate;
}

function Courses(course) {
  return (
    <div>
      <div>
        <img src={course.image} alt={course.title} />
        <h4>{course.title}</h4>
        <p>{course.author}</p>
        <div className="rate">{rate(course)}</div>
        <div className="price">
          <span>{course.price}</span>
          <del>{course.oldPrice}</del>
        </div>
      </div>
    </div>
  );
}

export default Courses;
