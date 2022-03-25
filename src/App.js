import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from './components/home';
import Notice from './components/notice';
import Community from './components/community';
import Login from './components/login/login';
import MatchingRepository from '../src/service/matching_repository';
import { db } from "../src/service/firebase";
import { collection, addDoc } from "firebase/firestore/lite";


function App({authService}) {
  const usersCollectionRef = collection(db, "users");
  // users 콜렉션에 { name: 'kyounghwan', age: 29 }인 row를 추가합니다.
  const addData = async () => {
    try {
      const res = await addDoc(usersCollectionRef, {
        id: Math.random(),
        time: '09:00~10:00',
        process: '5:5 풀코트',
        phone: '010-0000-0000',
        significant: '게스트비:5000원',
        maxpeople: '15명',
        fileName: 'gym123',
        fileURL: 'gymimg'
      });
      console.log(res); // res는 undefined입니다.
    } catch (e) {
      console.log(e);
    }
  };

  const matchingRepository = new MatchingRepository();

  return (
    <div className={styles.app}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route 
          exact path='/' 
          element={<Login authService={authService}  matchingRepository = {matchingRepository}/>} 
        />
        <Route exact path='/home' element={<Home authService={authService} matchingRepository={matchingRepository} addData={addData}/>} />
        <Route exact path='/notice' element={<Notice />} />
        <Route exact path='/community' element={<Community />} />
      </Routes>
    </BrowserRouter>
    <button onClick={addData}>추가</button>
    </div>
    
  );
}

export default App;
