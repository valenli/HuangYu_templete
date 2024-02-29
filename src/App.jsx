import "./App.css";
import weblogo from "./assets/tigerlogo.png";
import tigerbanner from "./assets/tigerbanner.png";
import React, { useRef } from "react";




function App() {
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const servicesRef = useRef(null);
  const newsRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth"
    });
  };

  return (
    <div className="App">
      
      <header className="header">
        <div className="logo">
          <a href="">
            <img src={weblogo} alt="Logo" />
          </a>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="#about" onClick={() => scrollToRef(aboutRef)}>
                關於我們
              </a>
            </li>
            <li>
              <a href="#products" onClick={() => scrollToRef(productsRef)}>
                產品分類
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => scrollToRef(servicesRef)}>
                服務項目
              </a>
            </li>
            <li>
              <a href="#news" onClick={() => scrollToRef(newsRef)}>
                最新消息
              </a>
            </li>
          </ul>
        </nav>
      </header>
      
      
      


      <div className="banner" id="about" ref={aboutRef}>
        <img className="banner-img" src={tigerbanner} alt="Banner" />
        <div className="banner-content">
          <h1>關於我們</h1>
          <p>這裡是關於我們產品介紹</p>
        </div>
      </div>
      <div className="banner" id="products" ref={productsRef}>
        <img className="banner-img" src={tigerbanner} alt="Banner" />
        <div className="banner-content">
          <h1>產品分類</h1>
          <p>這裡是關於我們產品介紹</p>
          

        </div>
      </div>
      <div className="banner" id="services" ref={servicesRef}>
        <img className="banner-img" src={tigerbanner} alt="Banner" />
        <div className="banner-content">
          <h1>服務項目</h1>
          <p>這裡是關於我們產品介紹</p>
        </div>
      </div>
      <div className="banner" id="news" ref={newsRef}>
        <img className="banner-img" src={tigerbanner} alt="Banner" />
        <div className="banner-content">
          <h1>最新消息</h1>
          <p>這裡是關於我們產品介紹</p>
        </div>
      </div>
      



      <footer className="footer">
        <div className="footer-content">
          <p>Copyright © 2024 Tiger Pill. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
