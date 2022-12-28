import React from "react";
import styles from "./CourseDescripe.module.scss";
const Recuirement = ({ required }) => {
  return (
    <div className="w-100 mt-4 mb-5">
      <h3 className="fw-bold mb-5">Requirements</h3>
      <ul>
        {required?.map((req) => {
          return (
            <li className="mb-3">
              <span className="ms-3">{req}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Recuirement;
