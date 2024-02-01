import React, { useState } from "react"
import './ContactUs.css';
import ButtonComponent from '../components/core/home/buttonComponent';
import {sendEmailFromUser}  from '../services/operations/otherOperations';
import Footer from "../components/common/Footer";
import { TiMessages } from "react-icons/ti";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { IoCall } from "react-icons/io5";

const ContactUs = (props) => {

    const [formDetails , setFormDetails] = useState({});

    function changeHandler(e){
        setFormDetails((prev)=>(
            {...prev , [e.target.name] : e.target.value}
        ))
    }

    function submitHandler(e){
        e.preventDefault();
        console.log(formDetails)
        sendEmailFromUser(formDetails);
    }

  return (
    <div>
        <div className="contact_wrapper">
            <div className="contact_section1">
                <div className="contact_section1_connections">
                    <div>
                        <div><TiMessages></TiMessages></div>
                        <div>
                            <h4>Chat on us</h4>
                            <p>Our friendly team is here to help.</p>
                            <p>@mail address</p>
                        </div>
                    </div>
                    <div>
                        <div><BsGlobeCentralSouthAsia></BsGlobeCentralSouthAsia></div>
                        <div>
                            <h4>Visit Us</h4>
                            <p>Come and say hello at our office HQ.</p>
                            <p>Here is the location address</p>
                        </div>
                    </div>
                    <div>
                        <div><IoCall></IoCall></div>
                        <div>
                            <h4>Call Us</h4>
                            <p>Mon - Fri from 8am to 5pm</p>
                            <p>+1234 56789</p>
                        </div>
                    </div>
                </div>

                <div className="contact_section1_form">
                    <h1>Got an idea? We've got the skills. Let's  team up</h1>
                    <p>Tell us more about yourself and what you have got in your mind.</p>
                    <form onSubmit={submitHandler}>
                        <div>
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input id="firstName" type="text" placeholder="Enter First Name" name="firstName" onChange={changeHandler}></input>
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input id="lastName" type="text" placeholder="Enter Last Name" name="lastName" onChange={changeHandler}></input>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input id="email" type="text" placeholder="Enter Email Address" name="email" onChange={changeHandler}></input>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <div>
                                <select name="countryCode" onChange={changeHandler}>
                                    <option>+91</option>
                                    <option>+880</option>
                                    <option>+997</option>
                                    <option>+92</option>
                                    <option>+94</option>
                                </select>
                                <input type="text" placeholder="12345 67890" id="phone" name="phoneNumber" onChange={changeHandler}></input>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" placeholder="Enter Your message" name="userMessage" onChange={changeHandler}></textarea>
                        </div>
                        <div onClick={submitHandler}>
                            <ButtonComponent active={true}>Send Message</ButtonComponent>
                        </div>
                    </form>
                </div>
            </div>

            <div className="contact_section2">
                <h1>Review from other learners</h1>
                <div>

                </div>
            </div>  

        </div>
        <div className="contact_footer">
            <Footer></Footer>
        </div>
    </div>
  )
};

export default ContactUs;
