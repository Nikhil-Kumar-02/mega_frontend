import toast from "react-hot-toast";
import { setLoading , setToken , setSignupData } from "../../reducers/slices/authSlice";
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


export function backendLogInRequest(email , password , navigate){
    const toastId = toast.loading("Loading ... ")
    return async (dispatch) => {
        try {
            const responseFromapiConnector = await requestBackend("POST" , userAllRoutes.userLogIn , {email , password});
            console.log('response from login backend',responseFromapiConnector);
            if(!responseFromapiConnector?.data){
                //means not got a sucess result
                toast.dismiss(toastId);
                toast.error(responseFromapiConnector.response.data.message)
            }
            else{
                //got the positive response
                const dataRecieved = responseFromapiConnector.data;
                dispatch(setToken(dataRecieved.token));
                dispatch(setUser(dataRecieved.foundUser));
                localStorage.setItem("token" , dataRecieved.token);
                localStorage.setItem("user" , JSON.stringify(dataRecieved.foundUser));
                toast.dismiss(toastId);
                toast.success("LogIn Sucessful");
                navigate('/');
            }
        } catch (error) {
            console.log('error while trying to logging in : ',error)
        }
    }
}

export function userLogout(navigate){
    const toastId = toast.loading("Logging Out ....")
    return async (dispatch) => {
        //remove the instance from the user global store and local storage
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch(setToken(null));
        dispatch(setUser(null));
        toast.dismiss(toastId);
        toast.success("User Logged Out Sucessfully");
        navigate("/");
    }
}


export function userSignUpRequestForBackend(navigate , data){
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const toastId = toast.loading("Loading ... ");
            //what ever data is recieved put it in the user global storage that is redux slice
            const responseFromapiConnector = await requestBackend("POST" , userAllRoutes.sendOtpForEmailVerification , {email : data.email});
            console.log('response from sign up backend',responseFromapiConnector);
            if(!responseFromapiConnector?.data){
                //means not got a sucess result
                toast.dismiss(toastId);
                toast.error(responseFromapiConnector.response.data.message)
            }
            else{
                //got the positive response
                dispatch(setSignupData(data));
                toast.dismiss(toastId);
                toast.success("Otp Sent For Email Verification");
                navigate('/enterOtp');
            }
        } catch (error) {
            console.log("error in the operations auth " , error);
            toast.error("Error while Signing Up");
        }
        dispatch(setLoading(false));
    }
}

export function createUser_SignUp_ForBackend(navigate , userDetails){
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const toastId = toast.loading("Verifying OTP ......");

            //have to send all user data to the backend for verification and creation of account

            const responseFromapiConnector = await requestBackend("POST" , userAllRoutes.userSignUp , userDetails);
            console.log('response from sign up backend',responseFromapiConnector);
            if(!responseFromapiConnector?.data){
                //means not got a sucess result
                toast.dismiss(toastId);
                toast.error(responseFromapiConnector.response.data.message)
            }
            else{
                //got the positive response
                toast.dismiss(toastId);
                toast.success("Account Created");
                navigate("/logIn");
            }

            
        } catch (error) {
            console.log("error while trying to verify otp in operations auth");
            toast.error("Error Verifying OTP")
        }
        dispatch(setLoading(false));
    }
}

export function resetExistingUserPassword(navigate , data){
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const toastId = toast.loading("Working on it ... ");

            //send request to the backed reset password handler
            const responseFromapiConnector = await requestBackend("POST" , userAllRoutes.Reset_user_forgotted_password , data);
            console.log('response from reset password backend',responseFromapiConnector);
            if(!responseFromapiConnector?.data){
                //means not got a sucess result
                toast.dismiss(toastId);
                toast.error(responseFromapiConnector.response.data.message)
            }
            else{
                //got the positive response
                toast.dismiss(toastId);
                toast.success(responseFromapiConnector.data.message);
                navigate("/logIn");
            }

        } catch (error) {
            console.log('error in reset existing user password operation auth' , error);
            toast.error("Cannot Reset Password");
        }
        dispatch(setLoading(false));
    }
}