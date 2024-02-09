import React, { useState } from "react"
import './CourseSection.css';
import { ImParagraphLeft } from "react-icons/im";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const CourseSection = ({eachSection , deleteHandler}) => {

    const [subSection , setSubSection] = useState([]);
    const [subSectionVisibility ,  setSubSectionVisibility] = useState(false);
    function calldeleteHandler(id){
        deleteHandler(id);
    }    


  return (
    <div className="courseSection_eachSection" key={eachSection.id}>

        <div className="courseSection_eachSection_header">
            <div>
                <ImParagraphLeft></ImParagraphLeft>
                <p>{eachSection.title}</p>
            </div>
            <div>
                <MdModeEdit></MdModeEdit>
                <div className="courseSection" onClick={() => {
                calldeleteHandler(eachSection.id)
                }}>
                    <MdDelete></MdDelete>
                </div>
                <span></span>
                <div className="courseSection_dropDown" onClick={() => setSubSectionVisibility((prev) => !prev)}>
                {
                    subSectionVisibility ? (<IoMdArrowDropdown></IoMdArrowDropdown>) : (<IoMdArrowDropup></IoMdArrowDropup>)
                }
                </div>
            </div>
        </div>

        <div className="courseSection_Subsection">
        {
            subSectionVisibility && 
            <div>
                <div>
                    {
                        subSection?.map((eachSubSection) => (
                            <div>{eachSubSection}</div>
                        ))
                    }
                </div>
                <div className="courseSection_Subsection_addLecture"><FaPlus></FaPlus>Add Lecture</div>
            </div>
        }
        </div>

    </div>
  )
};

export default CourseSection;
