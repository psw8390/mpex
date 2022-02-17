import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from './components/home';
import Register from './components/register';
import Notice from './components/notice';
import Community from './components/community';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/notice' element={<Notice />} />
        <Route exact path='/community' element={<Community />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
