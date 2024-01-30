import toast from "react-hot-toast";
import { setLoading , setToken } from "../../reducers/slices/authSlice";
import { requestBackend } from "../apiConnector";
import { userAllRoutes } from "../apiRoutes";
import {setUser} from '../../reducers/slices/profileSlice'



export function getPasswordResetToken (email , setEmailSent){
    return async (dispatch) => {
        //first set loading to true until we send the email
        dispatch(setLoading(true));
        try {
            const responseFromapiConnector = await requestBackend("POST" , userAllRoutes.resetPasswordEmailSender , {email});
            if(!responseFromapiConnector.data){
                //means some error as if it was a ok response then .data will be available directly
                toast.error(responseFromapiConnector?.response?.data?.message);
            }
            else{
                //the user exists and he has been emailed with the url to update the password
                toast.success("Email Sent Sucessfully")
                setEmailSent(true);
            }
        } catch (error) {
            toast.error('An error occurred during login');
            console.log('error in services operations auth' , error);
        }
        //after the email is sent sucessfully remove the loader
        dispatch(setLoading(false));
    }
}


export function backendLogInRequest(email , password){
    return async (dispatch) => {
        try {
            const responseFromapiConnector = await requestBackend("POST" , userAllRoutes.userLogIn , {email , password});
            console.log('response from login backend',responseFromapiConnector);
            if(!responseFromapiConnector?.data){
                //means not got a sucess result
                toast.error(responseFromapiConnector.response.data.message)
            }
            else{
                //got the positive response
                toast.success("LogIn Sucessful");
                const dataRecieved = responseFromapiConnector.data;
                console.log(dataRecieved);
                dispatch(setToken(dataRecieved.token));
                dispatch(setUser(dataRecieved.foundUser));
                localStorage.setItem("token" , dataRecieved.token);

            }
        } catch (error) {
            console.log('error while trying to logging in : ',error)
        }
    }
}