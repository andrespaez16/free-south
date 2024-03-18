import React from "react";
import group from "../assets/ropa.png";
import airport from "../assets/accesorios.png";
import privateCar from "../assets/coleccion.jpg";
import disney from "../assets/oversize2.jpg";
import keys from "../assets/calzado.png";
import CountUp from "react-countup";
import "./analytics.css";

const Analytics = () => {
  return (
    <div className="w-full bg-white pt-3 px-4 text-white-map" id="Analytics">
      <div
        className="mx-auto grid md:grid-cols-2 mb-[50px]"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="flex-col text-center w-full">
          <h1 className="md:text-3xl sm:text-2xl text-center text-2xl font-bold  mb-6">
            Experiencia en el mercado
          </h1>
          <div className="w-[100px] h-[100px] bg-[#00EA23] rounded-full inline-block">
            <span className="text-center text-2xl font-bold  mt-[20px] relative top-[35%]">
              <CountUp end={8} duration={7} />
            </span>
          </div>
        </div>
        <div className="flex-col text-center w-full">
          <h1 className="md:text-3xl sm:text-2xl text-center text-2xl font-bold  mb-6">
            Clientes satifechos
          </h1>
          <div className="w-[100px] h-[100px] bg-[#00EA23] rounded-full inline-block">
            <span className="text-center text-2xl font-bold  mt-[20px] relative top-[35%]">
              <CountUp end={1500} duration={7} />
            </span>
          </div>
        </div>
      </div>
      <h1 className="md:text-2xl sm:text-3xl text-center text-2xl font-bold pb-12 text-[#00EA23]">
        NUESTROS PRODUCTOS
      </h1>
      <div className="display flex  sm: flex-col">
        <div
          className="max-w-[540px] mx-auto grid md:grid-col flex flex-col"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <img
            className="w-[540px] mx-auto my-4 rounded-lg sm: h-[280px] md:h-[340px]"
            src={airport}
            alt="/"
          />
          <div className="flex flex-col justify-center">
            <button className="bg-black text-[#00EA23] w-[200px] rounded-full font-medium my-6 mx-auto md:mx-0 py-3">
              <a href="https://api.whatsapp.com/send?phone=3006406246&text=Hola deseo conocer los productos de la tienda !!!">
                Accesorios
              </a>
            </button>
          </div>
        </div>
        <div
          className="max-w-[540px] mx-auto grid md:grid-col"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <img
            className="w-[550px]  mx-auto my-4 rounded-lg sm: h-[280px] md:h-[340px]"
            src={group}
            alt="/"
          />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold "></p>

            <button className="bg-black text-[#00EA23]  w-[200px] rounded-full font-medium my-6 mx-auto md:mx-0 py-3">
              <a href="https://drive.google.com/drive/folders/1-RRHu6qCf7Bw1-9kAIRhCvr_z-DbVuSQ">
                Ropa
              </a>
            </button>
          </div>
        </div>
        <div
          className="max-w-[540px] mx-auto grid md:grid-col"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <img
            className="w-[550px]  mx-auto my-4 rounded-lg sm: h-[280px] md:h-[340px]"
            src={keys}
            alt="/"
          />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold "></p>

            <button className="bg-black text-[#00EA23]  w-[200px] rounded-full font-medium my-6 mx-auto md:mx-0 py-3">
              <a href="https://drive.google.com/drive/folders/1-RRHu6qCf7Bw1-9kAIRhCvr_z-DbVuSQ">
                Calzado
              </a>
            </button>
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default Analytics;
