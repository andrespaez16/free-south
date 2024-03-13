import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="pt-10" id="About">
      <div className="w-full text-white text-white-new h-[530px]">
        <div className="max-w-[1240px] mx-auto grid flex-auto lg:grid-cols-3 mt-[20px]">
          <div className="lg:col-span-2">
            <h1 className="md:text-4xl mt-[40px] sm:text-3xl mt-[0] text-2xl font-bold py-2">
              ¿Deseas ser parte de la familia Free South y emprender con
              nosotros?
            </h1>
            {/* <p>Escríbenos </p> */}
          </div>
          <div className="m-4 mt-14">
            <div className="flex flex-col sm:flex-col items-center justify-between w-full">
              <input
                className="p-3 flex w-full rounded-md text-black  mb-2"
                type="text"
                placeholder="Escribe tu nombre"
              />
              <input
                className="p-3 flex w-full rounded-md text-black  mb-2"
                type="text"
                name="empresa"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="Escribe tu empresa"
              />
              <input
                className="p-3 flex w-full rounded-md text-black  mb-2"
                type="text"
                name="ciudad"
                placeholder="Escribe tu ciudad"
              />
              <input
                className="p-3 flex w-full rounded-md text-black  mb-2"
                type="tel"
                name="phone"
                placeholder="Escribe tu number"
              />
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
                  Escríbenos
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
