import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from './pages/store'
import { Provider } from 'react-redux'
// import { ToastBar } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        {/* <ToastBar/> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

