import React from 'react';
import './App.css';
import HomeBanner from './components/homeBanner/homeBanner';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div >
      <header>
        <Navbar />
        <HomeBanner />
      </header>
    </div>
  );
}

export default App;
