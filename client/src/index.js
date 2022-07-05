import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './components/Homepage'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile';
import Posts from './components/Posts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>  
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profilepage" element={<Profile />} />
        <Route path="/userposts" element={<Posts />} />
      </Routes>
      </BrowserRouter>
);
