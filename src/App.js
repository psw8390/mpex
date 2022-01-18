import React from 'react';
import './App.css';
import HomeBanner from './components/homeBanner/homeBanner';
import Navbar from './components/navbar/navbar';
import Searchbar from './components/searchBar/searchbar';

function App() {
  return (
    <div >
      <Navbar />
      <HomeBanner />
      <Searchbar />
    </div>
  );
}

export default App;
