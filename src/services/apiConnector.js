import axios from "axios";

export const requestBackend = async (method , url , header , params) => {
    try {
        const response = await axios({
            method : "get",
            url : url
        })
        console.log('response from the axios : ' , response.data.data);
        return response.data.data;
    } catch (error) {
        console.log('error i api connector' , error);
        return error;
    }
}
