import {dotenv} from '../dotenv' 

const baseUrl = dotenv.Backend_Base_Url;
const courseRoute = dotenv.Courses_route;
const userRoute = dotenv.User_route;
const otherRoute = dotenv.other_Route;
const profileRoute = dotenv.Profile_Route;



const courseBaseUrl = baseUrl + courseRoute;
const userBaseUrl = baseUrl + userRoute;
const otherRoutesBaseUrl = baseUrl + otherRoute;
const profileRouteBaseUrl = baseUrl + profileRoute;

export const courseAllRoutes = {
    getAllCategories : `${courseBaseUrl}${dotenv.Show_All_Categories}`,
    create_course : `${courseBaseUrl}${dotenv.create_Course}`,
    add_section : `${courseBaseUrl}${dotenv.add_Section}`,
    update_section : `${courseBaseUrl}${dotenv.update_Section}`,
    delete_section : `${courseBaseUrl}${dotenv.delete_Section}`,
    get_full_course_details : `${courseBaseUrl}${dotenv.get_Full_Course_Details}`,
    add_sub_section : `${courseBaseUrl}${dotenv.create_sub_section}`,
    delete_sub_section : `${courseBaseUrl}${dotenv.delete_sub_section}`,
    update_sub_section : `${courseBaseUrl}${dotenv.update_sub_section}`,
    instructor_user_Courses : `${courseBaseUrl}${dotenv.instructor_user_Courses}`,
    delete_instructor_Course : `${courseBaseUrl}${dotenv.delete_instructor_Course}`,
    
}


export const userAllRoutes = {
    resetPasswordEmailSender : `${userBaseUrl}${dotenv.Reset_password_token}`,
    userLogIn : `${userBaseUrl}${dotenv.Log_In}`,
    sendOtpForEmailVerification : `${userBaseUrl}${dotenv.OtpForEmailVerication}`,
    userSignUp : `${userBaseUrl}${dotenv.Sign_Up}`,
    Reset_user_forgotted_password : `${userBaseUrl}${dotenv.Reset_password}`,
    update_Password : `${userBaseUrl}${dotenv.update_Password}`
}

export const otherRoutes = {
    sendMail : `${otherRoutesBaseUrl}${dotenv.send_Mail}`
}

export const profileAllRoutes = {
    update_Profile_Photo : `${profileRouteBaseUrl}${dotenv.update_Profile_Photo}`,
    update_Profile_Data : `${profileRouteBaseUrl}${dotenv.update_Profile_Data}`,
    get_All_User_Details : `${profileRouteBaseUrl}${dotenv.get_All_User_Details}`,
    delete_User_Permanently : `${profileRouteBaseUrl}${dotenv.delete_User_Permanently}`,
    get_User_Enrolled_Courses : `${profileRouteBaseUrl}${dotenv.user_Enrolled_Courses}`
}