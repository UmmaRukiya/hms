import * as React from 'react';

import Register from './pages/Register';
import Login from './pages/Login';

import Dashboard from './pages/Dashboard';
import Doctor from './pages/Doctor';
import DoctorAdd from './pages/Doctor/DoctorAdd';
import Patient from './pages/Patient';
import PatientAdd from './pages/Patient/PatientAdd';
import Nurse from './pages/Nurse';
import NurseAdd from './pages/Nurse/NurseAdd';
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
           <Route path={"/doctor"} element={
          <Protected isSignedIn={isSignedIn} >
            <Doctor />
          </Protected>
        } />
        <Route path={"/doctor/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <DoctorAdd />
          </Protected>
        } />
        <Route path={"/doctor/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <DoctorAdd />
          </Protected>
        } />
           <Route path={"/patient"} element={
          <Protected isSignedIn={isSignedIn} >
            <Patient />
          </Protected>
        } />
        <Route path={"/patient/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <PatientAdd />
          </Protected>
        } />
        <Route path={"/patient/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <PatientAdd />
          </Protected>
        } />
           <Route path={"/nurse"} element={
          <Protected isSignedIn={isSignedIn} >
            <Nurse />
          </Protected>
        } />
        <Route path={"/nurse/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <NurseAdd />
          </Protected>
        } />
        <Route path={"/nurse/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <NurseAdd />
          </Protected>
        } />
          
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
