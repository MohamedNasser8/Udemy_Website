import "./pages.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import styles from "./CourseDescripe.module.scss";
const CourseContent = ({ lectures }) => {
  let [maxItems, setMaxItems] = useState(10);
  const [show, setShow] = useState(true);
  let updateContent = (e) => {
    setMaxItems(lectures.length);
    setShow(false);
  };
  return (
    <div className="mb-5">
      <h4 className="fw-bold">Course content</h4>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        {lectures?.map((lecture, index) => {
          if (index < maxItems)
            return (
              <div key={index} className="accordion-item">
                <h2
                  class="accordion-header"
                  id={`panelsStayOpen-heading${index}`}
                >
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    aria-expanded="true"
                    data-bs-toggle="collapse"
                    aria-controls={`panelsStayOpen-collapse${index}`}
                    data-bs-target={`#panelsStayOpen-collapse${index}`}
                  >
                    {lecture[0]}
                  </button>
                </h2>
                <div
                  id={`panelsStayOpen-collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`flush-heading${index}`}
                >
                  <div class="accordion-body">
                    {lecture[1].map((lesson) => {
                      return (
                        <>
                          <div className={`mb-3 d-flex gap-3 ${styles.size}`}>
                            <FontAwesomeIcon
                              icon={faCirclePlay}
                            ></FontAwesomeIcon>
                            <span>{lesson}</span>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
        })}
      </div>
      {show && lectures?.length - maxItems > 0 ? (
        <button className="w-100 p-3" onClick={updateContent}>
          {lectures?.length - maxItems} more sections
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CourseContent;
