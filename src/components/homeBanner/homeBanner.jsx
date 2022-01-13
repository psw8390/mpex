import React from "react";
import styles from "./homeBanner.module.css";
import homeBannerImg from "./homeBannerImg.jpeg";

function HomeBanner() {
  return (
    <div className={styles.homeBannerBox}>
        <img className={styles.homeBannerImg} alt="homeBaneer" src={homeBannerImg} />
        <div className={styles.paginationContainer}>
          <div className={styles.paginationController}>
            <div className={styles.pageNumber} >
              1/9
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeBanner;