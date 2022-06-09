import React from 'react';
import styles from "./numOfMatching.module.css";

import { useStore } from '../../store/store';

const NumOfMatching = () => {
  const { count, setZero } = useStore();

  return (
    <div className={styles.numBox}>
      <div>현재매칭: {count}개</div>
      <button onClick={() => setZero(0)}>Init</button>
    </div>
  );
};

export default NumOfMatching;