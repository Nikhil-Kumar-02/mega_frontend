import React, { useState } from "react"
import './Cart.css'
import { useSelector } from "react-redux";

const Cart = (props) => {

  const {cartItems , totalItems} = useSelector((state) => state.cart);
  const [cart , setCart] = useState([]);
  console.log('the cart is : ' , cartItems , totalItems);

  return (
    <div className="cart_wrapper">
      <div>
        <h1>My Cart</h1>
        <br></br>
        <br></br>
        <div>
          <p style={{fontSize : '1.5rem'}}>x courses in the cart</p>
        </div>
        <br></br>
        <hr></hr>
        <br></br>

        {
          cart?.length === 0 ? (<div style={{fontSize : '2rem' , textAlign:'center'}}>Your cart is Empty</div>) : 
          (
            <div>
              <div>
                  
              </div>
              <div></div>
            </div>
          )
        }
        
      </div>
    </div>
  )
};

export default Cart;
