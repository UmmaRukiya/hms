import * as React from 'react';

import Register from './pages/Register';
import Login from './pages/Login';

import Dashboard from './pages/Dashboard';
import Fahim from './pages/Fahim';
import Ramjan from './pages/Ramjan';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from './components/protected';
function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path={"/"} element={
            <Protected isSignedIn={isSignedIn} >
              <Dashboard />
            </Protected>
          } />
          <Route path="/fahim" element={<Fahim />} />
          <Route path="/ramjan" element={<Ramjan />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
