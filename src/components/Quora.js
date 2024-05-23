import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widget";
import Navbar from "./Navbar";
import "../css/Quora.css";

function Quora() {
  return (
    <>
      <Navbar />
      <div className='quora__content'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </>
  );
}

export default Quora;
