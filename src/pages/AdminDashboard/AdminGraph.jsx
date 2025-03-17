import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Chart } from "react-google-charts";
import axiosMain from "../../http/axios/axios_main";
import useAuth from "../../hooks/useAuth";

const AdminGraph = () => {
  const { user } = useAuth();
  const [kycGraph, setKycGraph] = useState({
    total: 0,
    approved: 0,
  });
  const [monthGraph, setMonthGraph] = useState({
    buyAndSell: {
      month1: 0,
      month2: 0,
      month3: 0,
    },
    swap: {
      month1: 0,
      month2: 0,
      month3: 0,
    },
    stake: {
      month1: 0,
      month2: 0,
      month3: 0,
    },
  });

  //=========================Graph =========================//
  // pie graph
  const data = [
    ["", ""],
    ["Total Kyc", kycGraph?.total || 0],
    ["Approved Kyc", kycGraph?.approved || 0],
  ];
  const options = {
    title: "",
    pieHole: 0.7,
    pieSliceText: "none",
    is3D: false,
    legend: {
      position: "top",
      maxLines: 2,
      textStyle: {
        color: "#bfbfbf",
      },
    },
    backgroundColor: "#212023",
    slices: {
      0: { color: "#E9F1FF" },
      1: { color: "#ffa800" },
    },
  };

  // buygraph
  // const buydata = [
  //   ["", `March Data`, `Feb Data`, `April Data`],
  //   [10, 10, 24, 22],
  //   [20, 22, 12, 12],
  //   [30, 14, 20, 30],
  // ];
  const buyoption = {
    title: "",
    legend: "none",
    backgroundColor: "#212023",
    colors: ["#ffa800", "#fba338", "#f3bd7c"],
    vAxis: {
      gridlines: {
        color: "transparent",
      },
      textStyle: { color: "#AEAEB2" },
      baselineColor: "#AEAEB2",
    },
    hAxis: {
      gridlines: {
        color: "transparent",
      },
      textStyle: { color: "#AEAEB2" },
      baselineColor: "#AEAEB2",
    },
  };

  // swap graph
  // const swapdata = [
  //   ["", `March Data`, `Feb Data`, `April Data`],
  //   [10, 21, 10, 10],
  //   [20, 26, 24, 15],
  //   [30, 31, 30, 20],
  // ];

  const swapoption = {
    title: "",
    legend: "none",
    backgroundColor: "#212023",
    colors: ["#ffa800", "#fba338", "#f3bd7c"],
    vAxis: {
      gridlines: {
        color: "transparent",
      },
      textStyle: { color: "#AEAEB2" },
      baselineColor: "#AEAEB2",
    },
    hAxis: {
      gridlines: {
        color: "transparent",
      },
      textStyle: { color: "#AEAEB2" },
      baselineColor: "#AEAEB2",
    },
  };

  // stake graph//
  // const stakedata = [
  //   ["", `March Data`, `Feb Data`, `April Data`],
  //   [10, 20, 10, 20],
  //   [20, 30, 15, 25],
  //   [38, 35, 38, 30],
  // ];

  const stakeoption = {
    title: "",
    legend: "non0e",
    backgroundColor: "#212023",
    colors: ["#ffa800", "#fba338", "#f3bd7c"],
    vAxis: {
      gridlines: {
        color: "transparent",
      },
      textStyle: { color: "#AEAEB2" },
      baselineColor: "#AEAEB2",
    },
    hAxis: {
      gridlines: {
        color: "transparent",
      },
      textStyle: { color: "#AEAEB2" },
      baselineColor: "#AEAEB2",
    },
  };
  //========================= end of code =========================//
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

  const months =
    showData?.dataAnalysis?.buyAndSell &&
    Object.keys(showData?.dataAnalysis?.buyAndSell).filter(
      (key) => key !== "total"
    );

  // Prepare data dynamically
  const formatChartData = (data) => {
    if (!data)
      return [
        ["", "March", "February", "January"],
        [10, 0, 0, 0],
        [20, 0, 0, 0],
        [30, 0, 0, 0],
      ];

    return [
      ["", ...months], // Header row
      [10, ...months.map((month) => data[month] || 0)],
      [20, ...months.map((month) => data[month] || 0)],
      [30, ...months.map((month) => data[month] || 0)],
    ];
  };

  const buydata = formatChartData(showData?.dataAnalysis?.buyAndSell);
  const swapdata = formatChartData(showData?.dataAnalysis?.swaps);
  const stakedata = formatChartData(showData?.dataAnalysis?.stakes);
  return (
    <>
      <div>
        <Row>
          <Col xl={4} lg="12">
            <div className="dashboard-admin-box mb-3">
              <Row>
                <Col lg={5} md="5" sm="4">
                  <div>
                    <h5>Approved Kyc</h5>
                    <h2>{showData?.approvedKyc ? showData?.approvedKyc : 0}</h2>
                    <h5>Number of Kyc</h5>
                    <h3>{showData?.totalKyc ? showData?.totalKyc : 0}</h3>
                  </div>
                </Col>
                <Col lg={7} md="7" sm="8">
                  <div>
                    {kycGraph && (
                      <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                      />
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xl={8} lg="12">
            <div className="user-activity-box mt-">
              <Row>
                <Col lg={3} md="3" sm="4">
                  <div className="first-box">
                    <h4>User Activity</h4>
                    <h5>Total Transaction </h5>
                    <h3>
                      {showData?.transactionMade
                        ? showData?.transactionMade
                        : 0}
                    </h3>
                    <h5>Transaction Complete</h5>
                    <h3 className="green-text">
                      {showData?.transactionComplete
                        ? showData?.transactionComplete
                        : 0}
                    </h3>
                    <h5>Transaction Pending</h5>
                    <h3 className="gray-text">
                      {showData?.transactionPending
                        ? showData?.transactionPending
                        : 0}
                    </h3>
                  </div>
                </Col>
                <Col lg={9} md="9" sm="8">
                  <div className="line-graphs-outer">
                    <div className="graph-heading">
                      <h5>Data and Analysis</h5>
                      <div className="month-color-box">
                        {showData?.dataAnalysis?.buyAndSell &&
                          Object.keys(showData?.dataAnalysis?.buyAndSell)
                            .filter((key) => key !== "total")
                            .map((key) => (
                              <p className="sec-line">
                                <span></span> {key} Data
                              </p>
                            ))}
                      </div>
                    </div>
                    <Row>
                      <Col lg={4} md="4" sm="6">
                        <div className="graph-inner">
                          <h5>Buy and sell</h5>
                          <h4>{showData?.dataAnalysis?.buyAndSell?.total}</h4>
                          <div>
                            <Chart
                              chartType="LineChart"
                              width="100%"
                              height="150px"
                              data={buydata}
                              options={buyoption}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} md="4" sm="6">
                        <div className="graph-inner">
                          <h5>Swaps</h5>
                          <h4>{showData?.dataAnalysis?.swaps?.total}</h4>
                          <div>
                            <Chart
                              chartType="LineChart"
                              width="100%"
                              height="150px"
                              data={swapdata}
                              options={swapoption}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} md="4" sm="6">
                        <div className="graph-inner">
                          <h5>Stakes</h5>
                          <h4>{showData?.dataAnalysis?.stakes?.total}</h4>
                          <div>
                            <Chart
                              chartType="LineChart"
                              width="100%"
                              height="150px"
                              data={stakedata}
                              options={stakeoption}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AdminGraph;
