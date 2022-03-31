import React from 'react';
import Navbar from './navbar/navbar';

const Spare = ({authService}) => {
  return(
    <>
      <Navbar authService={authService}/>
        공사중..
    </>
  )   
};

export default Spare;

