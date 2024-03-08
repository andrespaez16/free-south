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
    </>
  );
}

export default App;
