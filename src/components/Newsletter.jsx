import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="pt-10" id="About">
      <div className="w-full pt-16 text-white text-white-new h-[500px]">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 mt-[60px]">
          <div className="lg:col-span-2 my-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Somos una empresa con gran variedad de productos con ventas al por
              mayor y al detal.
            </h1>
            <p>Somos la tienda lider urbana del sur de Medellin</p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                className="p-3 flex w-full rounded-md text-black"
                type="email"
                placeholder="Escribe tu email"
              />
              <button className="bg-black text-[#00EA23] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
                <a
                  href="mailto:freesouthmedellin@gmail.com?subject=Hola necesito hacer una cotizacion:"
                  className=""
                >
                  Contactanos
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
