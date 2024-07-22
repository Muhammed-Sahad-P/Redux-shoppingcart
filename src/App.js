import { Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
