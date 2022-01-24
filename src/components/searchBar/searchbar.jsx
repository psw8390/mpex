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
        </div>
    </div>
  )
}

export default Searchbar;