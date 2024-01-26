import axios from "axios";

export const requestBackend = async (method , url , data , header , params) => {
    try {
        console.log('in requrest backend try block')
        const response = await axios({
            method : method,
            url : url,
            data : data
        })
        console.log('response from the axios : ' , response.data.data);
        return response.data.data;
    } catch (error) {
        console.log('error i api connector' , error);
        return error;
    }
}
