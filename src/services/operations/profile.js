import toast from "react-hot-toast";
import { requestBackend } from "../apiConnector";
import { profileAllRoutes } from "../apiRoutes";
import { userAllRoutes } from "../apiRoutes";
import {setUser , setLoading} from '../../reducers/slices/profileSlice';
import { userLogout } from "./auth";

export function loadUserAdditionalDetailsFromBackend(navigate , token){
    const toastId = toast.loading("Loading ... ");
    
    return async (dispatch) => {
        try {
            const responseFromapiConnector = await requestBackend('GET' , profileAllRoutes.get_All_User_Details , null , {Authorization : `Bearer ${token}`} ,);
            
            if(!responseFromapiConnector.data){
                //means some error as if it was a ok response then .data will be available directly
                //also check if in the error message token was expired or not if yes
                //then log out the user
                toast.dismiss(toastId);
                toast.error(responseFromapiConnector?.response?.data?.message);
                if(responseFromapiConnector?.response?.data?.message === "Token Expired"){
                    dispatch(userLogout(navigate , "/logIn"));
                }
            }
            else{
                //the user exists and he has been emailed with the url to update the password
                toast.dismiss(toastId);
                console.log('user additional details : ' , responseFromapiConnector);
                dispatch(setUser(responseFromapiConnector.data.userFullDetails));
                localStorage.setItem("user" , JSON.stringify(responseFromapiConnector.data.userFullDetails));
            }
            
        } catch (error) {
            console.log("error in operations profile" , error);
            toast.error("Cannot open Profile")
        }
    }
}

export function update_Profile_Data(navigate , token , data){
    const toastId = toast.loading("Loading ... ");
    
    return async (dispatch) => {
        try {
            const responseFromapiConnector = await requestBackend('PUT' , profileAllRoutes.update_Profile_Data , data , {Authorization : `Bearer ${token}`} ,);
            
            if(!responseFromapiConnector.data){
                //means some error as if it was a ok response then .data will be available directly

                //also check if in the error message token was expired or not if yes
                //then log out the user
                toast.dismiss(toastId);
                toast.error(responseFromapiConnector?.response?.data?.message);
                if(responseFromapiConnector?.response?.data?.message === "Token Expired"){
                    dispatch(userLogout(navigate , "/logIn"));
                }
            }
            else{
                //the user exists and he has been emailed with the url to update the password
                console.log('user additional details : ' , responseFromapiConnector);
                toast.dismiss(toastId);
                navigate('/dashboard/my-profile');
            }
            
        } catch (error) {
            console.log("error in operations profile" , error);
            toast.error("Cannot open Profile")
        }
        dispatch(setLoading(false));

    }
}

export function updateUserPasswordFromBackend(currentPassword , newPassword , token){
    return async (dispatch) => {
        const toastId = toast.loading("Working On It .... Please Wait");
        try {
            const responseFromapiConnector = await requestBackend("PUT" , userAllRoutes.update_Password , {currentPassword , newPassword} , {Authorization : `Bearer ${token}`});

            if(!responseFromapiConnector.data){
                //means some error as if it was a ok response then .data will be available directly
                toast.dismiss(toastId);
                toast.error(responseFromapiConnector?.response?.data?.message);
            }
            else{
                //the user exists and he has been emailed with the url to update the password
                toast.dismiss(toastId);
                toast.success("Your Password has been Updated Sucessfully")
            }

        } catch (error) {
            console.log('error in operations profile ' , error);
            toast.error("Error while Updating Password");
        }
    }
}

export async function getUserEnrolledCourses(token){
    try {
        const toastId = toast.loading("Loading Enrolled Courses ... ");

        const responseFromapiConnector = await requestBackend("GET" , profileAllRoutes.get_User_Enrolled_Courses , null , {Authorization : `Bearer ${token}`},);

        if(!responseFromapiConnector.data){
            //means some error as if it was a ok response then .data will be available directly
            toast.dismiss(toastId);
            toast.error(responseFromapiConnector?.response?.data?.message);
        }
        else{
            //so set this course
            toast.dismiss(toastId);
            return responseFromapiConnector?.data?.userEnrolledCourses;
        }
        
    } catch (error) {
        console.log('error in operations profile while fetching user enrolled courses ' ,error);
        toast.error("Error while fetching your Courses")
    }
}