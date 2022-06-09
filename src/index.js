import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.module.css';
import AuthService from './service/auth_service';
import { db } from './service/firebase';
import Test from './Test';

const authService = new AuthService(db);

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
    />
    <Test></Test>
  </React.StrictMode>,
  document.getElementById('root')
);
