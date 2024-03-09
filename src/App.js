import React from "react";
import Navbar from "./components/navBar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Newsletter from './components/Newsletter';
import Analytics from './components/cards';
import Carrusel from './components/carrusel';

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Carrusel/>
      <Analytics />
      <Newsletter />
      <Footer />
      <button className="w-[100px] h-[100px] border-radius: [50px] what">
        <a className='hide-type' href="https://api.whatsapp.com/send?phone=13473197413&text=Hello I want to make a reservation!!">
          what
        </a>
      </button>
    </>
  );
}

export default App;
