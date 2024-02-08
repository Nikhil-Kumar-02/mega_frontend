import React from "react"
import './Coursepublish.css';
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {setStep} from '../../../../../../reducers/slices/courseSlice';
import ButtonComponent from '../../../../home/buttonComponent';

const Coursepublish = (props) => {

  const currStep = useSelector((state) => state.course.step);
  const dispatch = useDispatch();

  function toggleStep(val){
    dispatch(setStep(currStep+val));
  }


  return (
    <div className="coursePublish_container">
      <div>
        <h1>Publish Settings</h1>  
        <div>
          <input type="checkbox"></input>
          <label>Make this course public</label>
        </div>
      </div>
      <div className="coursePublish_buttonContainer">
        <div>
          <div onClick={()=>toggleStep(-1)}>
            <ButtonComponent active={false}><IoIosArrowBack size={22} style={{paddingRight : "0.5rem"}}></IoIosArrowBack>Back</ButtonComponent>
          </div>
        </div>
        <div>
          <div>
            <div onClick={()=>toggleStep(-1)}>
              <ButtonComponent active={false}>Save as Draft</ButtonComponent>
            </div>
          </div>

          <div>
            <div onClick={()=>toggleStep(-1)}>
              <ButtonComponent active={true}>Save and Publish</ButtonComponent>
            </div>
          </div>
        </div>
      </div>

    </div>    
  )
};

export default Coursepublish;
