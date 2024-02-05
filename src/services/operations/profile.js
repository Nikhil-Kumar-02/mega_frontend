import toast from "react-hot-toast";
import { setLoading as setAuthLoading  } from "../../reducers/slices/authSlice";
import { requestBackend } from "../apiConnector";
import { profileAllRoutes } from "../apiRoutes";
import {setUser , setLoading as setProfileLoading} from '../../reducers/slices/profileSlice';
import { userLogout } from "./auth";

export function loadUserAdditionalDetailsFromBackend(navigate , token){
    const toastId = toast.loading("Loading ... ");
    
    return async (dispatch) => {
        dispatch(setAuthLoading(true));
        dispatch(setProfileLoading(true));
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
                console.log('user additional details : ' , responseFromapiConnector);
                toast.dismiss(toastId);
                dispatch(setUser(responseFromapiConnector.data.userFullDetails));
                localStorage.setItem("user" , JSON.stringify(responseFromapiConnector.data.userFullDetails));
                navigate('/dashboard/my-profile');
            }
            
        } catch (error) {
            console.log("error in operations profile" , error);
            toast.error("Cannot open Profile")
        }
        dispatch(setAuthLoading(false));
        dispatch(setProfileLoading(false));

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
        dispatch(setAuthLoading(false));
        dispatch(setProfileLoading(false));

    }
}