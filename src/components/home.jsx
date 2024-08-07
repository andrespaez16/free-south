import React, { useContext, useEffect, useRef, useState } from "react";

import Hero from "./hero";
import Footer from "./footer";
import Newsletter from "./Newsletter";
import Analytics from "./cards";
import Carrusel from "./carrusel";
import Info from "./info";
import "../../src/App.css";
function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api-freesouth.onrender.com/api/products?size=30&categoryId=3"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((rejected) => {
        console.log(rejected);
      });
  }, []);

  return (
    <>
      <Hero />
      <Info />
      <Analytics />
      <Carrusel />
      <Newsletter />
      <button className="w-[70px] h-[70px] border-radius: [50px] what">
        <a
          className="hide-type"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=3006406246&text=Hola deseo conocer los productos de la tienda !!!"
        >
          what
        </a>
      </button>
    </>
  );
}

export default Home;
