import React, { useRef, useState } from "react"
import './LectureUpload.css';
import { PiCloudArrowUpBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

const LectureUpload = ({setValue , attributeName}) => {

    const inputRef = useRef(null);
    const [selectedFile , setSelectedFile] = useState(null);
    const [isDraggedInside , setIsDraggedInside] = useState(false);

    function inputClickHandler(){
        if(inputRef.current){
            inputRef.current.click();
        }
    }

    function inputChangeHandler(e){
        const file = e.target.files[0];
        setSelectedFile(file);
        setValue(attributeName , file);
    }

    function dropHandler(e){
        e.preventDefault();
        // e.stopPropagation();
        const file = e.dataTransfer.files[0];
        setSelectedFile(file);
        setIsDraggedInside(false);
    }

    function dragEnterHandler(e){
        e.preventDefault();
        setIsDraggedInside(true);
        console.log("dragged inside")
    }

    function dragLeaveHandler(e){
        e.preventDefault();
        setIsDraggedInside(false);
        console.log('moved out');
    }

  return (
    <div className={`LectureUpload_wrapper ${isDraggedInside ? "Dragged_inside_Lecture_Upload" : ""}`}  onDrop={dropHandler} onDragOver={(e) => e.preventDefault()}
        onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler}>
        <input type="file" placeholder="Drag and Drop or Choose" ref={inputRef} onChange={inputChangeHandler}></input>

        <div onClick={inputClickHandler}>
            <PiCloudArrowUpBold size={30} color="yellow"></PiCloudArrowUpBold>
        </div>

        {
            selectedFile && <div className="LectureUpload_file_wrapper">
            {selectedFile.name}
            <span onClick={() => {
                if(inputRef.current){
                    inputRef.current.value = "";
                }
                setSelectedFile(null);
                setValue(attributeName , null);
            }}><RxCross2></RxCross2></span>
            </div>
        }

        <div>Drag and drop , <span onClick={inputClickHandler}>Browse</span></div>
        <div>Max 6MB each (12MB for videos)</div>

        <div>
            <ul>
                <li>Aspect ratio 16 : 9</li>
                <li>Recommended size 1024x576</li>
            </ul>
        </div>
    </div>
  )
};

export default LectureUpload;
