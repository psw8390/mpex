import React from "react";
import styles from './matching_edit_form.module.css';



function MatchingEditForm({matchingRead}) {

  return(
    <div className={styles.matchingAddFormBox}>
      <div className={styles.matchigBox} >
        <div className={styles.filebox}> 
          <label htmlFor="ex_file" className='fileboxlabel'>체육관 이미지 업로드</label> 
          <input type="file"></input>
        </div>

        <div className={styles.matchingInfo}>
          <input name='time' placeholder={matchingRead.time}></input>
          <input name='place' placeholder={matchingRead.place}></input>
          <input name='process' placeholder={matchingRead.process}></input>
          <input name='ask' placeholder={matchingRead.ask}></input>
          <input name='nstr' placeholder={matchingRead.nstr}></input>
          <input name='maxPeople' placeholder={matchingRead.maxPeople}></input>
        </div>
      </div>
    </div>
      
  )
}

export default MatchingEditForm;