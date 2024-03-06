import toast from "react-hot-toast";
import { requestBackend } from "../apiConnector";
import {addToCart , removeFromCart , setTotalItems , resetCart , setTotalPrice} from '../../reducers/slices/cartSlice';
import { CartRoutes } from "../apiRoutes";


export function addItemsToCartBackendRequest(token , courseId , totalPrice){
    return async (dispatch) => {
        const toastId = toast.loading("Loading ... ");
        try {
            const responseFromApiConnector = await requestBackend("POST" , CartRoutes.addToCart , {courseId} , {Authorization : `Bearer ${token}` , });
            console.log("the response from backed after added item to cart " , responseFromApiConnector);
            toast.dismiss(toastId);
            if(!responseFromApiConnector.data){
                toast.error(responseFromApiConnector?.response?.data?.message);
            }
            else{
                toast.success('Course Added');
                let result = responseFromApiConnector?.data;
                localStorage.setItem('cartItems' , JSON.stringify(result?.newCart?.cartItems));
                localStorage.setItem('totalItems' , JSON.stringify(result?.newCart?.cartItems?.length));
                localStorage.setItem('totalPrice' , JSON.stringify(totalPrice + parseInt(result?.courseFound?.price)));
                dispatch(addToCart(result?.newCart?.cartItems));
                dispatch(setTotalPrice(totalPrice + parseInt(result?.courseFound?.price)));
                dispatch(setTotalItems(responseFromApiConnector?.data?.newCart?.cartItems?.length));
            }
        } catch (error) {
            console.log("error while adding item to cart " , error);
            toast.error('Course Not Added');
        }
    }
}