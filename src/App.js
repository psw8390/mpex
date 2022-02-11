import React from 'react';
import './App.css';
import HomeBanner from './components/homeBanner/homeBanner';
import Navbar from './components/navbar/navbar';
import Matchingbox from './components/matchingBox/matchingbox';
import Footer from './components/footer/footer';


function App() {
  return (
    <div >
      <Navbar />
      <HomeBanner />
      <Matchingbox />
      <Footer />
    </div>
  );
}

export default App;
