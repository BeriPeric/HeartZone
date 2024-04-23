import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import LaunchPage from '../dir/launchpage/LaunchPage';
import AccountCreationPage from '../dir/AccountCreationPage/AccountCreationPage';
import ProfileCreation from '../dir/ProfileCreation/ProfileCreation';
import MainMatching from '../dir/MainMatching/MainMatching';
import Chats from '../dir/Chats/Chats';
import ChatRoom from '../dir/ChatRoom/ChatRoom';
import LoginPage from '../dir/LoginPage/LoginPage';
import Matches from '../dir/Matches/Matches';
import ProfileView from '../dir/ProfileView/ProfileView';
import reportWebVitals from '../dir/reportWebVitals';

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
