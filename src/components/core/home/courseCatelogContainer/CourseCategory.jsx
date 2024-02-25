import React, { useEffect, useState } from "react"
import './CourseCategory.css';
import { useParams } from "react-router-dom";
import RenderCatelogCourses from './RenderCatelogCourses'
import Footer from "../../../common/Footer";
import { getCatelogCoursesFromBackend } from "../../../../services/operations/course";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

const CourseCategory = (props) => {
  const params = useParams();

  const token = useSelector((state) => (state.auth.token));
  const course = useSelector((state) => (state.course.course));
  const dispatch = useDispatch();
  const [otherCourses , setOtherCourses] = useState([]);
  const [categoryCourses , setCategoryCourses] = useState([]);
  const [topSellingCourses , setTopSellingCourses] = useState([]);

  function trimRecievedCourses(setCourse , allCourse){
    let someCourse = [];
    let cnt = 0;
    for(let i=0;i<allCourse.length;i++){
      cnt++;
      someCourse.push(allCourse[i]);
      if(cnt>=4){
        break;
      }
    }
    setCourse(someCourse);
  }

  useEffect(() => {
    async function getCategoryCourses(){
      try {
        const result = await getCatelogCoursesFromBackend(params.categoryId , token , dispatch);

        trimRecievedCourses(setOtherCourses , result?.otherCourses);

        trimRecievedCourses(setTopSellingCourses , result?.allTopSellingCourses);

        trimRecievedCourses(setCategoryCourses , result?.getCategoryCourses.courses);
      } catch (error) {
        console.log("error while finding the category wise course");
      }
    }
    getCategoryCourses();
  } , [params.categoryId]);

  function swipeCourseBuilder(fullCourse , renderedCourse , setRenderedCourse ,offset){

    const renderedCourseCpy = [...renderedCourse];
    //if offset is -1 means we have pushed the previous button
    //remove the last course and add previous course of first at the start of it
    if(offset === -1){
      for(let i=0;i<fullCourse.length;i++){
        if(renderedCourseCpy[0]._id === fullCourse[i]._id){
          const prevIndex = (i-1+fullCourse.length)%fullCourse.length;
          renderedCourseCpy.unshift(fullCourse[prevIndex]);
          renderedCourseCpy.pop();
          setRenderedCourse(renderedCourseCpy);
          break;
        }
      }
    }

    //if offset is 1 means we have pushed the next button
    //so remove the first element and add a course next to the last course in the list
    if(offset === 1){
      for(let i=0;i<fullCourse.length;i++){
        if(renderedCourseCpy[renderedCourseCpy.length - 1]._id === fullCourse[i]._id){
          const nextIndex = (i+1+fullCourse.length)%fullCourse.length;
          renderedCourseCpy.push(fullCourse[nextIndex]);
          renderedCourseCpy.shift();
          setRenderedCourse(renderedCourseCpy);
          break;
        }
      }
    }

  }


  return (
    <div className="CourseCategory_wrapper">
      
      <div className="CourseCategory_section1">
        <span> Home / Catalog / </span><span>{course?.getCategoryCourses.name}</span>
        <p>{course?.getCategoryCourses.name}</p>
        <p>Some random information about the catelog we are currently at</p>
      </div>

      <div className="CourseCategory_section2">
        <h1>Courses to get you started</h1>
        <div>
          <span>Most Popular</span>
          <span>New</span>
        </div>
        <hr></hr>
        <section>
          <span className="courseCategoryNextClicker" onClick={() => {
            swipeCourseBuilder(course.otherCourses , otherCourses , setOtherCourses , -1)
          }}><MdOutlineArrowBackIos></MdOutlineArrowBackIos></span>
          <div className="course_category_courses_container" onScroll={() => {console.log("scrolled")}}>
            {
              otherCourses.map((eachCourse,i) => (<RenderCatelogCourses eachCourse={eachCourse}></RenderCatelogCourses>
              ))
            }
          </div>
          <span className="courseCategoryNextClicker" onClick={() => {
            swipeCourseBuilder(course.otherCourses , otherCourses , setOtherCourses , 1)
          }}><MdOutlineArrowForwardIos></MdOutlineArrowForwardIos></span>
        </section>
      </div>

      <div className="CourseCategory_section3">
        <h1>Top courses in {course?.getCategoryCourses.name}</h1>
        <section>
          <span className="courseCategoryNextClicker" onClick={() => {
            swipeCourseBuilder(course.getCategoryCourses.courses,categoryCourses,setCategoryCourses,-1)
          }}><MdOutlineArrowBackIos></MdOutlineArrowBackIos></span>
          <div className="course_category_courses_container">
          {
            categoryCourses?.map((eachCourse,i) => (
              <RenderCatelogCourses eachCourse={eachCourse}></RenderCatelogCourses>
            ))
          }
          </div>
          <span className="courseCategoryNextClicker" onClick={() => {
            swipeCourseBuilder(course.getCategoryCourses.courses,categoryCourses,setCategoryCourses,-1)
          }}><MdOutlineArrowForwardIos></MdOutlineArrowForwardIos></span>
        </section>
      </div>

      <div className="CourseCategory_section4">
        <h1>Frequently Bought</h1>
        {/* <div className="course_category_courses_container">
        {
          course?.allTopSellingCourses.map((topCourse) => (
            <RenderCatelogCourses eachCourse={topCourse}></RenderCatelogCourses>
          ))
        }
        </div> */}
      </div>

      <div>
        <Footer></Footer>
      </div>

    </div>
  )
};

export default CourseCategory;
