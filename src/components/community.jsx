import React from 'react';
import Navbar from './navbar/navbar';
import HomeBanner from './homeBanner/homeBanner';
import Footer from './footer/footer';

class Comminity extends React.Component {
  render() {
    return(
      <div >
        <Navbar />
        <HomeBanner />
        업데이트중...
        <Footer />
    </div>
    )
  }
}

export default Comminity;
