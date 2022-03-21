import React from "react";
import styles from "./matchingRegister.module.css";

function MatchingRegister() {

  return(
      <form className={styles.matchigBox}>
        <div className={styles.filebox}> 
          <label for="ex_file" className='fileboxlabel'>체육관 이미지 업로드</label> 
          <input type="file"></input>
        </div>

        <div className={styles.matchingInfo}>
          <input placeholder='시간:'></input>
          <input placeholder='장소명:'></input>
          <input placeholder='진행방식:'></input>
          <input placeholder='문의:'></input>
          <input placeholder='특이사항:'></input>
        </div>

        <div className={styles.matchingUI}>
          <button type="submit">
            매칭등록
          </button>
          <input className={styles.people} placeholder='최대인원:'></input>
        </div>
      </form>
  )
}

export default MatchingRegister;