import React from "react";
import "./Navbar.css";
import weblogo from "../../assets/tigerlogo.png";

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="">
          <img src={weblogo} alt="Logo" />
        </a>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <a href="#about">關於我們</a>
          </li>
          <li>
            <a href="#products">產品分類</a>
          </li>
          <li>
            <a href="#services">服務項目</a>
          </li>
          <li>
            <a href="#news">最新消息</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
