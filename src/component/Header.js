import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import photo from "./11.jpg";
const Header = () => {
  return (
    <header className="sec1">
      <div className="left">
        <div className="navbar-message">
          <h1>New to Udemy? Lucky you.</h1>
          <p>
            Courses start at E£169.99. Get your new-student offer before it
            expires.
          </p>
        </div>
      </div>
      <img className="nav-photo" src={photo} alt="c" />
    </header>
  );
};

export default Header;
