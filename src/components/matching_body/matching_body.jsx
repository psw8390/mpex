import React from 'react';
import HomeBanner from '../homeBanner/homeBanner';
import MatchingPreview from '../matching_preview/matching_preview';
import styles from "./matching_body.module.css";


function MatchingBody() {
  return(   
    <div className={styles.body}>
        <HomeBanner />
        <MatchingPreview />
    </div>
  )
}

export default MatchingBody;