import React from "react";
import styles from "./navbar.module.css";
import homeImg from "./home.jpeg";

function Navbar() {
  return (
  <div className={styles.Navbar}>
    <div className={styles.container}></div>
      <div className={styles.navbar_contents}>
        <a href="/">
          <img className={styles.img} alt="home" src={homeImg} />
        </a>
        <div className={styles.contentBox}>
          <a href="/apply">참가신청</a>
        </div>
        <div className={styles.contentBox}>
          <a href="/register">매칭등록</a>
        </div>
        <div className={styles.contentBox}>
          <a href="/notice">공지사항</a>
        </div>
        <div className={styles.contentBox}>
          <a href="/community">커뮤니티</a>
        </div>
        <div className={styles.loginBox}>
          <button className={styles.loginbtn}>로그인</button>
        </div>
      </div>
    <div className={styles.container}></div>
  </div>
  )
}

export default Navbar;