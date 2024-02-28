import "./App.css";
import weblogo from "./assets/tigerlogo.png";
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
    </>
  );
}

export default App;
