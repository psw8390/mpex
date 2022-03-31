import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.module.css';
import AuthService from './service/auth_service';
import { db } from './service/firebase';

const authService = new AuthService(db);

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
