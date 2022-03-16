import React, { useState, useEffect } from "react";
import styles from "./matchingbox.module.css";
import gymImg from "./gymImg.jpeg";
import MatchingRegister from "../matchingRegister/matchingRegister";
import Calendar from '../datepicker/datepicker';

function Matchingbox() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(
      () => {
      setTime(new Date());
    }, 1000);
    
    return (() => clearInterval(id))}, []);

  const [visible, setVisible] = useState(false);

    
  return (
    <div className={styles.searchBox}>
      <h1 className={styles.searchBoxTitle}>
        매칭을 원하시는 날짜를 누르세요.
      </h1>

      {time.toLocaleString()}

      <div className={styles.matchingUiBox}>
        <div className={styles.matchingRegisterBox}>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <button onClick={() => {setVisible(!visible);}}>{visible ? "취소" : "매칭등록"}</button>
            </li>
          </ul>
        </div>
        <div className={styles.matchingUiBox}>
          <div className={styles.matchingRegisterBox}>
            <ul className={styles.tagSectionContainer}>
              <li className={styles.tagSectionItem}>
                <Calendar />
              </li>
          </ul>
          </div>
        </div>
      </div>

      {visible && <MatchingRegister />}
      {}

      <div className={styles.matchigBox}>
        <div className={styles.matchigBoxTime}>
          <div>11:00</div>
          <div>~</div>
          <div>15:00</div>
        </div>
        <img className={styles.gymImg} alt="homeBaneer" src={gymImg} />
        <div className={styles.matchingInfo}>
          <div>목포대학교 부설 체육관</div>
          <div>농구 5:5 풀코트</div>
          <div className={styles.significant}>특이사항 : </div>
        </div>
        <div className={styles.mattchingUI}>
          <button>
            <a href="https://naver.com">매칭신청</a>
          </button>
          <div>03/15명</div>
        </div>
      </div>
      <div className={styles.matchigBox}>
        <div className={styles.matchigBoxTime}>
          <div>11:00</div>
          <div>~</div>
          <div>15:00</div>
        </div>
        <img className={styles.gymImg} alt="homeBaneer" src={gymImg} />
        <div className={styles.matchingInfo}>
          <div>목포대학교 부설 체육관</div>
          <div>농구 5:5 풀코트</div>
          <div className={styles.significant}>특이사항 : </div>
        </div>
        <div className={styles.mattchingUI}>
          <button>
            <a href="https://naver.com">매칭신청</a>
          </button>
          <div>03/15명</div>
        </div>
      </div>
    </div>
  )
}

export default Matchingbox;