import React from 'react'
import weblogo from "./assets/tigerlogo.png";
const Header = ({ scrollToRef }) => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={weblogo} alt="Logo" />
        </a>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#about" onClick={() => scrollToRef("about")}>
              關於我們
            </a>
          </li>
          <li>
            <a href="#products" onClick={() => scrollToRef("products")}>
              產品分類
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => scrollToRef("services")}>
              服務項目
            </a>
          </li>
          <li>
            <a href="#news" onClick={() => scrollToRef("news")}>
              最新消息
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
