import React, { useRef, useState } from "react"
import './LectureUpload.css';
import { MdCloudDone } from "react-icons/md";
import { PiCloudArrowUpBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

const LectureUpload = (props) => {

    const inputRef = useRef(null);
    const [selectedFile , setSelectedFile] = useState(null);
    console.log(selectedFile);

    function inputClickHandler(){
        if(inputRef.current){
            inputRef.current.click();
            console.log(inputRef.current.value);
        }
    }

    function inputChangeHandler(e){
        const file = e.target.files[0];
        setSelectedFile(file)
    }

    function dropHandler(e){
        e.preventDefault();
        // e.stopPropagation();
        console.log("the area has been dragged with something ..   " , e.dataTransfer.files[0]);
        const file = e.dataTransfer.files[0];
        setSelectedFile(file)
    }


  return (
    <div className="LectureUpload_wrapper" onDrop={dropHandler} 
        onDragOver={(e) => e.preventDefault()}>
        <input type="file" placeholder="Drag and Drop or Choose" ref={inputRef} onChange={inputChangeHandler}></input>

        <div onClick={inputClickHandler}>
            <PiCloudArrowUpBold size={30} color="yellow"></PiCloudArrowUpBold>
        </div>

        {
            selectedFile && <div className="LectureUpload_file_wrapper">
            {selectedFile.name}
            <span onClick={() => {setSelectedFile(null)}}><RxCross2></RxCross2></span>
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
