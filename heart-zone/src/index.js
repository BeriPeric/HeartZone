import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import * as dirs from './dirs/import-dirs.js'
import reportWebVitals from './reportWebVitals';

//Routes to different pages of our app
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<dirs.LaunchPage />} />
      <Route path="/accountcreationpage" element={<dirs.AccountCreationPage />} />
      <Route path="/profilecreation" element={<dirs.ProfileCreation />} />
      <Route path="/mainmatching" element={<dirs.MainMatching />} />
      <Route path="/chats" element={<dirs.Chats />} />
      <Route path="/chatroom" element={<dirs.ChatRoom />} />
      <Route path="/loginpage" element={<dirs.LoginPage />} />
      <Route path="/matches" element={<dirs.Matches />} />
      <Route path="/profileview" element={<dirs.ProfileView />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
