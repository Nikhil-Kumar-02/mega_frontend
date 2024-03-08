export const dotenv = {
    Backend_Base_Url : "https://mega-backend-1.onrender.com/api/v1",

    Courses_route : "/course",
    User_route : "/auth",
    other_Route : '/otherRoutes',
    payment_Route : '/payment',
    rating_route : '/ratingAndreview',
    cart_route : '/CartRoutes',

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
    instructor_Stats : '/instructorStats',

    //all course routes
    Show_All_Categories : "/showAllCategories",
    category_Page_Details : "/categoryPageDetails",
    create_Course : '/createCourse',
    add_Section : '/addSection',
    update_Section : '/updateSection',
    delete_Section : '/deleteSection',
    get_Full_Course_Details : '/getFullCourseDetails',
    create_sub_section : '/addSubSection',
    update_sub_section : '/updateSubSection',
    delete_sub_section : '/deleteSubSection',
    instructor_user_Courses : '/instructor_user_Courses',
    delete_instructor_Course : '/delete_instructor_Course',

    //razorpay keys
    RAZORPAY_KEY_ID : 'rzp_test_4FDFpCnuZgdE9g',

    //payment Routes
    Capture_payment : '/capturePayment',
    Verify_Payment : '/verifyPayment',

    //rating and review all routes
    create_Rating : '/createRating',
    all_Rating : '/allRating',
    course_Rating : '/courseRating',
    average_Rating : '/averageRating',
    markSubsection : '/markSubsection',

    //cart all routes
    addToCart : '/addToCart',
    removeFromCart : '/removeFromCart',
}