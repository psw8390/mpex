import React from 'react';
import './App.css';
import HomeBanner from './components/homeBanner/homeBanner';
import Navbar from './components/navbar/navbar';
import Searchbar from './components/searchBar/searchbar';
import Footer from './components/footer/footer';


function App() {
  return (
    <div >
      <Navbar />
      <HomeBanner />
      <Searchbar />
      <Footer />
    </div>
  );
}

export default App;
