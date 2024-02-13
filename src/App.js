import React from "react";
import Navbar from "./components/navBar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Newsletter from './components/Newsletter';

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
