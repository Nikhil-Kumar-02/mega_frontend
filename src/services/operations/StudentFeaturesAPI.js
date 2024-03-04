import { toast } from "react-hot-toast";
import { requestBackend } from "../apiConnector";
import rzpLogo from '../../assets/rzp_logo.png';
import { setPaymentLoading } from "../../reducers/slices/courseSlice";
// import { resetCart } from "../../slices/cartSlice";
import { PaymentRoutes } from "../apiRoutes";
import { dotenv } from "../../dotenv";


const {Capture_payment , Verify_Payment} = PaymentRoutes;

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;

        script.onload = () => {
            resolve(true);
        }
        script.onerror= () =>{
            resolve(false);
        }
        document.body.appendChild(script);
    })
}


export async function buyCourse(token, courses, userDetails, navigate, dispatch) {
    const toastId = toast.loading("Loading...");
    try{
        //load the script
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if(!res) {
            toast.error("RazorPay SDK failed to load");
            return;
        }

        //initiate the order
        const orderResponse = await requestBackend("POST", Capture_payment, 
                                {courses},
                                {
                                    Authorization: `Bearer ${token}`,
                                },)

        console.log("PRINTING orderResponse", orderResponse);
        if(!orderResponse?.data?.success){
            toast.dismiss(toastId);
            toast.error(orderResponse?.data?.message);
            return;
        }
        if(!orderResponse.data) {
            toast.dismiss(toastId);
            throw new Error(orderResponse.data.message);
        }
        //options
        const options = {
            key: dotenv.RAZORPAY_KEY_ID,
            // key: "rzp_test_3pJer4d2b1Uiwu",
            currency: orderResponse.data.message.currency,
            amount: `${orderResponse.data.message.amount}`,
            order_id:orderResponse.data.message.id,
            name:"StudyNotion",
            description: "Thank You for Purchasing the Course",
            image:rzpLogo,
            prefill: {
                name:`${userDetails.firstName}`,
                email:userDetails.email
            },
            handler: function(response) {
                //send successful wala mail
                // sendPaymentSuccessEmail(response, orderResponse.data.message.amount,token );
                //verifyPayment
                verifyPayment({...response, courses}, token, navigate, dispatch);
            }
        }
        console.log("printing the options created : " , options);

        //miss hogya tha 
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        paymentObject.on("payment.failed", function(response) {
            toast.error("oops, payment failed");
            console.log(response.error);
        })

    }
    catch(error) {
        console.log("PAYMENT API ERROR.....", error);
        toast.error("Could not make Payment");
    }
    toast.dismiss(toastId);
}

// async function sendPaymentSuccessEmail(response, amount, token) {
//     try{
//         await requestBackend("POST", SEND_PAYMENT_SUCCESS_EMAIL_API, {
//             orderId: response.razorpay_order_id,
//             paymentId: response.razorpay_payment_id,
//             amount,
//         },{
//             Authorization: `Bearer ${token}`
//         })
//     }
//     catch(error) {
//         console.log("PAYMENT SUCCESS EMAIL ERROR....", error);
//     }
// }

//verify payment
async function verifyPayment(bodyData, token, navigate, dispatch) {
    const toastId = toast.loading("Verifying Payment....");
    console.log("printing the body data sent to verifyPayment : " , bodyData);
    dispatch(setPaymentLoading(true));
    try{
        const response  = await requestBackend("POST", Verify_Payment, bodyData, {
            Authorization:`Bearer ${token}`,
        })


        console.log("the response from backend after verifying payment : " , response);
        // if(!response.data.success) {
        //     throw new Error(response.data.message);
        // }
        toast.success("Payment Successful, you are addded to the course !!");
        navigate("/dashboard/enrolled-courses");
        // dispatch(resetCart());
    }   
    catch(error) {
        console.log("PAYMENT VERIFY ERROR....", error);
        toast.error("Could not verify Payment");
    }
    toast.dismiss(toastId);
    dispatch(setPaymentLoading(false));
}