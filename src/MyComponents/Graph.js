import React from "react";
import "./Graph.css";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Graph = (props) => {
  const stroke = {
    strokeDashoffset: 440 - (440 * props.completionRate) / 100,
  };
  const option = {
    responsive: true,
    plugins: {
      legend: { position: "chartArea" },
      title: {
        display: true,
        text: "Total Play vs Unique Play",
      },
    },
  };

  const data = {
    labels: ['Total Play                                                 Unique Play'],
    datasets: [
      {
        label: "Total Play",
        data: [props.TotalPlays],
        backgroundColor: "rgb(88, 248, 88)",
      },
      {
        label: "Unique Play",
        data: [props.uniquePlays],
        backgroundColor: "rgb(255, 255, 0)",
      },
    ],
  };

  return (
    <>

      <div className="graph">
        <div className="name">
          <div className="title">
            <div>{props.id}.</div>
          </div>
          <img src={props.img} alt="img" className="img" />
          <div className="title">
            <div>{props.title}</div>
          </div>
        </div>

        <div className="twoBox">
          <div className="one">
            <Bar options={option} data={data} />
          </div>
          <div className="two">
            <div className="box">
              <div className="percent">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70" style={stroke}></circle>
                </svg>
                <div className="num">
                  <h2>
                    {props.completionRate}
                    <span>%</span>
                  </h2>
                </div>
              </div>
              <h2 className="text">Completion Rate</h2>
            </div>
          </div>
        </div>
        <div className="threeBox">
          <div className="ones">
            <h1 class="dashTitle">TOTAL PLAYS</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span className="txt">{props.TotalPlays}</span>
            </div>
          </div>
          <div className="twos">
            <h1 class="dashTitle">UNIQUE PLAYS</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span className="txt">{props.uniquePlays}</span>
            </div>
          </div>
          <div className="threes">
            <h1 class="dashTitle">COMPLETION RATE</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="txt">{props.completionRate}%</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;
