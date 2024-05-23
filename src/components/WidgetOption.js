import React from "react";
import "../css/WidgetOption.css";

function WidgetOptions() {
  return (
    <div class='widgetoptions'>
      <img
        src='https://visualcpp.net/wp-content/uploads/2019/10/cpp_avatar.jpg'
        alt='image of c/c++'
      />
      <div className='widgetoptions__left'>
        <h5 className='widgetoptions__title'>C/C++</h5>
        <p className='widgetoptions__description'>Ask questions about c/C++</p>
      </div>
    </div>
  );
}

export default WidgetOptions;
