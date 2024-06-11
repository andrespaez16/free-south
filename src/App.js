import React from "react";
import Navbar from "./components/navBar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Newsletter from "./components/Newsletter";
import Analytics from "./components/cards";
import Carrusel from "./components/carrusel";
import Info from "./components/info";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/App.css";
import Home from "./components/home";
import Cart from './components/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
