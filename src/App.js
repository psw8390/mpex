import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from './components/home';
import Notice from './components/notice';
import Community from './components/community';
import Spare from './components/spare';
import Login from './components/login/login';



function App({authService}) {

  return (
    <div className={styles.app}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route 
          exact path='/' 
          element={<Login authService={authService} />} 
        />
        <Route exact path='/home' element={<Home authService={authService} />} />
        <Route exact path='/notice' element={<Notice authService={authService}/>} />
        <Route exact path='/community' element={<Community authService={authService}/>} />
        <Route exact path='/spare' element={<Spare authService={authService}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
