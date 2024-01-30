import toast from "react-hot-toast";
import { setLoading } from "../../reducers/slices/authSlice";
import { requestBackend } from "../apiConnector";
import { userAllRoutes } from "../apiRoutes";


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
            console.log('error in services operations auth' , error);
        }
        //after the email is sent sucessfully remove the loader
        dispatch(setLoading(false));
    }
}
