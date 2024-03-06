import React, { useEffect, useState } from "react";
import './CartCard.css';
import { getcompleteCourseDetailsFromBackend } from "../../../../../services/operations/course";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const CartCard = ({courseId}) => {
    const [course , setCourse] = useState(null);

    useEffect(()=>{
        (async () => {
            const result = await getcompleteCourseDetailsFromBackend(courseId);
            // console.log('the course fetched ' , result);
            setCourse(result);
        })()
    } , [courseId]);

    const navigate = useNavigate();


  return (
    <div className="CartCard_wrapper">
        <div>
            <img src={course?.thumbnail}></img>

            <div>
                <h3 onClick={() => {navigate(`/course/${courseId}`)}}>{course?.courseName}</h3>
                <p>{course?.category?.name}</p>
                <p>rating and stars</p>
            </div>
        </div>

        <div>
            <div style={{color : 'red'}}>
                <RiDeleteBin5Line></RiDeleteBin5Line>
                Remove
            </div>
            <div style={{color : 'yellow', fontSize : '1.5rem'}}>₹ {course?.price}</div>
        </div>

    </div>
  )
};

export default CartCard;
