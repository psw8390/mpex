import React from 'react';
import styles from './loginHead.module.css';

const LoginHead = (props) => (
    <header className={styles.header}>
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>MPEX - Exercise Matching service</h1>
    </header>
  );

export default LoginHead;