import React, { useEffect, useState } from "react"
import './CourseInformation.css';
import { HiCurrencyRupee } from "react-icons/hi";
import { CgAsterisk } from "react-icons/cg";
import { FaChevronRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import {requestBackend}  from '../../../../../../services/apiConnector';
import {courseAllRoutes} from '../../../../../../services/apiRoutes';
import { useDispatch, useSelector } from "react-redux";
import {setStep , setCourse} from '../../../../../../reducers/slices/courseSlice';
import LectureUpload from "../../../../../common/LectureUpload";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { COURSE_STATUS } from "../../../../../../utils/constants";
import { createANewCourseBackendRequest } from "../../../../../../services/operations/course";


const CourseInformation = (props) => {

  const {register , handleSubmit , setValue , getValues , formState : {errors}} = useForm();
  const {course , editCourse} = useSelector((state) => state.course);
  // const [loading, setLoading] = useState(false)

  const currStep = useSelector((state) => state.course.step);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();


  const [allCategories , setAllCategories] = useState([]);

  async function getCategories(){
    // setLoading(true);

    const response = await requestBackend('GET' , courseAllRoutes.getAllCategories);
    console.log('the response in categories is : ', response);
    setAllCategories(response?.data?.allCategories);

    // setLoading(false);
  }

  useEffect( () => {

    if (editCourse) {
      setValue("courseTitle", course.courseName)
      setValue("courseShortDesc", course.courseDescription)
      setValue("coursePrice", course.price)
      setValue("courseTags", course.tag)
      setValue("courseBenefits", course.whatYouWillLearn)
      setValue("courseCategory", course.category)
      setValue("courseRequirements", course.instructions)
      setValue("courseImage", course.thumbnail)
    }

    getCategories();
  } , []);

 

  const isFormUpdated = () => {
    const currentValues = getValues()
    if (
      currentValues.courseTitle !== course.courseName ||
      currentValues.courseShortDesc !== course.courseDescription ||
      currentValues.coursePrice !== course.price ||
      currentValues.tags.toString() !== course.tag.toString() ||
      currentValues.courseBenefits !== course.whatYouWillLearn ||
      currentValues.courseCategory._id !== course.category._id ||
      currentValues.courseRequirements !== course.instructions ||
      currentValues.courseImage !== course.thumbnail
    ) {
      return true;
    }
    return false;
  };

  // handle next button click
  const onSubmit = async (data) => {
    const currentValues = getValues();
    if (editCourse) {
      if (isFormUpdated()) {
        const formData = new FormData();
        formData.append("courseId", course._id)
        if (currentValues.courseTitle !== course.courseName) {
          formData.append("courseName", currentValues.courseTitle)
        }
        if (currentValues.courseShortDesc !== course.courseDescription) {
          formData.append("courseDescription", currentValues.courseShortDesc)
        }
        if (currentValues.coursePrice !== course.price) {
          formData.append("price", currentValues.coursePrice)
        }
        if (currentValues.tags.toString() !== course.tag.toString()) {
          formData.append("tag", JSON.stringify(currentValues.tags))
        }
        if (currentValues.courseBenefits !== course.whatYouWillLearn) {
          formData.append("whatYouWillLearn", currentValues.courseBenefits)
        }
        if (currentValues.courseCategory !== course.category) {
          formData.append("category", currentValues.courseCategory)
        }
        if (
          currentValues.courseRequirements.toString() !==
          course.instructions.toString()
          ) {
            formData.append(
              "instructions",
              JSON.stringify(currentValues.courseRequirements)
              )
            }
            if (currentValues.courseImage !== course.thumbnail) {
              formData.append("courseImage", currentValues.courseImage)
            }
            // console.log("Edit Form data: ", formData)
            // setLoading(true)
            // const result = await editCourseDetails(formData, token)
            // setLoading(false)
            // if (result) {
              dispatch(setStep(2))
              // dispatch(setCourse(result))
              // }
      } else {
        toast.error("No changes made to the form")
      }
      return;
    }
          
    console.log('the current values is : ' , currentValues);

    const formData = new FormData();
    formData.append('courseName', currentValues.courseTitle);
    formData.append("courseDescription", currentValues.courseShortDesc);
    formData.append("price", currentValues.coursePrice);
    formData.append("tag", JSON.stringify(currentValues.tags))
    formData.append("whatYouWillLearn", currentValues.courseBenefits)
    formData.append("category", currentValues.courseCategory)
    formData.append("status", COURSE_STATUS.DRAFT);
    formData.append("instructions", currentValues.courseRequirements);
    formData.append("courseImage", currentValues.courseImage)

    // setLoading(true)
    const result = await createANewCourseBackendRequest(formData, token);
    console.log('the result after making the call to the backend : ' , result);
    if (result) {
      dispatch(setStep(2));
      dispatch(setCourse(result))
    }
    // setLoading(false)
  }

  const [enteredTags , setEnteredTags] = useState([]);

  useEffect( () => {
    setValue("tags" , enteredTags);
  }, [enteredTags]);

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
    setEnteredTags((prev) => (
      prev.filter((eachtag) => (eachtag.id !== id))
    ))
  }  


  return (
    <form className="courseInformation_form_wrapper" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Course Title<CgAsterisk size={13}></CgAsterisk></label>
        <input type="text" placeholder="Enter Course Title"  {...register("courseTitle" , {required : true})}></input>
        {
          errors.courseTitle && <p>Course Title is required</p>
        }
      </div>
      <div>
        <label>Course Short Description<CgAsterisk size={13}></CgAsterisk></label>
        <textarea placeholder="Enter Description" {...register("courseShortDesc" , {required : true})}></textarea>
        {
          errors.courseShortDesc&& <p>Course Description is required</p>
        }
      </div>
      <div className="addCourse_rupee_container">
        <label><HiCurrencyRupee color="grey" size={20}/>Course Price<CgAsterisk color="red" size={13}></CgAsterisk></label>
        <input type="number" placeholder="Enter Price" {...register("coursePrice",{required : true , valueAsNumber:true})}></input>
        {
          errors.coursePrice && <p>Course price is required</p>
        }
      </div>
      <div>
        <label>Category<CgAsterisk size={13}></CgAsterisk></label>
        <div className="addCourse_category_drop_down">
        <select {...register("courseCategory", { required: true })}>
          <option key={0}>
          {
            allCategories?.length>0 ?
            <span>Choose Course Category</span> : 
            <span>Loading...</span>
          }
          </option>
          {
            allCategories?.length > 0 && 
            allCategories?.map((category) => (
                <option key={category._id}>{category.name}</option>
            ))
          }
        </select>
        </div>
        {
          errors.courseCategory && <p>Course Category is required</p>
        }
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
        <div>
          <LectureUpload setValue={setValue}></LectureUpload>
        </div>
      </div>
      <div>
        <label>Benefits of the course<CgAsterisk size={13}></CgAsterisk></label>
        <textarea placeholder="Enter benefits of the course" {...register("courseBenefits" , {required : true})}></textarea>
        {
          errors.courseBenefits && <p>Course Benefits is Required</p>
        }
      </div>
      <div>
        <label>Requirements / Instructions<CgAsterisk size={13}></CgAsterisk></label>
        <textarea placeholder="Enter requirements of the course" {...register("courseRequirements" , {required : true})}></textarea>
        {
          errors.courseRequirements && <p>Course Requirements is Required</p>
        }
      </div>
      <div>
        {
          editCourse && 
          <button className="courseInformation_button_arrow">
          Continue without Saving</button>
        }
        <button type="submit" className="courseInformation_button_arrow">
          {editCourse ? "Save Changes" : "Next"}
          <FaChevronRight size={12}></FaChevronRight>
        </button>
      </div>
    </form>
  );
};

export default CourseInformation;
