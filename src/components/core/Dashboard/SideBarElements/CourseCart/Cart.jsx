import React, { useState } from "react"
import './Cart.css'
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { buyCourse } from "../../../../../services/operations/StudentFeaturesAPI";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {

  const {cartItems , totalItems , totalPrice} = useSelector((state) => state.cart);
  const userDetails = useSelector((state) => state.profile.user);
  const token = useSelector((state)=> state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function buyCourseClickHandler(){
    //here we are buying individual courses so we will the individual courseid in the array as a 
    //list of all courses we want to buy
    if(token){
        const responseFromServices = await buyCourse(token , cartItems , userDetails , navigate , dispatch);
        console.log('responseFromServices ' , responseFromServices);
    }
    else{
        //person is not logged in and he is trying to buy the course
        navigate("/logIn");
    }
}

  return (
    <div className="cart_wrapper">
      <div>
        <h1>My Cart</h1>
        <br></br>
        <br></br>
        <div>
          <p style={{fontSize : '1.5rem'}}>{totalItems} courses in the cart</p>
        </div>
        <br></br>
        <hr></hr>
        <br></br>

        {
          cartItems?.length === 0 ? (<div style={{fontSize : '2rem' , textAlign:'center'}}>Your cart is Empty</div>) : 
          (
            <div className="Cart_course_wrapper">
              <div>
              {
                cartItems?.map((courseId) => (
                  <CartCard courseId={courseId} ></CartCard>
                ))
              }
              </div>
              <div>
                <h2>Total</h2>
                <div>₹ {totalPrice}</div>
                <button onClick={() => {buyCourseClickHandler()}}>Buy Now</button>
              </div>
            </div>
          )
        }
        
      </div>
    </div>
  )
};

export default Cart;
