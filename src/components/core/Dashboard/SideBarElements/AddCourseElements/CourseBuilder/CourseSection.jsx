import React, { useState } from "react"
import './CourseSection.css';
import { ImParagraphLeft } from "react-icons/im";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import ConfirmationalModal from "../../../../../common/ConfirmationalModal";
import CreateSubsectionModal from './CreateSubsectionModal';
import { createSectionBackendRequest } from "../../../../../../services/operations/course";


const CourseSection = ({eachSection , deleteHandler , nameEditSetupHandler , index}) => {

    const [allSectionSubSectionData , setAllSectionSubSectionData] = useState([]);
    const [subSectionVisibility ,  setSubSectionVisibility] = useState(false);
    const [confirmationModalVisibility , setConfirmationModalVisibility] = useState(false);
    const [viewSubsectionModal , setViewSubsectionModal] = useState(false); 
    

    function deleteSectionHandler(){
        deleteHandler(eachSection.id);
    }


  return (
    <div className="courseSection_eachSection">

        <div className="courseSection_eachSection_header">
            <div>
                <ImParagraphLeft></ImParagraphLeft>
                <p>{eachSection.title}</p>
            </div>
            <div>
                <div className="courseSection_edit_icon" onClick={() => nameEditSetupHandler({name : eachSection.title , index:index})}>
                    <MdModeEdit></MdModeEdit>
                </div>
                <div className="courseSection_delete_icon" onClick={() => 
                    setConfirmationModalVisibility(true)
                }>
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
                        allSectionSubSectionData?.map((eachSubSection) => (
                            <div>{eachSubSection}</div>
                        ))
                    }
                </div>
                <div className="courseSection_Subsection_addLecture" onClick={()=>setViewSubsectionModal(true)}><FaPlus></FaPlus>Add Lecture</div>
            </div>
        }
        </div>

        {
            confirmationModalVisibility && 
            <ConfirmationalModal setConfirmationModalVisibility={setConfirmationModalVisibility}
            text1={"Delete this Section ?"} text2={"All the lectures in this section will be deleted"} button1={"Delete"} button2={"Cancel"} confirmationFunctionality={deleteSectionHandler}></ConfirmationalModal>
        }

        {
            viewSubsectionModal && 
            <CreateSubsectionModal setViewSubsectionModal={setViewSubsectionModal}></CreateSubsectionModal>
        }

    </div>
  )
};

export default CourseSection;
