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
      </div>
    </div>
  )
}

export default Searchbar;