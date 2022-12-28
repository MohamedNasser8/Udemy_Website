import "./pages.css";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmpty } from "@fortawesome/free-regular-svg-icons";
import styles from "./CourseDescripe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Like from "./Like";
const Reviews = ({ reviews }) => {
  function ratestar(rate) {
    let starRate = [];
    let i;
    for (i = 1; i < rate; i++) {
      starRate.push(
        <span>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </span>
      );
    }
    let j = i - 1 + 0.5;
    if (Math.abs(rate - j) <= 0.3) {
      starRate.push(
        <span>
          <FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon>
        </span>
      );
    } else if (j - rate > 0.3) {
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
    return starRate;
  }

  return (
    <>
      <h4 className="fw-bold">Reveiws</h4>
      <div className="d-flex flex-wrap justify-content-start gap-3 mb-2">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search reviews"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            style={{
              color: "white",
              backgroundColor: "black",
              minWidth: "50px",
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <form action="#">
          <select className="form-select">
            <option value="1">All ratings</option>
            <option value="1">Five Stars</option>
            <option value="1">Four Stars</option>
            <option value="1">Three Stars</option>
            <option value="1">Two Stars</option>
            <option value="1">One Star</option>
          </select>
        </form>
      </div>
      <div className="w-75 row">
        {reviews?.map((reveiw) => {
          return (
            <div className="row">
              <div className="col-2">
                <div className="nickname">{reveiw.name.slice(0, 2)}</div>
              </div>
              <div className="mb-3 col-10" key={reveiw.id}>
                <div className="fw-bold mb-1">{reveiw.name}</div>
                <div className={`${styles.star} mb-3`}>
                  {ratestar(reveiw.rate)}
                  <span className={`${styles.ceo} ${styles.size} ms-2`}>
                    4 Weeks ago
                  </span>
                </div>
                <p className={`${styles.size} mb-2`}>{reveiw.content}</p>
                <p className="mb-2" style={{ fontSize: "13px " }}>
                  Was this review helpful?
                </p>
                <div className="mb-3">
                  <Like />
                  <span className={`${styles.size} ${styles.textcolor}`}>
                    Report
                  </span>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Reviews;
