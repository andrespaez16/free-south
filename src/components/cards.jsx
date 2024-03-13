import React from "react";
import group from "../assets/gafas-stock.jpg";
import airport from "../assets/gorras.jpg";
import privateCar from "../assets/coleccion.jpg";
import disney from "../assets/oversize2.jpg";
import keys from "../assets/accesorios.webp";
import CountUp from "react-countup";
import "./analytics.css";

const Analytics = () => {
  return (
    <div className="w-full bg-white pt-3 px-4 text-white-map" id="Analytics">
      <h1
        className="md:text-4xl sm:text-3xl text-center text-2xl font-bold 
       text-decoration-line: underline  pb-12
       text-[#00EA23]
      "
      >
        Nuestros Logros
      </h1>
      <div
        className="mx-auto grid md:grid-cols-3 mb-[50px]"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className=" flex flex-col text-center">
          {/* <span className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-2 text-[#00df9a]">
            <FaMapMarked />
          </span> */}
          <span className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-6 ">
            <CountUp end={1500} duration={7} />
          </span>
          <h1 className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-6 text-[#00EA23]">
            Clientes satifechos
          </h1>
        </div>
        <div className=" flex flex-col">
          {/* <span className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-2 text-[#00df9a]">
            <FaMapMarked />
          </span> */}
          <span className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-6">
            <CountUp end={8} duration={8} />
          </span>
          <h1 className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-6 text-[#00EA23]">
            Años de experiencia en el mercado
          </h1>
        </div>
        <div className=" flex flex-col">
          {/* <span className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-2 text-[#00df9a]">
            <FaMapMarked />
          </span> */}
          <span className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-6 ">
            <CountUp end={4500} duration={7} />
          </span>
          <h1 className="md:text-4xl sm:text-3xl text-center text-2xl font-bold  mb-6 text-[#00EA23]">
            Clientes a nivel nacional
          </h1>
        </div>
      </div>
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <img
          className="w-[550px] mx-auto my-4 rounded-lg sm: h-[250px] md:h-[335px]"
          src={airport}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#00EA23] font-bold">
            Gorras
          </h1>
          <p>
            Las marcas mas exclusivas de gorras y estilos unicos en nuestra
            tienda.
          </p>
          <button className="bg-black text-[#00EA23] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            <a  href="https://api.whatsapp.com/send?phone=3006406246&text=Hola deseo conocer los productos de la tienda !!!">
              Descarga catalogo
            </a>
          </button>
        </div>
      </div>
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="flex flex-col justify-center">
          <p className="text-[#00EA23] font-bold">
            {/* {t("services.black_car")} */}
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#00EA23] font-bold">
            Relojes
          </h1>
          <p>
            Relojoria exclusiva de las marcas mas reconocidas de excelente
            calidad
          </p>
          <button className="bg-black text-[#00EA23] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            <a href="https://drive.google.com/drive/folders/1s5kuSPFv4j8IPHv2os_X42fO0ry5zhT0">
              Descarga catalogo
            </a>
          </button>
        </div>
        <img
          className="w-[530px] mx-auto my-4 rounded-lg sm: h-[250px] md:h-[335px]"
          src={privateCar}
          alt="/"
        />
      </div>
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <img
          className="w-[550px]  mx-auto my-4 rounded-lg sm: h-[250px] md:h-[335px]"
          src={group}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold "></p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold  text-[#00EA23]  py-2">
            Gafas
          </h1>
          <p>
            {" "}
            Las marcas reconocidas de gafas en el mercado las encuentras aqui
          </p>
          <button className="bg-black text-[#00EA23]  w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            <a href="https://drive.google.com/drive/folders/1-RRHu6qCf7Bw1-9kAIRhCvr_z-DbVuSQ">
              Descarga catalogo
            </a>
          </button>
        </div>
      </div>
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">
            {/* {t("services.disney_car")} */}
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#00EA23]">
            Camisetas OverSize
          </h1>
          <p>
            Aqui encuentras las camisetas de las marcas mas reconocidas y
            famosas del mundo en la mejor calidad disponible del mercado
          </p>
          <button className="bg-black text-[#00EA23] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            <a  href="https://api.whatsapp.com/send?phone=3006406246&text=Hola deseo conocer los productos de la tienda !!!">
              Descarga catalogo
            </a>
          </button>
        </div>
        <img
          className="w-[530px] mx-auto my-4 rounded-lg sm: h-[250px] md:h-[335px]"
          src={disney}
          alt="/"
        />
      </div>
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <img
          className="w-[550px] mx-auto my-4 rounded-lg sm:h-[250px] md:h-[335px]"
          src={keys}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00EA23] font-bold ">
            {/* {t("services.key_car")} */}
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#00EA23]">
            Accesorios
          </h1>
          <p>
            Te ofrecemos todos los accesorios de las marcas en tendencia y
            famosas del mundo
          </p>
          <button className="bg-black text-[#00EA23] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            <a href="https://api.whatsapp.com/send?phone=3006406246&text=Hola deseo conocer los productos de la tienda !!!">
              Descarga catalogo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
