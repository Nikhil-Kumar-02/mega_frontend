import React, { useState } from "react"
import './ToggleCourse.css';
import { HomePageExplore } from '../../../data/HomePageExplore'
import HomePageThreeCard from "./HomePageThreeCard";

const ToggleCourse = (props) => {
    // const [currTag , setCurrTag] = useState("Free");
    const [courseData , setCourseData] = useState(HomePageExplore[0].courses);
    const [currSelect , setCurrSelct] = useState(HomePageExplore[0].courses[0].heading);

    function tagClickHandler(e){
        console.log(e.target.innerText);

    }

    function setCurrSelctHandler(input){
        console.log('the input recieved in the setcurr handler is : ' , input);
        setCurrSelct(input);
    }

  return (
    <div className="toggleCourse_wrapper">
        <div className="toggleCourse_bars">
            {
                HomePageExplore.map((eachObj) => {
                    return (
                        <div onClick={tagClickHandler}>{eachObj.tag}</div>
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
