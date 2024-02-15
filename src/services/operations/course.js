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
            result = responseFromapiConnector.data.data;
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
                toast.dismiss(toastId);
            }

        } catch (error) {
            console.log('error while creating a section in operation course : ' , error);
            toast.error("Section not Created");
        }
    } 
}

export async function getcompleteCourseDetailsFromBackend(data){
    try {
        const toastId = toast.loading("Loading ... ");
        const responseFromapiConnector = await requestBackend("GET" , courseAllRoutes.get_full_course_details , data , );

        if(!responseFromapiConnector.data){
            //means some error as if it was a ok response then .data will be available directly
            toast.dismiss(toastId);
            toast.error(responseFromapiConnector?.response?.data?.message);
        }
        else{
            console.log("fetched complete course details : " , responseFromapiConnector?.data);
            // dispatch(setCourse(responseFromapiConnector?.data?.updatedCourseDetails));        
            toast.dismiss(toastId);
        }
        
    } catch (error) {
        console.log("error while fetching the complete course details : " , error);
        toast.error("Cannot fetch course");
    }
}