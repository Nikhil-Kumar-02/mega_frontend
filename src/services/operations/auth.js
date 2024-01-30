import { setLoading } from "../../reducers/slices/authSlice";
import { requestBackend } from "../apiConnector";
import { userAllRoutes } from "../apiRoutes";


export function getPasswordResetToken (email , setEmailSent){
    return async (dispatch) => {
        console.log('here in get password reset token')
        //first set loading to true until we send the email
        dispatch(setLoading(true));
        try {
            console.log('inside the try block')
            const responseFromapiConnector = await requestBackend("POST" , userAllRoutes.resetPasswordEmailSender , {email});
            console.log('response in auth : ' , responseFromapiConnector.data);
            setEmailSent(true);
        } catch (error) {
            console.log('error in services operations auth' , error);
        }
        //after the email is sent sucessfully remove the loader
        dispatch(setLoading(false));
    }
}
