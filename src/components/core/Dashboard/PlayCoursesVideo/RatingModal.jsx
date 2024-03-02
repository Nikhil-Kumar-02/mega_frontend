import React, { useState } from "react";
import './RatingModal.css';
import { useSelector } from "react-redux";
import ButtonComponent from "../../home/buttonComponent";
import { RxCross2 } from "react-icons/rx";
import StarRating from "./StarRating";

const RatingModal = ({setRatingModal}) => {

  const user = useSelector((state) => state.profile.user);
  const [rating, setRating] = useState(0);
  console.log("the rating is : " , rating);


  return (
    <div className="RatingModal_wrapper">
      <div>

        <div>
          <h2>Add Review</h2>
          <div onClick={()=>setRatingModal(false)}><RxCross2></RxCross2></div>
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
            <StarRating setRating={setRating}></StarRating>
          </div>

        </div>

        <div>
          <label htmlFor="ratingModel_Coment">Add Your Experience</label>
          <textarea id="ratingModel_Coment" placeholder="Add Your Experience"></textarea>
        </div>

        <div>
          <div onClick={()=>setRatingModal(false)}><ButtonComponent active={false} >Cancel</ButtonComponent></div>
          <div><ButtonComponent active={true} >Save</ButtonComponent></div>
        </div>

      </div>
    </div>
  )
};

export default RatingModal;
