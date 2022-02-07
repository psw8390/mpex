import React from "react";
import styles from "./searchbar.module.css";
import contentImg from "./sample.jpeg";

function Searchbar() {
  return (
    <div className={styles.searchBox}>
      <h1 className={styles.searchBoxTitle}>
        매칭을 원하시는 날짜를 누르세요.
      </h1>
      <div>
        <div className={styles.tagSection}>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">02/03(목)</a>
            </li>
          </ul>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">02/04(금)</a>
            </li>
          </ul>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">02/05(토)</a>
            </li>
          </ul>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">02/06(일)</a>
            </li>
          </ul>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">02/07(월)</a>
            </li>
          </ul>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">02/08(화)</a>
            </li>
          </ul>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">02/09(수)</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.matchigBox}>
        <img src={contentImg} className={styles.contentImage} alt=''/>
        <div className={styles.matchingInfo}>
          <div>목포대학교 (전라남도 목포시 부흥로 10019-10)</div>
          <div></div>
          <div>담당자 연락처 : 010-0000-0000</div>
          <div>남여 모두 5:5일반</div>
          <div>운동시간: 17:00 ~ 19:00</div>
          <div>게스트비용: 5000원</div>
          <div>준비물: 흰색/검정색 유니폼</div>
        </div>
        <div className={styles.mattchingUI}>
          <div>매칭신청</div>
          <div>03/15</div>
        </div>
      </div>
    </div>
  )
}

export default Searchbar;