import "./App.css";
import { useState, useEffect } from "react";
import CourseContainer from "./component/CourseContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import NavBar from "./component/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import CourseDescription from "./component/Pages/CourseDescription";
function App() {
  let api = `http://myjson.dit.upm.es/api/bins/c7wq`;
  let [content, setContent] = useState([]);
  //http://myjson.dit.upm.es/api/bins/665k`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setContent(data.courses);
    })();
  }, [api]);
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {content?.map((number, index) => {
          console.log(number);
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
  return (
    <>
      <Header />;
      <CourseContainer />;
    </>
  );
};
export default App;
