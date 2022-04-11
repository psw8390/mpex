import React, { useState, useEffect } from "react";
import styles from "./matching_title.module.css";

function MatchingTitle() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(
      () => {
      setTime(new Date());
    }, 1000);
    
    return (() => clearInterval(id))}, []);

  return (
    <section className={styles.matchingSection}>
      <div className={styles.wiseSaying}>
        <div className={styles.matchingSectionTitle}>
          “무언가를 시작하기 위해 잘해야 하는 것은 아니지만,&nbsp;
        </div>
        <div className={styles.matchingSectionTitle}>
          무언가를 잘하기 위해 시작해야 합니다.” 
        </div>
      </div>
      <div className={styles.clock}>
        {time.toLocaleString()}
      </div>
    </section>
  )
}

export default MatchingTitle;