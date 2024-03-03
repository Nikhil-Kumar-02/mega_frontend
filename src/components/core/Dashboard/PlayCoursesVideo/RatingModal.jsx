import React, { useState } from "react";
import './RatingModal.css';
import { useSelector } from "react-redux";
import ButtonComponent from "../../home/buttonComponent";
import { RxCross2 } from "react-icons/rx";
import StarRating from "./StarRating";
import { useForm } from "react-hook-form";
import { addCourseRandRFromBackend } from "../../../../services/operations/ratingAndReview";

const RatingModal = ({setRatingModal , courseId}) => {

  const {register , handleSubmit , getValues , setValue , formState : {errors}} = useForm();

  const user = useSelector((state) => state.profile.user);
  const [rating, setRating] = useState(0);
  const token = useSelector((state) => state.auth.token);

  function submitHandler(){
    
    setValue("rating" , rating);
    const currentValues = getValues();
    console.log(currentValues)
    const formData = new FormData();

    formData.append("rating" , currentValues.rating);
    formData.append("review" , currentValues.review);
    formData.append("courseId" , courseId);

    addCourseRandRFromBackend(token,formData);
    setRatingModal(false);
  }

  return (
    <div className="RatingModal_wrapper">
      <form onSubmit={handleSubmit(()=>submitHandler())} className="RatingModal_wrapper_form">
        <div>
          <h2>Add Review</h2>
          <div onClick={()=>setRatingModal(false)}><RxCross2 size={20}></RxCross2></div>
        </div>

        <div>

          <div>
            <img src={user?.image}></img>
            <div>
              <p>{user?.firstName} {"  "} {user?.lastName}</p>
              <p>Posting Publicly</p>
            </div>
          </div>

          <div>
            <StarRating setRating={setRating} register={register} setValue={setValue}></StarRating>
          </div>

        </div>

        <div>
          <label htmlFor="ratingModel_Coment">Add Your Experience</label>
          <textarea id="ratingModel_Coment" placeholder="Add Your Experience" {...register("review" , {required : true})}></textarea>
          {
            errors.review && <p>Review feild is required</p>
          }
        </div>

        <div>
          <div onClick={()=>setRatingModal(false)}><ButtonComponent active={false} >Cancel</ButtonComponent></div>
          <div onClick={() => {
            submitHandler()
            }}><ButtonComponent active={true} >Save</ButtonComponent></div>
        </div>

      </form>
    </div>
  )
};

export default RatingModal;
