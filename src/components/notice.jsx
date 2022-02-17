import React from 'react';
import Navbar from './navbar/navbar';
import HomeBanner from './homeBanner/homeBanner';
import Matchingbox from './matchingBox/matchingbox';
import Footer from './footer/footer';

class Notice extends React.Component {
  render() {
    return(
      <div >
        <Navbar />
        <HomeBanner />
        <Footer />
    </div>
    )
  }
}

export default Notice;
