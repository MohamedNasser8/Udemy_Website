import styles from "./CourseDescripe.module.scss";
import Roadmap from "./Roadmap";
import CourseContent from "./CourseContent";
import Recuirement from "./Recuirement";
import Description from "./Description";
import Intructors from "./Intructors";
import Rate from "./Rate";
import Reviews from "./Reviews";
import Footer from "./Footer";
import SliderCourse from "./SliderCourse";
import HeaderCourse from "./HeaderCourse";

const CourseDescription = ({ content }) => {
  return (
    <>
      <HeaderCourse content={content} />
      <div className="ms-lg-5 ps-lg-5">
        <div className=" p-4 mb-2">
          <div className="ps-xl-5">
            <div className="">
              <div
                className={`${styles.conpart} mx-auto  ms-lg-1 ms-xxl-5 p-xxl-s-5 my-2`}
              >
                <Roadmap overView={content.overview} className="mb-5" />
                <CourseContent lectures={content.content} />
                <Recuirement required={content.requirements} />
                <Description descriptions={content.description} />
                <Intructors instructors={content.instructor} />
                <Rate
                  rate={content.rate}
                  studentFeedback={content.studentFeedback}
                />
                <Reviews reviews={content.reviews} />

                <SliderCourse
                  img={content.image}
                  price={content.price}
                  hours={content.hoursCount}
                  downloadResource={content.downloadableResource}
                  article={content.articlesCount}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseDescription;
