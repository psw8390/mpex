import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./navbar.module.css";
import homeImg from "./home.jpeg";
import { Link } from "react-router-dom";

function Navbar({authService}) {
  const navigate = useNavigate()
  const onLogout = () => {
    authService.logout()
  }

  const navigateState = useNavigate().state;
  const [userId, setUserId] = useState(navigateState && navigateState.id);


  useEffect(() => {
    authService.onAuthChange(user => {
      if(user) {
        setUserId(userId);
      } else {
        navigate('/');
      }
    })
  })

  return (
  <nav className={styles.navbar}>
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

        <Link to='/spare' className={styles.contentsBox}>
          <div className={styles.contentBox}>
            예비
          </div>
        </Link>

          <button className={styles.logoutBtn} onClick={onLogout} >
            로그아웃
          </button>
      </div>
  </nav>
  )
}

export default Navbar;