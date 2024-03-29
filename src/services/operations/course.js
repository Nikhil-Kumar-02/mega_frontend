import toast from "react-hot-toast";
import { requestBackend } from "../apiConnector";
import { courseAllRoutes } from "../apiRoutes";
import {setCourse} from '../../reducers/slices/courseSlice'; 


export async function createANewCourseBackendRequest(formdata , token){
    let result = [];
    try {
        const toastId = toast.loading("Creating Course Please Wait ... ");
        const responseFromapiConnector = await requestBackend("POST" , courseAllRoutes.create_course , formdata , {Authorization : `Bearer ${token}`} , );

        if(!responseFromapiConnector.data){
            //means some error as if it was a ok response then .data will be available directly
            toast.dismiss(toastId);
            toast.error(responseFromapiConnector?.response?.data?.message);
        }
        else{
            //the user exists and he has been emailed with the url to update the password
            result = responseFromapiConnector?.data?.data;
            toast.dismiss(toastId);
            toast.success("Course Drafted Sucessfully");
        }
    } catch (error) {
        console.log('error in the operations course while creating a course : ' , error);
        toast.error("Something went wrong");
    }
    return result;
}

export function createSectionBackendRequest(data , token){
    return async (dispatch) => {
        let result = [];
        try {
            const toastId = toast.loading("Creating section ... ");
            const responseFromapiConnector = await requestBackend("POST" , courseAllRoutes.add_section , data , {Authorization : `Bearer ${token}`} , );

            if(!responseFromapiConnector.data){
                //means some error as if it was a ok response then .data will be available directly
                toast.dismiss(toastId);
                toast.error(responseFromapiConnector?.response?.data?.message);
            }
            else{
                dispatch(setCourse(responseFromapiConnector?.data?.updatedCourseDetails));     
                result = responseFromapiConnector?.data?.updatedCourseDetails?.courseContent;
                toast.dismiss(toastId);
            }

        } catch (error) {
            console.log('error while creating a section in operation course : ' , error);
            toast.error("Section not Created");
        }
        return result;
    } 
}


export function deleteSectionBackendRequest(data , token){
    return async (dispatch) => {
        try {
            const toastId = toast.loading("Deleting section ... ");
            const responseFromapiConnector = await requestBackend("POST" , courseAllRoutes.delete_section , data , {Authorization : `Bearer ${token}`} , );

            if(!responseFromapiConnector.data){
                //means some error as if it was a ok response then .data will be available directly
                toast.dismiss(toastId);
                toast.error(responseFromapiConnector?.response?.data?.message);
            }
            else{
                dispatch(setCourse(responseFromapiConnector?.data?.updatedCourseDetails));        
                toast.dismiss(toastId);
            }

        } catch (error) {
            console.log('error while deleting a section in operation course : ' , error);
            toast.error("Section not Deleted");
        }
    } 
}

export function updateSectionBackendRequest(data , token){
    return async (dispatch) => {
        try {
            const toastId = toast.loading("Updating section ... ");
            const responseFromapiConnector = await requestBackend("POST" , courseAllRoutes.update_section , data , {Authorization : `Bearer ${token}`} , );

            if(!responseFromapiConnector.data){
                //means some error as if it was a ok response then .data will be available directly
                toast.dismiss(toastId);
                toast.error(responseFromapiConnector?.response?.data?.message);
            }
            else{
                // dispatch(setCourse(responseFromapiConnector?.data?.));        
                toast.dismiss(toastId);
            }

        } catch (error) {
            console.log('error while updating a section in operation course : ' , error);
            toast.error("Section not Updated");
        }
    } 
}

export async function getcompleteCourseDetailsFromBackend(courseId){
    let result = [];
    try {
        const toastId = toast.loading("Loading ... ");
        const responseFromapiConnector = await requestBackend("POST" , courseAllRoutes.get_full_course_details , {courseId} , );

        if(!responseFromapiConnector.data){
            //means some error as if it was a ok response then .data will be available directly
            toast.dismiss(toastId);
            toast.error(responseFromapiConnector?.response?.data?.message);
        }
        else{
            // dispatch(setCourse(responseFromapiConnector?.data?.updatedCourseDetails));        
            toast.dismiss(toastId);
            result =  responseFromapiConnector?.data?.detailedCourseResponsecpy;
        }
        
    } catch (error) {
        console.log("error while fetching the complete course details : " , error);
        toast.error("Cannot fetch course");
    }
    return result;
}


export async function createSubSectionBackendRequest(data , token){
    let result = [];
    try {
        const toastId = toast.loading("Uploading lecture ... ");
        const responseFromapiConnector = await requestBackend("POST" , courseAllRoutes.add_sub_section , data , {Authorization : `Bearer ${token}`} , );

        if(!responseFromapiConnector.data){
            //means some error as if it was a ok response then .data will be available directly
            toast.dismiss(toastId);
            toast.error(responseFromapiConnector?.response?.data?.message);
        }
        else{
            // dispatch(setCourse(responseFromapiConnector?.data?.));   
            result = responseFromapiConnector?.data?.updatedSectionDetails?.subSection;     
            toast.dismiss(toastId);
            toast.success("Lecture Created");
        }
    } catch (error) {
        console.log('error while updating a section in operation course : ' , error);
        toast.error("Section not Updated");
    }
    return result;
}


export async function deleteSubSectionBackendRequest(data , token){
    try {
        const toastId = toast.loading("Deleting lecture ... ");
        const responseFromapiConnector = await requestBackend("POST" , courseAllRoutes.delete_sub_section , data , {Authorization : `Bearer ${token}`} , );

        if(!responseFromapiConnector.data){
            //means some error as if it was a ok response then .data will be available directly
            toast.dismiss(toastId);
            toast.error(responseFromapiConnector?.response?.data?.message);
        }
        else{
            toast.dismiss(toastId);
            toast.success("Lecture Deleted");
        }
    } catch (error) {
        console.log('error while updating a section in operation course : ' , error);
        toast.error("Section not Deleted");
    }
}

export async function updateSubSectionBackendRequest(data , token){
    try {
        const toastId = toast.loading("Updating ... ");
        const responseFromapiConnector = await requestBackend("POST" , courseAllRoutes.update_sub_section , data , {Authorization : `Bearer ${token}`} , );

        if(!responseFromapiConnector.data){
            //means some error as if it was a ok response then .data will be available directly
            toast.dismiss(toastId);
            toast.error(responseFromapiConnector?.response?.data?.message);
        }
        else{
            toast.dismiss(toastId);
            toast.success("Lecture updated");
        }
    } catch (error) {
        console.log('error while updating a section in operation course : ' , error);
        toast.error("Section not Updated");
    }
}

export async function getUserCoursesFromBackend(token){
    let result = [];
    try {
        const toastId = toast.loading("Loading ... ");

        const responseFromapiConnector = await requestBackend("GET" , courseAllRoutes.instructor_user_Courses , null , {Authorization : `Bearer ${token}`} , );

        toast.dismiss(toastId);
        if(!responseFromapiConnector.data){
            //means some error as if it was a ok response then .data will be available directly
            toast.error(responseFromapiConnector?.response?.data?.message);
        }
        else{
            result = responseFromapiConnector.data.userAllCourses;
        }

    } catch (error) {
        console.log("error while fetching the user courses" , error);
        toast.error("Cannot fetch courses");
    }
    return result;
}

export async function deleteCoursesFromBackend(data , token){
    let result = [];
    try {
        const toastId = toast.loading("Deleting ... ");

        const responseFromapiConnector = await requestBackend("POST" , courseAllRoutes.delete_instructor_Course , data , {Authorization : `Bearer ${token}`} , );

        if(!responseFromapiConnector.data){
            //means some error as if it was a ok response then .data will be available directly
            toast.dismiss(toastId);
            toast.error(responseFromapiConnector?.response?.data?.message);
        }
        else{
            result = responseFromapiConnector.data.userUpdatedCourses;
            toast.dismiss(toastId);
            toast.success("Course Deleted");
        }

    } catch (error) {
        console.log("error while deleting the user courses" , error);
        toast.error("Cannot delete course");
    }
    console.log("the data returning back to the mycourses is : " , result);
    return result;
}

export async function getCatelogCoursesFromBackend(categoryId , token , dispatch){
    let result = [];
    try {
        const toastId = toast.loading("Loading ... ");
        console.log('the url so created is : ' ,  `${courseAllRoutes.category_Page_Details}/${categoryId}`);
        const responseFromapiConnector = await requestBackend("GET" , `${courseAllRoutes.category_Page_Details}/${categoryId}` , null , {Authorization : `Bearer ${token}`} , );

        if(!responseFromapiConnector.data){
            //means some error as if it was a ok response then .data will be available directly
            toast.dismiss(toastId);
            toast.error(responseFromapiConnector?.response?.data?.message);
        }
        else{
            // result = responseFromapiConnector;
            dispatch(setCourse(responseFromapiConnector.data))
            result = responseFromapiConnector.data;
            toast.dismiss(toastId);
        }

    } catch (error) {
        console.log("error while getting a category courses" , error);
        toast.error("Not able to fetch Details");
    }
    return result;
}

