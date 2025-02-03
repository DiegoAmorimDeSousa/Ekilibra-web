import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/signin';
import SignupPage from './pages/auth/signup';
import HomePage from './pages/home';
import BillsPage from './pages/bills';
import MembersPage from './pages/members';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/bills" element={<BillsPage />} />
      <Route path="/members" element={<MembersPage />} />
    </Routes>
  </Router>
);

export default App;
