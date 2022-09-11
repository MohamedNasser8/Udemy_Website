import "./App.css";
import { useState, useEffect } from "react";
import CourseContainer from "./component/CourseContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import NavBar from "./component/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import CourseDescription from "./component/Pages/CourseDescription";
import Loading from "./component/Pages/Loading";
let [coursesData, setCoursesData] = [];
let [initData, setinitData] = [];

function App() {
  let api = `http://myjson.dit.upm.es/api/bins/c7wq`;
  let [content, setContent] = useState([]);
  let api2 = `http://myjson.dit.upm.es/api/bins/c4tm`;
  [coursesData, setCoursesData] = useState([]);
  [initData, setinitData] = useState([]);

  useEffect(() => {
    (async function () {
      let data = await fetch(api2).then((res) => res.json());
      setinitData(data);
      setCoursesData(data);
    })();
  }, [api2]);

  let update = (title) => {
    setCoursesData(title);
  };
  //http://myjson.dit.upm.es/api/bins/665k`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setContent(data.courses);
    })();
  }, [api]);
  let [show, setShow] = useState("none");
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow("block");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <div style={{ display: `${show}` }} className="App">
        <NavBar update={update} initData={initData} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />

        {content?.map((number, index) => {
          return (
            <Route
              path={`/Course/${index}`}
              element={<CourseDescription content={number} />}
            />
          );
        })}
      </Routes>
    </Router>
  );
}
const Home = () => {
  let [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {show ? (
        <Loading />
      ) : (
        <>
          {" "}
          <Header />
          <CourseContainer coursesData={coursesData} />
        </>
      )}
    </>
  );
};
export default App;
