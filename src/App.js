import React from "react";
import Navbar from "./components/navBar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Newsletter from './components/Newsletter';
import Analytics from './components/cards';
import Carrusel from './components/carrusel';
import Info from './components/info';
import "../src/App.css"

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Info/>
      <Analytics  />
      <Carrusel/>
      <Newsletter />
      <Footer />
      <button className="w-[70px] h-[70px] border-radius: [50px] what">
        <a className='hide-type'  target="_blank" href="https://api.whatsapp.com/send?phone=3006406246&text=Hola deseo conocer los productos de la tienda !!!">
          what
        </a>
      </button>
    </>
  );
}

export default App;
