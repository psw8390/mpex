import React from "react";
import styles from "./matchingRegister.module.css";



function MatchingRegister() {
  return(
      <form className={styles.matchigBox}>
        <div className={styles.matchigBoxTime}>
          <input placeholder='운동시작시간'></input>
          <div>~</div>
          <input placeholder='운동종료시간'></input>
        </div>
        <input type="file" className={styles.gymImg} />
        <div className={styles.matchingInfo}>
          <input placeholder='장소명'></input>
          <input placeholder='경기방식'></input>
          <input placeholder='특이사항:'></input>
        </div>
        <div className={styles.mattchingUI}>
          <button>
            <a href="https://naver.com">매칭등록</a>
          </button>
          <input placeholder='최대인원'></input>
        </div>
      </form>
  )
}

export default MatchingRegister;