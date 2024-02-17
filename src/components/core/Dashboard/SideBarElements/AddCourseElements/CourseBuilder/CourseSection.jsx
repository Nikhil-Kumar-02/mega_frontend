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


const CourseSection = ({eachSection , deleteHandler , nameEditSetupHandler , index}) => {

    const [subSectionData , setSubSectionData] = useState([]);
    const [subSectionVisibility ,  setSubSectionVisibility] = useState(false);
    const [confirmationModalVisibility , setConfirmationModalVisibility] = useState(false);
    const [viewSubsectionModal , setViewSubsectionModal] = useState(false); 
    
    console.log('the subsection data is : ' , subSectionData)

    function deleteSectionHandler(){
        console.log("section to be deleted id : " , eachSection);
        setConfirmationModalVisibility(false);
        deleteHandler(eachSection?.id);
    }

    function deleteSubsectionHandler(id){
        setSubSectionData((prev) => (
            prev.filter((eachSubSection) => (eachSubSection.id !== id))
        ))
    }

    function editSubSectionHandler(){
        
    }


  return (
    <div className="courseSection_eachSection">

        <div className="courseSection_eachSection_header">
            <div>
                <ImParagraphLeft></ImParagraphLeft>
                <p>{eachSection?.sectionName}</p>
            </div>
            <div>
                <div className="courseSection_edit_icon" onClick={() => nameEditSetupHandler({name : eachSection.sectionName , index:index , id:eachSection.id})}>
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

        <div className="courseSection_Subsection_wrapper">
        {
            subSectionVisibility && 
            <div>
                <div className="courseSection_Subsection">
                    {
                        subSectionData?.map((eachSubSection , index) => (
                            <div>
                                <span>
                                    <ImParagraphLeft></ImParagraphLeft>
                                    {eachSubSection.title}
                                </span>
                                <span>
                                    <span onClick={() => {
                                        editSubSectionHandler()
                                    }}><MdModeEdit></MdModeEdit></span>
                                    <span onClick={() => {
                                        deleteSubsectionHandler(eachSubSection.id)
                                    }}><MdDelete></MdDelete></span>
                                </span>
                            </div>
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
            <CreateSubsectionModal setViewSubsectionModal={setViewSubsectionModal} setSubSectionData={setSubSectionData} sectionId={eachSection.id}></CreateSubsectionModal>
        }

    </div>
  )
};

export default CourseSection;
