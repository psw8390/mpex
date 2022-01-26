import React from "react";
import styles from "./searchbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Searchbar() {
  return (
    <div className={styles.searchBox}>
      <h1 className={styles.searchBoxTitle}>
        MPEX 에서 가치를 높이세요
      </h1>
      <div class="search_wrapper">
        <input className={styles.searchInput} type="text" placeholder="함께하고 싶은 운동을 입력해보세요." />
        <button className={styles.buttonSubmit}>
          <span>
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </button>
        <div className={styles.tagSection}>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">#농구</a>
            </li>
          </ul>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">#축구</a>
            </li>
          </ul>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">#야구</a>
            </li>
          </ul>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">#배구</a>
            </li>
          </ul>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">#골프</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Searchbar;