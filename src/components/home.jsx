import React from 'react';
import Navbar from './navbar/navbar';
import HomeBanner from './homeBanner/homeBanner';
import Matchingbox from './matchingBox/matchingbox';
import Footer from './footer/footer';

class Home extends React.Component {
  render() {
    return(
      <section>
        <Navbar />
        <HomeBanner />
        <Matchingbox />
        <Footer />

      </section>
    )
  }
}

export default Home
