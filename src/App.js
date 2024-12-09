import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Appointments from './pages/Appointments'
import Reviews from './pages/Reviews'
import Search from './pages/Search'
import SocialMedia from './pages/socialMedia'
import TermCondition from './pages/termCondition'
import VideoCall from './pages/videoCall'
import VoiceCall from './pages/voiceCall'
import Favourites from './pages/Favourites'
import Booking from './pages/Booking'
import Chat from './pages/Chat'
import Header from './components/Header'
import Footer from './components/Footer'
import ScheduleTimings from './pages/scheduleTimings'
import DoctorRegister from './pages/doctorRegister'
import Invoice from './pages/Invoice'
import PatientProfile from './pages/patientProfile'
import Checkout from './pages/Checkout'
import AddPrescription from './pages/addPrescription'
import AddBilling from './pages/addBilling'
import DoctorProfile from './pages/doctorProfile'
import DoctorDashboard from './pages/doctorDashboard'
import DoctorProfileSettings from './pages/doctorProfileSettings'
import BookingSuccess from './pages/bookingSuccess'
import InvoiceView from './pages/invoiceView'
import ProfileSettings from './pages/profileSettings'
import ChangePassword from './pages/changePassword'
import ForgotPassword from './pages/forgotPassword'
import patientProfile from './pages/patientProfile'
import {BrowserRouter, Routes, Route, Navigate, useLocation} from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AdminLayout from './components/AdminLayout' 
import AdminDashboard from './pages/admin/AdminDashboard'
import Specialities from './pages/admin/Specialities'
import DoctorList from './pages/admin/DoctorList'
import PatientList from './pages/admin/PatientList'
import TransactionsList from './pages/admin/TransactionsList'
import Appointment from './pages/admin/Appointment'



function MainRoutes() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div>
      {!isAdminRoute && <Header />}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctorProfile" element={<DoctorProfile />} />
          <Route path="/doctorAppointment" element={<doctorAppointment />} />
          <Route path="/patientProfile" element={<PatientProfile />} />
          <Route path="/patientDashboard" element={<patientDashboard />} />
          <Route path="/privacyPolicy" element={<privacyPolicy />} />
          <Route path="/profileSettings" element={<ProfileSettings />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/scheduleTimings" element={<ScheduleTimings />} />
          <Route path="/search" element={<Search />} />
          <Route path="/socialMedia" element={<socialMedia />} />
          <Route path="/termCondition" element={<TermCondition />} />
          <Route path="/videoCall" element={<VideoCall />} />
          <Route path="/voiceCall" element={<VoiceCall />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/doctorRegister" element={<DoctorRegister />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/patientProfile" element={<PatientProfile />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/addPrescription" element={<AddPrescription />} />
          <Route path="/addBilling" element={<AddBilling />} />
          <Route path="/doctorProfileSettings" element={<DoctorProfileSettings />} />
          <Route path="/doctorDashboard" element={<DoctorDashboard />} />
          <Route path="/bookingSuccess" element={<BookingSuccess />} />
          <Route path="/invoiceView" element={<InvoiceView />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Appointments" element={<Appointments />} />
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route path="AdminDashboard" element={<AdminDashboard />} />
            <Route path="specialities" element={<Specialities />} />
            <Route path="DoctorList" element={<DoctorList />} />
            <Route path="PatientList" element={<PatientList />} />
            <Route path="TransactionsList" element={<TransactionsList />} />
            <Route path="appointment" element={<Appointment />} />
          </Route>
        </Routes>
        {!isAdminRoute && <Footer />}
      </div>
  )
}



function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App