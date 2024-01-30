import axios from "axios";

export const requestBackend = async (method , url , data , header , params) => {
    try {
        console.log('in requrest backend try block')
        const axiosResponse = await axios({
            method : method,
            url : url,
            data : data
        })
        console.log('response from the axios : ' , axiosResponse.response);
        return axiosResponse.response;
    } catch (error) {
        console.log('error in api connector' , error);
        return error;
    }
}
