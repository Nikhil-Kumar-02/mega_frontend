import toast from "react-hot-toast";
import { requestBackend } from "../apiConnector";
import { courseAllRoutes } from "../apiRoutes";

export async function createANewCourseBackendRequest(formdata , token){
    try {
        const toastId = toast.loading("Creating Your drafted Course Please Wait ... ");
        const responseFromapiConnector = await requestBackend("POST" , courseAllRoutes.create_course , formdata , {Authorization : `Bearer ${token}`} , );

        if(!responseFromapiConnector.data){
            //means some error as if it was a ok response then .data will be available directly
            toast.dismiss(toastId);
            toast.error(responseFromapiConnector?.response?.data?.message);
        }
        else{
            //the user exists and he has been emailed with the url to update the password
            toast.dismiss(toastId);
            toast.success("Course Drafted Sucessfully")
        }
    } catch (error) {
        console.log('error in the operations course while creating a course : ' , error);
        toast.error("Something went wrong");
    }
}