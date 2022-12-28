import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function NavBar({ update, initData }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("name") || "";

  const handleSearch = (e) => {
    const name = e.target.value;
    if (name) {
      setSearchParams({ name });
    } else setSearchParams({});
  };
  let filterstring;
  let search = (e) => {
    e.preventDefault();
    filterstring = initData?.filter((element) => {
      if (element?.title?.toLowerCase()?.includes(searchTerm)) {
        return element;
      }
    });
    update(filterstring);
    setSearchParams({ searchTerm });
  };

  return (
    <nav className="head">
      <div class="setting">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <Link to="/" className="logo-udemy">
        <img
          className="udemy"
          src="data:image/png;base64,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"
          alt="Udemy"
        />
      </Link>
      <div className="catigories">
        <p>Catigories</p>
      </div>
      <div className="boxsearch">
        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        <form action="">
          <div className="search">
            <input
              id="searchBar"
              type="text"
              placeholder="Search for anything"
              className="sear"
              onChange={handleSearch}
              value={searchTerm}
            />
          </div>{" "}
          <button
            id="searchButton"
            className="searchb"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              navigate("/?name=" + searchTerm);
            }}
          >
            <span onClick={search}>Search</span>
          </button>
        </form>
      </div>
      <div className="udemy-business">
        <p>Udemy Buisness</p>
      </div>
      <div className="teach-on-udemy">
        <p>Teach on Udemy</p>
      </div>
      <div className="search-icon-2">
        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
      </div>
      <div className="shop">
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
      <div className="action">
        <div className="login">
          <a href="/">Log in</a>
        </div>
        <div className="sign">
          <a href="/">Sign up</a>
        </div>
        <div className="language">
          <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
