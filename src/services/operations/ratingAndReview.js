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