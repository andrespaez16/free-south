import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="pt-10" id="About">
      <div className="w-full text-white text-white-new h-[530px] text-center">
        <div className="max-w-[1240px] mx-auto grid flex-auto lg:grid-cols-3 mt-[20px]">
          <div className="lg:col-span-2">
            <p>
              {" "}
              ¿Deseas ser parte de la familia Free South y emprender con
              nosotros?
            </p>
            <h1 className=" text-[#00EA23] md:text-2xl mt-[40px] sm:text-3xl mt-[0] text-2xl font-bold py-2">
              ESCRIBENOS
            </h1>
          </div>
          <div className="m-4 mt-14">
            <div className="flex flex-col sm:flex-col items-center justify-between w-full">
              <input
                className="p-3 flex w-full rounded-md text-black  mb-2"
                type="text"
                placeholder="Nombre"
              />
              <input
                className="p-3 flex w-full rounded-md text-black  mb-2"
                type="text"
                name="empresa"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="Empresa"
              />
              <input
                className="p-3 flex w-full rounded-md text-black  mb-2"
                type="text"
                name="Ciudad"
                placeholder="Escribe tu ciudad"
              />
              <input
                className="p-3 flex w-full rounded-md text-black  mb-2"
                type="tel"
                name="phone"
                placeholder="Celular"
              />
              <input
                className="p-3 flex w-full rounded-md text-black"
                type="email"
                placeholder="Email"
              />
              <button className="text-black bg-[#00EA23] rounded-full font-medium w-[200px] ml-4 my-6 px-6 py-3">
                <a
                  href="mailto:freesouthmedellin@gmail.com?subject=Hola necesito hacer una cotizacion:"
                  className=""
                >
                  Enviar
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
