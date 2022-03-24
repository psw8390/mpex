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
      <h1 className={styles.matchingSectionTitle}>
        매칭을 원하시는 날짜를 누르세요.
      </h1>
      <div className={styles.clock}>
        {time.toLocaleString()}
      </div>

    </section>
  )
}

export default MatchingTitle;