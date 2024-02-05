import axios from "axios";

export const requestBackend = async (method , url , data , headers , params) => {
    try {
        const axiosResponse = await axios({
            method : method,
            url : url,
            data : data,
            headers : headers,
        })
        return axiosResponse;
    } catch (error) {
        console.log('error in api connector' , error);
        return error;
    }
}
