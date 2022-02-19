import React from 'react';
import Navbar from './navbar/navbar';
import HomeBanner from './homeBanner/homeBanner';
import RegInput from './regInput/regInput';
import Footer from './footer/footer';

class Register extends React.Component {
  render() {
    return(
      <div >
        <Navbar />
        <RegInput />
        <Footer />
    </div>
    )
  }
}

export default Register;
