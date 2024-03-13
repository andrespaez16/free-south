import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import "./hero.css";
import logoFree from "../logofree.png";

const Footer = () => {
  return (
    <div className="mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#1f2937] text-[white]">
      <div>
        {" "}
        <img
          className="h-16 image-logo-footer"
          src={logoFree}
          alt="Your Company"
        />
        {/* <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          SOMOS FREE SOUTH
        </h1> */}
        <p className="py-4">
          Almacén de ropa y accesorios unisex, donde encontrarás gran variedad
          de productos con ventas al por mayor y al detal.{" "}
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex grid md:grid-cols-3 justify-between mt-6">
        <div>
          <h6 className="font-medium text-[white] font-bold">Lo que ofrecemos</h6>
          <ul>
            <li className="py-2 text-sm">Ropa</li>
            <li className="py-2 text-sm">Accesorios</li>
            <li className="py-2 text-sm">Calzado</li>
          </ul>
        </div>
        <div>
          <h6 className="font-mediumtext-[white] font-bold">Contacto</h6>
          <ul>
            <li className="py-2 text-sm">WhatsApp:</li>
            <li className="py-2 text-sm">3006406246</li>
            <li className="py-2 text-sm">3013994254</li>
            <li className="py-2 text-sm">3042932441</li>
            <li className="py-2 text-sm">3042918396</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[white] font-bold">Empresa</h6>
          <ul>
            <li className="py-2 text-sm">7 años de experiencia.</li>
            <li className="py-2 text-sm">Itagui - San Jose</li>
            <li className="py-2 text-sm">
              Calle 36A#40-51 Barrio La Independencia
            </li>
            <li className="py-2 text-sm">freesouthmedellin@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
