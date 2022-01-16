import React from "react";
import styles from "./homeBanner.module.css";
import homeBannerImg from "./homeBannerImg.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";

function HomeBanner() {
  return (
    <div className={styles.homeBannerBox}>
        <img className={styles.homeBannerImg} alt="homeBaneer" src={homeBannerImg} />
        <div className={styles.paginationContainer}>
          <div className={styles.paginationController}>
            <div className={styles.pageNumber} >
                <div className={styles.numberBox}>
                  <span>1</span>
                  <span>/</span>
                  <span>9</span>
                </div>
                <div className={styles.pageNumberController}>
                  <FontAwesomeIcon icon={faAngleLeft} className="faAngleLeft" />
                  <FontAwesomeIcon icon={faPause} className="faPause" />
                  <FontAwesomeIcon icon={faAngleRight} className="faAngleRight" />
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeBanner;