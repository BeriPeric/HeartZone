import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import LaunchPage from './launchpage/LaunchPage';
import AccountCreationPage from './AccountCreationPage/AccountCreationPage';
import ProfileCreation from './ProfileCreation/ProfileCreation';
import MainMatching from './MainMatching/MainMatching';
import Chats from './Chats/Chats';
import ChatRoom from './ChatRoom/ChatRoom';
import LoginPage from './LoginPage/LoginPage';
import Matches from './Matches/Matches';
import ProfileView from './ProfileView/ProfileView';
import reportWebVitals from './reportWebVitals';

//Routes to different pages of our app
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<LaunchPage />} />
      <Route path="/accountcreationpage" element={<AccountCreationPage />} />
      <Route path="/profilecreation" element={<ProfileCreation />} />
      <Route path="/mainmatching" element={<MainMatching />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/chatroom" element={<ChatRoom />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="/profileview" element={<ProfileView />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
