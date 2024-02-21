export const dotenv = {
    Backend_Base_Url : "http://localhost:4000/api/v1",

    Courses_route : "/course",
    User_route : "/auth",
    other_Route : '/otherRoutes',

    Reset_password_token : "/reset-password-token",
    Log_In : "/login",
    Sign_Up : "/signup",
    OtpForEmailVerication : '/sendotp',
    Reset_password : '/reset-password',
    update_Password : '/updatePassword',

    send_Mail : '/sendMail',

    //all profile routes
    Profile_Route : '/profile',
    update_Profile_Photo : '/updateDisplayPicture',
    update_Profile_Data : '/updateProfile',
    get_All_User_Details : '/getUserDetails',
    delete_User_Permanently : '/deleteProfile',
    user_Enrolled_Courses : '/userEnrolledCourses',

    //all course routes
    Show_All_Categories : "/showAllCategories",
    create_Course : '/createCourse',
    add_Section : '/addSection',
    update_Section : '/updateSection',
    delete_Section : '/deleteSection',
    get_Full_Course_Details : '/getFullCourseDetails',
    create_sub_section : '/addSubSection',
    update_sub_section : '/updateSubSection',
    delete_sub_section : '/deleteSubSection',
    instructor_user_Courses : '/instructor_user_Courses',
}