import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import * as dirs from './dirs/import-dirs.js';
import reportWebVitals from './reportWebVitals';

// Get the container element
const container = document.getElementById('root');
const root = createRoot(container); // Create a root instance

// Routes to different pages of our app
root.render(
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
  </Router>
);

// Optionally, you can continue to use reportWebVitals or any other analytics or performance monitoring logic
reportWebVitals();