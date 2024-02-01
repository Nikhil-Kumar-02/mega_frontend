import toast from "react-hot-toast";
import { requestBackend } from "../apiConnector";
import { otherRoutes } from "../apiRoutes";


export const sendEmailFromUser = async (data) => {
    const toastId = toast.loading("Sending Mail ... ");
    try {
        const email = data.email;
        const firstName = data.firstName;
        const lastName = data.lastName;
        const message = data.userMessage;
        const phoneNumber = data.phoneNumber;

        const mailBody = `From ${firstName} ${lastName}\n
                        Mobile Number : ${phoneNumber}\n
                        Message : ${message}`;

        const responseFromapiConnector = await requestBackend("POST" , otherRoutes.sendMail , {email , mailBody});
        if(!responseFromapiConnector.data){
            //means some error as if it was a ok response then .data will be available directly
            toast.dismiss(toastId);
            toast.error(responseFromapiConnector?.response?.data?.message);
        }
        else{
            toast.dismiss(toastId);
            toast.success("Email Sent Sucessfully")
        }
        
    } catch (error) {
        console.log('error while sending mail in otherOperations ' , error);
        toast.error("Mail not Send");
    }
}