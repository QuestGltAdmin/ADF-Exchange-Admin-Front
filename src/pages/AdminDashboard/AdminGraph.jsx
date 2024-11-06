import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Chart } from "react-google-charts";

const AdminGraph = () => {
 

  //=========================Graph =========================//
  // pie graph
  const data = [
    ["", ""],
    ["Total Kyc", 4],
    ["Approved Kyc", 2],
  ];
  const options = {
    title: "",
    pieHole: 0.7,
    pieSliceText: "none",
    is3D: false,
    legend: { position: "top", maxLines: 2 ,
      textStyle: {
        color: '#bfbfbf', 
      },
     },      
    backgroundColor: '#212023',  
    slices: {
      0: { color: "#E9F1FF" },
      1: { color: "#E07A00" },
     
    },
  };

  // buygraph
  const buydata = [
    [
      "",
      `March Data`,
      `Feb Data`,
      `April Data`,
    ],
    [10,  10,  24, 22],
    [20,  22, 12,  12],
    [30,  14,  20, 30],
  ];
  const buyoption = {
    title: "",
    legend: "none",
    backgroundColor: '#212023',  
    colors:  ["#E07A00", "#fba338", "#f3bd7c"],
    vAxis: {
      gridlines: {
        color: "transparent",
      },
      textStyle: { color: "#AEAEB2"},
      baselineColor: "#AEAEB2",
    },
    hAxis: {
      gridlines: {
        color: "transparent",
      },
      textStyle: { color: "#AEAEB2"},
      baselineColor: "#AEAEB2",
    },
  };

  // swap graph
  const swapdata = [
    [
      "",
      `March Data`,
      `Feb Data`,
      `April Data`,
    ],
    [10, 21, 10, 10],
    [20, 26, 24, 15],
    [30, 31, 30, 20],
  ];

  const swapoption = {
    title: "",
    legend: "none",
    backgroundColor: '#212023',  
    colors: ["#E07A00", "#fba338", "#f3bd7c"],
    vAxis: {
      gridlines: {
        color: "transparent",
      },
      textStyle: { color: "#AEAEB2"},
      baselineColor: "#AEAEB2",
    },
    hAxis: {
      gridlines: {
        color: "transparent",
      },
      textStyle: { color: "#AEAEB2"},
      baselineColor: "#AEAEB2",
    },
  };

  // stake graph//
  const stakedata = [
    [
      "",
      `March Data`,
      `Feb Data`,
      `April Data`,
    ],
    [10, 20, 10, 20],
    [20, 30, 15, 25],
    [38, 35, 38, 30],
  ];

  const stakeoption = {
    title: "",
    legend: "non0e",
    backgroundColor: '#212023',  
    colors:  ["#E07A00", "#fba338", "#f3bd7c"],
    vAxis: {
      gridlines: {
        color: "transparent",
      },
      textStyle: { color: "#AEAEB2"},
      baselineColor: "#AEAEB2",
    },
    hAxis: {
      gridlines: {
        color: "transparent",
      },
      textStyle: { color: "#AEAEB2"},
      baselineColor: "#AEAEB2",
    },
  };
  //========================= end of code =========================//
  return (
    <>
      <div>
       
         
          <Row>
            <Col xl={4} lg="12">
              <div className="dashboard-admin-box mb-3">
                <Row>
                  <Col lg={5} md="5" sm="4" >
                    <div>
                      <h5>Approved Kyc</h5>
                      <h2>455</h2>
                      <h5>Number of Kyc</h5>
                      <h3>3232</h3>
                    </div>
                  </Col>
                  <Col lg={7} md="7" sm="8" >
                    <div>
                      <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                      />
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
                      <h5>Transaction made</h5>
                      <h3>33</h3>
                      <h5>Transaction Complete</h5>
                      <h3 className="green-text">
                        556
                      </h3>
                      <h5>Transaction Pending</h5>
                      <h3 className="gray-text">
                        23
                      </h3>
                    </div>
                  </Col>
                  <Col lg={9} md="9" sm="8">
                    <div className="line-graphs-outer">
                      <div className="graph-heading">
                        <h5>Data and Analysis</h5>
                        <div className="month-color-box">
                          <p className="first-line">
                            <span></span> March Data
                          </p>
                          <p className="sec-line">
                            <span></span> February  Data
                          </p>
                          <p className="third-line">
                            <span></span>
                            January Data
                          </p>
                        </div>
                      </div>
                      <Row>
                        <Col lg={4} md="4" sm="6">
                          <div className="graph-inner">
                            <h5>Buy and sell</h5>
                            <h4>22,526</h4>
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
                            <h4>12,004</h4>
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
                            <h4>24,340</h4>
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
