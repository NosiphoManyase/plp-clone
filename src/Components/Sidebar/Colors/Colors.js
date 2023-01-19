import React from "react";
import tick from '../../../assets/tickIcon.png'
import multiColor from '../../../assets/multi-swatch.png'
import "./colors.scss";

const Colors = () => {
  return (
    <div className="colors">
      <div className="color">
        <span className="checkbox ticked">
          <img src={tick}/>
        </span>
        <div className="color__box black"></div>
        <span className="color__name">Black</span>
        <span className="color__quantity">132</span>
      </div>
      <div className="color">
        <span className="checkbox"></span>
        <div className="color__box blue"></div>
        <span className="color__name">Blue</span>
        <span className="color__quantity">13</span>
      </div>
      <div className="color">
        <span className="checkbox ticked">
          <img src={tick}/>
        </span>
        <div className="color__box red"></div>
        <span className="color__name">Red</span>
        <span className="color__quantity">6</span>
      </div>
      <div className="color">
        <span className="checkbox"></span>
        <div className="color__box green"></div>
        <span className="color__name">Green</span>
        <span className="color__quantity">46</span>
      </div>
      <div className="color">
        <div className="checkbox"></div>
        <span className="color__box"><img src={multiColor} alt=''/></span>
        <span className="color__name">Multi</span>
        <span className="color__quantity">1</span>
      </div>
      <div className="color">
        <span className="checkbox ticked">
          <img src={tick}/>
        </span>
        <div className="color__box orange"></div>
        <span className="color__name">Orange</span>
        <span className="color__quantity">19</span>
      </div>
      <div className="color">
        <span className="checkbox"></span>
        <div className="color__box pink"></div>
        <span className="color__name">Pink</span>
        <span className="color__quantity">18</span>
      </div>
      <div className="color">
        <span className="checkbox"></span>
        <div className="color__box white"></div>
        <span className="color__name">White</span>
        <span className="color__quantity">86</span>
      </div>
      <div className="color">
        <span className="checkbox"></span>
        <div className="color__box yellow"></div>
        <span className="color__name">Yellow</span>
        <span className="color__quantity">4</span>
      </div>
    </div>
  );
};

export default Colors;
