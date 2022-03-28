import React from 'react';
import Navbar from './navbar/navbar';
import MatchingTitle from './matching_title/matching_title';
import Footer from './footer/footer';
import MatchingBody from './matching_body/matching_body';

const Home = ({authService, matchingRepository, addData, querySnapshot}) => {
  return(
    <>
      <Navbar authService={authService}/>
      <MatchingTitle />
      <MatchingBody matchingRepository={matchingRepository} addData={addData} querySnapshot={querySnapshot}/>
      <Footer />
    </>
  )   
};

export default Home;
