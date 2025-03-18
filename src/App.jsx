import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminUser from "./pages/AdminDashboard/AdminUser";
import AdminTransaction from "./pages/AdminDashboard/AdminTransaction";
import AdminStakes from "./pages/AdminDashboard/AdminStakes";
import AdminKyc from "./pages/AdminDashboard/AdminKyc";
import { Adminsupport } from "./pages/AdminDashboard/Adminsupport";
import AdminProfile from "./pages/AdminDashboard/AdminProfile";
import Login from "./pages/AdminDashboard/Login";
import { Toaster } from "react-hot-toast";
import { AdminUserDetails } from "./pages/AdminDashboard/AdminUserDetails";
import { AddAdminStake } from "./pages/AdminDashboard/AddAdminStake";
import { AdminCurrency } from "./pages/AdminDashboard/AdminCurrency";
import { AdminCurrencymore } from "./pages/AdminDashboard/AdminCurrencymore";
import { VerifyOtp } from "./pages/AdminDashboard/VerifyOtp";
import { AdminSupportdetails } from "./pages/AdminDashboard/AdminSupportdetails";
import { AdminAnnouncement } from "./pages/AdminDashboard/AdminAnnouncement";
import { AddNewmarquee } from "./pages/AdminDashboard/AddNewmarquee";
import { Adminkycdetails } from "./pages/AdminDashboard/Adminkycdetails";
import { AdminAnnouncementdetails } from "./pages/AdminDashboard/AdminAnnouncementdetails";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Toaster position="top-right" />
          <Routes>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/" element={<Login />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route path="/admin-user" element={<AdminUser />} />
            <Route path="/admin-transaction" element={<AdminTransaction />} />
            <Route path="/admin-stakes" element={<AdminStakes />} />
            <Route path="/admin-kyc" element={<AdminKyc />} />
            <Route path="/admin-support" element={<Adminsupport />} />
            <Route path="/admin-profile" element={<AdminProfile />} />
            <Route path="/admin-user-details" element={<AdminUserDetails />} />
            <Route path="/ " element={<AddAdminStake />} />
            <Route path="/admin-currency-management" element={<AdminCurrency />} />
            <Route path="/admin-currency-moreinfo" element={<AdminCurrencymore />} />
            <Route path="/admin-support-details" element={<AdminSupportdetails />} />
            <Route path="/admin-announcment" element={<AdminAnnouncement />} />
            <Route path="/admin-add-marquee" element={<AddNewmarquee />} />
            <Route path="/admin-kyc-details" element={<Adminkycdetails />} />
            <Route path="/admin-announcement-details" element={<AdminAnnouncementdetails />} />
            <Route path="/*" element={<Navigate to={"/"} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
