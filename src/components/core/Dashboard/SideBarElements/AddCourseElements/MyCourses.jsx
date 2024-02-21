import React, { useEffect, useState } from "react"
import './MyCourses.css';
import ButtonComponent from "../../../home/buttonComponent";
import { deleteCoursesFromBackend, getUserCoursesFromBackend } from "../../../../../services/operations/course";
import { useSelector } from "react-redux";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoClockFill } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import ConfirmationalModal from "../../../../common/ConfirmationalModal";

const MyCourses = (props) => {

  const [courses , setCourses] = useState([]);

  const token = useSelector((state) => state.auth.token);

  const [deleteModal , setDeleteModal] = useState(null);

  useEffect( () => {
    async function fetchData(){
      const result = await getUserCoursesFromBackend(token);
      console.log("the fetched course is : " , result);
      setCourses(result.courses)
    }
    fetchData();
  } , []);
  
  async function deleteCourseHandler(){
    console.log("called the delete course handler : " , deleteModal);
    const result = await deleteCoursesFromBackend({courseId : deleteModal} , token);
    console.log("courses after deleting a course is : " , result);
    setCourses(result.courses);
    setDeleteModal(null);
  }

  return (
    <div className="myCourses_wrapper">
      <div>

        <div>
          <h1>My Courses</h1>
          <ButtonComponent linkTo={"/dashboard/add-course"} active={true}>Add Course +</ButtonComponent>
        </div>

        <div>
          <div className="mycourse_courses">Courses</div>
          <div className="mycourse_duration">Duration</div>
          <div className="mycourse_price">Price</div>
          <div className="mycourse_actions">Actions</div>
        </div>

        <div>
        {
          courses?.map((eachCourse) => {
            return(
              <div className="myCourse_eachCourse_wrapper">

                <div className="mycourse_courses">

                  <div>
                    <img src={eachCourse.thumbnail} height={100}></img>
                  </div>

                  <div>
                    <div>{eachCourse.courseName}</div>
                    <div>{eachCourse.courseDescription}</div>
                    <div>Created At : {eachCourse?.createdAt}</div>
                    {
                      eachCourse.status === "Draft" ? (
                        <div style={{color : "red"}}><GoClockFill></GoClockFill>Drafted</div>
                      ) : (<div style={{color : "yellow"}}><FaCheckCircle></FaCheckCircle>Published</div>)
                    }
                  </div>
                  
                </div>

                <div className="mycourse_duration">
                {
                  (() => {
                    let totalDuration = 0;
                    eachCourse.courseContent?.forEach((section) => {
                      section.subSection?.forEach((subsection) => {
                        totalDuration += parseInt(subsection.timeDuration)
                        console.log("time is : ",totalDuration)
                      });
                    });
                    let hour = parseInt(totalDuration/60);
                    let min = totalDuration%60;
                    return `${hour}hr ${min}min`
                  })()
                }
                </div>
                <div className="mycourse_price">€{eachCourse.price}</div>
                <div className="mycourse_actions">
                  <FiEdit2></FiEdit2>
                  <span onClick={() => {
                    setDeleteModal(eachCourse._id);
                  }}>
                    <RiDeleteBin6Line></RiDeleteBin6Line>
                  </span>
                </div>

              </div>
            )
          })
        }
        </div>

      </div>
      {
        deleteModal &&<ConfirmationalModal confirmationFunctionality={deleteCourseHandler} setConfirmationModalVisibility={setDeleteModal} button1={"Delete"} button2={"cancel"} text1={"Do you want to delete entire course"} text2={"The complete Course and all lectures will be deleted permanently"}></ConfirmationalModal>
      }
    </div>
  )
};

export default MyCourses;
