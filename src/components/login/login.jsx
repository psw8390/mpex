import React from 'react';
import LoginFoot from '../loginFoot/loginFoot';
import LoginHead from '../loginHead/loginFoot';


const Login = ({authService}) => {
  const onLogin = event => {
    authService
      .login(event.currentTarget.textContent)
      .then(console.log('1'));
  };
  return (
    <section>
      <LoginHead />
      <section>
        <h1>로그인</h1>
        <ul>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <LoginFoot />
    </section>
  )
}

export default Login;