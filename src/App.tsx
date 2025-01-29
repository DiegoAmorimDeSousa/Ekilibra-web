import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/signin';
import SignupPage from './pages/auth/signup';
import HomePage from './pages/home';
import BillsPage from './pages/bills';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/bills" element={<BillsPage />} />
    </Routes>
  </Router>
);

export default App;
