import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import "../App.css";
import styles from "./HomeStyling.module.scss";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Nav from "react-bootstrap/Nav";
const Cart = ({ x, title, hover }) => {
  const [show, setShow] = useState(false);
  const handleOnMouseEnter = () => {
    setShow(true);
  };
  const handleOnMouseLeave = () => {
    setShow(false);
  };
  const ref = useRef(null);
  return (
    <>
      <OverlayTrigger
        //trigger={['hover', 'focus']}
        show={show} // Control trigger behavior with show instead of trigger.
        key="bottom"
        placement="top"
        container={ref}
        overlay={
          <Popover
            id={`popover-positioned-bottom`}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          >
            <Popover.Body className="py-3 px-4">
              <h4 className="fw-bold mb-2">{title}</h4>
              <p className="">
                Updated <strong>{hover?.updated}</strong>
              </p>
              <p className="mb-3">{hover?.hours}</p>
              {hover?.roadmap.map((road) => {
                return (
                  <div className="mb-2">
                    <FontAwesomeIcon className="me-2" icon={faCheck} />
                    <span>{road}</span>
                  </div>
                );
              })}
              <div className="d-flex justify-content-between">
                <button className={`${styles.addbutton}`}>Add to Cart</button>
                <div className={`${styles.heart}`}>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
            </Popover.Body>
          </Popover>
        }
      >
        <div
          className="cart-wrapper"
          ref={ref}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          <Nav.Link>{x}</Nav.Link>
        </div>
      </OverlayTrigger>
    </>
  );
};

export default Cart;
