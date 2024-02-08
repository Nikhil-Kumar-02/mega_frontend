import React, { useEffect, useState } from "react"
import './CourseInformation.css';
import { HiCurrencyRupee } from "react-icons/hi";
import ButtonComponent from '../../../../home/buttonComponent';
import { CgAsterisk } from "react-icons/cg";
import { FaChevronRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import {requestBackend}  from '../../../../../../services/apiConnector';
import {courseAllRoutes} from '../../../../../../services/apiRoutes';
import { useDispatch, useSelector } from "react-redux";
import {setStep} from '../../../../../../reducers/slices/courseSlice'

const CourseInformation = (props) => {

  const currStep = useSelector((state) => state.course.step);
  const dispatch = useDispatch();

  function toggleStep(val){
    dispatch(setStep(currStep+val));
  }

  const [allCategories , setAllCategories] = useState([]);

  async function getCategories(){
    const response = await requestBackend('GET' , courseAllRoutes.getAllCategories);
    console.log('the response in categories is : ', response);
    setAllCategories(response?.data?.allCategories);
  }

  useEffect( () => {
    getCategories();
  } , [])

  const [enteredTags , setEnteredTags] = useState([]);

  function AddNewTagHandler(e){
    const newTag = e.target.value;
    if(e.key === "Enter" && newTag.length > 0){
      e.preventDefault();
      e.target.value = "";
      const id = Date.now();
      setEnteredTags((prev) => (
        [...prev , {id , name : newTag}]
      ))
    }
  }

  function removeTagHandler(id){
    console.log(id);
    setEnteredTags((prev) => (
      prev.filter((eachtag) => (eachtag.id !== id))
    ))
  }
  


  return (
    <form>
      <div>
          <label>Course Title<CgAsterisk size={13}></CgAsterisk></label>
          <input type="text" placeholder="Enter Course Title"></input>
      </div>
      <div>
          <label>Course Short Description<CgAsterisk size={13}></CgAsterisk></label>
          <textarea placeholder="Enter Description"></textarea>
      </div>
      <div className="addCourse_rupee_container">
          <label><HiCurrencyRupee color="grey" size={20}/>Course Price<CgAsterisk color="red" size={13}></CgAsterisk></label>
          <input type="text" placeholder="Enter Price"></input>
      </div>
      <div>
          <label>Category<CgAsterisk size={13}></CgAsterisk></label>
          <div className="addCourse_category_drop_down">
          <select>
          <option key={0}>Choose Course Category</option>
          {
              allCategories?.length > 0 && 
              allCategories?.map((category) => (
                  <option key={category._id}>{category.name}</option>
              ))
          }
          </select>
          </div>
      </div>
      <div>
          <label>Tags<CgAsterisk size={13}></CgAsterisk></label>
          <div className={enteredTags.length>0 ? "addCourse_tags_Container" : ""}>
          {
              enteredTags?.length > 0 && enteredTags.map((tag) => (
              <span key={tag.id}>{tag.name}<span onClick={()=>{removeTagHandler(tag.id)}}><RxCross2 size={15} /></span></span>
              ))
          }
          </div>
          <input type="text" placeholder="Choose a Tag And Press Enter" onKeyDown={AddNewTagHandler}></input>
      </div>
      <div>
          <label>Course Thumbnail<CgAsterisk size={13}></CgAsterisk></label>
          <input type="file" placeholder="Drag and Drop or Choose"></input>
      </div>
      <div>
          <label>Benefits of the course<CgAsterisk size={13}></CgAsterisk></label>
          <textarea placeholder="Enter benefits of the course"></textarea>
      </div>
      <div>
          <label>Requirements / Instructions<CgAsterisk size={13}></CgAsterisk></label>
          <textarea placeholder="Enter benefits of the course"></textarea>
      </div>
      <div className="homepage_button_arrow" onClick={()=>toggleStep(+1)}>
          <ButtonComponent active={true}>
          Next
          <FaChevronRight size={12}></FaChevronRight>
          </ButtonComponent>
      </div>
    </form>
  )
};

export default CourseInformation;
