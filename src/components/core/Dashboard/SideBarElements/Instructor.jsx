import React, { useEffect, useState } from "react"
import './Instructor.css';
import { getInstructorStatsFromBackend } from "../../../../services/operations/profile";
import { useSelector } from "react-redux";
import { MdWavingHand } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import InstructorChart from "./InstructorChart";

const Instructor = (props) => {


  const [instructorData , setInstructorData] = useState(null);
  const {token} = useSelector((state) => state.auth);
  const {user} = useSelector((state) => state.profile);
  const navigate = useNavigate();

  useEffect(()=>{
    (async () => {
      const result = await getInstructorStatsFromBackend(token);
      console.log("the result in instructor is : " , result);
      setInstructorData(result);
    })()
  } , []);

  function totalStudentsHandler(){
    let studentCnt = 0;
    instructorData?.map((course) => {
      if(course?.totalStudents)
        studentCnt += course?.totalStudents
    })
    return studentCnt;
  }

  function totalAmoutHandler(){
    let totalAmount = 0;
    instructorData?.map((course) => {
      if(course?.totalAmountGenerated)
      totalAmount += course?.totalAmountGenerated
    })
    return totalAmount;
  }

  const instructorDataCopy = instructorData?.slice();

  return (
    <div className="Instructor_wrapper">
      <div>
        <h2>Hi {user?.firstName} <MdWavingHand color="yellow"></MdWavingHand></h2>
        <p>Let's start something new</p>
        <div className="instructor_section_2">
          {
            instructorData &&  <InstructorChart courses={instructorData} ></InstructorChart>
          }
          <div>
            <p style={{fontSize : '1.5rem'}}>Statistics</p>
            <p>Total Course</p>
            <p style={{fontSize : '1.5rem'}}>{instructorData?.length}</p>
            <p>Total Students</p>
            <p style={{fontSize : '1.5rem'}}>{totalStudentsHandler()}</p>
            <p>Total Income</p>
            <p style={{fontSize : '1.5rem'}}>RS. {totalAmoutHandler()}</p>
          </div>
        </div>

        <div className="instructor_section_3">
          <div>
            <h4>Your Courses</h4>
            <p onClick={() => navigate('/dashboard/my-courses')}>View All</p>
          </div>
          <div>
            {
              instructorDataCopy?.splice(0,3)?.map((course) => (
                <div onClick={() => navigate(`/course/${course?._id}`)}>
                  <img src={course?.image}></img>
                  <h3>{course?.courseName}</h3>
                  <p>{course?.courseDescription}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default Instructor;
