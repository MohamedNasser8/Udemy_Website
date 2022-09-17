import React, { useRef, useEffect, useState } from "react";
import Courses from "./Courses";
import "../App.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function courses(coursesData) {
  let arrOfCourse = [];
  coursesData?.map((course, index) => {
    arrOfCourse.push(
      <Cart
        hover={course.hover}
        title={course.title}
        x={
          <Link to={`/Course/${index}`}>
            <Courses
              key={course.id}
              image={course.image}
              title={course.title}
              rating={course.rating}
              author={course.author}
              price={course.price}
              people={course.people}
              oldPrice={course.oldPrice}
            ></Courses>
          </Link>
        }
      ></Cart>
    );
    return 1;
  });
  return arrOfCourse;
}

let nextButton, currNumber, prevButton;
function CourseContainer({ coursesData }) {
  const course = useRef(0);
  useEffect(() => {
    nextButton = document.querySelector(".next");
    prevButton = document.querySelector(".previos");
    currNumber = 10;
  }, []);

  //http://myjson.dit.upm.es/api/bins/94sq
  return (
    <>
      <Cart />
      <div className="course">
        <div className="feature">
          <h2>Expand your career opportunities with Python</h2>
          <p>
            Take one of Udemy’s range of Python courses and learn how to code
            using this incredibly useful language. Its simple syntax and
            readability makes Python perfect for Flask, Django, data science,
            and machine learning. You’ll learn how to build everything from
            games to sites to apps. Choose from a range of courses that will
            appeal to...
          </p>

          <div>
            <a href="https://github.com/facebook" className="explore">
              Explore Python
            </a>
            <div className="courses" ref={course}>
              {courses(coursesData)}
            </div>

            <button
              className="previos"
              onClick={() => {
                console.log("Previous button clicked");
                const courseType = document.querySelector(".courses div");
                let coursedimention = course.current.getBoundingClientRect();
                let courseswidth = coursedimention.width;
                let widthOfCourse =
                  courseType.getBoundingClientRect().width + 20;
                for (let i = 1; i < 6; i++) {
                  if (!(courseswidth > i * widthOfCourse)) {
                    courseswidth = (i - 1) * widthOfCourse;
                    break;
                  }
                }
                if (courseswidth === 0) courseswidth = widthOfCourse;
                course.current.scrollLeft -= courseswidth;

                if (course.current.scrollLeft <= courseswidth) {
                  prevButton.style.display = "none";
                }
                nextButton.style.display = "flex";
              }}
            >
              <FontAwesomeIcon
                icon={faAngleLeft}
                style={{ color: "white" }}
              ></FontAwesomeIcon>
            </button>
            <button
              className="next"
              onClick={() => {
                const courseType = document.querySelector(".courses div");
                let coursedimention = course.current.getBoundingClientRect();
                let courseswidth = coursedimention.width;

                let widthOfCourse =
                    courseType.getBoundingClientRect().width + 20,
                  widthScroll;
                //console.log(course.current);
                let totalWidth = currNumber * widthOfCourse - 20;
                for (let i = 1; i < 6; i++) {
                  console.log(widthOfCourse * i, courseswidth);
                  if (!(courseswidth > i * widthOfCourse)) {
                    widthScroll = (i - 1) * widthOfCourse;

                    break;
                  }
                }
                //console.log(courseswidth);
                if (widthScroll === 0) widthScroll = widthOfCourse;

                course.current.scrollLeft += widthScroll;

                if (
                  totalWidth -
                    (course.current.scrollLeft + courseswidth + widthScroll) <=
                  0
                )
                  nextButton.style.display = "none";
                prevButton.style.display = "flex";
              }}
            >
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ color: "white" }}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseContainer;
