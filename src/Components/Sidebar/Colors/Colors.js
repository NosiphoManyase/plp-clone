import React from "react";
import tick from '../../../assets/tickIcon.png'
import multiColor from '../../../assets/multi-swatch.png'

const Colors = () => {
  return (
    <div className="colors">
      <div className="side-bar-list">
        <span className="checkbox ml-2 mr-2.5 ticked">
          <img src={tick}/>
        </span>
        <div className="color-box bg-trueGray-900"></div>
        <span className="color-name">Black</span>
        <span className="color-quantity">132</span>
      </div>
      <div className="side-bar-list">
        <span className="checkbox ml-2 mr-2.5"></span>
        <div className="color-box bg-blue-500"></div>
        <span className="color-name">Blue</span>
        <span className="color-quantity">13</span>
      </div>
      <div className="side-bar-list">
        <span className="checkbox ml-2 mr-2.5 ticked">
          <img src={tick}/>
        </span>
        <div className="color-box bg-[#FF0000]"></div>
        <span className="color-name">Red</span>
        <span className="color-quantity">6</span>
      </div>
      <div className="side-bar-list">
        <span className="checkbox ml-2 mr-2.5"></span>
        <div className="color-box bg-[#00AB67]"></div>
        <span className="color-name">Green</span>
        <span className="color-quantity">46</span>
      </div>
      <div className="side-bar-list">
        <div className="checkbox ml-2 mr-2.5"></div>
        <span className="color-box"><img src={multiColor} alt=''/></span>
        <span className="color-name">Multi</span>
        <span className="color-quantity">1</span>
      </div>
      <div className="side-bar-list">
        <span className="checkbox ml-2 mr-2.5 ticked">
          <img src={tick}/>
        </span>
        <div className="color-box bg-amber-500"></div>
        <span className="color-name">Orange</span>
        <span className="color-quantity">19</span>
      </div>
      <div className="side-bar-list">
        <span className="checkbox ml-2 mr-2.5"></span>
        <div className="color-box bg-[#FE61AC]"></div>
        <span className="color-name">Pink</span>
        <span className="color-quantity">18</span>
      </div>
      <div className="side-bar-list">
        <span className="checkbox ml-2 mr-2.5"></span>
        <div className="color-box bg-white"></div>
        <span className="color-name">White</span>
        <span className="color-quantity">86</span>
      </div>
      <div className="side-bar-list">
        <span className="checkbox ml-2 mr-2.5"></span>
        <div className="color-box bg-[#FFFF00]"></div>
        <span className="color-name">Yellow</span>
        <span className="color-quantity">4</span>
      </div>
    </div>
  );
};

export default Colors;
