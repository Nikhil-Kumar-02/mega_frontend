import React from "react";
import './RatingModal.css';
import { useSelector } from "react-redux";
import ButtonComponent from "../../home/buttonComponent";
import { RxCross2 } from "react-icons/rx";

const RatingModal = ({setRatingModal}) => {

  const user = useSelector((state) => state.profile.user);
  console.log('the user is : ' , user);

  return (
    <div className="RatingModal_wrapper">
      <div>

        <div>
          <h3>Add Review</h3>
          <div><RxCross2></RxCross2></div>
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
            stars component
          </div>

        </div>

        <div>
          <label htmlFor="ratingModel_Coment">Add Your Experience</label>
          <textarea id="ratingModel_Coment" placeholder="Add Your Experience"></textarea>
        </div>

        <div>
          <div><ButtonComponent active={false} >Cancel</ButtonComponent></div>
          <div><ButtonComponent active={true} >Save</ButtonComponent></div>
        </div>

      </div>
    </div>
  )
};

export default RatingModal;
