import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './components/home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
