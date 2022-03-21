import React, { useState, useEffect } from "react";
import styles from "./matchingbox.module.css";
import MatchingRegister from "../matchingRegister/matchingRegister";
import Calendar from '../datepicker/datepicker';
import Matching from '../matching/matching';

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
    <section className={styles.matchingSection}>
      <h1 className={styles.matchingSectionTitle}>
        매칭을 원하시는 날짜를 누르세요.
      </h1>
      <div className={styles.clock}>
        {time.toLocaleString()}
      </div>

      <div className={styles.matchingUiBox}>
        <div className={styles.matchingRegisterBox}>
          <div className={styles.tagSectionContainer}>
            <div className={styles.tagSectionItem}>
              <button onClick={() => {setVisible(!visible);}}>{visible ? "취소" : "매칭등록"}</button>
            </div>
          </div>
        </div>

        <div className={styles.matchingRegisterBox}>
          <div className={styles.tagSectionContainer}>
            <div className={styles.tagSectionItem}>
              <Calendar />
            </div>
          </div>
        </div>
        

      </div>

      {visible && <MatchingRegister />}
      {}

      <Matching />
      
    </section>
  )
}

export default Matchingbox;