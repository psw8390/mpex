import React from 'react';
import Navbar from './navbar/navbar';
import HomeBanner from './homeBanner/homeBanner';
import Matchingbox from './matchingBox/matchingbox';
import Footer from './footer/footer';

class Comminity extends React.Component {
  render() {
    return(
      <div >
        <Navbar />
        <Footer />
    </div>
    )
  }
}

export default Comminity;
