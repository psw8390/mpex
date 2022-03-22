import React from 'react';
import styles from './matching_preview.module.css';
import gymImg from "./gymImg.jpeg";


const MatchingPreview = () => {
  return (
    <div className={styles.matchingPreviewBox}>
    <div className={styles.matchingBox}>
      <img className={styles.gymImg} alt="homeBaneer" src={gymImg} />
      <div className={styles.matchingInfo}>
        <div>시간 : 09:00~10:00</div>
        <div>장소명 : 목포대학교 부설 체육관(목포시 상동 1234)</div>
        <div>진행방식 : 5:5 풀코트</div>
        <div>문의 : 010-0000-0000</div>
        <div>특이사항 : 게스트비 5천원</div>
    </div>

    <div className={styles.mattchingUI}>
      <button>
        삭제하기
      </button>
    </div>
  </div>
  <div className={styles.matchingBox}>
  <img className={styles.gymImg} alt="homeBaneer" src={gymImg} />
  <div className={styles.matchingInfo}>
    <div>시간 : 09:00~10:00</div>
    <div>장소명 : 목포대학교 부설 체육관(목포시 상동 1234)</div>
    <div>진행방식 : 5:5 풀코트</div>
    <div>문의 : 010-0000-0000</div>
    <div>특이사항 : 게스트비 5천원</div>
</div>

<div className={styles.mattchingUI}>
  <button>
    삭제하기
  </button>
</div>
</div>
</div>
  )
}

export default MatchingPreview;