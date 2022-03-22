import React from 'react';
import MatchingAddForm from '../matching_add_form/matching_add_form';
import MatchingPreview from '../matching_preview/matching_preview';
import styles from "./matching_body.module.css";


function MatchingBody() {
  return(
    <div className={styles.body}>
        <MatchingAddForm />
        <MatchingPreview />
    </div>
  )
}

export default MatchingBody;