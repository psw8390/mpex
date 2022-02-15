import React from 'react';
import './App.css';
import HomeBanner from './components/homeBanner/homeBanner';
import Navbar from './components/navbar/navbar';
import Matchingbox from './components/matchingBox/matchingbox';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './components/home';


function App() {
  return (
    <BrowserRouter>
    <div >
      <Navbar />
      <HomeBanner />
      <Matchingbox />
      <Footer />
    </div>

      <Routes>
        <Route exact path='/home' component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
