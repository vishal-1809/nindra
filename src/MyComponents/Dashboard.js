import React, { useState } from "react";
import "./Dashboard.css";
import items from "./Items";
import Graph from "./Graph";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [id, setId] = useState(1);
  const [img, setImg] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1hIEbK-aCjl7lwKYI49sUp5HScciDgZesnLru0hGe5tu9kkPYC8aE7MN-fp9Tw2MvPc&usqp=CAU");
  const [title, setTitle] = useState('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum exercitationem');
  const [uniquePlays, setUniquePlays] = useState(1000);
  const [TotalPlays, setTotalPlays] = useState(1523);
  const [completionRate, setCompletionRate] = useState(60);

  const graphThis = (items) => {
    setId(items.id);
    setImg(items.img)
    setTitle(items.title);
    setUniquePlays(items.unique_plays);
    setTotalPlays(items.total_plays);
    setCompletionRate(items.completion_rate);
  }

  return (
    <>
      <div className="dashboard">
        <div id="menu">
          <div style={{ display: "flex" }}>
            <img
              src="https://cdn.logo.com/hotlink-ok/logo-social.png"
              alt="Logo"
              className="logo"
            />
            <h1 class="mint">Logo</h1>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 class="dashTitle">DASHBOARD</h1>
          </div>
          <div className="items">
            {items.map((items, id) => (
              <div className="box" key={id} onClick={()=>graphThis(items)}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4 style={{ marginRight: "0.3rem" }} title={items.title}>
                    {items.id}.{" "}
                  </h4>
                </div>
                <img
                  src={items.img}
                  alt="img"
                  className="songImg"
                  title={items.title}
                />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span title={items.title}>
                    {items.title.substring(0, 15)} ...
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 menuIcon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <div id="bar">
          <div className="searchBar">
            <div className="srchBar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 srchIcon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input type="text" placeholder="Search" className="srch" />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 homeIcon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 dashIcon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 notIcon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 userIcon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <div className="graphs">
            <Graph id={id} img={img} title={title} uniquePlays={uniquePlays} TotalPlays={TotalPlays} completionRate={completionRate}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
