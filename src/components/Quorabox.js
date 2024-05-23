import { Avatar } from "@mui/material";
import React from "react";
import "../css/Quorabox.css";

function Quorabox() {
  return (
    <div className='quoraBox'>
      <div className='quoraBox__info'>
        <Avatar />
        <p>username</p>
      </div>
      <h5>What is Your Question or Link?</h5>
    </div>
  );
}

export default Quorabox;
