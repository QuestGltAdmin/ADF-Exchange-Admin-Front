import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard'
import AdminUser from './pages/AdminDashboard/AdminUser';
import AdminTransaction from './pages/AdminDashboard/AdminTransaction';
import AdminStakes from './pages/AdminDashboard/AdminStakes';
import AdminKyc from './pages/AdminDashboard/AdminKyc';
import { Adminsupport } from './pages/AdminDashboard/Adminsupport';
import { Adminkycedit } from './pages/AdminDashboard/Adminkycedit';
import AdminProfile from './pages/AdminDashboard/AdminProfile';

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/admin-user" element={<AdminUser />} />
              <Route path="/admin-transaction" element={<AdminTransaction />} />
              <Route path="/admin-stakes" element={<AdminStakes />} />
              <Route path="/admin-kyc" element={<AdminKyc />} />
              <Route path="/admin-kyc-edit" element={<Adminkycedit />} />
              <Route path="/admin-support" element={<Adminsupport />} />
              <Route path="/admin-profile" element={<AdminProfile />} />
            </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
