import React, { useEffect, useState } from "react";
import AdminLayout from "../../Components/AdminLayout/AdminLayout";
import { Col, Row, Table, Tabs, Tab } from "react-bootstrap";
import { Chart } from "react-google-charts";
import axiosMain from "../../http/axios/axios_main";
import useAuth from "../../hooks/useAuth";

const AdminDashboard = () => {
   const {user} = useAuth()
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ];

  const options = {
    title: "",
    curveType: "function",
    legend: { position: "bottom" },
  };

  const [showData, setShowData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const get_data = await axiosMain?.get("/admin/dashboard", {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${user?.token}`,
        },
      });
      if (get_data?.data?.status) {
        setShowData(get_data?.data?.data);
        setKycGraph({
          ...kycGraph,
          total: get_data?.data?.data?.totalKyc,
          approved: get_data?.data?.data?.approvedKyc,
        });
        console.log("get_data", get_data);
      }
    } catch (err) {}
  };
  return (
    <div>
      <AdminLayout>
        <div>
          <Row>
            <Col lg={5}>
              <div className="shadow-admin-box mt-3">
                <Row>
                  <Col lg={4}>
                    <div className="dash-box-user">
                      <h3 className="text-orange mb-0">
                        1500 <i className="fa fa-user text-white"></i>
                      </h3>
                      <h5 className="mb-0">Active User</h5>
                      <p className="mb-0">visitor per day</p>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="dash-box-user">
                      <h3 className="text-orange mb-0">
                        500 <i className="fa fa-line-chart text-white"></i>
                      </h3>
                      <h5 className="mb-0">Trading Volume</h5>
                      <p className="mb-0">volume per day</p>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="dash-box-user">
                      <h3 className="text-orange mb-0">
                        3500 <i className="fa fa-usd text-white"></i>
                      </h3>
                      <h5 className="mb-0">Total Revenue</h5>
                      <p className="mb-0">Revenue per day</p>
                    </div>
                  </Col>
                </Row>
                <hr />
                <div className="pending-kyc-dash">
                  <div className="d-flex align-items-center gap-3">
                    <i class="fa fa-id-card text-white" aria-hidden="true"></i>
                    <div>
                      <h4 className="mb-0 text-orange">100</h4>
                      <h6>Pending KYC Verifications</h6>
                    </div>
                  </div>
                  <button className="common-btn">View</button>
                </div>
                <hr />
                <div className="pending-kyc-dash">
                  <div className="d-flex align-items-center gap-3">
                    <i class="fa fa-ticket text-white" aria-hidden="true"></i>
                    <div>
                      <h4 className="mb-0 text-orange">25</h4>
                      <h6>Open Support Tickets</h6>
                    </div>
                  </div>
                  <button className="common-btn">View</button>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="shadow-admin-box mt-3">
                <Chart
                  chartType="LineChart"
                  width="100%"
                  height="400px"
                  data={data}
                  options={options}
                />
              </div>
            </Col>
          </Row>
        </div>
      </AdminLayout>
    </div>
  );
};

export default AdminDashboard;
