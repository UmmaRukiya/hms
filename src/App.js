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
import Blood from './pages/Blood';
import BloodAdd from './pages/Blood/BloodAdd';
import Shift from './pages/Shift';
import ShiftAdd from './pages/Shift/ShiftAdd';
import Day from './pages/Day';
import DayAdd from './pages/Day/DayAdd';
import Department from './pages/Department';
import DepartmentAdd from './pages/Department/DepartmentAdd';
import Designation from './pages/Designation';
import DesignationAdd from './pages/Designation/DesignationAdd';
import RoomCat from './pages/RoomCat';
import RoomCatAdd from './pages/RoomCat/RoomCatAdd';
import RoomList from './pages/RoomList';
import RoomListAdd from './pages/RoomList/RoomListAdd';
import Employe from './pages/Employe';
import EmployeAdd from './pages/Employe/EmployeAdd';
import Appointment from './pages/Appointment';
import AppointmentAdd from './pages/Appointment/AppointmentAdd';
import Prescription from './pages/Prescription';
import PrescriptionAdd from './pages/Prescription/PrescriptionAdd';
import Schedule from './pages/Schedule';
import ScheduleAdd from './pages/Schedule/ScheduleAdd';
import InvestCat from './pages/InvestCat';
import InvestCatAdd from './pages/InvestCat/InvestCatAdd';
import MedicineCat from './pages/MedicineCat';
import MedicineCatAdd from './pages/MedicineCat/MedicineCatAdd';
import Medicine from './pages/Medicine';
import MedicineAdd from './pages/Medicine/MedicineAdd';
import InvestList from './pages/InvestList';
import InvestListAdd from './pages/InvestList/InvestListAdd';
import PatientAdmit from './pages/PatientAdmit';
import PatientAdmitAdd from './pages/PatientAdmit/PatientAdmitAdd';
import PatientBill from './pages/PatientBill';
import PatientBillAdd from './pages/PatientBill/PatientBillAdd';
import PatientTest from './pages/PatientTest';
import PatientTestAdd from './pages/PatientTest/PatientTestAdd';
import AppointmentRequest from './pages/Appointment/AppointmentRequest'; 
import AppointmentRequestEdit from './pages/Appointment/AppointmentRequestEdit';
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
           <Route path={"/department"} element={
          <Protected isSignedIn={isSignedIn} >
            <Department />
          </Protected>
        } />
        <Route path={"/department/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <DepartmentAdd />
          </Protected>
        } />
        <Route path={"/department/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <DepartmentAdd />
          </Protected>
        } />
           <Route path={"/designation"} element={
          <Protected isSignedIn={isSignedIn} >
            <Designation />
          </Protected>
        } />
        <Route path={"/designation/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <DesignationAdd />
          </Protected>
        } />
        <Route path={"/designation/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <DesignationAdd />
          </Protected>
        } />
           <Route path={"/day"} element={
          <Protected isSignedIn={isSignedIn} >
            <Day />
          </Protected>
        } />
        <Route path={"/day/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <DayAdd />
          </Protected>
        } />
        <Route path={"/day/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <DayAdd />
          </Protected>
        } />
         <Route path={"/blood"} element={
          <Protected isSignedIn={isSignedIn} >
            <Blood />
          </Protected>
        } />
        <Route path={"/blood/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <BloodAdd />
          </Protected>
        } />
        <Route path={"/blood/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <BloodAdd />
          </Protected>
        } />
         <Route path={"/shift"} element={
          <Protected isSignedIn={isSignedIn} >
            <Shift />
          </Protected>
        } />
        <Route path={"/shift/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <ShiftAdd />
          </Protected>
        } />
        <Route path={"/shift/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <ShiftAdd />
          </Protected>
        } />
         <Route path={"/roomcat"} element={
          <Protected isSignedIn={isSignedIn} >
            <RoomCat />
          </Protected>
        } />
        <Route path={"/roomcat/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <RoomCatAdd />
          </Protected>
        } />
        <Route path={"/roomcat/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <RoomCatAdd />
          </Protected>
        } />
         <Route path={"/roomlist"} element={
          <Protected isSignedIn={isSignedIn} >
            <RoomList />
          </Protected>
        } />
        <Route path={"/roomlist/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <RoomListAdd />
          </Protected>
        } />
        <Route path={"/roomlist/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <RoomListAdd />
          </Protected>
        } />
           <Route path={"/employe"} element={
          <Protected isSignedIn={isSignedIn} >
            <Employe />
          </Protected>
        } />
        <Route path={"/employe/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <EmployeAdd />
          </Protected>
        } />
        <Route path={"/employe/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <EmployeAdd />
          </Protected>
        } />
           <Route path={"/appointment"} element={
          <Protected isSignedIn={isSignedIn} >
            <Appointment />
          </Protected>
        } />
        <Route path={"/appointment/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <AppointmentAdd />
          </Protected>
        } />
        <Route path={"/appointment/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <AppointmentAdd />
          </Protected>
        } />
        <Route path={"/appointmentrequest"} element={
          <Protected isSignedIn={isSignedIn} >
            <AppointmentRequest />
          </Protected>
        } />
        <Route path={"/appointmentrequest/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <AppointmentRequestEdit />
          </Protected>
        } />
           <Route path={"/prescription"} element={
          <Protected isSignedIn={isSignedIn} >
            <Prescription />
          </Protected>
        } />
        <Route path={"/prescription/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <PrescriptionAdd />
          </Protected>
        } />
        <Route path={"/prescription/add/:app_id"} element={
          <Protected isSignedIn={isSignedIn} >
            <PrescriptionAdd />
          </Protected>
        } />
        <Route path={"/prescription/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <PrescriptionAdd />
          </Protected>
        } />
           <Route path={"/schedule"} element={
          <Protected isSignedIn={isSignedIn} >
            <Schedule />
          </Protected>
        } />
        <Route path={"/schedule/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <ScheduleAdd />
          </Protected>
        } />
        <Route path={"/schedule/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <ScheduleAdd />
          </Protected>
        } />

        <Route path={"/investcat"} element={
          <Protected isSignedIn={isSignedIn} >
            <InvestCat />
          </Protected>
        } />
        <Route path={"/investcat/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <InvestCatAdd />
          </Protected>
        } />
        <Route path={"/investcat/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <InvestCatAdd />
          </Protected>
        } />
        <Route path={"/investlist"} element={
          <Protected isSignedIn={isSignedIn} >
            <InvestList />
          </Protected>
        } />
        <Route path={"/investlist/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <InvestListAdd />
          </Protected>
        } />
        <Route path={"/investlist/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <InvestListAdd />
          </Protected>
        } />
        <Route path={"/medicinecat"} element={
          <Protected isSignedIn={isSignedIn} >
            <MedicineCat />
          </Protected>
        } />
        <Route path={"/medicinecat/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <MedicineCatAdd />
          </Protected>
        } />
        <Route path={"/medicinecat/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <MedicineCatAdd />
          </Protected>
        } />
        <Route path={"/medicine"} element={
          <Protected isSignedIn={isSignedIn} >
            <Medicine />
          </Protected>
        } />
        <Route path={"/medicine/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <MedicineAdd />
          </Protected>
        } />
        <Route path={"/medicine/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <MedicineAdd />
          </Protected>
        } />

        <Route path={"/patientadmit"} element={
          <Protected isSignedIn={isSignedIn} >
            <PatientAdmit />
          </Protected>
        } />
        <Route path={"/patientadmit/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <PatientAdmitAdd />
          </Protected>
        } />
        <Route path={"/patientadmit/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <PatientAdmitAdd />
          </Protected>
        } /> 
        <Route path={"/patientbill"} element={
          <Protected isSignedIn={isSignedIn} >
            <PatientBill />
          </Protected>
        } />
        <Route path={"/patientbill/add/:admit_id?/:patient_id?"} element={
          <Protected isSignedIn={isSignedIn} >
            <PatientBillAdd />
          </Protected>
        } />
        <Route path={"/patientbill/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <PatientBillAdd />
          </Protected>
        } /> 
        <Route path={"/patienttest"} element={
          <Protected isSignedIn={isSignedIn} >
            <PatientTest />
          </Protected>
        } />
        <Route path={"/patienttest/add/:admit_id?/:patient_id?"} element={
          <Protected isSignedIn={isSignedIn} >
            <PatientTestAdd />
          </Protected>
        } />
        
        <Route path={"/patienttest/edit/:testid"} element={
          <Protected isSignedIn={isSignedIn} >
            <PatientTestAdd />
          </Protected>
        } /> 


        </Routes>
      </BrowserRouter>
  );
}

export default App;
