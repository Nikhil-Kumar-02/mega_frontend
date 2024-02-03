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
import UserProfile from './components/core/Dashboard/UserProfile';

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
          <Route path='/userProfile' element={<UserProfile></UserProfile>}></Route>
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
