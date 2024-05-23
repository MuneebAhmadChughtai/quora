import React from "react";
import WidgetOptions from "./WidgetOption";
import "../css/Widget.css";

function Widgets() {
  return (
    <div className='Widgets'>
      <div className='Widgets__header'>Spaces to Follow</div>
      <WidgetOptions />
      <WidgetOptions />
      <WidgetOptions />
      <WidgetOptions />
      <WidgetOptions />
    </div>
  );
}

export default Widgets;
