import React from 'react';
import Navbar from './navbar/navbar';
import HomeBanner from './homeBanner/homeBanner';
import Matchingbox from './matchingBox/matchingbox';
import Footer from './footer/footer';

class Register extends React.Component {
  render() {
    return(
      <div >
        <Navbar />
        <Footer />
    </div>
    )
  }
}

export default Register;
