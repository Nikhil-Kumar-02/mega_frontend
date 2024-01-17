import React, { useState  } from "react"
import './ToggleCourse.css';
import { HomePageExplore } from '../../../data/HomePageExplore'
import HomePageThreeCard from "./HomePageThreeCard";

const ToggleCourse = (props) => {
    const [courseData , setCourseData] = useState(HomePageExplore[0].courses);
    const [currSelect , setCurrSelct] = useState(courseData[0].heading);
    const [currTag , setCurrTag] = useState(HomePageExplore[0].tag);

    function tagClickHandler(tag){
        setCurrTag(tag);
        let newCourseData = HomePageExplore.find((eachCourse) =>{
            return (eachCourse.tag === tag)
        });
        newCourseData = newCourseData.courses;
        setCourseData(newCourseData);
        setCurrSelct(newCourseData[0].heading)
    }

    function setCurrSelctHandler(input){
        setCurrSelct(input);
    }

  return (
    <div className="toggleCourse_wrapper">
        <div className="toggleCourse_bars">
            {
                HomePageExplore.map((eachObj) => {
                    return (
                        <div className={eachObj.tag === currTag ? "selected_tag" : ""} 
                        onClick={()=>{tagClickHandler(eachObj.tag)}}>{eachObj.tag}</div>
                    )
                })
            }
        </div>
        <div className="toggleCourse_courses">
            {
                courseData.map((eachCourse , index) => {
                    return (
                        <HomePageThreeCard data={eachCourse} key={index} selectedCard={currSelect}
                        changeSelectedCard={setCurrSelctHandler}></HomePageThreeCard>
                    )
                })
            }
        </div>
    </div>
  )
};

export default ToggleCourse;
