import React from "react";
import styles from "./homeBanner.module.css";
import homeBannerImg from "./homeBannerImg.jpeg";

function HomeBanner() {
  return (
    <div className={styles.homeBannerBox}>
        <img className={styles.homeBannerImg} alt="homeBaneer" src={homeBannerImg} />
    </div>
  )
}

export default HomeBanner;