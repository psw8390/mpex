import React from "react";
import styles from "./regInput.module.css";
import stadiumImg from "./stadiumImg.jpeg"
import Matchingbox from '../matchingBox/matchingbox';

function Navbar() {
  return (
    <div className={styles.regBox}>
        <img className={styles.stadiumImg} alt="stadimImg" src={stadiumImg} />
        <div className={styles.stadimgInfo}>
          <Matchingbox></Matchingbox>
        </div>
    </div>
  )
}

export default Navbar;