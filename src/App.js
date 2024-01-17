import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
