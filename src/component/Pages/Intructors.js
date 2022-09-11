import React from "react";
import Instructor from "./Instructor";

const Intructors = ({ instructors }) => {
  return (
    <div className="mb-5">
      <h3 className="mb-3 fw-bold">Instructors</h3>
      {instructors.map((instructor) => {
        return <Instructor instructor={instructor} />;
      })}
    </div>
  );
};

export default Intructors;
