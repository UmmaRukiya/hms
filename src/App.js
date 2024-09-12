import * as React from 'react';

import Register from './pages/Register';
import Login from './pages/Login';

import Dashboard from './pages/Dashboard';
import Fahim from './pages/Fahim';
import Ramjan from './pages/Ramjan';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/fahim" element={<Fahim />} />
          <Route path="/ramjan" element={<Ramjan />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
