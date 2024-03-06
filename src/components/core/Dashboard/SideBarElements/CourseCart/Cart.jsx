import React, { useState } from "react"
import './Cart.css'
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const Cart = (props) => {

  const {cartItems , totalItems , totalPrice} = useSelector((state) => state.cart);

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
                <button>Buy Now</button>
              </div>
            </div>
          )
        }
        
      </div>
    </div>
  )
};

export default Cart;
