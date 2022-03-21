import React from 'react';
import Navbar from './navbar/navbar';
import HomeBanner from './homeBanner/homeBanner';
import Matchingbox from './matchingBox/matchingbox';
import Footer from './footer/footer';

const Home = ({authService}) => {
  return(
    <>
      <Navbar authService={authService}/>
      <HomeBanner />
      <Matchingbox />
      <Footer />
    </>
  )   
};

export default Home;
