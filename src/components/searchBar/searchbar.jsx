import React from "react";
import styles from "./searchbar.module.css";

function Searchbar() {
  return (
    <div className={styles.searchBox}>
      <div className={styles.searchBoxTitle}>
        MPEX 에서 가치를 높이세요
      </div>
    </div>
  )
}

export default Searchbar;