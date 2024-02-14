import React from "react"
import './ConfirmationalModal.css';
import ButtonComponent from "../core/home/buttonComponent";

const ConfirmationalModal = ({setConfirmationModalVisibility , 
  text1 , text2 , button1 , button2 , confirmationFunctionality}) => {

  return (
    <div className="ConfirmationalModal_wrapper">
      <div>
        <h4>{text1}</h4>
        <p>{text2}</p>
        <div>
          <div onClick={()=>{
            confirmationFunctionality();
          }}>
              <ButtonComponent active={true}>{button1}</ButtonComponent>
          </div>
          <div onClick={()=>{
              setConfirmationModalVisibility(false)
          }}>
              <ButtonComponent active={false}>{button2}</ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ConfirmationalModal;
