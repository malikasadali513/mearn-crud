import React from 'react';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import Home from "./Routes/Home"
import Register from "./Routes/Register"
import About from "./Routes/About"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Components/Navbar';
import Edit from './Routes/Edit';
import Detail from './Routes/Detail';
import SignUpPage from './Dashboard/SignUpPage/SignUpPage';
import AdminDash from './Dashboard/AdminDash/AdminDash';
import Login from './Dashboard/Login/Login';
import Logout from './Dashboard/Logout';


function App() {
  return (
    <div>
    <Navbar />
     <Routes >
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/about' element={<About />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/view/:id' element={<Detail />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/dashboard' element={<AdminDash />} />
  
     </Routes>
    </div>
  );
}

export default App;
