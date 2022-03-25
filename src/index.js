import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.module.css';
import AuthService from './service/auth_service';
import { db } from './service/firebase';
import MatchingRepository from './service/matching_repository';

const authService = new AuthService(db);
const matchingRepository = new MatchingRepository();

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      matchingRepository={matchingRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
