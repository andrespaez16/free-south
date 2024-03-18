import React from "react";
import "./info.css";

const Info = () => {
  return (
    <div className="bg-black" id="About">
      <div className="w-full text-white info-banner h-[330px] text-center">
        <div className="max-w-[1240px] mx-auto grid flex-auto">
          <div className="lg:col-span-2">
          <h1 className="text-center mt-[40px] font-bold py-2">
             NOSOTROS
            </h1>
            <h2 className=" text-[#00EA23]  font-bold py-2">
              TU TIENDA URBANA DEL SUR DE LA CIUDAD
            </h2>
            <p  className="p-[20px]">
              Almacen de ropa & accesorios unisex donde encontrarás productos de
              excelente calidad y los mejores precios al por mayor y detal con
              envios a todo el pais (Colombia).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
