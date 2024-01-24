import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/common/Navbar';
import LogInPage from './components/core/Auth/LogInPage'
import SignUp from './components/core/Auth/SignUp'
import ResetComplete from './components/core/Auth/ResetComplete';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/logIn' element={<LogInPage/>}></Route>
        <Route path='/resetComplete' element={<ResetComplete/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
