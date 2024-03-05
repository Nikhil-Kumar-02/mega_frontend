import toast from "react-hot-toast";
import { requestBackend } from "../apiConnector";
import { RatingRoutes } from "../apiRoutes";

export async function addCourseRandRFromBackend(token , data){
    const toastId = toast.loading("Loading ... ");
    try {
        const responseFromApiConnector = await requestBackend("POST" , RatingRoutes.create_Rating , data , {Authorization : `Bearer ${token}`} , );

        console.log("the response after creating r r : " , responseFromApiConnector);
        if(!responseFromApiConnector.data){
            toast.dismiss(toastId);
            toast.error(responseFromApiConnector?.response?.data?.message);
            return;
        }
        toast.dismiss(toastId);
        toast.success("Thank You for Giving Views");
    } catch (error) {
        console.log("Error occured while creating a rating and review");
        toast.error("Rating not created ")
    }
}


export async function markSubsectionFromBackend(token , data){
    const toastId = toast.loading("Loading ... ");
    try {
        const responseFromApiConnector = await requestBackend("POST" , RatingRoutes.mark_Subsection , data , {Authorization : `Bearer ${token}`} , );

        if(!responseFromApiConnector.data){
            toast.dismiss(toastId);
            toast.error(responseFromApiConnector?.response?.data?.message);
            return;
        }
        console.log("the updated course progress is : " , responseFromApiConnector);
        toast.dismiss(toastId);
        // toast.success("Marked");
        return responseFromApiConnector;        
    } catch (error) {
        console.log("Error occured while marking a course subsection");
        toast.error("Not Marked");
    }
}