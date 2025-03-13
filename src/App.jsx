import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminUser from "./pages/AdminDashboard/AdminUser";
import AdminTransaction from "./pages/AdminDashboard/AdminTransaction";
import AdminStakes from "./pages/AdminDashboard/AdminStakes";
import AdminKyc from "./pages/AdminDashboard/AdminKyc";
import { Adminsupport } from "./pages/AdminDashboard/Adminsupport";
import { Adminkycedit } from "./pages/AdminDashboard/Adminkycedit";
import AdminProfile from "./pages/AdminDashboard/AdminProfile";
import Login from "./pages/AdminDashboard/Login";
import { Toaster } from "react-hot-toast";
import { AdminUserDetails } from "./pages/AdminDashboard/AdminUserDetails";
import { AddAdminStake } from "./pages/AdminDashboard/AddAdminStake";
import { AdminCurrency } from "./pages/AdminDashboard/AdminCurrency";
import { AdminCurrencymore } from "./pages/AdminDashboard/AdminCurrencymore";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Toaster position="top-right" />
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/admin-login" element={<Login />} />
            <Route path="/admin-user" element={<AdminUser />} />
            <Route path="/admin-transaction" element={<AdminTransaction />} />
            <Route path="/admin-stakes" element={<AdminStakes />} />
            <Route path="/admin-kyc" element={<AdminKyc />} />
            <Route path="/admin-kyc-edit" element={<Adminkycedit />} />
            <Route path="/admin-support" element={<Adminsupport />} />
            <Route path="/admin-profile" element={<AdminProfile />} />
            <Route path="/admin-user-details" element={<AdminUserDetails />} />
            <Route path="/admin-add-stake" element={<AddAdminStake />} />
            <Route path="/admin-currency-management" element={<AdminCurrency />} />
            <Route path="/admin-currency-moreinfo" element={<AdminCurrencymore />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
