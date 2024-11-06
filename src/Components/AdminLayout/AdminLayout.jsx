import React from 'react';
// import Footer from "./Footer";
import AdminHeader from "./AdminHeader";

function AdminLayout(props) {
  return (
    <div className="dashboard-layout admin-section">
            <div className="inner-dash-bpx">
              <AdminHeader/>
              {props.children}
              {/* <Footer/> */}
            </div>
        </div>
  )
}

export default AdminLayout