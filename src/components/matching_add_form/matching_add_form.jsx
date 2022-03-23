import React from "react";
import styles from './matching_add_form.module.css';

function MatchingAddForm() {

  return(
    <div className={styles.matchingAddFormBox}>
      <form className={styles.matchigBox}>
        <div className={styles.filebox}> 
          <label htmlFor="ex_file" className='fileboxlabel'>체육관 이미지 업로드</label> 
          <input type="file"></input>
        </div>

        <div className={styles.matchingInfo}>
          <input placeholder='시간:'></input>
          <input placeholder='장소명:'></input>
          <input placeholder='진행방식:'></input>
          <input placeholder='문의:'></input>
          <input placeholder='특이사항:'></input>
          <input placeholder='모집인원:'></input>
        </div>
      </form>
    </div>
      
  )
}

export default MatchingAddForm;