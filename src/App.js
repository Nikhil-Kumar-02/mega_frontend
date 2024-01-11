import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
