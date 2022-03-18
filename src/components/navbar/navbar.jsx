import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from "./navbar.module.css";
import homeImg from "./home.jpeg";
import { Link } from "react-router-dom";

function Navbar({authService}) {
  const navigate = useNavigate()
  const onLogout = () => {
    authService.logout()
  }

  useEffect(() => {
    authService.onAuthChange(user => {
      if(!user) {
        navigate('/');
      }
    })
  })

  return (
  <div className={styles.Navbar}>
    <div className={styles.container}></div>
      <div className={styles.navbar_contents}>
        <Link to='/'>
          <img className={styles.img} alt="home" src={homeImg} />
        </Link>

        <Link to='/' className={styles.contentsBox}>
          <div className={styles.contentBox}>
            참가신청
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

        <Link to='/community' className={styles.contentsBox}>
          <div className={styles.contentBox}>
            예비
          </div>
        </Link>

        <div className={styles.loginBox}>
          <button className={styles.loginbtn} onClick={onLogout} >
            로그아웃
          </button>
        </div>
      </div>
    <div className={styles.container}></div>
  </div>
  )
}

export default Navbar;