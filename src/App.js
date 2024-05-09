import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import OrderList from './OrderList';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/orderList" element={<OrderList />} />
      </Routes>
    </Router>
  );
}

export default App;