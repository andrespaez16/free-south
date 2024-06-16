import React from "react";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/App.css";
import Home from "./components/home";
import Cart from './components/Cart';
import men_banner from './assets/calzado.png'
import women_banner from './assets/ropa.png'
import kid_banner from './assets/accesorios.png'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/accesorios' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/ropa' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/calzado' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
