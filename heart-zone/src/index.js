import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import LaunchPage from './launchpage/LaunchPage';
//import AccountCreationPage from './AccountCreationPage/AccountCreationPage';
//import ProfileCreation from './ProfileCreation/ProfileCreation';
//import MainMatching from './MainMatching/MainMatching';
//import Chats from './Chats/Chats';
//import ChatRoom from './ChatRoom/ChatRoom';
//import LoginPage from './LoginPage/LoginPage';
import Matches from './Matches/Matches';




import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Matches />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
