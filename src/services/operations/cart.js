import toast from "react-hot-toast";
import { requestBackend } from "../apiConnector";
import {addToCart , removeFromCart , setTotalItems , resetCart} from '../../reducers/slices/cartSlice';
import { CartRoutes } from "../apiRoutes";


export function addItemsToCartBackendRequest(token , courseId){
    console.log('reached here1')
    return async (dispatch) => {
        console.log('reached here2')
        const toastId = toast.loading("Loading ... ");
        console.log('reached here3')
        try {
            console.log("the cart backed route is  " , CartRoutes.addToCart);
            const responseFromApiConnector = await requestBackend("POST" , CartRoutes.addToCart , {courseId} , {Authorization : `Bearer ${token}` , });
            console.log("the response from backed after added item to cart " , responseFromApiConnector);
            toast.dismiss(toastId);
            if(!responseFromApiConnector.data){
                toast.error(responseFromApiConnector?.response?.data?.message);
            }
            else{
                toast.success('Course Added');
                localStorage.setItem('cartItems' , JSON.stringify(responseFromApiConnector?.data?.newCart?.cartItems));
                localStorage.setItem('totalItems' , JSON.stringify(responseFromApiConnector?.data?.newCart?.cartItems?.length));
                dispatch(addToCart(responseFromApiConnector?.data?.newCart?.cartItems));
                dispatch(setTotalItems(responseFromApiConnector?.data?.newCart?.cartItems?.length));
            }
        } catch (error) {
            console.log("error while adding item to cart " , error);
            toast.error('Course Not Added');
        }
    }
}