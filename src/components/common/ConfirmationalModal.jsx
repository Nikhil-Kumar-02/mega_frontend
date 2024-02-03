import React from "react"
import './ConfirmationalModal.css';
import ButtonComponent from "../core/home/buttonComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../../services/operations/auth";

const ConfirmationalModal = ({setConfirmationModalVisibility}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

  return (
    <div className="ConfirmationalModal_wrapper">
      <div>
        <h3>Are You Sure ?</h3>
        <h5>You will be logged out of your account.</h5>
        <div>
          <div onClick={()=>{
              dispatch(userLogout(navigate));
          }}>
              <ButtonComponent active={true}>LogOut</ButtonComponent>
          </div>
          <div onClick={()=>{
              setConfirmationModalVisibility(false)
          }}>
              <ButtonComponent active={false}>Cancel</ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ConfirmationalModal;
