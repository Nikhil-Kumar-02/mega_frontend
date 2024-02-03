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
import MyCourses from './components/core/Dashboard/SideBarElements/MyCourses';
import Settings from './components/core/Dashboard/SideBarElements/Settings';
import AddCourse from './components/core/Dashboard/SideBarElements/AddCourse';
import Dashboard from './pages/DashBoard';

function App() {
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
          <Route path='/setting' element={<Settings></Settings>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route index element={<SideBar></SideBar>}></Route>
            <Route path='/dashboard/my-profile' element={<MyProfile></MyProfile>}></Route>
            <Route path='/dashboard/instructor' element={<Instructor></Instructor>}></Route>
            <Route path='/dashboard/my-courses' element={<MyCourses></MyCourses>}></Route>
            <Route path='/dashboard/add-course' element={<AddCourse></AddCourse>}></Route>
          </Route>
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
