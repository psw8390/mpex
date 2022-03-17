import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from './components/home';
import Notice from './components/notice';
import Community from './components/community';
import Login from './components/login/login';

function App({authService}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login authService={authService} />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/notice' element={<Notice />} />
        <Route exact path='/community' element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
