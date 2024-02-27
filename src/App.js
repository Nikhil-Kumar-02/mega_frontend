import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ForgotPassword from './pages/ForgotPassword';
import Navbar from './components/common/Navbar';
import LogInPage from './components/core/Auth/LogInPage';
import SignUp from './components/core/Auth/SignUp';
import EnterOtp from './components/core/Auth/EnterOtp';
import ResendEmail from './components/core/Auth/ResendEmail';
import ResetPassword from './components/core/Auth/ResetPassword';
import ResetComplete from './components/core/Auth/ResetComplete';
import ChooseNewPassword from './components/core/Auth/ChooseNewPassword';
import UserProfileDropDown from './components/core/Auth/UserProfileDropDown';
import NotFound from './components/common/NotFound';
import AboutUs from './components/common/AboutUs';
import ContactUs from './pages/ContactUs';
import SideBar from './components/core/Dashboard/SideBar'
import MyProfile from './components/core/Dashboard/SideBarElements/MyProfile';
import Instructor from './components/core/Dashboard/SideBarElements/Instructor';
import MyCourses from './components/core/Dashboard/SideBarElements/AddCourseElements/MyCourses';
import Settings from './components/core/Dashboard/SideBarElements/Settings';
import AddCourse from './components/core/Dashboard/SideBarElements/AddCourseElements/AddCourse';
import Dashboard from './pages/DashBoard';
import EnrolledCourses from './components/core/Dashboard/SideBarElements/EnrolledCourses';
import Cart from './components/core/Dashboard/SideBarElements/Cart';
import { ACCOUNT_TYPE } from './utils/constants';
import { useSelector } from 'react-redux';
import CourseCategory from './components/core/home/courseCatelogContainer/CourseCategory';
import CourseDetails from './pages/CourseDetails';

function App() {

  const {user} = useSelector((state) => state.profile);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navbar></Navbar>}>
          <Route index element={<Home />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/logIn' element={<LogInPage />} />
          <Route path='/enterOtp' element={<EnterOtp />} />
          <Route path='/resendEmail' element={<ResendEmail />} />
          <Route path='/resetPassword' element={<ResetPassword />} />
          <Route path='/resetComplete' element={<ResetComplete />} />
          <Route path='/update-password/:token' element={<ChooseNewPassword />} />
          <Route path='/userProfileDropDown' element={<UserProfileDropDown />}></Route>
          <Route path='/forgotPassword' element={<ForgotPassword></ForgotPassword>}></Route>
          <Route path='/about' element={<AboutUs></AboutUs>}></Route>
          <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
          <Route path='/catelog/:categoryId' element={<CourseCategory></CourseCategory>}></Route>
          <Route path='/course/:courseId' element={<CourseDetails></CourseDetails>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route index element={<SideBar></SideBar>}></Route>
            <Route path='/dashboard/my-profile' element={<MyProfile></MyProfile>}></Route>
            <Route path='/dashboard/setting' element={<Settings></Settings>}></Route>
            {
              user && user.accountType === ACCOUNT_TYPE.STUDENT && (
                <>
                  <Route path='/dashboard/enrolled-courses' element={<EnrolledCourses></EnrolledCourses>}></Route>
                  <Route path='/dashboard/cart' element={<Cart></Cart>}></Route>
                </>
              )
            }
            {
              user && user.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
                <>
                <Route path='/dashboard/instructor' element={<Instructor></Instructor>}></Route>
                <Route path='/dashboard/my-courses' element={<MyCourses></MyCourses>}></Route>
                <Route path='/dashboard/add-course' element={<AddCourse></AddCourse>}></Route>
                </>
              )
            }
          </Route>
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
