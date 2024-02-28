import "./App.css";
import weblogo from "./assets/tigerlogo.png";
import tigerbanner from "./assets/tigerbanner.png";
import React, { useRef,useState,useEffect } from "react";

function App() {

  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const servicesRef = useRef(null);
  const newsRef = useRef(null);

  

  return (
    <>
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
              <a
                href="#about"
                onClick={() =>
                  aboutRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                關於我們
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={() =>
                  productsRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                產品分類
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() =>
                  servicesRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                服務項目
              </a>
            </li>
            <li>
              <a
                href="#news"
                onClick={() =>
                  newsRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                最新消息
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="banner">
        <img className="banner-img" src={tigerbanner} alt="Banner" />
        <div className="banner-content" ref={aboutRef}>
          <h1>關於我們</h1>
          <p>這裡是關於我們產品介紹</p>
          <a href="#learn-more" className="btn">
            Learn More
          </a>
        </div>
      </div>
      <div className="banner">
        <img className="banner-img" src={tigerbanner} alt="Banner" />
        <div className="banner-content" ref={productsRef}>
          <h1>產品分類</h1>
          <p>這裡是關於我們產品介紹</p>
          <a href="#learn-more" className="btn">
            Learn More
          </a>
        </div>
      </div>
      <div className="banner">
        <img className="banner-img" src={tigerbanner} alt="Banner" />
        <div className="banner-content" ref={servicesRef}>
          <h1>服務項目</h1>
          <p>這裡是關於我們產品介紹</p>
          <a href="#learn-more" className="btn">
            Learn More
          </a>
        </div>
      </div>
      <div className="banner">
        <img className="banner-img" src={tigerbanner} alt="Banner" />
        <div className="banner-content" ref={newsRef}>
          <h1>最新消息</h1>
          <p>這裡是關於我們產品介紹</p>
          <a href="#learn-more" className="btn">
            Learn More
          </a>
        </div>
      </div>
      <div className="footer">
        <footer>
          <div className="footer-content">
            <p>Copyright © 2024 Tiger Pill.All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
      
    </>
  );
}

export default App;
