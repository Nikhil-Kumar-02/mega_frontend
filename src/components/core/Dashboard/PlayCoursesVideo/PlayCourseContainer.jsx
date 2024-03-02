import React, { useEffect, useState } from "react";
import './PlayCourseContainer.css';
import PlayCourseSideBar from "./PlayCourseSideBar";
import { useParams } from "react-router-dom";
import { getcompleteCourseDetailsFromBackend } from "../../../../services/operations/course";
import RatingModal from "./RatingModal";

const PlayCourseContainer = (props) => {

  const params = useParams();

  const [courseDetails , setCourseDetails] = useState(false);
  const [ratingModal , setRatingModal] = useState(false);

  useEffect(()=>{
    (async () => {
      const result = await getcompleteCourseDetailsFromBackend(params.courseId);
      setCourseDetails(result);
    })();
  } , [params.courseId]);

  console.log("show rating modal status " , ratingModal)

  
  return (
    <div className="PlayCourseContainer_wrapper">
    {
      courseDetails && <PlayCourseSideBar setRatingModal={setRatingModal} courseDetails={courseDetails}></PlayCourseSideBar>
    }
    {
      ratingModal && <RatingModal setRatingModal={setRatingModal}></RatingModal>
    }
    </div>
  )
};

export default PlayCourseContainer;
