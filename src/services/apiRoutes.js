import {dotenv} from '../dotenv' 

const baseUrl = dotenv.Backend_Base_Url;
const courseRoute = dotenv.Courses_route;
const userRoute = dotenv.User_route;


const courseBaseUrl = baseUrl + courseRoute;
const userBaseUrl = baseUrl + userRoute;

export const courseAllRoutes = {
    getAllCategories : `${courseBaseUrl}${dotenv.Show_All_Categories}`,
}


export const userAllRoutes = {
    resetPasswordEmailSender : `${userBaseUrl}${dotenv.Reset_password_token}`
}