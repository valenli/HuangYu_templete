import "./App.css";
import React, { useRef } from "react";
import About from "./components/about/About";
import Products from "./components/products/Products";
import Services from "./components/services/Services";
import News from "./components/news/News";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Products />
      <Services />
      <News />
      <Footer />
    </div>
  );
}

export default App;
