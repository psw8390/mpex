import React from 'react';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';

const Community = ({authService}) => {
  return(
    <>
      <Navbar authService={authService}/>
      <Footer />
    </>
  )   
};

export default Community;
