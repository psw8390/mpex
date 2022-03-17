import React from 'react';
import LoginFoot from '../loginFoot/loginFoot';
import LoginHead from '../loginHead/loginFoot';

const Login = ({authService}) => {
  return (
    <section>
      <LoginHead />
      <section>
        <h1>로그인</h1>
        <ul>
          <li>
            <button>Google</button>
          </li>
          <li>
            <button>Github</button>
          </li>
        </ul>
      </section>
      <LoginFoot />
    </section>
  )
}

export default Login;