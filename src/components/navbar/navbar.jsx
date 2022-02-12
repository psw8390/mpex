import React from "react";
import styles from "./navbar.module.css";
import homeImg from "./home.jpeg";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function Navbar() {
  return (
<BrowserRouter>
  <div className={styles.Navbar}>
    <div className={styles.container}></div>
      <div className={styles.navbar_contents}>
        <Link to="/">
          <img className={styles.img} alt="home" src={homeImg} />
        </Link>
        <div className={styles.contentBox}>
          <Link to="/home">
            참가신청
          </Link>
        </div>
        <div className={styles.contentBox}>
          <Link to="/register">
            매칭등록
          </Link>
        </div>
        <div className={styles.contentBox}>
          <Link to="/notice">
            공지사항
          </Link>
        </div>
        <div className={styles.contentBox}>
          <Link to="community">
            커뮤니티
          </Link>
        </div>
        <div className={styles.loginBox}>
          <button className={styles.loginbtn}>
            로그인
          </button>
        </div>
      </div>
    <div className={styles.container}></div>
  </div>
</BrowserRouter>
  )
}

export default Navbar;