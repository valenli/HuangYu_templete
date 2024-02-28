import "./App.css";
import weblogo from "./assets/tigerlogo.png";
import tigerbanner from "./assets/tigerbanner.png";



function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <a href="https://yourwebsite.com">
            <img src={weblogo} alt="Logo" />
          </a>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="#about">關於我們</a>
            </li>
            <li>
              <a href="#products">產品分類</a>
            </li>
            <li>
              <a href="#contact">服務項目</a>
            </li>
            <li>
              <a href="#news">最新消息</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="banner">
      <img className="banner-img" src={tigerbanner} alt="Banner" />
      <div className="banner-content">
        <h1>Welcome to Our Website!</h1>
        <p>Discover Amazing Products and Services.</p>
        <a href="#learn-more" className="btn">Learn More</a>
      </div>
    </div>
    <div className="footer">
<footer>
  <div className="footer-content">
    <p>Copyright © 2024 Tiger Pill.All Rights Reserved.</p>
  </div>
</footer>
    </div>
    </>
  );
}

export default App;
