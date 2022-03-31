import React from "react";
import styles from './matching_edit_form.module.css';


function MatchingEditForm() {
  return(
    <div className={styles.matchingAddFormBox}>
      <div className={styles.matchigBox} >
        <div className={styles.filebox}> 
          <label htmlFor="ex_file" className='fileboxlabel'>체육관 이미지 업로드</label> 
          <input type="file"></input>
        </div>

        <div className={styles.matchingInfo}>
          <input name='time' placeholder='시간:'></input>
          <input name='place' placeholder='장소명:'></input>
          <input name='process' placeholder='진행방식:'></input>
          <input name='ask' placeholder='문의:'></input>
          <input name='nstr' placeholder='특이사항:'></input>
          <input name='maxPeople' placeholder='모집인원:'></input>
        </div>
      </div>
    </div>
      
  )
}

export default MatchingEditForm;