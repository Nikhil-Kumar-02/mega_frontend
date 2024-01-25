import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/common/Navbar';
import LogInPage from './components/core/Auth/LogInPage'
import SignUp from './components/core/Auth/SignUp'
import EnterOtp from './components/core/Auth/EnterOtp';
import ResendEmail from './components/core/Auth/ResendEmail';
import ResetPassword from './components/core/Auth/ResetPassword';
import ResetComplete from './components/core/Auth/ResetComplete';
import ChooseNewPassword from './components/core/Auth/ChooseNewPassword';
import UserProfileDropDown from './components/core/Auth/UserProfileDropDown';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/logIn' element={<LogInPage/>}></Route>
        <Route path='/enterOtp' element={<EnterOtp/>}></Route>
        <Route path='/resendEmail' element={<ResendEmail></ResendEmail>}></Route>
        <Route path='/resetPassword' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/resetComplete' element={<ResetComplete></ResetComplete>}></Route>
        <Route path='/chooseNewPassword' element={<ChooseNewPassword></ChooseNewPassword>}></Route>
        <Route path='/userProfileDropDown' element={<UserProfileDropDown></UserProfileDropDown>}></Route>
      </Routes>
    </div>
  );
}

export default App;
