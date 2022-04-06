import React from  "react";
import FileInput from '../FileInput/FileInput';
import styles from './matching_add_form.module.css';
 


function MatchingAddForm({onSubmit}) {
  return(
    <div className={styles.matchingAddFormBox}>
      <div className={styles.matchigBox} >
        <div className={styles.filebox}> 
          <label  className={styles.fileboxLabel}>체육관 이미지 업로드</label> 
          <FileInput  onSubmit={onSubmit}/>
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

export default MatchingAddForm;