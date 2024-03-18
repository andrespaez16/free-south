import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTiktok
} from "react-icons/fa";
import "./hero.css";

const Footer = () => {
  return (
    <div className="mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#040404] text-[white]">
      <div>
        {" "}
        {/* <img
          className="h-16 image-logo-footer"
          src={logoFree}
          alt="Your Company"
        /> */}
        {/* <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          SOMOS FREE SOUTH
        </h1> */}
        <p className="py-4">
          POLÍTICAS Y ENVÍOS CAMBIOS, DEVOLUCIONES Y GARANTÍAS
        </p>
        <div className="flex justify-between md:w-[75%] my-6 text-[#00EA23]">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTiktok size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex grid md:grid-cols-3 justify-between mt-6">
        <div>
          <h6 className="font-medium text-[white] font-bold">
            Lo que ofrecemos
          </h6>
          <ul>
            <li className="py-0 text-sm">Ropa</li>
            <li className="py-0 text-sm">Accesorios</li>
            <li className="py-0 text-sm">Calzado</li>
          </ul>
        </div>
        <div>
          <h6 className="font-mediumtext-[white] font-bold  mt-2">
            Contáctanos
          </h6>
          <ul>
            <li className="py-2 text-sm  text-[white]">WhatsApp:</li>
            <li className="py-0 text-sm">3006406246</li>
            <li className="py-0 text-sm">3013994254</li>
            <li className="py-0 text-sm">3042932441</li>
            <li className="py-0 text-sm">3042918396</li>
            <li className="py-0 text-sm"></li>
            <li className="py-0 text-sm  mt-2">
              {" "}
              <span className=" font-bold  text-[white]  mt-2">Email:</span>
              freesouthmedellin@gmail.com
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[white] font-bold mt-2">Visítanos</h6>
          <ul>
            <li className="py-2 text-sm">Calle 36A #40-51.</li>
            <li className="py-2 text-sm">La Independencia - Itagüí</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
