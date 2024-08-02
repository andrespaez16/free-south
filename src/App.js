import React from "react";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "../src/App.css";
import Home from "./components/home";
import Cart from './components/Cart';

function App() {
  console.log("backend url", process.env.REACT_APP_BACKEND_URL);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route
            path='/categories/:categoryId'
            element={<ShopCategory/>}
          />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
