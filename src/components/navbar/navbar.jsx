import React from "react";
import styles from "./navbar.module.css";
import homeImg from "./home.jpeg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
  <div className={styles.Navbar}>
    <div className={styles.container}></div>
      <div className={styles.navbar_contents}>
        <Link to='/'>
          <img className={styles.img} alt="home" src={homeImg} />
        </Link>

        <Link to='/home' className={styles.contentsBox}>
          <div className={styles.contentBox}>
            참가신청
          </div>
        </Link>

        <Link to='/register' className={styles.contentsBox}>
          <div className={styles.contentBox}>
            매칭등록
          </div>
        </Link>

        <Link to='/notice' className={styles.contentsBox}>
          <div className={styles.contentBox}>
            공지사항
          </div>
        </Link>

        <Link to='/community' className={styles.contentsBox}>
          <div className={styles.contentBox}>
            커뮤니티
          </div>
        </Link>

        <div className={styles.loginBox}>
          <button className={styles.loginbtn}>
            로그인
          </button>
        </div>
      </div>
    <div className={styles.container}></div>
  </div>
  )
}

export default Navbar;