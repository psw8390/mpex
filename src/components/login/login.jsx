import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginFoot from '../loginFoot/loginFoot';
import LoginHead from '../loginHead/loginHead';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = userId => {
    navigate({
      pathname: '/home',
      state: { id: userId },
    });
  };

  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent)
      .then(data => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToMaker(user.id);
    });
  });

  return (
    <section className={styles.login}>
      <LoginHead />
      <section className={styles.loginSection}>
        <h1>Please Login!</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <LoginFoot />
    </section>
  );
};

export default Login;
